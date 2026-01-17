const AppointmentModel = require('../models/appointmentModel');
const ServiceService = require('./serviceService');

class AppointmentService {
    static async getAllAppointments() {
        return await AppointmentModel.getAll();
    }

    static async getAppointmentById(id) {
        return await AppointmentModel.getById(id);
    }

    static async createAppointment(appointmentData) {
        const { user_id, service_id, appointment_date } = appointmentData;

        if (!user_id || !service_id || !appointment_date) {
            throw new Error('User ID, Service ID and Date are required');
        }

        // Rule 1: Check if service is active
        const service = await ServiceService.getServiceById(service_id);
        if (!service) {
            throw new Error('Service not found');
        }
        if (!service.is_active) {
            throw new Error('Cannot book an appointment for an inactive service');
        }

        // Rule: Prevent creating appointment in the past
        const appointmentDate = new Date(appointment_date);
        const now = new Date();
        if (appointmentDate < now) {
            throw new Error('Cannot create appointments in the past');
        }

        return await AppointmentModel.create(appointmentData);
    }

    static async updateAppointment(id, appointmentData) {
        // Rule 2: Prevent update if appointment is in the past
        const existingAppointment = await this.getAppointmentById(id);
        if (!existingAppointment) {
            throw new Error('Appointment not found');
        }

        const appointmentDate = new Date(existingAppointment.appointment_date);
        const now = new Date();

        if (appointmentDate < now) {
            throw new Error('Cannot update past appointments');
        }

        return await AppointmentModel.update(id, appointmentData);
    }

    static async deleteAppointment(id) {
        // Rule 2: Prevent delete if appointment is in the past
        const existingAppointment = await this.getAppointmentById(id);
        if (!existingAppointment) {
            throw new Error('Appointment not found');
        }

        const appointmentDate = new Date(existingAppointment.appointment_date);
        const now = new Date();

        if (appointmentDate < now) {
            throw new Error('Cannot delete past appointments');
        }

        return await AppointmentModel.delete(id);
    }
}

module.exports = AppointmentService;
