
// Function to calculate the total length (mass) of all strings in an array
function calculateMass(array) 
{   
    let calculatedMass = 0;
    // Use the reduce function to calculate the total length
    calculatedMass = array.reduce((totalLength, currentString) => totalLength + currentString.length, 0);
    return calculatedMass;
}

