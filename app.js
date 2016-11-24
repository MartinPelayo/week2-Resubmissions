'use strict';
//global


//first and pike
var cookieStore1 = {
  name: '1st and Pike',
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '7pm', '8pm'],
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  getRandomInt: function (){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);

    return Math.floor(Math.random() * (max - min)) + min;
  },
  cookiesPurchased:[],
  cookiesPurchasedTotal:0,
  calculateCookiesPurchased: function () {
    var cookiesCount = 0;

    for (var i = 0; i < this.storeHours.length; i++) {
      cookiesCount = Math.round(this.avgCookieSale * this.getRandomInt() );

      this.cookiesPurchased.push(cookiesCount);
      this.cookiesPurchasedTotal += cookiesCount;
    }
  },

  toHtml: function () {
    //calculateCookiesPurchased and cookiesPurchasedTotal
    this.calculateCookiesPurchased();
    var elMain = document.getElementById('content');

    var elSection = document.createElement('section');
    elMain.appendChild(elSection);

    var elH2 = document.createElement('h2');
    elH2.textContent = this.name;
    elSection.appendChild(elH2);

    var elUl = document.createElement('ul');
    elSection.appendChild(elUl);

    var elLi;

    for (var i = 0; i < this.storeHours.length; i++) {
      elLi = document. createElement('li');
      elLi.textContent = this.storeHours[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      elUl.appendChild(elLi);
    }

    //creat li for total and append to ul
    elLi = document.createElement('li');
    elLi.textContent = 'Total: ' + this.cookiesPurchasedTotal + 'cookies';
    elUl.appendChild(elLi);
  }
};


var cookieStore2 = {
  name: 'SeaTeac Airport',
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '7pm', '8pm'],
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  getRandomInt: function (){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);

    return Math.floor(Math.random() * (max - min)) + min;
  },
  cookiesPurchased:[],
  cookiesPurchasedTotal:0,
  calculateCookiesPurchased: function () {
    var cookiesCount = 0;

    for (var i = 0; i < this.storeHours.length; i++) {
      cookiesCount = Math.round(this.avgCookieSale * this.getRandomInt() );

      this.cookiesPurchased.push(cookiesCount);
      this.cookiesPurchasedTotal += cookiesCount;
    }
  },

  toHtml: function () {
    this.calculateCookiesPurchased();
    var elMain = document.getElementById('content');

    var elSection = document.createElement('section');
    elMain.appendChild(elSection);

    var elH2 = document.createElement('h2');
    elH2.textContent = this.name;
    elSection.appendChild(elH2);

    var elUl = document.createElement('ul');
    elSection.appendChild(elUl);

    var elLi;

    for (var i = 0; i < this.storeHours.length; i++) {
      elLi = document. createElement('li');
      elLi.textContent = this.storeHours[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      elUl.appendChild(elLi);
    }

    //creat li for total and append to ul
    elLi = document.createElement('li');
    elLi.textContent = 'Total: ' + this.cookiesPurchasedTotal + 'cookies';
    elUl.appendChild(elLi);
  }
};


var cookieStore3 = {
  name: 'Seattle Center',
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '7pm', '8pm'],
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  getRandomInt: function (){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);

    return Math.floor(Math.random() * (max - min)) + min;
  },
  cookiesPurchased:[],
  cookiesPurchasedTotal:0,
  calculateCookiesPurchased: function () {
    var cookiesCount = 0;

    for (var i = 0; i < this.storeHours.length; i++) {
      cookiesCount = Math.round(this.avgCookieSale * this.getRandomInt() );

      this.cookiesPurchased.push(cookiesCount);
      this.cookiesPurchasedTotal += cookiesCount;
    }
  },

  toHtml: function () {
    this.calculateCookiesPurchased();
    var elMain = document.getElementById('content');

    var elSection = document.createElement('section');
    elMain.appendChild(elSection);

    var elH2 = document.createElement('h2');
    elH2.textContent = this.name;
    elSection.appendChild(elH2);

    var elUl = document.createElement('ul');
    elSection.appendChild(elUl);

    var elLi;

    for (var i = 0; i < this.storeHours.length; i++) {
      elLi = document. createElement('li');
      elLi.textContent = this.storeHours[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      elUl.appendChild(elLi);
    }

    //creat li for total and append to ul
    elLi = document.createElement('li');
    elLi.textContent = 'Total: ' + this.cookiesPurchasedTotal + 'cookies';
    elUl.appendChild(elLi);
  }
};



var cookieStore4 = {
  name: 'Capitol Hill',
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '7pm', '8pm'],
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  getRandomInt: function (){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);

    return Math.floor(Math.random() * (max - min)) + min;
  },
  cookiesPurchased:[],
  cookiesPurchasedTotal:0,
  calculateCookiesPurchased: function () {
    var cookiesCount = 0;

    for (var i = 0; i < this.storeHours.length; i++) {
      cookiesCount = Math.round(this.avgCookieSale * this.getRandomInt() );

      this.cookiesPurchased.push(cookiesCount);
      this.cookiesPurchasedTotal += cookiesCount;
    }
  },

  toHtml: function () {
    this.calculateCookiesPurchased();
    var elMain = document.getElementById('content');

    var elSection = document.createElement('section');
    elMain.appendChild(elSection);

    var elH2 = document.createElement('h2');
    elH2.textContent = this.name;
    elSection.appendChild(elH2);

    var elUl = document.createElement('ul');
    elSection.appendChild(elUl);

    var elLi;

    for (var i = 0; i < this.storeHours.length; i++) {
      elLi = document. createElement('li');
      elLi.textContent = this.storeHours[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      elUl.appendChild(elLi);
    }

    //creat li for total and append to ul
    elLi = document.createElement('li');
    elLi.textContent = 'Total: ' + this.cookiesPurchasedTotal + 'cookies';
    elUl.appendChild(elLi);
  }
};



var cookieStore5 = {
  name: 'Alki',
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '7pm', '8pm'],
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  getRandomInt: function (){
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);

    return Math.floor(Math.random() * (max - min)) + min;
  },
  cookiesPurchased:[],
  cookiesPurchasedTotal:0,
  calculateCookiesPurchased: function () {
    var cookiesCount = 0;

    for (var i = 0; i < this.storeHours.length; i++) {
      cookiesCount = Math.round(this.avgCookieSale * this.getRandomInt() );

      this.cookiesPurchased.push(cookiesCount);
      this.cookiesPurchasedTotal += cookiesCount;
    }
  },

  toHtml: function () {
    this.calculateCookiesPurchased();
    var elMain = document.getElementById('content');

    var elSection = document.createElement('section');
    elMain.appendChild(elSection);

    var elH2 = document.createElement('h2');
    elH2.textContent = this.name;
    elSection.appendChild(elH2);

    var elUl = document.createElement('ul');
    elSection.appendChild(elUl);

    var elLi;

    for (var i = 0; i < this.storeHours.length; i++) {
      elLi = document. createElement('li');
      elLi.textContent = this.storeHours[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      elUl.appendChild(elLi);
    }

    //creat li for total and append to ul
    elLi = document.createElement('li');
    elLi.textContent = 'Total: ' + this.cookiesPurchasedTotal + 'cookies';
    elUl.appendChild(elLi);
  }
};
//call the methods

cookieStore1.toHtml();

cookieStore2.toHtml();

cookieStore3.toHtml();

cookieStore4.toHtml();

cookieStore5.toHtml();
