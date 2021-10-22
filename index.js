const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require('./models/User');

// application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
// application/json
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));



app.get('/', (req, res) => res.send('Hello World!~~ 안녕하세요 '));

// 회원 기능에 대한 Route 추가
app.post('/register', (req, res) => {

  // 회원 가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body);
  
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err});
    return res.status(200).json({
      success: true,
    })

  }); // mongoDB

  

});


app.listen(port, () => console.log(`Example app linstening on port ${port}`));