<template>
  <section>
    <div>
      <input v-model="inputValue" placeholder="Type Name here.." @keydown="searchCharacter(inputValue)" />
    </div>
    <div v-for="character in getPeople" :key="character.id">
      {{ character.name }}
    </div>
    <div>
      <button @click="this.pageNum--" :disabled="this.pageNum === 1">
        Prev
      </button>
      <button @click="this.pageNum++">Next</button>
    </div>
  </section>
</template>

<script lang="ts">
import { mapState } from "pinia";
import { usePeopleStore } from "@/stores/PeopleStore";
import { defineComponent } from "vue";
export default defineComponent({
  name: "PeopleComp",
  data: () => ({
    inputValue: "",
    pageNum: 1,
  }),
  created() {
    usePeopleStore().fetchPeople(`?page=${this.pageNum}`);
  },
  computed: {
    ...mapState(usePeopleStore, ["getPeople"]),
  },
  methods: {
    searchCharacter(name: string) {
      usePeopleStore().fetchPeople(`?search=${name}`);
    },
  },
  watch: {
    pageNum() {
      usePeopleStore().fetchPeople(`?page=${this.pageNum}`);
    },
  },
});
</script>

<style scoped></style>
