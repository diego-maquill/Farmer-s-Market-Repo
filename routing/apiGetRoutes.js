// Pull in required dependencies
const router = require("express").Router();
const db = require("../models");
//query just markets
router.get("/api/markets", async (req, res) => {
    const markets = await db.Market.findAll({});
    res.json(markets);
});

//query markets and products for Customers (people who place orders)
router.get("/api/marketProducts", async (req, res) => {
    const marketProducts = await db.Market.findAll({ include: [db.Product] });
    res.json(marketProducts);
});

//query products using id of a market
router.get("/api/products/:marketId", async (req, res) => {
    const marketProducts = await db.Product.findAll({ where: { marketId: req.params.marketId }, include: [db.Farmer] },
        { order: ['deparment', 'DESC'] });
    res.json(marketProducts);
});

//orders to be prepare by shopper, or are ready to be picked up, or they have been picked up
router.get("/api/orders/:marketId/:status", async (req, res) => {
    const orders = await db.Order.findAll({ where: [{ marketId: req.params.marketId }, { status: req.params.status }] }, { include: [db.Order_Detail, db.Customer] });
    res.json(orders);
});

router.get("api/customer/:id", async (req, res) => {

    const customer = await db.Customer.findOne({ where: [{ id: req.params.id }] }, { include: [db.PaymentMethod] });
    res.json(customer);
});

router.get("api/category", async (req, res) => {
    const category = await db.customer.findAll({});
    res.json(category);
});


module.exports = router;
