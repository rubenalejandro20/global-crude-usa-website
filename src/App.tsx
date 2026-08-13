import { RfqProvider } from "@/hooks/useRfq";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Equipment } from "@/sections/Equipment";
import { Industries } from "@/sections/Industries";
import { Procurement } from "@/sections/Procurement";
import { WhyUs } from "@/sections/WhyUs";
import { MajorCta } from "@/sections/MajorCta";
import { Contact } from "@/sections/Contact";

function App() {
  return (
    <RfqProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Equipment />
        <Industries />
        <Procurement />
        <WhyUs />
        <MajorCta />
        <Contact />
      </main>
      <Footer />
    </RfqProvider>
  );
}

export default App;
