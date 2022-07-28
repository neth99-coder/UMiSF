const playerController = require('../controllers/players');
const express = require('express');
const router = express.Router();

router.get(`/getUser`,playerController.getPlayers);
router.post(`/addUser`,playerController.addPlayer);
router.put('/updatePlayer',playerController.updatePlayer);
router.delete('/deletePlayer',playerController.deletePlayer);