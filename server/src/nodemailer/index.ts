import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GOOGLE_ACCOUNT,
    pass: process.env.GOOGLE_PASSWORD,
  },
});

export default (to: string, subject: string, text: string) =>
  new Promise((resolve, reject) => {
    const message = {
      to,
      subject,
      text,
    };

    transport.sendMail(message, (err, info) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(info);
    });
  });
