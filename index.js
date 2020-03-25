var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten() {
  
  kittens.push("Ralph");
  
}

function destructivelyPrependKitten() {
  
  kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten() {
  
  kittens.pop();
  
}

function destructivelyRemoveFirstKitten() {
  
  kittens.shift();
  
}

function appendKitten() {
  
  var newKittens = [...kittens, "Broom"];
  return newKittens;
  
}

function prependKitten() {
  var newKittens2 = ["Garfield", ...kittens];
  return newKittens2;
  
  
}

