var freightItems = new Array(3);

function scan(freightItems)
{
    var contrabandCount = 0;
    let count = 0;

freightItems.forEach (element => {
  if (element === 'contraband') {
    contrabandCount++;
  }
});
    console.log(contrabandCount);
    return contrabandCount;

}

// console.log(contrabandCount);

