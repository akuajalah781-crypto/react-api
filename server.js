const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/api/channel/react-to-post", async (req, res) => {
  const { post_link, reacts } = req.body;

  try {

    // disini nanti logic react WA
    console.log("React ke:", post_link, reacts);

    res.json({
      success: true,
      message: "React berhasil"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "React gagal"
    });
  }
});

app.listen(3000, () => {
  console.log("API jalan di port 3000");
});