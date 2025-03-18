
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HeroSc from "./components/sections/HeroSc";
import AboutUs from "./components/sections/AboutUs";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSc />
      <AboutUs/>
      <Footer />
    </div>
  );
}
