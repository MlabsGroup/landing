import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { company } from '../src/i18n/content';

const PAGES = ['/es/', '/en/', '/es/legal/', '/en/legal/'];
const HOMES = ['/es/', '/en/'];

// Recoge errores de consola, excepciones y peticiones fallidas durante la carga.
const watchErrors = (page: Page) => {
  const errors: string[] = [];
  page.on('console', (msg) => msg.type() === 'error' && errors.push(`console: ${msg.text()}`));
  page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
  page.on('requestfailed', (req) => errors.push(`requestfailed: ${req.url()} ${req.failure()?.errorText}`));
  page.on('response', (res) => res.status() >= 400 && errors.push(`http ${res.status()}: ${res.url()}`));
  return errors;
};

test.describe('Carga y datos de empresa', () => {
  for (const path of PAGES) {
    test(`${path} carga sin errores y muestra los datos legales`, async ({ page }) => {
      const errors = watchErrors(page);
      const res = await page.goto(path, { waitUntil: 'networkidle' });
      expect(res?.status()).toBe(200);
      expect(errors).toEqual([]);

      const footer = page.locator('footer');
      await expect(footer).toContainText(company.legalName);
      await expect(footer).toContainText(company.street);
      await expect(footer).toContainText(`${company.postalCode} ${company.city}`);
      await expect(footer.locator(`a[href="${company.phoneHref}"]`)).toHaveText(company.phone);
      await expect(footer.locator(`a[href="mailto:${company.email}"]`)).toHaveText(company.email);
    });
  }

  test('JSON-LD de organización con los datos correctos', async ({ page }) => {
    await page.goto('/es/');
    const raw = await page.locator('script[type="application/ld+json"]').textContent();
    const data = JSON.parse(raw!);
    expect(data).toMatchObject({
      '@type': 'Organization',
      legalName: company.legalName,
      email: company.email,
      telephone: company.phone,
      address: { streetAddress: company.street, postalCode: company.postalCode, addressLocality: company.city },
    });
  });

  test('la página legal contiene aviso legal y privacidad', async ({ page }) => {
    await page.goto('/es/legal/');
    await expect(page.locator('#aviso-legal dl')).toContainText(company.legalName);
    await expect(page.locator('#aviso-legal dl')).toContainText(company.phone);
    await expect(page.locator('#privacidad')).toContainText('Agencia Española de Protección de Datos');
  });

  test('la raíz redirige a /es/', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/es\/$/);
  });
});

test.describe('Navegación', () => {
  for (const path of PAGES) {
    test(`${path}: todos los enlaces internos apuntan a destinos existentes`, async ({ page, request }) => {
      await page.goto(path);
      const hrefs = await page.locator('a[href]').evaluateAll((as) => as.map((a) => a.getAttribute('href')!));
      expect(hrefs.filter((h) => h === '#' || h === '')).toEqual([]);

      for (const href of new Set(hrefs)) {
        if (/^(mailto|tel):/.test(href)) continue;
        const url = new URL(href, page.url());
        if (url.origin !== new URL(page.url()).origin) continue;
        const res = await request.get(url.pathname);
        expect(res.status(), `${href}`).toBe(200);
        if (url.hash) {
          const html = await res.text();
          expect(html, `ancla ${href}`).toContain(`id="${url.hash.slice(1)}"`);
        }
      }
    });
  }

  test('el selector de idioma mantiene la página actual', async ({ page }) => {
    await page.goto('/es/legal/');
    await page.getByRole('link', { name: 'EN', exact: true }).click();
    await expect(page).toHaveURL(/\/en\/legal\/$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Legal notice/i);
  });
});

test.describe('Portfolio', () => {
  test('los filtros muestran las ventures correctas', async ({ page }) => {
    await page.goto('/es/');
    const cards = page.locator('.venture');
    const visible = page.locator('.venture:visible');
    await expect(cards).toHaveCount(6);

    await page.getByRole('button', { name: 'En validación' }).click();
    await expect(visible).toHaveCount(2);
    await expect(page.getByRole('button', { name: 'En validación' })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('button', { name: 'Todo' })).toHaveAttribute('aria-pressed', 'false');

    await page.getByRole('button', { name: 'Ventures activas' }).click();
    await expect(visible).toHaveCount(4);

    await page.getByRole('button', { name: 'Todo' }).click();
    await expect(visible).toHaveCount(6);
  });
});

