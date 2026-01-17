const ServiceService = require('../services/serviceService');

exports.getAllServices = async (req, res) => {
    try {
        const services = await ServiceService.getAllServices();
        res.json(services);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getServiceById = async (req, res) => {
    try {
        const service = await ServiceService.getServiceById(req.params.id);
        if (!service) return res.status(404).json({ message: 'Service not found' });
        res.json(service);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createService = async (req, res) => {
    try {
        const newService = await ServiceService.createService(req.body);
        res.status(201).json(newService);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateService = async (req, res) => {
    try {
        const updatedService = await ServiceService.updateService(req.params.id, req.body);
        if (!updatedService) return res.status(404).json({ message: 'Service not found' });
        res.json(updatedService);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteService = async (req, res) => {
    try {
        const success = await ServiceService.deleteService(req.params.id);
        if (!success) return res.status(404).json({ message: 'Service not found' });
        res.json({ message: 'Service deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
