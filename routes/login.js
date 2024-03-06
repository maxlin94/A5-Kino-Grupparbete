import express from 'express';
import { signUp } from '../utils/accountUtils.js';
import { savedUsers } from '../utils/accountUtils.js';

const loginRouter = express.Router();

loginRouter.get('/login', async (req, res) => {
    res.render('login', {signUp: false, signIn: true, userPage: false});
});

loginRouter.get('/users', async (req, res) => {
    res.send(savedUsers);
});

loginRouter.get('/signUp', async (req, res) => {
    res.render('login', {signUp: true, signIn: false, userPage: false});
});

loginRouter.post('/signUp/newUser', async (req, res) => {
    signUp(req.body);
    res.status(200).send('Success!')
})

export default loginRouter;