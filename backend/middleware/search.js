const express = require('express');
const { search } = require('../services/search-service');

const router = express.Router();

router.get('/', (req, res) => {
    const query = req.query.searchQuery;
    res.send(search(query));
});

module.exports = router;