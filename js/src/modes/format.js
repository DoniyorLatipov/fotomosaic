import { createTable, adjustTable } from '../table.js';

function renderPicsCounter() {
  const columnsInput = document.getElementById('formatColumns');
  const rowsInput = document.getElementById('formatRows');
  const counter = document.getElementById('formatPicsCounter');

  const rows = parseInt(rowsInput.value);
  const colums = parseInt(columnsInput.value);
  counter.innerHTML = `${colums * Math.ceil(rows / 2) + (colums + 1) * Math.floor(rows / 2)}`;
}

function addTableSizeTracker() {
  const heightInput = document.getElementById('formatHeight');
  const widthInput = document.getElementById('formatWidth');
  heightInput.addEventListener('change', adjustTable);
  widthInput.addEventListener('change', adjustTable);
}

function addPicsChangeTracker() {
  const columnsInput = document.getElementById('formatColumns');
  const rowsInput = document.getElementById('formatRows');
  columnsInput.addEventListener('change', () => {
    createTable();
    renderPicsCounter();
  });
  rowsInput.addEventListener('change', () => {
    createTable();
    renderPicsCounter();
  });
}

function addFormatResetBtn() {
  const resetBtn = document.getElementById('formatReset');
  const resetIco = document.querySelector('.format__reset-ico');
  const columnsInput = document.getElementById('formatColumns');
  const rowsInput = document.getElementById('formatRows');
  const heightInput = document.getElementById('formatHeight');
  const widthInput = document.getElementById('formatWidth');

  resetBtn.addEventListener('click', () => {
    resetIco.classList.add('format__reset-ico_active');
    setTimeout(() => resetIco.classList.remove('format__reset-ico_active'), 400);
    columnsInput.value = 8;
    rowsInput.value = 12;
    heightInput.value = 90;
    widthInput.value = 60;

    adjustTable();
    createTable();
    renderPicsCounter();
  });
}

export { addTableSizeTracker, addPicsChangeTracker, renderPicsCounter, addFormatResetBtn };
