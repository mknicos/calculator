

console.log('welcome to your calc app');

var menu ='Add (+), Subtract (-), Multiply (*), Divide (/), Power (P), or "Q" to quit';
var error= 'command not recognized';

while(true){
  var operator = prompt(menu);
  console.log(operator);
  
  if (operator === "Q")
    break;
/*  
  while(operator !== 'Add' || 'add' || '+' || 'Subtract' || 'subtract' || '-' || 'Multiply' || 'multiply' || '*' || 'p' || 'Power' || 'P' || 'divide' || 'Divide' || '/'){
    alert(error);
}
*/

  var x = prompt('enter first number:');
  var y = prompt('enter second number:');

  console.log(x);
  console.log(y);
  x = parseFloat(x);
  y = parseFloat(y);
  var result;

  if(operator === "+" || 'add' || 'Add') 
  result = add(x,y);
  else if(operator === "-" || 'Subtract' || 'subtract')
   result = sub(x,y);
  else if(operator === "*" || 'Multiply' || 'multiply')
   result = multiply(x,y);
  else if(operator === "P" || 'p' || 'power' || 'Power')
    result = power(x,y);
  else if(operator === "/" || 'divide' || 'Divide') 
  result = divide(x,y);
  else
    console.log(error);

  console.log(result);




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

function power(a,b){
  var result = 1;
  for(var counter = 0; counter < b; counter ++){
    result = a *= a
  
  return result;
  }
}



