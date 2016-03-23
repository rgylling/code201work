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

function loopMe (a,b,c,d) {
  for (i=0;i < a.length; i++) {
    for (j=0; j < b.length; j++) {
    console.log (a[i] + b + " pizzas " + myRandomNumber(c[i][0],c[i][1]) + " deliveries -- ["+ d + "]"); }
}
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
  driver1: drivers (locationOne.delivery1),
  driver2: drivers (locationOne.delivery2),
  driver3: drivers (locationOne.delivery3),
  driver4: drivers (locationOne.delivery4),
  driver5: drivers (locationOne.delivery5),
  driver6: drivers (locationOne.delivery6),
};

console.log(locationOne.pizzaone);

loopMe (locationOne.timeslotone,locationOne.pizzaone,locationOne.delivery1,locationOne.driver1);

loopMe (locationOne.timeslottwo,locationOne.pizzatwo,locationOne.delivery2,locationOne.driver2);

loopMe (locationOne.timeslotthree,locationOne.pizzathree,locationOne.delivery3,locationOne.driver3);

loopMe (locationOne.timeslotfour,locationOne.pizzafour,locationOne.delivery4,locationOne.driver4);

loopMe (locationOne.timeslotfive,locationOne.pizzafive,locationOne.delivery5,locationOne.driver5);

loopMe (locationOne.timeslotsix,locationOne.pizzasix,locationOne.delivery6,locationOne.driver6);
