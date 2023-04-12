const express = require('express');
const { getLatestVideo, getRandomVideo, createRandomizedPlaylist } = require('../services/channel-service');

const router = express.Router();

router.get('/:id/latestvideo', (req, res) => {
    const channelID = req.params.id;
    res.send(getLatestVideo(channelID));
});

router.get('/:id/randomvideo', (req, res) => {
    const channelID = req.params.id;
    res.send(getRandomVideo(channelID));
});

router.get('/:id/randomplaylist', (req, res) => {
    const channelID = req.params.id;
    res.send(createRandomizedPlaylist(channelID));
});

module.exports = router;