function add(...args) {
  var sum = 0;

  for (var i = 0; i <= arguments.length; i++) {
    sum += i
  }
  return sum;
}

module.exports = { add }
