<script setup lang="ts">
interface Props {
  vertical?: boolean | null;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  vertical: false,
  color: "#ccc",
});
</script>

<template>
  <ClientOnly>
    <div
      v-bind="$attrs"
      :style="{
        width: props.vertical ? '1px' : '100%',
        height: props.vertical ? '100%' : '1px',
        backgroundColor: props.color,
      }"
    ></div>
  </ClientOnly>
</template>
