// src/db/pglite.js
import { PGlite } from '@electric-sql/pglite';

const db = new PGlite('idb://patient-db'); // Uses IndexedDB as backend, persists across refreshes

await db.exec(`
  CREATE TABLE IF NOT EXISTS patients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER,
    gender TEXT,
    phone TEXT,
    address TEXT
  )
`);

