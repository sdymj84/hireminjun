const functions = require('firebase-functions');
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })

admin.initializeApp()

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: 'hireminjun@gmail.com',
    clientId: functions.config().hireminjun.client_id,
    clientSecret: functions.config().hireminjun.client_secret,
    refreshToken: functions.config().hireminjun.refresh_token,
    accessToken: functions.config().hireminjun.access_token,
  }
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const mailOptions = {
      from: 'hiremanager@uber.com',
      to: 'sdymj84@gmail.com',
      subject: "I'm interested in you",
      html: 'Hi, nice to meet you',
    }

    return transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.send(err.toString())
      }
      return res.send("Email has successfully sent!")
    })
  })
});
