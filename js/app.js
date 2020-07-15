'strict'

// --------------Store Locations--------------
// Seattle
// Tokyo
// Dubai
// Paris 
// Lima



// ----------------- Seattle Start -----------------

var Seattle =  {

  minCustomers : 2,
  maxCustomers : 10,
  averageCookiesPerCustomer : 7,
  cookiesPurchasedPerHour : [],
  storeHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  storeInfoSummary : ['Seattle', this.minCustomers, this.maxCustomers, this.averageCookiesPerCustomer],

  getRandomNumberOfCustomersPerHour : function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  },

  getCookiesPurchasedPerHour : function() {

    for(var i = 0; i < 14; i++){

      this.cookiesPurchasedPerHour[i] = this.averageCookiesPerCustomer * (this.getRandomNumberOfCustomersPerHour(this.minCustomers, this.maxCustomers));

    }

  },

  displayCookiesPurchasedPerHour : function(){

    this.getCookiesPurchasedPerHour();

    for(var i = 0; i < 14; i++){

      var parent = document.getElementById('seattleCookiesPurchasedPerHour');
      var child = document.createElement('li');
      child.textContent = this.storeHours[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      parent.appendChild(child);

      }
      
  },
    

  displayTotalCookiesPurchased : function() {

    var totalCookiesPurchased = 0;
    for(var i = 0; i < 14; i++){
      totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
    }

    var parent = document.getElementById('seattleCookiesPurchasedPerHour');
    var child = document.createElement('li');
    child.textContent = 'Total: ' + totalCookiesPurchased + ' cookies';
    parent.appendChild(child);

  },

  displayStoreInfoSummary : function() {
    
    this.storeInfoSummary[1] = this.minCustomers;
    this.storeInfoSummary[2] = this.maxCustomers;
    this.storeInfoSummary[3] = this.averageCookiesPerCustomer;

    var table = document.getElementById('allStoreInfoSummary');
    var row = document.createElement('tr');

    for(var i = 0; i < this.storeInfoSummary.length; i++){

      var tableDataCell = document.createElement('td');
      tableDataCell.textContent = this.storeInfoSummary[i];
      row.appendChild(tableDataCell);

    }

    table.appendChild(row);   

  }

    
};


// Sequence of Program

 Seattle.displayCookiesPurchasedPerHour();
 Seattle.displayTotalCookiesPurchased();
 Seattle.displayStoreInfoSummary();

 // ----------------- Seattle End -----------------



// ----------------- Tokyo Start -----------------

var Tokyo =  {

  minCustomers : 3,
  maxCustomers : 11,
  averageCookiesPerCustomer : 5,
  cookiesPurchasedPerHour : [],
  storeHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  storeInfoSummary : ['Tokyo', this.minCustomers, this.maxCustomers, this.averageCookiesPerCustomer],

  getRandomNumberOfCustomersPerHour : function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  },

  getCookiesPurchasedPerHour : function() {

    for(var i = 0; i < 14; i++){

      this.cookiesPurchasedPerHour[i] = this.averageCookiesPerCustomer * (this.getRandomNumberOfCustomersPerHour(this.minCustomers, this.maxCustomers));

    }

  },

  displayCookiesPurchasedPerHour : function(){

    this.getCookiesPurchasedPerHour();

    for(var i = 0; i < 14; i++){

      var parent = document.getElementById('tokyoCookiesPurchasedPerHour');
      var child = document.createElement('li');
      child.textContent = this.storeHours[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      parent.appendChild(child);

      }
      
  },
    

  displayTotalCookiesPurchased : function() {

    var totalCookiesPurchased = 0;
    for(var i = 0; i < 14; i++){
      totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
    }

    var parent = document.getElementById('tokyoCookiesPurchasedPerHour');
    var child = document.createElement('li');
    child.textContent = 'Total: ' + totalCookiesPurchased + ' cookies';
    parent.appendChild(child);

  },

  displayStoreInfoSummary : function() {
    
    this.storeInfoSummary[1] = this.minCustomers;
    this.storeInfoSummary[2] = this.maxCustomers;
    this.storeInfoSummary[3] = this.averageCookiesPerCustomer;

    var table = document.getElementById('allStoreInfoSummary');
    var row = document.createElement('tr');

    for(var i = 0; i < this.storeInfoSummary.length; i++){

      var tableDataCell = document.createElement('td');
      tableDataCell.textContent = this.storeInfoSummary[i];
      row.appendChild(tableDataCell);

    }

    table.appendChild(row);   

  }

    
};


