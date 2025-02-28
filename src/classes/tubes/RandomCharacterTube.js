import Tube from '@/classes/tubes/TubeClass';

class RandomCharacterTube extends Tube {
  constructor(type = 'all', chars = []) {
    super();
    this.type = type;
    this.chars = chars;
  }

  chars = []; // Can be a string for type = 'custom'
  type = ''; // 'all' | 'symbols' | 'alphabet' | 'numbers' | 'custom'
  #timer = null;

  stopRandom() {
    clearInterval(this.#timer);
    this.clearChars();
    this.off();
  }

  startRandom(speed = [1400, 1500, 1700, 2000]) {
    this.#fillChars();
    this.on();

    this.#timer = setInterval(
      () => {
        this.setActive(
          this.chars[
            Math.round(
              Math.random(0, this.chars.length - 1) * (this.chars.length - 1),
            )
          ],
        );
      },
      speed[Math.round(Math.random(0, speed.length - 1) * (speed.length - 1))],
    );
  }

  setActiveChar(char = '') {
    clearInterval(this.#timer);
    this.setActive(char);
  }

  #fillChars() {
    if (this.type === 'all') {
      this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+-_=<>'.split('');
      this.addChars(this.chars);
    } else if (this.type === 'symbols') {
      this.chars = '!#$%&*+-_=<>'.split('');
      this.addChars(this.chars);
    } else if (this.type === 'alphabet') {
      this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      this.addChars(this.chars);
    } else if (this.type === 'numbers') {
      this.chars = '0123456789'.split('');
      this.addChars(this.chars);
    } else if (this.type === 'custom') {
      this.addChars(this.chars);
    }
  }
}

export default RandomCharacterTube;
