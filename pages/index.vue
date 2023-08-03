<template>
  <div class="container relative h-full">
    <SelectGoals/>

    <div class="w-full flex justify-content-center">
      <TimeTrack v-if="gameStarted" :round="round" class="m-auto"/>
    </div>

    <SabotageDetail/>
    <PreviousSabotage/>
    <CurrentSabotage/>

    <SabotageCardDisplay/>

    <div class="absolute top-50 left-50 " v-if="!gameStarted">
      <Button label="Start Game" icon="pi pi-play" class="bg-teal-300" size="large" @click="gameStore.showSelectedGoalCardDialog()"/>
    </div>

    <div v-if="gameStarted" class="flex justify-content-between absolute bottom-0 w-full">
      <GameReset/>
      <Button label="Previous Sabotage" icon="pi pi-arrow-up" class="bg-teal-300" size="large" @click="previousSabotageDialogVisible = true"/>
      <Button label="Current Sabotage" icon="pi pi-arrow-up" class="bg-teal-300" size="large" :disabled="!gameStore.isAlienAttack" @click="currentSabotageDialogVisible = true"/>
      <Button label="Next Round" icon="pi pi-play" class="bg-teal-300" size="large" @click="gameStore.nextRound()"/>
    </div>
  </div>

</template>

<script setup lang="ts">
import {useGameStore} from '@/stores/gameStore'
import {storeToRefs} from "pinia";

const gameStore = useGameStore()
const {
  currentSabotageDialogVisible,
  previousSabotageDialogVisible,
  round,
  gameStarted
} = storeToRefs(gameStore)

</script>

<style scoped lang="scss">


</style>
