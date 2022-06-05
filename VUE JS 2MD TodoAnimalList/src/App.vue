<template>
  <section class="App">
    <HomeView />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeView from "./views/HomeView.vue";

export default defineComponent({
  name: "App",
  components: {
    HomeView,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.App {
  display: flex;
  justify-content: center;
  margin-top: 15%;
}
</style>
