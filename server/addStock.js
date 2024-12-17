const mongoose = require('mongoose');
const Stock = require('./Dionica');
const fs = require('fs');

fs.readFile('nvda.json', function(err, data) { 

    if (err) throw err; 

    const stock = JSON.parse(data);
    const dates = Object.keys(stock.data);
    const list = [];
    for(i=0;i<30;i++){
        list.push({price: stock.data[dates[i]]["4. close"], date: dates[i]});
    }
    console.log(list); 
    run(list);
}); 
var connection = mongoose.connect("mongodb+srv://user01:Ob1T8CkgGQAMXHKD@cluster0.66vhk.mongodb.net/foiOTP?retryWrites=true&w=majority&appName=Cluster0");
//run();
async function run(list) {
    const dionica = new Stock({
        symbol: "NVDA",
        prices: list
    });
    await dionica.save();
    console.log(dionica);
}