//Create a program (function) that prints a greeting message for a given name
function sayHello(greeting, input) {
  console.log(greeting + " " + input + " !"); 

}

// Create a program that converts minutes into seconds
function minToSec(minutes) {

  console.log(minutes + " minutes = " + (minutes * 60) + " seconds" );
}
// FRAMES PER SECOND
function frames(minutes, fps) {
  return(minutes * fps * 60);	
  }

  //REMAINDER
  function remainder(x, y) {
    return x % y;
  }
  
  // m2
  function m2 (x, y){
    return x * y;
  }

  //LESS THAN OR EQUAL TO ZERO
  function lessThanOrEqualToZero(num) {
    if(num <= 0)
      return true;
    else
      return false;
  }

  //IS NUMBER EVEN OR ODD
  function isEvenOrOdd(num) {
    if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
 
  
  