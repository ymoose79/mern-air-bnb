const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use(function (req, resp, next) {
    if (validateAuth(req)) {
        next();
    } else {
        resp.status(401).send("UNAUTHORIZED");
    }
});


function validateAuth(req) {
    const { authorization } = req.headers;
    return true; // !!authorization;
}


app.use(require("./routes/listingsandreview"));
app.use(require("./routes/auth"))
// app.use('./api/user', authRoute)

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);

    });
    console.log(`Server is running on port: ${port}`);
});

