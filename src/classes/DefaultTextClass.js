import Tube from '@/classes/tubes/TubeClass';
import Script from '@/classes/ScriptClass';

class DefaultText extends Script {
  constructor(buttonElement, wrapperSelector = '#app', text = '') {
    super(buttonElement, wrapperSelector);
    this.text = text;
  }

  text = ''; // Should be in UpperCase
  #emptyElementsBeforeCount = 0;

  initEmpty(count = 8) {
    for (let i = 0; i < count; i++) {
      this.tubes.push(new Tube());
      this.tubes[i].mount(this.wrapperSelector);
    }
    this.isActive = true;
  }

  start() {
    this.button.classList.add('stand__button_active');
    this.createTubes();
    let tubeIdx = 0;
    let charIdx = 0;
    for (
      let i = this.#emptyElementsBeforeCount;
      i < this.text.length + this.#emptyElementsBeforeCount;
      i++
    ) {
      this.tubes[i].on();
      this.tubes[i].addChar(this.text[charIdx]);
      charIdx++;
      setTimeout(() => {
        this.tubes[i].setActive(this.text[tubeIdx]);
        tubeIdx++;
      }, 670);
    }
  }

  createTubes() {
    if (this.tubes.length) {
      return;
    }

    for (let i = 0; i < this.text.length; i++) {
      this.tubes.push(new Tube());
    }

    for (let i = 0; i < 8 - this.text.length; i++) {
      if (!!((i + 1) % 2)) {
        this.tubes.push(new Tube()); // May be Silver
      } else {
        this.#emptyElementsBeforeCount++;
        this.tubes.unshift(new Tube()); // May be Silver
      }
    }

    this.tubes.forEach((tube) => {
      tube.mount(this.wrapperSelector);
    });
  }
}

export default DefaultText;
