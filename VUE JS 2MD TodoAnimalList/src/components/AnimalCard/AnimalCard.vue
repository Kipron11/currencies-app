<template>
  <div class="animal-section__specie">
    <span>{{ animalSpecies.toUpperCase() }}</span>
  </div>
  <h4>{{ animalName }}</h4>
  <button class="animal-section__btn" @click="removeHandler">X</button>
</template>

<script>
export default {
  name: "AnimalCard",
  emits: ["removeAnimal"],
  props: {
    animalName: String,
    animalSpecies: String,
  },
  methods: {
    removeHandler() {
      this.$emit("removeAnimal");
    },
  },
};
</script>
<style scoped lang="scss" src="./AnimalCard.scss" />
