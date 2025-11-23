import nodemailer from 'nodemailer';
import {NEWS_SUMMARY_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE, } from "../nodemailer/templates";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL!,
        pass: process.env.NODEMAILER_PASSWORD!,
    }
})

export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE
        .replace('{{name}}', name)
        .replace('{{intro}}', intro);

    const mailOptions = {
        from: `"METRIK" <metrik@bussiness>`,
        to: email,
        subject: `Welcome to MetriK - your stock market toolkit is ready!`,
        text: 'Thanks for joining MetriK',
        html: htmlTemplate,
    }

    await transporter.sendMail(mailOptions);
}

export const sendNewsSummaryEmail=async({email, date, newsContent}:{email:string; date:string; newsContent:string}):Promise<void>=>{

    const htmlTemplate= NEWS_SUMMARY_EMAIL_TEMPLATE
    .replace('{{date}}', date)
    .replace('{{newsContent}}', newsContent);

    const mailOptions = {
        from: `"MetriK News" <MetriK@business>`,
        to: email,
        subject: `📈 Market News Summary Today - ${date}`,
        text: `Today's market news summary from MetriK`,
        html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions)

}

//missing