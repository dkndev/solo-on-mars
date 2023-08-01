import { acceptHMRUpdate } from 'pinia'

export const useGameStore = defineStore({
  id: 'GameStore',
  state: () => {
    return {
      round: 0,
      sabotageCardDeck: [
        {
          type: 'AdvancedBuildingBombed',
          title: 'ADVANCED BUILDING BOMBED',
          subtitle: 'GOAL 1: BLUEPRINT',
          letter: 'A',
          text: 'THE CONST OT PERFORM THE GOAL-1 UPGRADE IS NOW 2 MINERALS, RATHER THAN 1. <br/> <br/> IF YOU HAVE ALREADY PERFORMED THIS UPGRADE, REMOVE THE ADVANCED BUILDING MARKER FROM BUILDING. YOU WILL NEED TO COMPLETE GOAL-1 AGAIN',
        },
        {
          type: 'HackedTech',
          title: 'HACKED TECH',
          subtitle: 'GOAL 3: TECHNOLOGY',
          letter: 'A',
          text: 'MOVE YOUR GOAL-3 TECH TILE 1 COLUMN TO THE LEFT. IF IT WAS ALREADY IN THE 1ST COLUMN, RETURN IT TO THE TECH GRID ON THE MAIN BOARD. YOU WILL NEED TO TAKE THE LEARN NEW TECHNOLOGY ACTION TO GET IT AGAIN. <br/> <br/> IF YOU HAVE NOT YET ACQUIRED YOUR GOAL-3 TECH TILE, IGNORE THIS EVENT.',
        },
        {
          type: 'ScienceResourcesMissing',
          title: 'SCIENCE RESOURCES MISSING',
          subtitle: 'GOAL 4: SCIENTIST',
          letter: 'A',
          text: 'DISCARD THE RESOURCES TO HIRE THE GOAL-4 SCIENTIST. IF GEOLOGIST, MOVE 2 COLONISTS TO WORKING AREA. IF ALREADY HIRED, PEEK AT COST UNDER EARTH CONTRACT CARD AND DISCARD REQUIRED RESOURCES. <br/> <br/> (AS MANY AS YOU HAVE, IF YOU DON\'T HAVE ENOUGH)',
          extraInfoText: 'DISCARD THE RESOURCES REQUIRED TO HIRE THE GOAL-4 SCIENTIST (OR AS MANY AS YOU HAVE, IF YOU DON\'T HAVE ENOUGH). IF THE GOAL-4 SCIENTIST IS THE GEOLOGIST, MOVE 2 COLONISTS (OR AS MANY AS YOU HAVE, IF YOU DON\'T HAVE ENOUGH) FROM YOUR LIVING QUARTERS TO YOUR WORKING AREA. <br/> <br/> IF YOU HAVE ALREADY HIRED YOUR GOAL-4 SCIENTIST. PEEK AT THE SCIENTIST\'S COST UNDER THE EARTH CONTRACT CARD AND DISCARD THE RESOURCES REQUIRED TO THOSE RESOURCES'
        },
        {
          type: 'ChangeOfPlans',
          title: 'CHANGE OF PLANS',
          subtitle: 'GOAL 1: BLUEPRINT',
          letter: 'A',
          text: 'GOAL 1 DOES NOT COUNT AS ACHIEVED UNTIL YOU HAVE ALSO UPGRADED A 2ND BUILDING OF THE SAME TYPE (THE 2ND UPGRADE CAN BE OF ANY LEVEL).',
        },
        {
          type: 'AlienAbduction',
          title: 'ALIEN ABDUCTION',
          subtitle: 'GENERAL SABOTAGE',
          letter: 'A',
          text: 'RETURN 1 COLONIST FROM YOUR WORKING AREA (OR ANYWHERE ELSE, IF YOU HAVE NONE THERE) TO YOUR PERSONAL SUPPLY.',
        },
        {
          type: 'StealthyHarvest',
          title: 'STEALTHY HARVEST',
          subtitle: 'GENERAL SABOTAGE',
          letter: 'A',
          text: 'DISCARD ALL CRYSTALS FROM THE MARTIAN SURFACE.',
        },
        {
          type: 'ShuttleDelayed',
          title: 'SHUTTLE DELAYED',
          subtitle: 'GENERAL SABOTAGE',
          letter: 'A',
          text: 'MOVE THE SHUTTLE 1 SPACE BACKWARD. IF IT WAS ALREADY ON SPACE 3, MOVE IT BACK TO AN IMAGINARY SPACE 4.',
        },
        {
          type: 'ReducedEfficiency',
          title: 'REDUCED EFFICIENCY',
          subtitle: 'GENERAL SABOTAGE',
          letter: 'A',
          text: 'THE NEXT TIME YOU USE AN ACTION SPACE, YOU MUST EITHER SPEND AN ADDITIONAL CRYSTAL OR COMMIT AN ADDITIONAL COLONIST, THEN FLIP THIS CARD FACE DOWN.',
        },
        {
          type: 'CrystalTheft',
          title: 'CRYSTAL THEFT',
          subtitle: 'GENERAL SABOTAGE',
          letter: 'B',
          text: 'PLACE 2 CRYSTALS FROM YOUR PLAYER BOARD ON THIS CARD. IF YOU DON\'T HAVE ENOUGH, PLACE AS MANY AS YOU HAVE NOW, AND PLACE THE OTHERS IMMEDIATELY WHEN YOU GAIN THEM.',
        },
        {
          type: 'LssSabotage',
          title: 'LSS SABOTAGE',
          subtitle: 'GENERAL SABOTAGE',
          letter: 'B',
          text: 'THE NEXT TIME YOU ADVANCE AN LSS MARKER TO THE ROW OF THE COLONY LEVEL MARKER, IRNORE THE TWO BENEFITS: INSTEAD, SCORE 0 OP, AND GAIN NO BENEFITS DEPICTED IN THE UPPER-LEFT CORNER OF THE LSS DISPLAY. ONCE YOU HAVE APPLIED THIS EFFECT, FLIP THIS CARD FACE DOWN.',
        },
        {
          type: 'HangerInfiltration',
          title: 'HANGER INFILTRATION',
          subtitle: 'GENERAL SABOTAGE',
          letter: 'B',
          text: 'FOR EACH SHIP IN YOUR HANGER, PAY 1 WATER OR PLANT (OR AS MANY AS YOU HAVE, IF YOU DON\'T HAVE ENOUGH).',
        },
        {
          type: 'MineExplosion',
          title: 'MINE EXPLOSION',
          subtitle: 'GENERAL SABOTAGE',
          letter: 'B',
          text: 'FLIP ANY MINE ON THE MARTIAN SURFACE FACE DOWN. MOVE ANY COLONIST ON IT TO YOUR WORKING AREA. THIS TILE IS DEACTIVATED UNTIL YOU REBUILD THE MINE THERE.',
        },
        {
          type: 'DamageToAtmosphericSeal',
          title: 'DAMAGE TO ATMOSPHERIC SEAL',
          subtitle: 'GENERAL SABOTAGE',
          letter: 'B',
          text: 'FLIP ANY SHELTER ON MARS FACE DOWN. IT\'S DEACTIVATED AND YOUR LIVING QUARTERS REDUCED UNTIL REBUILT. (IGNORE IF ONLY 1 SHELTER). NO NEED TO DISCARD, BUT CAN\'T REFILL UNTIL REBUILT',
          extraInfoText: 'FLIP ANY SHELTER ON THE MARTIAN SURFACE FACE DOWN. THIS TILE IS DEACTIVATED AND YOUR LIVING QUARTERS ARE REDUCED ACCORDINGLY UNTIL YOU REBUILD THE SHELTER HERE. (IF YOU HAD ONLY 1 SHELTER. IGNORE THIS EVENT.) YOU DO NOT NEED TO DISCARD ANYTHING, BUT YOU CANNOT REFILL THE DEACTIVATED SHELTER UNTIL YOU REBUILD IT.',
        },
        {
          type: 'BotDestroyed',
          title: 'BOT DESTROYED',
          subtitle: 'GENERAL SABOTAGE',
          letter: 'B',
          text: 'RETURN ONE OF YOUR BOTS FROM THE MARTIAN SURFACE TO YOUR SUPPLY.',
        },
        {
          type: 'RoverDisabled',
          title: 'ROVER DISABLED',
          subtitle: 'GENERAL SABOTAGE',
          letter: 'B',
          text: 'YOUR ROVER IS INACTIVE FOR 2 ROUNDS.<br/> <br/> PLACE YOUR ROVER ON THIS CARD. REACTIVATE YOUR ROVER AT THE END OF THE NEXT COLONIZATION PHASE. PLACE IT ON THE INITIAL MINE HEX. REACTIVATE AGAIN AT THE END OF THE FOLLOWING COLONIZATION PHASE. PLACE IT ON ANY SHELTER HEX.',
          extraInfoText: 'YOU CANNOT USE YOUR ROVER FOR THE NEXT 2 ROUNDS. <br/> <br/> MOVE YOUR ROVER TO THIS CARD. AT THE END THE NEXT COLONIZATION PHASE. LAY YOUR ROVER ON ITS SIDE ON THE INITAL MINE HEX. AT THE END OF THE SUBSEQUENT COLONIZATION PHASE, STAND IT BACK UP, READY TO BE USED AGAIN. AT THE END OF THE SUBSEQUENT COLONIZATION PHASE, STAND IT BACK UP ON ANY SHELTER HEX, READY TO BE USED AGAIN.',
        },
        {
          type: 'Misinformation',
          title: 'MISINFORMATION',
          subtitle: 'GENERAL SABOTAGE',
          letter: 'B',
          text: 'FIND THE MISSION MARKER SITTING ON THE LOWEST NUMBER (I.E. CLOSEST TO COMPLETE) , AND MOVE IT +1 (I.E. 1 SPACE AWAY FROM COMPLETE) IF THERE IS A TIE FOR THE LOWEST NUMBER THIS AFFECTS THE FIRST TIED MISSION IN ALPHABETICAL ORDER (A, B, C).',
        },
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
        'GeneratorTech',
        'GreenhouseTech',
        'MineTech',
        'WaterExtractorTech',
        'OxygenCondenserTech',
        'RoverTech',
        'ShipTech',
        'UpgradeTech',
        'UpgradeTech',
        'UpgradeTech',
        'UpgradeTech',
        'UpgradeTech',
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
      // discoveryGoalCardDeck

      openSabotageCards: [],
      selectedUpgradeGoalCard: {type: null, title: ''},
      selectedEarthContactGoalCard: {type: null, title: ''},
      selectedTechGoalCard: {type: null, title: ''},
      selectedScientistGoalCard: {type: null, title: ''},
      selectedDiscoveryGoalCard: {type: null, title: ''},

      selectedGoalCardDialogVisible: false,
    }
  },

  actions: {
    nextRound () {
      this.round++
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
    }
  },

  getters: {}

})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
}
