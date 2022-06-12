<template>
  <div class="films">
    <FilmsComp></FilmsComp>
  </div>
</template>

<script>
import FilmsComp from "../components/FilmsComponent/FilmsComp.vue";
export default {
  name: "FilmsView",
  components: { FilmsComp },
};
</script>

<style scoped></style>
