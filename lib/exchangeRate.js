//This file fetches the MYRUSD rate from the API

import 'dotenv/config'

export async function forex() {
  try {
    const myHeaders = new Headers();
    myHeaders.append(process.env.API, process.env.APIKEY);

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    const response = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions);
    if (response.status === 200) 
    {
    const exchangeRate = await response.json();
    return +exchangeRate.result;
    }
    else
    {
      throw "Fetch error";
    }
  } 
  catch (error) {
    if (error === "Fetch error")
      return "Failed to retrieve price"
    throw error //Crashes the program in cases of error
  }}