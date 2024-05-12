import { createTable } from '../table.js';

function renderCounter() {
  const input = document.getElementById('basicInput');
  const counter = document.getElementById('basicCounter');
  counter.innerHTML = input.files.length;
}

function addCounter() {
  const input = document.getElementById('basicInput');
  input.addEventListener('input', renderCounter);
}

function addResetBtn() {
  const input = document.getElementById('basicInput');
  const counter = document.getElementById('basicCounter');
  const reset = document.getElementById('basicReset');
  reset.addEventListener('click', () => {
    input.value = '';
    renderCounter();
  });
}

function addFillBtn() {
  const input = document.getElementById('basicInput');
  const fillBtn = document.getElementById('basicFill');
  fillBtn.addEventListener('click', () => {
    const freePics = document.querySelectorAll('[data-free="true"]');
    const { files } = input;
    for (let i = 0; i < freePics.length && i < files.length; i += 1) {
      const imageLink = URL.createObjectURL(files[i]);
      freePics[i].style.backgroundImage = `url(${imageLink})`;
      freePics[i].dataset.free = 'false';
    }
  });
}

function addRenderBtn() {
  const table = document.getElementById('table');
  const selectBlock = document.getElementById('selectBlock');
  const renderBtn = document.getElementById('basicRender');
  const header = document.getElementById('header');
  renderBtn.addEventListener('click', () => {
    table.classList.toggle('table_render');
    selectBlock.classList.toggle('select__block_active');
    header.classList.toggle('header_render');
  });
}

function addMassResetBtn() {
  const massResetBtn = document.getElementById('basicMassReset');
  massResetBtn.addEventListener('click', () => {
    createTable();
  });
}

export { renderCounter, addCounter, addResetBtn, addFillBtn, addRenderBtn, addMassResetBtn };
