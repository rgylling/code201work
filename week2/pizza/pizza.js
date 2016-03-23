
//Function for logging store names
function title (a){
  var Content = document.createElement('li');
    var newText = document.createTextNode (a);
      Content.appendChild(newText);
        var position = document.getElementById('pleasework');
          if (position){position.appendChild(Content)}
}

//Function to compute my random number between a min and max number
function myRandomNumber (min,max) {
  return Math.floor(Math.random() * (max-min +1)) + min;
}

//Function to compute my drivers recommendeds

function drivers (a) {
  var answer =  Math.ceil(a / 3)
    if ( answer == 0 || answer < 0) {
      return "Driver not recommended";
        } else {
          return "Drivers recommended: " + answer;
    }
} ;

function checkNum (a,b) {
  var doesthiswork = 0;
    var doeswork = 1;
      if (a == 0){
        doesthiswork * b;
          return doesthiswork
            } else if (a == 1){
              doeswork * (b-b+1);
                return doeswork
                  } else {
                    return b
}
}

// This loops through my each of my sections and posts it to the page
var totalArr = [];
var totalPizza;
function loopMe(a, b, c, d) {
  for (i = 0; i < a.length; i++) {
        var randomDriver = myRandomNumber(c[0], c[1]);
          var pizzaMath = myRandomNumber(b[0], b[1]);
            var checkNumber = checkNum(pizzaMath,randomDriver);
              var driverMath = drivers(checkNumber);
                totalArr.push(pizzaMath);
                  var pizzaContent = document.createElement('li');
                    var newText = document.createTextNode ( a[i] + pizzaMath + " pizzas " + checkNumber + " deliveries -- [" + driverMath + "]");
                      pizzaContent.appendChild(newText);
                        var position = document.getElementById('pleasework');
                          if(position){ position.appendChild(pizzaContent)}

  }
                            totalPizza = totalArr.reduce(function(a, b) {
                              return a + b;
  });

                                console.log(totalPizza);
};


