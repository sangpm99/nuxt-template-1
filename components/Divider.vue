<script setup lang="ts">
interface Props {
  vertical?: boolean;
  color?: string;
}
const props = withDefaults(defineProps<Props>(), {
  vertical: false,
  color: "#ccc",
});
</script>

<template>
  <div
    :style="`width: ${props.vertical ? '1px' : '100%'}; height: ${props.vertical ? '100%' : '1px'}; background-color: ${props.color}`"
  ></div>
</template>
