const db = require('../db');

class UserModel {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM users');
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(userData) {
        const { name, email, role } = userData;
        const [result] = await db.query(
            'INSERT INTO users (name, email, role) VALUES (?, ?, ?)',
            [name, email, role || 'customer']
        );
        return { id: result.insertId, ...userData };
    }

    static async update(id, userData) {
        const { name, email, role } = userData;
        await db.query(
            'UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?',
            [name, email, role, id]
        );
        return this.getById(id);
    }

    static async delete(id) {
        const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = UserModel;
