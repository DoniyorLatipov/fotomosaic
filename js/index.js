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
  table.innerHTML = `${currentRows.repeat(rowRepetition)}`;
}
createTable(4, 3);

function adjustTable() {
  const table = document.getElementById('table');
  const width = table.clientWidth;
}
