var path = require('path')
var aylien = require("aylien_textapi");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

const app = express()
app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

const projectData = {}

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/sentiment', function (req, res) {
    console.log(req)
    const urlUser = req.body.url
    textapi.sentiment({ url: urlUser }, function (error, response) {
      if (error === null) {
        projectData.polarity = response.polarity
        projectData.subjectivity = response.subjectivity
        projectData.text = response.text
        projectData.polarity_confidence = response.polarity_confidence
        projectData.subjectivity_confidence = response.subjectivity_confidence //fixed typo
        res.send(projectData)
        console.log(projectData)
      } else {
        console.log(error)
      }
    })
  })