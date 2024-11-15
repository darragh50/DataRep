//Create a server running on port 4000
const express = require('express');
const app = express();
//Set port number
const port = 4000;

//Enable CORS for your server
const cors = require('cors');
app.use(cors());

//This middleware setup allows your frontend app (React) to make API requests to the backend (Express) without encountering CORS-related issues
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Add a body-parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connect to MongoDB
const mongoose = require('mongoose');
//Connect to cluster using mongoose
mongoose.connect('mongodb+srv://admin:admin@cluster0.a06sv.mongodb.net/MyMovieDB');

//Define schema and data model
const movieSchema = new mongoose.Schema({
    title:String,
    year:String,
    poster:String
});
const Movie = new mongoose.model('Movie', movieSchema)

 //Method to fetch all movie records
 app.get('/api/movies', async (req, res) => {
    const movies = await Movie.find({});
    res.json(movies);
  });

//Method to retrieve a specific movie by its ID
//Listens for a http rquest that has a get method on api/movies
//Blocking code - async method
app.get('/api/movies/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.send(movie);
  });

//Send a response to the client if the post was successful 
app.post('/api/movies', async (req, res)=>{
    //Print to console
    console.log("Movies: " + req.body.title);

    //Method to add new movie records
    //Add blocking code - async methhod - await newMovie.save() ensures the movie is saved to the database before continuing
    const {title,year,poster} = req.body;
    const newMovie = new Movie({title,year,poster});
    //newMovie.save() saves the new movie to MongoDB
    await newMovie.save();

    //Send message back to client
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
})

//Console log the port number
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

/*
{
    "Title": "Avengers: Infinity War (server)",
    "Year": "2018",
    "imdbID": "tt4154756",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
},
{
    "Title": "Captain America: Civil War (server)",
    "Year": "2016",
    "imdbID": "tt3498820",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
},
{
    "Title": "World War Z (server)",
    "Year": "2013",
    "imdbID": "tt0816711",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
}*/