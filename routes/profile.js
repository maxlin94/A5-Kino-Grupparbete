import express from 'express';

const profileRouter = express.Router();

profileRouter.get('/', async (_req, res) => {
    res.render('profile');
});

export default profileRouter;