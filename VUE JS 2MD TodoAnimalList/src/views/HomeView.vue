<template>
  <section class="animal-section">
    <AnimalSwitch :view-mode="viewMode" @toggleView="toggleView" />
    <AnimalAdder @addAnimal="addAnimal" />
    <p>{{ errorMessage }}</p>
    <div
      v-for="(animal, index) in animalsView"
      :key="animal"
      class="animal-section__box"
    >
      <AnimalCard
        :animal-name="animal.animal"
        :animal-species="animal.species"
        :animal-id="animal.id"
        @removeAnimal="removeAnimal(index)"
      />
    </div>
    <h1 v-if="loading">Loading...</h1>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AnimalAdder from "@/components/AnimalAdder/AnimalAdder.vue";
import AnimalCard from "@/components/AnimalCard/AnimalCard.vue";
import AnimalSwitch from "@/components/AnimalSwitch/AnimalSwitch.vue";
export type Animal = {
  id: number;
  animal: string;
  species: string;
};

type ViewMode = "all" | "Cats";

export default defineComponent({
  name: "HomeView",
  components: {
    AnimalSwitch,
    AnimalCard,
    AnimalAdder,
  },
  data: () => ({
    count: 10,
    viewMode: "all" as ViewMode,
    animals: [] as Animal[],
    loading: false,
    errorMessage: "",
  }),
  computed: {
    animalsView() {
      if (this.viewMode === "Cats") {
        return this.showCats;
      }

      return this.animals;
    },
    showCats() {
      return this.animals.filter((item) => item.species === "cat");
    },
  },
  methods: {
    toggleView() {
      if (this.viewMode === "all") {
        this.viewMode = "Cats";
      } else {
        this.viewMode = "all";
      }
    },
    addAnimal(animal: Animal) {
      if (animal.species === "none") {
        this.errorMessage = "Select specie!";

        return;
      }
      if (animal.animal === "") {
        this.errorMessage = "Enter animal name!";

        return;
      }

      this.errorMessage = "";
      const animals = [...this.animals];
      animals.push(animal);
      this.animals = animals;
    },
    removeAnimal(index: number) {
      const animals = [...this.animals];

      animals.splice(index, 1);
      this.animals = animals;
    },
  },
});
</script>
<style scoped lang="scss" src="./HomeView.scss" />
