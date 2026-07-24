import type { ImageMetadata } from "astro";
import teatroImg from "../assets/events/teatro.jpg";
import mariaJimenaCarolinaImg from "../assets/events/Maria-jimena-pereyra-carolina-soto.png";
import betoEspinozaImg from "../assets/events/beto-espinoza.jpg";
import claudioNareaImg from "../assets/events/claudio-narea.jpg";

export interface DoñaDomingaEvent {
  // Sin `image` → la card se renderiza con placeholder (ver Events.astro)
  image?: ImageMetadata;
  // `iso` sólo decide si la card cae en el bloque "pasado" (ver filtro en
  // Events.astro) — las cards de "Eventos destacados" ya no muestran fecha.
  iso: string;
  artist: string;
}

// Eventos destacados: curados a mano (no necesariamente los más recientes),
// sólo foto + nombre del artista — sin fecha/género visibles en la card.
export const allEvents: DoñaDomingaEvent[] = [
  {
    image: teatroImg,
    iso: "2026-06-01",
    artist: "Elenco del Teatro en Chilevisión",
  },
  {
    image: mariaJimenaCarolinaImg,
    iso: "2026-06-05",
    artist: "María Jimena Pereyra & Carolina Soto",
  },
  {
    image: betoEspinozaImg,
    iso: "2026-06-10",
    artist: "Beto Espinoza",
  },
  {
    image: claudioNareaImg,
    iso: "2026-06-15",
    artist: "Claudio Narea",
  },
];

// Nombres de artistas que han pasado por la terraza, sin orden particular —
// solo para que la gente sepa qué esperar.
export const invitedArtists: string[] = [
  "Elenco del Teatro en Chilevisión",
  "María Jimena Pereyra",
  "Carolina Soto",
  "Grupo La Cumbia",
  "Los Viking 5",
  "Gigi Martin",
  "Beto Espinoza",
  "Pamela Leiva",
  "Pablo Herrera",
  "Claudio Narea (Los Prisioneros)",
  "Melón y Melame",
  "Patricia Maldonado",
];

// Fecha local — NO usar toISOString (desfasa el día en Chile)
export function todayIso(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}
