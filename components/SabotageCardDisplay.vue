<template>
  <div class="card-display-wrapper">
    <div class="card-display">
      <template v-for="card in gameStore.openSabotageCardsA">
        <SabotageCard2
          v-if="card.usedInRound === null"
          :key="card.type"
          :type="card.type"
          :img="require(`~/assets/img/SabotageCards/${card.type}.png`)"
          :cube1="card.cube1"
          :cube2="card.cube2"
          class="inline-block"
        />
      </template>
    </div>

    <div class="card-display">
      <template v-for="card in gameStore.openSabotageCardsB">
        <SabotageCard2
          v-if="card.usedInRound === null"
          :key="card.type"
          :img="require(`~/assets/img/SabotageCards/${card.type}.png`)"
          :cube1="card.cube1"
          :cube2="card.cube2"
          class="inline-block"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from '@/stores/gameStore'
import { storeToRefs } from 'pinia'

const gameStore = useGameStore()
const {openSabotageCards, round, gameStarted} = storeToRefs(gameStore)

</script>


<style scoped lang="scss">

.card-display-wrapper {
  margin-top: 5px;

  .card-display {
    margin: 0 auto;
    width: calc(100% - 10px);
    overflow: auto;
    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

</style>
