<script setup lang="ts">
const appConfig = useAppConfig();
const { categories } = appConfig;

import HeadingIcon from "@/components/HeadingIcon.vue";
import ProductCard from "@/components/ProductCard.vue";

const router = useRouter();
const tabIndex = ref<string | null>(categories[0]?.slug ?? null);

const onNavigateToProduct = (id: string) => {
  router.push("/product/" + id);
};
</script>

<template>
  <div class="layout-wrapper our-products padding-section">
    <VRow>
      <VCol cols="12" class="d-flex flex-column align-center mb-5">
        <HeadingIcon width="70px" color="white"></HeadingIcon>
        <p class="font-section-title text-center">Products</p>
      </VCol>

      <VCol cols="12">
        <ClientOnly>
          <VTabs
            v-model="tabIndex"
            bg-color="primary"
            align-tabs="center"
            color="white"
          >
            <VTab v-for="category in categories" :value="category.slug">{{
              category.title
            }}</VTab>
          </VTabs>

          <VTabsWindow v-model="tabIndex">
            <VTabsWindowItem
              v-for="category in categories"
              :value="category.slug"
            >
              <Gap></Gap>
              <VRow>
                <VCol
                  cols="12"
                  sm="6"
                  md="3"
                  v-for="(product, index) in category.products.slice(0, 8)"
                  :key="index"
                >
                  <ProductCard
                    :product="product"
                    @click="onNavigateToProduct(product.id)"
                  ></ProductCard>
                </VCol>
              </VRow>
              <Gap class="d-none d-md-block"></Gap>
            </VTabsWindowItem>
          </VTabsWindow>
        </ClientOnly>
      </VCol>

      <VCol cols="12" class="d-flex justify-center">
        <VBtn>Show All</VBtn>
      </VCol>
    </VRow>
  </div>
</template>
