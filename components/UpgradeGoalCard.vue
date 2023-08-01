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
          <img :src="require(`~/assets/img/UpgradeGoalCards/${getCartType(type).image}`)" style="object-fit: scale-down; height: 250px"/>
        </div>
      </div>
    </div>

    <div class="footer" :style="'background-color:' + getCartType(type).bottomColor">
      <div class="triangle" :style="`background-image: linear-gradient(45deg, ${getCartType(type).bottomColor} 50%, rgba(0, 0, 0, 0) 50%);`"></div>
      <div class="flex justify-content-center p-2">
        <img src="~/assets/img/UpgradeGoalCards/BuildingGroup.jpg" style="object-fit: scale-down; height: 70px"/>
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
  {type: 'MineralMine', title: 'Mineral Mine', image: 'MineralMine.png', bottomColor: '#514036', topColor: '#e3804a'},
  {type: 'Biolab', title: 'Biolab', image: 'Biolab.png', bottomColor: '#514036', topColor: '#e3804a'},
  {type: 'Radar', title: 'Radar', image: 'Radar.png', bottomColor: '#ECDFD6', topColor: '#e3804a'},
  {type: 'BuilderDrone', title: 'Builder Drone', image: 'BuilderDrone.png', bottomColor: '#ECDFD6', topColor: '#e3804a'},
  {type: 'ResearchLab', title: 'Research Lab', image: 'ResearchLab.png', bottomColor: '#00659C', topColor: '#e3804a'},
  {type: 'Aqueduct', title: 'Aqueduct', image: 'Aqueduct.png', bottomColor: '#00659C', topColor: '#e3804a'},
  {type: 'EcoResort', title: 'Eco Resort', image: 'EcoResort.png', bottomColor: '#53A329', topColor: '#e3804a'},
  {type: 'TradeMarket', title: 'Trade Market', image: 'TradeMarket.png', bottomColor: '#53A329', topColor: '#e3804a'},
  {type: 'RecyclingBots', title: 'Recycling Bots', image: 'RecyclingBots.png', bottomColor: '#97969CFF', topColor: '#e3804a'},
  {type: 'AerialElevator', title: 'Aerial Elevator', image: 'AerialElevator.png', bottomColor: '#97969CFF', topColor: '#e3804a'},
  {type: 'Library', title: 'Library', image: 'Library.png', bottomColor: '#00A195', topColor: '#e3804a'},
  {type: 'CommandCenter', title: 'Command Center', image: 'CommandCenter.png', bottomColor: '#00A195', topColor: '#e3804a'},
])

function getCartType (type) {
  return cartTypeMap.value.find(cart => cart.type === type)
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
