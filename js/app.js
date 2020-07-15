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






// // ----------- Dubai -----------
// var Dubai =  {

//   storeHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   minCustomers : 0,
//   maxCustomers : 0,
//   storeInfo : ['Dubai', 'min cust', 'max cust', 'avg cookie'],
//   numberOfCustomerPerHour : [],
//   numberofCookiesBought : [],
//   averageCookiesPerCustomer : 0,
//   storeNumberofHours : 14,
//   rangeNumberForCustomer : 30,
//   rangeNumberForPurchaseCookies : 30,
//   tableColumns : 4,

//   showLocationInfo : function() {
      
    
//           // var parent = document.getElementById('allLocationsTable');
//           // var child = document.createElement('tr');
//           // child.textContent = '<td>' + Seattle + '</td>' 
//           //                   + '<td>' + 'another one' + '</td>'
//           //                   + '<td>' + 'another one' + '</td>'  
//           //                   + '<td>' + 'another one' + '<td>';
//           // parent.appendChild(child);

//           for(var i = 0; i < this.storeInfo.length; i++){

//             var parent = document.getElementById('allDubai');
//             var child = document.createElement('td');
//             child.textContent = this.storeInfo[i];
//             parent.appendChild(child);
      
//             }
    
    
//   },
  
//   // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   // generates random number for the array numberOfCustomerPerHour
//   getRandomNumberOfCustomers : function(max) {

//     return Math.floor(Math.random() * Math.floor(max));

//   },


//   //generates numbers of customer for 6am-8pm/14hrs (store open time)
//   getCustomersPerHour : function (){

//     for(var i = 0; i < this.storeNumberofHours; i++){

//     this.numberOfCustomerPerHour[i] = (this.getRandomNumberOfCustomers(this.rangeNumberForCustomer));
      
//     }

//     // console.log('No. of Customers per hour: ' + this.numberOfCustomerPerHour);

//   },


//   // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   //  generates random number for the array numberofCookiesBought
//   getRandomNumberOfCookiesBought : function(max) {

//     return Math.floor(Math.random() * Math.floor(max));

//   },

//   listOfCookiesPerHour : function() {
  
//     for(var i = 0; i < this.numberofCookiesBought.length; i++){

//       var parent = document.getElementById('cookiesPerHourDubai');
//       var child = document.createElement('li');
//       child.textContent = this.storeHours[i] + ': ' + this.numberofCookiesBought[i];
//       parent.appendChild(child);

//       }
//     },

//   getMaxCustomers : function (){

//     this.maxCustomers = Math.max(...this.numberOfCustomerPerHour);
//     this.storeInfo[2] = this.maxCustomers;
//     // console.log('Max Customers: ' + this.maxCustomers);
  
//     },

//     //min hourly customers  
//     getMinCustomers : function (){

  
//     this.minCustomers = Math.min(...this.numberOfCustomerPerHour);
//     this.storeInfo[1] = this.minCustomers;
//     // console.log('Min Customers: ' + this.minCustomers);

//     },

//     //generates numbers of cookies bought
//   getAverageCookiesBought : function (){

//     for(var i = 0; i < this.storeNumberofHours; i++){

//     this.numberofCookiesBought[i] = (this.getRandomNumberOfCookiesBought(this.rangeNumberForPurchaseCookies));
      
//     }

//     // console.log('Avg number of cookies per customer per hour: ' + this.numberofCookiesBought);

//     },

//   getTotalCookies : function() {
    
//       var totalCookies = 0;
//       for(var i = 0; i < this.numberofCookiesBought.length; i++){

//        totalCookies += this.numberofCookiesBought[i];
//        this.storeInfo[3] = totalCookies / this.numberofCookiesBought.length;
//       }

//       // console.log(totalCookies);


//   }

// };

// // Sequence of Program

// Dubai.getCustomersPerHour();

// Dubai.getMaxCustomers();

// Dubai.getMinCustomers();

// Dubai.getAverageCookiesBought();

// Dubai.listOfCookiesPerHour();

// Dubai.getTotalCookies();

