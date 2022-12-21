const router = require("express").Router();
const { get_list, get } = require("../controller/game_disk");

router.get("/get-list", get_list);
router.get("/get/:id", get);

module.exports = router;