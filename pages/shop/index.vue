<script setup lang="ts">
const appConfig = useAppConfig();
import { convertToNumber } from "@/utils/formatters";

import { useProductStore } from "@/stores/product";
import type { Product } from "@/types/product";

import ProductCard from "@/components/ProductCard.vue";
import ShopSideBar from "@/views/pages/shop/ShopSideBar/ShopSideBar.vue";
import ShopSideBarDrawer from "@/views/pages/shop/ShopSideBar/ShopSideBarDrawer.vue";

const { categories } = appConfig;
const productStore = useProductStore();
const { filter } = storeToRefs(productStore);
const allProducts: Product[] = categories
  .map((category) => category.products.map((product) => product as Product))
  .flat(1);

const router = useRouter();
const route = useRoute();
const tabIndex = ref<string>("0");
const isDrawerOpen = ref<boolean>(false);
const sortBy: string[] = [
  "default",
  "popularity",
  "averageRating",
  "latest",
  "priceLowToHigh",
  "priceHighToLow",
];

const onNavigateToProduct = (id: string) => {
  router.push("/product/" + id);
};

const setupFiltersFromRoute = () => {
  if (route.query?.searchValue) {
    filter.value = {
      ...filter.value,
      searchValue: route.query.searchValue as string,
    };
  }
  if (route.query?.["price[min]"]) {
    filter.value = {
      ...filter.value,
      price: {
        ...(filter.value?.price ?? {}),
        min: convertToNumber(route.query["price[min]"]),
      },
    };
  }
  if (route.query?.["price[max]"]) {
    filter.value = {
      ...filter.value,
      price: {
        ...(filter.value?.price ?? {}),
        max: convertToNumber(route.query["price[max]"]),
      },
    };
  }
  if (route.query?.category) {
    filter.value = {
      ...filter.value,
      category: route.query.category as string,
    };
  }
  if (route.query?.sort) {
    filter.value = {
      ...filter.value,
      sort: route.query.sort as string,
    };
  }
  if (route.query?.pageIndex) {
    filter.value = {
      ...filter.value,
      pageIndex: convertToNumber(route.query.pageIndex),
    };
  }
  if (route.query?.pageSize) {
    filter.value = {
      ...filter.value,
      pageSize: convertToNumber(route.query.pageSize),
    };
  }
};

onMounted(() => {
  setupFiltersFromRoute();
});
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
