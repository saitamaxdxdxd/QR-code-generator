const QRcode = require("qrcode");

const qrCtrl = {
    createQr: async function (req, res) {
        try {
            const url = req.body.url;
            const link = await QRcode.toDataURL(String(url), {
                width: 500,
                height: 500,
            });
            res.status(200).json({ link });
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = qrCtrl;