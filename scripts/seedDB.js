const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project-lfg",
  {
    useMongoClient: true
  }
);

const postSeed = [
  {
    title: "ios App",
    author: "Jake",
    description: "ifjla sf; ohsa dflias gsd ak jh fga sdkl jghda sjklhfjsha fjklhsdfj khasdf jkh sadjf khsd jkf hsdjh fdf",
    dateAdded: new Date(Date.now())
  },
  {
    title: "express-react app",
    author: "Corey",
    description: "ifjla sf; ohsa dflias gsd ak jh fga sdkl jghda sjklhfjsha fjklhsdfj khasdf jkh sadjf khsd jkf hsdjh fdf",
    dateAdded: new Date(Date.now())
  },
  {
    title: "android app",
    author: "Stephen",
    description: "ifjla sf; ohsa dflias gsd ak jh fga sdkl jghda sjklhfjsha fjklhsdfj khasdf jkh sadjf khsd jkf hsdjh fdf",
    dateAdded: new Date(Date.now())
  },
  {
    title: "react native app",
    author: "Eric",
    description: "ifjla sf; ohsa dflias gsd ak jh fga sdkl jghda sjklhfjsha fjklhsdfj khasdf jkh sadjf khsd jkf hsdjh fdf",
    dateAdded: new Date(Date.now())
  },
  {
    title: "facebook",
    author: "Bob",
    description: "ifjla sf; ohsa dflias gsd ak jh fga sdkl jghda sjklhfjsha fjklhsdfj khasdf jkh sadjf khsd jkf hsdjh fdf",
    dateAdded: new Date(Date.now())
  },
  {
    title: "instagram",
    author: "Joe",
    description: "ifjla sf; ohsa dflias gsd ak jh fga sdkl jghda sjklhfjsha fjklhsdfj khasdf jkh sadjf khsd jkf hsdjh fdf",
    dateAdded: new Date(Date.now())
  }
  
];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
