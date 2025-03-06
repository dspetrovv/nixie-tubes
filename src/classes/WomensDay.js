import Script from '@/classes/ScriptClass';
import RandomCharacterTube from '@/classes/tubes/RandomCharacterTube';

class WomensDay extends Script {
  constructor(buttonElement, wrapperSelector) {
    super(buttonElement, wrapperSelector);
  }

  #delay = 300;

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

    this.#delay = this.#delay * 8 + 500;
    this.#onReverse();

    this.#delay = this.#delay + 300 * 8;
    this.#addSymbols();

    this.#delay = this.#delay + 300 * 8;
    this.#addFlowers();

    this.#delay = this.#delay + 300 * 8;
    this.#flickFlowers();

    this.#delay = this.#delay + 300 * 8;
    this.#showCongratulations();

    this.#delay = this.#delay + 1 * 8;
    this.#showLove();
  }

  createTubes() {
    if (this.tubes.length) {
      return;
    }

    for (let i = 0; i < 8; i++) {
      this.tubes.push(new RandomCharacterTube());
    }

    this.tubes.forEach((tube) => {
      tube.mount(this.wrapperSelector);
    });
  }

  #on() {
    this.tubes.forEach((tube, idx) => {
      setTimeout(() => {
        tube.on();
        setTimeout(() => {
          tube.off();
        });
      }, this.#delay * idx);
    });
  }

  #onReverse() {
    let j = 8;
    for (let i = 0; i < 8; i++) {
      setTimeout(
        () => {
          j--;
          this.tubes[j].on();
          setTimeout(() => {
            this.tubes[j].off();
          });
        },
        this.#delay + 300 * i,
      );
    }
  }

  #addSymbols() {
    this.tubes.forEach((tube, idx) => {
      setTimeout(
        () => {
          // this.tubes[i].addChar('⚘', true);
          tube.addChars("ADEHIJKLMNOPTUVWXYZ0123789!%&*+_'=<>");
          tube.startRandom([300]);
        },
        this.#delay + 200 * idx,
      );
    });
  }

  #addFlowers() {
    setTimeout(() => {
      this.tubes[3].removeActiveClass();
      this.tubes[3].addChar('♡');
      this.tubes[3].addChar('✿');
      this.tubes[3].addChar('⚘', true);
      this.tubes[3].stopTimer();
    }, this.#delay);

    this.#delay += 300;
    setTimeout(() => {
      this.tubes[6].removeActiveClass();
      this.tubes[6].addChar('♡');
      this.tubes[6].addChar('✿');
      this.tubes[6].addChar('⚘', true);
      this.tubes[6].stopTimer();
    }, this.#delay);

    this.#delay += 300;
    setTimeout(() => {
      this.tubes[4].removeActiveClass();
      this.tubes[4].addChar('♡');
      this.tubes[4].addChar('✿');
      this.tubes[4].addChar('⚘', true);
      this.tubes[4].stopTimer();
    }, this.#delay);

    this.#delay += 300;
    setTimeout(() => {
      this.tubes[1].removeActiveClass();
      this.tubes[1].addChar('♡');
      this.tubes[1].addChar('✿');
      this.tubes[1].addChar('⚘', true);
      this.tubes[1].stopTimer();
    }, this.#delay);

    this.#delay += 300;
    setTimeout(() => {
      this.tubes[0].removeActiveClass();
      this.tubes[0].addChar('♡');
      this.tubes[0].addChar('✿');
      this.tubes[0].addChar('⚘', true);
      this.tubes[0].stopTimer();
    }, this.#delay);

    this.#delay += 300;
    setTimeout(() => {
      this.tubes[5].removeActiveClass();
      this.tubes[5].addChar('♡');
      this.tubes[5].addChar('✿');
      this.tubes[5].addChar('⚘', true);
      this.tubes[5].stopTimer();
    }, this.#delay);

    this.#delay += 300;
    setTimeout(() => {
      this.tubes[7].removeActiveClass();
      this.tubes[7].addChar('♡');
      this.tubes[7].addChar('✿');
      this.tubes[7].addChar('⚘', true);
      this.tubes[7].stopTimer();
    }, this.#delay);

    this.#delay += 300;
    setTimeout(() => {
      this.tubes[2].removeActiveClass();
      this.tubes[2].addChar('♡');
      this.tubes[2].addChar('✿');
      this.tubes[2].addChar('⚘', true);
      this.tubes[2].stopTimer();
    }, this.#delay);
  }

  #flickFlowers() {
    const symbols = ['⚘', '✿', '♡'];
    for (let i = 0; i < 3; i++) {
      this.#delay += 300;
      setTimeout(() => {
        for (let j = 0; j < 8; j++) {
          this.tubes[j].removeActiveClass();
          this.tubes[j].setActive('');
        }
      }, this.#delay);

      this.#delay += 500;
      setTimeout(() => {
        for (let j = 0; j < 8; j++) {
          this.tubes[j].removeActiveClass();
          this.tubes[j].setActive(symbols[i]); //⚘✿
        }
      }, this.#delay);
    }

    this.#delay += 400;
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        this.tubes[i].clearChars();
        this.tubes[i].addChars("HAPYWOMENSD'");
      }
    }, this.#delay);
  }

  #showCongratulations() {
    const members = ['HAPPY', "WOMEN'S", 'DAY'];
    let j = 1;
    for (const member of members) {
      setTimeout(() => {
        for (let i = 0; i < member.length; i++) {
          setTimeout(() => {
            this.tubes[i].setActive(member[i]);
          }, 300 * i);
        }
      }, this.#delay);
      this.#delay += 500 * member.length;

      this.#delay += !!(j % 3) ? 300 : 1000;

      setTimeout(() => {
        for (let i = 0; i < member.length; i++) {
          setTimeout(() => {
            this.tubes[i].removeActiveClass();
          }, 300 * i);
        }
      }, this.#delay);
      this.#delay += 300 * 8;
      j++;
    }
  }

  #showLove() {
    setTimeout(() => {
      this.tubes[3].off();
      this.tubes[7].off();
    }, this.#delay);

    this.#delay += 200;
    setTimeout(() => {
      this.tubes[0].addChar('I', true);
      this.tubes[1].addChar('♡', true);
      this.tubes[2].addChar('U', true);

      this.tubes[4].addChar('A', true);
      this.tubes[5].addChar('L', true);
      this.tubes[6].addChar('L', true);
    }, this.#delay);
  }
}

export default WomensDay;
