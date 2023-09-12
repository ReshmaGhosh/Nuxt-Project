
<template>
  <NavBar />
  <div class="benefits-container">
    <div class="content-wrapper">
      <TextBlock title="Monitoring and Alarms" />
      <TextBlock paragraph="Logging around the clock." />
      <TextBlock
        paragraph="Monitoring and alarm functions are the key to a well-functioning
        measurement system. Alarms help you drastically reduce possible damage
        to or loss of samples due to poor internal conditions. When the actual
        conditions deviate from your specifications, an alarm is triggered."
      />
      <TextBlock
        paragraph="OpenLogger can then guide you to take the right actions. All actions are
        logged and saved to achieve full traceability."
      />
      <TextBlock
        paragraph="You can specify in which channels your warnings are to be delivered:
        e-mail, text message, phone call, or siren."
      />
      <TextBlock
        imageSrc="alarm-feedback.png"
        imageAlt="Description of the first image"
      />
      <TextBlock
        paragraph="You can set rules for warnings yourself. There is also an escalation
        function which means that if contact point 1 does not respond to the
        warning, person 2 is notified and so on. You can also schedule the
        contact flow based on day, night, holiday etc. and specify in which
        channel the alert should be sent."
      />
      <TextBlock
        paragraph="In a multi-site installation, you can set individual alert rules for
        each separate piece of equipment based on your requirements. This makes
        it easy to divide systems into different areas of responsibility. It
        offers an opportunity to have systems with several hundred sensors.
        Practically any computer can be used as an alarm computer. For you as a
        user, this means that you can be reached by warnings even if you use
        your computer for other purposes. The system also enables registration
        of warning reports about what caused the alarm. You can choose to save
        that information for later analysis and review."
      />
      <TextBlock title="No glycol or petroleum jelly" />
      <TextBlock
        paragraph='Thanks to the OpenLogger alarm calculator, it is possible to avoid "false" warnings when e.g. a freezer is opened without having the sensor stuffed in damping material. A typical temperature sensor uses glycol, petroleum jelly, or a solid block solution to act as a buffering mechanism for the sensor to eliminate air temperature variations and false alarms due to frequent opening and closing of storage units. This is a redundant function that can be perceived as complicated. OpenLogger is smarter than that. In the software there is an algorithm to solve the problem. There will be no need to put the sensor in any other medium.'
      />
      <TextBlock
        imageSrc="smart-alarm.png"
        imageAlt="Description of the second image"
      />
      <TextBlock
        paragraph="It is always important to know how quickly a parameter can change when planning corrective actions. If a threshold is crossed and a problem occurs, do you have five minutes to solve the problem, or five hours before significant damage occurs?"
      />
      <p>
        <NuxtLink to="/contact" class="contact-link">Contact us for a quote</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextBlock from "../components/TextBlock.vue";
import NavBar from "../components/NavBar.vue";

export default defineComponent({
  name: "Benefits",
  components: {
    TextBlock,
    NavBar,
  },
});
</script>

<style scoped>
.contact-link {
  margin: 0.5rem 0;
  text-align: center;
  display: block;
  font-size: 1.3rem;
  color: blue;
}
</style>

