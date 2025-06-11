<script setup lang="ts">
const appConfig = useAppConfig();
const { title, contact } = appConfig;
</script>

<template>
  <div v-if="title" class="layout-wrapper mt-5 mb-10 page">
    <h1 class="text-center mb-5">Privacy Policy</h1>
    <p>
      This Privacy Policy describes how your personal information is collected,
      used, and shared when you visit or make a purchase from
      {{ title }}.
    </p>
    <p>
      Protecting your private information is our priority. This Statement of
      Privacy applies to {{ title }} and governs data collection and usage. We
      have developed this policy in order for you to understand how we collect,
      use, communicate and make use of personal information. The following
      outlines our privacy policy.
    </p>
    <p>
      Similar to other commercial websites, our website utilizes a standard
      technology called ‘cookies’ (see our cookies policy page for more
      information) and server logs to collect information about how our site is
      used. Information gathered through cookies and server logs may include the
      date and time of visits, the pages viewed, time spent at our site, and the
      websites visited just before and just after our own, as well as your IP
      address.
    </p>
    <h2 class="mb-1">Introduction</h2>
    <p>
      This Policy sets out the conditions under which we may process any
      information that we collect from you, or that you provide to us. It covers
      information that could identify you (“personal information”) and
      information that could not. In the context of the law and this notice,
      “process” means collect, store, transfer, use, or otherwise act on
      information.
    </p>
    <ul class="ms-5">
      <li>
        <p>
          We take seriously the protection of your privacy and confidentiality.
          We understand that all visitors to our website are entitled to know
          that their personal data will not be used for any purpose unintended
          by them, and will not accidentally fall into the hands of a third
          party.
        </p>
      </li>
      <li>
        <p>
          {{ title }} undertakes to preserve the confidentiality of all
          information you provide to us and hope that you reciprocate.
        </p>
      </li>
      <li>
        <p>
          The law requires us to tell you about your rights and our obligations
          to you in regard to the processing and control of your personal data.
        </p>
      </li>
    </ul>

    <h2 class="mb-1">Collection Of Your Personal Information</h2>
    <p>
      {{ title }} may collect personally identifiable information when you
      purchase any product on {{ title }} which might be subject to delivery to
      your designated address provided. We collect information such as your:
      Name, Address, E-mail Address, and Phone Number. {{ title }} may also
      collect anonymous demographic information, which is not unique to you.
    </p>
    <p>
      {{ title }} encourages you to review the privacy statements of websites
      you choose to link to from {{ title }} so that you can understand how
      those websites collect, use and share your information. We are not
      responsible for the privacy statements or other content on websites
      outside of the {{ title }} website.
    </p>

    <h2 class="mb-1">What Information We Collect And Why?</h2>
    <p>
      We may collect information about you directly from you, as well as
      automatically through your use of our Site or Services.
    </p>
    <ul class="ms-5">
      <li>
        <p>
          Information We Collect Directly from You: Certain areas and features
          of our Site and Services require product purchase. For the purpose of
          the purchase, you will provide your name, email address, delivery
          address, payment details, and IP address.
        </p>
      </li>
      <li>
        <p>
          Information We Collect Automatically: We may automatically collect the
          following information about your use of our Site via some software
          analytics including the length of time you visit our Site and your
          movement through our Site.
        </p>
      </li>
      <li>
        <p>
          We may also collect the following information: device ID, location and
          language information.
        </p>
      </li>
    </ul>
    <h2 class="mb-1">
      <strong
        >We Do Not Sell, Rent, Or Lease Its Customer Lists To Third
        Parties.</strong
      >
    </h2>
    <p>
      {{ title }} may share data with trusted partners to help perform
      statistical analysis, send you email or postal mail, provide customer
      support, or arrange for deliveries. All such third parties are prohibited
      from using your personal information except to provide these services to
      {{ title }}, and they are required to maintain the confidentiality of your
      information.
    </p>
    <p>
      {{ title }} will disclose your personal information, without notice, only
      if required to do so by law or in the good faith belief that such action
      is necessary
    </p>
    <ul class="ms-5">
      <li>
        <p>
          Conform to the edicts of the law or comply with legal process served
          on {{ title }} or the site.
        </p>
      </li>
      <li>
        <p>
          Protect and defend the rights or property of
          {{ title }}.
        </p>
      </li>
      <li>
        <p>
          Act under exigent circumstances to protect the personal safety of
          users of {{ title }}, or the public.
        </p>
      </li>
    </ul>
    <h2 class="mb-1">
      <strong
        >Information We Process Because We Have A Contractual Obligation With
        You</strong
      >
    </h2>
    <p>
      When you use the {{ title }} website, you agree to our terms and
      conditions, a contract is formed between you and us.
    </p>
    <p>
      In order to carry out our obligations under that contract, we must process
      the information you give us. Some of this information may be personal
      information.
    </p>
    <p>We may use it in order to:</p>
    <ul class="ms-5">
      <li>
        <p>Verify your identity for security purposes</p>
      </li>
      <li>
        <p>Sell products to you</p>
      </li>
      <li>
        <p>Provide you with our services</p>
      </li>
      <li>
        <p>
          Provide you with suggestions and advice on services and how to obtain
          the most from using our website.
        </p>
      </li>
    </ul>
    <p>
      {{ title }} may aggregate this information in a general way and use it to
      provide class information, for example, to monitor our performance with
      respect to a particular service we provide. If we use it for this purpose,
      you as an individual will not be personally identifiable.
      {{ title }} shall continue to process this information until the contract
      between us ends or is terminated by either party under the terms of the
      contract.
    </p>
    <p>
      Except where you have consented to our use of your information for a
      specific purpose, we do not use your information in any way that would
      identify you personally. {{ title }} may aggregate it in a general way and
      use it to provide class information, for example, to monitor the
      performance of a particular page on our website.
    </p>
    <p>
      You may withdraw your consent at any time by instructing us
      <a :href="`mailto:${contact.email.value}`">{{ contact.email.label }}</a
      >. However, if you do so, you may not be able to use our website or our
      services further
    </p>
    <h2 class="mb-1">Retention Period For Personal Data</h2>
    <p>
      Except as otherwise mentioned in this privacy notice,
      {{ title }}
      keeps your personal information only for as long as required by us:
    </p>
    <ul class="ms-5">
      <li><p>To provide you with the services you have requested;</p></li>
      <li>
        <p>
          To comply with other law, including for the period demanded by our tax
          authorities;
        </p>
      </li>
      <li>
        <p>To support a claim or defense in court.</p>
      </li>
    </ul>
    <h2 class="mb-1">Opt-out & Unsubscribe</h2>
    <p>
      We provide users the opportunity to opt-out of receiving communications
      from us by reading the unsubscribe instructions located at the bottom of
      any e-mail they receive from us at any time. Users who no longer wish to
      receive our newsletter or promotional materials may opt-out of receiving
      these communications by clicking on the unsubscribe link in the e-mail.
    </p>
    <p>
      We respect your privacy and give you an opportunity to opt-out of
      receiving announcements of certain information. Users may opt-out of
      receiving any or all communications from {{ title }} by contacting us
      <a :href="`mailto:${contact.email.value}`">{{ contact.email.label }}</a>
    </p>

    <h2 class="mb-1">General Data Protection Regulation (GDPR)</h2>
    <p>We are a Data Controller of your information.</p>
    <p>
      {{ title }} legal basis for collecting and using the personal information
      described in this
      <b><a href="/privacy-policy">Privacy Policy</a></b>
      depends on the Personal Information we collect and the specific context in
      which we collect the information:
    </p>
    <ul class="ms-5">
      <li>
        <p>{{ title }} needs to perform a contract with you</p>
      </li>
      <li>
        <p>You have given {{ title }} permission to do so</p>
      </li>
      <li>
        <p>
          Processing your personal information is in
          {{ title }} legitimate interests
        </p>
      </li>
      <li>
        <p>{{ title }} needs to comply with the law</p>
      </li>
    </ul>
    <p>
      {{ title }} will retain your personal information only for as long as is
      necessary for the purposes set out in this
      <b><a href="/privacy-policy">Privacy Policy</a></b
      >. We will retain and use your information to the extent necessary to
      comply with our legal obligations, resolve disputes, and enforce our
      policies.
    </p>
    <p>
      If you are a resident of the European Economic Area (EEA), you have
      certain data protection rights. If you wish to be informed what Personal
      Information, we hold about you and if you want it to be removed from our
      systems, please contact us.
    </p>
    <p>You are entitled to the following rights under applicable laws:</p>
    <ul class="ms-5">
      <li>
        <p>
          The right to access: you may at any time request to access your
          personal data. Upon request, we will provide a copy of your personal
          data in a commonly used electronic form.
        </p>
      </li>
      <li>
        <p>
          The right to rectification: you are entitled to obtain rectification
          of inaccurate personal data and to have incomplete personal data
          completed.
        </p>
      </li>
      <li>
        <p>
          The right to erase: under certain circumstances (including processing
          on the basis of your consent), you may request us to delete your User
          Data. Please note that this right is not unconditional. Therefore, an
          attempt to invoke the right might not lead to an action from us.
        </p>
      </li>
      <li>
        <p>
          The right to object: to certain processing activities conducted by us
          in relation to your personal data, such as our processing of your
          personal data based on our legitimate interest. The right to object
          also applies to the processing of your personal data for direct
          marketing purposes.
        </p>
      </li>
      <li>
        <p>
          The right to data portability: you are entitled to receive your
          personal data (or have your personal data directly transmitted to
          another data controller) in a structured, commonly used, and
          machine-readable format.
        </p>
      </li>
    </ul>
    <h2 class="mb-1">Intellectual Property Rights</h2>
    <p>
      All copyrights, trademarks, patents, and other intellectual property
      rights in and on our website and all content and software located on the
      site shall remain the sole property of {{ title }} or its licensors. The
      use of our trademarks, content, and intellectual property is forbidden
      without express written consent from us.
    </p>
    <p>You must not:</p>
    <ul class="ms-5">
      <li>
        <p>
          Republish material from our website without prior written consent.
        </p>
      </li>
      <li><p>Sell or rent material from our website.</p></li>
      <li>
        <p>
          Reproduce, duplicate, create derivative, copy or otherwise exploit
          material on our website for any purpose.
        </p>
      </li>
      <li>
        <p>
          Redistribute any content from our website, including onto another
          website.
        </p>
      </li>
    </ul>
    <h2 class="mb-1">Acceptable Use</h2>
    <p>
      You agree to use our website only for lawful purposes and in a way that
      does not infringe the rights of, restrict or inhibit anyone else’s use and
      enjoyment of the website. Prohibited behavior includes harassing or
      causing distress or inconvenience to any other user within our website.
      You must not use our website to send unsolicited commercial
      communications. You must not use the content on our website for any
      marketing related purpose without our express written consent.
    </p>
    <h2 class="mb-1">Third-Party Analytics</h2>
    <p>
      We use automated devices and applications, to evaluate usage of our Site
      and, to the extent permitted, our Services. We also may use other analytic
      means to evaluate our Services. We use these tools to help us improve our
      Services, performance, and user experiences. These entities may use
      tracking technologies to perform their services.
    </p>
    <h2 class="mb-1">Verification Of Your Information</h2>
    <p>
      When we receive any request to access, edit or delete personally
      identifiable information we shall first take reasonable steps to verify
      your identity before granting you access or otherwise taking any action.
      This is important to safeguard your information.
    </p>
    <h2 class="mb-1">Encryption Of Data Sent Between Us</h2>
    <p>
      {{ title }} website uses Secure Sockets Layer (SSL) certificates to verify
      our identity to your browser and to encrypt any data you give us. Whenever
      information is transferred between us, you can check that it is done so
      using SSL by looking for a closed padlock symbol or another trust mark in
      your browser’s URL bar or toolbar.
    </p>
    <h2 class="mb-1">How You Can Complain</h2>
    <p>
      If you are not happy with our privacy policy or if any complaints, then
      you should tell us by email. Our e-mail address is
      <a :href="`mailto:${contact.email.value}`">{{ contact.email.label }}</a>
    </p>
    <h2 class="mb-1">Review/Modification Of This Privacy Policy</h2>
    <p>
      {{ title }} may update this privacy notice from time to time as necessary.
      The terms that apply to you are those posted here on our website on the
      day you use our website. We solely advise you to print a copy for your
      records.
    </p>
    <p>
      The {{ title }} website uses cookies. They are placed by software that
      operates on our servers, and by software operated by third parties whose
      services we use. When you first visit our website, we ask you whether you
      wish us to use cookies. If you choose not to accept them, we shall not use
      them for your visit except to record that you have not consented to their
      use for any other purpose.
    </p>
    <p>
      If you choose not to use cookies or you prevent their use through your
      browser settings, you will not be able to use all the functionality of our
      website.
    </p>
    <h2 class="mb-1">Why We Use Cookies On Our Website</h2>
    <p>
      Cookies are pieces of information that a website transfers to an
      individual’s computer hard drive for record-keeping purposes. Cookies make
      using our Site easier by, among other things, saving your passwords and
      preferences for you. These cookies are restricted for use only on our Site
      and do not transfer any personal information to any other party.
    </p>
    <p>
      Cookies may not contain any information that personally identifies a user,
      but personal data that we store about you may be linked to the information
      stored in and obtained from cookies.
    </p>
    <p>
      Cookies may be either "persistent" cookies or "session" cookies: a
      persistent cookie will be stored by a web browser and will remain valid
      until its set expiry date unless deleted by the user before the expiry
      date; a session cookie, on the other hand, will expire at the end of the
      user session, when the web browser is closed.
    </p>
    <p>
      Most browsers are initially set up to accept cookies. You can, however,
      reset your browser to refuse all cookies or indicate when a cookie is
      being sent. Please consult the technical information relevant to your
      browser for instructions. If you choose to disable your cookies setting or
      refuse to accept a cookie, some parts of the Site may not function
      properly or may be considerably slower.
    </p>
    <h2 class="mb-1">Cookies That We Use</h2>
    <p>We use cookies for the following purposes:</p>
    <ul class="ms-5">
      <li>
        <p>
          Authentication and status - we use cookies to identify you when you
          visit our website and as you navigate our website, and to help us
          determine if you are logged into our website.
        </p>
      </li>
      <li>
        <p>
          Shopping cart - we use cookies to maintain the state of your shopping
          cart as you navigate our website.
        </p>
      </li>
      <li>
        <p>
          Personalization - we use cookies to store information about your
          preferences and to personalize our website for you.
        </p>
      </li>
      <li>
        <p>
          Security - we use cookies as an element of the security measures used
          to protect user accounts, including preventing fraudulent use of login
          credentials and protecting our website and services generally.
        </p>
      </li>
      <li>
        <p>
          Advertising - we use cookies to help us to display advertisements that
          will be relevant to you.
        </p>
      </li>
      <li>
        <p>
          Analysis - we use cookies to help us to analyze the use and
          performance of our website and services.
        </p>
      </li>
      <li>
        <p>
          Cookie consent - we use cookies to store your preferences in relation
          to the use of cookies more generally.
        </p>
      </li>
    </ul>
    <h2 class="mb-1">Managing Cookies</h2>
    <p>
      Most browsers allow you to refuse to accept cookies and to delete cookies.
      The methods for doing so vary from browser to browser, and from version to
      version. You can however obtain up-to-date information about blocking and
      deleting cookies via these links:
    </p>
    <ul class="ms-5">
      <li>
        <p>
          <a href="https://support.google.com/chrome/answer/95647"
            >https://support.google.com/chrome/answer/95647</a
          >
          (Chrome);
        </p>
      </li>
      <li>
        <p>
          <a
            href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
            >https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences</a
          >
          (Firefox);
        </p>
      </li>
      <li>
        <p>
          <a href="https://help.opera.com/en/latest/security-and-privacy/"
            >https://help.opera.com/en/latest/security-and-privacy/</a
          >
          (Opera);
        </p>
      </li>
      <li>
        <p>
          <a
            href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies"
            >https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies</a
          >
          (Internet Explorer);
        </p>
      </li>
      <li>
        <p>
          <a
            href="https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
            >https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a
          >
          (Safari);
        </p>
      </li>
      <li>
        <p>
          <a
            href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy"
            >https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy</a
          >
          (Edge).
        </p>
      </li>
    </ul>
    <p>
      Blocking all cookies will have a negative impact on the usability of many
      websites.
    </p>
    <p>
      If you block cookies, you will not be able to use all the features on our
      website.
    </p>
    <h2 class="mb-1">Personal Identifiers From Your Browsing Activity</h2>
    <p>
      Information about your computer hardware and software may be automatically
      collected by {{ title }} This information can include your IP address,
      browser type, domain names, access times, and referring website addresses.
      This information is used for the operation of the service, to maintain the
      quality of the service, and to provide general statistics regarding the
      use of the {{ title }} website.
    </p>
    <p>
      Requests by your web browser to our servers for web pages and other
      content on our website are recorded.
    </p>
    <p>
      Our website records information such as your geographical location, your
      Internet service provider and your IP address. We also record information
      about the software you are using to browse our websites, such as the type
      of computer or device and the screen resolution.
    </p>
    <p>
      {{ title }} uses this information in aggregate to assess the popularity of
      the webpages on our website and how we perform in providing content to
      you.
    </p>
    <h2 class="mb-1">Use Of Re-Marketing</h2>
    <p>
      Re-marketing involves placing a cookie on your computer when you browse
      our website in order to be able to serve to you an advert for our products
      or services when you visit some other website.
    </p>
    <p>
      {{ title }} may use a third party to provide us with re-marketing services
      from time to time. If so, then if you have consented to our use of
      cookies, you may see advertisements for our products and services on other
      websites.
    </p>
  </div>
</template>
