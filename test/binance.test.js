//Testing for both i) fetching API and ii) failed HTTP request
 //Reset module mocks before each test to not affect other tests in this file
 beforeEach(() => {
    jest.resetModules(); 
});

import { getBinance } from '../lib/binance.js';

//Code template taken from LMS 'Challenge: Test Luno Premium
//Testing retrieving data from Binance SDK
test("Returns price if Binance request succeeds", async () => {
   const getBinance = require('../lib/binance.js').getBinance // your function name could be different
 
   // Mocking the entire node-binance-api module
   jest.mock('node-binance-api', () => {
     return class Binance {
       // We use only the prices method for this particular test, so we'll mock just this method
       prices() {
         return new Promise(res => {
           res({
             BTCBUSD: 20000
           })
         })
       }
     }
   })
 
   expect(await getBinance()).toBe(20000);
 });

// Testing getBinance function for failed fetch request
test("Returns Message for Failed Binance Response (Same as Mock Value)", async () => {
   const getBinance = require('../lib/binance.js').getBinance
   jest.mock('node-binance-api', () => {
   return class Binance {
     prices() {
       return new Promise((resolve, reject) => {
         resolve(new Error("Failed to fetch data from Binance."));
       });
     }
   };
 });

 expect(await getBinance()).toBe("Failed to retrieve price");
});

//
test("Returns Message for Failed Binance Response (Global Fetch)", async () => {
   const getBinance = require('../lib/binance.js').getBinance
   const MOCK_JSON_RESP = "Failed to retrieve price";
   global.fetch = jest.fn(() => Promise.resolve({
       status: 500,
       json: () => Promise.resolve(MOCK_JSON_RESP)
   }));
   
   expect(await getBinance()).toBe("Failed to retrieve price");
 });