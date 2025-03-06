import Script from '@/classes/ScriptClass';

class Friends extends Script {
  constructor(buttonElement, wrapperSelector = '#app') {
    super(buttonElement, wrapperSelector);
  }

  #delay = 700;
  /**********************************************************************************
   * ⚠️ WARNING ⚠️                                                              *
   * Please do not use it anywhere; this is the safest and most perfect password    *
   * in every way. It is not intended for anyone except a chosen group of people.  *
   **********************************************************************************/
  #truePassword = '[752259]';

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
    this.#delay = 700;
  }

  start() {
    this.button.classList.add('stand__button_active');
    this.createTubes();

    this.#turnLightsOn();
    this.#delay = this.#delay * 8 + 600;

    ////
    this.#setPassword();
    ////
    this.#flickPassword();
    ////
    this.#setWelcomeBack();
    ////
    this.#fillMembers();
    ////
    this.#showIlita();
  }

  #turnLightsOn() {
    const chars = [
      ['[', '_', '_', '_', '_', '_', '_', ']'],
      ['', '*', '*', '*', '*', '*', '*', ''],
      ['', '7', '5', '2', '2', '5', '9', ''],
      ['W', 'E', 'L', 'C', 'O', 'M', 'E', ''],
      ['E', 'L', 'C', 'O', 'M', 'E', '', 'B'],
      ['L', 'C', 'O', 'M', 'E', '', 'B', 'A'],
      ['C', 'O', 'M', 'E', '', 'B', 'A', 'C'],
      ['O', 'M', 'E', '', 'B', 'A', 'C', 'K'],
      ['M', 'E', '', 'B', 'A', 'C', 'K', ','],
      ['E', '', 'B', 'A', 'C', 'K', ',', ''],
      ['', 'B', 'A', 'C', 'K', ',', '', 'D'],
      ['B', 'A', 'C', 'K', ',', '', 'D', 'E'],
      ['A', 'C', 'K', ',', '', 'D', 'E', 'A'],
      ['C', 'K', ',', '', 'D', 'E', 'A', 'D'],
      ['K', ',', '', 'D', 'E', 'A', 'D', ''],
      [',', '', 'D', 'E', 'A', 'D', '', 'I'],
      ['', 'D', 'E', 'A', 'D', '', 'I', 'L'],
      ['D', 'E', 'A', 'D', '', 'I', 'L', 'I'],
      ['E', 'A', 'D', '', 'I', 'L', 'I', 'T'],
      ['A', 'D', '', 'I', 'L', 'I', 'T', 'A'],
      ['V', 'I', 'K', 'I', 'N', 'G', '', ''],
      ['L', 'L', 'I', 'R', 'I', 'K', '', ''],
      ['P', 'E', 'T', 'Y', 'A', '', '', ''],
      ['S', 'T', 'Y', 'O', 'P', 'K', 'A', ''],
      ['I', 'L', 'U', 'X', 'X', 'A', '', ''],
      ['O', 'S', 'Y', 'K', '', '', '', ''],
    ];
    let colIdx = 0;
    for (let i = 0; i < 8; i++) {
      setTimeout(
        () => {
          for (let j = 0; j < chars.length; j++) {
            this.tubes[i].addChar(chars[j][colIdx]);
          }
          colIdx++;
          this.tubes[i].on();
        },
        this.#delay * (i + 1),
      );
    }
  }

  #setPassword() {
    this.#delay += 100;
    const lines = '[______]';
    setTimeout(() => {
      this.tubes[0].setActive(lines[0]);
      this.tubes[7].setActive(lines[7]);
    }, this.#delay);

    setTimeout(() => {
      for (let i = 1; i < 7; i++) {
        setTimeout(() => {
          this.tubes[i].setActive(lines[i]);
        }, 150 * i);
      }
    }, this.#delay);
    this.#delay += 150 * 8;
    ///

    ///
    this.#delay += 500;
    const hiddenPassword = '[******]';
    setTimeout(() => {
      for (let i = 1; i < 7; i++) {
        setTimeout(() => {
          this.tubes[i].removeActiveClass();
          this.tubes[i].setActive(hiddenPassword[i]);
        }, 300 * i);
      }
    }, this.#delay);
    this.#delay += 300 * 8;
    ///

    this.#delay += 500;
    setTimeout(() => {
      for (let i = 1; i < 7; i++) {
        setTimeout(() => {
          this.tubes[i].removeActiveClass();
          this.tubes[i].setActive(this.#truePassword[i]);
        }, 500 * i);
      }
    }, this.#delay);
    this.#delay += 500 * 8;
  }

  #flickPassword() {
    for (let i = 0; i < 3; i++) {
      this.#delay += 300;
      setTimeout(() => {
        for (let i = 1; i < 7; i++) {
          this.tubes[i].removeActiveClass();
          this.tubes[i].setActive('');
        }
      }, this.#delay);

      this.#delay += 500;
      setTimeout(() => {
        for (let i = 1; i < 7; i++) {
          this.tubes[i].removeActiveClass();
          this.tubes[i].setActive(this.#truePassword[i]);
        }
      }, this.#delay);
    }

    // Clear tubes from password
    this.#delay += 400;
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        this.tubes[i].removeActiveClass();
        this.tubes[i].setActive('');
      }
    }, this.#delay);
  }

  #setWelcomeBack() {
    const welcomeBack = 'WELCOME BACK, DEAD ILITA';
    setTimeout(() => {
      let idx = 0;
      let j = 0;
      let index = 0;
      while (idx < welcomeBack.length) {
        setTimeout(() => {
          if (j >= 8 && index < welcomeBack.length) {
            for (let i = 0; i < 7; i++) {
              this.tubes[i].removeActiveClass();
              this.tubes[i].setActive(welcomeBack[index - 7 + i]);
            }
            this.tubes[7].removeActiveClass();
            j = 7;
          }
          this.tubes[j].setActive(welcomeBack[index]);
          index++;
          j++;
        }, 300 * idx);
        idx++;
      }
    }, this.#delay);
    this.#delay += 300 * welcomeBack.length + 500;

    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          this.tubes[i].removeActiveClass();
        });
      }
    }, this.#delay);

    this.#delay += 1000;
  }

  #fillMembers() {
    const members = ['VIKING', 'LLIRIK', 'PETYA', 'STYOPKA', 'ILUXXA', 'OSYK'];
    for (const member of members) {
      setTimeout(() => {
        for (let i = 0; i < member.length; i++) {
          setTimeout(() => {
            this.tubes[i].setActive(member[i]);
          }, 300 * i);
        }
      }, this.#delay);
      this.#delay += 400 * member.length;

      this.#delay += 200;
      setTimeout(() => {
        for (let i = 0; i < member.length; i++) {
          setTimeout(() => {
            this.tubes[i].removeActiveClass();
          }, 300 * i);
        }
      }, this.#delay);
      this.#delay += 300 * 8;
    }
  }

  #showIlita() {
    setTimeout(() => {
      this.tubes[0].off();
      this.tubes[6].off();
      this.tubes[7].off();
    }, this.#delay);

    this.#delay += 200;
    setTimeout(() => {
      // We have 'I' from "Viking"
      this.tubes[1].setActive('I');

      // We have 'L' from "Welcome"
      this.tubes[2].setActive('L');

      // We have 'I' from "Viking"
      this.tubes[3].setActive('I');

      this.tubes[4].addChar('T');
      this.tubes[4].setActive('T');

      // We have 'A' from "Back"
      this.tubes[5].setActive('A');
    }, this.#delay);
  }
}

export default Friends;
