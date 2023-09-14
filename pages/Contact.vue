<template>
  <NavBar />
  <div class="contact-container">
    <h1>Contact Details</h1>

    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" />

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" />

    <label for="message">Message:</label>
    <textarea id="message" v-model="message"></textarea>

    <button @click="submitForm">Submit</button>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const submitForm = () => {
  console.log("Name:", name.value);
  console.log("Email:", email.value);
  console.log("Message:", message.value);
};
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
</style>
