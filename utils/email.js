const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Create a transporter
  const transtorter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Emex <zzyzxemex@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html:
  };

  // 3) Send the email
  await transtorter.sendMail(mailOptions);
};

module.exports = sendEmail;
