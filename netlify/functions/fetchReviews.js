const axios = require("axios");

exports.handler = async function(event, context) {

  const https = require('https');
  const placesKey = process.env.PLACES_API_KEY
  const businessRefId = 'ChIJL3h4cDZSwYkRfOFZXZEm0SM'
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  try {
    const reviewsResp = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${businessRefId}&key=${placesKey}`)
    console.log(reviewsResp)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        GoogleResponse: reviewsResp.data.result.reviews
      })
    };
  } catch(error) {
    console.log(error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        status: error
      })
    };
  }

}