describe('FizBuzz', function() {
 var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it('prints numbers 1 to 100', function() {
    fizzBuzz.printNumbers()
    expect(fizzBuzz.arr[3]).toContain('Fizz');
    expect(fizzBuzz.arr[15]).toContain('FizzBuzz');
    });

  it('knows when number is divisible by three', function() {
    expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
  });

  it('knows when number is divisible by five', function() {
    expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
  });

  it('knows when number is divisible by three and five', function() {
    expect(fizzBuzz.isDivisibleByThreeAndFive(15)).toBe(true);
  });
});
