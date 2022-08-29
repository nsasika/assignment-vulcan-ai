const UsersService = require('../service/users.service');
const apiStatus = require("../consts/api.status")

class UsersController {
    static async getAllUsers(req, res, next) {
        try {
            const { status, data, error } = await UsersService.getAllUsers();
            switch (status) {
                case apiStatus.SUCCESS: return res.status(200).json(data)
                case apiStatus.FAIL: return res.status(500).json({ status, error: error.message })
            }
        } catch (error) {
            console.log(`UsersController getAllUsers error , ${error}`);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UsersController;