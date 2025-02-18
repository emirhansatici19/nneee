import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-black"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1624953736231-c9d91a89929b)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Profesyonel Hizmet
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Modern Mini Kepçe <span className="text-primary">Hizmetleri</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
            Dar alanlarda uzman çözümler, güvenilir hizmet ve 
            deneyimli operatörlerle yanınızdayız.
          </p>
          <div className="flex gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                Teklif Al
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 text-white border-white hover:text-primary hover:border-primary rounded-full"
              >
                Hizmetlerimiz
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}