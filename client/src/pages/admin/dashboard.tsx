import { useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";
import type { GalleryImage } from "@shared/schema";
import { Trash2 } from "lucide-react";

export default function AdminDashboard() {
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const { data: user } = useQuery({ 
    queryKey: ["/api/user"]
  });

  const { data: images } = useQuery<GalleryImage[]>({ 
    queryKey: ["/api/admin/gallery"]
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/admin/gallery/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/gallery"] });
      toast({
        title: "Başarılı",
        description: "Fotoğraf silindi",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await apiRequest("POST", "/api/admin/gallery", {
        title: formData.get("title"),
        description: formData.get("description"),
        imageUrl: formData.get("imageUrl"),
      });

      queryClient.invalidateQueries({ queryKey: ["/api/admin/gallery"] });
      toast({
        title: "Başarılı",
        description: "Fotoğraf eklendi",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Hata",
        description: error instanceof Error ? error.message : "Bir hata oluştu",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (!user?.isAdmin) {
      navigate("/admin/login");
    }
  }, [user, navigate]);

  if (!user?.isAdmin) {
    return null;
  }

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <Button
          variant="outline"
          onClick={() => apiRequest("POST", "/api/logout").then(() => navigate("/admin/login"))}
        >
          Çıkış Yap
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Yeni Fotoğraf Ekle</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="title"
                  placeholder="Başlık"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="description"
                  placeholder="Açıklama"
                />
              </div>
              <div>
                <Input
                  name="imageUrl"
                  placeholder="Fotoğraf URL"
                  required
                />
              </div>
              <Button type="submit">Ekle</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Galeri Fotoğrafları</h2>
            <div className="space-y-4">
              {images?.map((image) => (
                <div key={image.id} className="flex items-center justify-between p-4 border rounded">
                  <div>
                    <h3 className="font-semibold">{image.title}</h3>
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteMutation.mutate(image.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}