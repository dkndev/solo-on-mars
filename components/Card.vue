<template>
  <div class="card">
    <img :src="img" style="object-fit: scale-down; max-width: 100%"/>
  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
  img: String,
})

</script>

<style scoped lang="scss">

div.card {
  width: 250px;
  margin: 0 5px;
}

</style>
