<script setup lang="ts">
import Navbar from "~/layouts/components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar></Navbar>

    <main class="layout-page-content">
      <slot />
    </main>

    <footer></footer>
  </div>
</template>
