<script setup lang="ts">
const appConfig = useAppConfig();

import { useProductStore } from "@/stores/product";

interface Props {
  tabIndex: string;
}
const props = defineProps<Props>();
interface Emit {
  (e: "update:tabIndex", value: string): void;
  (e: "update:isDrawerOpen", value: boolean): void;
}
const emit = defineEmits<Emit>();
const productStore = useProductStore();
const { filter } = storeToRefs(productStore);
const tabIndex = ref<string>(JSON.parse(JSON.stringify(props.tabIndex)));
const { categories } = appConfig;

const handleSearch = () => {
  emit("update:isDrawerOpen", false);
};

const handleUpdateTabIndex = (value: string) => {
  tabIndex.value = value;
  emit("update:tabIndex", tabIndex.value);
};

watch(
  () => props.tabIndex,
  () => {
    tabIndex.value = JSON.parse(JSON.stringify(props.tabIndex));
  }
);
</script>

<template>
  <VRow dense>
    <VCol cols="12" class="d-flex flex-column ga-3">
      <h3 class="py-2 border-b-primary">Search</h3>
      <div class="d-flex align-center ga-3">
        <VTextField
          placeholder="Hoodie, Shirt, ..."
          clearable
          v-model="filter.searchValue"
        ></VTextField>
        <VBtn
          icon="ri-search-line"
          class="rounded"
          size="small"
          @click="handleSearch"
        ></VBtn>
      </div>
    </VCol>

    <VCol cols="12">
      <h3 class="py-2 border-b-primary">Category</h3>
      <VList class="pa-0">
        <VListItem
          :key="0"
          :class="tabIndex === '0' ? 'bg-primary' : ''"
          min-height="30"
          @click="handleUpdateTabIndex('0')"
        >
          All Products
        </VListItem>

        <VListItem
          v-for="(category, index) in categories"
          :key="index + 1"
          :class="tabIndex === category.slug ? 'bg-primary' : ''"
          min-height="30"
          @click="handleUpdateTabIndex(category.slug)"
        >
          {{ category.title }}
        </VListItem>
      </VList>
    </VCol>

    <VCol cols="12" class="d-flex flex-column ga-3">
      <h3 class="py-2 border-b-primary">Price</h3>
      <div class="d-flex ga-4">
        <VTextField
          label="From"
          type="number"
          min="0"
          v-model="filter.price.min"
        ></VTextField>
        <VTextField
          label="To"
          type="number"
          min="0"
          v-model="filter.price.max"
        ></VTextField>
      </div>
      <VBtn @click="handleSearch">Apply</VBtn>
    </VCol>
  </VRow>
</template>
