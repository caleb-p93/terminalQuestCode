class Ducktypium {
    constructor(color) {
      // Validating the input color
      const validColors = ['red', 'blue', 'yellow'];
      if (!validColors.includes(color)) {
        throw new Error('Invalid color');
      }
      this.color = color;
      this.calibrationSequence = [];
    }
  
    refract(color) {
      // Validating the input color
      const validColors = ['red', 'blue', 'yellow'];
      if (!validColors.includes(color)) {
        throw new Error('Invalid color');
      }
      
      // Combining colors
      if (this.color === color) {
        return this.color;
      } else if ((this.color === 'red' && color === 'blue') || (this.color === 'blue' && color === 'red')) {
        return 'purple';
      } else if ((this.color === 'red' && color === 'yellow') || (this.color === 'yellow' && color === 'red')) {
        return 'orange';
      } else if ((this.color === 'yellow' && color === 'blue') || (this.color === 'blue' && color === 'yellow')) {
        return 'green';
      }
    }
  
    calibrate(numbers) {
      // Sorting and multiplying the numbers by 3
      this.calibrationSequence = numbers.sort((a, b) => a - b).map(num => num * 3);
    }
  }
  