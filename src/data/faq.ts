// Fuente única de las preguntas frecuentes reales del negocio — usada por
// ContactFAQ.astro (acordeón) y por Assistant.astro (flujo de preguntas).

export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  // Pagos / reserva
  {
    q: "¿Aceptan tarjetas o solo efectivo/transferencia?",
    a: "Sí. Aceptamos tarjetas de crédito y débito (incluyendo pago sin contacto), efectivo y transferencias.",
  },
  {
    q: "¿Necesito reservar con anticipación o puedo llegar sin reserva?",
    a: "Puedes llegar sin reserva. Para noches con artista en vivo recomendamos reservar con anticipación por WhatsApp, ya que el aforo es limitado.",
  },
  {
    q: "¿Tienen estacionamiento?",
    a: "Sí, contamos con un amplio estacionamiento privado y seguro para todos nuestros clientes sin costo adicional.",
  },
  // Grupos / niños / vegetarianos
  {
    q: "¿Reciben grupos grandes o cumpleaños?",
    a: "Sí, recibimos grupos y celebraciones. Para grupos numerosos te recomendamos avisarnos antes por WhatsApp para preparar tu mesa.",
  },
  {
    q: "¿Es apto para niños?",
    a: "Sí, es un espacio familiar. Ten en cuenta que en noches de shows el ambiente es más de música en vivo hasta tarde.",
  },
  {
    q: "¿Tienen opciones vegetarianas?",
    a: "Sí, contamos con sándwich vegetariano, empanadas de queso y una variada selección de tortas y kuchen en nuestra cafetería.",
  },
  // Eventos
  {
    q: "¿Los shows tienen costo adicional?",
    a: "El valor de la entrada o cover varía según el artista. Generalmente los precios están indicados en nuestra cartelera de eventos.",
  },
  {
    q: "¿Cómo compro entradas para los shows?",
    a: "Por WhatsApp, directamente con nosotros.",
  },
];
