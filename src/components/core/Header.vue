<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <header class="d-flex align-items-center justify-between p-3 relative">
    <figure class="m-0">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>
    </figure>

    <nav class="list-group-horizontal w-full">
      <RouterLink to="/" class="list-group-item">
        Home
      </RouterLink>
      <RouterLink to="/building" class="list-group-item">
        Lokacje
      </RouterLink>
      <RouterLink to="/help" class="list-group-item">
        Pomoc
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  border: 1px solid #333;
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
  margin: auto 0 0 1rem;
}

nav a {
  font-size: 1rem;
  padding: .25rem 1rem;
  margin: 0;
  display: inline-block;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
