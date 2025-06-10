<script setup lang="ts">
const appConfig = useAppConfig();
import { getTimeNow, formatTimeStamp } from "@/utils";

const router = useRouter();
import HeadingIcon from "@/components/HeadingIcon.vue";

const { blogs } = appConfig.page.home;

const onNavigateToBlog = (id: string) => {
  router.push("/blog/" + id);
};
</script>

<template>
  <div class="layout-wrapper blogs mb-10 mb-md-5">
    <VRow>
      <VCol cols="12" class="d-flex flex-column align-center mb-5">
        <HeadingIcon width="70px" color="white"></HeadingIcon>
        <p class="font-section-title text-center">Blogs</p>
      </VCol>

      <VCol cols="12">
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
            v-for="(blog, index) in blogs"
            :key="blog.id"
          >
            <VCard class="h-100 position-relative">
              <VCardText class="pa-2" style="height: 300px">
                <NuxtImg
                  :src="blog.featuredImage"
                  class="cursor-pointer"
                  @click="onNavigateToBlog(blog.id)"
                  :alt="blog.title"
                ></NuxtImg>
              </VCardText>
              <VCardText class="px-3 pt-0 d-flex flex-column ga-3 blog-content">
                <h3>{{ blog.title }}</h3>
                <p>{{ blog.summary }} [...]</p>
                <div class="position-absolute bottom-0 left-0 right-0 pa-2">
                  <p class="text-end">
                    {{
                      formatTimeStamp(
                        getTimeNow() - 24 * 60 * 60 * 1000 * index
                      )
                    }}
                  </p>
                  <VBtn block @click="onNavigateToBlog(blog.id)"
                    >Read More</VBtn
                  >
                </div>
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
    transition: opacity 0.25s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  .blog-content {
    padding-bottom: 70px;
  }
}
</style>
