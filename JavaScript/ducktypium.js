class Ducktypium {

    constructor()
    {
        this.color = color;
        this.calibrationSequence = [];
    }

    

    refract(inputColor){

        let refractedColor = '';

        if (inputColor === ('red' || 'blue' || 'yellow'))
        {
            if (((this.color === 'blue') && (inputColor === 'red')) || ((this.color === 'red') && (inputColor === 'blue')))
            {
                refractedColor = 'purple';
            }
            else if (((this.color === 'red') && (inputColor === 'yellow')) || ((this.color === 'yellow') && (inputColor === 'red')))
            {
                refractedColor = 'orange';
            }
            else if (((this.color === 'blue') && (inputColor === 'yellow')) || ((this.color === 'yellow') && (inputColor === 'blue')))
            {
                refractedColor = 'green';
            }

        }
        else
        {
            throw new Error("Input color must be red, blue, or yellow");
        }

        return refractedColor;
    }

    calibrate(numbers)
    {
        this.calibrationSequence =  numbers.sort((a,b) => a -b).map(num => num * 3);
    }

}

const dt = new Ducktypium("red");

console.log(dt.color); // prints 'red'

console.log(dt.refract("blue")); // prints 'purple'
console.log(dt.refract("red")); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]