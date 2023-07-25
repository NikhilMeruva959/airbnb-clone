const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

app.get("/api/location/search", async (req, res) => {
  const { language, key, searchQuery } = req.query;
  const targetUrl = `https://api.content.tripadvisor.com/api/v1/location/search?key=${key}&searchQuery=${searchQuery}&language=${language}`;

  try {
    const response = await axios.get(targetUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/api/location/locationId", async (req, res) => {
  const { key, language, currency, locationId } = req.query;
  const targetUrl = `https://api.content.tripadvisor.com/api/v1/location/${locationId}/details?language=${language}&currency=${currency}&key=${key}`;
  try {
    const response = await axios.get(targetUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/api/location/photos", async (req, res) => {
  const { key, language, locationId } = req.query;
  const targetUrl = `https://api.content.tripadvisor.com/api/v1/location/${locationId}/photos?language=${language}&key=${key}`;
  try {
    const response = await axios.get(targetUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

const port = 80; // Choose a port number that is not in use

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
