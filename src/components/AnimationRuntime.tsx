import { useEffect } from 'preact/hooks';
import { initGlobalExperience } from '../scripts/global-runtime';
import { initScrollStory } from '../scripts/scroll-story';

const AnimationRuntime = () => {
  useEffect(() => {
    initGlobalExperience();
    initScrollStory();
  }, []);

  return null;
};

export default AnimationRuntime;
