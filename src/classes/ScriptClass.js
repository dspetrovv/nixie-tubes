import Tube from '@/classes/tubes/TubeClass';

class Script {
  constructor(buttonElement, wrapperSelector = '#app') {
    this.button = buttonElement;
    this.wrapperSelector = wrapperSelector;
  }

  tubes = [];
  wrapperSelector = '';
  isActive = false;
  button = null;

  /**
   * This method turns the mode on/off
   */
  toggle() {
    if (this.isActive) {
      this.stop();
      this.isActive = false;
    } else {
      this.start();
      this.isActive = true;
    }
  }

  /**
   * This method removes the tubes
   */
  remove() {
    this.stop();
    this.tubes.forEach((tube) => {
      tube.remove();
    });
  }

  /**
   * This method turns off the tubes and removes characters
   */
  stop() {
    this.button.classList.remove('stand__button_active');
    this.tubes.forEach((tube) => {
      tube.off();
      tube.clearChars();
    });
  }

  /**
   * This method turns on the tubes
   */
  start() {
    this.button.classList.add('stand__button_active');
    this.createTubes();
    this.tubes.forEach((tube) => {
      tube.on();
    });
  }

  /**
   * This method creates tubes
   */
  createTubes(count = 8) {
    if (this.tubes.length) {
      return;
    }

    for (let i = 0; i < count; i++) {
      this.tubes.push(new Tube());
    }

    this.tubes.forEach((tube) => {
      tube.mount(this.wrapperSelector);
    });
  }
}

export default Script;
