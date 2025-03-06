import Timer from '@/classes/TimerClass.js';
import RandomCharacter from '@/classes/RandomCharacterClass.js';
import DefaultText from '@/classes/DefaultTextClass.js';
import Friends from '@/classes/FriendsClass.js';

// Toggle it with FriendsClass and use on secret button
// import Love from '@/classes/LoveClass.js';
import WomensDay from '@/classes/WomensDay.js';

const app = () => {
  const title = document.getElementById('title');
  const config = {
    attributes: true,
    childList: false,
    subtree: false,
  };
  let prevTarget = null;

  const observeButton = (list) => {
    for (const mutation of list) {
      if (prevTarget === mutation.target) {
        if (mutation.target.classList.value.includes('active')) {
          title.classList.add('title_on');
        } else {
          title.classList.remove('title_on');
        }
      } else {
        title.classList.add('title_on');
        prevTarget = mutation.target;
      }
    }
  };

  let currentMode = '';
  let randomizer = null;
  let timer = null;
  let defaultText = null;
  let secret = null;
  let empty = null;
  const wrapperSelector = '#app';

  const clearAll = () => {
    timer?.remove();
    timer = null;
    randomizer?.remove();
    randomizer = null;
    defaultText?.remove();
    defaultText = null;
    secret?.remove();
    secret = null;
    empty?.remove();
    empty = null;
  };

  const checkMode = (mode) => {
    if (mode === currentMode) {
      return;
    }

    clearAll();

    currentMode = mode;
  };

  // ---------

  const randomButton = document.getElementById('button-random');

  const toggleRandomMode = () => {
    checkMode('random');

    if (!randomizer) {
      randomizer = new RandomCharacter(randomButton, wrapperSelector);
    }
    randomizer.toggle();
  };

  randomButton.addEventListener('click', toggleRandomMode);

  // ---------

  const timeButton = document.getElementById('button-time');

  const toggleTimeMode = () => {
    checkMode('timer');

    if (!timer) {
      timer = new Timer(timeButton, wrapperSelector);
    }
    timer.toggle();
  };

  timeButton.addEventListener('click', toggleTimeMode);

  // ---------

  const onOffButton = document.getElementById('button-on');

  const toggleTubesOn = () => {
    checkMode('on/off');

    if (!defaultText) {
      defaultText = new DefaultText(onOffButton, wrapperSelector, 'HELLO!');
    }
    defaultText.toggle();
  };

  onOffButton.addEventListener('click', toggleTubesOn);

  // ---------

  const secretButton = document.getElementById('button-secret');

  const toggleSecretMode = () => {
    checkMode('secret');

    if (!secret) {
      // Toggle with LoveClass or WomensDay here
      secret = new WomensDay(secretButton, wrapperSelector);
    }
    secret.toggle();
  };

  secretButton.addEventListener('click', toggleSecretMode);

  // ---------

  const init = () => {
    empty = new DefaultText(onOffButton);
    empty.initEmpty();
  };

  // ---------

  const buttonObserver = new MutationObserver(observeButton);

  buttonObserver.observe(randomButton, config);
  buttonObserver.observe(timeButton, config);
  buttonObserver.observe(onOffButton, config);
  buttonObserver.observe(secretButton, config);

  window.onbeforeunload = () => {
    timeButton.removeEventListener('click', toggleTimeMode);
    randomButton.removeEventListener('click', toggleRandomMode);
    onOffButton.removeEventListener('click', toggleTubesOn);
    secretButton.removeEventListener('click', toggleSecretMode);
    buttonObserver.disconnect();
  };

  init();
};

export default app;
