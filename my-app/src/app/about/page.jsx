import AboutSection from "@/components/aboutus/aboutsection";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/header";

export default function About(){
    return(
        <div>
            <Navbar />
            <AboutSection />
            <Footer />
        </div>
    );
}