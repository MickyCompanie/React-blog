const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://Micky:ynq803P7@react-blog.wegoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    { useNewUrlParser: true } ).then( () => console.log('Db Connected')) // prevent deprecation warning from mangoose
                                .catch(err => console.log(err))



app.get('/', (req, res) => {
    res.send('hello world!');
});

app.listen(5000);