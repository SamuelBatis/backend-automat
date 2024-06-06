import express from "express";
import router from "./routes/routes";
import cors from "cors";

const port = 8000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => console.log(`listening on port ${port}`));
