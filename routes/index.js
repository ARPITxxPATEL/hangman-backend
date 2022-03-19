const { Router } = require('express');
const SessionRouter = require('./sessions');

const router = Router();

router.use("/sessions", SessionRouter);

module.exports = router;