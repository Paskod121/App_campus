const Timetable = require('../models/timetable');

exports.createTimetable = async (req, res) => {
    const { userId, courses, schedule } = req.body;
    const timetable = new Timetable({ userId, courses, schedule });
    try {
        await timetable.save();
        res.status(201).json({ message: 'Emploi du temps créé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de l emploi du temps' });
    }
};

exports.getTimetable = async (req, res) => {
    const { userId } = req.params;
    try {
        const timetable = await Timetable.findOne({ userId });
        if (!timetable) {
            return res.status(404).json({ message: 'Emploi du temps non trouvé' });
        }
        res.status(200).json(timetable);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de l emploi du temps' });
    }
};