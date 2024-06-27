const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // ganti dengan email Anda
        pass: 'your-email-password',  // ganti dengan password email Anda
    },
});

app.post('/send-email', (req, res) => {
    const { email, title, message } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com', // ganti dengan email Anda
        to: 'dailyziel@gmail.com',    // ganti dengan email tujuan Anda
        subject: title,
        text: `You have received a new message from ${email}:\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
