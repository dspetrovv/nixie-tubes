import Script from '@/classes/ScriptClass';
import RandomCharacterTube from '@/classes/tubes/RandomCharacterTube';

// This class is made for my girlfriend. You can use it if you want to surprise yours.
class Love extends Script {
  constructor(buttonElement, wrapperSelector) {
    super(buttonElement, wrapperSelector);
  }

  #delay = 500;

  stop() {
    this.button.classList.remove('stand__button_active');
    this.tubes.forEach((tube) => {
      tube.off();
      tube.clearChars();
    });

    let lastTimeoutId = window.setTimeout(() => {});
    while (lastTimeoutId--) {
      window.clearTimeout(lastTimeoutId);
    }
    this.#delay = 500;
  }

  start() {
    this.button.classList.add('stand__button_active');
    this.createTubes();

    this.#on();
    this.#delay = this.#delay * 8 + 1000;

    ////
    this.#setChars();
    this.#delay = this.#delay + 600;

    ////
    this.#moveTextLeft();
  }

  createTubes() {
    if (this.tubes.length) {
      return;
    }

    for (let i = 0; i < 8; i++) {
      this.tubes.push(
        new RandomCharacterTube(
          'custom',
          'AEHIJKLMNOPTUVWXYZ0123789!%&*+-_=<>',
        ),
      );
    }

    this.tubes.forEach((tube) => {
      tube.mount(this.wrapperSelector);
    });
  }

  #on() {
    for (let i = 0; i < 8; i++) {
      setTimeout(
        () => {
          this.tubes[i].on();
          this.tubes[i].startRandom([300]);
        },
        this.#delay * (i + 1),
      );
    }
  }

  #setChars() {
    setTimeout(() => {
      this.tubes[3].addChar('♡');
      this.tubes[3].setActiveChar('-');
    }, this.#delay);

    this.#delay += 400;
    setTimeout(() => {
      this.tubes[6].addChar('♡');
      this.tubes[6].setActiveChar('-');
    }, this.#delay);

    this.#delay += 400;
    setTimeout(() => {
      this.tubes[4].addChar('♡');
      this.tubes[4].setActiveChar('-');
    }, this.#delay);

    this.#delay += 400;
    setTimeout(() => {
      this.tubes[1].addChar('♡');
      this.tubes[1].setActiveChar('-');
    }, this.#delay);

    this.#delay += 400;
    setTimeout(() => {
      this.tubes[0].addChar('♡');
      this.tubes[0].setActiveChar('<');
    }, this.#delay);

    this.#delay += 400;
    setTimeout(() => {
      this.tubes[5].addChar('♡');
      this.tubes[5].setActiveChar('-');
    }, this.#delay);

    this.#delay += 400;
    setTimeout(() => {
      this.tubes[7].addChar('♡');
      this.tubes[7].setActiveChar('♡');
    }, this.#delay);

    this.#delay += 400;
    setTimeout(() => {
      this.tubes[2].addChar('♡');
      this.tubes[2].setActiveChar('-');
    }, this.#delay);
  }

  #moveTextLeft() {
    let love = 'ILOVEYOU';

    this.#delay += 500;
    setTimeout(() => {
      let arrows = '';
      this.tubes.forEach((tube) => {
        arrows += tube.getActiveChar();
      });
      love = arrows + love;

      let idx = 0;
      let j = 7;
      let index = 7;
      while (idx < love.length) {
        setTimeout(() => {
          if (j >= 8 && index < love.length) {
            for (let i = 0; i < 7; i++) {
              this.tubes[i].removeActiveClass();
              this.tubes[i].setActive(love[index - 7 + i]);
            }
            this.tubes[7].removeActiveClass();
            j = 7;
          }
          if (index === love.length) {
            return;
          }

          this.tubes[j].setActive(love[index]);
          index++;
          j++;
        }, 300 * idx);
        idx++;
      }
    }, this.#delay);
  }
}

export default Love;
