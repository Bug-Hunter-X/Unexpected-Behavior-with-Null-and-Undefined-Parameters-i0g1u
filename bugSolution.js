function foo(a, b) {
  //Check if both a and b are defined before performing addition
  if (typeof a === 'undefined' || typeof b === 'undefined') {
    return 0; //Explicitly handle undefined values
  } else if (a === null || b === null) {
    return 0; //Handle null values
  } 
  return a + b;
}
// Or using optional chaining:
function foo(a, b) {
  return a?.valueOf() + b?.valueOf() || 0; // Using optional chaining and nullish coalescing
} 