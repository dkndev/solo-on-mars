<template>
  <div class="container relative h-full">
    <SelectGoals/>

    <div class="w-full flex justify-content-center">
      <TimeTrack v-if="gameStarted" :round="round" class="m-auto" @alien-attack="console.log('test')"/>
    </div>

    <div class="mt-2">
      <div class="flex flex-wrap">
        <SabotageCard2
          v-for="card in gameStore.openSabotageCardsA"
          :img="require(`~/assets/img/SabotageCards/${card.type}.png`)"
          :cube1="card.cube1"
          :cube2="card.cube2"
        />
      </div>

      <div class="flex flex-wrap">
        <SabotageCard2
          v-for="card in gameStore.openSabotageCardsB"
          :img="require(`~/assets/img/SabotageCards/${card.type}.png`)"
          :cube1="card.cube1"
          :cube2="card.cube2"
        />
      </div>
    </div>

    <div class="absolute top-50 left-50 " v-if="!gameStarted">
      <Button label="Start Game" icon="pi pi-play" @click="gameStore.showSelectedGoalCardDialog()"/>
    </div>

    <div v-if="gameStarted" class="flex justify-content-between absolute bottom-0 w-full">
      <GameReset/>
      <div>
        <Button label="Next Round" icon="pi pi-play" @click="gameStore.nextRound()"/>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {useGameStore} from '@/stores/gameStore'
import {storeToRefs} from "pinia";

const gameStore = useGameStore()
const {openSabotageCards, round, gameStarted} = storeToRefs(gameStore)

</script>

<style scoped>

</style>
