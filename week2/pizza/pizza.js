function myRandomNumber (min,max) {
  return Math.floor(Math.random() * (max-min +1)) + min;
}


function drivers (a) {
  var answer =  Math.ceil(a / 3)
    if ( answer == 0) {
      return "Driver not recommended";
      } else {
        return "Drivers recommended: " + answer;
    }
} ;

var totalArr = [];
var totalPizza;
function loopMe(a, b, c, d) {
  for (i = 0; i < a.length; i++) {
    var randomDriver = myRandomNumber(c[0], c[1]);
    var driverMath = drivers(randomDriver);
    var pizzaMath = myRandomNumber(b[0], b[1]);
    totalArr.push(pizzaMath);
    console.log(a[i] + pizzaMath + " pizzas " + randomDriver + " deliveries -- [" + driverMath + "]");
  }
  totalPizza = totalArr.reduce(function(a, b) {
    return a + b;
  });
  console.log(totalArr);
  console.log(totalPizza);
};





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



loopMe (locationOne.timeslotone,locationOne.pizzaone,locationOne.delivery1,totalPizza);

loopMe (locationOne.timeslottwo,locationOne.pizzatwo,locationOne.delivery2,totalPizza);

loopMe (locationOne.timeslotthree,locationOne.pizzathree,locationOne.delivery3,totalPizza);

loopMe (locationOne.timeslotfour,locationOne.pizzafour,locationOne.delivery4,totalPizza);

loopMe (locationOne.timeslotfive,locationOne.pizzafive,locationOne.delivery5,totalPizza);

loopMe (locationOne.timeslotsix,locationOne.pizzasix,locationOne.delivery6,totalPizza);
