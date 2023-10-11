const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Define your API key and news API URL
const apiKey = process.env.REACT_APP_NEWS_API;

const newsApiUrl = "https://newsapi.org/v2/top-headlines";

// Create a route to fetch news data
app.get("/api/news", async (req, res) => {
  const { country, category, page, pageSize } = req.query;

  try {
    const response = await axios.get(newsApiUrl, {
      params: {
        country,
        category,
        apiKey,
        page,
        pageSize,
      },
    });

    // Extract the relevant data from the response
    const data = response.data;

    res.json(data);
  } catch (error) {
    console.error("Error fetching news data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching news data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
