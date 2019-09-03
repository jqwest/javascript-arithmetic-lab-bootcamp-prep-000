var number;
function add(a, b){ //add a and b and return the result.
  number = a + b;
  return number;
}
function subtract(a, b){ //subtract a and b and return the result.
  number = a - b;
  return number;
}
function multiply(a, b){ //multiply a and b and return the result.
  number = a * b;
  return number;
}
function divide(a, b){ //divide a and b and return the result.
  number = a / b;
  return number;
}
function inc(a){ //Increment a by 1 and return the result.
  number = a++;
  return number;
}
function dec(n){ //Decrement a by 1 and return the result.
  number = n--;
  return number;
}
function makeInt(n){ //Parse a as an integer and return that integer.
  number = parseInt(n, 10);
  return number;
}
function preserveDecimal(n){ //Parse a as a float (number with decimals) and return that number.
  number = parseFloat(n, 10);
  return number;
}
