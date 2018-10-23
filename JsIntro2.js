function printCallback(arr){
  arr.forEach(function(str){
    console.log(str)
  })
}
function titleize(arr, printCallback){
  let newArr = arr.map(function(str){
    return `Mx. ${str} Jingleheimer Schmidt`;
  })
  printCallback(newArr)
}

function Elephant(name, height, tricks){
  this.name = name;
  this.height = height;
  this.tricks = tricks
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
    this.tricks.push(trick)
};

Elephant.prototype.play = function () {
  console.log(`${this.name} is ${this.tricks[Math.floor(Math.random() * this.tricks.length)]}`)
};

let dusty = new Elephant("dusty", 45, ["plays the piano", "sits on the floor"])
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];
