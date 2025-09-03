import e from "express";

const app = e();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => console.log(`Server is live on port ${PORT}`));
