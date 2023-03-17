import AppNav from "@/components/AppNav";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Heros from "@/components/Heros";

export default function Home() {
  return (
    <>
    <AppNav />
    <div className="bg-white">
      <Heros />
    </div>
    <div className="container">
      
      <Features />
      <Footer />
    </div>
    </>
  );
}