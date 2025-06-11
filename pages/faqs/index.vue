<script setup lang="ts">
const appConfig = useAppConfig();
const { title, contact } = appConfig;
</script>

<template>
  <div v-if="title" class="layout-wrapper mt-5 mb-10 page">
    <h1 class="text-center mb-5">Frequently Asked Questions</h1>
    <h2 class="mb-1">1. What is your return policy?</h2>
    <p>
      We offer a 30-day return policy to our customers. Items must be defective
      or damaged to qualify for a return. Please ensure that all returns are
      sent via certified mail and include the original packaging and invoice.
      For more details, please refer to our
      <a href="/return-refund-policy">Return &amp; Refund Policy</a>.
    </p>
    <h2 class="mb-1">2. How do I request a return?</h2>
    <p>To request a return, please follow these steps:</p>
    <ul class="ms-5">
      <li>
        <p>
          Submit a return request within 30 days after receiving your goods.
        </p>
      </li>
      <li>
        <p>
          Take clear photos/videos of the product and its packaging, including
          the QR code/Cover Package.
        </p>
      </li>
      <li>
        <p>
          Email us at
          <a :href="`mailto:${contact.email.value}`">{{
            contact.email.label
          }}</a
          >, stating your reason for a replacement/refund and attaching the
          photos/videos.
        </p>
      </li>
      <li>
        <p>We will respond within 24 hours with further instructions.</p>
      </li>
    </ul>
    <h2 class="mb-1">3. Who pays for the return shipping costs?</h2>
    <p>
      You are responsible for paying the shipping costs for returning your item.
      Shipping costs are non-refundable. If you receive a refund, the cost of
      return shipping will be deducted from your refund. However, if an item is
      damaged or defective, we will refund the entire initial amount you paid,
      but you will still be responsible for the return shipping cost.
    </p>
    <h2 class="mb-1">4. How long does it take to receive a refund?</h2>
    <p>
      Once your return is received and inspected, we will send you an email to
      notify you that we have received your returned item. We will also notify
      you of the approval or rejection of your refund. If approved, your refund
      will be processed, and a credit will automatically be applied to your
      credit card or original method of payment. For PayPal, the money will be
      refunded immediately after we confirm via email. For debit/credit cards,
      the refund amount will show in your account within 5 to 10 days depending
      on your bank.
    </p>
    <h2 class="mb-1">
      <strong>5. What should I do if I haven’t received my refund?</strong>
    </h2>
    <p>
      If it has been more than 10 business days since we approved your refund
      and you still have not received your money, please contact us either by
      emailing us at
      <a :href="`mailto:${contact.email.value}`">{{ contact.email.label }}</a
      >.
    </p>
    <h2 class="mb-1">6. Can I cancel or change my order?</h2>
    <p>
      If you cancel your order within 12 hours of placing it, you may be able to
      change or cancel the order. Please contact us by emailing us at
      <a :href="`mailto:${contact.email.value}`">{{ contact.email.label }}</a
      >. After 12 hours, you will lose the right to cancel the order as it will
      have already been processed for shipping.
    </p>
    <h2 class="mb-1">7. What if my order is not fulfilled?</h2>
    <p>
      If we are unable to fulfill your order, we will notify you as soon as
      possible. Upon your confirmation, we will issue a full refund to your
      original method of payment.
    </p>
    <h2 class="mb-1">
      <strong
        >8. What should I do if I haven’t received my parcel within 15
        days?</strong
      >
    </h2>
    <p>
      If you haven’t received your parcel within 15 days, please contact the
      shipping courier with your tracking code. If you need further assistance
      or have any unanswered questions, please contact our team via email at
      <a :href="`mailto:${contact.email.value}`">{{ contact.email.label }}</a
      >.
    </p>
    <h2 class="mb-1">9. How do exchanges work?</h2>
    <p>
      We only exchange items if they are the wrong item or defective. If you
      consider that a product is defective, please promptly contact us at
      <a :href="`mailto:${contact.email.value}`">{{ contact.email.label }}</a>
      with details of the product and the defect.
    </p>
    <h2 class="mb-1">10. What is the shipment processing time?</h2>
    <p>
      All orders are processed within 2-3 business days. Shipping time will
      depend on locations, availability of the item, and local jurisdiction
      regulations. Orders are not shipped or delivered on weekends or holidays.
    </p>
    <h2 class="mb-1">
      <strong
        >11. What should I do if my tracking says "No Information Available at
        the Moment"?</strong
      >
    </h2>
    <p>
      It’s not uncommon for no tracking information to show until your package
      has been scanned in by the respective carriers. It might remain "blank"
      for up to a week after you receive your tracking link. If your order was
      placed more than a week ago and there is still no information on your
      tracking number, please contact us.
    </p>
    <h2 class="mb-1">
      <strong>12. What happens if my order is damaged during shipping?</strong>
    </h2>
    <p>
      {{ title }} is not liable for any products damaged or lost during
      shipping. If you received your order damaged, please contact the shipment
      carrier to file a claim. Please save all packaging materials and damaged
      goods before filing a claim.
    </p>
    <h2 class="mb-1">13. Are there any restrictions on return shipment?</h2>
    <p>
      Our delivery partners will only accept {{ title }} articles that are
      returned in their original packaging. Please do not include any other
      items in the package as these could violate shipping regulations, and your
      return may then not be accepted by our delivery partner/us.
    </p>
    <h2 class="mb-1">
      <strong>14. Who is responsible for customs, duties, and taxes?</strong>
    </h2>
    <p>
      {{ title }} is not responsible for any customs and taxes applied to your
      order. All fees imposed during or after shipping are the responsibility of
      the customer (tariffs, taxes, etc.). Import taxes, duties, and related
      customs fees may be charged once your order arrives at its final
      destination, determined by your local customs office. Payment of these
      charges and taxes is your responsibility and will not be covered by us. We
      are not responsible for delays caused by the customs department in your
      country. For further details of charges, please contact your local customs
      office.
    </p>
    <h2 class="mb-1">15. What happens if I provide the wrong address?</h2>
    <p>
      If you provide an address that is considered insufficient by the courier,
      the shipment will be returned to our facility. In some cases, the order
      had arrived at the nearest post office to the buyer’s location because of
      insufficient address. Buyers can contact a nearby post office or reach out
      to pick up their order.
    </p>
  </div>
</template>
