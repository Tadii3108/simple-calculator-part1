function multiply(...args) {
  var product = 1;

  for(let k = 0; k < args.length; k++) {
    product *= args[k];
  }
  return product;
}

module.exports = { multiply }
