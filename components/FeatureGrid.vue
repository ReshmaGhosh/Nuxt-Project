<template>
  <div class="grid-container">
    <div v-for="item in features" :key="item.title" class="grid-item">
      <img :src="item.imageSrc" :alt="item.imageAlt" class="grid-image" />
      <h2>{{ item.title }}</h2>
      <p>{{ item.paragraph }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { features } = defineProps({
  features: {
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
  margin: 70px auto; /* Vertical spacing and centering */
  max-width: 1200px;
  background-color: rgb(240, 239, 239);
  padding: 110px 110px;
}
.grid-item {
  text-align: justify;
  
}
.grid-image {
  max-width: 100%;
  height: auto;
}
</style>
