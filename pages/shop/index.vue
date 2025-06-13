<script setup lang="ts">
const appConfig = useAppConfig();

import type { Product } from "@/types/product";

import ProductCard from "~/components/ProductCard.vue";

const { categories } = appConfig;
const allProducts: Product[] = categories
  .map((category) => category.products.map((product) => product as Product))
  .flat(1);

const router = useRouter();
const tabIndex = ref<string | number>(0);

const onNavigateToProduct = (id: string) => {
  router.push("/product/" + id);
};
</script>

<template>
  <div class="layout-wrapper py-10">
    <VRow>
      <VCol cols="3" class="position-relative">
        <VCard class="position-sticky" style="top: 0">
          <VCardText>
            <VRow dense>
              <VCol cols="12" class="d-flex flex-column ga-3">
                <h3 class="py-2 border-b-primary">Search</h3>
                <div class="d-flex align-center ga-3">
                  <VTextField placeholder="Hoodie, Shirt, ..."></VTextField>
                  <VBtn
                    icon="ri-search-line"
                    class="rounded"
                    size="small"
                  ></VBtn>
                </div>
              </VCol>

              <VCol cols="12">
                <h3 class="py-2 border-b-primary">Category</h3>
                <VList class="pa-0" v-model:selected="tabIndex">
                  <VListItem
                    :key="0"
                    class="pa-0"
                    :class="tabIndex === 0 ? 'bg-primary' : ''"
                    min-height="30"
                    @click="tabIndex = 0"
                  >
                    All Products
                  </VListItem>

                  <VListItem
                    v-for="(category, index) in categories"
                    :key="index + 1"
                    class="pa-0"
                    :class="tabIndex === category.slug ? 'bg-primary' : ''"
                    min-height="30"
                    @click="tabIndex = category.slug"
                  >
                    {{ category.title }}
                  </VListItem>
                </VList>
              </VCol>

              <VCol cols="12" class="d-flex flex-column ga-3">
                <h3 class="py-2 border-b-primary">Price</h3>
                <div class="d-flex ga-4">
                  <VTextField label="From" type="number" min="0"></VTextField>
                  <VTextField label="To" type="number" min="0"></VTextField>
                </div>
                <VBtn>Apply</VBtn>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="9">
        <VTabsWindow v-model="tabIndex" class="disable-tab-transition">
          <VTabsWindowItem :value="0">
            <VRow>
              <VCol
                cols="12"
                sm="6"
                md="3"
                v-for="(product, index) in allProducts"
                :key="index"
              >
                <ProductCard
                  :height="'300px'"
                  :product="product"
                  @click="onNavigateToProduct(product.id)"
                ></ProductCard>
              </VCol>
            </VRow>
          </VTabsWindowItem>

          <VTabsWindowItem
            v-for="category in categories"
            :value="category.slug"
          >
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
          </VTabsWindowItem>
        </VTabsWindow>
      </VCol>
    </VRow>
  </div>
</template>
