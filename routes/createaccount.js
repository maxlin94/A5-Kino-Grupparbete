import express from 'express';
const createAccountRouter = express.Router();

createAccountRouter.get('/', async (req, res) => {
    res.render('createaccount');
});

export default createAccountRouter;