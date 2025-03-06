const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courses: [{ type: String, required: true }],
    schedule: [{ day: String, time: String }],
});

const Timetable = mongoose.model('Timetable', timetableSchema);
module.exports = Timetable;