import express from "express";
const createAccountRouter = express.Router();

createAccountRouter.get("/", async (req, res) => {
  res.render("createaccount");
});
createAccountRouter.get("/personalpage", async (req, res) => {
  res.render("personalPage");
});

export default createAccountRouter;
