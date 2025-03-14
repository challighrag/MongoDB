const express = require("express");
const {PORT} = require("./config/env");
const conncectDB = require("./config/db")
const router = require("./routers/studentsRouter");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/students", router);

conncectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Runnning on https://localhost${PORT}`);
    });
});
