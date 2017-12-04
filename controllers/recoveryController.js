const db = require("../models");

// Defining methods for the postController
module.exports =
{
    findAccountAndSendPass: function(req, res)
    {
        let data = req.params.body
        console.log(data)
        // db.Post
        //     .find({"email": })
        //     .sort({ date: -1 })
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
    }

}
