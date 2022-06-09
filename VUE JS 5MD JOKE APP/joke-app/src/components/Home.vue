<template>
  <div>ti gye</div>
  <div class="Home__Jokes" v-for="{joke, id} in jokes" :key="id">
    <h1>{{ joke}}</h1>
    <h2>{{ joke }}</h2>
    <h2>{{ joke }}</h2>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions, mapState } from "vuex";
import {defineComponent} from "vue";

export default defineComponent( {
  name: "Home",
  computed:{
    ...mapState('jokes',{
      jokes: (state) => state.data.jokes
    }),
     ...mapGetters("jokes",["result"]),
    },
  methods:mapActions(["fetchJokes"]),

  mounted() {
    this.fetchJokes(4,3);
  },
});
</script>

<style></style>
