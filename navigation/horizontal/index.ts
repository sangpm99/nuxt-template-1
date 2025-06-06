import type { Navbar } from "@/types/layout";

const getNavItems: Navbar[] = [
  {
    title: "Home",
    to: "/",
    public: true,
  },
  {
    title: "Shop",
    to: "/shop",
    children: [],
    public: true,
  },
  {
    title: "About",
    to: "/about",
    public: true,
  },
  {
    title: "Blogs",
    to: "/blogs",
    public: true,
  },
  {
    title: "Track Order",
    to: "/track-order",
    public: true,
  },
  {
    title: "Help Center",
    public: true,
    children: [
      {
        title: "Contact",
        to: "/contact",
        public: true,
      },
      {
        title: "Privacy Policy",
        to: "/privacy-policy",
        public: true,
      },
      {
        title: "Billing Terms & Conditions",
        to: "/billing-terms-conditions",
        public: true,
      },
      {
        title: "Cancellation & Changes",
        to: "/cancellation-changes",
        public: true,
      },
      {
        title: "Copyright Policy",
        to: "/copyright-policy",
        public: true,
      },
      {
        title: "Disclaimer",
        to: "/disclaimer",
        public: true,
      },
      {
        title: "FAQs",
        to: "/faqs",
        public: true,
      },
      {
        title: "Return & Refund Policy",
        to: "/return-refund-policy",
        public: true,
      },
      {
        title: "Shipping & Delivery",
        to: "/shipping-delivery",
        public: true,
      },
      {
        title: "Terms Conditions",
        to: "/terms-conditions",
        public: true,
      },
    ],
  },
];

export default getNavItems;