// Sequence of Program

 Tokyo.displayCookiesPurchasedPerHour();
 Tokyo.displayTotalCookiesPurchased();
 Tokyo.displayStoreInfoSummary();

// ----------------- Tokyo End -----------------



// ----------------- Dubai Start -----------------

var Dubai =  {

  minCustomers : 6,
  maxCustomers : 12,
  averageCookiesPerCustomer : 9,
  cookiesPurchasedPerHour : [],
  storeHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  storeInfoSummary : ['Dubai', this.minCustomers, this.maxCustomers, this.averageCookiesPerCustomer],

  getRandomNumberOfCustomersPerHour : function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  },

  getCookiesPurchasedPerHour : function() {

    for(var i = 0; i < 14; i++){

      this.cookiesPurchasedPerHour[i] = this.averageCookiesPerCustomer * (this.getRandomNumberOfCustomersPerHour(this.minCustomers, this.maxCustomers));

    }

  },

  displayCookiesPurchasedPerHour : function(){

    this.getCookiesPurchasedPerHour();

    for(var i = 0; i < 14; i++){

      var parent = document.getElementById('dubaiCookiesPurchasedPerHour');
      var child = document.createElement('li');
      child.textContent = this.storeHours[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      parent.appendChild(child);

      }
      
  },
    

  displayTotalCookiesPurchased : function() {

    var totalCookiesPurchased = 0;
    for(var i = 0; i < 14; i++){
      totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
    }

    var parent = document.getElementById('dubaiCookiesPurchasedPerHour');
    var child = document.createElement('li');
    child.textContent = 'Total: ' + totalCookiesPurchased + ' cookies';
    parent.appendChild(child);

  },

  displayStoreInfoSummary : function() {
    
    this.storeInfoSummary[1] = this.minCustomers;
    this.storeInfoSummary[2] = this.maxCustomers;
    this.storeInfoSummary[3] = this.averageCookiesPerCustomer;

    var table = document.getElementById('allStoreInfoSummary');
    var row = document.createElement('tr');

    for(var i = 0; i < this.storeInfoSummary.length; i++){

      var tableDataCell = document.createElement('td');
      tableDataCell.textContent = this.storeInfoSummary[i];
      row.appendChild(tableDataCell);

    }

    table.appendChild(row);   

  }

    
};


// Sequence of Program

 Dubai.displayCookiesPurchasedPerHour();
 Dubai.displayTotalCookiesPurchased();
 Dubai.displayStoreInfoSummary();

// ----------------- Dubai End -----------------



// ----------------- Paris Start -----------------

