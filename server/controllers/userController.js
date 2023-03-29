const ApiError = require("../error/ApiError");
class userController {
	async registration(res, req) {}
	async login(req, res) {}
	async check(req, res, next) {
		const { id } = req.query;
		if (!id) {
			return next(ApiError.badRequest("Не указан Id"));
		}
		res.json(id);
	}
}

module.exports = new userController();