// Dubai.showLocationInfo();



// // ----------- Paris -----------

// var Paris =  {

//   storeHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   minCustomers : 0,
//   maxCustomers : 0,
//   storeInfo : ['Paris', 'min cust', 'max cust', 'avg cookie'],
//   numberOfCustomerPerHour : [],
//   numberofCookiesBought : [],
//   averageCookiesPerCustomer : 0,
//   storeNumberofHours : 14,
//   rangeNumberForCustomer : 30,
//   rangeNumberForPurchaseCookies : 30,
//   tableColumns : 4,

//   showLocationInfo : function() {
      
    
//           // var parent = document.getElementById('allLocationsTable');
//           // var child = document.createElement('tr');
//           // child.textContent = '<td>' + Seattle + '</td>' 
//           //                   + '<td>' + 'another one' + '</td>'
//           //                   + '<td>' + 'another one' + '</td>'  
//           //                   + '<td>' + 'another one' + '<td>';
//           // parent.appendChild(child);

//           for(var i = 0; i < this.storeInfo.length; i++){

//             var parent = document.getElementById('allParis');
//             var child = document.createElement('td');
//             child.textContent = this.storeInfo[i];
//             parent.appendChild(child);
      
//             }
    
    
//   },
  
//   // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   // generates random number for the array numberOfCustomerPerHour
//   getRandomNumberOfCustomers : function(max) {

//     return Math.floor(Math.random() * Math.floor(max));

//   },


//   //generates numbers of customer for 6am-8pm/14hrs (store open time)
//   getCustomersPerHour : function (){

//     for(var i = 0; i < this.storeNumberofHours; i++){

//     this.numberOfCustomerPerHour[i] = (this.getRandomNumberOfCustomers(this.rangeNumberForCustomer));
      
//     }

//     // console.log('No. of Customers per hour: ' + this.numberOfCustomerPerHour);

//   },


//   // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   //  generates random number for the array numberofCookiesBought
//   getRandomNumberOfCookiesBought : function(max) {

//     return Math.floor(Math.random() * Math.floor(max));

//   },

//   listOfCookiesPerHour : function() {
  
//     for(var i = 0; i < this.numberofCookiesBought.length; i++){

//       var parent = document.getElementById('cookiesPerHourParis');
//       var child = document.createElement('li');
//       child.textContent = this.storeHours[i] + ': ' + this.numberofCookiesBought[i];
//       parent.appendChild(child);

//       }
//     },

//   getMaxCustomers : function (){

//     this.maxCustomers = Math.max(...this.numberOfCustomerPerHour);
//     this.storeInfo[2] = this.maxCustomers;
//     // console.log('Max Customers: ' + this.maxCustomers);
  
//     },

//     //min hourly customers  
//     getMinCustomers : function (){

  
//     this.minCustomers = Math.min(...this.numberOfCustomerPerHour);
//     this.storeInfo[1] = this.minCustomers;
//     // console.log('Min Customers: ' + this.minCustomers);

//     },

//     //generates numbers of cookies bought
//   getAverageCookiesBought : function (){

//     for(var i = 0; i < this.storeNumberofHours; i++){

//     this.numberofCookiesBought[i] = (this.getRandomNumberOfCookiesBought(this.rangeNumberForPurchaseCookies));
      
//     }

//     // console.log('Avg number of cookies per customer per hour: ' + this.numberofCookiesBought);

//     },

//   getTotalCookies : function() {
    
//       var totalCookies = 0;
//       for(var i = 0; i < this.numberofCookiesBought.length; i++){

//        totalCookies += this.numberofCookiesBought[i];
//        this.storeInfo[3] = totalCookies / this.numberofCookiesBought.length;
//       }

//       // console.log(totalCookies);


//   }

// };

// // Sequence of Program

// Paris.getCustomersPerHour();

// Paris.getMaxCustomers();

// Paris.getMinCustomers();

// Paris.getAverageCookiesBought();

// Paris.listOfCookiesPerHour();

// Paris.getTotalCookies();

