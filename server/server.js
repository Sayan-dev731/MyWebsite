const PATH = require("path");
const env = require("dotenv");
const express = require("express");

env.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  "/assets",
  express.static(PATH.join(__dirname, "..", "public", "assets")),
);

app.get("/prozess", (req, res) => {
  res.sendFile(PATH.join(__dirname, "..", "views", "pages", "home.html"));
});

app.get("/kontakt", (req, res) => {
  res.sendFile(PATH.join(__dirname, "..", "views", "pages", "contact.html"));
});

app.get("/preis", (req, res) => {
  res.sendFile(PATH.join(__dirname, "..", "views", "pages", "preis.html"));
});

app.get("/adb", (req, res) => {
  res.sendFile(PATH.join(__dirname, "..", "views", "pages", "agb.html"));
});

app.get("/datenschutz", (req, res) => {
  res.sendFile(
    PATH.join(__dirname, "..", "views", "pages", "datenschutz.html"),
  );
});

app.get("/impressum", (req, res) => {
  res.sendFile(PATH.join(__dirname, "..", "views", "pages", "impressum.html"));
});

app.get("/", (req, res) => {
  res.sendFile(PATH.join(__dirname, "..", "views", "pages", "services.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(PATH.join(__dirname, "..", "views", "404.html"));
});

app.use(
  express.json({
    limit: "10kb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10kb",
  }),
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
