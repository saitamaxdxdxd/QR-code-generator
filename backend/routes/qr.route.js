const { Router } = require("express");

const qrCtrl = require("../controllers/qr.controller");

const router = Router();

router
    .route("/")
    .post(qrCtrl.createQr);

module.exports = router;