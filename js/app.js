'strict'

// --------------Store Locations--------------
// Seattle
// Tokyo
// Dubai
// Paris 
// Lima



// -------------- Object/s --------------

var Seattle =  {

  
  numberOfCustomerPerHour : [],
  numberofCookiesBought : [],
  minCustomers : 0,
  maxCustomers : 0,
  averageCookiesPerCustomer : 0,
  storeNumberofHours : 14,
  rangeNumberForCustomer : 30,
  rangeNumberForPurchaseCookies : 30,
  
  // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  getRandomNumberOfCustomer : function(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },

  // Codes below are from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  getRandomNumberOfCookiesBought : function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

};

// -------------- Function/s --------------


//generates numbers of customer for 6am-8pm/14hrs (store open time)
function getCustomersPerHour(){

  for(var i = 0; i < Seattle.storeNumberofHours; i++){

  Seattle.numberOfCustomerPerHour[i] = (Seattle.getRandomNumberOfCustomer(Seattle.rangeNumberForCustomer));
    
  }

  console.log('No. of Customers per hour: ' + Seattle.numberOfCustomerPerHour);

}

//generates numbers of cookies bought
function getAverageCookiesBought(){

  for(var i = 0; i < Seattle.storeNumberofHours; i++){

  Seattle.numberofCookiesBought[i] = (Seattle.getRandomNumberOfCookiesBought(Seattle.rangeNumberForPurchaseCookies));
    
  }

  console.log('Avg number of cookies per customer per hour: ' +Seattle.numberofCookiesBought);

}


//max hourly customers
function getMaxCustomers(){

  Seattle.maxCustomers = Math.max(...Seattle.numberOfCustomerPerHour);
  console.log('Max Customers: ' + Seattle.maxCustomers);

  }
  

//min hourly customers  
function getMinCustomers(){

  
  Seattle.minCustomers = Math.min(...Seattle.numberOfCustomerPerHour);
  console.log('Min Customers: ' + Seattle.minCustomers);

}
  


// Sequence of Program
getCustomersPerHour();
getMaxCustomers();
getMinCustomers();
getAverageCookiesBought();

//parent | target
var listOfCookiesBoughtPerHour = document.getElementById('cookiesPerHour');

//child | create an element
var cookiesperHour = document.createElement('li');

//content of element
var numberOfCookies = document.textContent('6am: 4 cookies');

//append child to parent
listOfCookiesBoughtPerHour.appendChild(cookiesperHour);



