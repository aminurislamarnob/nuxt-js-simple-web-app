<template>
  <div>
    <b-button id="show-btn" @click="showModal">Rent</b-button>

    <b-modal ref="my-modal" hide-footer title="Select Rent Date Range">
      <div class="d-block text-center">
        <div class="row calendar-container">
            <div class="col-md-12">
                <vc-date-picker
                :value="null"
                color="green"
                is-dark
                is-range
                />
            </div>
        </div>
      </div>
      <b-button class="mt-3" id="show-btn" variant="outline-danger" block  @click="addItem(productId)">Rent Now</b-button>
    </b-modal>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
    props: ['productId'],
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
      ...mapMutations(['rentItem']),
      addItem(id){
        this.rentItem(id)
        this.hideModal()
      }
    }
  }
</script>


<style scoped>
    button {
        width: 100%;
        border: none;
        padding: 0.5rem;
        color: white;
        font-weight: 700;
        padding: 1rem 4rem;
        border-radius: 100rem;
        background-color: rgb(231, 81, 43);
        color: white;
        font-weight: 700;
        transition: 0.5s;
    }
    .calendar-container {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    p {
      color: grey
    }
    .text-container {
      padding: 0.5rem
    }
</style>