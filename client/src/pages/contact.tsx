import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO, SERVICE_REGIONS } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    // In a real application, this would send the data to the server
    console.log(data);
    toast({
      title: "Mesajınız alındı",
      description: "En kısa sürede sizinle iletişime geçeceğiz.",
    });
    reset();
  };

  return (
    <div className="py-16">
      <motion.div 
        className="container mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-center mb-6">İletişim</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Detaylı bilgi ve fiyatlandırma için bizimle iletişime geçebilirsiniz.
        </p>
      </motion.div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">İletişim Formu</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Adınız Soyadınız"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="E-posta Adresiniz"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Telefon Numaranız"
                      {...register("phone", { required: true })}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Mesajınız"
                      className="min-h-[120px]"
                      {...register("message", { required: true })}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
                <div className="space-y-4">
                  <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-primary">
                    <Phone className="h-5 w-5" />
                    {COMPANY_INFO.phone}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 text-gray-600 hover:text-primary">
                    <Mail className="h-5 w-5" />
                    {COMPANY_INFO.email}
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    {COMPANY_INFO.address}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Hizmet Bölgelerimiz</h2>
                <ul className="space-y-2">
                  {SERVICE_REGIONS.map((region) => (
                    <li key={region} className="flex items-center gap-2 text-gray-600">
                      <span className="text-primary">•</span> {region}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
