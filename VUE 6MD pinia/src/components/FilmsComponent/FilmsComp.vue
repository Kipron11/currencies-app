<template>
  <section>
    <div class="films--card">
      <div class="films--card--info" v-for="film in getFilms" :key="film.id">
        {{ film.title }} | Episode: {{ film.episode_id }}
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { useFilmsStore } from "@/stores/FilmsStore";
import { mapState } from "pinia";

export default {
  name: "FilmsComp",
  created() {
    useFilmsStore().fetchFilms();
  },
  computed: {
    ...mapState(useFilmsStore, ["getFilms"]),
  },
  methods: {},
};
</script>

<style scoped>
.films--card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.films--card--info {
  height: 50px;
  padding: 10px;
  border: white 1px solid;
  max-width: 500px;
  min-width: 300px;
  border-radius: 5px;
}
</style>
