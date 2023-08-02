<template>
  <Dialog
    v-model:visible="selectedGoalCardDialogVisible"
    header="Select Goals"
    modal
    :closable="false"
    :draggable="false"
    position="top"
    :style="{ width: '900px' }"
  >
    <p>
      <div class="flex justify-content-between">
        <div>
          Upgrade Goal:
          <template v-if="selectedUpgradeGoalCard">{{ selectedUpgradeGoalCard.title }}</template>
        </div>
        <div>
          <Button label="Select" class="mr-1" @click="showUpgradeGoalCardPanel = true"/>
          <Button label="Choose randomly" @click="gameStore.selectRandomUpgradeGoalCard"/>
        </div>
      </div>

      <Panel v-if="showUpgradeGoalCardPanel">
        <div class="flex flex-wrap justify-content-center flex-gap-1">
          <div v-for="card in upgradeGoalCardDeck"
               class="m-1 p-1 card-selector border-round-lg border-2"
               :class="{'border-green-400 b': selectedUpgradeGoalCard.type === card.type}"
               @click="gameStore.selectUpgradeGoalCard(card); showUpgradeGoalCardPanel = false;"
          >
            <Card :type="card.type" :img="require(`~/assets/img/UpgradeGoalCards/${card.type}.png`)"/>
          </div>
        </div>
      </Panel>
    </p>

    <p>
      <div class="flex justify-content-between">
        <div>
          Earth Contract Goal:
          <template v-if="selectedEarthContactGoalCard">{{ selectedEarthContactGoalCard.title }}</template>
        </div>
        <div>
          <Button label="Select" class="mr-1" @click="showEarthContactGoalCardPanel = true"/>
          <Button label="Choose randomly" @click="gameStore.selectRandomEarthContactGoalCard"/>
        </div>
      </div>

      <Panel v-if="showEarthContactGoalCardPanel">
        <div class="flex flex-wrap justify-content-center flex-gap-1">
          <div v-for="card in earthContactGoalCardDeck"
               class="m-1 p-1 card-selector border-round-lg border-2"
               :class="{'border-green-400 b': selectedEarthContactGoalCard.type === card.type}"
               @click="gameStore.selectEarthContactGoalCard(card); showEarthContactGoalCardPanel = false;"
          >
            <Card :type="card.type" :img="require(`~/assets/img/EarthContractGoalCards/${card.type}.png`)"/>
          </div>
        </div>
      </Panel>
    </p>


    <p>
      <div class="flex justify-content-between">
        <div>
          Tech Goal cards:
          <template v-if="selectedTechGoalCard">{{ selectedTechGoalCard.title }}</template>
        </div>
        <div class="">
          <Button label="Select" class="mr-1" @click="showTechGoalCardPanel = true"/>
          <Button label="Choose randomly" @click="gameStore.selectRandomTechGoalCard"/>
        </div>
      </div>

      <Panel v-if="showTechGoalCardPanel">
        <div class="flex flex-wrap justify-content-center flex-gap-1">
          <div v-for="card in techGoalCardDeck"
               class="m-1 p-1 card-selector border-round-lg border-2"
               :class="{'border-green-400 b': selectedTechGoalCard.type === card.type}"
               @click="gameStore.selectTechGoalCard(card); showTechGoalCardPanel = false;"
          >
            <Card :type="card.type" :img="require(`~/assets/img/TechGoalCards/${card.type}.png`)"/>
          </div>
        </div>
      </Panel>
    </p>

    <p>
      <div class="flex justify-content-between">
        <div>
          Scientist Goal cards:
          <template v-if="selectedScientistGoalCard">{{ selectedScientistGoalCard.title }}</template>
        </div>
        <div class="">
          <Button label="Select" class="mr-1" @click="showScientistGoalCardPanel = true"/>
          <Button label="Choose randomly" @click="gameStore.selectRandomScientistGoalCard"/>
        </div>
      </div>

      <Panel v-if="showScientistGoalCardPanel">
        <div class="flex flex-wrap justify-content-center flex-gap-1">
          <div v-for="card in scientistGoalCardDeck"
               class="m-1 p-1 card-selector border-round-lg border-2"
               :class="{'border-green-400 b': selectedScientistGoalCard.type === card.type}"
               @click="gameStore.selectScientistGoalCard(card); showScientistGoalCardPanel = false;"
          >
            <Card :type="card.type" :img="require(`~/assets/img/ScientistGoalCards/${card.type}.png`)"/>
          </div>
        </div>
      </Panel>
    </p>

    <p>
      <div class="flex justify-content-between">
        <div>
          Discovery Goal Cards:
          <template v-if="selectedDiscoveryGoalCard">{{ selectedDiscoveryGoalCard.title }}</template>
        </div>
        <div class="">
          <Button label="Select" class="mr-1" @click="showDiscoveryGoalCardPanel = true"/>
          <Button label="Choose randomly" @click="gameStore.selectRandomDiscoveryGoalCard"/>
        </div>
      </div>

      <Panel v-if="showDiscoveryGoalCardPanel">
        <div class="flex flex-wrap justify-content-center flex-gap-1">
          <div v-for="card in discoveryGoalCardDeck"
               class="m-1 p-1 card-selector border-round-lg border-2"
               :class="{'border-green-400 b': selectedDiscoveryGoalCard.type === card.type}"
               @click="gameStore.selectDiscoveryGoalCard(card); showDiscoveryGoalCardPanel = false;"
          >
            <Card :type="card.type" :img="require(`~/assets/img/DiscoveryGoalCards/${card.type}.png`)"/>
          </div>
        </div>
      </Panel>
    </p>

    <template #footer>
      <Button label="Cancel" icon="pi pi-times" @click="cancel" text/>
      <Button label="Start" icon="pi pi-check" :disabled="!gameStore.canStartGame" @click="gameStore.startGame"/>
    </template>

  </Dialog>
</template>

<script setup>
import { useGameStore } from '@/stores/gameStore'
import { storeToRefs } from 'pinia'

const gameStore = useGameStore()
const {
  selectedGoalCardDialogVisible,
  upgradeGoalCardDeck,
  earthContactGoalCardDeck,
  techGoalCardDeck,
  scientistGoalCardDeck,
  discoveryGoalCardDeck,
  selectedUpgradeGoalCard,
  selectedEarthContactGoalCard,
  selectedTechGoalCard,
  selectedScientistGoalCard,
  selectedDiscoveryGoalCard
} = storeToRefs(gameStore)

const showUpgradeGoalCardPanel = ref(false)
const showEarthContactGoalCardPanel = ref(false)
const showTechGoalCardPanel = ref(false)
const showScientistGoalCardPanel = ref(false)
const showDiscoveryGoalCardPanel = ref(false)

function cancel () {
  gameStore.hideSelectedGoalCardDialog()
  gameStore.resetSelectedGoalCards()
}

</script>

<style scoped lang="scss">
.card-selector {
  border: 1px solid rgba(0, 0, 0, 0.0);


  &:hover {
    border: 1px solid black;
    cursor: pointer;
  }
}
</style>
