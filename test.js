const express = require('express')
const app = express()

var cors = require('cors') 
app.use(cors())

const excelToJson = require('convert-excel-to-json');

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', function (req, res) {
  res.send('Hello World')})

  app.get('/2009', function (req, res) {
    res.send('Start')})

    app.get('/end', function (req, res) {
        res.send('2024')})

        app.get('/user', function (req, res) {
          var user ={'id':1,'name':'Manal'}
          res.send(user)})

          app.get('/manal', (req, res) => {
            res.sendFile(__dirname + '/test.html');})
    

          app.get('/users', function (req, res) {
            //var users =[
             // {'id':1,'name':'Manal'},
             // {id:2,name:"Mhamad"},
             // {id:3,name:'elghesh'}]
           // res.send(users)

           const users = excelToJson({
            sourceFile: 'data.xlsx'
        });
        res.send(users)
           })


           app.post('/addStudent',  (req, res) => {
           // let data = req.body;
            console.log(req.body)
            res.end('Data Received: ');
        })



app.listen(2009) 