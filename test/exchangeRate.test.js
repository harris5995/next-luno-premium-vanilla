//Testing for both i) fetching API and ii) failed HTTP request

// Reset module mocks before each test to not affect other tests in this file
beforeEach(() => {
    jest.resetModules(); 
  });
 
//Importing actual luno function
import { forex } from '../lib/exchangeRate.js';

//Testing luno function to get desired API data
test("Returns the USDMYR exchange rate if successful", async () => {
  const MOCK_FOREX = 4.5
  const MOCK_JSON_RESP = { result: MOCK_FOREX }

  global.fetch = jest.fn(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(MOCK_JSON_RESP)
  }));

  expect(await forex()).toBe(MOCK_FOREX);
});

test("Returns Message for Failed HTTP Response", async () => {

  global.fetch = jest.fn(() => Promise.resolve({
      status: 500,
      json: () => Promise.resolve(MOCK_JSON_RESP)
  }));
  
  expect(await forex()).toBe("Failed to retrieve price");
});