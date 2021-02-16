const axios = require("axios");

exports.handler = async function(event, context) {

  const https = require('https');
  const placesKey = 'AIzaSyAjZwTHc0Fo61N8Vnaw6bTR9yzfHY1IKHc'
  const businessRefId = 'ChIJL3h4cDZSwYkRfOFZXZEm0SM'

  try {
    const reviewsResp = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?reference=${businessRefId}&key=${placesKey}`)
    console.log(reviewsResp.data.result.reviews)

    return {
      statusCode: 200,
      body: JSON.stringify({
        GoogleResponse: reviewsResp.data.result.reviews
      })
    };
  } catch(error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: error
      })
    };
  }

}