import Hero from "@/components/sections/hero";
import ServiceAreas from "@/components/sections/service-areas";
import Equipment from "@/components/sections/equipment";
import { motion } from "framer-motion";
import { SERVICE_REGIONS } from "@/lib/constants";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <motion.section 
        className="py-16 container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Profesyonel Mini Kepçe Hizmetleri
          </h2>
          <p className="text-gray-600 mb-8">
            Dar alanlarda uzmanlaşmış ekibimiz ve modern ekipmanlarımızla, 
            her türlü hafriyat, temel kazısı ve peyzaj düzenleme işleriniz için
            kaliteli ve güvenilir çözümler sunuyoruz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Neden Biz?</h3>
              <ul className="space-y-2">
                <li>✓ Deneyimli operatörler</li>
                <li>✓ Modern ekipmanlar</li>
                <li>✓ Uygun fiyatlar</li>
                <li>✓ Hızlı hizmet</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Hizmet Bölgelerimiz</h3>
              <ul className="space-y-2">
                {SERVICE_REGIONS.map((region) => (
                  <li key={region}>✓ {region}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <ServiceAreas />
      <Equipment />
    </div>
  );
}
