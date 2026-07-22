// Fuente única de datos de la carta real de Terraza Doña Dominga.
// Precios y platos extraídos de public/carta-restaurant.html y
// public/carta-cafeteria.html (las cartas HTML autocontenidas que ve el
// cliente al hacer clic en "Ver Carta"). Esas cartas siguen siendo HTML
// estático independiente por diseño (ver CLAUDE.md) — si el cliente cambia
// un precio ahí, hay que reflejarlo también aquí a mano.

export type MenuCategory = "restaurant" | "cafeteria";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  desc?: string;
  category: MenuCategory;
  group: string;
}

export const menuItems: MenuItem[] = [
  // ── Restaurant: Hamburguesas (incluyen papas fritas) ──
  {
    id: "dominga",
    name: "Dominga",
    price: 9500,
    desc: "Queso fundido · palta · tomate · mayonesa",
    category: "restaurant",
    group: "Hamburguesas",
  },
  {
    id: "a-lo-pobre",
    name: "A lo Pobre",
    price: 9500,
    desc: "Queso fundido · cebolla caramelizada · huevo frito",
    category: "restaurant",
    group: "Hamburguesas",
  },
  {
    id: "la-mallarauquina",
    name: "La Mallarauquina",
    price: 9500,
    desc: "Lechuga · palta · tomate · cebolla morada · mayonesa",
    category: "restaurant",
    group: "Hamburguesas",
  },
  // ── Restaurant: Tablas para Compartir ──
  {
    id: "chorrillana",
    name: "Chorrillana",
    price: 15000,
    category: "restaurant",
    group: "Tablas para Compartir",
  },
  {
    id: "surtido-empanadas",
    name: "Surtido de Empanadas",
    price: 15000,
    desc: "Queso · mechada · camarón — 12 unidades y salsa de la casa",
    category: "restaurant",
    group: "Tablas para Compartir",
  },
  {
    id: "corte-parrilla",
    name: "Corte a la parrilla",
    price: 13000,
    category: "restaurant",
    group: "Tablas para Compartir",
  },
  // ── Restaurant: Platos de Fondo ──
  {
    id: "flat-iron-a-lo-pobre",
    name: "Flat Iron a lo Pobre",
    price: 13000,
    category: "restaurant",
    group: "Platos de Fondo",
  },
  {
    id: "filete-pollo-grilla",
    name: "Filete de Pollo a la Grilla",
    price: 13000,
    category: "restaurant",
    group: "Platos de Fondo",
  },
  // ── Restaurant: Algo Dulce ──
  {
    id: "tortas-kuchen-restaurant",
    name: "Tortas y Kuchen de la Casa",
    price: 3500,
    desc: "Precio por porción",
    category: "restaurant",
    group: "Algo Dulce",
  },
  {
    id: "cafe-te",
    name: "Café / Té",
    price: 2000,
    category: "restaurant",
    group: "Algo Dulce",
  },
  {
    id: "cafe-maquina-sabores",
    name: "Café Máquina Sabores",
    price: 3000,
    category: "restaurant",
    group: "Algo Dulce",
  },
  // ── Restaurant: Bebidas y Jugos ──
  {
    id: "bebida-restaurant",
    name: "Bebida",
    price: 2800,
    category: "restaurant",
    group: "Bebidas y Jugos",
  },
  {
    id: "jugo-natural",
    name: "Jugo Natural",
    price: 4000,
    desc: "Piña · frutilla",
    category: "restaurant",
    group: "Bebidas y Jugos",
  },
  // ── Restaurant: Cervezas ──
  {
    id: "austral-calafate",
    name: "Austral Calafate",
    price: 4500,
    category: "restaurant",
    group: "Cervezas",
  },
  {
    id: "corona",
    name: "Corona",
    price: 3500,
    category: "restaurant",
    group: "Cervezas",
  },
  {
    id: "kuntsman-torobayo",
    name: "Kuntsman Torobayo",
    price: 4500,
    category: "restaurant",
    group: "Cervezas",
  },
  {
    id: "michelada",
    name: "Michelada",
    price: 5500,
    category: "restaurant",
    group: "Cervezas",
  },
  // ── Restaurant: Tragos de la Casa ──
  {
    id: "pisco-bebida",
    name: "Pisco con Bebida",
    price: 5000,
    category: "restaurant",
    group: "Tragos de la Casa",
  },
  {
    id: "ron-bebida",
    name: "Ron con Bebida",
    price: 4500,
    category: "restaurant",
    group: "Tragos de la Casa",
  },
  {
    id: "mojito-tradicional",
    name: "Mojito Tradicional",
    price: 6000,
    category: "restaurant",
    group: "Tragos de la Casa",
  },
  {
    id: "mojito-sabores",
    name: "Mojito Sabores",
    price: 6500,
    category: "restaurant",
    group: "Tragos de la Casa",
  },
  {
    id: "aperol-spritz",
    name: "Aperol Spritz",
    price: 5000,
    category: "restaurant",
    group: "Tragos de la Casa",
  },
  {
    id: "ramazzotti-spritz",
    name: "Ramazzotti Spritz",
    price: 6500,
    category: "restaurant",
    group: "Tragos de la Casa",
  },
  {
    id: "caipirina",
    name: "Caipiriña",
    price: 6000,
    category: "restaurant",
    group: "Tragos de la Casa",
  },
  {
    id: "tequila-margarita",
    name: "Tequila Margarita",
    price: 6000,
    category: "restaurant",
    group: "Tragos de la Casa",
  },
  // ── Restaurant: Sour ──
  {
    id: "pisco-sour",
    name: "Pisco Sour de la Casa",
    price: 5000,
    category: "restaurant",
    group: "Sour",
  },
  {
    id: "mango-sour",
    name: "Mango Sour",
    price: 5000,
    category: "restaurant",
    group: "Sour",
  },
  // ── Restaurant: Whisky ──
  {
    id: "jw-negro",
    name: "Johnnie Walker Negro",
    price: 7000,
    category: "restaurant",
    group: "Whisky",
  },
  {
    id: "jw-rojo",
    name: "Johnnie Walker Rojo",
    price: 6000,
    category: "restaurant",
    group: "Whisky",
  },
  // ── Restaurant: Vinos (750cc) ──
  {
    id: "vino-toro-piedra",
    name: "Toro de Piedra Gran Reserva Cabernet",
    price: 17000,
    category: "restaurant",
    group: "Vinos",
  },
  {
    id: "vino-casa-silva",
    name: "Casa Silva Merlot",
    price: 13000,
    category: "restaurant",
    group: "Vinos",
  },
  {
    id: "vino-dona-dominga",
    name: "Doña Dominga Gran Reserva Carmenère",
    price: 15000,
    category: "restaurant",
    group: "Vinos",
  },
  // ── Cafetería: Café ──
  {
    id: "cafe-sabores",
    name: "Café Sabores",
    price: 3000,
    category: "cafeteria",
    group: "Café",
  },
  {
    id: "cafe-juan-valdes",
    name: "Café Juan Valdés",
    price: 3200,
    category: "cafeteria",
    group: "Café",
  },
  {
    id: "te-sabores",
    name: "Té Sabores",
    price: 2000,
    category: "cafeteria",
    group: "Café",
  },
  {
    id: "cafe-nescafe",
    name: "Café Nescafé",
    price: 2000,
    category: "cafeteria",
    group: "Café",
  },
  {
    id: "bebida-cafeteria",
    name: "Bebida",
    price: 1500,
    category: "cafeteria",
    group: "Café",
  },
  {
    id: "jugo-cafeteria",
    name: "Jugo",
    price: 2900,
    category: "cafeteria",
    group: "Café",
  },
  {
    id: "mineral",
    name: "Mineral",
    price: 1500,
    category: "cafeteria",
    group: "Café",
  },
  // ── Cafetería: Cafetería Helada ──
  {
    id: "cafe-helado",
    name: "Café Helado",
    price: 4000,
    category: "cafeteria",
    group: "Cafetería Helada",
  },
  {
    id: "torta-biscocho",
    name: "Torta Biscocho",
    price: 3000,
    category: "cafeteria",
    group: "Cafetería Helada",
  },
  {
    id: "torta-hoja",
    name: "Torta Hoja",
    price: 3800,
    category: "cafeteria",
    group: "Cafetería Helada",
  },
  {
    id: "kuchen-cafeteria",
    name: "Kuchen",
    price: 3000,
    category: "cafeteria",
    group: "Cafetería Helada",
  },
  {
    id: "pie",
    name: "Pie",
    price: 3000,
    category: "cafeteria",
    group: "Cafetería Helada",
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    price: 3200,
    category: "cafeteria",
    group: "Cafetería Helada",
  },
  {
    id: "donas",
    name: "Donas",
    price: 2000,
    category: "cafeteria",
    group: "Cafetería Helada",
  },
  {
    id: "muffin",
    name: "Muffin",
    price: 2000,
    category: "cafeteria",
    group: "Cafetería Helada",
  },
  {
    id: "berlin",
    name: "Berlín",
    price: 1500,
    category: "cafeteria",
    group: "Cafetería Helada",
  },
  {
    id: "queque",
    name: "Queque",
    price: 1500,
    category: "cafeteria",
    group: "Cafetería Helada",
  },
  // ── Cafetería: Sándwich ──
  {
    id: "sandwich-ave",
    name: "Ave Sabores",
    price: 3800,
    desc: "Pimiento · mayo",
    category: "cafeteria",
    group: "Sándwich",
  },
  {
    id: "sandwich-vegetariano",
    name: "Vegetariano",
    price: 4500,
    category: "cafeteria",
    group: "Sándwich",
  },
  {
    id: "sandwich-mechada",
    name: "Sándwich Mechada",
    price: 6800,
    desc: "2 ingredientes · incluye papas",
    category: "cafeteria",
    group: "Sándwich",
  },
  {
    id: "sandwich-churrasco",
    name: "Sándwich Churrasco",
    price: 7500,
    desc: "2 ingredientes · incluye papas",
    category: "cafeteria",
    group: "Sándwich",
  },
  {
    id: "jamon-queso-fundido",
    name: "Jamón Queso Fundido",
    price: 2500,
    category: "cafeteria",
    group: "Sándwich",
  },
  {
    id: "atun-mayo-lechuga",
    name: "Atún Mayo Lechuga",
    price: 4500,
    category: "cafeteria",
    group: "Sándwich",
  },
  {
    id: "paila-huevo",
    name: "Paila Huevo",
    price: 3200,
    category: "cafeteria",
    group: "Sándwich",
  },
  {
    id: "completos",
    name: "Completos de la Casa",
    price: 2800,
    category: "cafeteria",
    group: "Sándwich",
  },
  {
    id: "empanada-casa",
    name: "Empanada de la Casa",
    price: 2800,
    desc: "Pino · queso · napolitana · chaparrita",
    category: "cafeteria",
    group: "Sándwich",
  },
];

export function getMenuItem(id: string): MenuItem {
  const item = menuItems.find((i) => i.id === id);
  if (!item) throw new Error(`Menu item not found: ${id}`);
  return item;
}

export function formatCLP(amount: number): string {
  return `$${Math.round(amount).toLocaleString("es-CL")}`;
}
