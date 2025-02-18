import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  isAdmin: boolean("is_admin").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const galleryImages = pgTable("gallery_images", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  createdBy: integer("created_by").references(() => users.id),
});

// User schemas
export const insertUserSchema = createInsertSchema(users)
  .pick({
    username: true,
    password: true,
    isAdmin: true,
  });

// Gallery schemas
export const insertGalleryImageSchema = createInsertSchema(galleryImages)
  .pick({
    title: true,
    description: true,
    imageUrl: true,
    createdBy: true,
  });

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type GalleryImage = typeof galleryImages.$inferSelect;
export type InsertGalleryImage = z.infer<typeof insertGalleryImageSchema>;