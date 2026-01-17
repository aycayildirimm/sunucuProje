const ServiceModel = require('../models/serviceModel');

class ServiceService {
    static async getAllServices() {
        return await ServiceModel.getAll();
    }

    static async getServiceById(id) {
        return await ServiceModel.getById(id);
    }

    static async createService(serviceData) {
        if (!serviceData.name || !serviceData.price) {
            throw new Error('Name and Price are required');
        }
        return await ServiceModel.create(serviceData);
    }

    static async updateService(id, serviceData) {
        return await ServiceModel.update(id, serviceData);
    }

    static async deleteService(id) {
        return await ServiceModel.delete(id);
    }
}

module.exports = ServiceService;
