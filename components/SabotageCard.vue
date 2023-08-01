<template>
  <div class="card" :class="{light: getCartType(type).letter === 'A', dark: getCartType(type).letter === 'B'}">

    <div class="wrapper">
      <span v-if="getCartType(type).hasOwnProperty('extraInfoText')" class="info-icon pi pi-info-circle" @click="infoDialogVisible = true"></span>

      <div class="title">
        <div class="">
          {{ getCartType(type).title }}
        </div>
      </div>

      <div class="subtitle">
        <div class="">
          {{ getCartType(type).subtitle }}
        </div>
      </div>

      <div class="content">
        <span v-html="getCartType(type).text"></span>
      </div>
    </div>

    <div class="footer">
      <div class="flex">
        <div class="flex ml-2">
          <div class="box bg-orange-500"></div>
          <div class="box bg-red-500"></div>
        </div>
        <div class="letter-box">
          <div class="text-right pr-2">
            {{ getCartType(type).letter }}
          </div>
        </div>
      </div>
    </div>

    <Dialog v-model:visible="infoDialogVisible" modal :header="getCartType(type).title" :style="{ width: '50vw' }">
      <p v-html="getCartType(type).extraInfoText"/>
    </Dialog>

  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
})

const infoDialogVisible = ref(false)

const cartTypeMap = ref([
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
])

function getCartType (type) {
  return cartTypeMap.value.find(cart => cart.type === type)
}

</script>

<style scoped lang="scss">

div.card {
  width: 300px;
  height: 415px;
  border: 10px solid darkred;
  border-radius: 15px;
  position: relative;
  margin: 8px;

  &.dark {
    background-color: #494949;

    .footer {
      background-color: #414141;
    }

    .letter-box {
      background-color: #3a3a3a !important;
    }
  }

  &.light {
    background-color: #bebdbd;
  }

  .wrapper {
    position: relative;
    background: radial-gradient(circle at center, #00006c 5%, #0e0e0e 100%);
    border: 1px solid gray;
    height: calc(100% - 81px);
    margin: 15px 15px 0;
    padding: 5px 15px;

    .info-icon {
      position: absolute;
      bottom: 7px;
      right: 7px;
      color: white;
      cursor: pointer;

      &:hover {
        font-size: 1.2rem;
      }
    }

    .title {
      font-size: 1.3rem;
      color: #00A195;
    }

    .subtitle {
      font-size: 1.0rem;
      color: white;
      background-color: #00A195;
      margin: 8px 0;
      padding: 2px;
    }

    .content {
      color: white;
      font-size: 0.9rem;
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    background-color: #adacac;

    .box {
      height: 40px;
      width: 40px;
      margin: 0 5px auto 5px;
      box-shadow: inset -5px 3px 4px rgba(0, 0, 0, 0.4), inset 1px 3px 4px rgba(0, 0, 0, 0.4);

    }

    .letter-box {
      position: relative;
      background-color: #9b9a9a;
      font-size: 2.7rem;
      color: white;
      width: 172px;
      overflow: hidden;
    }
  }
}

</style>
