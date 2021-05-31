<template>
    <div>
        <h3>Customer Reviews</h3>
        <p v-if="$fetchState.pending">Loading...</p>
        <div v-else>
            <ReviewCard
                v-for="review in customerReviews.results"
                :key="review.login.uuid"
                :review="review"
            />
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        customerReviews: []
      }
    },
    async fetch() {
      this.customerReviews = await fetch(
        'https://randomuser.me/api/?results=5'
      ).then(res => res.json())
    }
  }
</script>

<style scoped>

</style>