import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import WhoWeAre from "./components/sections/WhoWeAre";
import Services from "./components/sections/Services";
import CleanIdea from "./components/sections/CleanIdea";
import Portfolio from "./components/sections/Portfolio";
import Team from "./components/sections/Team";
import Counter from "./components/sections/Counter";
import Testimonial from "./components/sections/Testimonial";
import ContactForm from "./components/sections/Contact";
import Footer from "./components/common/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <WhoWeAre/>
      <Services/>
      <CleanIdea/>
      <Portfolio/>
      <Team/>
      <Counter/>
      <Testimonial/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
