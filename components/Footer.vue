<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-address">
        <h1><strong>OpenLogger Systems AB</strong></h1>
        <p>Skeppsbron 11</p>
        <p>211 20 Malmö</p>
      </div>
      <div class="footer-description">
        <p>
          OpenLogger is a privately owned company. OpenLogger is a unique and
          useful measurement system that really works.
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copyright">2018 ©OpenLogger Systems AB</p>
      <div class="social-icons">
        <a href="#" class="icon-link"
          ><img src="path/to/facebook-icon.png" alt="Facebook Logo"
        /></a>
        <a href="#" class="icon-link"
          ><img src="path/to/twitter-icon.png" alt="Twitter Logo"
        /></a>
        <a href="#" class="icon-link"
          ><img src="path/to/linkedin-icon.png" alt="LinkedIn Logo"
        /></a>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
  background-color: rgb(58, 57, 57);
  color: white;
  padding: 20px 0;
  width: 100%;
  position: relative;
  bottom: 0;
  height: 200px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex; /* This will make them sit side-by-side */
  justify-content: space-between;
}

.footer-address p,
.footer-description p {
  margin: 5px 0;
  font-weight: 200;
  color: darkgray;
}

.footer-address,
.footer-description {
  flex: 1;
  margin: 0 10px;
}

.footer-description p {
  text-align: justify;
  margin-top: 30px;
}
.footer-address h1 {
  font-weight: 200;
  color: darkgray;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background: rgb(31, 30, 30);
}

.footer-copyright {
  margin-bottom: 20px;
  font-size: 0.9em;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.icon-link img {
  width: 24px;
  height: 24px;
}
</style>
