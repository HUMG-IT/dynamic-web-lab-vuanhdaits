const express = require('express');
const router = express.Router();
const { submitName } = require('../controllers/nameController');

// Route cho endpoint /submit
router.post('/submit', submitName);

module.exports = router;