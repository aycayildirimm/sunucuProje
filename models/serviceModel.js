const db = require('../db');

class ServiceModel {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM services');
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM services WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(serviceData) {
        const { name, duration, price, is_active } = serviceData;
        const [result] = await db.query(
            'INSERT INTO services (name, duration, price, is_active) VALUES (?, ?, ?, ?)',
            [name, duration, price, is_active !== undefined ? is_active : 1]
        );
        return { id: result.insertId, ...serviceData };
    }

    static async update(id, serviceData) {
        const { name, duration, price, is_active } = serviceData;
        await db.query(
            'UPDATE services SET name = ?, duration = ?, price = ?, is_active = ? WHERE id = ?',
            [name, duration, price, is_active, id]
        );
        return this.getById(id);
    }

    static async delete(id) {
        const [result] = await db.query('DELETE FROM services WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = ServiceModel;
