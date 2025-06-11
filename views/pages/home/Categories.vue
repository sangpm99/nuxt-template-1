<script setup lang="ts">
const appConfig = useAppConfig();
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { useDisplay } from "vuetify";

import HeadingIcon from "@/components/HeadingIcon.vue";

const { lgAndUp, md, sm } = useDisplay();
const router = useRouter();
const { categories } = appConfig;
const perPage = computed(() => {
  switch (categories.length) {
    case 0: {
      return 0;
    }
    case 1: {
      return 1;
    }
    case 2: {
      if (lgAndUp.value) return 2;
      return 1;
    }
    case 3: {
      if (lgAndUp.value) return 3;
      if (sm.value) return 2;
      return 1;
    }
    default: {
      if (lgAndUp.value) return 4;
      if (md.value) return 3;
      if (sm.value) return 2;
      return 1;
    }
  }
});

const onNavigateProductCategory = (slug: string) => {
  router.push(`/product-category/${slug}`);
};
</script>

<template>
  <div class="layout-wrapper our-categories bg-primary padding-section mt-5">
    <VRow>
      <VCol cols="12" class="d-flex flex-column align-center mb-5">
        <HeadingIcon width="70px" color="white"></HeadingIcon>
        <p class="font-section-title text-center">Our Categories</p>
      </VCol>

      <VCol cols="12">
        <Splide
          :options="{
            type: 'loop',
            perPage: perPage,
            perMove: 1,
            gap: 100,
          }"
          aria-label="Our Categories"
          class="cursor-grab"
        >
          <SplideSlide v-for="(category, index) in categories" :key="index">
            <div class="position-relative overflow-hidden card">
              <NuxtImg
                :src="category.image"
                class="image"
                :alt="category.title"
              ></NuxtImg>
              <div class="overlay">
                <h3 class="category-title">{{ category.title }}</h3>
                <VBtn
                  class="category-button"
                  color="white"
                  variant="outlined"
                  @click="onNavigateProductCategory(category.slug)"
                  >Shop Now</VBtn
                >
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
.our-categories {
  .card {
    img {
      transition: transform 0.25s ease-in-out;
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }

  .image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
  }

  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1.5rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));

    .category-title {
      font-size: 200%;
      margin-bottom: -4rem;
      transition: margin-bottom 0.25s ease-in-out;
    }

    .category-button {
      opacity: 0;
      transition: transform 0.25s ease-in-out;
      transition-delay: 0.1s;
      transform: translateY(200px);
    }

    &:hover {
      .category-title {
        margin-bottom: 0;
      }

      .category-button {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
</style>
