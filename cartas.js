// cartas.js — Datos completos del álbum FIFA World Cup 2026

const paises = [
  "México", "Estados Unidos", "Canadá", "Argentina", "Brasil", "Uruguay", "Colombia", "Ecuador",
  "Perú", "Chile", "Venezuela", "Bolivia", "Paraguay", "España", "Francia", "Inglaterra",
  "Alemania", "Italia", "Países Bajos", "Portugal", "Bélgica", "Croacia", "Suiza", "Dinamarca",
  "Suecia", "Polonia", "Gales", "Serbia", "Japón", "Corea del Sur", "Irán", "Arabia Saudita",
  "Australia", "Qatar", "Marruecos", "Senegal", "Egipto", "Nigeria", "Camerún", "Ghana",
  "Costa de Marfil", "Argelia", "Túnez", "Mali", "Nueva Zelanda", "Costa Rica", "Panamá", "Honduras"
];

// Banderas emoji por índice (mismo orden que paises[])
const banderas = [
  "🇲🇽","🇺🇸","🇨🇦","🇦🇷","🇧🇷","🇺🇾","🇨🇴","🇪🇨",
  "🇵🇪","🇨🇱","🇻🇪","🇧🇴","🇵🇾","🇪🇸","🇫🇷","🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "🇩🇪","🇮🇹","🇳🇱","🇵🇹","🇧🇪","🇭🇷","🇨🇭","🇩🇰",
  "🇸🇪","🇵🇱","🏴󠁧󠁢󠁷󠁬󠁳󠁿","🇷🇸","🇯🇵","🇰🇷","🇮🇷","🇸🇦",
  "🇦🇺","🇶🇦","🇲🇦","🇸🇳","🇪🇬","🇳🇬","🇨🇲","🇬🇭",
  "🇨🇮","🇩🇿","🇹🇳","🇲🇱","🇳🇿","🇨🇷","🇵🇦","🇭🇳"
];

// Colores de gradiente por sección
const colores = [
  ["#006847","#CE1126"],["#B22222","#002868"],["#FF0000","#FFFFFF"],
  ["#74ACDF","#F6B40E"],["#009C3B","#FEDD00"],["#002D62","#FFFFFF"],
  ["#FCD116","#003893"],["#FFD100","#003893"],
  ["#D91023","#FFFFFF"],["#D52B1E","#003580"],["#CF142B","#003893"],
  ["#F9E300","#007A5E"],["#D52B1E","#FFFFFF"],["#AA151B","#F1BF00"],
  ["#002395","#ED2939"],["#FFFFFF","#CF142B"],
  ["#000000","#DD0000"],["#009246","#CE2B37"],["#FF4F00","#003DA5"],["#006600","#FF0000"],
  ["#000000","#FFDA00"],["#FF0000","#FFFFFF"],["#FF0000","#FFFFFF"],["#C60C30","#FFFFFF"],
  ["#006AA7","#FECC02"],["#DC143C","#FFFFFF"],["#003075","#FFFFFF"],["#C6363C","#0C4076"],
  ["#BC002D","#FFFFFF"],["#003478","#CD2E3A"],["#239F40","#FFFFFF"],["#006C35","#FFFFFF"],
  ["#00843D","#FFCD00"],["#8D1B3D","#FFFFFF"],["#C1272D","#006233"],["#00853F","#FDEF42"],
  ["#C8102E","#FFFFFF"],["#008751","#FFFFFF"],["#007A5E","#CE1126"],["#006B3F","#FCD116"],
  ["#F77F00","#009A44"],["#006233","#FFFFFF"],["#E70013","#FFFFFF"],["#14B53A","#CE1126"],
  ["#00247D","#FFFFFF"],["#002B7F","#FFFFFF"],["#004B87","#FFFFFF"],["#0073CF","#FFFFFF"]
];

export const SECS = [];

// Sección FWC — Estadios y Especiales
const cartasEspeciales = [];
const sedesNombres = [
  "SoFi Stadium","MetLife Stadium","AT&T Stadium","Levi's Stadium","Rose Bowl",
  "Empower Field","Gillette Stadium","Lincoln Financial","NRG Stadium",
  "Arrowhead Stadium","Hard Rock Stadium","BC Place","BMO Field",
  "Estadio Azteca","Estadio BBVA","Estadio Akron",
  "Ciudad de México","Los Ángeles","Nueva York","Toronto"
];
for (let i = 1; i <= 20; i++) {
  cartasEspeciales.push({
    id: `FWC-${i}`,
    name: sedesNombres[i - 1] || `Especial ${i}`,
    tipo: i <= 16 ? "estadio" : "sede"
  });
}
SECS.push({
  id: "FWC", name: "FIFA WORLD CUP 2026",
  desc: "Estadios, Emblemas y Ciudades Sede",
  icon: "🏆", color1: "#0033A0", color2: "#FDB913",
  cards: cartasEspeciales
});

// Secciones de los 48 países
paises.forEach((pais, index) => {
  let codigo = pais.substring(0, 3).toUpperCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let idSeccion = codigo + (index + 1);
  let bandera = banderas[index] || "🏳️";
  let [c1, c2] = colores[index] || ["#1E293B", "#334155"];

  const cartasEquipo = [
    { id: `${idSeccion}-1`, name: "🛡️ Escudo Oficial", tipo: "escudo" },
    { id: `${idSeccion}-2`, name: "📸 Foto Grupal", tipo: "grupal" }
  ];
  for (let i = 3; i <= 20; i++) {
    cartasEquipo.push({ id: `${idSeccion}-${i}`, name: `Jugador ${i - 2}`, tipo: "jugador" });
  }

  SECS.push({
    id: idSeccion, name: pais.toUpperCase(),
    desc: `Selección Nacional · 20 Stickers`,
    icon: bandera, color1: c1, color2: c2,
    cards: cartasEquipo
  });
});

// Extra Stickers
const cartasExtra = [];
for (let i = 1; i <= 20; i++) {
  cartasExtra.push({ id: `EXT-${i}`, name: `Acción ${i}`, tipo: "extra" });
}
SECS.push({
  id: "EXT", name: "EXTRA STICKERS",
  desc: "Jugadas épicas · Difíciles de conseguir",
  icon: "🌟", color1: "#7C3AED", color2: "#F59E0B",
  cards: cartasExtra
});

// Edición Clandestina
const cartasBroma = [];
const bromaNames = [
  "El VAR se fue de vacaciones","Portero con las manos de mantequilla",
  "El offside invisible","Penalti de mentiras","Árbitro sin lentes",
  "Tiro libre al estadio de junto","El sustituto eterno",
  "Gol en propia meta","La camiseta equivocada","El himno en loop"
];
for (let i = 1; i <= 10; i++) {
  cartasBroma.push({ id: `BRM-${i}`, name: bromaNames[i - 1], tipo: "broma" });
}
SECS.push({
  id: "BRM", name: "EDICIÓN CLANDESTINA",
  desc: "Cartas prohibidas · Solo para valientes",
  icon: "🤫", color1: "#1a1a2e", color2: "#e94560",
  cards: cartasBroma
});

// Total de cartas
export const TOTAL_CARDS = SECS.reduce((acc, s) => acc + s.cards.length, 0);
