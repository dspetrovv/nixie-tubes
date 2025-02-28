import RandomCharacterTube from '@/classes/tubes/RandomCharacterTube';
import Script from '@/classes/ScriptClass';

class RandomCharacter extends Script {
  constructor(buttonElement, wrapperSelector = '#app') {
    super(buttonElement, wrapperSelector);
  }

  stop() {
    this.button.classList.remove('stand__button_active');
    this.tubes.forEach((tube) => {
      tube.stopRandom();
    });
  }

  start() {
    this.button.classList.add('stand__button_active');
    this.createTubes();
    this.tubes.forEach((tube) => {
      tube.startRandom();
    });
  }

  createTubes() {
    if (this.tubes.length) {
      return;
    }
    this.tubes.push(new RandomCharacterTube('all'));
    this.tubes.push(new RandomCharacterTube('symbols'));
    this.tubes.push(new RandomCharacterTube('alphabet'));
    this.tubes.push(new RandomCharacterTube('numbers'));

    this.tubes.push(new RandomCharacterTube('all'));
    this.tubes.push(new RandomCharacterTube('symbols'));
    this.tubes.push(new RandomCharacterTube('alphabet'));
    this.tubes.push(new RandomCharacterTube('numbers'));

    this.tubes.forEach((tube) => {
      tube.mount(this.wrapperSelector);
    });
  }
}

export default RandomCharacter;
