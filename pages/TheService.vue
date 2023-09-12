<template>
  <NavBar />
  <div class="service-container">
    <TextBlock
      title="The Service"
      paragraph="Our customers primarily do not want a product but the service that the product performs. OpenLogger is easy to use and easy to understand."
    />

    <TextBlock
      paragraph="By wirelessly integrating all measurement parameters into a single platform that is always online, you get access to your measurement data regardless of where you are. You manage the system from your phone, computer, tablet or monitoring screen."
    />

    <TextBlock
      imageSrc="function-openlogger.png"
      imageAlt="Description of the Image"
    />

    <TextBlock
      paragraph="Sensors are placed in measuring objects. These sensors either have built-in transmitters, or are connected to a transmitter. The transmitter further sends measurement values to an OpenLogger system."
    />

    <TextBlock imageSrc="openlogger2.jpg" imageAlt="Description of the Image" />
    <TextBlock
      paragraph="The measured values ​​are then processed. In the event of any deviations, an alarm is sent out. You control the entire system from your phone, computer or alarm screen."
    />
    <p>
      <NuxtLink to="/benefits" class="benefits-link"
        >Read more about the benefits</NuxtLink
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextBlock from "../components/TextBlock.vue";

export default defineComponent({
  name: "TheService",
  components: {
    TextBlock,
  },
});
</script>

<style scoped>
.benefits-link {
  margin: 0.5rem 0;
  text-align: center;
  display: block;
  font-size: 1.3rem;
  color: blue;
}
</style>
