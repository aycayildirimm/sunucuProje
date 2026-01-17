const db = require('../db');

class AppointmentModel {
    static async getAll() {
        const [rows] = await db.query(`
            SELECT a.*, u.name as user_name, s.name as service_name 
            FROM appointments a
            JOIN users u ON a.user_id = u.id
            JOIN services s ON a.service_id = s.id
        `);
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query(`
            SELECT a.*, u.name as user_name, s.name as service_name 
            FROM appointments a
            JOIN users u ON a.user_id = u.id
            JOIN services s ON a.service_id = s.id
            WHERE a.id = ?
        `, [id]);
        return rows[0];
    }

    static async create(appointmentData) {
        const { user_id, service_id, appointment_date, status } = appointmentData;

        // Ensure date is formatted for MySQL (YYYY-MM-DD HH:mm:ss)
        const dateObj = new Date(appointmentData.appointment_date);
        const formattedDate = dateObj.toISOString().slice(0, 19).replace('T', ' ');

        const [result] = await db.query(
            'INSERT INTO appointments (user_id, service_id, appointment_date, status) VALUES (?, ?, ?, ?)',
            [user_id, service_id, formattedDate, status || 'active']
        );
        return { id: result.insertId, ...appointmentData, appointment_date: formattedDate };
    }

    static async update(id, appointmentData) {
        const { user_id, service_id, appointment_date, status } = appointmentData;
        await db.query(
            'UPDATE appointments SET user_id = ?, service_id = ?, appointment_date = ?, status = ? WHERE id = ?',
            [user_id, service_id, appointment_date, status, id]
        );
        return this.getById(id);
    }

    static async delete(id) {
        const [result] = await db.query('DELETE FROM appointments WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = AppointmentModel;
