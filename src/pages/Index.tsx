import Header from "@/components/Header";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Services />
      <Gallery />
      <AppointmentForm />
      <Footer />
    </div>
  );
};

export default Index;
