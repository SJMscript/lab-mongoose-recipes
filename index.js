const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
     return Recipe.create({
      title: "Pollo al ajillo",
      level: "Easy Peasy",
      ingredients: ["pollo", "ajo", "pimienta", "sal", "patatas", "caldo"],
      cuisine: "Mediterranean",
      dishType: "main_course",
      image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      duration: 60,
      creator: "Chef PolliMaster"
    })
  })
  .then((recipeAdded) =>{
    console.log("Recipe Title", recipeAdded.title)
  })
  .then(()=>{
    return Recipe.insertMany({
      
    })
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
