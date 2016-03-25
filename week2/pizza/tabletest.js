//Created a Master Time Slot
var timeSlots = ["8:00am ","9:00am ","10:00am " ,"11:00am ","12:00am ","1:00pm ","2:00pm ","3:00pm ", "4:00pm ","5:00pm ", "6:00pm ", "7:00pm ","8:00pm ", "9:00pm ", "10:00pm ","11:00pm ", "12:00am ", "1:00am "];

//Created multidimensional arrays for min and max pizzas and deliveries per time slot
var beavertonPizza =
[[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[15,35],[15,35],[15,35],[12,31],[12,31],[12,31],[5,20],[5,20],[5,20]];
var beavertonDeliveries = [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[3,8],[3,8],[3,8],[5,12],[5,12],[5,12],[6,11],[6,11],[6,11]];
var beaverton = new PizzaOne('Beaverton', beavertonPizza, beavertonDeliveries );

// Created new Pizza shops utilizing object constructor notation

var hillsboroPizza =
[[1,3],[1,3],[1,3],[5,9],[5,9],[5,9],[2,13],[2,13],[2,13],[18,32],[18,32],[18,32],[1,3],[1,3],[1,3],[8,20],[8,20],[8,20]];
var hillsboroDeliveries = [[1,7],[1,7],[1,7],[2,8],[2,8],[2,8],[1,6],[1,6],[1,6],[3,9],[3,9],[3,9],[5,12],[5,12],[5,12],[6,16],[6,16],[6,16]];
var hillsboro = new PizzaOne('Hillsboro', hillsboroPizza, hillsboroDeliveries );

var downtownPizza =
[[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[10,26],[10,26],[10,26],[8,22],[8,22],[8,22],[0,2],[0,2],[0,2]];
var downtownDeliveries = [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[4,6],[4,6],[4,6],[7,15],[7,15],[7,15],[2,8],[2,8],[2,8]];
var downtown = new PizzaOne('Downtown', downtownPizza, downtownDeliveries );

var northeastPizza =
[[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[5,15],[5,15],[5,15],[25,39],[25,39],[25,39],[22,36],[22,36],[22,36],[5,21],[5,21],[5,21]];
var northeastDeliveries = [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[13,18],[13,18],[13,18],[5,22],[5,22],[5,22],[16,31],[16,31],[16,31]];
var northeast = new PizzaOne('NorthEast', northeastPizza, northeastDeliveries );

var clackamasPizza =
[[2,7],[2,7],[2,7],[3,8],[3,8],[3,8],[1,5],[1,5],[1,5],[5,13],[5,13],[5,13],[22,41],[22,41],[22,41],[15,20],[15,20],[15,20]];
var clackamasDeliveries = [[3,5],[3,5],[3,5],[3,9],[3,9],[3,9],[1,4],[1,4],[1,4],[2,4],[2,4],[2,4],[15,42],[15,42],[15,42],[6,21],[6,21],[6,21]];
var clackamas = new PizzaOne('Clackamas', clackamasPizza, clackamasDeliveries );

var airportPizza =
[[0,4],[0,4],[0,4],[0,7],[0,7],[0,7],[2,15],[2,15],[2,15],[6,9],[6,9],[6,9],[4,8],[4,8],[4,8],[2,4],[2,4],[2,4]];
var airportDeliveries = [[0,4],[0,4],[0,4],[0,4],[0,4],[0,4],[1,4],[1,4],[1,4],[5,18],[5,18],[5,18],[2,5],[2,5],[2,5],[3,11],[3,11],[3,11]];
var airport = new PizzaOne('PDX Airport', airportPizza, airportDeliveries );
// ------------------------------END OF MULTI ARRAYS -------------------------------------

// Created an object constructor function that creates new Pizza shops
function PizzaOne (name,x,d){
  this.arr = [];
  this.arr1 = [];
  this.name = name;
  this.deliveries = function (){
    for(i=0; i < d.length ; i++){
      this.arr1.push(myRandomNumber (d[i][0],d[i][1]));
    }
};
  this.pizza = function (){
    for(j=0; j < x.length ; j++){
      this.arr.push(myRandomNumber (x[j][0],x[j][1]));
    }
  };
  this.pizza();
  this.deliveries();
}

//Random Number Generator
function myRandomNumber (min,max) {
  return Math.floor(Math.random() * (max-min +1)) + min;
}

//Function that does my drivers recommended calculation
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

//Holds my total pizzas
var totalArr = [];
var totalPizza;


/* The holy grail of all functions.. Loops through my timeslots while posting randomly
generated pizzas and delivery times. Also creates tables for each section and posts it to the page utilizing the DOM */
function loopMe (a,boo,c){
  for (j=0; j<a.length; j++){
    var pizzaMath = boo[j];
    totalArr.push(pizzaMath);
    var checkNumber = checkNum(boo[j],c[j]);
    var driverMath = drivers(checkNumber);
    var body = document.getElementById("pleasework");
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    var newText = document.createTextNode (a[j] + boo[j] + " pizzas " + checkNumber + "       deliveries, " + driverMath  );
      if (body) {
        cell.appendChild(newText);
        row.appendChild(cell);
        tblBody.appendChild(row);
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
       }
   }
   totalPizza = totalArr.reduce(function(a, b) {
     return a + b;
     title(totalPizza);
    });
console.log(totalPizza);
}

/* This function takes the name of each store creates a table utilizing the dom and
adds it to the page */
function title (a){
  var body = document.getElementById("pleasework");
    if (body){
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");
      var row = document.createElement("tr");
      var cell = document.createElement("td");
      var newText = document.createTextNode (a);
        cell.appendChild(newText);
        row.appendChild(cell);
        tblBody.appendChild(row);
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
      }
}
// Calling my title function to amend it to the page
title (beaverton.name);
// Calling several loop functions
loopMe(timeSlots,beaverton.arr,beaverton.arr1)
title (totalPizza + " Pizzas sold today!")
title (hillsboro.name);
loopMe(timeSlots,hillsboro.arr,hillsboro.arr1)
title (totalPizza + " Pizzas sold today!")
title (downtown.name);
loopMe(timeSlots,downtown.arr,downtown.arr1)
title (totalPizza + " Pizzas sold today!")
title (northeast.name);
loopMe(timeSlots,northeast.arr,northeast.arr1)
title (totalPizza + " Pizzas sold today!")
title (clackamas.name);
loopMe(timeSlots,clackamas.arr,clackamas.arr1)
title (totalPizza + " Pizzas sold today!")
title (airport.name);
loopMe(timeSlots,airport.arr,airport.arr1)
title (totalPizza + " Pizzas sold today!")

var workPlease = document.getElementById('number');
//Logged totalPizza and multiplied by 5 to get a weekly average
workPlease.textContent = (totalPizza * 5) + ' Number Happy Pizza Odysseys This Week!';
