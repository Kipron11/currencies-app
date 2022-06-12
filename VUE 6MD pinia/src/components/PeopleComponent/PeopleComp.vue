<template>
  <section>
    <div>
      <input
        class="char--input"
        v-model="inputValue"
        placeholder="Type Name here.."
        @keydown="searchCharacter(inputValue)"
      />
    </div>
    <div class="char--card">
      <div
        class="char--card--info"
        v-for="character in getPeople"
        :key="character.id"
      >
        {{ character.name }}
      </div>
    </div>
    <div class="char--filterButtons">
      <button class="btn" @click="this.pageNum--" :disabled="this.pageNum === 1">
        Prev
      </button>
      <button class="btn" @click="this.pageNum++">Next</button>
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

<style scoped>
.char--input {
  height: 50px;
  padding: 10px;
  border: white 1px solid;
  max-width: 500px;
  min-width: 300px;
  border-radius: 5px;
  margin-bottom: 30px;
  background: transparent;
  font-size: 24px;
  color: whitesmoke;
}
.char--card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.char--card--info {
  height: 50px;
  padding: 10px;
  border: white 1px solid;
  max-width: 500px;
  min-width: 300px;
  border-radius: 5px;
}

.char--filterButtons{
  display: flex;
  justify-content: center;
  gap: 15px;
  padding:10px;
}
</style>
