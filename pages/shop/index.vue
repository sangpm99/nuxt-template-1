<script setup lang="ts">
const appConfig = useAppConfig();

import ProductCard from "~/components/ProductCard.vue";

const { categories } = appConfig;

const router = useRouter();
const tabIndex = ref<string | null>(categories[0]?.slug ?? null);

const onNavigateToProduct = (id: string) => {
  router.push("/product/" + id);
};
</script>

<template>
  <div class="layout-wrapper mt-5">
    <VRow>
      <VCol cols="3">
        <h3 class="py-2 border-b-primary">Category</h3>
        <VList class="pa-0">
          <VListItem
            v-for="(category, index) in categories"
            :key="index"
            link
            @click="tabIndex = category.slug"
          >
            {{ category.title }}
          </VListItem>
        </VList>
      </VCol>
      <VCol>
        <VTabsWindow v-model="tabIndex" class="disable-tab-transition">
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
                v-for="(product, index) in category.products"
                :key="index"
              >
                <ProductCard
                  :height="'300px'"
                  :product="product"
                  @click="onNavigateToProduct(product.id)"
                ></ProductCard>
              </VCol>
            </VRow>
            <Gap class="d-none d-md-block"></Gap>
          </VTabsWindowItem>
        </VTabsWindow>
      </VCol>
    </VRow>
  </div>
</template>
