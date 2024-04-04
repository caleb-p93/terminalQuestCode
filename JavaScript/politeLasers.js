// The line of code below reads in the value of the argument passed in after
// the name of your script
const userInput = process.argv[2];

// This line of code converts the argument to a numeric value
const stringValue = String(userInput);

const currentSetting = getLaserSetting(stringValue);
console.log('The current laser setting is: ' + currentSetting);


/*****************************************************Functions*******************************************************************************/

function getLaserSetting(userInputForLaserSetting)
{
    var laserSetting = '';
    if (userInputForLaserSetting === 'please')
    {
        laserSetting = 'OFF';
    }
    else
    {
        laserSetting = 'ON';
    }

    return laserSetting;
}
