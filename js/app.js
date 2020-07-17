'use strict'

// ========================== Start Events

var storeForm = document.getElementById('storeForm');

storeForm.addEventListener('submit', makeAStore);

function makeAStore(event){
  event.preventDefault();

  var storeLocation = event.target.locationName.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCookiesPerCust = event.target.avgCookiePerCust.value;

  var newStore = new CookieStore(storeLocation, minCust, maxCust, avgCookiesPerCust);

  console.log(newStore);

  var lastTable = document.getElementById('allStoreInfoSummary').rows.length;
  document.getElementById("allStoreInfoSummary").deleteRow(lastTable-1);

  newStore.displayStoreLocation();

  cookieStandFooter();


}

// ========================== End Events

var storeOpenHours = 14;
var storesArray = []; 

function CookieStore(location, min, max, averageCookiesPerCustomer) {
  
  this.storeLocation = location;
  this.min = min;
  this.max = max;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.cookiesPurchasedPerHour = [];
  this.totalCookiesBought = 0;
  storesArray.push(this);


  //Code from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  this.getRandomNumberOfCustomerPerHour = function(min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 

  };
  this.displayRandomNumber = function() {

    for(var i = 0; i < storeOpenHours; i++){

      this.cookiesPurchasedPerHour[i] = Math.round(this.averageCookiesPerCustomer) * this.getRandomNumberOfCustomerPerHour(this.min, this.max);
      
    }
    
  };
  this.getTotalCookiesBought = function() {

    for(var i = 0; i < storeOpenHours; i++){

      this.totalCookiesBought += this.cookiesPurchasedPerHour[i];

    }
  };

// end of cookie stand stores info 


//header function
}

function cookieStandHeader(){
  var cookiesPurchasedPerHourCaption = 'Daily Location Total'; 
  var storeCaption = 'Store'; 
  var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  var table = document.getElementById('allStoreInfoSummary');
  var row = document.createElement('tr');

//store label
  var tableDataCell = document.createElement('th');
  tableDataCell.textContent = storeCaption;
  row.appendChild(tableDataCell);

  //Shows store locations
  for(var i = 0; i < storeOpenHours; i++){

    var tableDataCell = document.createElement('th');
    tableDataCell.textContent = storeHours[i];
    row.appendChild(tableDataCell);

  }

//daily location total label
  var tableDataCell = document.createElement('th');
  tableDataCell.textContent = cookiesPurchasedPerHourCaption;
  row.appendChild(tableDataCell);


  table.appendChild(row);

}

// start of render

CookieStore.prototype.displayStoreLocation = function(){
    
  //product of avg cookie *  getRandomNumberOfCustomerPerHour()
  this.displayRandomNumber();

  var table = document.getElementById('allStoreInfoSummary');
  var row = document.createElement('tr');

  //Shows store location
  var tableDataCell = document.createElement('td');
  tableDataCell.textContent = this.storeLocation;
  row.appendChild(tableDataCell);
  
  //shows cookies bought per hour (entire 14 hrs)
  for(var i = 0; i < storeOpenHours; i++){

    var tableDataCell = document.createElement('td');
    tableDataCell.textContent = this.cookiesPurchasedPerHour[i];
    row.appendChild(tableDataCell);

  }

  //total cookies bought
  this.getTotalCookiesBought();
  var tableDataCell = document.createElement('td');
  tableDataCell.textContent = this.totalCookiesBought;
  row.appendChild(tableDataCell);


  table.appendChild(row);   
  
}

// end of render


//footer function
// CookieStore.prototype.cookieStandFooter = function(){
function cookieStandFooter(){

  var footerTotals = 'Totals';
  var table = document.getElementById('allStoreInfoSummary');
  var row = document.createElement('tr');

  //store label
  var tableDataCell = document.createElement('th');
  tableDataCell.textContent = footerTotals;
  row.appendChild(tableDataCell);  

  // total of all location
  var totalCookiesPerHourFooter = 0;

  for(var i = 0; i < storeOpenHours; i++){


    for(var store = 0; store < storesArray.length; store++){

      // totalCookiesPerHourFooter += Math.round(storesArray[store].cookiesPurchasedPerHour[i]);
      totalCookiesPerHourFooter += storesArray[store].cookiesPurchasedPerHour[i];


      }  

    tableDataCell = document.createElement('th');
    tableDataCell.textContent = totalCookiesPerHourFooter;
    row.appendChild(tableDataCell); 
    
  }
      
  // daily location total footer
  var totalDailyLocationFooter = 0;

  for(var i = 0; i < storesArray.length; i++){

    totalDailyLocationFooter += storesArray[i].totalCookiesBought;

  }

  var tableDataCell = document.createElement('th');
  tableDataCell.textContent = totalDailyLocationFooter;
  row.appendChild(tableDataCell);


  table.appendChild(row);


}



// Sequence
cookieStandHeader();

var Seattle = new CookieStore('Seattle', 23, 65, 6.3);

var Tokyo = new CookieStore('Tokyo', 3, 24, 1.2);

var Dubai = new CookieStore('Dubai', 11, 38, 3.7);

var Paris = new CookieStore('Paris', 20, 38, 2.3);

var Lima = new CookieStore('Lima', 2, 16, 4.6);

for(var i = 0; i < storesArray.length; i++){
  storesArray[i].displayStoreLocation();
}

cookieStandFooter();


