<template>
  <div id="home">
    <Navbar :isTransparent="true" />
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
#home {
  background-image: url("openlab.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
}

.transparent-nav {
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 0;
  position: absolute;
  width: 100%;
  z-index: 1000;
}
</style>
