const db = require("../models")

// Defining methods for the postController
module.exports =
{
    findAccountAndSendPass: function(req, res)
    {
        let data = req.body
        db.Post
            .find(data)
            .then(dbModel => {console.log(dbModel)})
            .catch(err => res.status(422).json(err))
    }

}
