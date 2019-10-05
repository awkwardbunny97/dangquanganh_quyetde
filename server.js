const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

//router
app.get('/', (req,res) => {
    res.send('Hello World!')
})

//askRouter
app.get('/ask', (req,res) => {
    res.sendFile(__dirname + '/views/ask.html')
})

//answerRouter
app.get('/ask', (req,res) => {
    res.sendFile(__dirname + '/views/answer.html')
})

//questionRouter
app.get('/question', (req,res) => {
    res.sendFile(__dirname + '/views/questionDetail.html')
})

//backendRouter
app.post('/add-question',(req,res) => {
    console.log(req.body.question)
})

app.listen(9779, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Server start success!!!')
    }
})