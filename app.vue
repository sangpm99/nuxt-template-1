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
  <VApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VApp>
</template>
