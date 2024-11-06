# Stock Portfolio Management Application 

===Front-end===

Technology: Angular 16, RestAPI, Node.js 19.4.0, Karma jasmine

Command to run the app: 
> npm install

> npm run start

Project URL: http://localhost:4200/stockportfolio

It cludes following operation:
1. List of All Stock data, 
2. Add new Stock (name, symbol, quantity),
3. Update existing stock data, 
4. Delete a stock, 
5. Retrieve a single stock data


===Back-end===

Technology: Java SpringBoot, Gradle

Developed in Gradle Java SpringBoot
Steps to start the server:
Gradle clean,
Gradle build,
Run StockApplication

Server URL: http://localhost:8080/api/v1/stock

Price is coming from Alphavantage API based on stock symbol
API: https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symbol}&apikey={API_KEY}
