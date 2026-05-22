// 1. Lista de las 48 selecciones participantes
const paises = [
  "México", "Estados Unidos", "Canadá", "Argentina", "Brasil", "Uruguay", "Colombia", "Ecuador",
  "Perú", "Chile", "Venezuela", "Bolivia", "Paraguay", "España", "Francia", "Inglaterra",
  "Alemania", "Italia", "Países Bajos", "Portugal", "Bélgica", "Croacia", "Suiza", "Dinamarca",
  "Suecia", "Polonia", "Gales", "Serbia", "Japón", "Corea del Sur", "Irán", "Arabia Saudita",
  "Australia", "Qatar", "Marruecos", "Senegal", "Egipto", "Nigeria", "Camerún", "Ghana",
  "Costa de Marfil", "Argelia", "Túnez", "Mali", "Nueva Zelanda", "Costa Rica", "Panamá", "Honduras"
];

const SECS = [];

// 2. Sección Inicial: Estadios, Sedes y Especiales (Complemento para las 980 oficiales)
let cartasEspeciales = [];
for(let i = 1; i <= 20; i++) {
  cartasEspeciales.push({ id: `FWC-${i}`, name: `Estadio / Especial ${i}` });
}
SECS.push({
  id: "FWC",
  name: "FIFA WORLD CUP 2026",
  desc: "Estadios, Emblemas y Ciudades Sede",
  icon: "🏆",
  cards: cartasEspeciales
});

// 3. Generador Automático de las 48 Selecciones (48 equipos x 20 cartas = 960 cartas)
paises.forEach((pais, index) => {
  // Crea un código de 3 letras para el ID (ej. México -> MEX)
  let codigo = pais.substring(0, 3).toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let idSeccion = codigo + (index + 1); 
  
  let cartasEquipo = [];
  cartasEquipo.push({ id: `${idSeccion}-1`, name: "🛡️ Escudo Oficial" });
  cartasEquipo.push({ id: `${idSeccion}-2`, name: "📸 Foto Grupal" });
  
  // Genera los 18 jugadores restantes
  for(let i = 3; i <= 20; i++) {
    cartasEquipo.push({ id: `${idSeccion}-${i}`, name: `Jugador ${i-2}` });
  }

  SECS.push({
    id: idSeccion,
    name: pais.toUpperCase(),
    desc: `Selección Nacional - 20 Stickers`,
    icon: "⚽",
    cards: cartasEquipo
  });
});

// 4. Extra Stickers (20 cartas de acción fuera de la numeración normal)
let cartasExtra = [];
for(let i = 1; i <= 20; i++) {
  cartasExtra.push({ id: `EXT-${i}`, name: `Extra Sticker Acción ${i}` });
}
SECS.push({
  id: "EXT",
  name: "EXTRA STICKERS",
  desc: "Cartas únicas de jugadores en acción (Difíciles de conseguir)",
  icon: "🌟",
  cards: cartasExtra
});

// 5. EDICIÓN CLANDESTINA (Las 10 de bromita)
SECS.push({
  id: "BRM",
  name: "EDICIÓN CLANDESTINA",
  desc: "Cartas prohibidas,