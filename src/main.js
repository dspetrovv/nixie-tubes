import '@/styles/tube.scss';
import '@/styles/main.scss';
import app from '@/app';

document.querySelector('main.main').innerHTML = `
<div class="wrapper">
  <div id="app" style="display: flex; justify-content: center"></div>
  <div class="stand">
    <div class="stand__shelf"></div>
    <div class="stand__buttons">
      <button id="button-on" class="stand__button stand__button-on">
        On/Off
      </button>
      <button id="button-time" class="stand__button stand__button-time">
        Time Mode
      </button>
      <button
        id="button-random"
        class="stand__button stand__button-random"
      >
        Random Mode
      </button>
      <button
        id="button-secret"
        class="stand__button stand__button-secret"
      >
        Secret Mode
      </button>
    </div>
  </div>
</div>`;
document.querySelector('#title').textContent = 'Nixie Tubes';

app();
