import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Hizmetlerimiz
          </motion.span>
          <h2 className="text-4xl font-bold mb-4">Hizmet Alanlarımız</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Profesyonel ekibimiz ile tüm mini kepçe ihtiyaçlarınız için yanınızdayız
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_AREAS.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service}</h3>
                  <p className="text-gray-600">
                    Profesyonel ekibimiz ile kaliteli hizmet garantisi
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}