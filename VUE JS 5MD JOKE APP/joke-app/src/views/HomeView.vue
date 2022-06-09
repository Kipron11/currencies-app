<script setup lang="ts">
import Home from "@/components/Home.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name:'HomeView',
  components: {Home}

})
</script>

<template>
  <div class="home-view">
    <home />
  </div>
</template>
