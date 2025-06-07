<script setup lang="ts">
const appConfig = useAppConfig();
import { useDisplay } from "vuetify";

const { mdAndDown } = useDisplay();
import HeadingIcon from "@/components/HeadingIcon.vue";
import Divider from "@/components/Divider.vue";

const { testimonials } = appConfig.page.home;
</script>

<template>
  <div class="layout-wrapper py-30 bg-primary">
    <VRow>
      <VCol cols="12" class="d-flex flex-column align-center mb-5">
        <HeadingIcon width="70px" color="white"></HeadingIcon>
        <p class="font-section-title">Happy Customer Thoughts</p>
      </VCol>

      <VCol cols="12">
        <VRow>
          <VCol cols="12" md="4" v-for="(testimonial, index) in testimonials">
            <VRow>
              <VCol>
                <VRow>
                  <VCol cols="12">
                    <VRow>
                      <VCol>
                        <VRating
                          readonly
                          :length="5"
                          size="small"
                          density="compact"
                          :model-value="testimonial.rating"
                          active-color="warning"
                          color="warning"
                          half-increments
                        ></VRating>

                        <div style="min-height: calc(1rem * 6)">
                          <p>{{ testimonial.review }}</p>
                        </div>
                      </VCol>
                      <VCol cols="auto">
                        <VIcon
                          icon="mdi-format-quote-close-outline"
                          size="80"
                        ></VIcon>
                      </VCol>
                    </VRow>
                  </VCol>

                  <VCol cols="12">
                    <VRow>
                      <VCol cols="3">
                        <NuxtImg
                          :src="testimonial.image"
                          class="rounded-circle"
                          style="width: 100%"
                        ></NuxtImg>
                      </VCol>

                      <VCol cols="9">
                        <p>{{ testimonial.name }}</p>
                        <p>- {{ testimonial.position }} -</p>
                      </VCol>
                    </VRow>
                  </VCol>
                </VRow>
              </VCol>

              <VCol cols="12" md="auto">
                <Divider
                  :vertical="!mdAndDown"
                  color="white"
                  v-if="index !== testimonials.length - 1"
                ></Divider>
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </div>
</template>
