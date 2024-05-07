function createTable(columns, rowRepetition) {
  const table = document.getElementById('table');
  table.style.gridTemplateColumns = `repeat(${columns * 2}, 1fr)`;

  const place = '<div class="pic" data-free="true"></div>';
  const smallPlace = '<div class="pic smallPic" data-free="true"></div>';
  const currentRows = `
  ${place.repeat(columns)}
  ${smallPlace}
  ${place.repeat(columns - 1)}
  ${smallPlace}
  `;

  table.innerHTML = '';
  table.insertAdjacentHTML('beforeend', `${currentRows.repeat(rowRepetition)}`);
}

function changeRowMode() {
  const rowChangeInput = document.getElementById('rowMode');
  rowChangeInput.addEventListener('change', (e) => {
    const [columns, rows] = e.target.value.split(' ').map((el) => parseInt(el));
    createTable(columns, rows);
  });
}

changeRowMode();
createTable(4, 3);

function adjustTableSize() {
  const table = document.getElementById('table');
  const width = table.clientWidth;
  const height = width * 1.48;
  table.style.width = width + 'px';
  table.style.height = height + 'px';
}

adjustTableSize();
window.addEventListener('resize', adjustTableSize);

function fillImages() {
  const fillBtn = document.getElementById('fillBtn');

  fillBtn.addEventListener('click', () => {
    const files = document.getElementById('inputImages').files;
    const picBlocks = document.querySelectorAll('[data-free="true"]');

    for (let i = 0; i < files.length && i < picBlocks.length; i += 1) {
      const imgLink = URL.createObjectURL(files[i]);
      picBlocks[i].style.backgroundImage = `url(${imgLink})`;
      picBlocks[i].dataset.free = 'false';
    }
  });
}

fillImages();

function renderMode() {
  const switchBtn = document.getElementById('renderBtn');
  const table = document.getElementById('table');

  switchBtn.addEventListener('click', () => {
    if (table.style.width === '1000px') {
      table.removeEventListener('click', select);
      table.style.cssText = `
      width: 90cm;
      column-gap: 0;
      row-gap: 0;`;
    } else {
      table.addEventListener('click', select);
      table.style.cssText = `
      width: 1000px;
      column-gap: 2px;
      row-gap: 2px;`;
    }
    adjustTableSize();
  });
}

renderMode();

function select(e) {
  if (e.target.classList.contains('pic')) {
    e.target.classList.toggle('selected');
    if (countSelected() !== 0) {
      selectModeAvailable(true);
    } else {
      selectModeAvailable(false);
    }
  }
}

function selectImages() {
  const table = document.getElementById('table');

  table.addEventListener('click', select);
}

function renderCounter() {
  const value = countSelected();
  counter.innerHTML = value === 0 ? '' : `Selected: ${value}`;
}

function countSelected() {
  const length = getSelected().length;
  return length;
}

function getSelected() {
  return document.getElementsByClassName('selected');
}

selectImages();

function selectModeAvailable(boolean) {
  const mainForm = document.getElementById('mainForm');
  const selectForm = document.getElementById('selectForm');
  if (boolean) {
    mainForm.style.display = 'none';
    selectForm.style.display = 'block';
  } else {
    mainForm.style.display = 'block';
    selectForm.style.display = 'none';
  }
  renderCounter();
}

function selectModeMenu() {
  const changeBtn = document.getElementById('changeBtn');
  const deselectBtn = document.getElementById('deselectBtn');
  const clearBtn = document.getElementById('clearBtn');

  changeBtn.addEventListener('click', () => {
    const changedImages = document.getElementById('changeInput').files;
    const selected = getSelected();
    if (selected.length > changedImages.length) {
      if (!confirm('Выделенных мест больше, чем изображений.\nВы хотите продолжить?')) {
        return;
      }
    }
    for (let i = 0; i < changedImages.length && i < selected.length; i += 1) {
      const imgLink = URL.createObjectURL(changedImages[i]);
      selected[i].style.backgroundImage = `url(${imgLink})`;
      selected[i].dataset.free = 'false';
    }
    deselectAll();
  });

  deselectBtn.addEventListener('click', deselectAll);

  clearBtn.addEventListener('click', () => {
    const selected = getSelected();
    if (confirm('Вы уверены что хотите очистить выделенные ячейки?')) {
      for (let i = 0; i < selected.length; i += 1) {
        selected[i].style.cssText = `
          background: gray 50% 50%;
          background-size: cover;`;
        selected[i].dataset.free = true;
      }
    }
    deselectAll();
  });
}

function deselectAll() {
  const selected = getSelected();
  const length = selected.length;
  for (let i = 0; i < length; i += 1) {
    selected[0].classList.remove('selected');
  }
  countSelected();
  selectModeAvailable(false);
}

(function moveSelected() {
  function createPosition(el) {
    if (!el.style.backgroundPosition) {
      el.style.backgroundPosition = '50% 50%';
    }
  }

  window.addEventListener('keydown', (e) => {
    const selected = getSelected();
    switch (e.code) {
      case 'KeyW':
        for (let i = 0; i < selected.length; i += 1) {
          createPosition(selected[i]);
          selected[i].style.backgroundPositionY = `${
            parseInt(selected[i].style.backgroundPositionY) + 10
          }%`;
        }
        break;
      case 'KeyS':
        for (let i = 0; i < selected.length; i += 1) {
          createPosition(selected[i]);
          selected[i].style.backgroundPositionY = `${
            parseInt(selected[i].style.backgroundPositionY) - 10
          }%`;
        }
        break;
      case 'KeyA':
        for (let i = 0; i < selected.length; i += 1) {
          createPosition(selected[i]);
          console.log(selected[i].style.backgroundPositionX);
          selected[i].style.backgroundPositionX = `${
            parseInt(selected[i].style.backgroundPositionX) - 10
          }%`;
        }
        break;
      case 'KeyD':
        for (let i = 0; i < selected.length; i += 1) {
          createPosition(selected[i]);
          selected[i].style.backgroundPositionX = `${
            parseInt(selected[i].style.backgroundPositionX) + 10
          }%`;
        }
        break;
      default:
        break;
    }
  });
})();

selectModeMenu();
