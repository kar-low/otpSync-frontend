const express = require('express');
const app = express();
const cors = require('cors');
const { createHash } = require('crypto');
var hash=createHash('sha256');
const User = require('./User');
const axios = require('axios');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

app.use(cors({
  origin: "https://otpsync.onrender.com"
}
))
app.options('*', cors())

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.listen(5000, () => {console.log("Server started on port 5000")});

const { MongoClient, ObjectId, BSON } = require("mongodb");
const { stringify } = require('querystring');
const client = new MongoClient("mongodb+srv://user01:Ob1T8CkgGQAMXHKD@cluster0.66vhk.mongodb.net/foiOTP?retryWrites=true&w=majority&appName=Cluster0");

var query;

async function run() {
    try {
      const database = client.db('foiOTP');
      const users = database.collection('users');
      const user = await users.findOne(query);
      //console.log(user);
      return user;
    } finally {
      // Ensures that the client will close when you finish/error
      //await client.close();
    }
  }

  async function runStock() {
    try {
      const database = client.db('foiOTP');
      const stocks = database.collection('stocks');

      const stock = await stocks.find({}).toArray();
      //console.log(stock);
      return stock;
    
    } finally {
      // Ensures that the client will close when you finish/error
      //await client.close();
    }
  }





  app.get(`/api/users/:userId`, async (req, res) => {
    try{
    query = {"_id": new ObjectId(req.params.userId)};
    //console.log(query);
    var data = await run(); 
      res.send(JSON.parse(JSON.stringify(data)));
    }
    catch{
      res.sendStatus(500);
    }
  });

  app.post(`/api/login`, async (req, res) => {
    query = {"email": req.body.email};
    //console.log(query);
    var data = await run();
    //console.log(JSON.parse(JSON.stringify(data)));
    //console.log(req.body.email); 
    if(data && req.body.enc_password==data.password){
        res.send(JSON.parse(JSON.stringify(data)));
    }
    else{
      res.send("ERROR");
    }
  });

  app.post(`/api/signup`, async (req, res) => {
    var email = req.body.email;
    var password = req.body.enc_password;
    var role = req.body.role;
    var ime = req.body.ime; 
    var prezime = req.body.prezime; 
    var user = User({email: email, password: password, role: role, ime: ime, prezime: prezime});
    query = {"email": req.body.email};
    //console.log(query);
    var data = await run();
    if(!data){
        await user.save();
        res.send(JSON.parse(JSON.stringify(user)));
    }
    else{
      res.send("ERROR");
    }
  });

  app.post(`/api/getStocks`, async (req, res) => {

    //query = {"symbol": *};
    
    var data = await runStock();
    if(data){
        res.send(JSON.parse(JSON.stringify(data)));
    }
    else{
      res.send("ERROR");
    }
  });


  const url = `https://projektotp-api.onrender.com/`; // Replace with your Render URL
  const interval = 30000; // Interval in milliseconds (30 seconds)

//Reloader Function
function reloadWebsite() {
  axios.get(url)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
}

setInterval(reloadWebsite, interval);



  const cleanup = (event) => { // SIGINT is sent for example when you Ctrl+C a running process from the command line.
    client.close(); // Close MongodDB Connection when Process ends
    process.exit(); // Exit with default success-code '0'.
  }

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