// Object for my first location
var locationOne = {
  name: 'Beaverton',
  timeslotone:["8:00am ","9:00am ","10:00am "],
  timeslottwo:["11:00am ","12:00am ","1:00pm "],
  timeslotthree:["2:00pm ","3:00pm ","4:00pm "],
  timeslotfour:["5:00pm ","6:00pm ","7:00pm "],
  timeslotfive:["8:00pm ", "9:00pm " , "10:00pm "],
  timeslotsix:["11:00pm " , "12:00pm ", "1:00pm "],
  pizzaone: [0,4],
  pizzatwo: [0,7],
  pizzathree: [2,15],
  pizzafour:  [15,35],
  pizzafive:  [12,31],
  pizzasix: [5,20],
  delivery1: [0,4],
  delivery2: [0,4],
  delivery3: [1,4],
  delivery4: [3,8],
  delivery5: [5,12],
  delivery6: [6,11],
};
// Object for my second location
var locationTwo = {
  name: 'Hillsboro',
  timeslotone:["8:00am ","9:00am ","10:00am "],
  timeslottwo:["11:00am ","12:00am ","1:00pm "],
  timeslotthree:["2:00pm ","3:00pm ","4:00pm "],
  timeslotfour:["5:00pm ","6:00pm ","7:00pm "],
  timeslotfive:["8:00pm ", "9:00pm " , "10:00pm "],
  timeslotsix:["11:00pm " , "12:00pm ", "1:00pm "],
  pizzaone: [0,4],
  pizzatwo: [0,7],
  pizzathree: [2,15],
  pizzafour:  [15,35],
  pizzafive:  [12,31],
  pizzasix: [5,20],
  delivery1: [0,4],
  delivery2: [0,4],
  delivery3: [1,4],
  delivery4: [3,8],
  delivery5: [5,12],
  delivery6: [6,11],
};
// Object for my third location
var locationThree = {
  name: 'Downtown',
  timeslotone:["8:00am ","9:00am ","10:00am "],
  timeslottwo:["11:00am ","12:00am ","1:00pm "],
  timeslotthree:["2:00pm ","3:00pm ","4:00pm "],
  timeslotfour:["5:00pm ","6:00pm ","7:00pm "],
  timeslotfive:["8:00pm ", "9:00pm " , "10:00pm "],
  timeslotsix:["11:00pm " , "12:00pm ", "1:00pm "],
  pizzaone: [0,4],
  pizzatwo: [0,7],
  pizzathree: [2,15],
  pizzafour:  [15,35],
  pizzafive:  [12,31],
  pizzasix: [5,20],
  delivery1: [0,4],
  delivery2: [0,4],
  delivery3: [1,4],
  delivery4: [3,8],
  delivery5: [5,12],
  delivery6: [6,11],
};
// Object for my fourth location
var locationFour = {
  name: 'Northeast',
  timeslotone:["8:00am ","9:00am ","10:00am "],
  timeslottwo:["11:00am ","12:00am ","1:00pm "],
  timeslotthree:["2:00pm ","3:00pm ","4:00pm "],
  timeslotfour:["5:00pm ","6:00pm ","7:00pm "],
  timeslotfive:["8:00pm ", "9:00pm " , "10:00pm "],
  timeslotsix:["11:00pm " , "12:00pm ", "1:00pm "],
  pizzaone: [0,4],
  pizzatwo: [0,7],
  pizzathree: [2,15],
  pizzafour:  [15,35],
  pizzafive:  [12,31],
  pizzasix: [5,20],
  delivery1: [0,4],
  delivery2: [0,4],
  delivery3: [1,4],
  delivery4: [3,8],
  delivery5: [5,12],
  delivery6: [6,11],
};
// Object for my fifth location
var locationFive = {
  name: 'Clackamas',
  timeslotone:["8:00am ","9:00am ","10:00am "],
  timeslottwo:["11:00am ","12:00am ","1:00pm "],
  timeslotthree:["2:00pm ","3:00pm ","4:00pm "],
  timeslotfour:["5:00pm ","6:00pm ","7:00pm "],
  timeslotfive:["8:00pm ", "9:00pm " , "10:00pm "],
  timeslotsix:["11:00pm " , "12:00pm ", "1:00pm "],
  pizzaone: [0,4],
  pizzatwo: [0,7],
  pizzathree: [2,15],
  pizzafour:  [15,35],
  pizzafive:  [12,31],
  pizzasix: [5,20],
  delivery1: [0,4],
  delivery2: [0,4],
  delivery3: [1,4],
  delivery4: [3,8],
  delivery5: [5,12],
  delivery6: [6,11],
};
// Object for my sixth location
var locationSix = {
  name: 'PDX Airport',
  timeslotone:["8:00am ","9:00am ","10:00am "],
  timeslottwo:["11:00am ","12:00am ","1:00pm "],
  timeslotthree:["2:00pm ","3:00pm ","4:00pm "],
  timeslotfour:["5:00pm ","6:00pm ","7:00pm "],
  timeslotfive:["8:00pm ", "9:00pm " , "10:00pm "],
  timeslotsix:["11:00pm " , "12:00pm ", "1:00pm "],
  pizzaone: [0,4],
  pizzatwo: [0,7],
  pizzathree: [2,15],
  pizzafour:  [15,35],
  pizzafive:  [12,31],
  pizzasix: [5,20],
  delivery1: [0,4],
  delivery2: [0,4],
  delivery3: [1,4],
  delivery4: [3,8],
  delivery5: [5,12],
  delivery6: [6,11],
};

