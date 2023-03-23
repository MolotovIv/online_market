const Router = require("express");
const router = new Router();

router.post("/registration");
router.post("/login");
router.get("/auth", (req, res) => {
	res.json({ massege: "all working!" });
});

module.exports = router;
