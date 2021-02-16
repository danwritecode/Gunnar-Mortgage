<template>
  <!-- <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl py-24 lg:py-40">
    <div class="mb-16">
      <h3 id="learn-more" class="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-1">
        Reviews
      </h3>
      <p class="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6 text-gray-600">
        See what everyone is saying about Gunnar.
      </p>
    </div>
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <li :key="review.time" v-for="review in reviews" class="col-span-1 flex flex-col text-center bg-white rounded-lg border border-gray-200 shadow">
        <div class="flex-1 flex flex-col p-8">
          <img class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full" :src="review.profile_photo_url" alt="">
          <h3 class="mt-3 text-gray-900 text-base leading-5 font-medium">{{ capitalize(review.author_name) }}</h3>
          <div class="mt-6">
            <div class="inline-flex items-center">
              <div class="flex-shrink-0 flex">
                <svg :key="rating" v-for="rating in review.rating" class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          <p id="reviewText" class="text-left mt-3 text-base text-gray-700">{{ review.text }}</p>
        </div>
      </li>
    </ul>
  </div> -->

  <div class="pb-24 lg:pb-64 overflow-hidden">
    <div class="mb-16 mx-auto max-w-xl px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
      <h3 id="learn-more" class="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-1">
        Reviews
      </h3>
      <p class="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6 text-gray-600">
        See what everyone is saying about Gunnar.
      </p>
    </div>
    <div class="flex items-center overflow-hidden" style="width:1000vw;">
      <div :key="review.time" v-for="review in reviews" class="mx-4 relative rounded-lg border border-gray-300" v-bind:style="styleObject">
        <div class="p-8">
          <blockquote>
            <div>
              <svg class="h-10 w-10 text-gb-600 opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p id="reviewText" class="mt-6 font-medium text-gray-700">
                {{ review.text }}
              </p>
            </div>
          </blockquote>
          <div class="mt-4">
            <div class="inline-flex items-center">
              <div class="flex-shrink-0 flex">
                <svg :key="rating" v-for="rating in review.rating" class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-0 w-full bg-gradient-to-r from-gb-400 to-gb-600 py-4 px-6 rounded-b-lg flex items-center">
          <div>
            <img class="border-2 border-white w-10 h-10 flex-shrink-0 mx-auto bg-black rounded-full" :src="review.profile_photo_url" alt="">
          </div>
          <div class="pl-3">
            <p class="font-black text-white leading-tight">{{ capitalize(review.author_name) }}</p>
            <p class="text-gray-200 text-sm leading-tight">{{ review.relative_time_description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [],
      curTranslateXValue: 10
    }
  },
  computed: {
    styleObject() {
      setTimeout(() => this.curTranslateXValue += -0.1, 1)
      const randomDeg = Math.random()
      const randomPosNeg = randomDeg > 0.5 ? randomDeg * -1:randomDeg * 1;

      return {
        transform: 'translateX(' + this.curTranslateXValue + 'px) rotate(' + randomPosNeg + 'deg)',
        width: '30rem'
      }
    }
  },
  mounted() {
    this.getReviews();
    setTimeout(() => this.curTranslateXValue += -0.1, 1)
  },
  methods: {
    async getReviews() {
      const reviewsResp = await this.$axios.$get('http://localhost:8888/.netlify/functions/fetchReviews')
      this.reviews = reviewsResp.GoogleResponse
    },
    capitalize(str) {
      return str.replace(/\w\S*/g, function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  }
}
</script>

<style>
  #reviewText {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
</style>