<script setup lang="ts">
const position = ref<number>(0);

const onScrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

onMounted(() => {
  const handleScroll = () => {
    position.value = window.scrollY;
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <VBtn
    v-if="position > 200"
    icon="ri-arrow-up-line"
    class="position-fixed bottom-0 right-0 mb-5 me-5 shadow"
    @click="onScrollToTop"
  ></VBtn>
</template>
