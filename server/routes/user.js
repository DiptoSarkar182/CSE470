const router = require("express").Router();
const { create, get, is_logged_in, login } = require("../controller/user");

router.post("/create", create);
router.post("/login", login);
router.get('/is_logged_in', is_logged_in )
router.get("/", get);

module.exports = router;