function add(...args) {
  var sum = 0;

  for (var i = 0; i < args.length; i++) {
   sum += args[i];
  }
  return sum;
}

function multiply(...args) {
  var product = 1;

  for(let k = 0; k < args.length; k++) {
    product *= args[k];
  }
  return product;
}

module.exports = { add,multiply }
