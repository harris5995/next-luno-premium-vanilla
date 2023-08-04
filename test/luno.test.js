//Testing for both i) fetching API and ii) failed HTTP request
 
// Reset module mocks before each test to not affect other tests in this file
beforeEach(() => {
    jest.resetModules(); 
});

//Importing actual luno function from luno.js
import { luno } from '../lib/luno.js';

const MOCK_PRICE = 15000
const MOCK_JSON_RESP = { last_trade: MOCK_PRICE }

//Testing luno function to get desired API data
test("Returns the BTCMYR rate if successful", async () => {
    // const MOCK_PRICE = 15000
    // const MOCK_JSON_RESP = { last_trade: MOCK_PRICE }

    global.fetch = jest.fn(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(MOCK_JSON_RESP)
    }));

    expect(await luno()).toBe(MOCK_PRICE);
});

//Testing luno function for failed HTTP request
test("Returns Message for Failed Luno Response", async () => {

    global.fetch = jest.fn(() => Promise.resolve({
        status: 500,
        json: () => Promise.resolve(MOCK_JSON_RESP)
    }));
    
    expect(await luno()).toBe("Failed to retrieve price");
  });