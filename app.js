const express = require("express");
const app = express();

// //set the template engine ejs
// app.set("view engine", "ejs");
// //middlewares
// app.use(express.static("public"));
// //routes
app.get("/", (req, res) => {
    res.send("Hello world");
});
//Listen on port 3000
server = app.listen(3001);
