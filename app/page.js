import BlogList from "@/Components/BlogList";
// import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header";
// import About from "@/Components/HomeComponents/About";
import HomeHeader from "@/Components/HomeComponents/HomeHeader";
import About from "@/Components/HomeComponents/About";
import Contact from "@/Components/HomeComponents/Contact";
import Footer from "@/Components/HomeComponents/Footer";
import Hero from "@/Components/HomeComponents/Hero";
import Portfolio from "@/Components/HomeComponents/Portfolio";
import Serviecs from "@/Components/HomeComponents/Serviecs";
import Testito from "@/Components/HomeComponents/Testito";
import Working from "@/Components/HomeComponents/Working";
import Newsletter from "@/Components/shared/Newsletter";
import Banner from "@/Components/Banner";
import HandymanServices from "@/Components/HomeComponents/HandymanServices";
import Section from "@/Components/HomeComponents/Section";
import fs from 'fs';
import path from 'path';


export default function Home() {

  const imagesDirectory = path.join(process.cwd(), 'public/images');
  const imageFiles = fs.readdirSync(imagesDirectory);

  return (
    <>
      {/* <Newsletter />
      <BlogList /> */}
      {/* <HomeHeader /> */}
    <Banner/>
    {/* <Hero /> */}
<HandymanServices />
<Section/>
    {/* <About /> */}

    <Serviecs />

    <Portfolio imageFiles={imageFiles} />
    <Working />
    <Testito />
    <Contact />
    {/* <Footer /> */}
    </>
  );
}
