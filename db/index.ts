import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const connector = neon(process.env.DATABASE_URL!);

//@ts-ignore
export const db = drizzle(connector);
