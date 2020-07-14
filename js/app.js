'strict'

// --------------Store Locations--------------
// Seattle
// Tokyo
// Dubai
// Paris 
// Lima



// -------------- Object/s --------------


var Seattle =  {

  storeHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  numberOfCustomerPerHour : [],
  numberofCookiesBought : [],
  minCustomers : 0,
  maxCustomers : 0,
  averageCookiesPerCustomer : 0,
  storeNumberofHours : 14,
  rangeNumberForCustomer : 30,
  rangeNumberForPurchaseCookies : 30,
  
  // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // generates random number for the array numberOfCustomerPerHour
  getRandomNumberOfCustomers : function(max) {

    return Math.floor(Math.random() * Math.floor(max));

  },


  //generates numbers of customer for 6am-8pm/14hrs (store open time)
  getCustomersPerHour : function (){

    for(var i = 0; i < this.storeNumberofHours; i++){

    this.numberOfCustomerPerHour[i] = (this.getRandomNumberOfCustomers(this.rangeNumberForCustomer));
      
    }

    console.log('No. of Customers per hour: ' + this.numberOfCustomerPerHour);

  },


  // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //  generates random number for the array numberofCookiesBought
  getRandomNumberOfCookiesBought : function(max) {

    return Math.floor(Math.random() * Math.floor(max));

  },

  listOfCookiesPerHour : function() {
  
    for(var i = 0; i < this.numberofCookiesBought.length; i++){

      var parent = document.getElementById('cookiesPerHourSeattle');
      var child = document.createElement('li');
      child.textContent = this.storeHours[i] + ': ' + this.numberofCookiesBought[i];
      parent.appendChild(child);

      }
    },

  getMaxCustomers : function (){

    this.maxCustomers = Math.max(...this.numberOfCustomerPerHour);
    console.log('Max Customers: ' + this.maxCustomers);
  
    },

    //min hourly customers  
    getMinCustomers : function (){

  
    this.minCustomers = Math.min(...this.numberOfCustomerPerHour);
    console.log('Min Customers: ' + this.minCustomers);

    },

    //generates numbers of cookies bought
  getAverageCookiesBought : function (){

    for(var i = 0; i < this.storeNumberofHours; i++){

    this.numberofCookiesBought[i] = (this.getRandomNumberOfCookiesBought(this.rangeNumberForPurchaseCookies));
      
    }

    console.log('Avg number of cookies per customer per hour: ' + this.numberofCookiesBought);

    },

  getTotalCookies : function() {
    
      var totalCookies = 0;
      for(var i = 0; i < this.numberofCookiesBought.length; i++){

       totalCookies += this.numberofCookiesBought[i];

      }

      console.log(totalCookies);


  }

};


// Sequence of Program

Seattle.getCustomersPerHour();

Seattle.getMaxCustomers();

Seattle.getMinCustomers();

Seattle.getAverageCookiesBought();

Seattle.listOfCookiesPerHour();

Seattle.getTotalCookies();



// ----------- Tokyo -----------
var Tokyo =  {

  storeHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  numberOfCustomerPerHour : [],
  numberofCookiesBought : [],
  minCustomers : 0,
  maxCustomers : 0,
  averageCookiesPerCustomer : 0,
  storeNumberofHours : 14,
  rangeNumberForCustomer : 30,
  rangeNumberForPurchaseCookies : 30,
  
  // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // generates random number for the array numberOfCustomerPerHour
  getRandomNumberOfCustomers : function(max) {

    return Math.floor(Math.random() * Math.floor(max));

  },


  //generates numbers of customer for 6am-8pm/14hrs (store open time)
  getCustomersPerHour : function (){

    for(var i = 0; i < this.storeNumberofHours; i++){

    this.numberOfCustomerPerHour[i] = (this.getRandomNumberOfCustomers(this.rangeNumberForCustomer));
      
    }

    console.log('No. of Customers per hour: ' + this.numberOfCustomerPerHour);

  },


  // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //  generates random number for the array numberofCookiesBought
  getRandomNumberOfCookiesBought : function(max) {

    return Math.floor(Math.random() * Math.floor(max));

  },

  listOfCookiesPerHour : function() {
  
    for(var i = 0; i < this.numberofCookiesBought.length; i++){

      var parent = document.getElementById('cookiesPerHourTokyo');
      var child = document.createElement('li');
      child.textContent = this.storeHours[i] + ': ' + this.numberofCookiesBought[i];
      parent.appendChild(child);

      }
    },

  getMaxCustomers : function (){

    this.maxCustomers = Math.max(...this.numberOfCustomerPerHour);
    console.log('Max Customers: ' + this.maxCustomers);
  
    },

    //min hourly customers  
    getMinCustomers : function (){

  
    this.minCustomers = Math.min(...this.numberOfCustomerPerHour);
    console.log('Min Customers: ' + this.minCustomers);

    },

    //generates numbers of cookies bought
  getAverageCookiesBought : function (){

    for(var i = 0; i < this.storeNumberofHours; i++){

    this.numberofCookiesBought[i] = (this.getRandomNumberOfCookiesBought(this.rangeNumberForPurchaseCookies));
      
    }

    console.log('Avg number of cookies per customer per hour: ' + this.numberofCookiesBought);

    },

  getTotalCookies : function() {
    
      var totalCookies = 0;
      for(var i = 0; i < this.numberofCookiesBought.length; i++){

       totalCookies += this.numberofCookiesBought[i];

      }

      console.log(totalCookies);


  }

};

