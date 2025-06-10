<script setup lang="ts">
const appConfig = useAppConfig();
const { title } = appConfig;
</script>

<template>
  <div v-if="title" class="layout-wrapper mt-5 mb-10 page">
    <VRow>
      <VCol cols="12">
        <h1 class="text-center">Billing Terms and Conditions</h1>

        <h2 class="mb-2">Payment Methods</h2>
        <p>
          We offer convenient payment methods including VISA, MasterCard,
          American Express, and PayPal at {{ title }}. Please note that we do
          not accept any other payment methods.
        </p>
        <h2 class="mb-2">Time of Payment</h2>
        <p>
          To facilitate the necessary arrangements before printing and delivery,
          purchasers will be billed at the time of placing their order. This
          ensures the smooth execution of your order, including the preparation
          of User Content.
        </p>
        <p>
          When completing a purchase on {{ title }}, you will need to provide
          information about your credit card or payment method. By doing this,
          you attest to the accuracy of the information supplied and your
          authority to use the payment method.
        </p>
        <h2 class="mb-2">Payment Process</h2>
        <p>To complete your order, please follow these simple steps:</p>
        <h2 class="mb-2">Fill in the Shipping Information:</h2>
        <ul class="ms-5">
          <li>
            <p>
              Provide your contact information, including your email address for
              order updates.
            </p>
          </li>
          <li>
            <p>
              Enter the shipping address where you wish to receive the package,
              ensuring accuracy for swift delivery.
            </p>
          </li>
          <li>
            <p>
              Opt for the “Ship a difference address” option if necessary, and
              enter a different billing address, if applicable.
            </p>
          </li>
        </ul>
        <h2 class="mb-2">Select the Payment Method:</h2>
        <ul class="ms-5">
          <li><p>Choose your preferred payment method.</p></li>
          <li><p>Fill in the required payment information.</p></li>
          <li>
            <p>Click “Place your order” to complete the transaction.</p>
          </li>
        </ul>
        <p>
          If you experience any problems making your payment or discover that
          the designated payment methods aren’t working when you check out,
          don’t hesitate to get in touch with us by sending an email to
          [site_email].
        </p>
        <h2 class="mb-2">Payment Security</h2>
        <p>
          We prioritize the security and confidentiality of your payment
          information when you make purchases on our website. When you choose to
          pay via Stripe or PayPal, you can rest assured that your payment
          details are handled securely through their respective platforms.
        </p>
        <ul class="ms-5">
          <li>
            <p>
              Stripe: Your credit card information is encrypted and processed
              securely by Stripe, a trusted payment gateway that adheres to the
              highest industry standards for data protection. We do not collect
              or store your credit card details on our servers.
            </p>
          </li>
          <li>
            <p>
              PayPal: PayPal provides a secure and encrypted platform for
              processing payments. Your payment details are safeguarded by
              PayPal’s advanced security measures, and we do not have access to
              your credit card information.
            </p>
          </li>
        </ul>
        <p>
          We do not collect, store, or have access to your credit card details
          at any point during the transaction process. Your privacy and security
          are of utmost importance to us, and we take all necessary precautions
          to ensure the protection of your personal and financial information.
        </p>
        <p>
          By choosing to make a purchase on our website using Stripe or PayPal,
          you acknowledge and agree to their respective terms of service and
          privacy policies regarding payment processing and data security.
        </p>
        <p>
          If you have any concerns or questions about the security of your
          payment information, please contact us at
          <a rel="noreferrer">[site_email]</a> for assistance.
        </p>
        <h2 class="mb-2">Pricing and Taxes</h2>
        <p>
          Prices and payment details of products are specified on the website.
          Payment can be made by credit card, debit card, and/or as further
          described in the store. Prices are shown exclusive of VAT, import
          duties, and other government-imposed taxes, duties, and levies. You
          will be responsible for the payment of such import duties and taxes.
          It should be noted that {{ title }} has no control over these charges.
        </p>
      </VCol>
    </VRow>
  </div>
</template>
