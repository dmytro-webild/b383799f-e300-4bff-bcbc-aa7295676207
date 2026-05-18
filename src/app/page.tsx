"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Award, ShoppingBag, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="EliteGadgets"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "glowing-orb",
      }}
      title="Elevate Your Style & Tech"
      description="Premium gadgets and fashion delivered to your door in Algeria. Cash on delivery available."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-woman-checking-website-stock-find-items-store-mall_482257-88626.jpg",
          imageAlt: "luxury gadget hero",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-hand-holding-black-earphones-white_140725-18112.jpg",
          imageAlt: "smart watch usage",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/whiskey-square-bottle_176474-6096.jpg",
          imageAlt: "luxury perfume bottle",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-overalls-sitting-casually-yellow-couch_24972-2976.jpg",
          imageAlt: "men's fashion style",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072178.jpg",
          imageAlt: "wireless headphones",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-sporty-woman-checking-her-smartwatch_23-2148235733.jpg",
          imageAlt: "modern smartwatch",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-vegan-alcohol-arrangement_23-2149337702.jpg",
          imageAlt: "men perfume",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portable-power-bank-smartphone-small-white-power-bank-close-up_169016-16256.jpg",
          imageAlt: "fast charging kit",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/belt-wooden-elegance-clothes-mens_1203-6422.jpg",
          imageAlt: "luxury sunglasses",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-accessoires-travel-concept-white-mobile-phone-liste_1921-45.jpg",
          imageAlt: "portable gadget",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-workspace-concept-with-office-supplies_23-2148226923.jpg",
          imageAlt: "smart watch usage",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/perfume-bottle_74190-5172.jpg",
          imageAlt: "luxury perfume bottle",
        },
      ]}
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/photogenic-woman-smiling-with-heaphones-shopping-mall0_23-2148397231.jpg",
          alt: "Photogenic woman smiling with heaphones in shopping mall0",
        },
        {
          src: "http://img.b2bpic.net/free-photo/seller-man-mobile-phone-professional-consultant-tech-store-shop-check-new-smart-watches_627829-4979.jpg",
          alt: "Seller man mobile phone professional consultant in tech store or shop check new smart watches",
        },
        {
          src: "http://img.b2bpic.net/free-photo/seller-man-mobile-phone-professional-consultant-tech-store-shop_627829-4983.jpg",
          alt: "Seller man mobile phone professional consultant in tech store or shop",
        },
        {
          src: "http://img.b2bpic.net/free-photo/seller-man-mobile-phone-professional-consultant-tech-store-shop_627829-4973.jpg",
          alt: "Seller man mobile phone professional consultant in tech store or shop",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148135.jpg",
          alt: "Smiling businessman face portrait, wearing suit",
        },
      ]}
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/front-view-female-hand-holding-black-earphones-white_140725-18113.jpg",
          alt: "A front view female hand holding black earphones on the white",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/top-view-desk-concept-with-mockup-smartphone_23-2148226826.jpg",
          alt: "Top view desk concept with mockup smartphone",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/front-view-female-hand-holding-black-earphones-white_140725-18115.jpg",
          alt: "A front view female hand holding black earphones on the white",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/hand-plugging-ssd-device-high-angle_23-2149328271.jpg",
          alt: "Hand plugging in ssd device high angle",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/front-close-up-view-bottle-perfume-transparent-bronze-isolated-white-floor_140725-11591.jpg",
          alt: "A front close up view bottle perfume transparent and bronze isolated on the white floor",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Free Delivery",
          description: "Cash on delivery throughout Algeria.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-using-smartwatch-technology_23-2149491864.jpg",
          buttonIcon: "Zap",
        },
        {
          title: "100% Original",
          description: "Guaranteed authentic premium products.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-black-white-minimal-design_23-2149253105.jpg",
          buttonIcon: "Shield",
        },
        {
          title: "24/7 Support",
          description: "We are here to assist you anytime.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-african-american-man-posing-outdoors-paris-happy-smile-fashion-style-lights-evening-cafes_1321-3400.jpg",
          buttonIcon: "Headphones",
        },
        {
          title: "Premium Quality",
          description: "Curated selection for your lifestyle.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-holding-vr-glasses_23-2148847702.jpg",
          buttonIcon: "Star",
        },
      ]}
      title="Why Choose Us"
      description="Experience premium quality and seamless delivery across Algeria."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Growing Brand for You"
      metrics={[
        {
          icon: Users,
          label: "Happy Clients",
          value: "5000+",
        },
        {
          icon: ShoppingBag,
          label: "Products Sold",
          value: "12k+",
        },
        {
          icon: Award,
          label: "Years Active",
          value: "3",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Wireless Headphones",
          price: "4500 DZD",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072204.jpg",
        },
        {
          id: "2",
          name: "Smart Watch Pro",
          price: "8900 DZD",
          imageSrc: "http://img.b2bpic.net/free-photo/afro-american-female-athlete-drinks-fresh-water-afterworkout-checks-heartbeat-smartwatch-listens-music-headphones-poses-city_273609-54954.jpg",
        },
        {
          id: "3",
          name: "Luxury Perfume",
          price: "6500 DZD",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-beautiful-romantic-gift-fancy-chair_181624-33210.jpg",
        },
        {
          id: "4",
          name: "Fast Charger Kit",
          price: "2200 DZD",
          imageSrc: "http://img.b2bpic.net/free-photo/powerbank-cellphone-wooden-table_1387-511.jpg",
        },
        {
          id: "5",
          name: "Premium Sunglasses",
          price: "3800 DZD",
          imageSrc: "http://img.b2bpic.net/free-photo/black-sunglasses-grey-surface_140725-14143.jpg",
        },
        {
          id: "6",
          name: "Portable Humidifier",
          price: "3200 DZD",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-business-desk-arrangement-with-empty-phone_23-2148488615.jpg",
        },
      ]}
      title="Trending Now"
      description="Discover our most popular items today."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "TikTok",
        "Facebook",
        "Instagram",
        "Shopify",
        "PayPal",
        "Stripe",
        "Visa",
      ]}
      title="Trusted Platforms"
      description="We partner with industry-leading brands."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Amine B.",
          role: "User",
          company: "Algiers",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-attractive-young-mixed-race-model-with-large-afro-wearing-navy-jacket-her-naked-body-shorts_633478-1216.jpg",
        },
        {
          id: "2",
          name: "Sarah K.",
          role: "User",
          company: "Oran",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-attractive-young-woman-isolated_273609-36521.jpg",
        },
        {
          id: "3",
          name: "Karim M.",
          role: "User",
          company: "Constantine",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-woman-with-eyeglasses-holding-shopping-bags_23-2147823601.jpg",
        },
        {
          id: "4",
          name: "Nadia L.",
          role: "User",
          company: "Annaba",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-portrait_23-2149213171.jpg",
        },
        {
          id: "5",
          name: "Yacine T.",
          role: "User",
          company: "Setif",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/girl-assuring-you-have-lucky-day-happy-smiling-gorgeous-female-entrepreneur-showing-thumb-up-liking-approving-awesome-idea-delighted-giving-positive-reply-agree-standing-white-wall_176420-35575.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.9",
          label: "Avg Rating",
        },
        {
          value: "98%",
          label: "On-Time",
        },
        {
          value: "100%",
          label: "Genuine",
        },
      ]}
      title="Happy Customers"
      description="What our clients say about their experience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Do you offer Cash on Delivery?",
          content: "Yes, we offer Cash on Delivery across all provinces in Algeria.",
        },
        {
          id: "2",
          title: "How long is shipping?",
          content: "Usually 2 to 5 business days depending on your location.",
        },
        {
          id: "3",
          title: "What is your return policy?",
          content: "We offer returns within 7 days if the product is defective.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "glowing-orb",
      }}
      title="Stay Updated"
      description="Subscribe to get the latest deals and new product arrivals."
      tag="Newsletter"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Smart Gadgets",
              href: "#",
            },
            {
              label: "Men's Fashion",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
      ]}
      logoText="EliteGadgets"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