// Sequence of Program

Tokyo.getCustomersPerHour();

Tokyo.getMaxCustomers();

Tokyo.getMinCustomers();

Tokyo.getAverageCookiesBought();

Tokyo.listOfCookiesPerHour();

Tokyo.getTotalCookies();



// ----------- Dubai -----------
var Dubai =  {

  storeHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  numberOfCustomerPerHour : [],
  numberofCookiesBought : [],
  minCustomers : 0,
  maxCustomers : 0,
  averageCookiesPerCustomer : 0,
  storeNumberofHours : 14,
  rangeNumberForCustomer : 30,
  rangeNumberForPurchaseCookies : 30,
  
  // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // generates random number for the array numberOfCustomerPerHour
  getRandomNumberOfCustomers : function(max) {

    return Math.floor(Math.random() * Math.floor(max));

  },


  //generates numbers of customer for 6am-8pm/14hrs (store open time)
  getCustomersPerHour : function (){

    for(var i = 0; i < this.storeNumberofHours; i++){

    this.numberOfCustomerPerHour[i] = (this.getRandomNumberOfCustomers(this.rangeNumberForCustomer));
      
    }

    console.log('No. of Customers per hour: ' + this.numberOfCustomerPerHour);

  },


  // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //  generates random number for the array numberofCookiesBought
  getRandomNumberOfCookiesBought : function(max) {

    return Math.floor(Math.random() * Math.floor(max));

  },

  listOfCookiesPerHour : function() {
  
    for(var i = 0; i < this.numberofCookiesBought.length; i++){

      var parent = document.getElementById('cookiesPerHourDubai');
      var child = document.createElement('li');
      child.textContent = this.storeHours[i] + ': ' + this.numberofCookiesBought[i];
      parent.appendChild(child);

      }
    },

  getMaxCustomers : function (){

    this.maxCustomers = Math.max(...this.numberOfCustomerPerHour);
    console.log('Max Customers: ' + this.maxCustomers);
  
    },

    //min hourly customers  
    getMinCustomers : function (){

  
    this.minCustomers = Math.min(...this.numberOfCustomerPerHour);
    console.log('Min Customers: ' + this.minCustomers);

    },

    //generates numbers of cookies bought
  getAverageCookiesBought : function (){

    for(var i = 0; i < this.storeNumberofHours; i++){

    this.numberofCookiesBought[i] = (this.getRandomNumberOfCookiesBought(this.rangeNumberForPurchaseCookies));
      
    }

    console.log('Avg number of cookies per customer per hour: ' + this.numberofCookiesBought);

    },

  getTotalCookies : function() {
    
      var totalCookies = 0;
      for(var i = 0; i < this.numberofCookiesBought.length; i++){

       totalCookies += this.numberofCookiesBought[i];

      }

      console.log(totalCookies);


  }

};

// Sequence of Program

Dubai.getCustomersPerHour();

Dubai.getMaxCustomers();

Dubai.getMinCustomers();

Dubai.getAverageCookiesBought();

Dubai.listOfCookiesPerHour();

Dubai.getTotalCookies();



// ----------- Paris -----------

