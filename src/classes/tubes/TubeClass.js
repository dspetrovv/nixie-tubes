class Tube {
  constructor(idx) {
    this.idx = idx;
    this.#tubeElement = document.createElement('div');
    this.#tubeElement.classList.add('tube');
  }

  // Can be changed for new color (ex. silver)
  charModificator = '';
  bulbModificator = '';
  onOffModificator = '';
  charOnOffModificator = '';
  activeClass = 'tube__char_active';
  standClass = 'tube__stand_active';
  // -----
  #tubeElement = null;
  #tubeBulb = null;
  #tubeStand = null;
  #tubeChars = [];

  /**
   * This method mounts tube in DOM
   * @param {string} wrapperSelector Css selector
   */
  mount(wrapperSelector = '#app') {
    const wrapper = document.querySelector(wrapperSelector);
    this.#createTube();
    wrapper.append(this.#tubeElement);
  }

  /**
   * This method makes tube silver
   */
  addSilverModificators() {
    this.charModificator = 'tube__char_silver';
    this.bulbModificator = 'tube__bulb_silver';
    this.onOffModificator = 'tube__bulb_on-off-silver';
    this.charOnOffModificator = 'tube__char_on-off-silver';
    this.standClass = 'tube__stand_active-silver';
    // We are not modifying the active class here because there may be an active character
    // and we simply won't be able to remove it and set a new one

    if (this.#tubeBulb) {
      this.#tubeBulb.classList.add(this.bulbModificator);
    } else {
      this.activeClass = 'tube__char_active-silver';
    }

    const activeChar = this.getActiveChar();
    if (activeChar !== undefined) {
      this.removeActiveClass();
      this.activeClass = 'tube__char_active-silver';
      this.setActive(activeChar);
    }
  }

  /**
   * This method remove modificators (ex. remove silver)
   */
  removeModificators() {
    this.charModificator = '';
    this.bulbModificator = '';
    this.onOffModificator = '';
    this.charOnOffModificator = '';
    this.standClass = 'tube__stand_active';
    // We are not modifying the active class here because there may be an active character
    // and we simply won't be able to remove it and set a new one

    if (this.#tubeBulb) {
      this.#tubeBulb.classList.remove(this.bulbModificator);
    } else {
      this.activeClass = 'tube__char_active';
    }

    const activeChar = this.getActiveChar();
    if (activeChar !== undefined) {
      this.removeActiveClass();
      this.activeClass = 'tube__char_active';
      this.setActive(activeChar);
    }
  }

  /**
   * This method clears all chars and removes them from DOM
   */
  clearChars() {
    this.#tubeChars.forEach((char) => {
      char.remove();
    });
    this.#tubeChars = [];
  }

  /**
   * This method returns active char
   * @returns {string} Active char
   */
  getActiveChar() {
    return this.#tubeChars.find((tubeEl) =>
      tubeEl.classList.contains(this.activeClass),
    )?.textContent;
  }

  /**
   * This method makes your character active (character must be in tube)
   * @param {string|undefined} char Character to be active
   */
  setActive(char) {
    this.removeActiveClass();

    const idx = this.#tubeChars.findIndex((tube) => tube.textContent === char);

    if (idx === -1) {
      return;
    }

    this.#tubeChars[idx].classList.add(this.activeClass);
  }

  /**
   * This method removes active class
   */
  removeActiveClass() {
    const idx = this.#tubeChars.findIndex((tubeEl) =>
      tubeEl.classList.contains(this.activeClass),
    );

    if (idx === -1) {
      return -1;
    }

    this.#tubeChars[idx].classList.remove(this.activeClass);

    return idx;
  }

  /**
   * This method set next element active
   */
  next() {
    this.#toggleActiveClass('next');
  }

  /**
   * This method set previous element active
   */
  prev() {
    this.#toggleActiveClass('previous');
  }

  /**
   * This method makes current element active/inactive
   */
  current() {
    this.#toggleActiveClass('current');
  }

  /**
   * This method adds character to tubes list
   * @param {string} char Character you want to add
   * @param {boolean} isActive Is this character active in tube
   */
  addChar(char, isActive = false) {
    const charElement = document.createElement('div');
    charElement.classList.add('tube__char');
    if (this.charModificator) {
      charElement.classList.add(this.charModificator);
    }

    if (isActive) {
      charElement.classList.add(this.activeClass);
    }
    charElement.textContent = char;

    this.#tubeElement.append(charElement);
    this.#tubeChars.push(charElement);
  }

  /**
   * This method adds list of characters to tubes list
   * @param {[string]} chars Array of characters you want to add
   * @param {string | undefined} activeChar Active character
   */
  addChars(chars = [], activeChar = '') {
    for (const char of chars) {
      this.addChar(char, char === activeChar);
    }
  }

  /**
   * This method removes character from tubes list. If called without params, removes last character.
   * @param {string | undefined} char Character you want to remove (optional)
   */
  removeChar(char) {
    if (char === undefined && this.#tubeChars.length) {
      this.#tubeChars[this.#tubeChars.length - 1].remove();
      this.#tubeChars.pop();
      return;
    }

    const index = this.#tubeChars.findIndex(
      (tubeChar) => tubeChar.textContent === char,
    );

    if (index === -1) {
      return;
    }
    this.#tubeChars[index].remove();
    this.#tubeChars.splice(index, 1);
  }

  /**
   * This method removes tube from DOM
   */
  remove() {
    this.#tubeElement.remove();
  }

  /**
   * This method turns on the tubes
   */
  on() {
    this.#tubeBulb.classList.remove('tube__bulb_off');
    this.#tubeChars.forEach((char) => {
      char.classList.add('tube__char_on-off');
      if (this.charOnOffModificator) {
        char.classList.add(this.charOnOffModificator);
      }
      char.classList.remove('tube__char_off');
    });

    this.#tubeBulb.classList.add('tube__bulb_on-off');
    if (this.onOffModificator) {
      this.#tubeBulb.classList.add(this.onOffModificator);
    }

    this.#tubeStand.classList.add(this.standClass);

    setTimeout(() => {
      this.#tubeChars.forEach((char) => {
        char.classList.remove('tube__char_on-off');
        if (this.charOnOffModificator) {
          char.classList.remove(this.charOnOffModificator);
        }
      });
      this.#tubeBulb.classList.remove('tube__bulb_on-off');
      if (this.onOffModificator) {
        this.#tubeBulb.classList.remove(this.onOffModificator);
      }
    }, 700);
  }

  /**
   * This method turns off the tubes
   */
  off() {
    this.#tubeBulb.classList.add('tube__bulb_off');
    this.#tubeStand.classList.remove(this.standClass);
    this.#tubeChars.forEach((char) => {
      char.classList.add('tube__char_off');
    });
  }

  /**
   * This method creates bulb and stand for tube
   */
  #createTube() {
    this.#tubeStand = document.createElement('div');
    this.#tubeStand.classList.add('tube__stand');
    this.#tubeElement.prepend(this.#tubeStand);

    this.#tubeBulb = document.createElement('div');
    this.#tubeBulb.classList.add('tube__bulb');

    if (this.bulbModificator) {
      this.#tubeBulb.classList.add(this.bulbModificator);
    }
    this.#tubeBulb.classList.add('tube__bulb_off');
    this.#tubeElement.prepend(this.#tubeBulb);
  }

  /**
   * This method toggles active class on element
   * @param {'next' | 'previous' | 'current'} direction Class toggling direction
   */
  #toggleActiveClass(direction = 'next') {
    const idx = this.removeActiveClass();

    if (idx === -1) {
      this.#tubeChars[0].classList.add(this.activeClass);
      return;
    }

    if (direction === 'current') {
      return;
    }

    let index = idx;
    if (direction === 'next') {
      index = idx !== this.#tubeChars.length - 1 ? index + 1 : 0;
    } else if (direction === 'prev') {
      index = idx === 0 ? this.#tubeChars.length - 1 : index - 1;
    }
    this.#tubeChars[index].classList.add(this.activeClass);
  }
}

export default Tube;
