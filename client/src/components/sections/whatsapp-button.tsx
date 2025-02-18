import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}`, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      <Button
        onClick={handleClick}
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        WhatsApp
      </Button>
    </motion.div>
  );
}
