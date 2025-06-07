<script setup lang="ts">
const appConfig = useAppConfig();
import { useDisplay } from "vuetify";
import { getTimeNow, formatTimeStamp } from "@/utils";

const { smAndDown } = useDisplay();
import HeadingIcon from "@/components/HeadingIcon.vue";

const { blogs } = appConfig.page.home;
</script>

<template>
  <div class="layout-wrapper py-30 blogs">
    <VRow>
      <VCol cols="12" class="d-flex flex-column align-center mb-5">
        <HeadingIcon width="70px" color="white"></HeadingIcon>
        <p class="font-section-title text-center">Blogs</p>
      </VCol>

      <VCol cols="12">
        <VRow>
          <VCol cols="4" v-for="(blog, index) in blogs" :key="blog.id">
            <VCard>
              <VCardText class="pa-2" style="height: 300px">
                <NuxtImg :src="blog.featuredImage" class="zoom-in"></NuxtImg>
              </VCardText>
              <VCardText class="px-3 pt-0 d-flex flex-column ga-3">
                <h3>{{ blog.title }}</h3>
                <p>{{ blog.summary }} [...]</p>
                <p class="text-end">
                  {{
                    formatTimeStamp(getTimeNow() - 24 * 60 * 60 * 1000 * index)
                  }}
                </p>
                <VBtn>Read More</VBtn>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
.blogs {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
