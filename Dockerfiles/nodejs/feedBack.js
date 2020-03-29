const creds = require('./config');
const nodemailer = require("nodemailer");

const transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
})

const sendFeedBack = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = `Nimi: ${name} \n Sähköposti: ${email} \n Viesti: ${message} `
  
    const mail = {
      from: name,
      to: 'vihtorikallevihtori@hotmail.com',  // Change to email address that you want to receive messages on
      subject: 'Uusi viesti Sannan pullan palautelomake',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  }
  module.exports = {
    sendFeedBack
  }
  