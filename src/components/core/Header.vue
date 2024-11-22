<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <header>
    <figure>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>
    </figure>

    <nav class="wrapper">
      <RouterLink to="/">
        Home
      </RouterLink>
      <RouterLink to="/building">
        Lokacje
      </RouterLink>
      <RouterLink to="/help">
        Pomoc
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #333;
  position: relative;
}

nav {
  border: 1px solid #333;
}

figure {
  width: 80px;
  height: 80px;
  flex: 0 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #333;
}

.logo {
  display: block;
  max-width: 100%;
}

nav {
  width: 100%;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-end;
  margin: auto 0 0 1rem;
}

nav a {
  padding: .25rem 1rem;
  margin: 0;
  display: inline-block;
  border-left: 1px solid var(--color-border);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}
</style>
