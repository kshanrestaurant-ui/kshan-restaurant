import Navbar from "@/components/layout/header";
import Hero from "../components/homepage/hero";
import ValueProposition from "@/components/homepage/valueproposition";
import MenuHighlights from "@/components/homepage/menu-highlights";
import MapOnlySection from "@/components/contact/maps";
import Footer from "@/components/layout/footer";
import SocialProof from "@/components/homepage/socialproof";

export default function Home(){
  return(
    <>
    <Navbar />
    <Hero />
    <ValueProposition />
    <MenuHighlights />
    {/* <MapOnlySection /> */}
    <SocialProof />
    <Footer />
    </>
  )
}