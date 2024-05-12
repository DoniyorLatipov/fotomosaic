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

createTable();
adjustTable();
selectMode();

renderCounter();
addCounter();
addResetBtn();
addFillBtn();
addRenderBtn();
addMassResetBtn();
