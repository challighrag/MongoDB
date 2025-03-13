const express = require("express");
const {PORT} = require("./config/env");
const conncectDB = require("./config/db")

const app = express();

conncectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Runnning on https://localhost${PORT}`);
    });
});
