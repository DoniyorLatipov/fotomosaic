import { activeSelectMode, deactivateSelectMode } from './modes/select.js';
import { activeteMoveMode, deactiveteMoveMode } from './modes/move.js';

function selectMode() {
  const select = document.getElementById('selectMode');

  select.addEventListener('change', () => {
    const activeMode = document.querySelector('.header__mode_active');
    activeMode.classList.remove('header__mode_active');
    deactivateSelectMode();
    deactiveteMoveMode();
    switch (select.value) {
      case '0':
        const fillMode = document.getElementById('basic');
        fillMode.classList.add('header__mode_active');
        break;
      case '1':
        const formatMode = document.getElementById('format');
        formatMode.classList.add('header__mode_active');
        break;
      case '2':
        const selectMode = document.getElementById('select');
        activeSelectMode();
        selectMode.classList.add('header__mode_active');
        break;
      case '3':
        const moveMode = document.getElementById('move');
        activeteMoveMode();
        moveMode.classList.add('header__mode_active');
        break;
      default:
        throw new Error('Unknown mod value');
    }
  });
}

export default selectMode;
