const express = require("express");
const cors = require('cors')
const rootRouter = require("./routes/index");
// const bodyParser = require('body-parser')

const app = express();
app.use(cors())
// no need to use this anymore
// app.use(bodyParser.json()); //utilizes the body-parser package
app.use(express.json())

app.use("/api/v1",rootRouter)
app.listen(3000);