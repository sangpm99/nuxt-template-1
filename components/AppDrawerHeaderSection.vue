<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();

defineEmits<{
  (e: "cancel", el: MouseEvent): void;
}>();
</script>

<template>
  <div class="pa-5 d-flex align-center">
    <h5 class="text-h5">
      {{ props.title }}
    </h5>
    <VSpacer />

    <slot name="beforeClose" />

    <VBtn
      class="text-medium-emphasis ms-1 pa-0"
      size="x-small"
      @click="$emit('cancel', $event)"
      variant="text"
      style="width: 30px; height: 30px"
    >
      <VIcon size="24" icon="ri-close-line" />
    </VBtn>
  </div>
</template>
