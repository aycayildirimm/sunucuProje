const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

/**
 * @swagger
 * tags:
 *   name: Services
 *   description: Service management API
 */

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Returns the list of all services
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: The list of the services
 */
router.get('/', serviceController.getAllServices);

/**
 * @swagger
 * /api/services/{id}:
 *   get:
 *     summary: Get service by ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The service ID
 *     responses:
 *       200:
 *         description: The service description by id
 *       404:
 *         description: Service not found
 */
router.get('/:id', serviceController.getServiceById);

/**
 * @swagger
 * /api/services:
 *   post:
 *     summary: Create a new service
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               duration:
 *                 type: integer
 *               price:
 *                 type: number
 *               is_active:
 *                 type: integer
 *                 description: 1 for active, 0 for inactive
 *     responses:
 *       201:
 *         description: The service was successfully created
 */
router.post('/', serviceController.createService);

/**
 * @swagger
 * /api/services/{id}:
 *   put:
 *     summary: Update a service
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The service ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               duration:
 *                 type: integer
 *               price:
 *                 type: number
 *               is_active:
 *                 type: integer
 *     responses:
 *       200:
 *         description: The service was updated
 *       404:
 *         description: Service not found
 */
router.put('/:id', serviceController.updateService);

/**
 * @swagger
 * /api/services/{id}:
 *   delete:
 *     summary: Delete a service
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The service ID
 *     responses:
 *       200:
 *         description: The service was deleted
 *       404:
 *         description: Service not found
 */
router.delete('/:id', serviceController.deleteService);

module.exports = router;
