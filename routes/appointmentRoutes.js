const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

/**
 * @swagger
 * tags:
 *   name: Appointments
 *   description: Appointment management API
 */

/**
 * @swagger
 * /api/appointments:
 *   get:
 *     summary: Returns the list of all appointments
 *     tags: [Appointments]
 *     responses:
 *       200:
 *         description: The list of the appointments
 */
router.get('/', appointmentController.getAllAppointments);

/**
 * @swagger
 * /api/appointments/{id}:
 *   get:
 *     summary: Get appointment by ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The appointment ID
 *     responses:
 *       200:
 *         description: The appointment description by id
 *       404:
 *         description: Appointment not found
 */
router.get('/:id', appointmentController.getAppointmentById);

/**
 * @swagger
 * /api/appointments:
 *   post:
 *     summary: Create a new appointment
 *     tags: [Appointments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_id
 *               - service_id
 *               - appointment_date
 *             properties:
 *               user_id:
 *                 type: integer
 *               service_id:
 *                 type: integer
 *               appointment_date:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *                 enum: [active, cancelled, completed]
 *     responses:
 *       201:
 *         description: The appointment was successfully created
 *       500:
 *         description: Server error (e.g. inactive service)
 */
router.post('/', appointmentController.createAppointment);

/**
 * @swagger
 * /api/appointments/{id}:
 *   put:
 *     summary: Update an appointment
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The appointment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               service_id:
 *                 type: integer
 *               appointment_date:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: The appointment was updated
 *       404:
 *         description: Appointment not found
 */
router.put('/:id', appointmentController.updateAppointment);

/**
 * @swagger
 * /api/appointments/{id}:
 *   delete:
 *     summary: Delete an appointment
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The appointment ID
 *     responses:
 *       200:
 *         description: The appointment was deleted
 *       404:
 *         description: Appointment not found
 */
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
