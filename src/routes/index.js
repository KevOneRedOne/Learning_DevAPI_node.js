const express = require('express');

const router = express.Router();
const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');
const productRouter = require('./product.routes');

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/product', productRouter);

module.exports = router;
