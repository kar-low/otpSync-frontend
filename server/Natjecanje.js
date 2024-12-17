var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-sequence')(mongoose);

var connection = mongoose.connect("mongodb+srv://user01:Ob1T8CkgGQAMXHKD@cluster0.66vhk.mongodb.net/foiOTP?retryWrites=true&w=majority&appName=Cluster0");

natjecatelj = mongoose.Schema({
    id: String,
    bodovi: Number
});

competitionSchema = mongoose.Schema({
    naziv: String,
    natjecatelji: [natjecatelj]
});

module.exports = mongoose.model('competition', competitionSchema);