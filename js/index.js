import { createTable, adjustTable } from './src/table.js';
import selectMode from './src/chooseMode.js';

import {
  renderCounter,
  addCounter,
  addResetBtn,
  addFillBtn,
  addRenderBtn,
  addMassResetBtn,
} from './src/modes/basic.js';
import {
  addTableSizeTracker,
  addPicsChangeTracker,
  renderPicsCounter,
  addFormatResetBtn,
} from './src/modes/format.js';
import {
  addLoadTracker,
  addResetBtn1,
  addChangeBtn,
  addDeselectBtn,
  addPicReset,
} from './src/modes/select.js';

createTable();
adjustTable();
selectMode();

renderCounter();
addCounter();
addResetBtn();
addFillBtn();
addRenderBtn();
addMassResetBtn();

renderPicsCounter();
addTableSizeTracker();
addPicsChangeTracker();
addFormatResetBtn();

addLoadTracker();
addResetBtn1();
addChangeBtn();
addDeselectBtn();
addPicReset();
