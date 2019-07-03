const router = require("express").Router();
const db = require("../models");

router.post("/api/market/", (req, res) => {
    db.create(req.body).then((market) => {
        res.json({ succes: true, market });
    }).catch(err => {
        res.json({ succes: false, error: err });
    });
});

router.post("/api/farmer", (req, res) => {
    db.create(req.body).then((farmer) => {
        res.json({ succes: true, farmer });
    }).catch(err => {
        res.json({ succes: false, error: err });
    });
});

router.post("/api/product/:market/:farmer/:category", (req, res) => {
    db.create({
        name: req.body.name,
        category: req.params.category,
        price: req.body.price,
        sku: req.body.sku,
        idMarket: req.params.market,
        idFarmer: req.params.farmer,
        picture: req.body.picture
    }).then((product) => {
        res.json({ succes: true, product });
    }).catch(err => {
        res.json({ succes: false, error: err });
    });
})

return router;