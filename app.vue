<script setup lang="ts">
const appConfig = useAppConfig();

useHead({
  titleTemplate: appConfig.title,
  meta: [
    {
      property: "og:image",
      content: appConfig.header.logo,
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: appConfig.header.favicon,
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <VApp>
      <NuxtPage />
    </VApp>
  </NuxtLayout>
</template>
