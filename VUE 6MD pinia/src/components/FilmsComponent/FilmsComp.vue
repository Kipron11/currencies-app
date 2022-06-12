<template>
  <section>
    <div class="films--filterButtons">
      <button class="btn">Filter By Episode ID</button>
      <button class="btn">Filter By Release Date</button>
    </div>
    <div class="films--card">
      <div class="films--card--info" v-for="film in getFilms" :key="film.id">
        <div class="films--card--info--left">
          <div>{{ film.title }}</div>
          <div>Episode: {{ film.episode_id }}</div>
          <div>Release Date : {{ film.release_date }}</div>
          <div>Director : {{ film.director }}</div>

        </div>
        <div class="films--card--info--right">
          {{ film.opening_crawl }}
        </div>
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
.films--filterButtons {
  padding-bottom: 10px;
  padding-top: -15px;
  justify-content: center;
  display: flex;
  gap: 15px;
}
.films--card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.films--card--info {
  display: flex;
  min-height: 50px;
  max-height: 170px;
  padding: 10px;
  border: white 1px solid;
  max-width: 100%;
  min-width: 300px;
  border-radius: 5px;
}

.films--card--info--right {
  width: 950px;
}
.films--card--info--left {
  width: 350px;
}
</style>
