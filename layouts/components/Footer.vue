<script setup lang="ts">
const appConfig = useAppConfig();
import { getCurrentYear } from "@/utils";

const { title, contact, header } = appConfig;
</script>

<template>
  <footer class="bg-primary mt-0 mt-sm-10">
    <div class="layout-wrapper padding-section">
      <VRow class="d-flex justify-lg-space-between">
        <VCol cols="12" sm="6" md="6" lg="auto">
          <h3 class="mb-3">{{ title }}</h3>
          <ul class="list-none">
            <li class="py-2" v-if="contact.email.value && contact.email.label">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <b>Email: </b>
              <a :href="`mailto:${contact.email.value}`">
                {{ contact.email.label }}
              </a>
            </li>

            <li class="py-2" v-if="contact.phone.value && contact.phone.label">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <b>Phone Number: </b>
              <a :href="'tel:' + contact.phone.value">
                {{ contact.phone.label }}
              </a>
            </li>

            <li class="py-2" v-if="contact.address">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <b>Address: </b>
              <span>{{ contact.address }}</span>
            </li>
          </ul>
        </VCol>

        <VCol cols="12" sm="6" md="6" lg="auto">
          <h3 class="mb-3">Categories</h3>
          <ul class="list-none">
            <li class="py-2">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink to="/about">About</NuxtLink>
            </li>

            <li class="py-2">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink to="/contact">Contact</NuxtLink>
            </li>

            <li class="py-2">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink to="/track-order">Track Order</NuxtLink>
            </li>

            <li class="py-2">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink to="/faqs">FAQs</NuxtLink>
            </li>

            <li class="py-2">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink to="/blogs">Blogs</NuxtLink>
            </li>
          </ul>
        </VCol>

        <VCol cols="12" sm="6" md="6" lg="auto">
          <h3 class="mb-3">Our Company</h3>
          <ul class="list-none">
            <li class="py-2" v-for="category in header.menu.shop">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink :to="category.slug">{{ category.title }}</NuxtLink>
            </li>
          </ul>
        </VCol>

        <VCol cols="12" sm="6" md="6" lg="auto">
          <h3 class="mb-3">Help Center</h3>
          <ul class="list-none">
            <li class="py-2">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
            </li>

            <li class="py-2">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink to="/terms-conditions">Terms & Conditions</NuxtLink>
            </li>

            <li class="py-2">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink to="/cancellation-changes"
                >Cancellation & Changes</NuxtLink
              >
            </li>

            <li class="py-2">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink to="/return-refund-policy"
                >Return & Refund Policy</NuxtLink
              >
            </li>

            <li class="py-2">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink to="/shipping-delivery">Shipping & Delivery</NuxtLink>
            </li>

            <li class="py-2">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink to="/billing-terms-conditions"
                >Billing Terms & Conditions</NuxtLink
              >
            </li>

            <li class="py-2">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink to="/copyright-policy">Copyright Policy</NuxtLink>
            </li>

            <li class="py-2">
              <VIcon icon="ri-arrow-drop-right-line"></VIcon>
              <NuxtLink to="/disclaimer">Disclaimer</NuxtLink>
            </li>
          </ul>
        </VCol>
      </VRow>
    </div>

    <Divider></Divider>

    <div class="layout-wrapper py-2">
      <div class="d-flex justify-space-between align-center">
        © {{ getCurrentYear() }}, {{ title }}. All Rights Reserved.

        <VChip variant="outlined">
          <VIcon icon="ri-paypal-line"></VIcon>
        </VChip>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  h3 {
    font-size: 200%;
    border-bottom: 1px solid;
  }

  ul {
    margin-left: -0.5rem;

    li {
      display: flex;
      align-content: center;

      a {
        transition: opacity 0.25s ease-in-out;

        &:hover {
          opacity: 0.4;
        }
      }
    }
  }
}
</style>
