function myRandomNumber (min,max) {
  return Math.floor(Math.random() * (max-min +1)) + min;
}



var locationOne = {
name: 'Beaverton',
timeslotone:["8:00am ","9:00am ","10:00am "],
timeslottwo:["11:00am ","12:00am ","1:00pm "],
timeslotthree:["2:00pm ","3:00pm ","4:00pm "],
timeslotfour:["5:00pm ","6:00pm ","7:00pm "],
timeslotfive:["8:00pm ", "9:00pm " , "10:00pm "],
timeslotsix:["11:00pm " , "12:00pm ", "1:00pm "],
pizzaone: myRandomNumber (0,4),
pizzatwo: myRandomNumber (0,7),
pizzathree: myRandomNumber (2,15),
pizzafour: myRandomNumber (15,35),
pizzafive: myRandomNumber (12,31),
pizzasix:myRandomNumber (5,20),
delivery1:myRandomNumber (0,4),
delivery2:myRandomNumber (0,4),
delivery3:myRandomNumber (1,4),
delivery4:myRandomNumber (3,8),
delivery5:myRandomNumber (5,12),
delivery6:myRandomNumber (6,11),

} ;

console.log (locationOne.pizzaone);

for (i=0;i < locationOne.timeslotone.length; i++) {
    console.log (locationOne.timeslotone[i] + locationOne.pizzaone) + " pizzas " + locationOne.delivery1 + " deliveries "); }
for (j=0; j < locationOne.timeslottwo.length; j++){
    console.log (locationOne.timeslottwo[j] + (locationOne.pizzatwo) + " pizzas " + locationOne.delivery2 + " deliveries ");

};
