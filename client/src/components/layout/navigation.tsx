import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { COMPANY_INFO } from "@/lib/constants";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/services", label: "Hizmetler" },
  { href: "/gallery", label: "Galeri" },
  { href: "/contact", label: "İletişim" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="relative text-2xl font-black px-6 py-2 overflow-hidden rounded-xl group">
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-400 to-primary opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></span>
            <span className="relative text-background mix-blend-difference">
              {COMPANY_INFO.name}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === item.href ? "text-primary" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    location === item.href ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}