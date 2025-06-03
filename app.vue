<script setup lang="ts">
const appConfig = useAppConfig();

useHead({
  titleTemplate: appConfig.title,
});
</script>

<template>
  <NuxtLayout>
    <VApp>
      <NuxtPage></NuxtPage>
    </VApp>
  </NuxtLayout>
</template>
