function createTable() {
  const table = document.getElementById('table');
  const rows = document.getElementById('formatRows').value;
  const columns = document.getElementById('formatColumns').value;
  const res = [];

  const place = '<div class="pic" data-free="true"></div>';
  const smallPlace = '<div class="pic smallPic" data-free="true"></div>';

  for (let i = 1; i <= rows; i += 1) {
    if (i % 2 === 0) {
      res.push(smallPlace, place.repeat(columns - 1), smallPlace);
    } else {
      res.push(place.repeat(columns));
    }
  }
  table.style.gridTemplateColumns = `repeat(${columns * 2}, 1fr)`;
  table.innerHTML = res.join('');
}

function adjustTable() {
  const specifiedHeight = document.getElementById('formatHeight').value;
  const specifiedWidth = document.getElementById('formatWidth').value;
  const table = document.getElementById('table');
  const width = table.clientWidth;
  const height = width * (parseInt(specifiedHeight) / parseInt(specifiedWidth));
  table.style.width = `${width}px`;
  table.style.height = `${height}px`;
}

export { createTable, adjustTable };
