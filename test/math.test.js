 // Reset module mocks before each test to not affect other tests in this file
 beforeEach(() => {
    jest.resetModules(); 
  });
 

//Testing the calculation functions found in math.js using mock values
test("Returns mock LunoUSD value if no errors", async () => {
    jest.mock('../lib/math.js', () => {
        return {
          lunoToUSD() {
            const MOCK_LUNOUSD = 25000;
            return Promise.resolve(MOCK_LUNOUSD);
          },
          priceDifference() {
            const PRICE_DIFFERENCE = 1;
            return Promise.resolve(PRICE_DIFFERENCE);
          },
          lunoPremium() {
            const LUNO_PREMIUM = 0.25;
            return Promise.resolve(LUNO_PREMIUM);
          },
        };
      });
})