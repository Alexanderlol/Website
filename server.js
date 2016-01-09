var express = require('express');
var nodemailer = require('nodemailer');
var app = express();

var smtpTransport = nodemailer.createTransport('SMTP', {
  service: 'Gmail',
  auth: {
    user: 'YourEmailAddressHere',
    pass: 'yourGmailPassHere'
  }
});

app.get('/', function (req, res) {
  res.sendfile('pages/contact.html');
});

app.get('/send', function (req, res) {
  var mailOptions = {
    to: req.query.to,
    subject: req.query.subject,
    text: req.query.text
  };

  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log('Message sent: ' + response.message);
      res.end('sent');
    }
  });
});

app.listen(3000, function () {
  console.log('Express Started on Port 3000');
});
