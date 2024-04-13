function createTable(columns) {
  const table = document.getElementById('table');

  const place = '<div class="pic" data-free="true"></div>';
  const smallPlace = '<div class="pic smallPic" data-free="true"></div>';
  const currentRows = `
  ${place.repeat(columns)}
  ${smallPlace}
  ${place.repeat(columns - 1)}
  ${smallPlace}
  `;

  table.innerHTML = '';
  table.insertAdjacentHTML('beforeend', `${currentRows.repeat(6)}`);
}

createTable(8);

function adjustTableSize() {
  const table = document.getElementById('table');
  const width = table.clientWidth;
  const height = width * (3 / 2);
  table.style.width = width + 'px';
  table.style.height = height + 'px';
}

adjustTableSize();
window.addEventListener('resize', adjustTableSize);

function fillImages() {
  const btn = document.getElementById('fill');

  btn.addEventListener('click', () => {
    const files = document.getElementById('input').files;
    const picBlocks = document.querySelectorAll('[data-free="true"]');

    for (let i = 0; i < files.length && i < picBlocks.length; i += 1) {
      let imgLink = URL.createObjectURL(files[i]);
      picBlocks[i].style.backgroundImage = `url(${imgLink})`;
      picBlocks[i].dataset.free = 'false';
    }
  });
}

fillImages();

function switchMode() {
  const switchBtn = document.getElementById('switchBtn');
  const table = document.getElementById('table');

  switchBtn.addEventListener('click', () => {
    if (table.style.width === '1000px') {
      table.style.width = '90cm';
    } else {
      table.style.width = '1000px';
    }
    adjustTableSize();
  });
}

switchMode();

function changeImages() {
  const picBlocks = document.querySelectorAll('.pic');

  for (const pic of picBlocks) {
    pic.addEventListener('click', (e) => {
      e.target.style.outline = '2px solid black';
      changeMenu(e.target);
    });
  }
}

function changeMenu(pic) {
  const changeMenu = document.querySelector('.change');
  const changeBtn = document.getElementById('changeBtn');
  const close = document.getElementById('closeBtn');

  changeMenu.style.display = 'block';

  changeBtn.addEventListener('click', changeImage);
  function changeImage() {
    const input = document.getElementById('changeInput');
    const imgLink = URL.createObjectURL(input.files[0]);
    pic.style.backgroundImage = `url(${imgLink})`;
    pic.dataset.free = 'false';
    changeBtn.removeEventListener('click', changeImage);
    changeMenu.style.display = 'none';
    pic.style.outline = 'none';
  }

  close.addEventListener('click', () => {
    changeMenu.style.display = 'none';
    pic.style.outline = 'none';
    changeBtn.removeEventListener('click', changeImage);
  });
}

changeImages();
