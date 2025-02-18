import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const [, navigate] = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await apiRequest("POST", "/api/login", { username, password });
      const user = await res.json();

      if (!user.isAdmin) {
        throw new Error("Admin yetkisi gerekli");
      }

      navigate("/admin/dashboard");
    } catch (error) {
      toast({
        title: "Giriş başarısız",
        description: error instanceof Error ? error.message : "Bir hata oluştu",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-bold text-center mb-6">Admin Girişi</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Giriş Yap
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}