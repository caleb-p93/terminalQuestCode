const numberInput = Number(process.argv[2]);
let output = '';

if ( (numberInput % 3  === 0  ) && (numberInput % 5 ===0) ) {
  output = 'JavaScript';
}
else if ( ( numberInput % 3 ) === 0 ) {
  output = 'Java';
}
else if ( (numberInput %5 ) === 0 )  {
  output = 'Script';
}
else {
  output = numberInput;
}

console.log(output);