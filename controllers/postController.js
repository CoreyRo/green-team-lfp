const db = require("../models");
var mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

module.exports = {

  findAll: function(req, res) {
    let aggregate = db.Post.aggregate()
    let options = { page:req.params.num, limit:5}
    aggregate.match({})
    db.Post.aggregatePaginate(aggregate, options, function (err, results, pageCount, count) {
      if (err) {
        console.log("browse error:", err)
      }
      else {
        let pageRes = {}
        pageRes.results = results
        pageRes.pageCount = pageCount
        pageRes.count = count
        res.json(pageRes)
      }
    })
  },

  findPageOne: function(req, res){
    
  },

  findPosts: function(req, res) {
    db.Post
      .find({})
      .sort({ date: -1 })
      .limit(5)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findOwnersPost: function(req, res) {
    db.Post
      .findOne({ userId: req.query.userId }, {}, { sort : {'dateAdded' : -1}})
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err));
  },

  findAllUsers: function(req, res)
  {
    db.User
      .find({})
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err));
  },

  findThreeUsers: function(req, res)
  {
    db.User
      .find({})
      .limit(2)
      .then(model => res.json(model))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Post
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findUserById: function(req, res) {
    db.User
      .findOne({ _id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findBySaved: function(req, res) {
    db.Post
      .findBySaved(req.params.saved)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Post
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUser: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.user._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateOtherUser: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateMessages: function(req, res) {
    db.Message
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMessages: function(req, res) {
    db.Message
      .find({ userId: req.query.userId })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      
  }
};
