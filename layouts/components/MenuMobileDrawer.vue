<script setup lang="ts">
const appConfig = useAppConfig();
import navItems from "@/navigation/horizontal/index";
import type { Navbar } from "@/types/layout";

interface Props {
  isDrawerOpen: boolean;
}
interface Emit {
  (e: "update:isDrawerOpen", value: boolean): void;
  (e: "submit"): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const router = useRouter();
const categories = appConfig.header.menu.shop;

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit("update:isDrawerOpen", val);
};

const onNavigation = (to?: string) => {
  if (to) {
    return router.push(to);
  }
};

if (categories && categories.length) {
  const shopIndex = navItems.findIndex((item) => item.title === "Shop");
  if (shopIndex !== -1) {
    const navs: Navbar[] = categories.map((category) => {
      return {
        title: category.title,
        to: category.slug,
        public: true,
      };
    });
    navItems[shopIndex].children! = [...navs];
  }
}
</script>

<template>
  <VNavigationDrawer
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
    location="end"
    width="250"
    temporary
    border="none"
    class="scrollable-content"
    order="10"
  >
    <VCard flat>
      <VCardText class="pa-0 menu-mobile">
        <VExpansionPanels variant="accordion">
          <VExpansionPanel
            v-for="(navItem, index) in navItems"
            :key="index"
            :readonly="!navItem.children"
          >
            <VExpansionPanelTitle @click.stop="onNavigation(navItem?.to)">
              <template #actions="{ expanded }">
                <div v-if="navItem.children">
                  <VIcon
                    :icon="expanded ? 'mdi-menu-down' : 'mdi-menu-up'"
                  ></VIcon>
                </div>
              </template>
              <span>{{ navItem.title }}</span>
            </VExpansionPanelTitle>

            <VExpansionPanelText class="nav-children">
              <ul v-if="navItem.children" class="list-none">
                <li
                  v-for="(item, index) in navItem.children"
                  @click.stop="onNavigation(item?.to)"
                  :key="index"
                  class="pa-0"
                >
                  <VDivider></VDivider>
                  <p class="mb-0 pa-5 ms-5">{{ item.title }}</p>
                </li>
              </ul>
            </VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </VCardText>
    </VCard>
  </VNavigationDrawer>
</template>

<style lang="scss">
.menu-mobile {
  z-index: 100;

  .nav-children {
    & > div {
      padding: 0 !important;
    }
  }
}
</style>
