const mongoose = require("mongoose");
const db = require("../models");

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1/project-lfg",
  {
    useMongoClient: true
  }
);

const postSeed = [
  {
    userId: "0",
    title: "ios App",
    author: "Jake",
    description: "ifjla sf; ohsa dflias gsd ak jh fga sdkl jghda sjklhfjsha fjklhsdfj khasdf jkh sadjf khsd jkf hsdjh fdf",
    dateAdded: new Date(Date.now())
  },
  {
    userId: "1",
    title: "express-react app",
    author: "Corey",
    description: "ifjla sf; ohsa dflias gsd ak jh fga sdkl jghda sjklhfjsha fjklhsdfj khasdf jkh sadjf khsd jkf hsdjh fdf",
    dateAdded: new Date(Date.now())
  },
  {
    userId: "2",
    title: "android app",
    author: "Stephen",
    description: "ifjla sf; ohsa dflias gsd ak jh fga sdkl jghda sjklhfjsha fjklhsdfj khasdf jkh sadjf khsd jkf hsdjh fdf",
    dateAdded: new Date(Date.now())
  },
  {
    userId: "3",
    title: "react native app",
    author: "Eric",
    description: "ifjla sf; ohsa dflias gsd ak jh fga sdkl jghda sjklhfjsha fjklhsdfj khasdf jkh sadjf khsd jkf hsdjh fdf",
    dateAdded: new Date(Date.now())
  },
  {
    userId: "4",
    title: "facebook",
    author: "Bob",
    description: "ifjla sf; ohsa dflias gsd ak jh fga sdkl jghda sjklhfjsha fjklhsdfj khasdf jkh sadjf khsd jkf hsdjh fdf",
    dateAdded: new Date(Date.now())
  },
  {
    userId: "5",
    title: "instagram",
    author: "Joe",
    description: "ifjla sf; ohsa dflias gsd ak jh fga sdkl jghda sjklhfjsha fjklhsdfj khasdf jkh sadjf khsd jkf hsdjh fdf",
    dateAdded: new Date(Date.now())
  }
  
];

const userSeed = [
  {
    firstName: "Jake",
    lastName: "Greer",
    email: "jakegreer11@gmail.com",
    username: "jakeg",
    password: "jakeabc",
    location: "cali",
    skills: ["html", "css", "javascript", "node", "react"]
  },
  {
    firstName: "Stephen",
    lastName: "Simone",
    email: "scoobasteve@gmail.com",
    username: "scoobasteve",
    password: "steven",
    location: "cali",
    skills: ["html", "css", "javascript", "node", "react"]
  }

];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log("Posts ", data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log("Users ", data.insertedIds.length + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });

