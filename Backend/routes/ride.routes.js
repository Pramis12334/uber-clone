const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authMiddleware = require('../Middlewares/auth.middleware');
const rideController = require('../controllers/ride.controller');


router.post('/create',
body('userId').isString().isLength({ min: 24, max: 24 }).withMessage('Invalid user credential'),
body('pickup').isString().isLength({ min: 3 }).withMessage("Invalid pickup address"),
body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
body('vehicleType').isString().isIn(['car', 'auto', 'motorcycle']).withMessage('Invalid Vehicle Type'),
authMiddleware.authUser,
rideController.createRide
);

module.exports = router;
