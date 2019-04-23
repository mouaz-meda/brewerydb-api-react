const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const axios = require("axios");

require("dotenv").config({ path: ".env" });

const apiUrl = process.env.REACT_APP_BEER_API_URL;

const reactAppUrl = process.env.REACT_APP_URL;

// Serve the static files from the React app

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.use(
  cors({
    origin: apiUrl,
    reactAppUrl
  })
);

let allowedOrigins = [reactAppUrl, apiUrl];
app.use(
  cors({
    origin: function(origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        let msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);

// An api endpoint that returns beers
app.get("/api/get-beers", (req, res) => {
  axios
    .get(apiUrl + "/beers", {
      params: {
        key: process.env.REACT_APP_BEER_API_KEY,
        p: req.query.p
      }
    })
    .then(response => {
      if (response.status === 200) {
        res.send(response.data);
      }
    })

    .catch(error => {
      console.error(error);
    });
});

app.get("/api/get-single", (req, res) => {
  axios
    .get(apiUrl + `beer/${req.query.id}`, {
      params: {
        key: process.env.REACT_APP_BEER_API_KEY
      }
    })
    .then(response => {
      if (response) {
        if (response.status === 200) {
          res.send(response.data);
        }
      }
    })

    .catch(error => {
      if (error.response.status === 404) {
        res.status(404).json({ code: 404 });
      }
    });
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
