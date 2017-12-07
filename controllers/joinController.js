const mongoose = require("mongoose");
const passport = require("passport");
const nodemailer = require('nodemailer')
const db = require("../models");



module.exports =
{
    sendMail: function(req, res)
    {
        sendTo = req.body

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: 'LookingForProjectGreenTeam@gmail.com',
                pass: 'greenteam'
            }

        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Green Team" <LookingForProjectGreenTeam@gmail.com>', // sender address
            to: sendTo.email, // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?' // plain text body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.json(info);

        });
    }
}
