import e from "express";
import path from "path";

const app = e();
const PORT = 5000;

app.get("/package.json", (req, res) => {
  res.sendFile(path.join(__dirname, "package.json"));
});

app.listen(PORT, () => console.log(`Server is live on port ${PORT}`));
