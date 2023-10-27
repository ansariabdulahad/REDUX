var express = require('express');
var router = express.Router();
const data = [
  {
    "id": 1,
    "email": "just@gmail.com",
    "mobile": 6393640841
  },
  {
    "id": 2,
    "email": "amit@gmail.com",
    "mobile": 216515165
  },
  {
    "id": 3,
    "email": "alok@gmail.com",
    "mobile": 9600230
  },
  {
    "id": 4,
    "email": "suman@gmail.com",
    "mobile": 3698546
  },
  {
    "id": 5,
    "email": "shohit@gmail.com",
    "mobile": 51056166
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.json(data)
});

module.exports = router;
