'use strict';
//global
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '7pm', '8pm'];


function renderTheadRow() {
  var elThead = document.getElementById('thead');

  var elTr = document.createElement('tr');
  elThead.appendChild(elTr);

  var elTh = document.createElement('th');
  elTr.appendChild(elTh);

  for(var i = 0; i < storeHours.length; i++){
    elTh = document.createElement('th');
    elTh.textContent = storeHours[i];
    elTr.appendChild(elTh);
  }

  elTh = document.createElement('th');
  elTh.textContent = 'Daily Location Total';
  elTr.appendChild(elTh);

}



function CookieStore(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.storeHours = storeHours;
  this.cookiesPurchased = [];
  this.cookiesPurchasedTotal = 0;
}

CookieStore.prototype.getRandomInt = function (){
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);

  return Math.floor(Math.random() * (max - min)) + min;
};

CookieStore.prototype.calculateCookiesPurchased = function () {
  var cookiesCount = 0;

  for (var i = 0; i < this.storeHours.length; i++) {
    cookiesCount = Math.round(this.avgCookieSale * this.getRandomInt() );
    console.log(this.avgCookieSale);
    this.cookiesPurchased.push(cookiesCount);
    this.cookiesPurchasedTotal += cookiesCount;
  }
};

CookieStore.prototype.toHtml = function () {
  //calculateCookiesPurchased and cookiesPurchasedTotal
  this.calculateCookiesPurchased();

  var elTbody = document.getElementById('tbody');

  var elTr = document.createElement('tr');
  elTbody.appendChild(elTr);

  var elTd = document.createElement('td');
  elTd.textContent = this.name;
  elTr.appendChild(elTd);


  for (var i = 0; i < this.storeHours.length; i++) {
    elTd = document. createElement('td');
    elTd.textContent = this.cookiesPurchased[i];
    elTr.appendChild(elTd);
  }

  //creat li for total and append to ul
  elTd = document.createElement('td');
  elTd.textContent = this.cookiesPurchasedTotal;
  elTr.appendChild(elTd);

};

//call the methods
renderTheadRow();

var stores = [
  new CookieStore('1st and Pike', 23, 65, 6.3),
  new CookieStore('SeaTeac Airport', 3, 34, 1.2),
  new CookieStore('Seattle Center', 11, 38, 3.7),
  new CookieStore('Capitol Hill', 20, 38, 2.3),
  new CookieStore('Alki', 2, 16, 4.6)
];


for (var i = 0; i < stores.length; i++) {
  stores[i].toHtml();
}
