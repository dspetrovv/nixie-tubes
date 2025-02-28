import Tube from '@/classes/tubes/TubeClass';
import Script from '@/classes/ScriptClass';

class Timer extends Script {
  constructor(buttonElement, wrapperSelector = '#app') {
    super(buttonElement, wrapperSelector);
  }

  #previousHours = '';
  #previousMinutes = '';
  #timer = '';

  stop() {
    this.button.classList.remove('stand__button_active');
    this.tubes.forEach((tube) => {
      tube.off();
      tube.clearChars();
    });
    clearInterval(this.#timer);

    this.#previousHours = '';
    this.#previousMinutes = '';
  }

  start() {
    this.button.classList.add('stand__button_active');
    this.createTubes();
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    this.tubes.forEach((tube, index) => {
      if (!((index + 1) % 3)) {
        tube.addChar(':', true);
      } else {
        tube.addChars(numbers);
      }
      tube.on();
    });
    this.#timer = setInterval(() => {
      this.#updateTime();
    }, 500);
  }

  createTubes() {
    this.tubes.forEach((tube) => {
      tube.remove();
    });
    this.tubes = [];

    for (let i = 0; i < 8; i++) {
      this.tubes.push(new Tube(i));
      if (!((i + 1) % 3)) {
        this.tubes[i].addSilverModificators();
      }
      this.tubes[i].mount(this.wrapperSelector);
    }
  }

  #updateTime() {
    const hours = new Date().getHours().toString().padStart(2, '0');
    const minutes = new Date().getMinutes().toString().padStart(2, '0');
    const seconds = new Date().getSeconds().toString().padStart(2, '0');

    if (hours[0] !== this.#previousHours[0]) {
      this.tubes[0].setActive(hours[0]);
    }
    if (hours[1] !== this.#previousHours[1]) {
      this.tubes[1].setActive(hours[1]);
    }
    // : is here
    if (minutes[0] !== this.#previousMinutes[0]) {
      this.tubes[3].setActive(minutes[0]);
    }
    if (minutes[1] !== this.#previousMinutes[1]) {
      this.tubes[4].setActive(minutes[1]);
    }
    // : is here
    this.tubes[6].setActive(seconds[0]);
    this.tubes[7].setActive(seconds[1]);

    this.#previousHours = hours;
    this.#previousMinutes = minutes;
  }
}

export default Timer;
