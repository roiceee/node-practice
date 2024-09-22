const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer();

const port = 8080;
const host = "127.0.0.1";

app.use(express.json());
app.use(upload.none());

app.get("/", (req, res) => {
  console.log(__dirname);
  res.json({ message: "boom" });
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
