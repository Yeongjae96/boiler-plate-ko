const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yeong:1234@boiler-plate.736mm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// Model은 스키마를 감싸는 역할

// 스키마는 해당 데이터를 설명하는 데이터(메타 데이터느낌?)




app.get('/', (req, res) => res.send('Hello World!~~ 안녕하세요'));

app.listen(port, () => console.log(`Example app linstening on port ${port}`));