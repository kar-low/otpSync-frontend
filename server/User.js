var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-sequence')(mongoose);

var connection = mongoose.connect("mongodb+srv://user01:Ob1T8CkgGQAMXHKD@cluster0.66vhk.mongodb.net/foiOTP?retryWrites=true&w=majority&appName=Cluster0");



userSchema = mongoose.Schema({
    ime: String,
    prezime: String,
    spol: Boolean,
    email: String,
    faks: String,
    role: String,
    password: String
});

module.exports = mongoose.model('users', userSchema);
userSchema.plugin(autoIncrement, { inc_field: 'id' });