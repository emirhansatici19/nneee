import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { EQUIPMENT_DETAILS } from "@/lib/constants";

export default function Equipment() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Ekipmanlarımız
          </motion.span>
          <h2 className="text-4xl font-bold mb-4">Modern Ekipman Parkı</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En son teknoloji mini kepçe ekipmanları ile hizmetinizdeyiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EQUIPMENT_DETAILS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}