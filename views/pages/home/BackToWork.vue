<script setup lang="ts">
import { getDateNow } from "@/utils";
const appConfig = useAppConfig();

import HeadingIcon from "@/components/HeadingIcon.vue";
import Gap from "@/components/Gap.vue";

const router = useRouter();
const { images } = appConfig.page.home.backToWork;

const onNavigationToShop = () => {
  router.push("/shop");
};
</script>

<template>
  <div class="layout-wrapper back-to-work padding-section">
    <VRow>
      <VCol cols="12" class="d-flex flex-column align-center">
        <HeadingIcon width="70px"></HeadingIcon>
        <p class="font-section-title text-center">Back To Work</p>
      </VCol>

      <VCol cols="12" md="5">
        <p class="font-title">Personalized Creations</p>
        <p>
          <b>{{ getDateNow() }}</b>
        </p>
        <p class="font-subtitle">
          Every piece tells your story. We turn your vision into a one-of-a-kind
          masterpiece. Meticulously crafted, deeply personal—just for you.
        </p>

        <VDivider class="my-5"></VDivider>

        <VRow>
          <VCol col="12" md="6">
            <ul class="list-none" style="margin-left: -0.5rem">
              <li>
                <VRow dense>
                  <VCol cols="auto">
                    <VIcon icon="ri-arrow-drop-right-fill" class="mb-1"></VIcon>
                  </VCol>
                  <VCol>Exclusive Custom Designs. </VCol>
                </VRow>
              </li>
              <li>
                <VRow dense>
                  <VCol cols="auto">
                    <VIcon icon="ri-arrow-drop-right-fill" class="mb-1"></VIcon>
                  </VCol>
                  <VCol>Premium, Long-Lasting Materials. </VCol>
                </VRow>
              </li>
              <li>
                <VRow dense>
                  <VCol cols="auto">
                    <VIcon icon="ri-arrow-drop-right-fill" class="mb-1"></VIcon>
                  </VCol>
                  <VCol>Tailored to Your Preferences. </VCol>
                </VRow>
              </li>
            </ul>
          </VCol>

          <VCol col="12" md="6">
            <ul class="list-none" style="margin-left: -0.5rem">
              <li>
                <VRow dense>
                  <VCol cols="auto">
                    <VIcon icon="ri-arrow-drop-right-fill" class="mb-1"></VIcon>
                  </VCol>
                  <VCol>Handcrafted with Precision. </VCol>
                </VRow>
              </li>
              <li>
                <VRow dense>
                  <VCol cols="auto">
                    <VIcon icon="ri-arrow-drop-right-fill" class="mb-1"></VIcon>
                  </VCol>
                  <VCol>Luxurious Gift-Ready Packaging. </VCol>
                </VRow>
              </li>
              <li>
                <VRow dense>
                  <VCol cols="auto">
                    <VIcon icon="ri-arrow-drop-right-fill" class="mb-1"></VIcon>
                  </VCol>
                  <VCol>Professional team, ready to support. </VCol>
                </VRow>
              </li>
            </ul>
          </VCol>
        </VRow>

        <VDivider class="my-5"></VDivider>

        <VRow>
          <VCol col="12" md="6">
            <h3>Starting From</h3>
            <p>$10 / product</p>
          </VCol>
          <VCol col="12" md="6">
            <h3>Customize</h3>
            <p>Contact for a personalized quote</p>
          </VCol>
        </VRow>

        <VDivider class="my-5"></VDivider>

        <VCol
          cols="12"
          class="pa-0 d-flex d-md-block justify-center justify-md-start"
        >
          <VBtn @click="onNavigationToShop">Shop Now</VBtn>
        </VCol>
      </VCol>

      <VCol cols="12" md="7" class="py-1 py-md-3">
        <NuxtImg :src="images[0]" class="image"></NuxtImg>
      </VCol>

      <Gap class="d-none d-md-block"></Gap>

      <VCol cols="12" md="7" class="py-1 py-md-3">
        <NuxtImg :src="images[1]" class="image"></NuxtImg>
      </VCol>

      <VCol cols="12" md="5">
        <p class="font-title">Your Story, Your Style</p>
        <p>
          <b>{{ getDateNow() }}</b>
        </p>
        <p class="font-subtitle">
          Turn everyday items into cherished keepsakes. Handcrafted accessories
          that celebrate moments, relationships, and passions—uniquely yours.
        </p>

        <VDivider class="my-5"></VDivider>

        <VRow>
          <VCol col="12" md="6">
            <ul class="list-none" style="margin-left: -0.5rem">
              <li>
                <VRow dense>
                  <VCol cols="auto">
                    <VIcon icon="ri-arrow-drop-right-fill" class="mb-1">
                    </VIcon>
                  </VCol>
                  <VCol>
                    Personalization: Names, dates, hand-painted icons
                  </VCol>
                </VRow>
              </li>
              <li>
                <VRow dense>
                  <VCol cols="auto">
                    <VIcon icon="ri-arrow-drop-right-fill" class="mb-1"></VIcon>
                  </VCol>
                  <VCol> Engraving: Quotes, logos, QR codes </VCol>
                </VRow>
              </li>
              <li>
                <VRow dense>
                  <VCol cols="auto">
                    <VIcon icon="ri-arrow-drop-right-fill" class="mb-1"></VIcon>
                  </VCol>
                  <VCol>Perfect for: Holidays, weddings, milestones </VCol>
                </VRow>
              </li>
            </ul>
          </VCol>

          <VCol col="12" md="6">
            <ul class="list-none" style="margin-left: -0.5rem">
              <li>
                <VRow dense>
                  <VCol cols="auto">
                    <VIcon icon="ri-arrow-drop-right-fill" class="mb-1"></VIcon>
                  </VCol>
                  <VCol
                    >Instant Gift-Ready: Packaged in luxury boxes with tissue
                    paper.
                  </VCol>
                </VRow>
              </li>
              <li>
                <VRow dense>
                  <VCol cols="auto">
                    <VIcon icon="ri-arrow-drop-right-fill" class="mb-1"></VIcon>
                  </VCol>
                  <VCol>10,000+ Design Templates: Or start from scratch. </VCol>
                </VRow>
              </li>
              <li>
                <VRow dense>
                  <VCol cols="auto">
                    <VIcon icon="ri-arrow-drop-right-fill" class="mb-1"></VIcon>
                  </VCol>
                  <VCol>Fast Shipping: On orders over the world. </VCol>
                </VRow>
              </li>
            </ul>
          </VCol>
        </VRow>

        <VDivider class="my-5"></VDivider>

        <VRow>
          <VCol col="12" md="6">
            <h3>Delivery Quickly</h3>
            <p>5-10 days (or faster)</p>
          </VCol>
          <VCol col="12" md="6">
            <h3>Personalize</h3>
            <p>Choose your style</p>
          </VCol>
        </VRow>

        <VDivider class="my-5"></VDivider>

        <VCol
          cols="12"
          class="pa-0 d-flex d-md-block justify-center justify-md-start"
        >
          <VBtn @click="onNavigationToShop">Shop Now</VBtn>
        </VCol>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
.back-to-work {
  .image {
    width: 100%;
    height: 550px;
    border-radius: 20px;
    object-fit: cover;
    object-position: bottom;
  }
}
</style>
