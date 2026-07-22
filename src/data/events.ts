import type { ImageMetadata } from "astro";
import erickBerriosImg from "../assets/events/erick-berrios.jpg";
import fiestaChilenaImg from "../assets/events/fiesta-a-la-chilena.jpg";
import pedroPabloImg from "../assets/events/pedroypablo.jpg";

export interface DoñaDomingaEvent {
  image: ImageMetadata;
  iso: string;
  date: string;
  artist: string;
  genre: string;
  time: string;
}

// Todos los eventos con su flyer real, ordenados del más reciente al más antiguo.
// `iso` (yyyy-mm-dd) decide en qué bloque cae cada uno: futuro → "Próximo evento",
// pasado → "Últimos eventos". La lista se corta en build y se re-verifica en el
// navegador para que el sitio estático no quede congelado en la fecha del deploy.
export const allEvents: DoñaDomingaEvent[] = [
  {
    image: erickBerriosImg,
    iso: "2026-07-15",
    date: "Mié 15 Jul",
    artist: "Erick Berríos",
    genre: "Tropical & Cumbia",
    time: "21:00",
  },
  {
    image: fiestaChilenaImg,
    iso: "2026-07-04",
    date: "Sáb 4 Jul",
    artist: "Fiesta a la Chilena",
    genre: "Los NN de la Cueca · Día del Cuequero",
    time: "20:00",
  },
  {
    image: pedroPabloImg,
    iso: "2026-06-29",
    date: "Lun 29 Jun",
    artist: "Celebración Pedro y Pablo",
    genre: "Música en vivo",
    time: "13:00",
  },
];

// Fecha local — NO usar toISOString (desfasa el día en Chile)
export function todayIso(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}
