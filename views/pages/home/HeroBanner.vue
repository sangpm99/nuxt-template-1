<script setup lang="ts">
const router = useRouter();

const onNavigationToShop = () => {
  router.push({ name: "shop" });
};
</script>

<template>
  <div class="herro-banner position-relative">
    <NuxtImg src="/images/banner-1.png"></NuxtImg>

    <div
      class="content-box position-absolute top-0 left-0 right-0 bottom-0 d-flex flex-column justify-center align-center"
    >
      <div class="d-flex flex-column justify-center align-center text-white">
        <p class="font-heading">Your Imagination</p>
        <p class="font-heading">Our Creation</p>

        <p class="mt-3 mb-5 px-5">
          Design one-of-a-kind pieces that reflect your style — printed and
          delivered with love.
        </p>

        <VBtn
          color="white"
          variant="outlined"
          size="x-large"
          @click="onNavigationToShop"
          >Shop Now</VBtn
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.herro-banner {
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 20px;
  overflow: hidden;
  height: calc(100vh - var(--header-height));

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .content-box {
    background-color: rgba(238, 238, 238, 0.3);

    .font-heading {
      letter-spacing: 1rem;
      font-size: 600%;
      font-weight: 600;
      line-height: 100px;

      @media (max-width: 750px) {
        font-size: 400%;
        line-height: 70px;
        letter-spacing: 0.75rem;
      }

      @media (max-width: 600px) {
        font-size: 300%;
        line-height: 50px;
        letter-spacing: 0.5rem;
      }

      @media (max-width: 550px) {
        font-size: 200%;
        line-height: 40px;
        letter-spacing: 0.5rem;
      }

      @media (max-width: 440px) {
        font-size: 150%;
        line-height: 40px;
        letter-spacing: 0.25rem;
      }
    }
  }
}
</style>
