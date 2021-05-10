const path = require('path')
const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const CloudAPIResponse = require('./CloudAPI.js')

const app = express()
app.use(cors())

app.use(express.static('dist'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/', function (req, res) {

    console.log("FETCHING !!!!");

    CloudAPIResponse(req.body.blogURL)
    .then(body => res.send(body))

})




