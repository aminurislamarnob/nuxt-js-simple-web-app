<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="error-text">
                    <h1>Page Not Found</h1>
                    <img :src="require('@/assets/images/fe25.jpg')" alt="">
                </div>
            </div>
        </div>
        <NuxtLink to="/" class="btn btn-success mb-5">Back To Home</NuxtLink>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .error-text {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50rem
    }
    h1 {
        font-size: 7.5rem;
    }
    img {
        width: 15rem;
        margin: 0 auto
    }
</style>