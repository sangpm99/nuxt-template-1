<script setup lang="ts">
const appConfig = useAppConfig();
const { title, contact } = appConfig;
</script>

<template>
  <div v-if="title" class="layout-wrapper mt-5 mb-10 page">
    <h1 class="text-center mb-5">Cancellation &amp; Changes</h1>
    <VRow>
      <VCol cols="12">
        <p>
          Thank you for purchasing our product from our website
          {{ title }}.
        </p>
        <p>
          In line with providing our customers with the best quality and client
          experience, we have established a considerate cancellation and changes
          policy.
        </p>
        <h2 class="mb-2">Order Cancellation</h2>
        <p>
          If you need to cancel your order, please do so within 12 hours of
          placing it. This will allow you to either change or cancel the order
          without any issues. Please contact us by emailing us at
          <a :href="`mailto:${contact.email.value}`">{{
            contact.email.label
          }}</a
          >. After 12 hours, you will lose the right to cancel the order as it
          will have already been processed for shipping.
        </p>
        <h2 class="mb-2">Order Changes</h2>
        <p>
          If you need to make changes to your order (e.g., address, size,
          color), please contact us within 12 hours of placing the order.
          Changes requested after 12 hours may not be possible as the order may
          have already been processed for shipping. Contact us at
          <a :href="`mailto:${contact.email.value}`">{{
            contact.email.label
          }}</a>
          to request changes.
        </p>
        <h2 class="mb-2">Unfulfilled Orders</h2>
        <p>
          If we are unable to fulfill your order, we will notify you as soon as
          possible. Upon your confirmation, we will issue a full refund to your
          original method of payment.
        </p>
        <h2 class="mb-2">Important Notes</h2>
        <ul class="ms-5">
          <li>
            <p>
              Timely Requests: All cancellation and change requests must be made
              within 12 hours of placing the order. Any requests made after this
              period may not be accommodated.
            </p>
          </li>
          <li>
            <p>
              Shipping Processed Orders: Once an order has been processed for
              shipping, cancellations and changes are no longer possible.
            </p>
          </li>
        </ul>
        <p>We appreciate your understanding and cooperation.</p>
      </VCol>
    </VRow>
  </div>
</template>
