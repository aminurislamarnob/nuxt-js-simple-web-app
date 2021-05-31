<template>
<div>
    <div class="container">
      <Hero />
      <LargeCardDisplay 
      v-for="largeCards in largeCardSections"
      :key="'larege' + largeCards.id"
      :largeCards="largeCards"
      />
      <SmallCardsDisplay 
      v-for="smallCards in smallCardSections"
      :key="'small' + smallCards.id"
      :smallCards="smallCards"
      />
    </div>
</div>
</template>

<script>
import {largeCardSections, smallCardSections} from '@/assets/data.js';

export default {
  data(){
    return{
      largeCardSections : largeCardSections,
      smallCardSections : smallCardSections,
    }
  },
  head: {
    title: 'Fire Extinguisher Nuxt Web App',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'simple nuxt web app'
      }
    ]
  }
}
</script>

<style>

</style>
