const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const postSchema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  members: { type: String, required: true },
  desiredSkills: { type: Array, required: true },
  description: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now }
});
postSchema.plugin(mongooseAggregatePaginate);
const Post = mongoose.model("Post", postSchema);



module.exports = Post;
