<script setup lang="ts">
const appConfig = useAppConfig();

import type { Product } from "@/types/product";

import ProductCard from "@/components/ProductCard.vue";
import ShopSideBar from "@/views/pages/shop/ShopSideBar/ShopSideBar.vue";
import ShopSideBarDrawer from "~/views/pages/shop/ShopSideBar/ShopSideBarDrawer.vue";

const { categories } = appConfig;
const allProducts: Product[] = categories
  .map((category) => category.products.map((product) => product as Product))
  .flat(1);

const router = useRouter();
const tabIndex = ref<string>("0");
const isDrawerOpen = ref<boolean>(false);

const onNavigateToProduct = (id: string) => {
  router.push("/product/" + id);
};
</script>

<template>
  <div class="layout-wrapper py-10">
    <VRow>
      <VCol cols="12" class="d-block d-md-none">
        <ShopSideBarDrawer
          v-model:tab-index="tabIndex"
          v-model:is-drawer-open="isDrawerOpen"
        ></ShopSideBarDrawer>
      </VCol>

      <VCol cols="3" class="d-none d-md-block position-relative">
        <ShopSideBar v-model:tab-index="tabIndex"></ShopSideBar>
      </VCol>
      <VCol cols="12" md="9">
        <VTabsWindow v-model="tabIndex" class="disable-tab-transition">
          <VTabsWindowItem :value="0">
            <VRow>
              <VCol
                cols="12"
                sm="6"
                lg="3"
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
