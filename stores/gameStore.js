import { acceptHMRUpdate } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useGameStore = defineStore({
  id: 'GameStore',
  state: () => {
    return {
      round: useStorage('round', 0),
      sabotageCardDeck: [
        {type: 'AdvancedBuildingBombed', title: 'ADVANCED BUILDING BOMBED', letter: 'A', cube1: false, cube2: false, usedInRound: null},
        {type: 'HackedTech', title: 'HACKED TECH', letter: 'A', cube1: false, cube2: false, usedInRound: null},
        {type: 'ScienceResourcesMissing', title: 'SCIENCE RESOURCES MISSING', letter: 'A', cube1: false, cube2: false, usedInRound: null},
        {type: 'ChangeOfPlans', title: 'CHANGE OF PLANS', letter: 'A', cube1: false, cube2: false, usedInRound: null},
        {type: 'AlienAbduction', title: 'ALIEN ABDUCTION', letter: 'A', cube1: false, cube2: false, usedInRound: null},
        {type: 'StealthyHarvest', title: 'STEALTHY HARVEST', letter: 'A', cube1: false, cube2: false, usedInRound: null},
        {type: 'ShuttleDelayed', title: 'SHUTTLE DELAYED', letter: 'A', cube1: false, cube2: false, usedInRound: null},
        {type: 'ReducedEfficiency', title: 'REDUCED EFFICIENCY', letter: 'A', cube1: false, cube2: false, usedInRound: null},
        {type: 'CrystalTheft', title: 'CRYSTAL THEFT', letter: 'B', cube1: false, cube2: false, usedInRound: null},
        {type: 'LssSabotage', title: 'LSS SABOTAGE', letter: 'B', cube1: false, cube2: false, usedInRound: null},
        {type: 'HangerInfiltration', title: 'HANGER INFILTRATION', letter: 'B', cube1: false, cube2: false, usedInRound: null},
        {type: 'MineExplosion', title: 'MINE EXPLOSION', letter: 'B', cube1: false, cube2: false, usedInRound: null},
        {type: 'DamageToAtmosphericSeal', title: 'DAMAGE TO ATMOSPHERIC SEAL', letter: 'B', cube1: false, cube2: false, usedInRound: null},
        {type: 'BotDestroyed', title: 'BOT DESTROYED', letter: 'B', cube1: false, cube2: false, usedInRound: null},
        {type: 'RoverDisabled', title: 'ROVER DISABLED', letter: 'B', cube1: false, cube2: false, usedInRound: null},
        {type: 'Misinformation', title: 'MISINFORMATION', letter: 'B', cube1: false, cube2: false, usedInRound: null},
      ],
      upgradeGoalCardDeck: [
        {type: 'MineralMine', title: 'Mineral Mine'},
        {type: 'Biolab', title: 'Biolab'},
        {type: 'Radar', title: 'Radar'},
        {type: 'BuilderDrone', title: 'Builder Drone'},
        {type: 'ResearchLab', title: 'Research Lab'},
        {type: 'Aqueduct', title: 'Aqueduct'},
        {type: 'EcoResort', title: 'Eco Resort'},
        {type: 'TradeMarket', title: 'Trade Market'},
        {type: 'RecyclingBots', title: 'Recycling Bots'},
        {type: 'AerialElevator', title: 'Aerial Elevator'},
        {type: 'Library', title: 'Library'},
        {type: 'CommandCenter', title: 'Command Center'},
      ],
      earthContactGoalCardDeck: [
        {type: 'Complex4Mine', title: 'Complex 4 Mine',},
        {type: 'Complex4Shelter', title: 'Complex 4 Shelter',},
        {type: 'Complex4Generator', title: 'Complex 4 Generator',},
        {type: 'Complex4Greenhouse', title: 'Complex 4 Greenhouse',},
        {type: 'Complex4OxygenCondenser', title: 'Complex 4 Oxygen Condenser',},
        {type: 'Complex4WaterExtractor', title: 'Complex 4 Water Extractor',},
        {type: '3Plants2Minerals', title: '3 Plants & 2 Minerals',},
        {type: '3Water2Minerals', title: '3 Water & 2 Minerals',},
        {type: '4Minerals', title: '4 Minerals',},
        {type: '3Oxygen2Minerals', title: '3 Oxygen & 2 Minerals',},
        {type: '3Crystals2Minerals', title: '3 Crystals & 2 Minerals',},
        {type: '3Batteries2Minerals', title: '3 Batteries & 2 Minerals',},
      ],
      techGoalCardDeck: [
        {type: 'GeneratorTech', title: 'Generator'},
        {type: 'GreenhouseTech', title: 'Greenhouse'},
        {type: 'MineTech', title: 'Mine'},
        {type: 'OxygenCondenserTech', title: 'Oxygen Condenser'},
        {type: 'WaterExtractorTech', title: 'Water Extractor'},
        {type: 'RoverTech', title: 'Rover'},
        {type: 'ShipTech', title: 'Ship'},
        {type: 'UpgradeTech', title: 'Upgrade'},
      ],
      scientistGoalCardDeck: [
        {type: 'Biochemist', title: 'The Biochemist'},
        {type: 'Geochemist', title: 'The Geochemist'},
        {type: 'Geologist', title: 'The Geologist'},
        {type: 'Hydrologist', title: 'The Hydrologist'},
        {type: 'R&DEngineer', title: 'The R&D Engineer'},
        {type: 'SystemsEngineer', title: 'The Systems Engineer'},
      ],
      discoveryGoalCardDeck: [
        {type: '3DiscoveryTiles2ResearchTiles', title: '3 Discovery Tiles & 2 Research Tiles',},
        {type: '4ResearchTiles', title: '4 Research Tiles',},
        {type: '2DiscoveryTiles3ResearchTiles', title: '2 Discovery Tiles & 3 Research Tiles',},
        {type: '4DiscoveryTiles1ResearchTiles', title: '4 Discovery Tiles & 1 Research Tiles',},
      ],

      openSabotageCards: useStorage('openSabotageCards', []),
      selectedUpgradeGoalCard: useStorage('selectedUpgradeGoalCard', {type: null, title: ''}),
      selectedEarthContactGoalCard: useStorage('selectedEarthContactGoalCard', {type: null, title: ''}),
      selectedTechGoalCard: useStorage('selectedTechGoalCard', {type: null, title: ''}),
      selectedScientistGoalCard: useStorage('selectedScientistGoalCard', {type: null, title: ''}),
      selectedDiscoveryGoalCard: useStorage('selectedDiscoveryGoalCard', {type: null, title: ''}),

      selectedGoalCardDialogVisible: false,
      currentSabotageDialogVisible: false,
      previousSabotageDialogVisible: false,
      sabotageDetailDialogVisible: false,
      sabotageDetailCard: null,
      gameStarted: useStorage('gameStarted', false),
      gameEnded: useStorage('gameEnded', false),
    }
  },

  actions: {
    nextRound () {
      if (this.gameEnded){
        return
      }

      this.round++
      if (this.round === 15){
        this.gameEnded = true
        return
      }
      if (this.isAlienAttack) {
        this.checkAlienAttack()
      }
      this.addSabotageCard()
    },
    startGame () {
      this.gameStarted = true
      this.hideSelectedGoalCardDialog()
      this.addSabotageCard()
      this.addSabotageCard()
    },
    addSabotageCard () {
      const unusedCards = this.sabotageCardDeck.filter((card) => {
        return !this.openSabotageCards.some((usedCard) => usedCard.type === card.type)
      })

      const newCard = unusedCards[Math.floor(Math.random() * unusedCards.length)]

      this.addSabotageCube(newCard)
      this.openSabotageCards.push(newCard)
    },
    addSabotageCube (newCard) {
      const openSabotageCardsA = this.openSabotageCards.filter(card => card.letter === 'A')
      const openSabotageCardsB = this.openSabotageCards.filter(card => card.letter === 'B')

      if (newCard.letter === 'A') {
        if (openSabotageCardsA.length) {
          const card = openSabotageCardsA.filter(card => this.sabotageCardHasSpaceForCube(card))[0]
          if (card.cube1 === false) {
            card.cube1 = true
          } else {
            card.cube2 = true
          }
        }
      } else {
        if (openSabotageCardsB.length) {
          const card = openSabotageCardsB.filter(card => this.sabotageCardHasSpaceForCube(card))[0]
          if (card.cube1 === false) {
            card.cube1 = true
          } else {
            card.cube2 = true
          }
        }
      }
    },
    checkAlienAttack () {
      const activeCards = this.openSabotageCards.filter(card => card.cube1 && card.cube2 && card.usedInRound === null)
      activeCards.forEach(card => {
        card.usedInRound = this.round
      })
      if (activeCards.length) {
        this.currentSabotageDialogVisible = true
      }
    },
    sabotageCardHasSpaceForCube (card) {
      return !(card.cube1 && card.cube2)
    },
    selectUpgradeGoalCard (card) {
      this.selectedUpgradeGoalCard = card
    },
    selectRandomUpgradeGoalCard () {
      this.selectedUpgradeGoalCard = this.upgradeGoalCardDeck[Math.floor(Math.random() * this.upgradeGoalCardDeck.length)]
    },
    selectEarthContactGoalCard (card) {
      this.selectedEarthContactGoalCard = card
    },
    selectRandomEarthContactGoalCard () {
      this.selectedEarthContactGoalCard = this.earthContactGoalCardDeck[Math.floor(Math.random() * this.earthContactGoalCardDeck.length)]
    },
    selectTechGoalCard (card) {
      this.selectedTechGoalCard = card
    },
    selectRandomTechGoalCard () {
      this.selectedTechGoalCard = this.techGoalCardDeck[Math.floor(Math.random() * this.techGoalCardDeck.length)]
    },
    selectScientistGoalCard (card) {
      this.selectedScientistGoalCard = card
    },
    selectRandomScientistGoalCard () {
      this.selectedScientistGoalCard = this.scientistGoalCardDeck[Math.floor(Math.random() * this.scientistGoalCardDeck.length)]
    },
    selectDiscoveryGoalCard (card) {
      this.selectedDiscoveryGoalCard = card
    },
    selectRandomDiscoveryGoalCard () {
      this.selectedDiscoveryGoalCard = this.earthContactGoalCardDeck[Math.floor(Math.random() * this.earthContactGoalCardDeck.length)]
    },
    showSelectedGoalCardDialog () {
      this.selectedGoalCardDialogVisible = true
    },
    hideSelectedGoalCardDialog () {
      this.selectedGoalCardDialogVisible = false
    },
    showSabotageDetailDialog (cardType) {
      this.sabotageDetailDialogVisible = true
      console.log(cardType)
      this.sabotageDetailCard = this.sabotageCardDeck.find(card => card.type === cardType)
    },
    resetSelectedGoalCards () {
      // this.selectedUpgradeGoalCard = {type: null, title: ''}
      // this.selectedEarthContactGoalCard = {type: null, title: ''}
      // this.selectedTechGoalCard = {type: null, title: ''}
      // this.selectedScientistGoalCard = {type: null, title: ''}
      // this.selectedDiscoveryGoalCard = {type: null, title: ''}
    },
    resetGame () {
      this.resetSelectedGoalCards()
      this.round = 0
      this.gameStarted = false
      this.gameEnded = false
      this.openSabotageCards = []
    }
  },

  getters: {
    canStartGame: (state) => {
      return state.selectedUpgradeGoalCard.type !== null &&
        state.selectedEarthContactGoalCard.type !== null &&
        state.selectedTechGoalCard.type !== null &&
        state.selectedScientistGoalCard.type !== null &&
        state.selectedDiscoveryGoalCard.type !== null
    },
    openSabotageCardsA: (state) => {
      return state.openSabotageCards.filter(card => card.letter === 'A')
    },
    openSabotageCardsB: (state) => {
      return state.openSabotageCards.filter(card => card.letter === 'B')
    },
    isAlienAttack: (state) => {
      const a = [false, false, false, true, false, true, false, true, false, true, false, true, false, true, false, false]

      return a[state.round]
    },
  }

})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
}
