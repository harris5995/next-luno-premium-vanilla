//This file contains calculations for LunoUSD, Price Difference, Luno Premium

import { luno } from './luno.js'
import { getBinance } from './binance.js'
import { forex } from './exchangeRate.js'

//Function converts LunoMYR to LunoUSD
export async function lunoToUSD() {
    try {
      const lunoMYR = await luno();
      const usd = await forex();
      let results = lunoMYR / usd;
      if (isNaN(results) === false)
      return +results;
      
      else
        throw "NaN value"
    } 
    catch (error) {
        if (error === "NaN value")
        return "Failed to calculate LunoUSD"
        throw error;
    }
  }
  
//Function calculates the price difference between LunoUSD & LunoBinance  
export async function priceDifference() {
    try {
        const luno = await lunoToUSD();
        const binance = await getBinance();
        const result = luno - binance;
        if (isNaN(result) === false)
          return +result;
        else
          throw "NaN value";
  
       } catch (error) {
          if (error === "NaN value")
          return "Failed to calculate Price Difference"
          throw error;
       }
     }
 
//Function calculates the Luno Premium     
export async function lunoPremium() {
    try {
      const Luno = await lunoToUSD();
      const price = await priceDifference();
      const premium = (price / Luno) * 100;
      if (isNaN(premium) === false)
      return +premium;
      else;
        throw "NaN value"
  
      } catch (error) {
          if (error === "NaN value")
          return "Failed to calculate Price Difference"
          throw error;
      }
   }