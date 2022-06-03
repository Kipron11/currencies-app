<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TodoList from '@/components/TodoList.vue'
</script>

<template id="app">
  <div class="container" >
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="75" height="75" />
    <div class="container">
      <nav>
        <RouterLink to="/">TodoList</RouterLink>
        <RouterLink to="/about">SecondTask</RouterLink>
      </nav>
    </div>
    <TodoList></TodoList>
  </div>


</template>

<style>

*{
  box-sizing: border-box;
}

.container{
  max-width: 900px;
  margin: 0 auto;
  text-align: center;


}

#app {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  font-weight: normal;
  font-size: 20px;
  padding: 50px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  height: 75px;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}


nav {
  width: 100%;
  font-size: 24px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}



</style>
