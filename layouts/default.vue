<script setup lang="ts">
import Navbar from "@/layouts/components/Navbar.vue";
import Footer from "@/layouts/components/Footer.vue";

import MenuMobileDrawer from "@/layouts/components/MenuMobileDrawer.vue";

const isDrawerOpen = ref<boolean>(false);
</script>

<template>
  <div class="main-layout">
    <div class="h-100 d-flex flex-column justify-space-between">
      <div>
        <Navbar @open:navbar="isDrawerOpen = true"></Navbar>

        <main class="layout-page-content">
          <slot />
        </main>
      </div>

      <Footer></Footer>
    </div>

    <ClientOnly>
      <MenuMobileDrawer
        v-model:is-drawer-open="isDrawerOpen"
      ></MenuMobileDrawer>
    </ClientOnly>
  </div>
</template>
