import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICE_AREAS } from "@/lib/constants";

export default function Services() {
  return (
    <div className="py-16">
      <motion.div 
        className="container mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-center mb-6">Hizmetlerimiz</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Mini kepçe hizmetlerimiz ile dar alanlarda profesyonel çözümler sunuyoruz.
          Detaylı bilgi ve fiyatlandırma için bizimle iletişime geçebilirsiniz.
        </p>
      </motion.div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_AREAS.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
                  <img
                    src={[
                      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf",
                      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34",
                      "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
                      "https://images.unsplash.com/photo-1501504905252-473c47e087f8"
                    ][index % 4]}
                    alt={service}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">{service}</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Profesyonel ekip</li>
                    <li>• Modern ekipman</li>
                    <li>• Uygun fiyat</li>
                    <li>• Hızlı çözüm</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
