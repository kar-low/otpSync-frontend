var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-sequence')(mongoose);

var connection = mongoose.connect("mongodb+srv://user01:Ob1T8CkgGQAMXHKD@cluster0.66vhk.mongodb.net/foiOTP?retryWrites=true&w=majority&appName=Cluster0");

priceDate = mongoose.Schema({
    price: Number,
    date: Date
});

stockSchema = mongoose.Schema({
    symbol: String,
    prices: [priceDate]
});

module.exports = mongoose.model('stock', stockSchema);