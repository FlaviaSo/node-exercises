import express from "express";
import "express-async-errors";

const app = express();
const data = [{ name: "Earth" }, { name: "Venus" }];

//route
app.get("/planets", (req, res) => {
    res.json(data);
});

export default app;
//module.exports = app;