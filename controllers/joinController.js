const mongoose = require("mongoose");
const passport = require("passport");
const nodemailer = require('nodemailer')
const db = require("../models");



module.exports =
{
    sendMail: function(req, res)
    {
        console.log(req.body)
        let { applyingUser } = req.body
        let { projectOwner } = req.body

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: 'LookingForProjectGreenTeam@gmail.com',
                pass: 'greenteam'
            }

        });
        message = 'Hello, ' + projectOwner.firstName + ' ' + applyingUser.username +
            ' would like to join your group. His skills are: ' +
            applyingUser.skills  + ". Would you like to add him to your group?"

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"LFG" <LookingForProjectGreenTeam@gmail.com>', // sender address
            to: projectOwner.email, // list of receivers
            subject: "Someone Wants to Join Your Group!", // Subject line
            text: message // plain text body
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
