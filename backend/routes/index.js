const express = require('express');
const userRouter = require('./user');
const accountRouter = require('./account')

const router = express.Router();

router.use("/user",userRouter);
// we are basically telling that if a request come here go here and if a request come there go there
router.use('/account',accountRouter);

module.exports = router;