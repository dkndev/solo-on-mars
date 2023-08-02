<template>
  <Button label="Reset Game" icon="pi pi-refresh" @click="confirmResetGame"/>
  <ConfirmDialog/>
</template>

<script setup>
import { useGameStore } from '@/stores/gameStore'
import { storeToRefs } from 'pinia'
import { useConfirm } from 'primevue/useconfirm'

const gameStore = useGameStore()
const {gameStarted} = storeToRefs(gameStore)

const confirm = useConfirm()

const confirmResetGame = () => {
  confirm.require({
    message: 'Are you sure you want to proceed?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      gameStore.resetGame()
    },
    reject: () => {
    }
  })
}

</script>

<style scoped lang="scss">

</style>
