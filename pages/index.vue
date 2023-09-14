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
  <p class="highlighted-text">
    "You decide what you want to measure.Openlogger has the technology and
    systems that save time and easily give you control over your laboratory
    environment with full traceability."
  </p>

  <FeatureGrid :features="gridItems" />
  <div class="logos-container">
    <img src="uppsala.png" alt="Logo 1" class="logo" />
    <img src="nordic-ivf.png" alt="Logo 2" class="logo" />
    <img src="logo.png" alt="Logo 3" class="logo" />
    <img src="unilabs-logo.png" alt="Logo 4" class="logo" />
  </div>

  <DescriptionGrid :descriptions="descriptionItems" />
  <Footer />
</template>

<script setup>
const gridItems = [
  {
    imageSrc: "measure-mask.png",
    imageAlt: "Description 1",
    title: "Measures everything over everything",
    paragraph:
      "Temperature in refrigerators, freezers, low-temperature freezers and " +
      "cryotanks. Gases and moisture in incubators. Particles and pressure in " +
      "clean rooms. OpenLogger handles all types of sensors and measurement " +
      "values ​​from both own and existing sensors.",
  },
  {
    imageSrc: "alarm-mask.png",
    imageAlt: "Description 2",
    title: "Monitoring and alarms",
    paragraph:
      "Adding alarms or other actions with full traceability. Sort alarms by " +
      "person, time or workplace. You see events and can take actions in your " +
      "system from your mobile.",
  },
  {
    imageSrc: "kalibrering-mask.png",
    imageAlt: "Description 3",
    title: "Calibration and control",
    paragraph:
      "Do you know if your measurements are correct? Our sensors are " +
      "calibrated. OpenLogger has a built-in system for self-checking and " +
      "calibration routines.",
  },
];

const descriptionItems = [
  {
    title: "A lot for the money",
    description:
      "No license costs for users make it easy to budget. Simple installation provides low costs and fast ROI.",
  },
  {
    title: "Intuitive and easy to understand",
    description:
      "Built for laboratories by laboratory professionals. The interface is easy to understand and you can quickly take the right action.",
  },
  {
    title: "Large installations",
    description:
      "There are large installations with different types of sensors. OpenLogger has many users and is well proven.",
  },
];
</script>

<style scoped>
#home {
  background-image: url("openlab.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
}

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
.highlighted-text {
  font-size: 2rem;
  font-weight: 500;
  text-align: justify;
  margin: 40px 0; /* Add some vertical spacing */
  color: rgb(33, 25, 3);
  max-width: 80%;
  margin-left: auto; /* Center the paragraph */
  margin-right: auto; /* Center the paragraph */
  line-height: 1.4;
  width: 50rem;
}
.logos-container {
  display: flex;
  justify-content: center;
  gap: 120px;
  margin-top: 20px;
}

.logo {
  width: auto;
  height: 68px;
}
</style>
