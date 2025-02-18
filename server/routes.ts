import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { insertGalleryImageSchema } from "@shared/schema";

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated() || !req.user?.isAdmin) {
    return res.status(403).send("Admin access required");
  }
  next();
}

export async function registerRoutes(app: Express): Promise<Server> {
  setupAuth(app);

  // Admin routes for gallery management
  app.get("/api/admin/gallery", requireAdmin, async (req, res) => {
    const images = await storage.getGalleryImages();
    res.json(images);
  });

  app.post("/api/admin/gallery", requireAdmin, async (req, res) => {
    const parseResult = insertGalleryImageSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json(parseResult.error);
    }

    const image = await storage.createGalleryImage({
      ...parseResult.data,
      createdBy: req.user?.id,
    });
    res.status(201).json(image);
  });

  app.delete("/api/admin/gallery/:id", requireAdmin, async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).send("Invalid ID");
    }

    await storage.deleteGalleryImage(id);
    res.sendStatus(200);
  });

  // Public gallery route
  app.get("/api/gallery", async (req, res) => {
    const images = await storage.getGalleryImages();
    res.json(images);
  });

  const httpServer = createServer(app);
  return httpServer;
}