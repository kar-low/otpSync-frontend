const mongoose = require('mongoose');
const User = require('./User')

var connection = mongoose.connect("mongodb+srv://user01:Ob1T8CkgGQAMXHKD@cluster0.66vhk.mongodb.net/foiOTP?retryWrites=true&w=majority&appName=Cluster0");
run();
async function run() {
    const user = User({ ime: "Ivan", prezime:  "Horvat"});
    await user.save();
    console.log(user);
}