var Paris =  {

  minCustomers : 2,
  maxCustomers : 14,
  averageCookiesPerCustomer : 10,
  cookiesPurchasedPerHour : [],
  storeHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  storeInfoSummary : ['Paris', this.minCustomers, this.maxCustomers, this.averageCookiesPerCustomer],

  getRandomNumberOfCustomersPerHour : function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  },

  getCookiesPurchasedPerHour : function() {

    for(var i = 0; i < 14; i++){

      this.cookiesPurchasedPerHour[i] = this.averageCookiesPerCustomer * (this.getRandomNumberOfCustomersPerHour(this.minCustomers, this.maxCustomers));

    }

  },

  displayCookiesPurchasedPerHour : function(){

    this.getCookiesPurchasedPerHour();

    for(var i = 0; i < 14; i++){

      var parent = document.getElementById('parisCookiesPurchasedPerHour');
      var child = document.createElement('li');
      child.textContent = this.storeHours[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      parent.appendChild(child);

      }
      
  },
    

  displayTotalCookiesPurchased : function() {

    var totalCookiesPurchased = 0;
    for(var i = 0; i < 14; i++){
      totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
    }

    var parent = document.getElementById('parisCookiesPurchasedPerHour');
    var child = document.createElement('li');
    child.textContent = 'Total: ' + totalCookiesPurchased + ' cookies';
    parent.appendChild(child);

  },

  displayStoreInfoSummary : function() {
    
    this.storeInfoSummary[1] = this.minCustomers;
    this.storeInfoSummary[2] = this.maxCustomers;
    this.storeInfoSummary[3] = this.averageCookiesPerCustomer;

    var table = document.getElementById('allStoreInfoSummary');
    var row = document.createElement('tr');

    for(var i = 0; i < this.storeInfoSummary.length; i++){

      var tableDataCell = document.createElement('td');
      tableDataCell.textContent = this.storeInfoSummary[i];
      row.appendChild(tableDataCell);

    }

    table.appendChild(row);   

  }

    
};


// Sequence of Program

 Paris.displayCookiesPurchasedPerHour();
 Paris.displayTotalCookiesPurchased();
 Paris.displayStoreInfoSummary();

// ----------------- Paris End -----------------


// ----------------- Lima Start -----------------

var Lima =  {

  minCustomers : 2,
  maxCustomers : 8,
  averageCookiesPerCustomer : 15,
  cookiesPurchasedPerHour : [],
  storeHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  storeInfoSummary : ['Lima', this.minCustomers, this.maxCustomers, this.averageCookiesPerCustomer],

  getRandomNumberOfCustomersPerHour : function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  },

  getCookiesPurchasedPerHour : function() {

    for(var i = 0; i < 14; i++){

      this.cookiesPurchasedPerHour[i] = this.averageCookiesPerCustomer * (this.getRandomNumberOfCustomersPerHour(this.minCustomers, this.maxCustomers));

    }

  },

  displayCookiesPurchasedPerHour : function(){

    this.getCookiesPurchasedPerHour();

    for(var i = 0; i < 14; i++){

      var parent = document.getElementById('limaCookiesPurchasedPerHour');
      var child = document.createElement('li');
      child.textContent = this.storeHours[i] + ': ' + this.cookiesPurchasedPerHour[i] + ' cookies';
      parent.appendChild(child);

      }
      
  },
    

  displayTotalCookiesPurchased : function() {

    var totalCookiesPurchased = 0;
    for(var i = 0; i < 14; i++){
      totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
    }

    var parent = document.getElementById('limaCookiesPurchasedPerHour');
    var child = document.createElement('li');
    child.textContent = 'Total: ' + totalCookiesPurchased + ' cookies';
    parent.appendChild(child);

  },

  displayStoreInfoSummary : function() {
    
    this.storeInfoSummary[1] = this.minCustomers;
    this.storeInfoSummary[2] = this.maxCustomers;
    this.storeInfoSummary[3] = this.averageCookiesPerCustomer;

    var table = document.getElementById('allStoreInfoSummary');
    var row = document.createElement('tr');

    for(var i = 0; i < this.storeInfoSummary.length; i++){

      var tableDataCell = document.createElement('td');
      tableDataCell.textContent = this.storeInfoSummary[i];
      row.appendChild(tableDataCell);

    }

    table.appendChild(row);   

  }

    
};


// Sequence of Program

 Lima.displayCookiesPurchasedPerHour();
 Lima.displayTotalCookiesPurchased();
 Lima.displayStoreInfoSummary();

// ----------------- Lima End -----------------
