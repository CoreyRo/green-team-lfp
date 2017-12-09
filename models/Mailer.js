const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mailerSchema = new Schema({
    userEmail: { type: String, required: true }
});

const Mailer = mongoose.model("Mailer", mailerSchema);

module.exports = Mailer;