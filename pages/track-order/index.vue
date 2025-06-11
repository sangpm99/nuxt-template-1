<script setup lang="ts"></script>

<template>
  <div class="layout-wrapper mt-5 mb-10 page">
    <h1 class="text-center mb-5">Track Order</h1>
    <p class="text-h2 text-center mb-0"></p>

    <p>
      To track your order please enter your Order ID in the box below and press
      the "Track" button. This was given to you on your receipt and in the
      confirmation email you should have received.
    </p>

    <VTextField
      density="compact"
      label="Order ID"
      placeholder="Found in your order confirmation email."
    ></VTextField>

    <VTextField
      density="compact"
      label="Billing email"
      placeholder="Email you used during checkout"
    ></VTextField>

    <VBtn>TRACK</VBtn>
  </div>
</template>
