import PATH from "path";
import env from "dotenv";
import express from "express";

env.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = PATH.basename(import.meta.url);
const __dirname = PATH.dirname(__filename);

app.use("/assets", express.static("../public/assets", { root: __dirname }));

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

app.get("/projects", (req, res) => {
    res.sendFile("views/pages/projects.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
    res.sendFile("views/pages/contact.html", { root: __dirname });
});

app.get("/experience", (req, res) => {
    res.sendFile("views/pages/experience.html", { root: __dirname });
});

app.get("/", (req, res) => {
    res.sendFile("views/pages/home.html", { root: __dirname });
});

app.use((req, res) => {
    res.status(404).sendFile("views/404.html", { root: __dirname });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
