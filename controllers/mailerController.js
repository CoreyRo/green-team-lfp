const mongoose = require("mongoose");
const passport = require("passport");
const nodemailer = require('nodemailer')
const db = require("../models");
const axios = require('axios')



module.exports =
{
    addToMailList: function (req, res)
    {
        let { newUser } = req.body

        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: 'LookingForProjectGreenTeam@gmail.com',
                pass: 'greenteam'
            }

        });
        message = "Welcome to our mailer, in the future you will be recieving super rad emails about updates" +
            " being made to our site... CHEERS"

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"LFG" <LookingForProjectGreenTeam@gmail.com>', // sender address
            to: newUser, // list of receivers
            subject: "Welcome Letter", // Subject line
            text: message // plain text body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return
                console.log(error);
            }
            res.json(info);

        });

        // Below code is for future admin controls to create and send mailers


        // db.Mailer.findOne({ userEmail: newUser })
        // .then(model =>
        // {
        //     console.log("model ", model)
        //     if(model)
        //     {
        //         res.json({ found: true, successful: false })
        //     }
        //     else
        //     {
        //         db.Mailer.create({ userEmail: newUser })
        //         .then(model =>
        //         {
        //             res.json({ found: false, successful: true })
        //         })
        //     }
        // })
    }

}