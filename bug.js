function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This will cause unexpected behavior if either a or b is undefined.
  }  
  return a + b;
}