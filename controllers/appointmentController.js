const AppointmentService = require('../services/appointmentService');

exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await AppointmentService.getAllAppointments();
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAppointmentById = async (req, res) => {
    try {
        const appointment = await AppointmentService.getAppointmentById(req.params.id);
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json(appointment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createAppointment = async (req, res) => {
    try {
        const newAppointment = await AppointmentService.createAppointment(req.body);
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateAppointment = async (req, res) => {
    try {
        const updatedAppointment = await AppointmentService.updateAppointment(req.params.id, req.body);
        if (!updatedAppointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json(updatedAppointment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteAppointment = async (req, res) => {
    try {
        const success = await AppointmentService.deleteAppointment(req.params.id);
        if (!success) return res.status(404).json({ message: 'Appointment not found' });
        res.json({ message: 'Appointment deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
