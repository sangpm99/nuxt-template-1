<script setup lang="ts">
const appConfig = useAppConfig();
const { contact } = appConfig;
</script>

<template>
  <div class="layout-wrapper mt-5 mb-10 page">
    <h1 class="text-center mb-5">Contact</h1>

    <p>
      If you need assistance or have any other questions, feel free to email us
      at
      <a :href="`mailto:${contact.email.value}`">{{ contact.email.label }}</a>
    </p>

    <div class="d-flex flex-column ga-5">
      <VTextField label="Your Email *"></VTextField>
      <VTextField label="Your Name *"></VTextField>
      <VTextField label="Your Phone Number"></VTextField>
      <VTextarea label="Your Description" counter="500"></VTextarea>
    </div>

    <VBtn>Send</VBtn>
  </div>
</template>
