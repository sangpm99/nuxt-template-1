<script setup lang="ts">
import HeadingIcon from "@/components/HeadingIcon.vue";

const router = useRouter();
const tabIndex = ref<number>(1);

const onNavigateToProduct = () => {
  router.push("/products");
};
</script>

<template>
  <div class="layout-wrapper py-30 our-products">
    <VRow>
      <VCol cols="12" class="d-flex flex-column align-center mb-5">
        <HeadingIcon width="70px" color="white"></HeadingIcon>
        <p class="font-section-title">Products</p>
      </VCol>

      <VCol cols="12">
        <ClientOnly>
          <VTabs
            v-model="tabIndex"
            bg-color="primary"
            align-tabs="center"
            color="white"
          >
            <VTab :value="1">T-Shirt</VTab>
            <VTab :value="2">Hoodie</VTab>
            <VTab :value="3">Sweater</VTab>
            <VTab :value="4">Cap</VTab>
            <VTab :value="5">Tote Bag</VTab>
          </VTabs>

          <VTabsWindow v-model="tabIndex">
            <VTabsWindowItem v-for="n in 5" :value="n">
              <Gap></Gap>
              <VRow>
                <VCol
                  cols="12"
                  sm="6"
                  md="3"
                  v-for="(image, index) in 8"
                  :key="index"
                >
                  <VCard @click="onNavigateToProduct" class="bg-gray">
                    <VCardText class="pa-2">
                      <div class="product-image zoom-in">
                        <NuxtImg
                          class="image"
                          src="/images/image-1.png"
                        ></NuxtImg>
                      </div>
                      <p class="mt-2 two-lines">
                        By His Grace | embroidered Christian hoodie vintage,
                        Christian Men Gift, faith streetwear, aesthetic
                        Christian gym apparel
                      </p>
                      <p class="d-flex ga-4">
                        <span class="text-error font-weight-bold">$ 24.99</span>
                        <span class="text-decoration-line-through text-sub"
                          >$ 46.98</span
                        >
                      </p>
                    </VCardText>
                  </VCard>
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

<style lang="scss" scoped>
.our-products {
  .product-image {
    height: 400px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
