const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element){
  this.element = element;

}


SelectView.prototype.bindEvents = function () {

  PubSub.subscribe('InstrumentFamilies:all-instruments', (evt) => {
    console.log("HUI");
  const allInstrumentFamilies = evt.detail;
    this.populate(allInstrumentFamilies);

  })
this.element.addEventListener('change', (evt) => {
  const selectedIndex = evt.target.value;
  console.log(evt.target.value);
  PubSub.publish('SelectView:change', selectedIndex);

  })
};


SelectView.prototype.populate = function (allInstrumentFamilies) {
  allInstrumentFamilies.forEach((instrumentFamiliy, index) => {
    const option = document.createElement('option');
    option.textContent = instrumentFamiliy.name;
    option.value = index;
    this.element.appendChild(option);
  });

};


module.exports = SelectView;
