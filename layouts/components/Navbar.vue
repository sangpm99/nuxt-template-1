<script setup lang="ts">
const appConfig = useAppConfig();
import navItems from "@/navigation/horizontal/index";
import type { Navbar } from "@/types/layout";

interface Emit {
  (e: "open:navbar"): void;
}
const emit = defineEmits<Emit>();

const router = useRouter();
const logo = appConfig.header.logo;

const onNavigation = (to?: string) => {
  if (to) {
    return router.push(to);
  }
};

const categories = appConfig.header.menu.shop;

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
  <div class="layout-header-navbar">
    <VRow no-gutters class="d-flex justify-space-between">
      <VCol cols="auto">
        <NuxtImg
          :src="logo"
          @click="onNavigation('/')"
          class="cursor-pointer"
        ></NuxtImg>
      </VCol>
      <VCol class="d-none d-md-flex align-center justify-center">
        <ul class="d-flex list-none">
          <li
            v-for="(navItem, index) in navItems"
            :key="index"
            class="position-relative px-3 nav-item cursor-pointer"
            @click="onNavigation(navItem?.to)"
          >
            <div class="d-flex align-center">
              <span>{{ navItem.title }}</span>
              <VIcon
                v-if="navItem.children"
                icon="ri-arrow-down-s-line"
                color="primary"
                size="15"
              ></VIcon>
            </div>

            <ul v-if="navItem.children" class="nav-children list-none">
              <VCard>
                <VCardText class="pa-0">
                  <li
                    v-for="(item, index) in navItem.children"
                    :key="index"
                    :class="
                      index !== navItem.children.length - 1
                        ? 'border-bottom'
                        : ''
                    "
                    class="d-flex align-center cursor-pointer"
                    @click.stop="onNavigation(item?.to)"
                  >
                    <VIcon icon="ri-arrow-right-s-fill" color="primary"></VIcon>
                    <span>{{ item.title }}</span>
                  </li>
                </VCardText>
              </VCard>
            </ul>
          </li>
        </ul>
      </VCol>
      <VCol cols="2" class="d-none d-md-flex justify-end align-center ga-4">
        <VCard>
          <VCardText class="pa-2">
            <VIcon icon="ri-search-line" color="primary"></VIcon>
          </VCardText>
        </VCard>

        <VCard>
          <VCardText class="pa-2">
            <VIcon icon="ri-shopping-bag-line" color="primary"></VIcon>
          </VCardText>
        </VCard>

        <VCard>
          <VCardText class="pa-2">
            <VIcon icon="ri-user-3-line" color="primary"></VIcon>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="auto" class="d-flex d-md-none align-center">
        <VBtn
          icon="ri-menu-line"
          variant="text"
          @click="emit('open:navbar')"
          aria-label="Open menu"
        ></VBtn>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
.layout-header-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  z-index: 100;
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);

  img {
    width: calc(var(--header-height) - 8px);
  }

  li.nav-item {
    cursor: pointer;
    z-index: 101;

    div > i {
      transition: transform 0.25s;
    }

    ul.nav-children {
      padding-top: calc(var(--header-height) / 2);
      position: absolute;
      min-width: var(--min-nav-width);
      z-index: 102;
      opacity: 0;
      transition: all 0.25s;
      transform: translateY(2rem);
      visibility: hidden;

      li {
        padding: 0.4rem 0.2rem;
        cursor: pointer;

        i {
          transition: all 0.25s ease;
        }

        &:hover {
          background-color: rgb(238, 238, 238);

          i {
            margin-left: -1rem;
            opacity: 0;
          }
        }
      }

      li.border-bottom {
        border-bottom: 1px solid #ccc;
      }
    }

    &:hover {
      & > ul.nav-children {
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
      }

      & > div > i {
        transform: rotate(-180deg);
      }
    }
  }
}
</style>
