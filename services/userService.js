const UserModel = require('../models/userModel');

class UserService {
    static async getAllUsers() {
        return await UserModel.getAll();
    }

    static async getUserById(id) {
        return await UserModel.getById(id);
    }

    static async createUser(userData) {
        // Business Logic: Check if email already exists
        // Note: The simple model insert might throw an error if unique constraint is violated.
        // We can handle that here or let it bubble up.
        // For a robust system, we might check existence first.

        // Example validation (basic)
        if (!userData.email || !userData.name) {
            throw new Error('Name and Email are required');
        }

        return await UserModel.create(userData);
    }

    static async updateUser(id, userData) {
        return await UserModel.update(id, userData);
    }

    static async deleteUser(id) {
        return await UserModel.delete(id);
    }
}

module.exports = UserService;
