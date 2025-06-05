<script setup lang="ts">
import { getDateNow } from "@/utils";

import HeadingIcon from "@/components/HeadingIcon.vue";
import Gap from "@/components/Gap.vue";

const router = useRouter();

const onNavigationToShop = () => {
  router.push("/shop");
};
</script>

<template>
  <div class="layout-wrapper py-30">
    <VRow>
      <VCol cols="12" class="d-flex flex-column align-center">
        <HeadingIcon width="70px"></HeadingIcon>
        <p class="font-section-title">Back To Work</p>
      </VCol>

      <VCol cols="12" md="4">
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
              <li class="d-flex align-center">
                <VIcon icon="ri-arrow-drop-right-fill"></VIcon>
                Exclusive Custom Designs
              </li>
              <li class="d-flex align-center">
                <VIcon icon="ri-arrow-drop-right-fill"></VIcon>
                Premium, Long-Lasting Materials
              </li>
              <li class="d-flex align-center">
                <VIcon icon="ri-arrow-drop-right-fill"></VIcon>
                Tailored to Your Preferences
              </li>
            </ul>
          </VCol>

          <VCol col="12" md="6">
            <ul class="list-none" style="margin-left: -0.5rem">
              <li class="d-flex align-center">
                <VIcon icon="ri-arrow-drop-right-fill"></VIcon>
                Handcrafted with Precision
              </li>
              <li class="d-flex align-center">
                <VIcon icon="ri-arrow-drop-right-fill"></VIcon>
                Luxurious Gift-Ready Packaging
              </li>
              <li class="d-flex align-center">
                <VIcon icon="ri-arrow-drop-right-fill"></VIcon>
                Professional team, ready to support
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

        <VBtn @click="onNavigationToShop">Shop Now</VBtn>
      </VCol>

      <VCol cols="12" md="8">
        <NuxtImg
          src="/images/image-1.png"
          style="width: 100%; border-radius: 20px"
        ></NuxtImg>
      </VCol>

      <Gap></Gap>

      <VCol cols="12" md="8">
        <NuxtImg
          src="/images/image-1.png"
          style="width: 100%; border-radius: 20px"
        ></NuxtImg>
      </VCol>

      <VCol cols="12" md="4">
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
              <li class="d-flex align-center">
                <VIcon icon="ri-arrow-drop-right-fill"></VIcon>
                Exclusive Custom Designs
              </li>
              <li class="d-flex align-center">
                <VIcon icon="ri-arrow-drop-right-fill"></VIcon>
                Premium, Long-Lasting Materials
              </li>
              <li class="d-flex align-center">
                <VIcon icon="ri-arrow-drop-right-fill"></VIcon>
                Tailored to Your Preferences
              </li>
            </ul>
          </VCol>

          <VCol col="12" md="6">
            <ul class="list-none" style="margin-left: -0.5rem">
              <li class="d-flex align-center">
                <VIcon icon="ri-arrow-drop-right-fill"></VIcon>
                Handcrafted with Precision
              </li>
              <li class="d-flex align-center">
                <VIcon icon="ri-arrow-drop-right-fill"></VIcon>
                Luxurious Gift-Ready Packaging
              </li>
              <li class="d-flex align-center">
                <VIcon icon="ri-arrow-drop-right-fill"></VIcon>
                Professional team, ready to support
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

        <VBtn @click="onNavigationToShop">Shop Now</VBtn>
      </VCol>
    </VRow>
  </div>
</template>
