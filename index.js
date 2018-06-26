function add(a, b){
  return a+b
}

function subtract(a, b){
  return a-b
}

function multiply(a, b){
  return a*b
}

function divide(a, b){
  return a/b
}

function inc(n){
  return n++
}

function dec(n){
  return n--
}

function makeInt(n){
  //parses n as int and returns 
  //assumes base 10
  //returns Nan as appropriate
  
  return parseInt(n)
}

function preserveDecimal(n){
  //preserves n's decimals (it parses n as a floating point num)
  //returns the parsed number 
  //returns NaN as appropriate
}
