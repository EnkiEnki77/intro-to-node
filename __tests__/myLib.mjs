 //in order to unit test your code you have export it as a module
  const add = (num1, num2) => num1 + num2;

  //jest does not support es modules without configuration. 
  module.exports = add