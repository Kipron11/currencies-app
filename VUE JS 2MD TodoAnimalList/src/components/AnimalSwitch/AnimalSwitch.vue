<template>
  <div class="animal-section__filter-btn">
    <div class="form-check form-switch">
      <span>{{ viewMode === "all" ? "Show Cats" : "Show All" }}</span>
      <label class="switch">
        <input
          @click="toggleViewHandler"
          type="checkbox"
          data-toggle="toggle"
        />
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalSwitch",
  emits: ["toggleView"],
  props: {
    viewMode: String,
  },
  methods: {
    toggleViewHandler(viewMode) {
      this.$emit("toggleView", viewMode);
    },
  },
};
</script>

<style scoped lang="scss" src="./AnimalSwitch.scss" />
