<template>
  <div class="time-track">
    <img src="~/assets/img/TimeTrack.png" style="width: 100%">

    <div class="hourglass" :style="`top: ${topPosition}; left: ${leftPosition};`">
      <img src="~/assets/img/Hourglass.png" style="object-fit: scale-down; max-width: 100%"/>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  round: Number,
})

const {round} = toRefs(props)

const topPosition = computed(() => {
  if (round.value < 8) {
    return '14%'
  }
  return '59%'

})

const leftPosition = computed(() => {
  const pos = [
    '4%', '16%', '28.3%', '40.3%', '52.4%', '64.3%', '76.3%', '88.0%',
    '4%', '16%', '28.3%', '40.3%', '52.4%', '64.3%', '76.3%', '88.0%'
  ]

  return pos[round.value]
})

</script>

<style scoped lang="scss">

.time-track {
  display: inline-block;
  position: relative;
  max-width: 820px;
  min-width: 650px;

  .hourglass {
    position: absolute;
    z-index: 1;

    //top: 14%;
    //left: 4%;
    background-color: red;
    padding: 10px;
    max-width: 8%;
  }

}

</style>
