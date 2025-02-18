import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
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
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Profesyonel Mini Kepçe Hizmetleri
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Dar alanlarda uzman çözümler, güvenilir hizmet ve deneyimli operatörler ile yanınızdayız.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg">
                Teklif Al
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-lg text-white border-white hover:text-primary hover:border-primary">
                Hizmetlerimiz
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
