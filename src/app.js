const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  console.log("yo");

  const infoDiv = document.querySelector('div#instrument-family-info')
  const resultView = new ResultView(infoDiv);
  resultView.bindEvents();
  const dropDown = document.querySelector('select#instrument-families');
  const selectView = new SelectView(dropDown);
  selectView.bindEvents();

  const instruments = new InstrumentFamilies;
  instruments.bindEvents();

});
