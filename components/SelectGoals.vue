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
               class="m-2 card-selector border-round-xl"
               :class="{'border-green-400 b': selectedUpgradeGoalCard.type === card.type}"
               @click="gameStore.selectUpgradeGoalCard(card); showUpgradeGoalCardPanel = false;"
          >
            <UpgradeGoalCard :type="card.type"/>
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
               class="m-2 card-selector border-round-xl"
               :class="{'border-green-400 b': selectedEarthContactGoalCard.type === card.type}"
               @click="gameStore.selectEarthContactGoalCard(card); showEarthContactGoalCardPanel = false;"
          >
            <EarthContractGoalCard :type="card.type"/>
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
               class="m-2 card-selector border-round-xl"
               :class="{'border-green-400 b': selectedTechGoalCard.type === card.type}"
               @click="gameStore.selectTechGoalCard(card); showTechGoalCardPanel = false;"
          >
            <TechGoalCard :type="card.type"/>
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
               class="m-2 card-selector border-round-xl"
               :class="{'border-green-400 b': selectedScientistGoalCard.type === card.type}"
               @click="gameStore.selectScientistGoalCard(card); showScientistGoalCardPanel = false;"
          >
            <ScientistGoalCard :type="card.type"/>
          </div>
        </div>
      </Panel>
    </p>

    <template #footer>
      <Button label="No" icon="pi pi-times" @click="visible = false" text/>
      <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus/>
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
