const express = require("express");


const cors = require("cors");

const mainRouter = require("./routes")

const PORT = process.env.PORT || 5001

const app = express();

app.use(cors());

app.use("/api/v1", mainRouter);


// app.get("/",(req,res) => {
//     res.send("This is Home Page")
// })

app.listen(PORT, () => {
    console.log("Server Starting...")
})