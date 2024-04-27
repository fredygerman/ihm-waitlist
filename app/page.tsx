// import { About } from "@/components/About";
// import { Cta } from "@/components/Cta";
// import { FAQ } from "@/components/FAQ";
// import { Features } from "@/components/Features";

// import { Hero } from "@/components/Hero";
// import { HowItWorks } from "@/components/HowItWorks";
// import { NewAbout } from "@/components/NewAbout";
import { Newsletter } from "@/components/Newsletter";

// import { Pricing } from "@/components/Pricing";
// import { Services } from "@/components/Services";
// import { BackgroundBeamsDemo } from "@/components/beams";
import { SparklesPreview } from "@/components/sparkles-section";

export default function Home() {
  return (
    <>
      <SparklesPreview />
      {/* <NewAbout /> */}
      {/* <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Pricing /> */}
      <Newsletter />
      {/* <FAQ /> */}
    </>
  );
}
