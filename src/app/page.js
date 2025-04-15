import GrowTogether from "./components/home/GrowTogether";
import HeroBanner from "./components/home/HeroBanner";
import OptimizeFormSc from "./components/home/OptimizeFormSc";
import OurIndustries from "./components/home/OurIndustries";
import OurTestimonials from "./components/home/OurTestimonials";
import WhyUs from "./components/home/WhyUs";


export default function Home() {
  return (
    <div>
      <HeroBanner />
      <OurIndustries />
      {/* <OptimizeFormSc /> */}
      <WhyUs />
      <OurTestimonials />
      <GrowTogether />
    </div>
  );
}
