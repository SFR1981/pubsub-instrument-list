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
  const familyName = document.createElement('h1');
  familyName.textContent = `${family.name}`;

  this.container.innerHTML = '';
  this.container.appendChild(familyName);

  const description = document.createElement('p');
  description.textContent = `${family.description}`;
  this.container.appendChild(description);

  const including = document.createElement('h2');
  including.textContent = 'Instruments include:'
  this.container.appendChild(including);
  const list = document.createElement('ul');
  family.instruments.forEach((instrument, index)=>{
    const listElement = document.createElement('li');
    listElement.textContent = instrument;
    list.appendChild(listElement);
  })
  this.container.appendChild(list);
  console.log(family.instruments);


};





module.exports = ResultView;
