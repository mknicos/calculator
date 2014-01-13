//javascript//

console.log('welcome to your calc app');

var menu ='Add (+), Subtract (-), Multiply (*), Divide (/), Power (P), or "Q" to quit';

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

  if(operator == "+") 
  result = add(x,y);
  else if(operator == "-")
   result = sub(x,y);
  else if(operator == "*")
   result = multiply(x,y);
  else if(operator === "P")
    result = power(x,y);
  else  
  result = divide(x,y);

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

function power(a,b){
  var result = 1;
  for(var counter = 0; counter < b; counter ++){
    result = a *= a;
  
  return result;
  }
}



