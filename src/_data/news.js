const axios = require("axios");
require('dotenv').config();

module.exports = async function() {
  try {
    const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}&pageSize=5&pageSize=5`);
    //${process.env.API_KEY}
   
   
    return response.data;
  } catch (error) {
    console.error(error);
  }

};
