import HeaderTwo from "@/layouts/headers/HeaderTwo";
import Wrapper from "@/layouts/Wrapper";
import HeroHomeTwo from "./components/home-2/HeroHomeTwo";
import FeaturesHomeTwo from "./components/home-2/FeaturesHomeTwo";
import DividerArea from "@/common/DividerArea";
import AboutHomeTwo from "./components/home-2/AboutHomeTwo";
import BrandHomeTwo from "./components/home-2/BrandHomeTwo";
import TestimonialHomeTwo from "./components/home-2/TestimonialHomeTwo";
import BlogHomeTwo from "./components/home-2/BlogHomeTwo";
import FaqHomeTwo from "./components/home-2/FaqHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";

export default function App() {
  return (
    <Wrapper>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroHomeTwo />
          <FeaturesHomeTwo />
          <DividerArea />
          <AboutHomeTwo />
          <BrandHomeTwo />
          <TestimonialHomeTwo />
          <DividerArea />
          <BlogHomeTwo />
          <FaqHomeTwo />
          <FooterTwo />
        </div>
      </div>
    </Wrapper>
  );
}
