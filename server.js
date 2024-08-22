const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const getSongRoute = require('./routes/getSong');
const postSongRoute = require('./routes/postSong');

// Routes for /song
app.get('/song', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'song.html'));
});
app.use('/song', getSongRoute);
app.use('/song', postSongRoute);

// Routes for /upload-lyricss
app.get('/upload-lyrics', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'lyrics.html'));
});

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
