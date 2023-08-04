//This file fetches the Luno price from the API

export async function luno() {
	try{
		const response = await fetch(
		"https://api.luno.com/api/1/ticker?pair=XBTMYR"
        );

	if (response.status === 200) 
	{
		const BTCMYR = await response.json();
		return +BTCMYR.last_trade;
	}
	else
	{
	  throw "Fetch error";
	}
  }
  catch (error) {
	if (error === "Fetch error")
	  return "Failed to retrieve price";
	throw error //Crashes the program in cases of error
  }}