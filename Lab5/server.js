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


//Server listening on port ${port}
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//Error-handling middleware to catch any server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});