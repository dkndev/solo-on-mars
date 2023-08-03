<template>
  <Dialog
    v-model:visible="previousSabotageDialogVisible"
    header="Sabotage"
    modal
    :draggable="false"
    position="center"
    :style="{ maxWidth: '830px'}"
  >

    <div class="card-display-wrapper opacity-100">
      <div class="card-display">
        <template v-for="card in openSabotageCards">
          <SabotageCard2
            v-if="card.usedInRound !== null & card.usedInRound < round"
            :key="card.type"
            :type="card.type"
            :img="require(`~/assets/img/SabotageCards/${card.type}.png`)"
            :cube1="card.cube1"
            :cube2="card.cube2"
            class="inline-block"
          />
        </template>
      </div>
    </div>


  </Dialog>
</template>

<script setup>
import { useGameStore } from '@/stores/gameStore'
import { storeToRefs } from 'pinia'

const gameStore = useGameStore()
const {
  round,
  previousSabotageDialogVisible,
  openSabotageCards
} = storeToRefs(gameStore)

</script>

<style scoped lang="scss">

</style>
