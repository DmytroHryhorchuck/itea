const express = require('express');
const cors = require('cors')
const app = express();
const path = require('path');

const PORT = 3122;

app.use( cors() );
app.use( express.static('materials') );


app.get('/', function (req, res) {
  res.sendFile( path.join(__dirname, '/materials/index.html' ) );
});

app.post('/data', function( req, res){
  res.json([
    { id: 1 }, { id: 2 }
  ]);
});

app.post('/users', function( req, res ){
  res.json(
    [
      {
        "eyeColor": "brown", 
        "index": 0, 
        "name": "House Dejesus"
      }, 
      {
        "eyeColor": "blue", 
        "index": 1, 
        "name": "Vilma Graves"
      }, 
      {
        "eyeColor": "blue", 
        "index": 2, 
        "name": "Patricia Spears"
      }, 
      {
        "eyeColor": "green", 
        "index": 3, 
        "name": "Pansy Mckenzie"
      }, 
      {
        "eyeColor": "blue", 
        "index": 4, 
        "name": "Mcclure Frederick"
      }, 
      {
        "eyeColor": "green", 
        "index": 5, 
        "name": "Kathleen Matthews"
      }, 
      {
        "eyeColor": "blue", 
        "index": 6, 
        "name": "Preston Cline"
      }, 
      {
        "eyeColor": "red", 
        "index": 7, 
        "name": "Weber Wall"
      }, 
      {
        "eyeColor": "blue", 
        "index": 8, 
        "name": "Colette English"
      }, 
      {
        "eyeColor": "blue", 
        "index": 9, 
        "name": "Patti Holmes"
      }, 
      {
        "eyeColor": "green", 
        "index": 10, 
        "name": "Colon Hobbs"
      }, 
      {
        "eyeColor": "green", 
        "index": 11, 
        "name": "Melendez Mitchell"
      }, 
      {
        "eyeColor": "brown", 
        "index": 12, 
        "name": "Dora Aguirre"
      }, 
      {
        "eyeColor": "brown", 
        "index": 13, 
        "name": "Chase Zamora"
      }, 
      {
        "eyeColor": "red", 
        "index": 14, 
        "name": "Griffin Aguilar"
      }
    ]
  )
})

app.post('/progress', function( req, res ){
  res.json({
    status: true
  });
});

app.listen(PORT, function () {
  console.log(`[Lesson 8] Example app listening on port ${PORT}!`);
});
