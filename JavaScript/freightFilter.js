var freightItems = new Array(3);
forbiddenString = '';

function scanAndFilter(freightItems, forbiddenString)
{
    let filteredItems= [];

freightItems.forEach ((element, currentElementIndex) => {
  if (element != forbiddenString) {
    filteredItems.push(freightItems[currentElementIndex]);

  }
});
    console.log(filteredItems);
    return filteredItems;

}


