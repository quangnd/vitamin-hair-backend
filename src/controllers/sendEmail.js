const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'tuan.le@powergatesoftware.com',
    clientId: '735322102165-pb3aupph144q29dcocckd8gjkl2o0t0l.apps.googleusercontent.com',
    clientSecret: 'qGwpBQBjwA53BX2DLRnkUZ1n',
    refreshToken: '1/H5LcOQKmYQK2Wj8YJ6wuJdoSgmYIwVPnSsKQ92SaXOM',
    accessToken: 'ya29.GlvmBBpwU0Apfzld33L20VbF7ApFwX4WS22TbQlJ6zkGmJLn4cwdPCuMzGqQnecmYEkJoE2PvO9CLKLwCGKY57IEchB3rnPnjUp1nuWFhmg2TY0deIQJRPLBbgRu'
  }
})

var sendEmail = function (user) {
  var mailOptions = {
    from: 'Vitamin Hairs <tuan.le@powergatesoftware.com>',
    to: user.email,
    subject: 'Reset Password From Vitaminshair.com',
    text: 'Hello World!!'
  }

  transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
      console.log('Error');
    } else {
      console.log('Email Sent');
    }
  })
}

module.exports = {
  sendMail: sendEmail
}