//Passed three different variables to my loop function from my object
title (locationOne.name);
loopMe (locationOne.timeslotone,locationOne.pizzaone,locationOne.delivery1,totalPizza);
loopMe (locationOne.timeslottwo,locationOne.pizzatwo,locationOne.delivery2,totalPizza);
loopMe (locationOne.timeslotthree,locationOne.pizzathree,locationOne.delivery3,totalPizza);
loopMe (locationOne.timeslotfour,locationOne.pizzafour,locationOne.delivery4,totalPizza);
loopMe (locationOne.timeslotfive,locationOne.pizzafive,locationOne.delivery5,totalPizza);
loopMe (locationOne.timeslotsix,locationOne.pizzasix,locationOne.delivery6,totalPizza);
title (locationTwo.name);
loopMe (locationTwo.timeslotone,locationTwo.pizzaone,locationTwo.delivery1,totalPizza);
loopMe (locationTwo.timeslottwo,locationTwo.pizzatwo,locationTwo.delivery2,totalPizza);
loopMe (locationTwo.timeslotthree,locationTwo.pizzathree,locationTwo.delivery3,totalPizza);
loopMe (locationTwo.timeslotfour,locationTwo.pizzafour,locationTwo.delivery4,totalPizza);
loopMe (locationTwo.timeslotfive,locationTwo.pizzafive,locationTwo.delivery5,totalPizza);
loopMe (locationTwo.timeslotsix,locationTwo.pizzasix,locationTwo.delivery6,totalPizza);
title (locationThree.name);
loopMe (locationThree.timeslotone,locationThree.pizzaone,locationThree.delivery1,totalPizza);
loopMe (locationThree.timeslottwo,locationThree.pizzatwo,locationThree.delivery2,totalPizza);
loopMe (locationThree.timeslotthree,locationThree.pizzathree,locationThree.delivery3,totalPizza);
loopMe (locationThree.timeslotfour,locationThree.pizzafour,locationThree.delivery4,totalPizza);
loopMe (locationThree.timeslotfive,locationThree.pizzafive,locationThree.delivery5,totalPizza);
loopMe (locationThree.timeslotsix,locationThree.pizzasix,locationThree.delivery6,totalPizza);
title (locationFour.name);
loopMe (locationFour.timeslotone,locationFour.pizzaone,locationFour.delivery1,totalPizza);
loopMe (locationFour.timeslottwo,locationFour.pizzatwo,locationFour.delivery2,totalPizza);
loopMe (locationFour.timeslotthree,locationFour.pizzathree,locationFour.delivery3,totalPizza);
loopMe (locationFour.timeslotfour,locationFour.pizzafour,locationFour.delivery4,totalPizza);
loopMe (locationFour.timeslotfive,locationFour.pizzafive,locationFour.delivery5,totalPizza);
loopMe (locationFour.timeslotsix,locationFour.pizzasix,locationFour.delivery6,totalPizza);
title (locationFive.name);
loopMe (locationFive.timeslotone,locationFive.pizzaone,locationFive.delivery1,totalPizza);
loopMe (locationFive.timeslottwo,locationFive.pizzatwo,locationFive.delivery2,totalPizza);
loopMe (locationFive.timeslotthree,locationFive.pizzathree,locationFive.delivery3,totalPizza);
loopMe (locationFive.timeslotfour,locationFive.pizzafour,locationFive.delivery4,totalPizza);
loopMe (locationFive.timeslotfive,locationFive.pizzafive,locationFive.delivery5,totalPizza);
loopMe (locationFive.timeslotsix,locationFive.pizzasix,locationFive.delivery6,totalPizza);
title (locationSix.name);
loopMe (locationSix.timeslotone,locationSix.pizzaone,locationSix.delivery1,totalPizza);
loopMe (locationSix.timeslottwo,locationSix.pizzatwo,locationSix.delivery2,totalPizza);
loopMe (locationSix.timeslotthree,locationSix.pizzathree,locationSix.delivery3,totalPizza);
loopMe (locationSix.timeslotfour,locationSix.pizzafour,locationSix.delivery4,totalPizza);
loopMe (locationSix.timeslotfive,locationSix.pizzafive,locationSix.delivery5,totalPizza);
loopMe (locationSix.timeslotsix,locationSix.pizzasix,locationSix.delivery6,totalPizza);

var workPlease = document.getElementById('number');
//Logged totalPizza and multiplied by 5 to get a weekly average
workPlease.textContent = (totalPizza * 5) + ' Number Happy Pizza Odysseys This Week!';
