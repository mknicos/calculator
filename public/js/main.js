

console.log('welcome to your calc app');

var menu ='Add (+), Subtract (-), Multiply (*), Divide (/), Power (P), Factorial (F), or "Q" to quit';
var error= 'command not recognized';

while(true){
  var operator = prompt(menu);
  console.log(operator);
  
  if (operator === "Q")
    break;

  var x = prompt('enter first number:');
  var y = prompt('enter second number:');

  console.log(x);
  console.log(y);
  x = parseFloat(x);
  y = parseFloat(y);
  var result;

  if(operator === "+" || operator === 'add' || operator === 'Add') 
    result = add(x,y);
  else if(operator === "-" || operator === 'Subtract' || operator === 'subtract')
   result = sub(x,y);
  else if(operator === "*" || operator === 'Multiply' || operator === 'multiply')
   result = multiply(x,y);
  else if(operator === "P" || operator === 'p' || operator === 'power' || operator ==='Power')
    result = power(x,y);
  else if(operator === "/" || operator === 'divide' || operator === 'Divide') 
  result = divide(x,y);
  else if(operator === "F")
    result = fact(x);
  else
    prompt(error);

  console.log(result);
}

function add(a,b) {
  return a + b;
}

function sub(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

function power(base, exp){
  var result = 1;
  for(var i = 0; i < exp; i++)
    result *= base; 
  return result;
  }

function fact(a){
  var result;
  if (a === 0 || a === 1){
    result = 1
    return result;
  }
  var n = a;
  while( a > 1){
   n = n * (a - 1);
   a = a - 1;
  }
  return n;
}

  /*
  var i = a;
  while(i > 1){
   a = a * (a - 1)
   a = a - 1;
   i --;
  }
  return a;
}
*/
    
     
    












