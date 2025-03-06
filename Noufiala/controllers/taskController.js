const Task = require('../models/task');

exports.createTask = async (req, res) => {
    const { userId, description, dueDate } = req.body;
    const task = new Task({ userId, description, dueDate });
    try {
        await task.save();
        res.status(201).json({ message: 'Tâche créée avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de la tâche' });
    }
};

exports.getTasks = async (req, res) => {
    const { userId } = req.params;
    try {
        const tasks = await Task.find({ userId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des tâches' });
    }
};