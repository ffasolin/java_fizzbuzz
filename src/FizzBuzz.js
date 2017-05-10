function FizzBuzz() {
  this.printNumbers = function() {
    this.arr = [];
    for (i = 0; i <= 100; i++) {
      if (this.isDivisibleByThreeAndFive(i)) {
        this.arr.push('FizzBuzz');
        console.log('FizzBuzz');
      } else if (this.isDivisibleByFive(i)) {
        this.arr.push('Buzz');
        console.log('Buzz');
      } else if (this.isDivisibleByThree(i)) {
        this.arr.push('Fizz');
        console.log('Fizz');
      } else {
        this.arr.push(i);
        console.log(i);
      }
    }
    return this.arr;
  }

  this.isDivisibleByThree = function(n) {
    if (n % 3 === 0) {
      return true;
    }
  }

  this.isDivisibleByFive = function(n) {
   if (n % 5 === 0) {
     return true;
   }
  }

  this.isDivisibleByThreeAndFive = function(n) {
    if (n % 3 === 0 && n % 5 === 0) {
      return true;
    }
  }
};
