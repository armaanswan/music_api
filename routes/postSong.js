const express = require('express');
const router = express.Router();
const { db } = require('../config/firebase');

// POST route for adding data
router.post('/', async (req, res) => {
    const data = req.body;
    try {
        const docRef = await db.collection('songs').add(data);
        res.json({ id: docRef.id });
    } catch (error) {
        res.status(500).send('Error adding document!');
    }
});

module.exports = router;
