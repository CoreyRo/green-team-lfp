const db = require("../models");

module.exports = {

    delete: function(req, res) {
        // The "todo" in this callback function represents the document that was found.
        // It allows you to pass a reference back to the client in case they need a reference for some reason.
        db.Message.findByIdAndRemove(req.params.id, (err, message) => {  
            // We'll create a simple object to send back with a message and the id of the document that was removed
            // You can really do this however you want, though.
            let response = {
                message: "Message successfully deleted",
                id: message._id
            };
            res.status(200).send(response);
        });
    }
}