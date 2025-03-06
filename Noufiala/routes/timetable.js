const express = require('express');
const { createTimetable, getTimetable } = require('../controllers/timetableController');
const router = express.Router();

router.post('/', createTimetable);
router.get('/:userId', getTimetable);

module.exports = router;