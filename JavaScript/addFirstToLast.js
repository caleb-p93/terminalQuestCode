var stringArray = new Array();

// The lines of code below will test your function when you run it from the
// command line with Node.js
stringArray = ['first', 'second', 'third'];
console.log(addFirstToLast(stringArray));
stringArray = [];
stringArray = ['golden', 'terrier'];
console.log(addFirstToLast(stringArray));
stringArray = [];
stringArray = ['cheerio'];
console.log(addFirstToLast(stringArray));
stringArray = [];
console.log(addFirstToLast(stringArray));

/*Functions*/
 
function addFirstToLast(inputStringArray)
{
    var firstAndLast = '';
    if (inputStringArray.length > 0)
    {
        firstAndLast = inputStringArray[0] + inputStringArray[((inputStringArray.length) - 1)];
    }

    return firstAndLast;
}
