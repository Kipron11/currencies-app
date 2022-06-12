<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-image"></div>
  <header class="header">
    <nav class="header__nav">
      <RouterLink class="header__nav--link" to="/">Home</RouterLink>
      <RouterLink class="header__nav--link" to="/people">People</RouterLink>
      <RouterLink class="header__nav--link" to="/films">Films</RouterLink>
      <RouterLink class="header__nav--link" to="/planets">Planets</RouterLink>
    </nav>
  </header>
  <div class="content">
    <div class="bg-text">
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";
#app {
  font-size: 20px;
  text-align: center;
  color: white;
  font-weight: bold;
}

.bg-image {
  background-image: url("https://www.myfreewalls.com/public/uploads/preview/star-wars-art-4k-wallpaper-background-11624139063guvhmqtpit.jpg");

  filter: blur(8px);
  -webkit-filter: blur(8px);

  max-height: 100%;
  min-height: 900px;
  width: 100%;
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.header {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px;
  margin-bottom: 50px;

  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  border: 3px solid #ffffff;
  width: 100%;
  border-radius: 5px;
}

.header__nav {
  display: flex;
  gap: 20px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-text {
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  border: 3px solid #f1f1f1;
  width: 60%;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
}
</style>
