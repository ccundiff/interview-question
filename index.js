const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send( "Great to meet you!");
});

app.listen(8080, () => {
    console.log(`we out here on http://localhost:8080`);
});