var Paris =  {

  storeHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  numberOfCustomerPerHour : [],
  numberofCookiesBought : [],
  minCustomers : 0,
  maxCustomers : 0,
  averageCookiesPerCustomer : 0,
  storeNumberofHours : 14,
  rangeNumberForCustomer : 30,
  rangeNumberForPurchaseCookies : 30,
  
  // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // generates random number for the array numberOfCustomerPerHour
  getRandomNumberOfCustomers : function(max) {

    return Math.floor(Math.random() * Math.floor(max));

  },


  //generates numbers of customer for 6am-8pm/14hrs (store open time)
  getCustomersPerHour : function (){

    for(var i = 0; i < this.storeNumberofHours; i++){

    this.numberOfCustomerPerHour[i] = (this.getRandomNumberOfCustomers(this.rangeNumberForCustomer));
      
    }

    console.log('No. of Customers per hour: ' + this.numberOfCustomerPerHour);

  },


  // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //  generates random number for the array numberofCookiesBought
  getRandomNumberOfCookiesBought : function(max) {

    return Math.floor(Math.random() * Math.floor(max));

  },

  listOfCookiesPerHour : function() {
  
    for(var i = 0; i < this.numberofCookiesBought.length; i++){

      var parent = document.getElementById('cookiesPerHourParis');
      var child = document.createElement('li');
      child.textContent = this.storeHours[i] + ': ' + this.numberofCookiesBought[i];
      parent.appendChild(child);

      }
    },

  getMaxCustomers : function (){

    this.maxCustomers = Math.max(...this.numberOfCustomerPerHour);
    console.log('Max Customers: ' + this.maxCustomers);
  
    },

    //min hourly customers  
    getMinCustomers : function (){

  
    this.minCustomers = Math.min(...this.numberOfCustomerPerHour);
    console.log('Min Customers: ' + this.minCustomers);

    },

    //generates numbers of cookies bought
  getAverageCookiesBought : function (){

    for(var i = 0; i < this.storeNumberofHours; i++){

    this.numberofCookiesBought[i] = (this.getRandomNumberOfCookiesBought(this.rangeNumberForPurchaseCookies));
      
    }

    console.log('Avg number of cookies per customer per hour: ' + this.numberofCookiesBought);

    },

  getTotalCookies : function() {
    
      var totalCookies = 0;
      for(var i = 0; i < this.numberofCookiesBought.length; i++){

       totalCookies += this.numberofCookiesBought[i];

      }

      console.log(totalCookies);


  }

};

// Sequence of Program

Paris.getCustomersPerHour();

Paris.getMaxCustomers();

Paris.getMinCustomers();

Paris.getAverageCookiesBought();

Paris.listOfCookiesPerHour();

Paris.getTotalCookies();



// ----------- Lima -----------

var Lima =  {

  storeHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  numberOfCustomerPerHour : [],
  numberofCookiesBought : [],
  minCustomers : 0,
  maxCustomers : 0,
  averageCookiesPerCustomer : 0,
  storeNumberofHours : 14,
  rangeNumberForCustomer : 30,
  rangeNumberForPurchaseCookies : 30,
  
  // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // generates random number for the array numberOfCustomerPerHour
  getRandomNumberOfCustomers : function(max) {

    return Math.floor(Math.random() * Math.floor(max));

  },


  //generates numbers of customer for 6am-8pm/14hrs (store open time)
  getCustomersPerHour : function (){

    for(var i = 0; i < this.storeNumberofHours; i++){

    this.numberOfCustomerPerHour[i] = (this.getRandomNumberOfCustomers(this.rangeNumberForCustomer));
      
    }

    console.log('No. of Customers per hour: ' + this.numberOfCustomerPerHour);

  },


  // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //  generates random number for the array numberofCookiesBought
  getRandomNumberOfCookiesBought : function(max) {

    return Math.floor(Math.random() * Math.floor(max));

  },

  listOfCookiesPerHour : function() {
  
    for(var i = 0; i < this.numberofCookiesBought.length; i++){

      var parent = document.getElementById('cookiesPerHourLima');
      var child = document.createElement('li');
      child.textContent = this.storeHours[i] + ': ' + this.numberofCookiesBought[i];
      parent.appendChild(child);

      }
    },

  getMaxCustomers : function (){

    this.maxCustomers = Math.max(...this.numberOfCustomerPerHour);
    console.log('Max Customers: ' + this.maxCustomers);
  
    },

    //min hourly customers  
    getMinCustomers : function (){

  
    this.minCustomers = Math.min(...this.numberOfCustomerPerHour);
    console.log('Min Customers: ' + this.minCustomers);

    },

    //generates numbers of cookies bought
  getAverageCookiesBought : function (){

    for(var i = 0; i < this.storeNumberofHours; i++){

    this.numberofCookiesBought[i] = (this.getRandomNumberOfCookiesBought(this.rangeNumberForPurchaseCookies));
      
    }

    console.log('Avg number of cookies per customer per hour: ' + this.numberofCookiesBought);

    },

  getTotalCookies : function() {
    
      var totalCookies = 0;
      for(var i = 0; i < this.numberofCookiesBought.length; i++){

       totalCookies += this.numberofCookiesBought[i];

      }

      console.log(totalCookies);


  }

};

// Sequence of Program

Lima.getCustomersPerHour();

Lima.getMaxCustomers();

Lima.getMinCustomers();

Lima.getAverageCookiesBought();

Lima.listOfCookiesPerHour();

Lima.getTotalCookies();