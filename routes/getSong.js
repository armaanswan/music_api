const express = require('express');
const router = express.Router();
const { db } = require('../config/firebase');

// GET route for retrieving data
router.get('/:id', async (req, res) => {
    const docId = req.params.id;
    try {
        const doc = await db.collection('songs').doc(docId).get();
        if (!doc.exists) {
            return res.status(404).send('No such document!');
        }
        res.json(doc.data());
    } catch (error) {
        res.status(500).send('Error retrieving document!');
    }
});

module.exports = router;
