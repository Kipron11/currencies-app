<template>
  <div class="people">
    <PeopleComp></PeopleComp>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
import PeopleComp from "../components/PeopleComponent/PeopleComp.vue";
export default {
  components: { PeopleComp },
};
</script>
