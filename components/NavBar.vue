<template>
  <nav :class="['navbar', isTransparent ? 'transparent' : '']">
    <img src="openlogger.png" alt="Logo" class="navbar-logo" />

    <ul class="navbar-list">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link" active-class="active">
          Home
        </NuxtLink>
      </li>
      <li class="navbar-item">
        <NuxtLink to="/theservice" class="navbar-link" active-class="active">
          The Service</NuxtLink
        >
      </li>
      <li class="navbar-item">
        <NuxtLink to="/benefits" class="navbar-link" active-class="active">
          Benefits
        </NuxtLink>
      </li>
      <li class="navbar-item">
        <NuxtLink to="/contact" class="navbar-link" active-class="active">
          Contact
        </NuxtLink>
      </li>
      <!-- <li class="navbar-item">
   
        <img
          src="union-flag.jpeg"
          class="flag-image"
          alt="English Flag"
          role="button"
          aria-label="Change language to English"
          @click="setLanguage('en')"
        />
      </li>
      <li class="navbar-item">
  
        <img
          src="sweden-flag.jpeg"
          class="flag-image"
          alt="Swedish Flag"
          role="button"
          aria-label="Change language to Swedish"
          @click="setLanguage('sv')"
        />
      </li> -->
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

const { isTransparent } = withDefaults(
  defineProps<{
    isTransparent?: boolean;
  }>(),
  {
    isTransparent: false,
  }
);
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.navbar-logo {
  height: 50px;
  margin-right: 1rem;
}
.navbar-list {
  list-style-type: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}
.navbar-item {
  display: inline-block;
}
.navbar-link {
  text-decoration: none;
  color: rgb(58, 55, 55);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.navbar-link:hover,
.active {
  background-color: #b0a4a4;
}
.navbar.transparent {
  background-color: rgba(255, 255, 255, 0.1);
}
.flag-image {
  width: 24px;
  height: auto;
}
</style>
