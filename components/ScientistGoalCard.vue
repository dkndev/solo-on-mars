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
          <img :src="require(`~/assets/img/ScientistGoalCards/${getCartType(type).image}`)" style="object-fit: scale-down; height: 250px"/>
        </div>
      </div>
    </div>

    <div class="footer" :style="'background-color:' + getCartType(type).bottomColor">
      <div class="triangle" :style="`background-image: linear-gradient(45deg, ${getCartType(type).bottomColor} 50%, rgba(0, 0, 0, 0) 50%);`"></div>
      <div class="flex justify-content-center p-2">
        <img src="~/assets/img/ScientistGoalCards/Points.png" style="object-fit: scale-down; height: 70px; z-index: 1" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
})

const cartTypeMap = ref([
  {type: 'Biochemist', title: 'The Biochemist', image: 'Biochemist.png', bottomColor: '#69A648', topColor: '#00A195'},
  {type: 'Geochemist', title: 'The Geochemist', image: 'Geochemist.png', bottomColor: '#E1E1E1', topColor: '#00A195'},
  {type: 'Geologist', title: 'The Geologist', image: 'Geologist.png', bottomColor: '#514036', topColor: '#00A195'},
  {type: 'Hydrologist', title: 'The Hydrologist', image: 'Hydrologist.png', bottomColor: '#0062B1', topColor: '#00A195'},
  {type: 'R&DEngineer', title: 'The R&D Engineer', image: 'R&DEngineer.png', bottomColor: '#97969C', topColor: '#00A195'},
  {type: 'SystemsEngineer', title: 'The Systems Engineer', image: 'SystemsEngineer.png', bottomColor: '#00A195', topColor: '#00A195'},
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
