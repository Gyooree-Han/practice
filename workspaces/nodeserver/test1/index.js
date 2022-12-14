// const express = require('express');
// const app = express();
// const port = 8080;

// app.get('/', (req, res) => {
// 	res.send('Hello Node.js!');
// });

// app.listen(port, () => {
// 	console.log('Listening...');
// });


const express = require('express');
const app = express();
const port = 3000;
const bodyParser= require('body-parser')

// crud handlers
// sendFile method를 통해 index.html파일로 연결하자
app.get('/', (req, res) => {
	res.sendFile (__dirname + '/public/index.html')
})

// server와 browser가 연결될때까지 기다리는 것
app.listen(port, function() {
        console.log('listening on 3000')     
})

// body-parser
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/quotes', (req, res) => {
    console.log(req.body)
})

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb-connection-string', (err, client) => {
    // ... do something here
})