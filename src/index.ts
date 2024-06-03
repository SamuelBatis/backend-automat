import express from "express";
// import router from "./routes/routes.js";
const port = 8000;
const app = express();

// app.use(router);
app.use(express.json);
app.listen(port, () => console.log(`listening on port ${port}`));
