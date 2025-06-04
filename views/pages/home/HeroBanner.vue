<script setup lang="ts"></script>

<template>
  <div class="herro-banner position-relative">
    <NuxtImg src="/images/banner-1.png"></NuxtImg>

    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.herro-banner {
  img {
    width: 100%;
    height: calc(100vh - var(--header-height) + 50px);
    object-fit: cover;
  }

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(238, 238, 238, 0.4);
  }
}
</style>
