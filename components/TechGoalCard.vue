<template>
  <div class="card">

    <div class="wrapper">
      <div class="title flex" :style="'background-color:' + getCartType(type).topColor">
        <div class="triangle" :style="`background-image: linear-gradient(225deg, ${getCartType(type).topColor} 50%, rgba(0, 0, 0, 0) 50%);`"></div>
        <div class="m-auto">
          {{ getCartType(type).title }}
        </div>
      </div>

      <div class="content">
        <div class="flex justify-content-center mt-1">
          <img :src="require(`~/assets/img/TechGoalCards/${getCartType(type).image}`)" style="object-fit: scale-down; height: 250px"/>
        </div>
      </div>
    </div>

    <div class="footer" :style="'background-color:' + getCartType(type).bottomColor">
      <div class="triangle" :style="`background-image: linear-gradient(45deg, ${getCartType(type).bottomColor} 50%, rgba(0, 0, 0, 0) 50%);`"></div>
      <div class="flex justify-content-center p-2">
        <img src="~/assets/img/TechGoalCards/TechUpgrade.png" style="object-fit: scale-down; height: 80px"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
})

const infoDialogVisible = ref(false)

const cartTypeMap = ref([
  {type: 'GeneratorTech', title: 'Generator', image: 'GeneratorTech.png', bottomColor: '#E1E1E1FF', topColor: '#49615c'},
  {type: 'GreenhouseTech', title: 'Greenhouse', image: 'GreenhouseTech.png', bottomColor: '#69A648FF', topColor: '#49615c'},
  {type: 'MineTech', title: 'Mine', image: 'MineTech.png', bottomColor: '#4C3935FF', topColor: '#49615c'},
  {type: 'OxygenCondenserTech', title: 'Oxygen Condenser', image: 'OxygenCondenserTech.png', bottomColor: '#97969CFF', topColor: '#49615c'},
  {type: 'WaterExtractorTech', title: 'Water Extractor', image: 'WaterExtractorTech.png', bottomColor: '#0062B1', topColor: '#49615c'},
  {type: 'RoverTech', title: 'Rover', image: 'RoverTech.png', bottomColor: '#060438FF', topColor: '#49615c'},
  {type: 'ShipTech', title: 'Ship', image: 'ShipTech.png', bottomColor: '#060438FF', topColor: '#49615c'},
  {type: 'UpgradeTech', title: 'Upgrade', image: 'UpgradeTech.png', bottomColor: '#060438FF', topColor: '#49615c'},
])

function getCartType (type) {
  return cartTypeMap.find(cart => cart.type === type)
}

</script>

<style scoped lang="scss">

div.card {
  width: 300px;
  height: 415px;
  border: 10px solid #f1f1f1;
  border-radius: 15px;
  position: relative;
  margin: 8px;
  background-color: #f1f1f1;

  .wrapper {
    position: relative;

    .title {
      position: relative;
      font-size: 1.3rem;
      color: white;
      height: 50px;
      border-radius: 10px 10px 0 0;

      .triangle {
        position: absolute;
        top: 10px;
        right: 0;
        width: 80px;
        height: 80px;
      }
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
    width: 100%;
    border-radius: 0 0 10px 10px;

    .triangle {
      position: absolute;
      top: -40px;
      width: 80px;
      height: 80px;
    }
  }
}

</style>
