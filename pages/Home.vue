<template>
  <div id="home">
    <Navbar :isTransparent="true" />
    <div class="transparent-box">
      <h2>All equipment connected to one and the same platform.</h2>
      <p>Digitize lab and hospital environments with OpenLogger.</p>
      <p>
        With the help of IoT, you create an interaction between different types
        of sensors and machines from different brands. All data is collected in
        the same place with full traceability and with the possibility of
        analysis. You get a total overview of your equipment, easily build
        comprehensive measurement, logging and alarm structures that increase
        safety and reduce workload. Make your lab smarter, save time, increase
        productivity and gain peace of mind.
      </p>
       <NuxtLink to="/theservice" class="navigate-btn">Read More</NuxtLink>
    </div>
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

/* .transparent-nav {
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 0;
  position: absolute;
  width: 100%;
  z-index: 1000;
} */
.transparent-box {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 50rem;
  height: 23rem;
  border-radius: 8px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%); /* To center the rectangle */
  text-align: center;
  z-index: 10;
}

.transparent-box h2 {
  margin: 0;
  color: white;
  padding-top: 30px;
  font-size: 3rem;
  font-family: "Open Sans", "Arial", sans-serif;
  font-weight: 500;
}
.transparent-box p {
  margin: 10px 0 0;
  color: white;
  padding-top: 10px;
  font-size: 1.2rem;
  font-weight: 100;
  text-align: left;
}
.navigate-btn {
  display: inline-block;
  padding: 10px 25px;
  margin-top: 20px;
  background-color: rgb(242, 177, 14);
  color: white;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s all;

  /* Position it at the bottom right */
  position: absolute;
  bottom: 20px;
  right: 30px;
}

.navigate-btn:hover {
  background-color: rgb(114, 73, 24);
  color: white;
}
</style>
