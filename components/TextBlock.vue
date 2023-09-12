<template>
  <div class="text-block">
    <div class="content-wrapper">
      <img
        v-if="imageSrc"
        :src="imageSrc"
        :alt="imageAlt"
        class="text-block-image"
      />
      <h1 v-if="title" class="text-block-title">{{ title }}</h1>
      <p v-if="paragraph" class="text-block-paragraph">{{ paragraph }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "TextBlock",
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    paragraph: {
      type: String,
      required: false,
      default: "",
    },
    imageSrc: {
      type: String,
      required: false,
      default: "",
    },
    imageAlt: {
      type: String,
      required: false,
      default: "Image description",
    },
  },
});
</script>

<style scoped>
.text-block {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: auto;
  font-size: 1.3rem;
  line-height: 1;
}
.content-wrapper {
  text-align: left;
  max-width: 800px;
  padding: 0;
  margin: 0;
  width: 100%; 
}

.text-block-title {
  margin-bottom: 2rem;
  margin-top: 90px;
  text-align: left;
}

.text-block-paragraph {
  margin-top: 0.5rem;
  text-align: left;
}
.text-block-image {
  width: 100%;
  max-width: 680px;
  display: block;
  margin: 0.5rem auto;
}
</style>
