<script setup lang="ts">
const appConfig = useAppConfig();
const { title, contact } = appConfig;
</script>

<template>
  <div v-if="title" class="layout-wrapper mt-5 mb-10 page">
    <h1 class="text-center mb-5">Disclaimer</h1>
    <p class="text-center text-h2"></p>

    <p>
      If you require any more information or have any questions about our site's
      disclaimer, please feel free to contact us by email at
      <a :href="`mailto:${contact.email.value}`">{{ contact.email.label }}</a
      >.
    </p>
    <p>
      All the information on this website - {{ title }} - is published in good
      faith and for general information purposes only. {{ title }} does not make
      any warranties about the completeness, reliability, and accuracy of this
      information. Any action you take upon the information you find on this
      website is strictly at your own risk. {{ title }} will not be liable for
      any losses and/or damages in connection with the use of our website.
    </p>
    <p>
      From our website, you can visit other websites by following hyperlinks to
      such external sites. While we strive to provide only quality links to
      useful and ethical websites, we have no control over the content and
      nature of these sites. These links to other websites do not imply a
      recommendation for all the content found on these sites. Site owners and
      content may change without notice and may occur before we have the
      opportunity to remove a link that may have gone 'bad'.
    </p>
    <p>
      Please be also aware that when you leave our website, other sites may have
      different privacy policies and terms that are beyond our control. Please
      be sure to check the Privacy Policies of these sites as well as their
      "Terms of Service" before engaging in any business or uploading any
      information.
    </p>
    <h2 class="mb-1">Product Review Disclaimer</h2>
    <p>
      The opinions expressed in customer reviews are solely those of the
      reviewers and do not represent the views of our company. We do not
      guarantee the accuracy or reliability of any reviews posted on our
      platform.
    </p>
    <h2 class="mb-1">Website Consent</h2>
    <p>
      By using our website, you hereby consent to our disclaimer and agree to
      its terms.
    </p>
    <h2 class="mb-1">Update</h2>
    <p>
      Should we update, amend or make any changes to this document, those
      changes will be prominently posted here.
    </p>
  </div>
</template>
