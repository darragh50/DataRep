const express = require('express');
const app = express();
const port = 3000;

//Desired message to send to server
app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});

//Add a route with URL parameter
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

//Add second URL paramater for surname
app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name;
    const surname = req.params.surname;
    res.send(`Hello ${name}  ${surname}`);
});

//Create a route /api/movies that returns a list of movie objects in JSON format
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    //Return JSON response and add status code to the resposnse
    res.status(200).json({ myMovies:movies });
});

//Serve the index.HTML file
const path = require('path');
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Serve static assets: Set up middleware to serve all static files (CSS, JS, etc.) from a public directory
app.use(express.static('public'));

//Server listening on port ${port}
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//Error-handling middleware to catch any server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});