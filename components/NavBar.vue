<template>
<nav :class="['navbar', isTransparent ? 'transparent' : '']">
    <img src="openlogger.png" alt="Logo" class="navbar-logo" />

    <ul class="navbar-list">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link" active-class="active"
          > {{ $t('home') }} </NuxtLink
        >
      </li>
         <li class="navbar-item">
        <NuxtLink to="/theservice" class="navbar-link" active-class="active"
          > {{ $t('theService') }}</NuxtLink
        >
      </li>
      <li class="navbar-item">
        <NuxtLink to="/benefits" class="navbar-link" active-class="active"
          >{{ $t('benefits') }}</NuxtLink
        >
      </li>
      <li class="navbar-item">
        <NuxtLink to="/contact" class="navbar-link" active-class="active"
          >{{ $t('contact') }}</NuxtLink
        >
      </li>
      <li class="navbar-item">
  <!-- <button @click="setLanguage('en')">
    <img src="union-flag.jpeg" alt="English" title="Switch to English" />
  </button> -->
  <img src="union-flag.jpeg" alt="English Flag" @click="setLanguage('en')" />
</li>
<li class="navbar-item">
  <!-- <button @click="setLanguage('sv')">
    <img src="/sweden-flag.jpeg" alt="Swedish" title="Switch to Swedish" />
  </button> -->
  <img src="sweden-flag.jpeg" alt="Swedish Flag" @click="setLanguage('sv')" />

</li>
   
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  props: {
    isTransparent: {
      type: Boolean,
      default: false
    },
  },
    methods: {
    setLanguage(lang: string) {
      (this as any).$i18n.locale = lang; 
      
    }
  },
});
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

.navbar-link:hover {
  background-color: #b0a4a4;
}

.active {
  background-color: #b0a4a4;
}
.navbar.transparent {
  background-color: rgba(255, 255, 255, 0.1); 
}
</style>
