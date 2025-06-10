<script setup lang="ts">
const appConfig = useAppConfig();
const { title, contact } = appConfig;
</script>

<template>
  <div v-if="title" class="layout-wrapper mt-5 mb-10 page">
    <h1 class="text-center mb-5">Contact</h1>

    <p>
      If you need assistance or have any other questions, feel free to email us
      at
      <a :href="`mailto:${contact.email.value}`">{{ contact.email.label }}</a>
    </p>
  </div>
</template>
