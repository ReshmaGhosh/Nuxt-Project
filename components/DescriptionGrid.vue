<template>
  <div class="grid-container">
    <div v-for="desc in descriptions" :key="desc.title" class="grid-item">
      <h3>{{ desc.title }}</h3>
      <p>{{ desc.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { descriptions } = defineProps({
  descriptions: {
    type: Array,
    required: true,
  },
});

</script>


<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin: 70px auto;
  max-width: 1200px;
  background-color: rgb(240, 239, 239);
  padding: 90px 110px;
}
.grid-item {
  text-align: justify;
    font-size: 18px;
}
</style>
