import { PrismaClient } from "@prisma/client";

//global def
declare global {
  var prisma: PrismaClient | undefined;
}

// searches globalThis.prisma or creates a new client
const client = globalThis.prisma || new PrismaClient();

//checks if in dev or production
// hot reload with nextjs roblem
if (process.env.NODE_ENV != "production") globalThis.prisma = client;

export default client;
