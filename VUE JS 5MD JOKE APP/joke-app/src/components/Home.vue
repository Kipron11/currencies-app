<template>
  <div>ti gye</div>
  {{ jokesCount }}
  <div class="Home__Jokes" v-for="jokes in allJokes" :key="joke.id">
    <h1>{{ jokes.id}}</h1>
    <h2>{{ jokes.setup }}</h2>
    <h2>{{ jokes.type }}</h2>
    <h2>{{ result.jokes.alert}}</h2>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {defineComponent} from "vue";

export default defineComponent( {
  name: "Home",
  computed: mapGetters(["allJokes", "jokesCount"]),
  methods:mapActions(["fetchJokes"]),

  async mounted() {
    this.fetchJokes();
  },
});
</script>

<style></style>
