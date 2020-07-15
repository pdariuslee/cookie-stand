'strict'


function CookieStore(location, min, max, averageCookiesPerCustomer) {

  this.storeLocation = location;
  this.min = min;
  this.max = max;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.cookiesPurchasedPerHour = [];
  this.totalCookiesBought = 0;
  this.displayStoreLocation = function() {
    
    //product of avg cookie *  getRandomNumberOfCustomerPerHour()
    this.displayRandomNumber();

    var table = document.getElementById('allStoreInfoSummary');
    var row = document.createElement('tr');

    //Shows store location
    var tableDataCell = document.createElement('td');
    tableDataCell.textContent = this.storeLocation;
    row.appendChild(tableDataCell);
    
    //shows cookies bought per hour (entire 14 hrs)
    for(var i = 0; i < 14; i++){

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
    
  };
  this.getRandomNumberOfCustomerPerHour = function(min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 

  };
  this.displayRandomNumber = function() {

    for(var i = 0; i < 14; i++){

      this.cookiesPurchasedPerHour[i] = Math.round(this.averageCookiesPerCustomer) * this.getRandomNumberOfCustomerPerHour(this.min, this.max);
      
    }
    
  };
  this.getTotalCookiesBought = function() {

    for(var i = 0; i < 14; i++){

      this.totalCookiesBought += this.cookiesPurchasedPerHour[i];

    }
  };

// end of cookie stand stores info 


//header function
}

function cookieStandHeader(){

  this.storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  this.storeCaption = 'Store'; 
  this.cookiesPurchasedPerHourCaption = 'Daily Location Total'; 

  var table = document.getElementById('allStoreInfoSummary');
  var row = document.createElement('tr');

//store label
  var tableDataCell = document.createElement('th');
  tableDataCell.textContent = this.storeCaption;
  row.appendChild(tableDataCell);

  //Shows store locations
  for(var i = 0; i < 14; i++){

    var tableDataCell = document.createElement('th');
    tableDataCell.textContent = this.storeHours[i];
    row.appendChild(tableDataCell);

  }

//daily location total label
  var tableDataCell = document.createElement('th');
  tableDataCell.textContent = this.cookiesPurchasedPerHourCaption;
  row.appendChild(tableDataCell);


  table.appendChild(row);

}


//footer function

function cookieStandFooter(){

  this.footerTotals = 'Totals';

  var table = document.getElementById('allStoreInfoSummary');
  var row = document.createElement('tr');

  //store label
  var tableDataCell = document.createElement('th');
  tableDataCell.textContent = this.footerTotals;
  row.appendChild(tableDataCell);  

  //total of all location
  this.totalCookiesPerHourFooter = 0;

  for(var i = 0; i < 14; i++){

    totalCookiesPerHourFooter = Seattle.cookiesPurchasedPerHour[i] + Tokyo.cookiesPurchasedPerHour[i] + Dubai.cookiesPurchasedPerHour[i] + Paris.cookiesPurchasedPerHour[i] + Lima.cookiesPurchasedPerHour[i];

    var tableDataCell = document.createElement('th');
    tableDataCell.textContent = this.totalCookiesPerHourFooter;
    row.appendChild(tableDataCell); 

  }

  //daily location total footer
  this.totalDailyLocationFooter = 0;
  totalDailyLocationFooter = Seattle.totalCookiesBought + Tokyo.totalCookiesBought + Dubai.totalCookiesBought + Paris.totalCookiesBought + Lima.totalCookiesBought;


  var tableDataCell = document.createElement('th');
  tableDataCell.textContent = this.totalDailyLocationFooter;
  row.appendChild(tableDataCell);


  table.appendChild(row);


}

// Sequence
cookieStandHeader();

var Seattle = new CookieStore('Seattle', 23, 65, 6.3);
Seattle.displayStoreLocation();

var Tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
Tokyo.displayStoreLocation();

var Dubai = new CookieStore('Dubai', 11, 38, 3.7);
Dubai.displayStoreLocation();

var Paris = new CookieStore('Paris', 20, 38, 2.3);
Paris.displayStoreLocation();

var Lima = new CookieStore('Lima', 2, 16, 4.6);
Lima.displayStoreLocation();

cookieStandFooter();


