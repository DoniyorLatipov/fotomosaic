function renderCountLoaded() {
  const counter = document.getElementById('selectLoadedCounter');
  const selectInput = document.getElementById('selectInput');
  counter.innerHTML = selectInput.files.length;
}

function renderCountSlected() {
  const counter = document.getElementById('selectCounter');
  const selectedPics = document.getElementsByClassName('pic__selected');
  counter.innerHTML = selectedPics.length;
}

function addLoadTracker() {
  const selectInput = document.getElementById('selectInput');
  selectInput.addEventListener('input', () => {
    renderCountLoaded();
  });
}

function addPicSelect(e) {
  if (e.target.classList.contains('pic')) {
    e.target.classList.toggle('pic__selected');
    renderCountSlected();
  }
}

function addResetBtn1() {
  const selectInput = document.getElementById('selectInput');
  const resetBtn = document.getElementById('selectReset');
  resetBtn.addEventListener('click', () => {
    selectInput.value = '';
    renderCountLoaded();
  });
}

function addChangeBtn() {
  const input = document.getElementById('selectInput');
  const changeBtn = document.getElementById('selectFill');
  changeBtn.addEventListener('click', () => {
    const selected = document.getElementsByClassName('pic__selected');
    const { files } = input;
    for (let i = 0; i < selected.length && i < files.length; i += 1) {
      const imageLink = URL.createObjectURL(files[i]);
      selected[i].style.backgroundImage = `url(${imageLink})`;
      selected[i].dataset.free = 'false';
    }
  });
}

function addDeselectBtn() {
  const deselectBtn = document.getElementById('deselectBtn');
  deselectBtn.addEventListener('click', () => {
    const selected = document.getElementsByClassName('pic__selected');
    Array.from(selected).forEach((pic) => pic.classList.remove('pic__selected'));
    renderCountSlected();
  });
}

function addPicReset() {
  const picResetBtn = document.getElementById('selectPicReset');
  picResetBtn.addEventListener('click', () => {
    const selected = document.getElementsByClassName('pic__selected');
    Array.from(selected).forEach((pic) => (pic.style.backgroundImage = ''));
  });
}

function activateSelectMode() {
  const pics = document.getElementsByClassName('pic');
  const table = document.getElementById('table');
  Array.from(pics).forEach((pic) => pic.classList.ad('pic__deselected'));
  table.addEventListener('click', addPicSelect);
}

function deactivateSelectMode() {
  const pics = document.getElementsByClassName('pic');
  const table = document.getElementById('table');
  Array.from(pics).forEach((pic) => {
    pic.classList.remove('pic__deselected');
    pic.classList.remove('pic__selected');
  });
  table.removeEventListener('click', addPicSelect);
}

export {
  addLoadTracker,
  activateSelectMode,
  deactivateSelectMode,
  addResetBtn1,
  addChangeBtn,
  addDeselectBtn,
  addPicReset,
};
