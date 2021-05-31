<template>
    <div>
      <LargeCardDisplay 
      v-for="largeCards in largeCardSections.slice(0, 1)"
      :key="'larege' + largeCards.id"
      :largeCards="largeCards"
      />
      <SmallCardsDisplay 
      v-for="smallCards in smallCardSections"
      :key="'small' + smallCards.id"
      :smallCards="smallCards"
      />
    </div>
</template>

<script>
import {largeCardSections, smallCardSections} from '@/assets/data.js';
export default {
  data(){
        return{
            largeCardSections : largeCardSections,
            smallCardSections : smallCardSections,
            comments: []
        }
    }
}
</script>

<style scoped>

</style>