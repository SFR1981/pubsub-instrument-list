const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container){
  this.container = container;

}



ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt)=>{
  const family = evt.detail;
  this.updateView(family);
  })

};


ResultView.prototype.updateView = function (family) {
  this.container.innerHTML = '';
  this.renderFamilyName(family);
  this.renderDescription(family);
  this.renderIndluding();
  this.renderList(family);


};


ResultView.prototype.renderFamilyName = function (family) {
  const name = document.createElement('h1');
  name.textContent = `${family.name}`;
  this.container.appendChild(name);

};

ResultView.prototype.renderDescription = function (family) {
  const description = document.createElement('p');
  description.textContent = `${family.description}`;
  this.container.appendChild(description);

};

ResultView.prototype.renderIndluding = function () {
  const including = document.createElement('h2');
  including.textContent = 'Instruments include:'
  this.container.appendChild(including);

};

ResultView.prototype.renderList = function (family) {

    const list = document.createElement('ul');

    family.instruments.forEach((instrument, index)=>{
      const listElement = document.createElement('li');
      listElement.textContent = instrument;
      list.appendChild(listElement);
    })
    this.container.appendChild(list);

};







module.exports = ResultView;
