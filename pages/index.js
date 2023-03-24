import AppHeader from "@/components/AppHeader";
import AppNav from "@/components/AppNav";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Heros from "@/components/Heros";

export default function Home() {
  return (
    <>
    <AppHeader 
      title={'NewbAPI — API for everyone'} 
      desc={'Empower your developer journey with the limitless potential of APIs.'} 
      og={'https://newbapi.com/newbapi.png'} />
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