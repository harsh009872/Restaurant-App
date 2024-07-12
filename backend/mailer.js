import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendReservationEmail = (recipientEmail, reservationDetails) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmail,
    subject: 'Reservation Confirmation',
    text: `Your reservation is successful. Here are your booking details: ${reservationDetails}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`Error sending email: ${error}`);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