test.describe('Formulario de contacto', () => {
  test('las pestañas cambian los textos del formulario', async ({ page }) => {
    await page.goto('/es/');
    const form = page.locator('[data-form]');
    await expect(form.locator('[data-slot="title"]')).toHaveText('Recibe el investor deck');

    await page.getByRole('tab', { name: 'Vendo mi software' }).click();
    await expect(page.getByRole('tab', { name: 'Vendo mi software' })).toHaveAttribute('aria-selected', 'true');
    await expect(page.getByRole('tab', { name: 'Inversor' })).toHaveAttribute('aria-selected', 'false');
    await expect(form.locator('[data-slot="title"]')).toHaveText('Adquisición de software');
    await expect(form.locator('[data-slot="cta"]')).toHaveText('Iniciar conversación');
  });

  test('los CTA de la página preseleccionan la pestaña y llevan al formulario', async ({ page }) => {
    await page.goto('/es/');
    await page.locator('.door[data-tab="founder"]').click();
    await expect(page).toHaveURL(/#formulario$/);
    await expect(page.getByRole('tab', { name: 'Emprendedor' })).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('[data-slot="title"]')).toHaveText('Presenta tu proyecto');
    await expect(page.locator('#formulario')).toBeInViewport();

    await page.locator('.acq a[data-tab="acquisition"]').click();
    await expect(page.locator('[data-slot="title"]')).toHaveText('Adquisición de software');
  });

  test('no se envía con campos obligatorios vacíos', async ({ page }) => {
    await page.goto('/es/');
    await page.locator('[data-form] button[type="submit"]').click();
    await expect(page.locator('[data-sent]')).toBeHidden();
    const invalid = await page.locator('[data-form] :invalid').count();
    expect(invalid).toBeGreaterThan(0);
  });

  test('genera un mailto con todos los datos y muestra la confirmación', async ({ page }) => {
    await page.goto('/es/');
    await page.getByRole('tab', { name: 'Ventas' }).click();
    await page.getByLabel('Nombre').fill('Ana Prueba');
    await page.getByLabel('Email', { exact: true }).fill('ana@example.com');
    await page.getByLabel('Empresa o perfil').fill('Agencia Test');
    await page.getByLabel('LinkedIn o web').fill('linkedin.com/in/ana');
    await page.getByLabel('¿A qué clientes vendes').fill('Pymes en México');
    await page.getByRole('button', { name: 'Quiero hablar de ventas' }).click();

    await expect(page.locator('[data-sent]')).toBeVisible();
    await expect(page.locator('[data-form]')).toBeHidden();

    const mailto = await page.locator('[data-form]').getAttribute('data-mailto');
    expect(mailto).toMatch(new RegExp(`^mailto:${company.email}\\?`));
    const params = new URLSearchParams(mailto!.split('?')[1]);
    expect(params.get('subject')).toBe('MLABS · Vende con MLABS');
    const body = params.get('body')!;
    for (const value of ['Ana Prueba', 'ana@example.com', 'Agencia Test', 'linkedin.com/in/ana', 'Pymes en México']) {
      expect(body).toContain(value);
    }

    await page.getByRole('button', { name: 'Escribir otro mensaje' }).click();
    await expect(page.locator('[data-form]')).toBeVisible();
    await expect(page.getByLabel('Nombre')).toHaveValue('');
    await expect(page.getByRole('tab', { name: 'Ventas' })).toHaveAttribute('aria-selected', 'true');
  });

  test('el formulario funciona en inglés', async ({ page }) => {
    await page.goto('/en/');
    await page.getByRole('tab', { name: 'Founder' }).click();
    await expect(page.locator('[data-slot="title"]')).toHaveText('Pitch your project');
  });
});

test.describe('Layout responsive', () => {
  const WIDTHS = [320, 360, 375, 414, 600, 768, 900, 1024, 1100, 1180, 1280, 1366, 1440, 1600, 1920];

  for (const path of PAGES) {
    test(`${path}: sin desbordes ni solapes en ${WIDTHS.length} anchos`, async ({ page }, info) => {
      test.skip(info.project.name !== 'desktop', 'recorre todos los anchos una sola vez');
      await page.goto(path, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);

      for (const width of WIDTHS) {
        await page.setViewportSize({ width, height: 900 });
        const problems = await page.evaluate(() => {
          const out: string[] = [];
          const doc = document.documentElement;
          if (doc.scrollWidth > doc.clientWidth) out.push(`scroll horizontal: ${doc.scrollWidth} > ${doc.clientWidth}`);

          // Texto que se sale de su caja (el caso de "ESPECTADORES." pisando el párrafo)
          const textEls = document.querySelectorAll<HTMLElement>(
            'h1, h2, h3, p, a, .door-verb, .stat-value, .step-title, .member-name, .hero-row-name, .footer-word',
          );
          textEls.forEach((el) => {
            if (el.offsetParent === null) return;
            if (el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).display !== 'inline') {
              out.push(`desborda: <${el.tagName.toLowerCase()}> "${el.textContent!.trim().slice(0, 40)}" ${el.scrollWidth}>${el.clientWidth}`);
            }
          });

          // Columnas hermanas de los bloques flex que no deben pisarse
          document.querySelectorAll<HTMLElement>('.split, .hero-grid, .block-head, .core .wrap, .form-section .wrap').forEach((row) => {
            const kids = [...row.children] as HTMLElement[];
            for (let i = 0; i < kids.length; i++) {
              for (let j = i + 1; j < kids.length; j++) {
                const a = kids[i].getBoundingClientRect();
                const b = kids[j].getBoundingClientRect();
                const overlap = a.left < b.right - 1 && b.left < a.right - 1 && a.top < b.bottom - 1 && b.top < a.bottom - 1;
                if (overlap) out.push(`solape en .${row.className.split(' ').join('.')}: hijo ${i} y ${j}`);
              }
            }
          });
          return out;
        });
        expect(problems, `ancho ${width}px`).toEqual([]);
      }
    });
  }
});

test.describe('Accesibilidad (axe)', () => {
  for (const path of PAGES) {
    test(`${path} sin infracciones serias o críticas`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' });
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
      const serious = results.violations
        .filter((v) => v.impact === 'serious' || v.impact === 'critical')
        .map((v) => `${v.id}: ${v.help} → ${v.nodes.map((n) => n.target.join(' ')).slice(0, 5).join(' | ')}`);
      expect(serious).toEqual([]);
    });
  }
});

test.describe('Capturas para revisión visual', () => {
  for (const path of HOMES) {
    test(`captura ${path}`, async ({ page }, info) => {
      await page.goto(path, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const name = `${info.project.name}${path.replace(/\//g, '_')}.png`;
      await page.screenshot({ path: `test-results/screens/${name}`, fullPage: true });
    });
  }
});
