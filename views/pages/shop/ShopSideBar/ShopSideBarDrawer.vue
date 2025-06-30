<script setup lang="ts">
import { PerfectScrollbar } from "vue3-perfect-scrollbar";

import ShopSideBarFilter from "@/views/pages/shop/ShopSideBar/ShopSideBarFilter.vue";
import AppDrawerHeaderSection from "@/components/AppDrawerHeaderSection.vue";

interface Props {
  isDrawerOpen: boolean;
  tabIndex: string;
}
interface Emit {
  (e: "update:isDrawerOpen", value: boolean): void;
  (e: "update:tabIndex", value: string): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emit>();

const handleDrawerModelValueUpdate = (value: boolean) => {
  emit("update:isDrawerOpen", value);
};
</script>

<template>
  <div>
    <VBtn
      icon="ri-menu-line"
      variant="text"
      class="d-block d-md-none"
      @click="handleDrawerModelValueUpdate(true)"
    ></VBtn>

    <ClientOnly>
      <VNavigationDrawer
        :model-value="props.isDrawerOpen"
        width="400"
        temporary
        border="none"
        class="scrollable-content"
        order="10"
        @update:model-value="handleDrawerModelValueUpdate"
      >
        <AppDrawerHeaderSection
          title="Filter"
          @cancel="handleDrawerModelValueUpdate(false)"
        >
        </AppDrawerHeaderSection>

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
          <VCard flat v-if="isDrawerOpen">
            <VCardText>
              <ShopSideBarFilter
                :tab-index="props.tabIndex"
                @update:tab-index="(value) => emit('update:tabIndex', value)"
                @update:is-drawer-open="emit('update:isDrawerOpen', false)"
              ></ShopSideBarFilter>
            </VCardText>
          </VCard>
        </PerfectScrollbar>
      </VNavigationDrawer>
    </ClientOnly>
  </div>
</template>
