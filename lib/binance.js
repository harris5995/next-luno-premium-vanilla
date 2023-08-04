//This file fetches the Binance price from the Binance SDK

import Binance from 'node-binance-api';

export async function getBinance() {
  try {
      const binance = new Binance();
      const ticker = await binance.prices();
      const price = +ticker.BTCBUSD;
      if (isNaN(price) === false) 
          return +price;
      else
        throw "NaN value";
  
  } catch (error) {
    if (error === "NaN value")
    return "Failed to retrieve price"
    throw error;
  }
}


getBinance()