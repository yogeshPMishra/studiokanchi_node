const express = require("express");
const router = express.Router();

// getting the controller
const { home, getNewArrival, getBestSellerProduct } = require("../controller/homeController");

router.route('/').get(home);
router.route('/get_new_arrival').get(getNewArrival);
router.route('/get_best_seller').get(getBestSellerProduct);

module.exports = router;