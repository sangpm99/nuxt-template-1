<script setup lang="ts">
import Navbar from "@/layouts/components/Navbar.vue";
import Footer from "@/layouts/components/Footer.vue";

import MenuMobileDrawer from "@/layouts/components/MenuMobileDrawer.vue";

const isDrawerOpen = ref<boolean>(false);
</script>

<template>
  <div>
    <Navbar @open:navbar="isDrawerOpen = true"></Navbar>

    <main class="layout-page-content">
      <slot />
    </main>

    <Footer></Footer>

    <MenuMobileDrawer v-model:is-drawer-open="isDrawerOpen"></MenuMobileDrawer>
  </div>
</template>
