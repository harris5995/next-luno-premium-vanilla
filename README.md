# next-luno-premium-vanilla

This is my 2nd project during the Next Academy bootcamp. This program is able to find the following (in real time):
1) Bitcoin (XBT) rates in MYR from the Luno website.
2) Bitcoin (BTC) rates in USD from the Binance SDK.
3) USD/MYR exchange rate.
4) Bitcoin rates in USD from the Luno website. (Calculated from item i)
5) Price difference between Bitcoin/USD rates in Luno and Binance websites respectively.
6) Luno Premium (Formula: Price Difference / LunoUSD)

To set up the program prior to initial run, the following commands need to be inputted into the terminal.
1) asdf local nodejs 19.4.0
2) npm init
3) npm install dotenv
4) Add the following in 'package.json' file -> "type": "module"
5) npm i --save-dev jest @babel/plugin-transform-modules-commonjs
6) Add the following in 'package.json' file -> "test": "jest"

To run program: node index.js
To initialize testing: npm run test

To see an improved version of this project (able to switch to other crypto currencies), please refer to the next-luno-premium repo.
