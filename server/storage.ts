import session from "express-session";
import MemoryStore from "memorystore";

export interface IStorage {
  sessionStore: session.Store;
}

export class MemoryStorage implements IStorage {
  sessionStore: session.Store;

  constructor() {
    this.sessionStore = new (MemoryStore(session))({
      checkPeriod: 86400000 // prune expired entries every 24h
    });
  }
}

export const storage = new MemoryStorage();