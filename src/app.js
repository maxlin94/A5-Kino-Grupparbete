import express from "express";
import movieRouter from "../routes/movies.js";
import aboutRouter from "../routes/about.js";
import bookingRouter from "../routes/booking.js";
import reviewRouter from "../routes/reviews.js";


const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.render("index");
});
app.use("/movies", movieRouter);
app.use("/about", aboutRouter);
app.use("/booking", bookingRouter);
app.use('/reviewmovies', reviewRouter);

export default app;