<script setup lang="ts">
import ShopSideBarFilter from "./ShopSideBarFilter.vue";

interface Props {
  tabIndex: string;
}
const props = defineProps<Props>();
interface Emit {
  (e: "update:tabIndex", value: string): void;
}
const emit = defineEmits<Emit>();
const position = ref<number>(0);

onMounted(() => {
  const scroll = () => {
    position.value = window.scrollY;
  };

  scroll();

  window.addEventListener("scroll", scroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", scroll);
  });
});
</script>

<template>
  <VCard
    class="position-sticky position-relative"
    :style="{
      top: position ? 'var(--header-height)' : '0',
    }"
  >
    <VCardText>
      <ShopSideBarFilter
        :tab-index="props.tabIndex"
        @update:tab-index="(value) => emit('update:tabIndex', value)"
      ></ShopSideBarFilter>
    </VCardText>
  </VCard>
</template>
