import express from "express";
import flash from "express-flash";
import session from "express-session";
import movieRouter from "../routes/movies.js";
import aboutRouter from "../routes/about.js";
import bookingRouter from "../routes/booking.js";
import apiRouter from "../routes/api.js";
import userRouter from "../routes/user.js";


const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "very-secret",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(function(req, res, next) {
    app.locals.user = req.session.user;
    app.locals.text = req.session.user ? 'Mina sidor' : 'Logga in';
    next()
})

app.get("/", (req, res) => {
    res.render("index");
});

app.use('/api', apiRouter);
app.use("/movies", movieRouter);
app.use("/about", aboutRouter);
app.use("/booking", bookingRouter);
app.use(userRouter);

export default app;