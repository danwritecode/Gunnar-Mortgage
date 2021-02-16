<template>
  <div>
    This is a review :D
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.getReviews();
  },
  methods: {
    async getReviews() {
      // const placesKey = 'AIzaSyAjZwTHc0Fo61N8Vnaw6bTR9yzfHY1IKHc'
      // const businessRefId = 'ChIJL3h4cDZSwYkRfOFZXZEm0SM'

      // const reviews = await this.$axios.$get(`https://maps.googleapis.com/maps/api/place/details/json?reference=${businessRefId}&key=${placesKey}`)
      // console.log(reviews)
      var request = {
        placeId: 'ChIJL3h4cDZSwYkRfOFZXZEm0SM',
        fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
      };
      const service = new google.maps.places.PlacesService(document.createElement('div'));

      console.log(service.getDetails(request, this.placesCallback()));
    },
    placesCallback(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMarker(place);
      }
    }
  }
}
</script>

<style>

</style>