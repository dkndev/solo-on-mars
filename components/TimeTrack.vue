<template>
  <div class="time-track">
    <div v-for="space in spaces" class="space" :class="{alienAttack: space.alienAttack, hourglass:space.label === currentTime}">

      <img v-if="space.label === currentTime" src="~/assets/img/Hourglass.png" style="object-fit: scale-down; height: 30px"/>

      <img v-else-if="space.alienAttack" src="~/assets/img/AlianHead.png" style="object-fit: scale-down; height: 45px"/>

      <div v-else class="m-auto">
        {{ space.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  currentTime: Number,
})

const spaces = ref([
  {label: 0, alienAttack: false},
  {label: 1, alienAttack: false},
  {label: 2, alienAttack: false},
  {label: 3, alienAttack: true},
  {label: 4, alienAttack: false},
  {label: 5, alienAttack: true},
  {label: 6, alienAttack: false},
  {label: 7, alienAttack: true},
  {label: 8, alienAttack: false},
  {label: 9, alienAttack: true},
  {label: 10, alienAttack: false},
  {label: 11, alienAttack: true},
  {label: 12, alienAttack: false},
  {label: 13, alienAttack: true},
  {label: 14, alienAttack: false},
  {label: 15, alienAttack: false},
])

</script>

<style scoped lang="scss">

.time-track {
  display: flex;
  justify-content: space-between;

  background-color: #151515;
  //border: 5px solid black;
  padding: 10px;
  border-radius: 5px;

  .space {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    background-color: #4a6073;

    font-size: 1.5rem;

    &.hourglass {
      border-radius: 50%;
      background-color: #ef4545;
    }

    &.alienAttack {
      background-color: #ef4545;
    }
  }
}

</style>
