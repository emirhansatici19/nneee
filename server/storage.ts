import { users, galleryImages, type User, type InsertUser, type GalleryImage, type InsertGalleryImage } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import session from "express-session";
import connectPg from "connect-pg-simple";
import { pool } from "./db";

const PostgresSessionStore = connectPg(session);

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Gallery operations
  getGalleryImages(): Promise<GalleryImage[]>;
  getGalleryImage(id: number): Promise<GalleryImage | undefined>;
  createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage>;
  deleteGalleryImage(id: number): Promise<void>;

  // Session store
  sessionStore: session.Store;
}

export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;

  constructor() {
    this.sessionStore = new PostgresSessionStore({
      pool,
      createTableIfMissing: true,
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getGalleryImages(): Promise<GalleryImage[]> {
    return await db.select().from(galleryImages).orderBy(galleryImages.createdAt);
  }

  async getGalleryImage(id: number): Promise<GalleryImage | undefined> {
    const [image] = await db.select().from(galleryImages).where(eq(galleryImages.id, id));
    return image;
  }

  async createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage> {
    const [newImage] = await db.insert(galleryImages).values(image).returning();
    return newImage;
  }

  async deleteGalleryImage(id: number): Promise<void> {
    await db.delete(galleryImages).where(eq(galleryImages.id, id));
  }
}

export const storage = new DatabaseStorage();