import express from "express";

const userRouter = express.Router();
const users = [];

userRouter.get("/profile", isAuthenticated, (req, res) => {
    res.render("profile");
});

userRouter.get("/login", isNotAuthenticated, (req, res) => {
    res.render("login");
});

userRouter.post("/login", (req, res) => {
    if (users.some(user => user.email === req.body.email && user.password === req.body.password)) {
        req.session.user = getUserByEmail(req.body.email);
        res.redirect("profile");
    } else {
        req.flash("error", "Fel användarnamn eller lösenord");
        res.redirect("login");
    }
});

userRouter.get("/register", (req, res) => {
    res.render("register");
});

userRouter.post("/register", (req, res) => {
    if (users.some(user => user.email === req.body.email)) {
        req.flash("error", "Ett konto med den e-postadressen finns redan");
        res.redirect("register");
        return;
    }
    users.push(req.body);
    req.flash("success", "Användaren skapad");
    res.redirect("login");
});

userRouter.get('/logout', function (req, res) {
    req.session.destroy(() => {
        res.redirect('/login');
    })
});

function getUserByEmail(email) {
    return users.find(user => user.email === email);
}

function isAuthenticated(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.flash("error", "Du måste vara inloggad för att se denna sida");
        res.redirect("login");
    }
}

function isNotAuthenticated(req, res, next) {
    if (req.session.user) {
        res.redirect("profile");
    } else {
        next();
    }
}

export default userRouter;