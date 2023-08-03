<template>
  <Dialog
    v-model:visible="sabotageDetailDialogVisible"
    header="Sabotage"
    modal
    :draggable="false"
    position="center"
  >

    <div class="card-display">
      <SabotageCard2
        :type="sabotageDetailCard.type"
        :img="require(`~/assets/img/SabotageCards/${sabotageDetailCard.type}.png`)"
        size="60vw"
      />
    </div>

  </Dialog>
</template>

<script setup>
import { useGameStore } from '@/stores/gameStore'
import { storeToRefs } from 'pinia'

const gameStore = useGameStore()
const {
  sabotageDetailDialogVisible,
  sabotageDetailCard
} = storeToRefs(gameStore)

</script>

<style scoped lang="scss">


</style>
