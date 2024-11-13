// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Serve static files (like HTML) from the public folder
app.use(express.static('public'));

// Route to fetch Star Wars characters based on movie ID
app.get('/characters/:movieId', async (req, res) => {
    const movieId = req.params.movieId;

    try {
        const movieData = await axios.get(`https://swapi.dev/api/films/${movieId}/`);
        const characterUrls = movieData.data.characters;

        const characterPromises = characterUrls.map(url => axios.get(url));
        const characterResponses = await Promise.all(characterPromises);
        
        const characters = characterResponses.map(response => response.data.name);
        res.json(characters);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

