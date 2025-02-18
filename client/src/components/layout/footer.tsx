import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO, SERVICE_REGIONS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">
              {COMPANY_INFO.name}
            </h3>
            <div className="space-y-2">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" />
                {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" />
                {COMPANY_INFO.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {COMPANY_INFO.address}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-primary font-bold text-lg mb-4">Hizmet Bölgeleri</h3>
            <ul className="space-y-2">
              {SERVICE_REGIONS.map((region) => (
                <li key={region}>{region}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-bold text-lg mb-4">Çalışma Saatleri</h3>
            <ul className="space-y-2">
              <li>Pazartesi - Cumartesi: 08:00 - 18:00</li>
              <li>Pazar: Kapalı</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
