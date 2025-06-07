<script setup lang="ts">
const appConfig = useAppConfig();
import { useDisplay } from "vuetify";

const { smAndDown } = useDisplay();
import HeadingIcon from "@/components/HeadingIcon.vue";
import Divider from "@/components/Divider.vue";
import Gap from "@/components/Gap.vue";

const { testimonials } = appConfig.page.home;
</script>

<template>
  <div class="layout-wrapper py-30 bg-primary">
    <Gap class="d-none d-md-block"></Gap>
    <Gap class="d-none d-md-block"></Gap>
    <Gap class="d-none d-md-block"></Gap>
    <VRow>
      <VCol cols="12" class="d-flex flex-column align-center mb-5">
        <HeadingIcon width="70px" color="white"></HeadingIcon>
        <p class="font-section-title text-center">Happy Customer Thoughts</p>
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

                        <div>
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

                  <Divider
                    class="d-none d-md-block"
                    :vertical="false"
                    color="white"
                  ></Divider>

                  <VCol cols="12">
                    <VRow>
                      <VCol cols="3" sm="2" md="4" lg="3">
                        <NuxtImg
                          :src="testimonial.image"
                          class="rounded-circle"
                          style="width: 100%"
                        ></NuxtImg>
                      </VCol>

                      <VCol class="d-flex flex-column justify-center">
                        <h3>{{ testimonial.name }}</h3>
                        <p>- {{ testimonial.position }} -</p>
                      </VCol>
                    </VRow>
                  </VCol>
                </VRow>
              </VCol>

              <VCol cols="12" md="auto">
                <Divider
                  :vertical="!smAndDown"
                  color="white"
                  v-if="index !== testimonials.length - 1"
                ></Divider>
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VCol>
      <Gap class="d-none d-md-block"></Gap>
      <Gap class="d-none d-md-block"></Gap>
      <Gap class="d-none d-md-block"></Gap>
    </VRow>
  </div>
</template>
