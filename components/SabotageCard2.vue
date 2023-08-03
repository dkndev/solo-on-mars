<template>
  <div class="card" :style="{width: size, maxWidth: '695px'}" @dblclick="gameStore.showSabotageDetailDialog(type)">
    <img :src="img" style="object-fit: scale-down; max-width: 100%"/>

    <div v-if="cube1" class="cube" :style="`bottom: 21px; left: 29px;`"></div>
    <div v-if="cube2" class="cube" :style="`bottom: 21px; left: 80px;`"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
  img: String,
  cube1: Boolean,
  cube2: Boolean,
  size: {
    type: String,
    default: '250px'
  }
})

import { useGameStore } from '@/stores/gameStore'

const gameStore = useGameStore()

</script>

<style scoped lang="scss">

div.card {
  position: relative;
  width: 250px;
  margin: 0 5px;

  .cube {
    position: absolute;
    z-index: 1;
    background-color: #61beb5;
    padding: 10px;
    width: 41px;
    height: 41px;
    box-shadow: 5px 3px 4px rgba(0, 0, 0, 0.4), 1px 3px 4px rgba(0, 0, 0, 0.4);
  }
}


</style>
