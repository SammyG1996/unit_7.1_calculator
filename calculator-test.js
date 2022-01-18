
describe('calculator rate test', () => {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment(5000, 1, 3.5)).toEqual('424.61')
  });
})

describe('calculator output tests', () => {
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment(1000, 2, 3.5)).toBeCloseTo(43.2, 2)
  });
  
  it('should return a string', () => {
    expect(typeof(calculateMonthlyPayment(1000, 2, 3.5))).toBe('string')
  });
})


