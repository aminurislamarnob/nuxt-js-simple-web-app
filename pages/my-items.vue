<template>
    <div class="container">
        <NuxtLink to="/" class="btn btn-primary">Back To Home</NuxtLink>
        <div>
            <MyItem 
            v-for="myitem in myRentals"
            :key="myitem.id"
            :item="myitem"
            />
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        layout: 'no-nav-layout',
        computed: {
            ...mapState(['myRentals'])
        }
    }
</script>

<style scoped>
    .container {
        padding: 5rem 0
    }
</style>