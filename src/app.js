import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.status(200).send("home.html");
});

export default app;