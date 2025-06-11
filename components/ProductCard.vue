<script setup lang="ts">
import type { Product } from "@/types/product";

interface Props {
  product: Product;
  height?: string;
}
const props = defineProps<Props>();
const height = props.height ?? "400px";
</script>

<template>
  <VCard class="bg-gray product-card">
    <VCardText class="pa-2">
      <div class="product-image zoom-in">
        <NuxtImg class="image" :src="product.mainMockupURL"></NuxtImg>
      </div>
      <p class="mb-0 mt-2 two-lines">{{ props.product.productName }}</p>
      <p class="mb-0 d-flex ga-4" v-if="props.product.salePrice">
        <span class="text-error font-weight-bold"
          >$ {{ props.product.salePrice }}</span
        >
        <span class="text-decoration-line-through text-sub"
          >$ {{ props.product.regularPrice }}</span
        >
      </p>

      <p class="mb-0 d-flex ga-4" v-else>
        <span class="text-error font-weight-bold"
          >$ {{ props.product.regularPrice }}</span
        >
      </p>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.product-card {
  .product-image {
    height: v-bind(height);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