// Paris.showLocationInfo();



// // ----------- Lima -----------

// var Lima =  {

//   storeHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   minCustomers : 0,
//   maxCustomers : 0,
//   storeInfo : ['Lima', 'min cust', 'max cust', 'avg cookie'],
//   numberOfCustomerPerHour : [],
//   numberofCookiesBought : [],
//   averageCookiesPerCustomer : 0,
//   storeNumberofHours : 14,
//   rangeNumberForCustomer : 30,
//   rangeNumberForPurchaseCookies : 30,
//   tableColumns : 4,

//   showLocationInfo : function() {
      
    
//           // var parent = document.getElementById('allLocationsTable');
//           // var child = document.createElement('tr');
//           // child.textContent = '<td>' + Seattle + '</td>' 
//           //                   + '<td>' + 'another one' + '</td>'
//           //                   + '<td>' + 'another one' + '</td>'  
//           //                   + '<td>' + 'another one' + '<td>';
//           // parent.appendChild(child);

//           for(var i = 0; i < this.storeInfo.length; i++){

//             var parent = document.getElementById('allLima');
//             var child = document.createElement('td');
//             child.textContent = this.storeInfo[i];
//             parent.appendChild(child);
      
//             }
    
    
//   },
  
//   // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   // generates random number for the array numberOfCustomerPerHour
//   getRandomNumberOfCustomers : function(max) {

//     return Math.floor(Math.random() * Math.floor(max));

//   },


//   //generates numbers of customer for 6am-8pm/14hrs (store open time)
//   getCustomersPerHour : function (){

//     for(var i = 0; i < this.storeNumberofHours; i++){

//     this.numberOfCustomerPerHour[i] = (this.getRandomNumberOfCustomers(this.rangeNumberForCustomer));
      
//     }

//     // console.log('No. of Customers per hour: ' + this.numberOfCustomerPerHour);

//   },


//   // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   //  generates random number for the array numberofCookiesBought
//   getRandomNumberOfCookiesBought : function(max) {

//     return Math.floor(Math.random() * Math.floor(max));

//   },

//   listOfCookiesPerHour : function() {
  
//     for(var i = 0; i < this.numberofCookiesBought.length; i++){

//       var parent = document.getElementById('cookiesPerHourLima');
//       var child = document.createElement('li');
//       child.textContent = this.storeHours[i] + ': ' + this.numberofCookiesBought[i];
//       parent.appendChild(child);

//       }
//     },

//   getMaxCustomers : function (){

//     this.maxCustomers = Math.max(...this.numberOfCustomerPerHour);
//     this.storeInfo[2] = this.maxCustomers;
//     // console.log('Max Customers: ' + this.maxCustomers);
  
//     },

//     //min hourly customers  
//     getMinCustomers : function (){

  
//     this.minCustomers = Math.min(...this.numberOfCustomerPerHour);
//     this.storeInfo[1] = this.minCustomers;
//     // console.log('Min Customers: ' + this.minCustomers);

//     },

//     //generates numbers of cookies bought
//   getAverageCookiesBought : function (){

//     for(var i = 0; i < this.storeNumberofHours; i++){

//     this.numberofCookiesBought[i] = (this.getRandomNumberOfCookiesBought(this.rangeNumberForPurchaseCookies));
      
//     }

//     // console.log('Avg number of cookies per customer per hour: ' + this.numberofCookiesBought);

//     },

//   getTotalCookies : function() {
    
//       var totalCookies = 0;
//       for(var i = 0; i < this.numberofCookiesBought.length; i++){

//        totalCookies += this.numberofCookiesBought[i];
//        this.storeInfo[3] = totalCookies / this.numberofCookiesBought.length;
//       }

//       // console.log(totalCookies);


//   }

// };

// // Sequence of Program

// Lima.getCustomersPerHour();

// Lima.getMaxCustomers();

// Lima.getMinCustomers();

// Lima.getAverageCookiesBought();

// Lima.listOfCookiesPerHour();

// Lima.getTotalCookies();

// Lima.showLocationInfo();