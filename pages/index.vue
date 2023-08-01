<template>
  <div class="container">
    <div>
      <img src="~/assets/img/OnMarsLogo2.png" style="width: 1000px">
    </div>

<!--    <Panel header="Sabotage Cards" toggleable collapsed>-->
<!--      <div class="flex flex-wrap">-->
<!--        <SabotageCard type="AdvancedBuildingBombed"/>-->
<!--        <SabotageCard type="HackedTech"/>-->
<!--        <SabotageCard type="ScienceResourcesMissing"/>-->
<!--        <SabotageCard type="ChangeOfPlans"/>-->
<!--        <SabotageCard type="AlienAbduction"/>-->
<!--        <SabotageCard type="StealthyHarvest"/>-->
<!--        <SabotageCard type="ShuttleDelayed"/>-->
<!--        <SabotageCard type="ReducedEfficiency"/>-->
<!--        <SabotageCard type="CrystalTheft"/>-->
<!--        <SabotageCard type="LssSabotage"/>-->
<!--        <SabotageCard type="HangerInfiltration"/>-->
<!--        <SabotageCard type="MineExplosion"/>-->
<!--        <SabotageCard type="DamageToAtmosphericSeal"/>-->
<!--        <SabotageCard type="BotDestroyed"/>-->
<!--        <SabotageCard type="RoverDisabled"/>-->
<!--        <SabotageCard type="Misinformation"/>-->
<!--      </div>-->
<!--    </Panel>-->
<!--    <Panel header="Upgrade Goal Cards" toggleable collapsed>-->
<!--      <div class="flex flex-wrap">-->
<!--        &lt;!&ndash;        <img src="~/assets/img/img_1.png" style="width: 500px">&ndash;&gt;-->

<!--        <UpgradeGoalCard type="MineralMine"/>-->
<!--        <UpgradeGoalCard type="Biolab"/>-->
<!--        <UpgradeGoalCard type="Radar"/>-->
<!--        <UpgradeGoalCard type="BuilderDrone"/>-->
<!--        <UpgradeGoalCard type="ResearchLab"/>-->
<!--        <UpgradeGoalCard type="Aqueduct"/>-->
<!--        <UpgradeGoalCard type="EcoResort"/>-->
<!--        <UpgradeGoalCard type="TradeMarket"/>-->
<!--        <UpgradeGoalCard type="RecyclingBots"/>-->
<!--        <UpgradeGoalCard type="AerialElevator"/>-->
<!--        <UpgradeGoalCard type="Library"/>-->
<!--        <UpgradeGoalCard type="CommandCenter"/>-->
<!--      </div>-->
<!--    </Panel>-->
<!--    <Panel header="Tech Goal Cards" toggleable collapsed>-->
<!--      <div class="flex flex-wrap">-->
<!--        &lt;!&ndash;        <img src="~/assets/img/img_2.png" style="width: 500px">&ndash;&gt;-->

<!--        <TechGoalCard type="GeneratorTech"/>-->
<!--        <TechGoalCard type="GreenhouseTech"/>-->
<!--        <TechGoalCard type="MineTech"/>-->
<!--        <TechGoalCard type="WaterExtractorTech"/>-->
<!--        <TechGoalCard type="OxygenCondenserTech"/>-->
<!--        <TechGoalCard type="RoverTech"/>-->
<!--        <TechGoalCard type="ShipTech"/>-->
<!--        <TechGoalCard type="UpgradeTech"/>-->
<!--      </div>-->
<!--    </Panel>-->
<!--    <Panel header="Tech Goal Cards" toggleable collapsed>-->
<!--      <div class="flex flex-wrap">-->
<!--        <img src="~/assets/img/img_3.png" style="width: 500px">-->

<!--        <EarthContractGoalCard type="GeneratorTech"/>-->
<!--        <EarthContractGoalCard type="GreenhouseTech"/>-->
<!--        <EarthContractGoalCard type="MineTech"/>-->
<!--        <EarthContractGoalCard type="WaterExtractorTech"/>-->
<!--        <EarthContractGoalCard type="OxygenCondenserTech"/>-->
<!--        <EarthContractGoalCard type="RoverTech"/>-->
<!--        <EarthContractGoalCard type="ShipTech"/>-->
<!--        <EarthContractGoalCard type="UpgradeTech"/>-->
<!--        <EarthContractGoalCard type="UpgradeTech"/>-->
<!--        <EarthContractGoalCard type="UpgradeTech"/>-->
<!--        <EarthContractGoalCard type="UpgradeTech"/>-->
<!--        <EarthContractGoalCard type="UpgradeTech"/>-->
<!--      </div>-->
<!--    </Panel>-->

    <TimeTrack :currentTime="count"/>
    <Button label="round" icon="pi pi-play" @click="store.increment()"/>

    <br>
    <br>

    <SelectGoals/>
    <Button label="Start Game" icon="pi pi-play" @click="gameStore.showSelectedGoalCardDialog()"/>
  </div>

</template>

<script setup lang="ts">
import {useCounterStore} from '@/stores/counterStore'
import { useGameStore } from '@/stores/gameStore'
import {storeToRefs} from "pinia";

const store = useCounterStore()
const {name, count, getDoubleCount} = storeToRefs(store)

const gameStore = useGameStore()
const {selectedGoalCardDialogVisible} = storeToRefs(gameStore)

</script>

<style scoped>

</style>
