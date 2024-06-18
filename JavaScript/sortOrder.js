const firstValue = process.argv[2];
const secondValue = process.argv[3];

let firstValueToCompare = firstValue.toLowerCase();
let secondValueToCompare = secondValue.toLowerCase();

let comparisonResult = -999;

if (firstValueToCompare < secondValueToCompare)
{
    comparisonResult = -1;
    console.log(comparisonResult);    
}
else if (firstValueToCompare === secondValueToCompare)
{
    comparisonResult = 0;
    console.log(comparisonResult);  
}
else
{
    comparisonResult = 1;
    console.log(comparisonResult);
}