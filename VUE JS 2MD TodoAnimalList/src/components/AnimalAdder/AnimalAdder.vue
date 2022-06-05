<template>
  <section class="adder-form">
    <div>
      <form class="adder-form__form" @submit.prevent="submitHandler">
        <input
          class="adder-form__form--input"
          placeholder="Add new animal..."
          type="text"
          v-model="inputValue"
        />
        <select
          class="adder-form__form--select"
          v-model="selectValue"
          name="species"
          id="species"
        >
          <option selected disabled hidden value="none">Specie</option>
          <option value="cat">CAT</option>
          <option value="dog">DOG</option>
        </select>
        <button class="adder-form__form--button" type="submit">ADD</button>
      </form>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnimalAdder",
  emits: ["addAnimal"],
  data() {
    return {
      inputValue: "",
      selectValue: "none",
    };
  },
  methods: {
    submitHandler() {
      this.$emit("addAnimal", {
        id: Math.random(),
        animal: this.inputValue,
        species: this.selectValue,
      });

      this.inputValue = "";
      this.selectValue = "none";
    },
  },
});
</script>

<style scoped lang="scss" src="./AnimalAdder.scss" />
