function addMovePicSelect(e) {
  if (e.target.classList.contains('pic')) {
    const formerSelected = document.querySelector('.pic__selected');
    e.target.classList.toggle('pic__selected');
    if (formerSelected) {
      formerSelected.classList.remove('pic__selected');
    }
  }
}

function createPosition(el) {
  if (!el.style.backgroundPosition) {
    el.style.backgroundPosition = '50% 50%';
  }
}

function addMoveSelected(e) {
  const selected = document.querySelector('.pic__selected');
  switch (e.code) {
    case 'KeyW':
      createPosition(selected);
      selected.style.backgroundPositionY = `${parseInt(selected.style.backgroundPositionY) + 10}%`;
      break;
    case 'KeyS':
      createPosition(selected);
      selected.style.backgroundPositionY = `${parseInt(selected.style.backgroundPositionY) - 10}%`;
      break;
    case 'KeyA':
      createPosition(selected);
      selected.style.backgroundPositionX = `${parseInt(selected.style.backgroundPositionX) - 10}%`;
      break;
    case 'KeyD':
      createPosition(selected);
      selected.style.backgroundPositionX = `${parseInt(selected.style.backgroundPositionX) + 10}%`;
      break;
    default:
      break;
  }
}

function addDragDrop() {
  const table = document.getElementById('table');
  const { children } = table;

  for (const child of children) {
    child.setAttribute('draggable', 'true');

    child.addEventListener('dragstart', dragstart);
    child.addEventListener('dragend', dragend);

    child.addEventListener('dragover', dragover);
    child.addEventListener('dragenter', dragenter);
    child.addEventListener('dragleave', dragleave);
    child.addEventListener('drop', dragdrop);
  }
}

function removeDragDrop() {
  const table = document.getElementById('table');
  const { children } = table;

  for (const child of children) {
    child.removeAttribute('draggable', 'true');

    child.removeEventListener('dragstart', dragstart);
    child.removeEventListener('dragend', dragend);

    child.removeEventListener('dragover', dragover);
    child.removeEventListener('dragenter', dragenter);
    child.removeEventListener('dragleave', dragleave);
    child.removeEventListener('drop', dragdrop);
  }
}

function dragstart(e) {
  const selected = document.querySelector('.pic__selected');
  if (selected) {
    selected.classList.remove('pic__selected');
  }
  setTimeout(() => e.target.classList.add('pic__selected'), 0);
}

function dragend(e) {
  e.target.classList.remove('pic__selected');
}

function dragover(e) {
  if (e.target.classList.contains('pic')) {
    e.preventDefault();
  }
}

function dragenter(e) {
  if (e.target.classList.contains('pic')) {
    e.target.classList.add('move__hovered');
  }
}

function dragleave(e) {
  if (e.target.classList.contains('pic')) {
    e.target.classList.remove('move__hovered');
  }
}

function dragdrop(e) {
  if (e.target.classList.contains('pic')) {
    const selected = document.querySelector('.pic__selected');
    changePics(selected, e.target);
    e.target.classList.remove('move__hovered');
  }
}

function changePics(pic1, pic2) {
  const tempBackground = pic1.style.backgroundImage;
  const tempDataFree = pic1.dataset.free;
  const tempPosition = pic1.style.backgroundPosition;
  pic1.style.backgroundImage = pic2.style.backgroundImage;
  pic1.dataset.free = pic2.dataset.free;
  pic1.style.backgroundPosition = pic2.style.backgroundPosition;
  pic2.style.backgroundImage = tempBackground;
  pic2.dataset.free = tempDataFree;
  pic2.style.backgroundPosition = tempPosition;
}

function activateMoveMode() {
  const table = document.getElementById('table');
  table.addEventListener('click', addMovePicSelect);
  window.addEventListener('keydown', addMoveSelected);
  addDragDrop();
}

function deactivateMoveMode() {
  const table = document.getElementById('table');
  table.removeEventListener('click', addMovePicSelect);
  window.removeEventListener('keydown', addMoveSelected);
  removeDragDrop();
}

export { activateMoveMode, deactivateMoveMode };
