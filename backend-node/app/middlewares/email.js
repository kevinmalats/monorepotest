import nodemailer from 'nodemailer';
import { CONSTANS_RULES } from '../constans/constans.js';


class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: CONSTANS_RULES.USER_EMAIL,
        pass: CONSTANS_RULES.PASSWORD_EMAIL
      }
    });
  }

  async sendEmail(to, subject, text, html) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: text,
      html: html
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Correo enviado:', info.response);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  }
}

export default EmailService;
