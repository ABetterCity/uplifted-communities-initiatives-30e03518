
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Programs />
        <CallToAction />
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Reach Out</h2>
            <p className="text-lg text-gray-600 mb-6">
              Need to get in touch? We're here to help.
            </p>
            <a
              href="mailto:info.abc.help@gmail.com"
              className="inline-flex items-center gap-2 text-lg text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Mail className="h-5 w-5" />
              info.abc.help@gmail.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
