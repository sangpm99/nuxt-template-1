<script lang="ts" setup>
interface Props {
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  height: "30px",
});
</script>

<template>
  <div :style="`height: ${props.height}; width: 100%`"></div>
</template>
