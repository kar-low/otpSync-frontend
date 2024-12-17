var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var connection = mongoose.connect("mongodb+srv://user01:Ob1T8CkgGQAMXHKD@cluster0.66vhk.mongodb.net/foiOTP?retryWrites=true&w=majority&appName=Cluster0");



fondSchema = mongoose.Schema({
    naziv: String,
    manager: String,
    assets: [{}],
    email: String,
    faks: String,
    role: String,
    password: String
});

module.exports = mongoose.model('fondovi', fondSchema);