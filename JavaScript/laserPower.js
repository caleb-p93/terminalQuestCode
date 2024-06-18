function calculatePower(array) {

    let multipliedArray = [] ;

    multipliedArray = array.map((currentElement) => currentElement * 2);

    let totalPower = multipliedArray.reduce((accumulatedAmount, currentValue) => accumulatedAmount + currentValue, 0);

    return totalPower;

}