import { e as escape_html, a6 as attr_class, a7 as clsx, a8 as store_get, a9 as attr, aa as ensure_array_like, ab as stringify, ac as attr_style, ad as unsubscribe_stores, a5 as derived$1, h as head } from "../../chunks/index2.js";
import { d as derived, w as writable } from "../../chunks/index.js";
const scheduleStrings = {
  en: {
    autolyse: "Autolyse",
    autolyseNote: () => "Mix flour and most of water (hold back ~50g water, all salt, all starter). Cover and rest.",
    addStarterSalt: "Add Starter + Salt",
    addStarterNote: "Incorporate starter and salt, pinch and fold until fully integrated.",
    bulkFermentation: "Bulk Fermentation",
    bulkNote: "Ferment until dough has grown 50–75%, feels airy, passes float test. Adjust based on your environment.",
    stretchFold: (n) => `Stretch & Fold ${n}`,
    stretchFoldNote: (n, mins) => `Set of 4 coil folds (${mins} min into bulk). Dough should start to hold tension.`,
    restBulk: "Rest (Remaining Bulk)",
    restNote: "Cover and leave undisturbed. Watch for signs of fermentation (bubbles, jiggle, rise).",
    preShape: "Pre-shape",
    preShapeNote: "Gentle pre-shape, rest on counter uncovered.",
    benchRest: "Bench Rest",
    benchRestNote: "Allow gluten to relax before final shape.",
    finalShape: "Final Shape",
    finalShapeNote: "Shape into batard or boule. Build surface tension. Place seam-side up in floured banneton.",
    roomProof: "Room Temperature Proof",
    roomProofNote: "Cover banneton. Dough should puff and pass the poke test (slow spring-back).",
    coldRetard: "Cold Retard (Fridge)",
    coldRetardNote: (temp) => `Place covered banneton in fridge at ${temp}°C. Can bake directly from cold.`,
    preheatOven: "Preheat Oven + Dutch Oven",
    preheatNote: "500°F / 260°C with Dutch oven inside. Oven must be fully saturated with heat.",
    scoreBake: "Score + Bake",
    scoreBakeNote: "Score dough quickly. Bake covered 20 min, then uncover and bake 25 min more until deep golden."
  },
  es: {
    autolyse: "Autólisis",
    autolyseNote: () => "Mezcla la harina y la mayor parte del agua (reserva ~50g de agua, toda la sal e iniciador). Tapa y reposa.",
    addStarterSalt: "Agregar Iniciador + Sal",
    addStarterNote: "Incorpora el iniciador y la sal; pellizca y pliega hasta integrar completamente.",
    bulkFermentation: "Fermentación en Masa",
    bulkNote: "Fermenta hasta que la masa crezca un 50–75%, se sienta aireada y pase la prueba de flotación. Ajusta según tu ambiente.",
    stretchFold: (n) => `Estirado y Plegado ${n}`,
    stretchFoldNote: (n, mins) => `Serie de 4 pliegues en espiral (${mins} min desde el inicio). La masa debe comenzar a mantener tensión.`,
    restBulk: "Reposo (Resto de Fermentación)",
    restNote: "Tapa y deja reposar sin tocar. Observa señales de fermentación (burbujas, temblor, subida).",
    preShape: "Pre-formado",
    preShapeNote: "Pre-forma con cuidado y deja reposar en la mesa sin tapar.",
    benchRest: "Reposo en Mesa",
    benchRestNote: "Deja que el gluten se relaje antes del formado final.",
    finalShape: "Formado Final",
    finalShapeNote: "Forma un batard o boule. Crea tensión superficial. Coloca con la costura hacia arriba en el banneton enharinado.",
    roomProof: "Fermentación a Temperatura Ambiente",
    roomProofNote: "Tapa el banneton. La masa debe hincharse y pasar la prueba del dedo (recuperación lenta).",
    coldRetard: "Fermentación en Frío (Nevera)",
    coldRetardNote: (temp) => `Coloca el banneton tapado en la nevera a ${temp}°C. Se puede hornear directamente desde el frío.`,
    preheatOven: "Precalentar Horno + Olla",
    preheatNote: "260°C / 500°F con la olla dentro. El horno debe estar completamente caliente.",
    scoreBake: "Greñar + Hornear",
    scoreBakeNote: "Greña rápidamente. Hornea tapado 20 min, luego destapa y hornea 25 min más hasta dorar bien."
  },
  sv: {
    autolyse: "Autolys",
    autolyseNote: () => "Blanda mjöl och det mesta av vattnet (håll tillbaka ~50g vatten, allt salt och all surdeg). Täck och vila.",
    addStarterSalt: "Tillsätt Surdeg + Salt",
    addStarterNote: "Blanda in surdegen och saltet, nyp och vik tills allt är helt integrerat.",
    bulkFermentation: "Bulkjäsning",
    bulkNote: "Jäs tills degen vuxit 50–75%, känns luftig och klarar flottestet. Justera efter din miljö.",
    stretchFold: (n) => `Sträck & Vik ${n}`,
    stretchFoldNote: (n, mins) => `4 vikningar (${mins} min in i bulkjäsningen). Degen ska börja hålla spänning.`,
    restBulk: "Vila (Resterande Bulkjäsning)",
    restNote: "Täck och låt stå ostörd. Titta efter jästecken (bubblor, rörelse, stigning).",
    preShape: "Förformning",
    preShapeNote: "Försiktig förformning, vila på bänken utan täckning.",
    benchRest: "Bänkvila",
    benchRestNote: "Låt glutenet slappna av inför slutformningen.",
    finalShape: "Slutformning",
    finalShapeNote: "Forma till batard eller boule. Bygg upp ytterspänning. Lägg med skarven uppåt i mjölat jäskorg.",
    roomProof: "Jäsning i Rumstemperatur",
    roomProofNote: "Täck jäskorgen. Degen ska puffa upp och klara stickprovet (långsam återfjädring).",
    coldRetard: "Kall Jäsning (Kylskåp)",
    coldRetardNote: (temp) => `Ställ täckt jäskorg i kylskåp på ${temp}°C. Kan bakas direkt från kylskåpet.`,
    preheatOven: "Förvärm Ugn + Gryta",
    preheatNote: "260°C / 500°F med gjutjärnsgryta inuti. Ugnen måste vara ordentligt uppvärmd.",
    scoreBake: "Snitta + Baka",
    scoreBakeNote: "Snitta snabbt. Baka täckt i 20 min, ta sedan av locket och baka ytterligare 25 min tills djupt gyllenbrun."
  }
};
const warningStrings = {
  en: {
    dangerLow: "Dough temp dangerously low — fermentation nearly dormant. Consider warming location.",
    dangerHigh: "Above 30°C — overproofing risk and structural integrity drops. Use cold water, cool location, or fridge.",
    warnHigh: "High temperature — watch dough closely, may ferment faster than estimated.",
    infoSweet: "Sweet spot temperature — ideal for active fermentation.",
    infoSlow: "Slow & sour zone — excellent flavor development, longer timeline.",
    warnHydrationTemp: "High hydration + warm temp — runaway fermentation risk. Aim for cooler environment (~22–23°C).",
    infoHighHydration: "High hydration dough — requires strong bench technique. Wet hands, gentle folds.",
    infoWWAutolyse: "High whole wheat % — consider shorter autolyse (20–25 min) or bassinage technique to improve handling.",
    warnOpenCrumb: "Open crumb requires tighter environmental control. Monitor dough closely for proper fermentation signs.",
    ryeHighWarning: "High rye (>30%) — fermentation may be faster than predicted. Watch your dough closely."
  },
  es: {
    dangerLow: "Temperatura peligrosamente baja — fermentación casi inactiva. Considera un lugar más cálido.",
    dangerHigh: "Por encima de 30°C — riesgo de sobrefermentación y pérdida de estructura. Usa agua fría, un lugar fresco o la nevera.",
    warnHigh: "Temperatura alta — vigila la masa de cerca, puede fermentar más rápido de lo estimado.",
    infoSweet: "Temperatura ideal — perfecta para una fermentación activa.",
    infoSlow: "Zona lenta y ácida — excelente desarrollo de sabor, mayor tiempo de fermentación.",
    warnHydrationTemp: "Hidratación alta + temperatura cálida — riesgo de fermentación desbocada. Busca un ambiente más fresco (~22–23°C).",
    infoHighHydration: "Masa de alta hidratación — requiere buena técnica de mesa. Manos húmedas y pliegues suaves.",
    infoWWAutolyse: "Alto % de integral — considera una autólisis más corta (20–25 min) o técnica de bassinage para mejorar el manejo.",
    warnOpenCrumb: "La miga abierta requiere un control ambiental más riguroso. Vigila la masa de cerca para detectar señales correctas de fermentación.",
    ryeHighWarning: "Centeno alto (>30%) — la fermentación puede ser más rápida de lo previsto. Vigila tu masa de cerca."
  },
  sv: {
    dangerLow: "Degens temperatur farligt låg — jäsningen nästan inaktiv. Överväg en varmare plats.",
    dangerHigh: "Över 30°C — risk för överjäsning och strukturen försämras. Använd kallt vatten, sval plats eller kylskåp.",
    warnHigh: "Hög temperatur — övervaka degen noga, kan jäsa snabbare än beräknat.",
    infoSweet: "Idealtemperatur — perfekt för aktiv jäsning.",
    infoSlow: "Långsam & syrlig zon — utmärkt smakutveckling, längre tidsram.",
    warnHydrationTemp: "Hög hydratation + varm temperatur — risk för skenande jäsning. Sikta på svalare miljö (~22–23°C).",
    infoHighHydration: "Hög hydratation — kräver bra bänkteknik. Blöta händer, varsamma vikningar.",
    infoWWAutolyse: "Hög andel fullkorn — överväg kortare autolys (20–25 min) eller bassinage-teknik för bättre hantering.",
    warnOpenCrumb: "Öppen smulstruktur kräver noggrannare miljökontroll. Övervaka degen noga för rätt jästecken.",
    ryeHighWarning: "Hög rågandel (>30%) — jäsningen kan gå snabbare än beräknat. Övervaka degen noga."
  }
};
const assumptionStrings = {
  en: {
    ambientTemp: "Ambient temp",
    salt: "Salt",
    starterHydration: "Starter hydration",
    inoculation: "Inoculation",
    baseHydration: "Base hydration",
    wwHydrationAdjust: "Blend hydration adjust",
    blendAbsorption: "Blend absorption",
    blendFermentMult: "Ferment multiplier",
    finalHydration: "Final hydration",
    autolyse: "Autolyse",
    off: "Off",
    saltAuto: (pct, computed) => `${pct}% (auto — ${computed}% computed from flour blend)`,
    saltManual: (pct) => `${pct}% (manual override)`,
    starterHydrationAuto: (pct) => `${pct}% (default)`,
    starterHydrationManual: (pct) => `${pct}% (manual override)`,
    autolyseMins: (mins) => `${mins} min`
  },
  es: {
    ambientTemp: "Temperatura ambiente",
    salt: "Sal",
    starterHydration: "Hidratación del iniciador",
    inoculation: "Inoculación",
    baseHydration: "Hidratación base",
    wwHydrationAdjust: "Ajuste hidratación mezcla",
    blendAbsorption: "Absorción de la mezcla",
    blendFermentMult: "Multiplicador de fermentación",
    finalHydration: "Hidratación final",
    autolyse: "Autólisis",
    off: "Apagada",
    saltAuto: (pct, computed) => `${pct}% (auto — ${computed}% calculado desde la mezcla de harina)`,
    saltManual: (pct) => `${pct}% (ajuste manual)`,
    starterHydrationAuto: (pct) => `${pct}% (predeterminado)`,
    starterHydrationManual: (pct) => `${pct}% (ajuste manual)`,
    autolyseMins: (mins) => `${mins} min`
  },
  sv: {
    ambientTemp: "Omgivningstemperatur",
    salt: "Salt",
    starterHydration: "Surdeghydratation",
    inoculation: "Inokulering",
    baseHydration: "Bashydratation",
    wwHydrationAdjust: "Blandningsjustering hydratation",
    blendAbsorption: "Blandningsabsorption",
    blendFermentMult: "Jäsningsmultiplikator",
    finalHydration: "Sluthydratation",
    autolyse: "Autolys",
    off: "Av",
    saltAuto: (pct, computed) => `${pct}% (auto — ${computed}% beräknat från mjölblandningen)`,
    saltManual: (pct) => `${pct}% (manuell inställning)`,
    starterHydrationAuto: (pct) => `${pct}% (standard)`,
    starterHydrationManual: (pct) => `${pct}% (manuell inställning)`,
    autolyseMins: (mins) => `${mins} min`
  }
};
const en = {
  // App / header
  appSubtitle: "Formula, timing & schedule",
  saveToHomeScreen: "Save to Home Screen",
  savedToHomeScreen: "Saved to Home Screen",
  installHelpTitle: "Add DoughCulator to your home screen",
  installHelpIntro: "If no install prompt appears, use your browser menu:",
  installHelpIOS: 'iPhone/iPad (Safari): Tap Share, then "Add to Home Screen".',
  installHelpAndroid: 'Android (Chrome): Open the menu, then tap "Install app" or "Add to Home screen".',
  installHelpDesktop: "Desktop (Chrome/Edge): Use the install icon in the address bar or browser menu.",
  close: "Close",
  assumptions: "Assumptions",
  copyRecipe: "Copy Recipe",
  copied: "Copied!",
  // Empty state
  emptyStateTitle: "Enter your flour amounts above to calculate your recipe.",
  emptyStateSubtitle: "The calculator updates automatically as you type.",
  // Footer
  footerLine1: "Sourdough Calculator — open source, runs entirely in your browser.",
  footerLine2: "All calculations are guidelines. Your dough knows best.",
  // Copy text
  copyTitle: "🍞 SOURDOUGH RECIPE",
  copyDivider: "===================",
  copyScheduleHeader: "SCHEDULE",
  copyScheduleDivider: "--------",
  copyAssumptionsHeader: "ASSUMPTIONS",
  copyAssumptionsDivider: "-----------",
  copyFooter: "Generated by DoughCulator",
  // InputSection
  parameters: "Parameters",
  totalFlour: "Total Flour (g)",
  flourSelection: "Flour Selection",
  flourTypes: {
    BreadFlour: "Bread Flour",
    AllPurpose: "All-Purpose",
    WholeWheat: "Whole Wheat",
    Rye: "Rye",
    Spelt: "Spelt",
    Einkorn: "Einkorn"
  },
  blendTotal: "Total",
  blendNormalize: "Normalize to 100%",
  flourBlend: "Flour Blend",
  white: "White",
  wholeWheat: "Whole Wheat",
  crumbGoal: "Crumb Goal",
  crumbGoalNames: { Tight: "Tight", Balanced: "Balanced", Open: "Open" },
  crumbDescriptions: {
    Tight: "Dense, uniform bubbles. Best for toast & sandwiches.",
    Balanced: "Medium bubbles, versatile crumb. Classic sourdough.",
    Open: "Large holes, translucent walls. Advanced technique required."
  },
  advancedOptions: "Advanced Options",
  ambientTemp: "Ambient Temperature",
  doughTemp: "Dough Temperature",
  optional: "— optional",
  leaveBlankAmbient: "Leave blank to use ambient",
  salt: "Salt",
  saltAutoLabel: (pct, g) => `Auto: ${pct}% = ${g}g`,
  saltManual: "Manual",
  saltOverride: "Override",
  saltBakersPct: "Baker's % relative to total flour",
  starterHydration: "Starter Hydration (%)",
  starterHydrationDefaultLabel: "Default: 100%",
  starterHydrationManual: "Manual",
  starterHydrationOverride: "Override",
  autolyse: "Autolyse",
  off: "Off",
  auto: "Auto",
  duration: "Duration",
  autolyseModalTitle: "Autolyse Guide",
  autolyseModalIntro: "Autolyse is a short rest after mixing flour and water, before adding starter and salt. It improves hydration and starts gluten development with less mixing.",
  autolyseModalUseTitle: "When to use it",
  autolyseModalUseItems: [
    "High-hydration doughs where you want better extensibility and easier shaping.",
    "Doughs with whole wheat or thirsty flours that benefit from fuller hydration.",
    "When the dough feels tight during mixing and you want gentler gluten development."
  ],
  autolyseModalAvoidTitle: "When to skip or shorten",
  autolyseModalAvoidItems: [
    "Very warm kitchen or dough conditions (around 29°C / 84°F and above); keep it short or leave it off.",
    "If your dough already gets slack or sticky quickly; long autolyse can reduce strength.",
    "When you need a fast mix-and-go workflow and prefer speed over marginal handling gains."
  ],
  fermentationPhilosophyLabel: "Fermentation Philosophy",
  philosophyPredictability: "Predictability",
  philosophyFlavorDev: "Flavor Development",
  philosophyPredictabilityDesc: "More starter when cold — consistent timing.",
  philosophyFlavorDevDesc: "Less starter when cold — slower fermentation builds complexity.",
  philosophyModalTitle: "Fermentation Philosophy",
  philosophyModalPredictabilityBody: "Predictability uses a higher inoculation rate when temperatures drop. This keeps fermentation on a reliable schedule regardless of season or kitchen conditions — ideal when you want consistent results and a repeatable bake-day routine.",
  philosophyModalFlavorDevBody: "Flavor Development lowers inoculation in cold conditions, letting the dough ferment slowly over a longer window. Extended time produces more acetic and lactic acids, yielding a more complex, tangy flavor — great for cold retard bakes or when you can be flexible with timing.",
  proofMethod: "Proof Method",
  roomTemp: "Room Temp",
  coldRetard: "Cold Retard",
  fridgeTemp: "Fridge Temperature",
  scheduleMode: "Schedule Mode",
  relative: "Relative",
  clock: "Clock",
  startTime: "Start Time (HH:MM)",
  // FormulaCard
  formula: "Formula",
  bakersPctSubtitle: "Baker's percentages relative to total flour",
  ingredient: "Ingredient",
  grams: "Grams",
  bakersPct: "Baker's %",
  totalFlourRow: "Total Flour",
  whiteFlouRow: "— White flour",
  wwFlourRow: "— Whole wheat",
  water: "Water",
  saltRow: "Salt",
  starter: "Starter",
  totalDough: "Total Dough",
  starterBreakdown: "Starter Breakdown",
  starterFlour: "Starter flour",
  starterWater: "Starter water",
  totalStarter: "Total starter",
  mixAdditions: "What You Add (from bag/tap)",
  mixFlour: "Mix flour",
  mixWater: "Mix water",
  starterNote: "Starter flour/water is already counted in total formula above.",
  // TimingCard
  timing: "Timing",
  bulkFermentation: "Bulk Fermentation",
  timingBarsModalTitle: "Timing Bar Guide",
  timingBarsModalIntro: "These bars show a fermentation window, not one exact minute. Read them left to right: the darker inner bar marks the earliest likely ready point, and the lighter bar behind it shows the later end of the recommended range.",
  timingBarsBulkTitle: "Bulk Fermentation",
  timingBarsBulkBody: "When the darker bar ends, start checking the dough for rise, bubbles, and jiggle. If it still needs time, let it continue toward the end of the lighter bar.",
  timingBarsColdTitle: "Cold Retard",
  timingBarsColdBody: "For cold retard, the darker fill marks the earliest bake-ready point after chilling. The lighter full bar shows the longer holding window in the fridge before the dough risks going too far.",
  fastest: "Fastest",
  slowest: "Slowest",
  foldSchedule: (count, interval) => `${count} stretch-and-fold sets, every ${interval} min`,
  roomProof: "Room Proof",
  coldRetardProof: "Cold Retard",
  bakeColdNote: "Can bake directly from fridge.",
  totalActiveTime: "Estimated total active time (excl. bake):",
  inoculation: "Inoculation",
  hydration: "Hydration",
  // ScheduleCard
  schedule: "Schedule",
  // WarningsCard
  notesWarnings: "Notes & Warnings",
  // GuidanceCard
  readingYourCrumb: "Reading Your Crumb",
  target: (goal) => `Target (${goal}):`,
  underFermented: "Under-fermented:",
  overFermented: "Over-fermented:",
  guidance: {
    Tight: {
      description: "Dense but moist interior, small uniform bubbles.",
      underFermented: "Gummy center, flat rise, pale crust.",
      overFermented: "Bitter flavor, dense with no oven spring."
    },
    Balanced: {
      description: "Mix of small and medium bubbles, even distribution.",
      underFermented: "Dense patches, brick-like texture on the bottom.",
      overFermented: "Large irregular holes with weak structure, shaggy crumb."
    },
    Open: {
      description: "Large irregular holes, translucent bubble walls — requires high skill.",
      underFermented: "Closed crumb despite high hydration, no bloom.",
      overFermented: "Flat, gummy, shredded crumb with sour overload."
    }
  },
  floatTest: "Float test:",
  floatTestDesc: "Drop a small piece of dough in water — if it floats, bulk is done.",
  pokeTest: "Poke test:",
  pokeTestDesc: "Poke proofed dough — slow, partial spring-back = ready to bake.",
  jiggleTest: "Jiggle test:",
  jiggleTestDesc: "Shake container — dough should move like jello when bulk is complete.",
  // AssumptionsDrawer
  calculationAssumptions: "Calculation Assumptions",
  assumptionsDesc: "These are the values used to calculate your formula, timing, and schedule.",
  done: "Done",
  // TempBand / HydrationBand display
  tempBands: {
    Cold: "Cold",
    Freezing: "Freezing",
    Standard: "Standard",
    Warm: "Warm",
    Hot: "Hot"
  },
  hydrationBands: {
    Low: "Low",
    Medium: "Medium",
    High: "High"
  }
};
const es = {
  // App / header
  appSubtitle: "Fórmula, tiempos y programa",
  saveToHomeScreen: "Guardar en inicio",
  savedToHomeScreen: "Guardado en inicio",
  installHelpTitle: "Añadir DoughCulator a la pantalla de inicio",
  installHelpIntro: "Si no aparece el aviso de instalación, usa el menú del navegador:",
  installHelpIOS: 'iPhone/iPad (Safari): toca Compartir y luego "Añadir a pantalla de inicio".',
  installHelpAndroid: 'Android (Chrome): abre el menú y toca "Instalar app" o "Añadir a pantalla de inicio".',
  installHelpDesktop: "Escritorio (Chrome/Edge): usa el icono de instalación en la barra de direcciones o el menú del navegador.",
  close: "Cerrar",
  assumptions: "Supuestos",
  copyRecipe: "Copiar Receta",
  copied: "¡Copiado!",
  // Empty state
  emptyStateTitle: "Ingresa la cantidad de harina para calcular tu receta.",
  emptyStateSubtitle: "La calculadora se actualiza automáticamente.",
  // Footer
  footerLine1: "Calculadora de masa madre — código abierto, funciona en tu navegador.",
  footerLine2: "Todos los cálculos son orientativos. Tu masa lo sabe mejor.",
  // Copy text
  copyTitle: "🍞 RECETA DE MASA MADRE",
  copyDivider: "=======================",
  copyScheduleHeader: "PROGRAMA",
  copyScheduleDivider: "--------",
  copyAssumptionsHeader: "SUPUESTOS",
  copyAssumptionsDivider: "---------",
  copyFooter: "Generado por DoughCulator",
  // InputSection
  parameters: "Parámetros",
  totalFlour: "Harina Total (g)",
  flourSelection: "Selección de Harina",
  flourTypes: {
    BreadFlour: "Harina de Fuerza",
    AllPurpose: "Harina Todo Uso",
    WholeWheat: "Harina Integral",
    Rye: "Centeno",
    Spelt: "Espelta",
    Einkorn: "Einkorn"
  },
  blendTotal: "Total",
  blendNormalize: "Normalizar al 100%",
  flourBlend: "Mezcla de Harina",
  white: "Blanca",
  wholeWheat: "Integral",
  crumbGoal: "Objetivo de Miga",
  crumbGoalNames: {
    Tight: "Cerrada",
    Balanced: "Equilibrada",
    Open: "Abierta"
  },
  crumbDescriptions: {
    Tight: "Miga densa y uniforme. Ideal para tostadas y sándwiches.",
    Balanced: "Burbujas medianas, miga versátil. Masa madre clásica.",
    Open: "Agujeros grandes, paredes translúcidas. Requiere técnica avanzada."
  },
  advancedOptions: "Opciones Avanzadas",
  ambientTemp: "Temperatura Ambiente",
  doughTemp: "Temperatura de la Masa",
  optional: "— opcional",
  leaveBlankAmbient: "Dejar en blanco para usar temperatura ambiente",
  salt: "Sal",
  saltAutoLabel: (pct, g) => `Auto: ${pct}% = ${g}g`,
  saltManual: "Manual",
  saltOverride: "Personalizar",
  saltBakersPct: "% de panadero relativo a la harina total",
  starterHydration: "Hidratación del Iniciador (%)",
  starterHydrationDefaultLabel: "Predeterminado: 100%",
  starterHydrationManual: "Manual",
  starterHydrationOverride: "Personalizar",
  autolyse: "Autólisis",
  off: "Apagada",
  auto: "Auto",
  duration: "Duración",
  autolyseModalTitle: "Guía de Autólisis",
  autolyseModalIntro: "La autólisis es un reposo corto tras mezclar harina y agua, antes de añadir iniciador y sal. Mejora la hidratación y comienza el desarrollo de gluten con menos amasado.",
  autolyseModalUseTitle: "Cuándo usarla",
  autolyseModalUseItems: [
    "Masas de alta hidratación cuando buscas más extensibilidad y formado más fácil.",
    "Masas con harina integral o harinas muy absorbentes que se benefician de una hidratación completa.",
    "Cuando la masa se siente tensa al mezclar y quieres desarrollar gluten de forma más suave."
  ],
  autolyseModalAvoidTitle: "Cuándo evitarla o acortarla",
  autolyseModalAvoidItems: [
    "Cocina o masa muy cálida (aprox. 29°C / 84°F o más); acórtala o déjala apagada.",
    "Si la masa ya se vuelve floja o pegajosa con rapidez; una autólisis larga puede debilitar estructura.",
    "Cuando necesitas un flujo rápido de mezclar y seguir, y priorizas velocidad."
  ],
  fermentationPhilosophyLabel: "Filosofía de Fermentación",
  philosophyPredictability: "Consistencia",
  philosophyFlavorDev: "Sabor",
  philosophyPredictabilityDesc: "Más levadura en frío — tiempos consistentes.",
  philosophyFlavorDevDesc: "Menos levadura en frío — fermentación más lenta para mayor sabor.",
  philosophyModalTitle: "Filosofía de Fermentación",
  philosophyModalPredictabilityBody: "Consistencia usa una tasa de inoculación más alta cuando bajan las temperaturas. Esto mantiene la fermentación en un calendario fiable independientemente de la estación o las condiciones de cocina — ideal si buscas resultados consistentes y una rutina de horneado reproducible.",
  philosophyModalFlavorDevBody: "Sabor reduce la inoculación en condiciones frías, dejando que la masa fermente lentamente durante más tiempo. Este proceso produce más ácidos acético y láctico, generando un sabor más complejo y ácido — ideal para fermentaciones en frío o cuando tienes flexibilidad de tiempo.",
  proofMethod: "Método de Fermentación Final",
  roomTemp: "Temp. Ambiente",
  coldRetard: "Frío (Nevera)",
  fridgeTemp: "Temperatura de Nevera",
  scheduleMode: "Modo de Programa",
  relative: "Duración",
  clock: "Reloj",
  startTime: "Hora de Inicio (HH:MM)",
  // FormulaCard
  formula: "Fórmula",
  bakersPctSubtitle: "Porcentajes del panadero relativos a la harina total",
  ingredient: "Ingrediente",
  grams: "Gramos",
  bakersPct: "% Panadero",
  totalFlourRow: "Harina Total",
  whiteFlouRow: "— Harina Blanca",
  wwFlourRow: "— Integral",
  water: "Agua",
  saltRow: "Sal",
  starter: "Iniciador",
  totalDough: "Masa Total",
  starterBreakdown: "Desglose del Iniciador",
  starterFlour: "Harina del iniciador",
  starterWater: "Agua del iniciador",
  totalStarter: "Iniciador total",
  mixAdditions: "Lo Que Agregas (de bolsa/grifo)",
  mixFlour: "Harina para mezclar",
  mixWater: "Agua para mezclar",
  starterNote: "La harina/agua del iniciador ya está contada en la fórmula total.",
  // TimingCard
  timing: "Tiempos",
  bulkFermentation: "Fermentación en Masa",
  timingBarsModalTitle: "Guía de Barras de Tiempo",
  timingBarsModalIntro: "Estas barras muestran una ventana de fermentación, no un minuto exacto. Léelas de izquierda a derecha: la barra interior más oscura marca el primer punto probable de estar lista, y la barra más clara detrás muestra el final más tardío del rango recomendado.",
  timingBarsBulkTitle: "Fermentación en Masa",
  timingBarsBulkBody: "Cuando termina la barra más oscura, empieza a revisar volumen, burbujas y temblor de la masa. Si aún necesita tiempo, déjala seguir hasta el final de la barra más clara.",
  timingBarsColdTitle: "Fermentación en Frío",
  timingBarsColdBody: "En frío, el relleno más oscuro marca el punto más temprano para hornear tras el reposo en nevera. La barra clara completa muestra la ventana más larga de permanencia en frío antes de que la masa corra riesgo de pasarse.",
  fastest: "Más rápido",
  slowest: "Más lento",
  foldSchedule: (count, interval) => `${count} series de estirado y plegado, cada ${interval} min`,
  roomProof: "Fermentación a Temp. Ambiente",
  coldRetardProof: "Fermentación en Frío",
  bakeColdNote: "Se puede hornear directamente desde la nevera.",
  totalActiveTime: "Tiempo activo total estimado (sin hornear):",
  inoculation: "Inoculación",
  hydration: "Hidratación",
  // ScheduleCard
  schedule: "Programa",
  // WarningsCard
  notesWarnings: "Notas y Advertencias",
  // GuidanceCard
  readingYourCrumb: "Leyendo Tu Miga",
  target: (goal) => `Objetivo (${goal}):`,
  underFermented: "Subfermentada:",
  overFermented: "Sobrefermentada:",
  guidance: {
    Tight: {
      description: "Interior denso pero húmedo, burbujas pequeñas y uniformes.",
      underFermented: "Centro gomoso, poco volumen, corteza pálida.",
      overFermented: "Sabor amargo, miga densa sin resorte en el horno."
    },
    Balanced: {
      description: "Mezcla de burbujas pequeñas y medianas, distribución uniforme.",
      underFermented: "Zonas densas, textura ladrillo en la base.",
      overFermented: "Agujeros grandes irregulares con estructura débil, miga deshilachada."
    },
    Open: {
      description: "Grandes agujeros irregulares, paredes translúcidas — requiere alta habilidad.",
      underFermented: "Miga cerrada pese a la alta hidratación, sin bloom.",
      overFermented: "Miga plana, gomosa y deshilachada con exceso de acidez."
    }
  },
  floatTest: "Prueba de flotación:",
  floatTestDesc: "Suelta un trozo de masa en agua — si flota, la fermentación en masa terminó.",
  pokeTest: "Prueba del dedo:",
  pokeTestDesc: "Presiona la masa fermentada — si recupera lento y parcialmente, está lista para hornear.",
  jiggleTest: "Prueba del temblor:",
  jiggleTestDesc: "Sacude el recipiente — la masa debe moverse como gelatina al terminar la fermentación.",
  // AssumptionsDrawer
  calculationAssumptions: "Supuestos de Cálculo",
  assumptionsDesc: "Estos son los valores usados para calcular tu fórmula, tiempos y programa.",
  done: "Listo",
  // TempBand / HydrationBand display
  tempBands: {
    Cold: "Frío",
    Freezing: "Muy frío",
    Standard: "Estándar",
    Warm: "Cálido",
    Hot: "Caliente"
  },
  hydrationBands: {
    Low: "Baja",
    Medium: "Media",
    High: "Alta"
  }
};
const sv = {
  // App / header
  appSubtitle: "Formel, timing & schema",
  saveToHomeScreen: "Spara på hemskärmen",
  savedToHomeScreen: "Sparad på hemskärmen",
  installHelpTitle: "Lägg till DoughCulator på hemskärmen",
  installHelpIntro: "Om ingen installationsruta visas, använd webbläsarens meny:",
  installHelpIOS: 'iPhone/iPad (Safari): tryck på Dela och sedan "Lägg till på hemskärmen".',
  installHelpAndroid: 'Android (Chrome): öppna menyn och tryck på "Installera app" eller "Lägg till på hemskärmen".',
  installHelpDesktop: "Desktop (Chrome/Edge): använd installationsikonen i adressfältet eller webbläsarmenyn.",
  close: "Stäng",
  assumptions: "Antaganden",
  copyRecipe: "Kopiera Recept",
  copied: "Kopierat!",
  // Empty state
  emptyStateTitle: "Ange mängden mjöl ovan för att beräkna ditt recept.",
  emptyStateSubtitle: "Kalkylatorn uppdateras automatiskt när du skriver.",
  // Footer
  footerLine1: "Surdegskalkylator — öppen källkod, körs i din webbläsare.",
  footerLine2: "Alla beräkningar är riktlinjer. Din deg vet bäst.",
  // Copy text
  copyTitle: "🍞 SURDEGRECEPT",
  copyDivider: "===============",
  copyScheduleHeader: "SCHEMA",
  copyScheduleDivider: "------",
  copyAssumptionsHeader: "ANTAGANDEN",
  copyAssumptionsDivider: "----------",
  copyFooter: "Genererat av DoughCulator",
  // InputSection
  parameters: "Parametrar",
  totalFlour: "Totalt Mjöl (g)",
  flourSelection: "Mjölval",
  flourTypes: {
    BreadFlour: "Vetemjöl Special",
    AllPurpose: "Vetemjöl",
    WholeWheat: "Fullkornsvetemjöl",
    Rye: "Råg",
    Spelt: "Dinkel",
    Einkorn: "Einkorn"
  },
  blendTotal: "Totalt",
  blendNormalize: "Normalisera till 100%",
  flourBlend: "Mjölblandning",
  white: "Vitt",
  wholeWheat: "Fullkorn",
  crumbGoal: "Smulmål",
  crumbGoalNames: { Tight: "Tät", Balanced: "Balanserad", Open: "Öppen" },
  crumbDescriptions: {
    Tight: "Tät, jämn smul. Bäst för toast & smörgåsar.",
    Balanced: "Medelstora bubblor, mångsidig smul. Klassisk surdeg.",
    Open: "Stora hål, genomskinliga väggar. Avancerad teknik krävs."
  },
  advancedOptions: "Avancerade Alternativ",
  ambientTemp: "Omgivningstemperatur",
  doughTemp: "Degtemperatur",
  optional: "— valfritt",
  leaveBlankAmbient: "Lämna tomt för att använda omgivningstemperatur",
  salt: "Salt",
  saltAutoLabel: (pct, g) => `Auto: ${pct}% = ${g}g`,
  saltManual: "Manuell",
  saltOverride: "Anpassa",
  saltBakersPct: "Bagarprocent relativt totalt mjöl",
  starterHydration: "Surdeghydratation (%)",
  starterHydrationDefaultLabel: "Standard: 100%",
  starterHydrationManual: "Manuell",
  starterHydrationOverride: "Anpassa",
  autolyse: "Autolys",
  off: "Av",
  auto: "Auto",
  duration: "Varaktighet",
  autolyseModalTitle: "Autolysguide",
  autolyseModalIntro: "Autolys är en kort vila efter att mjöl och vatten blandats, innan surdeg och salt tillsätts. Den förbättrar hydreringen och startar glutenutvecklingen med mindre bearbetning.",
  autolyseModalUseTitle: "När du bör använda den",
  autolyseModalUseItems: [
    "Degar med hög hydrering där du vill ha bättre tänjbarhet och enklare formning.",
    "Degar med fullkorn eller törstiga mjölsorter som mår bra av mer fullständig hydrering.",
    "När degen känns stram tidigt i blandningen och du vill ha skonsammare glutenutveckling."
  ],
  autolyseModalAvoidTitle: "När du bör hoppa över eller korta ner",
  autolyseModalAvoidItems: [
    "Mycket varm köks- eller degtemperatur (runt 29°C / 84°F eller högre); håll den kort eller stäng av.",
    "Om degen redan blir slapp eller kladdig snabbt; lång autolys kan minska styrkan.",
    "När du behöver ett snabbt arbetsflöde och prioriterar tempo över små hanteringsvinster."
  ],
  fermentationPhilosophyLabel: "Jäsningsfilosofi",
  philosophyPredictability: "Förutsägbarhet",
  philosophyFlavorDev: "Smakutveckling",
  philosophyPredictabilityDesc: "Mer surdeg vid kyla — konsekvent timing.",
  philosophyFlavorDevDesc: "Mindre surdeg vid kyla — långsammare jäsning ger mer smak.",
  philosophyModalTitle: "Jäsningsfilosofi",
  philosophyModalPredictabilityBody: "Förutsägbarhet använder en högre inokulationsgrad när temperaturen sjunker. Det håller jäsningen på ett pålitligt schema oavsett årstid eller köksförhållanden — idealiskt när du vill ha konsekventa resultat och en repeterbar bakrutin.",
  philosophyModalFlavorDevBody: "Smakutveckling sänker inokulationen i kalla förhållanden och låter degen jäsa långsamt under längre tid. Den förlängda tiden producerar mer ättiksyra och mjölksyra, vilket ger en mer komplex och syrlig smak — perfekt för kall jäsning eller när du har flexibel timing.",
  proofMethod: "Jäsningsmetod",
  roomTemp: "Rumstemperatur",
  coldRetard: "Kall Jäsning",
  fridgeTemp: "Kylskåpstemperatur",
  scheduleMode: "Schemaläge",
  relative: "Relativt",
  clock: "Klocka",
  startTime: "Starttid (HH:MM)",
  // FormulaCard
  formula: "Formel",
  bakersPctSubtitle: "Bagarprocent relativt totalt mjöl",
  ingredient: "Ingrediens",
  grams: "Gram",
  bakersPct: "Bagarens %",
  totalFlourRow: "Totalt Mjöl",
  whiteFlouRow: "— Vitt mjöl",
  wwFlourRow: "— Fullkorn",
  water: "Vatten",
  saltRow: "Salt",
  starter: "Surdeg",
  totalDough: "Total Deg",
  starterBreakdown: "Surdegspecifikation",
  starterFlour: "Surdegsmjöl",
  starterWater: "Surdegsvatten",
  totalStarter: "Total surdeg",
  mixAdditions: "Vad Du Tillsätter (från påse/kran)",
  mixFlour: "Mjöl att blanda",
  mixWater: "Vatten att blanda",
  starterNote: "Surdegsmjöl/vatten är redan inkluderat i totalformeln ovan.",
  // TimingCard
  timing: "Timing",
  bulkFermentation: "Bulkjäsning",
  timingBarsModalTitle: "Guide till Tidsstaplar",
  timingBarsModalIntro: "Dessa staplar visar ett jästidsfönster, inte en exakt minut. Läs dem från vänster till höger: den mörkare inre stapeln markerar den tidigaste sannolika tidpunkten då degen är klar, och den ljusare stapeln bakom visar den senare delen av det rekommenderade intervallet.",
  timingBarsBulkTitle: "Bulkjäsning",
  timingBarsBulkBody: "När den mörkare stapeln tar slut bör du börja kontrollera degens höjd, bubblor och gung. Om den behöver mer tid kan du låta den fortsätta mot slutet av den ljusare stapeln.",
  timingBarsColdTitle: "Kall Jäsning",
  timingBarsColdBody: "För kall jäsning markerar den mörkare fyllningen den tidigaste punkten då degen brukar vara redo att bakas efter kylning. Den ljusare hela stapeln visar det längre förvaringsfönstret i kylen innan degen riskerar att gå för långt.",
  fastest: "Snabbast",
  slowest: "Långsammast",
  foldSchedule: (count, interval) => `${count} sträck-och-vik-set, var ${interval}:e min`,
  roomProof: "Jäsning i Rumstemperatur",
  coldRetardProof: "Kall Jäsning",
  bakeColdNote: "Kan bakas direkt från kylskåpet.",
  totalActiveTime: "Beräknad total aktiv tid (exkl. bakning):",
  inoculation: "Inokulering",
  hydration: "Hydratation",
  // ScheduleCard
  schedule: "Schema",
  // WarningsCard
  notesWarnings: "Noteringar & Varningar",
  // GuidanceCard
  readingYourCrumb: "Tolka Din Smul",
  target: (goal) => `Mål (${goal}):`,
  underFermented: "Underjäst:",
  overFermented: "Överjäst:",
  guidance: {
    Tight: {
      description: "Tät men fuktig inre, små jämna bubblor.",
      underFermented: "Klibbigt centrum, låg volym, blek skorpa.",
      overFermented: "Bitter smak, tät smul utan ugnsresning."
    },
    Balanced: {
      description: "Blandning av små och medelstora bubblor, jämn fördelning.",
      underFermented: "Täta områden, tegelliknande textur i botten.",
      overFermented: "Stora oregelbundna hål med svag struktur, fransig smul."
    },
    Open: {
      description: "Stora oregelbundna hål, genomskinliga bubbelväggar — kräver hög skicklighet.",
      underFermented: "Tät smul trots hög hydratation, ingen blomning.",
      overFermented: "Platt, klibbig, söndrig smul med syraöverskott."
    }
  },
  floatTest: "Flottesttest:",
  floatTestDesc: "Släpp en liten degbit i vatten — om den flyter är bulkjäsningen klar.",
  pokeTest: "Stickprov:",
  pokeTestDesc: "Tryck på den jästa degen — långsam, delvis återfjädring = redo att baka.",
  jiggleTest: "Skakprov:",
  jiggleTestDesc: "Skaka behållaren — degen ska röra sig som gelé när bulkjäsningen är klar.",
  // AssumptionsDrawer
  calculationAssumptions: "Beräkningsantaganden",
  assumptionsDesc: "Dessa är värdena som används för att beräkna din formel, timing och schema.",
  done: "Klar",
  // TempBand / HydrationBand display
  tempBands: {
    Cold: "Kallt",
    Freezing: "Mycket kallt",
    Standard: "Standard",
    Warm: "Varmt",
    Hot: "Hett"
  },
  hydrationBands: {
    Low: "Låg",
    Medium: "Medium",
    High: "Hög"
  }
};
const translations = { en, es, sv };
const WHOLE_GRAIN_FLOURS = ["WholeWheat", "Rye", "Spelt", "Einkorn"];
const ALL_FLOUR_TYPES = ["BreadFlour", "AllPurpose", "WholeWheat", "Rye", "Spelt", "Einkorn"];
const FLOUR_PROPERTIES = {
  BreadFlour: { absorptionCoeff: 1, fermentMult: 1 },
  AllPurpose: { absorptionCoeff: 0.97, fermentMult: 1 },
  WholeWheat: { absorptionCoeff: 1.12, fermentMult: 0.95 },
  Rye: { absorptionCoeff: 1.2, fermentMult: 0.72 },
  Spelt: { absorptionCoeff: 0.95, fermentMult: 0.82 },
  Einkorn: { absorptionCoeff: 1.12, fermentMult: 0.9 }
};
function clamp(min, max, val) {
  return Math.max(min, Math.min(max, val));
}
function calcFormula(inputs2) {
  const {
    totalFlourInputG,
    flourBlend,
    crumbGoal,
    ambientTempC,
    doughTempC,
    saltAutoCalc,
    saltPct,
    starterHydrationAutoCalc,
    starterHydrationPct
  } = inputs2;
  const totalFlourG = totalFlourInputG;
  const totalBlendPct = flourBlend.reduce((s, e) => s + e.pct, 0);
  const normFactor = totalBlendPct > 0 ? 100 / totalBlendPct : 1;
  const wwPctNorm = flourBlend.filter((e) => WHOLE_GRAIN_FLOURS.includes(e.type)).reduce((s, e) => s + e.pct * normFactor, 0);
  const wwRatio = totalFlourG > 0 ? wwPctNorm / 100 : 0;
  const wwFlourG = Math.round(totalFlourG * wwRatio);
  const whiteFlouG = totalFlourG - wwFlourG;
  const blendSum = flourBlend.reduce((s, e) => s + e.pct, 0);
  const norm = blendSum > 0 ? blendSum : 1;
  const blendAbsorption = flourBlend.reduce(
    (s, e) => s + e.pct / norm * FLOUR_PROPERTIES[e.type].absorptionCoeff,
    0
  );
  const blendFermentMult = flourBlend.reduce(
    (s, e) => s + e.pct / norm * FLOUR_PROPERTIES[e.type].fermentMult,
    0
  );
  const baseHydrationMap = {
    Tight: 65,
    Balanced: 73,
    Open: 82
  };
  const baseHydrationPct = baseHydrationMap[crumbGoal];
  const wwHydrationAdjust = (blendAbsorption - 1) * 100;
  const finalHydrationPct = baseHydrationPct + wwHydrationAdjust;
  let hydrationBand;
  if (finalHydrationPct < 70) {
    hydrationBand = "Low";
  } else if (finalHydrationPct <= 75) {
    hydrationBand = "Medium";
  } else {
    hydrationBand = "High";
  }
  const effectiveTempC = doughTempC !== null ? (ambientTempC + doughTempC) / 2 : ambientTempC;
  let tempBand;
  if (effectiveTempC < 18) {
    tempBand = "Freezing";
  } else if (effectiveTempC < 21) {
    tempBand = "Cold";
  } else if (effectiveTempC < 24) {
    tempBand = "Standard";
  } else if (effectiveTempC < 27) {
    tempBand = "Warm";
  } else {
    tempBand = "Hot";
  }
  const { fermentationPhilosophy } = inputs2;
  let inoculationPct;
  if (fermentationPhilosophy === "FlavorDevelopment") {
    const inocBase = {
      Tight: 12,
      Balanced: 14,
      Open: 10
    };
    inoculationPct = inocBase[crumbGoal];
    if (effectiveTempC < 21) {
      inoculationPct -= 4;
    } else if (effectiveTempC < 24) {
      inoculationPct += 0;
    } else if (effectiveTempC < 27) {
      inoculationPct -= 3;
    } else if (effectiveTempC <= 29) {
      inoculationPct -= 5;
    } else {
      inoculationPct -= 6;
    }
    if (hydrationBand === "Low") {
      inoculationPct += 2;
    } else if (hydrationBand === "High") {
      inoculationPct -= 2;
    }
    if (wwRatio >= 0.3) {
      inoculationPct -= 1;
    }
    inoculationPct = clamp(5, 12.5, inoculationPct);
  } else {
    const inocBase = {
      Tight: 18,
      Balanced: 20,
      Open: 16
    };
    inoculationPct = inocBase[crumbGoal];
    if (effectiveTempC < 21) {
      inoculationPct += 4;
    } else if (effectiveTempC < 24) {
      inoculationPct += 0;
    } else if (effectiveTempC < 27) {
      inoculationPct -= 2;
    } else if (effectiveTempC <= 29) {
      inoculationPct -= 4;
    } else {
      inoculationPct -= 6;
    }
    if (hydrationBand === "Low") {
      inoculationPct += 2;
    } else if (hydrationBand === "High") {
      inoculationPct -= 2;
    }
    if (wwRatio >= 0.3) {
      inoculationPct -= 1;
    }
    inoculationPct = clamp(10, 26, inoculationPct);
  }
  const totalWaterG = finalHydrationPct / 100 * totalFlourG;
  const autoSaltPct = clamp(1.8, 2.2, 1.9 + wwRatio * 0.3);
  const effectiveSaltPct = saltAutoCalc ? autoSaltPct : saltPct;
  const saltG = effectiveSaltPct / 100 * totalFlourG;
  const effectiveStarterHydrationPct = starterHydrationAutoCalc ? 100 : starterHydrationPct;
  const clampedStarterHydrationPct = clamp(50, 200, effectiveStarterHydrationPct);
  const starterFlourG = totalFlourG * (inoculationPct / 100);
  const starterTotalG = starterFlourG * (1 + clampedStarterHydrationPct / 100);
  const starterWaterG = starterTotalG - starterFlourG;
  const mixFlourG = totalFlourG - starterFlourG;
  const mixWaterG = totalWaterG - starterWaterG;
  const totalFormulaFlourG = totalFlourG;
  const totalFormulaWaterG = totalWaterG;
  const totalDoughWeightG = totalFlourG + totalWaterG + saltG;
  return {
    totalFlourG,
    whiteFlouG,
    wwFlourG,
    wwRatio,
    baseHydrationPct,
    wwHydrationAdjust,
    blendAbsorption,
    blendFermentMult,
    finalHydrationPct,
    hydrationBand,
    totalWaterG,
    autoSaltPct,
    effectiveSaltPct,
    saltG,
    effectiveStarterHydrationPct: clampedStarterHydrationPct,
    inoculationPct,
    starterFlourG,
    starterWaterG,
    starterTotalG,
    totalFormulaFlourG,
    totalFormulaWaterG,
    totalDoughWeightG,
    mixFlourG,
    mixWaterG,
    effectiveTempC,
    tempBand
  };
}
function calcTiming(formula) {
  const { effectiveTempC, hydrationBand, inoculationPct, blendFermentMult } = formula;
  let bulkBaseMin;
  let bulkBaseMax;
  if (effectiveTempC < 21) {
    [bulkBaseMin, bulkBaseMax] = [8, 12];
  } else if (effectiveTempC < 24) {
    [bulkBaseMin, bulkBaseMax] = [5, 8];
  } else if (effectiveTempC < 27) {
    [bulkBaseMin, bulkBaseMax] = [3.5, 6];
  } else if (effectiveTempC < 29) {
    [bulkBaseMin, bulkBaseMax] = [3, 5];
  } else {
    [bulkBaseMin, bulkBaseMax] = [2, 4];
  }
  const hydrationMult = hydrationBand === "Low" ? 1.15 : hydrationBand === "High" ? 0.85 : 1;
  const inocScale = Math.pow(20 / inoculationPct, 0.35);
  const bulkMin = bulkBaseMin * hydrationMult * inocScale * blendFermentMult;
  const bulkMax = bulkBaseMax * hydrationMult * inocScale * blendFermentMult;
  const proofBaseMin = 1.5;
  const proofBaseMax = 3;
  let proofTempMult;
  if (effectiveTempC < 21) {
    proofTempMult = 2;
  } else if (effectiveTempC < 24) {
    proofTempMult = 1.4;
  } else if (effectiveTempC < 27) {
    proofTempMult = 1;
  } else if (effectiveTempC < 29) {
    proofTempMult = 0.75;
  } else {
    proofTempMult = 0.6;
  }
  const proofMin = proofBaseMin * proofTempMult * hydrationMult * inocScale;
  const proofMax = proofBaseMax * proofTempMult * hydrationMult * inocScale;
  const coldRetardMin = 8;
  const coldRetardMax = 16;
  const foldCount = Math.min(4, Math.floor(bulkMin * 60 / 30));
  const foldIntervalMins = 30;
  return {
    bulkMin,
    bulkMax,
    proofMin,
    proofMax,
    coldRetardMin,
    coldRetardMax,
    foldCount,
    foldIntervalMins
  };
}
function calcSchedule(inputs2, formula, timing, lang2) {
  const { autolyseOn, autolyseMins, proofMethod } = inputs2;
  const { bulkMin, bulkMax, proofMin, proofMax, coldRetardMin, coldRetardMax, foldCount, foldIntervalMins } = timing;
  const s = scheduleStrings[lang2];
  const steps = [];
  if (autolyseOn) {
    steps.push({
      label: s.autolyse,
      durationMins: autolyseMins,
      notes: s.autolyseNote()
    });
  }
  steps.push({
    label: s.addStarterSalt,
    durationMins: 5,
    notes: s.addStarterNote
  });
  steps.push({
    label: s.bulkFermentation,
    durationMins: null,
    rangeMinMins: Math.round(bulkMin * 60),
    rangeMaxMins: Math.round(bulkMax * 60),
    notes: s.bulkNote
  });
  for (let i = 1; i <= foldCount; i++) {
    steps.push({
      label: s.stretchFold(i),
      durationMins: 5,
      notes: s.stretchFoldNote(i, i * foldIntervalMins),
      isSubStep: true
    });
  }
  const foldEndMins = foldCount * foldIntervalMins;
  const remainingBulkMin = Math.max(0, Math.round(bulkMin * 60) - foldEndMins - 5);
  steps.push({
    label: s.restBulk,
    durationMins: remainingBulkMin > 0 ? remainingBulkMin : null,
    notes: s.restNote
  });
  steps.push({
    label: s.preShape,
    durationMins: 5,
    notes: s.preShapeNote
  });
  steps.push({
    label: s.benchRest,
    durationMins: 30,
    notes: s.benchRestNote
  });
  steps.push({
    label: s.finalShape,
    durationMins: 10,
    notes: s.finalShapeNote
  });
  if (proofMethod === "Room") {
    steps.push({
      label: s.roomProof,
      durationMins: null,
      rangeMinMins: Math.round(proofMin * 60),
      rangeMaxMins: Math.round(proofMax * 60),
      notes: s.roomProofNote
    });
  } else {
    steps.push({
      label: s.coldRetard,
      durationMins: null,
      rangeMinMins: coldRetardMin * 60,
      rangeMaxMins: coldRetardMax * 60,
      notes: s.coldRetardNote(inputs2.fridgeTempC)
    });
  }
  steps.push({
    label: s.preheatOven,
    durationMins: 45,
    notes: s.preheatNote
  });
  steps.push({
    label: s.scoreBake,
    durationMins: 45,
    notes: s.scoreBakeNote
  });
  return steps;
}
function calcWarnings(inputs2, formula, lang2) {
  const warnings = [];
  const { effectiveTempC, hydrationBand, wwRatio } = formula;
  const { autolyseOn, autolyseMins, crumbGoal } = inputs2;
  const w = warningStrings[lang2];
  if (effectiveTempC < 18) {
    warnings.push({ level: "danger", message: w.dangerLow });
  }
  if (effectiveTempC >= 30) {
    warnings.push({ level: "danger", message: w.dangerHigh });
  }
  if (effectiveTempC >= 27 && effectiveTempC < 30) {
    warnings.push({ level: "warn", message: w.warnHigh });
  }
  if (effectiveTempC >= 24 && effectiveTempC < 27) {
    warnings.push({ level: "info", message: w.infoSweet });
  }
  if (effectiveTempC >= 20 && effectiveTempC < 24) {
    warnings.push({ level: "info", message: w.infoSlow });
  }
  if (hydrationBand === "High" && effectiveTempC > 26) {
    warnings.push({ level: "warn", message: w.warnHydrationTemp });
  }
  if (hydrationBand === "High") {
    warnings.push({ level: "info", message: w.infoHighHydration });
  }
  if (wwRatio > 0.3 && autolyseOn && autolyseMins > 30) {
    warnings.push({ level: "info", message: w.infoWWAutolyse });
  }
  if (crumbGoal === "Open") {
    warnings.push({ level: "warn", message: w.warnOpenCrumb });
  }
  const ryeEntry = inputs2.flourBlend.find((e) => e.type === "Rye");
  if (ryeEntry && ryeEntry.pct > 30) {
    warnings.push({ level: "warn", message: w.ryeHighWarning });
  }
  return warnings;
}
function calcAssumptions(inputs2, formula, lang2) {
  const {
    saltAutoCalc,
    saltPct,
    starterHydrationAutoCalc,
    autolyseOn,
    autolyseMins
  } = inputs2;
  const {
    effectiveTempC,
    inoculationPct,
    baseHydrationPct,
    wwHydrationAdjust,
    blendAbsorption,
    blendFermentMult,
    finalHydrationPct,
    autoSaltPct,
    effectiveSaltPct,
    effectiveStarterHydrationPct
  } = formula;
  const a = assumptionStrings[lang2];
  const hydrationAdjustSign = wwHydrationAdjust >= 0 ? "+" : "";
  return {
    [a.ambientTemp]: `${effectiveTempC.toFixed(1)}°C`,
    [a.salt]: saltAutoCalc ? a.saltAuto(effectiveSaltPct.toFixed(2), autoSaltPct.toFixed(2)) : a.saltManual(saltPct),
    [a.starterHydration]: starterHydrationAutoCalc ? a.starterHydrationAuto(effectiveStarterHydrationPct) : a.starterHydrationManual(effectiveStarterHydrationPct),
    [a.inoculation]: `${inoculationPct.toFixed(1)}%`,
    [a.baseHydration]: `${baseHydrationPct}%`,
    [a.blendAbsorption]: blendAbsorption.toFixed(3),
    [a.blendFermentMult]: blendFermentMult.toFixed(3),
    [a.wwHydrationAdjust]: `${hydrationAdjustSign}${wwHydrationAdjust.toFixed(1)}%`,
    [a.finalHydration]: `${finalHydrationPct.toFixed(1)}%`,
    [a.autolyse]: autolyseOn ? a.autolyseMins(autolyseMins) : a.off
  };
}
function calculate(inputs2, lang2 = "en") {
  const formula = calcFormula(inputs2);
  const timing = calcTiming(formula);
  const schedule = calcSchedule(inputs2, formula, timing, lang2);
  const warnings = calcWarnings(inputs2, formula, lang2);
  const assumptions = calcAssumptions(inputs2, formula, lang2);
  return { formula, timing, schedule, warnings, assumptions };
}
function cToF(c) {
  return Math.round(c * 9 / 5 + 32);
}
function formatMins(mins) {
  const h = Math.floor(mins / 60);
  const m = Math.round(mins % 60);
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}
function addMinsToTime(startTime, mins) {
  const [hStr, mStr] = startTime.split(":");
  const totalMins = parseInt(hStr) * 60 + parseInt(mStr) + Math.round(mins);
  const wrappedMins = (totalMins % (24 * 60) + 24 * 60) % (24 * 60);
  const h = Math.floor(wrappedMins / 60);
  const m = wrappedMins % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
}
const DEFAULT_INPUTS = {
  totalFlourInputG: 500,
  flourBlend: [
    { type: "BreadFlour", pct: 80 },
    { type: "WholeWheat", pct: 20 }
  ],
  crumbGoal: "Balanced",
  ambientTempC: 24,
  doughTempC: null,
  saltAutoCalc: true,
  saltPct: 2,
  starterHydrationAutoCalc: true,
  starterHydrationPct: 100,
  autolyseMins: 30,
  autolyseOn: false,
  // default off
  proofMethod: "ColdRetard",
  // default overnight cold proof
  fermentationPhilosophy: "Predictability",
  scheduleMode: "relative",
  startTime: null,
  fridgeTempC: 4,
  tempUnit: "C"
};
function loadInputs() {
  return { ...DEFAULT_INPUTS };
}
function createInputsStore() {
  const { subscribe, set, update } = writable(loadInputs());
  return {
    subscribe,
    set: (val) => {
      set(val);
    },
    update: (fn) => {
      update((current) => {
        const next = fn(current);
        return next;
      });
    },
    reset: () => {
      const defaults = { ...DEFAULT_INPUTS };
      set(defaults);
    }
  };
}
const inputs = createInputsStore();
function loadLang() {
  return "en";
}
const lang = writable(loadLang());
lang.subscribe((val) => {
});
const result = derived([inputs, lang], ([$inputs, $lang]) => {
  return calculate($inputs, $lang);
});
const assumptionsOpen = writable(false);
function InputSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const t = derived$1(() => translations[store_get($$store_subs ??= {}, "$lang", lang)]);
    const crumbGoals = ["Tight", "Balanced", "Open"];
    let blendTotal = derived$1(() => store_get($$store_subs ??= {}, "$inputs", inputs).flourBlend.reduce((s, e) => s + e.pct, 0));
    let blendValid = derived$1(() => Math.round(blendTotal()) === 100);
    function isFlourSelected(type) {
      return store_get($$store_subs ??= {}, "$inputs", inputs).flourBlend.some((e) => e.type === type);
    }
    const flourColors = {
      BreadFlour: "#F59E0B",
      AllPurpose: "#60A5FA",
      WholeWheat: "#92400E",
      Rye: "#059669",
      Spelt: "#7C3AED",
      Einkorn: "#F43F5E"
    };
    let autoSaltPct = derived$1(() => store_get($$store_subs ??= {}, "$result", result).formula.autoSaltPct);
    let autoSaltG = derived$1(() => Math.round(store_get($$store_subs ??= {}, "$result", result).formula.saltG));
    let ambientDisplay = derived$1(() => {
      if (store_get($$store_subs ??= {}, "$inputs", inputs).tempUnit === "F") return Math.round(cToF(store_get($$store_subs ??= {}, "$inputs", inputs).ambientTempC));
      return store_get($$store_subs ??= {}, "$inputs", inputs).ambientTempC;
    });
    let doughDisplay = derived$1(() => {
      if (store_get($$store_subs ??= {}, "$inputs", inputs).doughTempC === null) return "";
      if (store_get($$store_subs ??= {}, "$inputs", inputs).tempUnit === "F") return Math.round(cToF(store_get($$store_subs ??= {}, "$inputs", inputs).doughTempC));
      return store_get($$store_subs ??= {}, "$inputs", inputs).doughTempC;
    });
    let fridgeDisplay = derived$1(() => {
      if (store_get($$store_subs ??= {}, "$inputs", inputs).tempUnit === "F") return Math.round(cToF(store_get($$store_subs ??= {}, "$inputs", inputs).fridgeTempC));
      return store_get($$store_subs ??= {}, "$inputs", inputs).fridgeTempC;
    });
    const tempMin = derived$1(() => store_get($$store_subs ??= {}, "$inputs", inputs).tempUnit === "F" ? 32 : 0);
    const tempMax = derived$1(() => store_get($$store_subs ??= {}, "$inputs", inputs).tempUnit === "F" ? 120 : 50);
    const fridgeTempMin = derived$1(() => store_get($$store_subs ??= {}, "$inputs", inputs).tempUnit === "F" ? 28 : -2);
    const fridgeTempMax = derived$1(() => store_get($$store_subs ??= {}, "$inputs", inputs).tempUnit === "F" ? 50 : 10);
    const autolyseMinMins = 20;
    const autolyseMaxMins = 60;
    const autolyseProgressMax = autolyseMaxMins - autolyseMinMins;
    const autolyseProgressValue = derived$1(() => Math.max(0, Math.min(autolyseProgressMax, store_get($$store_subs ??= {}, "$inputs", inputs).autolyseMins - autolyseMinMins)));
    $$renderer2.push(`<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70 overflow-hidden"><div class="flex items-center justify-between px-5 pt-5 pb-3"><h2 class="text-base font-semibold text-base-content uppercase tracking-wide">${escape_html(t().parameters)}</h2> <button type="button" class="btn btn-ghost btn-sm rounded-full border border-base-300 bg-base-100" aria-label="Toggle temperature unit"><span${attr_class(clsx(store_get($$store_subs ??= {}, "$inputs", inputs).tempUnit === "C" ? "text-secondary font-semibold" : "text-base-content/50"))}>°C</span> <span class="text-base-content/30">/</span> <span${attr_class(clsx(store_get($$store_subs ??= {}, "$inputs", inputs).tempUnit === "F" ? "text-secondary font-semibold" : "text-base-content/50"))}>°F</span></button></div> <div class="px-5 pb-5 space-y-5"><div class="form-control"><label for="total-flour" class="label"><span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide">${escape_html(t().totalFlour)}</span></label> <input id="total-flour" type="number" min="0" step="50"${attr("value", store_get($$store_subs ??= {}, "$inputs", inputs).totalFlourInputG)} class="input input-bordered w-full" placeholder="500"/></div> <div><span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">${escape_html(t().flourSelection)}</span> <div class="grid grid-cols-3 gap-2 mt-2"><!--[-->`);
    const each_array = ensure_array_like(ALL_FLOUR_TYPES);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let flourType = each_array[$$index];
      $$renderer2.push(`<button type="button"${attr_class(`btn btn-sm rounded-xl border-2 h-auto py-2 px-1 text-xs ${stringify(isFlourSelected(flourType) ? "btn-secondary border-secondary text-secondary-content" : "btn-ghost border-base-300")}`)}>${escape_html(t().flourTypes[flourType])}</button>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (store_get($$store_subs ??= {}, "$inputs", inputs).flourBlend.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mt-3 space-y-2"><!--[-->`);
      const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$inputs", inputs).flourBlend);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let entry = each_array_1[$$index_1];
        $$renderer2.push(`<div class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full flex-shrink-0"${attr_style(`background-color: ${stringify(flourColors[entry.type])}`)}></span> <span class="text-xs text-base-content/70 flex-1 min-w-0 truncate">${escape_html(t().flourTypes[entry.type])}</span> <div class="flex items-center gap-2 flex-1"><input type="range" min="0" max="100" step="1"${attr("value", entry.pct)} class="range range-sm range-secondary flex-1"/> <input type="number" min="0" max="100" step="1"${attr("value", Math.round(entry.pct))} class="input input-xs w-14 text-right tabular-nums"/> <span class="text-xs text-base-content/70">%</span></div></div>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="flex items-center justify-between mt-2"><span class="text-xs text-base-content/50">${escape_html(t().blendTotal)}: <span${attr_class(`font-semibold tabular-nums ${stringify(blendValid() ? "text-success" : "text-error")}`)}>${escape_html(Math.round(blendTotal()))}%</span></span> `);
      if (!blendValid()) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<button type="button" class="btn btn-xs btn-ghost text-secondary border border-secondary/30">${escape_html(t().blendNormalize)}</button>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="flex rounded-full overflow-hidden h-2 mt-2 gap-px"><!--[-->`);
      const each_array_2 = ensure_array_like(store_get($$store_subs ??= {}, "$inputs", inputs).flourBlend);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let entry = each_array_2[$$index_2];
        $$renderer2.push(`<div class="h-full"${attr_style(`width: ${stringify(Math.max(0, entry.pct))}%; background-color: ${stringify(flourColors[entry.type])}`)}${attr("title", `${stringify(t().flourTypes[entry.type])}: ${stringify(entry.pct)}%`)}></div>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5"><!--[-->`);
      const each_array_3 = ensure_array_like(store_get($$store_subs ??= {}, "$inputs", inputs).flourBlend);
      for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
        let entry = each_array_3[$$index_3];
        $$renderer2.push(`<span class="flex items-center gap-1 text-xs text-base-content/50 tabular-nums"><span class="inline-block w-2 h-2 rounded-full flex-shrink-0"${attr_style(`background-color: ${stringify(flourColors[entry.type])}`)}></span> ${escape_html(t().flourTypes[entry.type])}: ${escape_html(Math.round(store_get($$store_subs ??= {}, "$inputs", inputs).totalFlourInputG * entry.pct / 100))}g</span>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div><p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-2">${escape_html(t().crumbGoal)}</p> <div class="grid grid-cols-3 gap-2"><!--[-->`);
    const each_array_4 = ensure_array_like(crumbGoals);
    for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
      let goal = each_array_4[$$index_4];
      $$renderer2.push(`<button type="button"${attr_class(`btn btn-sm rounded-xl border-2 flex-col h-auto py-3 px-2 ${stringify(store_get($$store_subs ??= {}, "$inputs", inputs).crumbGoal === goal ? "btn-secondary border-secondary text-secondary-content" : "btn-ghost border-base-300")}`)}><span class="text-sm font-bold">${escape_html(t().crumbGoalNames[goal])}</span></button>`);
    }
    $$renderer2.push(`<!--]--></div> <p class="text-xs text-base-content/70 mt-2 leading-snug">${escape_html(t().crumbDescriptions[store_get($$store_subs ??= {}, "$inputs", inputs).crumbGoal])}</p></div> <div><div class="flex items-center gap-1.5 mb-2"><p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">${escape_html(t().fermentationPhilosophyLabel)}</p> <button type="button" class="btn btn-ghost btn-xs btn-circle flex-shrink-0" aria-label="Learn about fermentation philosophy options"><svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></button></div> <div class="grid grid-cols-2 gap-2"><!--[-->`);
    const each_array_5 = ensure_array_like(["Predictability", "FlavorDevelopment"]);
    for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
      let philosophy = each_array_5[$$index_5];
      $$renderer2.push(`<button type="button"${attr_class(`btn btn-sm rounded-xl border-2 h-auto py-2.5 px-3 ${stringify(store_get($$store_subs ??= {}, "$inputs", inputs).fermentationPhilosophy === philosophy ? "btn-secondary border-secondary text-secondary-content" : "btn-ghost border-base-300")}`)}>${escape_html(philosophy === "Predictability" ? t().philosophyPredictability : t().philosophyFlavorDev)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <p class="text-xs text-base-content/70 mt-2 leading-snug">${escape_html(store_get($$store_subs ??= {}, "$inputs", inputs).fermentationPhilosophy === "Predictability" ? t().philosophyPredictabilityDesc : t().philosophyFlavorDevDesc)}</p></div> <div><p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-2">${escape_html(t().proofMethod)}</p> <div class="grid grid-cols-2 gap-2"><!--[-->`);
    const each_array_6 = ensure_array_like(["Room", "ColdRetard"]);
    for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
      let method = each_array_6[$$index_6];
      $$renderer2.push(`<button type="button"${attr_class(`btn btn-sm rounded-xl border-2 h-auto py-2.5 px-3 ${stringify(store_get($$store_subs ??= {}, "$inputs", inputs).proofMethod === method ? "btn-secondary border-secondary text-secondary-content" : "btn-ghost border-base-300")}`)}>${escape_html(method === "Room" ? t().roomTemp : t().coldRetard)}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div> `);
    if (store_get($$store_subs ??= {}, "$inputs", inputs).proofMethod === "ColdRetard") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="form-control"><label for="fridge-temp" class="label"><span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide">${escape_html(t().fridgeTemp)} (°${escape_html(store_get($$store_subs ??= {}, "$inputs", inputs).tempUnit)})</span></label> <input id="fridge-temp" type="number"${attr("min", fridgeTempMin())}${attr("max", fridgeTempMax())} step="0.5"${attr("value", fridgeDisplay())} class="input input-bordered w-full"/></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div><p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-2">${escape_html(t().scheduleMode)}</p> <div class="grid grid-cols-2 gap-2"><!--[-->`);
    const each_array_7 = ensure_array_like(["relative", "clock"]);
    for (let $$index_7 = 0, $$length = each_array_7.length; $$index_7 < $$length; $$index_7++) {
      let mode = each_array_7[$$index_7];
      $$renderer2.push(`<button type="button"${attr_class(`btn btn-sm rounded-xl border-2 h-auto py-2.5 px-3 ${stringify(store_get($$store_subs ??= {}, "$inputs", inputs).scheduleMode === mode ? "btn-secondary border-secondary text-secondary-content" : "btn-ghost border-base-300")}`)}>${escape_html(mode === "relative" ? t().relative : t().clock)}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div> `);
    if (store_get($$store_subs ??= {}, "$inputs", inputs).scheduleMode === "clock") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="form-control"><label for="start-time" class="label"><span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide">${escape_html(t().startTime)}</span></label> <input id="start-time" type="time"${attr("value", store_get($$store_subs ??= {}, "$inputs", inputs).startTime ?? "08:00")} class="input input-bordered w-full"/></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="border-t border-base-200 pt-4 space-y-4"><div class="form-control"><label for="ambient-temp" class="label"><span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide">${escape_html(t().ambientTemp)} (°${escape_html(store_get($$store_subs ??= {}, "$inputs", inputs).tempUnit)})</span></label> <input id="ambient-temp" type="number"${attr("min", tempMin())}${attr("max", tempMax())} step="0.5"${attr("value", ambientDisplay())} class="input input-bordered w-full"/></div> <div class="form-control"><label for="dough-temp" class="label"><span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide">${escape_html(t().doughTemp)} (°${escape_html(store_get($$store_subs ??= {}, "$inputs", inputs).tempUnit)}) <span class="font-normal text-base-content/50">${escape_html(t().optional)}</span></span></label> <input id="dough-temp" type="number"${attr("min", tempMin())}${attr("max", tempMax())} step="0.5"${attr("value", doughDisplay())}${attr("placeholder", t().leaveBlankAmbient)} class="input input-bordered w-full placeholder:text-base-content/30"/></div> <div><div class="flex items-center justify-between mb-1.5"><span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">${escape_html(t().salt)}</span> <div class="flex items-center gap-2"><span class="text-xs text-base-content/50">`);
    if (store_get($$store_subs ??= {}, "$inputs", inputs).saltAutoCalc) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`${escape_html(t().saltAutoLabel(autoSaltPct().toFixed(2), String(autoSaltG())))}`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`${escape_html(t().saltManual)}`);
    }
    $$renderer2.push(`<!--]--></span> <input type="checkbox" class="toggle toggle-secondary toggle-sm"${attr("checked", !store_get($$store_subs ??= {}, "$inputs", inputs).saltAutoCalc, true)} role="switch"${attr("aria-checked", !store_get($$store_subs ??= {}, "$inputs", inputs).saltAutoCalc)} aria-label="Override salt"/> <span class="text-xs text-base-content/70">${escape_html(t().saltOverride)}</span></div></div> `);
    if (!store_get($$store_subs ??= {}, "$inputs", inputs).saltAutoCalc) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="form-control"><input id="salt-pct" type="number" min="1" max="3" step="0.1"${attr("value", store_get($$store_subs ??= {}, "$inputs", inputs).saltPct)} class="input input-bordered w-full" placeholder="2.0"/></div> <p class="text-xs text-base-content/50 mt-1">${escape_html(t().saltBakersPct)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div><div class="flex items-center justify-between mb-1.5"><span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">${escape_html(t().starterHydration)}</span> <div class="flex items-center gap-2"><span class="text-xs text-base-content/50">${escape_html(store_get($$store_subs ??= {}, "$inputs", inputs).starterHydrationAutoCalc ? t().starterHydrationDefaultLabel : t().starterHydrationManual)}</span> <input type="checkbox" class="toggle toggle-secondary toggle-sm"${attr("checked", !store_get($$store_subs ??= {}, "$inputs", inputs).starterHydrationAutoCalc, true)} role="switch"${attr("aria-checked", !store_get($$store_subs ??= {}, "$inputs", inputs).starterHydrationAutoCalc)} aria-label="Override starter hydration"/> <span class="text-xs text-base-content/70">${escape_html(t().starterHydrationOverride)}</span></div></div> `);
    if (!store_get($$store_subs ??= {}, "$inputs", inputs).starterHydrationAutoCalc) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="form-control"><input id="starter-hyd" type="number" min="50" max="200" step="5"${attr("value", store_get($$store_subs ??= {}, "$inputs", inputs).starterHydrationPct)} class="input input-bordered w-full"/></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div><div class="flex items-center justify-between mb-1.5"><div class="flex items-center gap-1.5"><span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">${escape_html(t().autolyse)}</span> <button type="button" class="btn btn-ghost btn-xs btn-circle flex-shrink-0" aria-label="Learn about autolyse"><svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></button></div> <div class="flex items-center gap-2"><span${attr_class(clsx(store_get($$store_subs ??= {}, "$inputs", inputs).autolyseOn ? "text-xs text-base-content/40" : "text-xs text-base-content/70 font-semibold"))}>${escape_html(t().off)}</span> <input type="checkbox" class="toggle toggle-secondary toggle-sm"${attr("checked", store_get($$store_subs ??= {}, "$inputs", inputs).autolyseOn, true)} role="switch"${attr("aria-checked", store_get($$store_subs ??= {}, "$inputs", inputs).autolyseOn)} aria-label="Toggle autolyse auto mode"/> <span${attr_class(clsx(store_get($$store_subs ??= {}, "$inputs", inputs).autolyseOn ? "text-xs text-base-content/70 font-semibold" : "text-xs text-base-content/40"))}>${escape_html(t().auto)}</span></div></div> `);
    if (store_get($$store_subs ??= {}, "$inputs", inputs).autolyseOn) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div><div class="flex justify-between text-xs text-base-content/70 mb-1"><span>${escape_html(t().duration)}</span> <span class="font-semibold text-base-content">${escape_html(store_get($$store_subs ??= {}, "$inputs", inputs).autolyseMins)} min</span></div> <progress class="progress progress-secondary progress-sm w-full"${attr("value", autolyseProgressValue())}${attr("max", autolyseProgressMax)} aria-label="Autolyse duration progress"></progress> <div class="flex justify-between text-xs text-base-content/50 mt-0.5"><span>20 min</span> <span>60 min</span></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div></div></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function FormulaCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const t = derived$1(() => translations[store_get($$store_subs ??= {}, "$lang", lang)]);
    let { formula } = $$props;
    const whiteFlouG = derived$1(() => formula.whiteFlouG);
    const wwFlourG = derived$1(() => formula.wwFlourG);
    function pct(val, base) {
      if (base <= 0) return "—";
      return `${(val / base * 100).toFixed(1)}%`;
    }
    function round(n) {
      return Math.round(n).toString();
    }
    $$renderer2.push(`<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70 overflow-hidden"><div class="px-5 pt-5 pb-3"><h2 class="text-base font-semibold text-base-content uppercase tracking-wide">${escape_html(t().formula)}</h2> <p class="text-xs text-base-content/50 mt-0.5">${escape_html(t().bakersPctSubtitle)}</p></div> <table class="w-full text-sm"><thead><tr class="border-b border-base-200"><th class="text-left px-5 py-2 text-xs font-semibold text-base-content/50 uppercase tracking-wide">${escape_html(t().ingredient)}</th><th class="text-right px-5 py-2 text-xs font-semibold text-base-content/50 uppercase tracking-wide">${escape_html(t().grams)}</th><th class="text-right px-5 py-2 text-xs font-semibold text-base-content/50 uppercase tracking-wide">${escape_html(t().bakersPct)}</th></tr></thead><tbody class="divide-y divide-base-200"><tr><td class="px-5 py-2.5 text-base-content font-medium">${escape_html(t().totalFlourRow)}</td><td class="px-5 py-2.5 text-right tabular-nums text-base-content font-semibold">${escape_html(round(formula.totalFlourG))}g</td><td class="px-5 py-2.5 text-right tabular-nums text-base-content/70">100%</td></tr><tr class="bg-base-200/50"><td class="px-5 py-2 text-base-content/70 text-xs pl-8">${escape_html(t().whiteFlouRow)}</td><td class="px-5 py-2 text-right tabular-nums text-base-content/70 text-xs">${escape_html(round(whiteFlouG()))}g</td><td class="px-5 py-2 text-right tabular-nums text-base-content/50 text-xs">${escape_html(pct(whiteFlouG(), formula.totalFlourG))}</td></tr>`);
    if (wwFlourG() > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<tr class="bg-base-200/50"><td class="px-5 py-2 text-base-content/70 text-xs pl-8">${escape_html(t().wwFlourRow)}</td><td class="px-5 py-2 text-right tabular-nums text-base-content/70 text-xs">${escape_html(round(wwFlourG()))}g</td><td class="px-5 py-2 text-right tabular-nums text-base-content/50 text-xs">${escape_html(pct(wwFlourG(), formula.totalFlourG))}</td></tr>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--><tr><td class="px-5 py-2.5 text-base-content font-medium">${escape_html(t().water)}</td><td class="px-5 py-2.5 text-right tabular-nums text-base-content font-semibold">${escape_html(round(formula.totalWaterG))}g</td><td class="px-5 py-2.5 text-right tabular-nums text-base-content/70">${escape_html(formula.finalHydrationPct.toFixed(1))}%</td></tr><tr><td class="px-5 py-2.5 text-base-content font-medium">${escape_html(t().saltRow)}</td><td class="px-5 py-2.5 text-right tabular-nums text-base-content font-semibold">${escape_html(round(formula.saltG))}g</td><td class="px-5 py-2.5 text-right tabular-nums text-base-content/70">${escape_html(pct(formula.saltG, formula.totalFlourG))}</td></tr><tr><td class="px-5 py-2.5 text-base-content font-medium">${escape_html(t().starter)}</td><td class="px-5 py-2.5 text-right tabular-nums text-base-content font-semibold">${escape_html(round(formula.starterTotalG))}g</td><td class="px-5 py-2.5 text-right tabular-nums text-base-content/70">${escape_html(pct(formula.starterFlourG, formula.totalFlourG))}</td></tr></tbody><tfoot><tr class="border-t-2 border-secondary/30 bg-secondary/10"><td class="px-5 py-3 font-bold text-secondary">${escape_html(t().totalDough)}</td><td class="px-5 py-3 text-right tabular-nums font-bold text-secondary">${escape_html(round(formula.totalDoughWeightG))}g</td><td class="px-5 py-3 text-right"></td></tr></tfoot></table> <div class="px-5 py-4 border-t border-base-200 bg-base-200/60"><p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-2">${escape_html(t().starterBreakdown)}</p> <div class="grid grid-cols-3 gap-3 text-sm"><div class="text-center"><div class="text-lg font-bold tabular-nums text-base-content">${escape_html(round(formula.starterFlourG))}g</div> <div class="text-xs text-base-content/70 mt-0.5">${escape_html(t().starterFlour)}</div></div> <div class="text-center"><div class="text-lg font-bold tabular-nums text-base-content">${escape_html(round(formula.starterWaterG))}g</div> <div class="text-xs text-base-content/70 mt-0.5">${escape_html(t().starterWater)}</div></div> <div class="text-center"><div class="text-lg font-bold tabular-nums text-accent">${escape_html(round(formula.starterTotalG))}g</div> <div class="text-xs text-base-content/70 mt-0.5">${escape_html(t().totalStarter)}</div></div></div></div> <div class="px-5 py-4 border-t border-base-200"><p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-2">${escape_html(t().mixAdditions)}</p> <div class="grid grid-cols-2 gap-3 text-sm"><div class="rounded-lg bg-base-200/80 ring-1 ring-base-300/60 px-3 py-2 text-center"><div class="text-lg font-bold tabular-nums text-base-content">${escape_html(round(formula.mixFlourG))}g</div> <div class="text-xs text-base-content/70 mt-0.5">${escape_html(t().mixFlour)}</div></div> <div class="rounded-lg bg-base-200/80 ring-1 ring-base-300/60 px-3 py-2 text-center"><div class="text-lg font-bold tabular-nums text-base-content">${escape_html(round(formula.mixWaterG))}g</div> <div class="text-xs text-base-content/70 mt-0.5">${escape_html(t().mixWater)}</div></div></div> <p class="text-xs text-base-content/50 mt-2">${escape_html(t().starterNote)}</p></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function TimingCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const t = derived$1(() => translations[store_get($$store_subs ??= {}, "$lang", lang)]);
    let { timing, formula, proofMethod } = $$props;
    const maxPossibleBulk = 12;
    function widthPct(hours) {
      return Math.min(100, hours / maxPossibleBulk * 100);
    }
    const tempBandVariant = {
      Cold: "badge-info",
      Freezing: "badge-info",
      Standard: "badge-success",
      Warm: "badge-warning",
      Hot: "badge-error"
    };
    const hydrationBandVariant = {
      Low: "badge-warning",
      Medium: "badge-success",
      High: "badge-info"
    };
    const bulkMaxPct = derived$1(() => widthPct(timing.bulkMax));
    const bulkMinPct = derived$1(() => widthPct(timing.bulkMin));
    const proofMaxPct = derived$1(() => widthPct(timing.proofMax));
    const proofMinPct = derived$1(() => widthPct(timing.proofMin));
    const coldMinPct = derived$1(() => widthPct(timing.coldRetardMin));
    $$renderer2.push(`<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70"><div class="card-body gap-5 p-5"><div class="flex items-center gap-1.5"><h2 class="text-base font-semibold text-base-content uppercase tracking-wide">${escape_html(t().timing)}</h2> <button type="button" class="btn btn-ghost btn-xs btn-circle flex-shrink-0" aria-label="Learn how to read timing bars"><svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></button></div> <div class="flex flex-wrap gap-2"><span${attr_class(`badge badge-soft ${stringify(tempBandVariant[formula.tempBand] ?? "badge-ghost")} badge-md font-medium`)}>${escape_html(t().tempBands[formula.tempBand])} (${escape_html(formula.effectiveTempC.toFixed(1))}°C)</span> <span${attr_class(`badge badge-soft ${stringify(hydrationBandVariant[formula.hydrationBand] ?? "badge-ghost")} badge-md font-medium`)}>${escape_html(t().hydrationBands[formula.hydrationBand])} ${escape_html(t().hydration)} (${escape_html(formula.finalHydrationPct.toFixed(1))}%)</span> <span class="badge badge-soft badge-accent badge-md font-medium">${escape_html(formula.inoculationPct.toFixed(1))}% ${escape_html(t().inoculation)}</span></div> <div><div class="flex justify-between items-center mb-2"><span class="text-sm font-semibold text-base-content">${escape_html(t().bulkFermentation)}</span> <span class="text-sm tabular-nums font-bold text-secondary">${escape_html(formatMins(timing.bulkMin * 60))} – ${escape_html(formatMins(timing.bulkMax * 60))}</span></div> <div class="relative h-3"><progress class="progress progress-warning w-full absolute inset-0"${attr("value", bulkMaxPct())} max="100"></progress> <progress class="progress progress-secondary w-full absolute inset-0 opacity-80"${attr("value", bulkMinPct())} max="100"></progress></div> <div class="flex justify-between text-xs text-base-content/50 mt-1"><span>${escape_html(t().fastest)}</span> <span>${escape_html(t().slowest)}</span></div> <p class="text-xs text-base-content/70 mt-1">${escape_html(t().foldSchedule(timing.foldCount, timing.foldIntervalMins))}</p></div> <div>`);
    if (proofMethod === "Room") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex justify-between items-center mb-2"><span class="text-sm font-semibold text-base-content">${escape_html(t().roomProof)}</span> <span class="text-sm tabular-nums font-bold text-info">${escape_html(formatMins(timing.proofMin * 60))} – ${escape_html(formatMins(timing.proofMax * 60))}</span></div> <div class="relative h-3"><progress class="progress progress-info w-full absolute inset-0 opacity-50"${attr("value", proofMaxPct())} max="100"></progress> <progress class="progress progress-info w-full absolute inset-0"${attr("value", proofMinPct())} max="100"></progress></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="flex justify-between items-center mb-2"><span class="text-sm font-semibold text-base-content">${escape_html(t().coldRetardProof)}</span> <span class="text-sm tabular-nums font-bold text-secondary">${escape_html(timing.coldRetardMin)}h – ${escape_html(timing.coldRetardMax)}h</span></div> <div class="relative h-3"><progress class="progress progress-secondary w-full absolute inset-0 opacity-50" value="100" max="100"></progress> <progress class="progress progress-secondary w-full absolute inset-0"${attr("value", coldMinPct())} max="100"></progress></div> <p class="text-xs text-base-content/70 mt-1">${escape_html(t().bakeColdNote)}</p>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="rounded-xl bg-secondary/10 ring-1 ring-secondary/20 px-4 py-3 text-sm"><span class="text-base-content/70">${escape_html(t().totalActiveTime)}</span> <span class="font-bold text-base-content ml-1">${escape_html(formatMins((timing.bulkMin + (proofMethod === "Room" ? timing.proofMin : timing.coldRetardMin)) * 60 + 85))} –
				${escape_html(formatMins((timing.bulkMax + (proofMethod === "Room" ? timing.proofMax : timing.coldRetardMax)) * 60 + 95))}</span></div></div></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function ScheduleCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const t = derived$1(() => translations[store_get($$store_subs ??= {}, "$lang", lang)]);
    let { steps, scheduleMode, startTime } = $$props;
    let completedSteps = /* @__PURE__ */ new Set();
    const stepsWithTimes = derived$1(() => {
      let topLevelCounter = 0;
      if (scheduleMode !== "clock" || !startTime) {
        return steps.map((s) => {
          const topLevelIndex = s.isSubStep ? -1 : topLevelCounter++;
          return { step: s, clockTime: null, endClockTime: null, topLevelIndex };
        });
      }
      let cumulativeMins = 0;
      return steps.map((s) => {
        const topLevelIndex = s.isSubStep ? -1 : topLevelCounter++;
        const clockTime = addMinsToTime(startTime, cumulativeMins);
        const durMins = s.durationMins ?? (s.rangeMinMins != null ? s.rangeMinMins : 0);
        cumulativeMins += durMins;
        const endClockTime = addMinsToTime(startTime, cumulativeMins);
        return { step: s, clockTime, endClockTime, topLevelIndex };
      });
    });
    function durationLabel(s) {
      if (s.durationMins !== null && s.durationMins !== void 0) {
        return formatMins(s.durationMins);
      }
      if (s.rangeMinMins !== void 0 && s.rangeMaxMins !== void 0) {
        return `${formatMins(s.rangeMinMins)} – ${formatMins(s.rangeMaxMins)}`;
      }
      return "";
    }
    $$renderer2.push(`<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70"><div class="card-body p-5"><h2 class="text-base font-semibold text-base-content uppercase tracking-wide mb-1">${escape_html(t().schedule)}</h2> <p class="text-xs italic text-base-content/60 mb-3">Press to mark completed step</p> <ol class="relative space-y-0"><!--[-->`);
    const each_array = ensure_array_like(stepsWithTimes());
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let { step, clockTime, endClockTime, topLevelIndex } = each_array[i];
      if (step.isSubStep) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<li class="flex gap-3 pb-3 relative group cursor-pointer select-none pl-11" role="checkbox"${attr("aria-checked", completedSteps.has(i))} tabindex="0"><div class="absolute left-4 top-0 bottom-0 w-px bg-secondary/20"></div> <div${attr_class(`shrink-0 w-5 h-5 rounded-sm rotate-45 text-[9px] font-bold flex items-center justify-center z-10 transition-colors mt-0.5 ${stringify(completedSteps.has(i) ? "bg-success/15 text-success" : "bg-secondary/10 text-secondary/70 group-hover:bg-secondary/20")}`)}><span class="-rotate-45">`);
        if (completedSteps.has(i)) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`✓`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></span></div> <div${attr_class(`flex-1 min-w-0 transition-opacity ${stringify(completedSteps.has(i) ? "opacity-50" : "")}`)}><div class="flex items-start justify-between gap-2"><span${attr_class(`text-xs font-medium leading-tight transition-colors ${stringify(completedSteps.has(i) ? "text-base-content/40 line-through" : "text-base-content/80")}`)}>${escape_html(step.label)}</span> <div class="shrink-0 text-right">`);
        if (scheduleMode === "clock" && clockTime) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div${attr_class(`text-xs tabular-nums ${stringify(completedSteps.has(i) ? "text-base-content/40 line-through" : "text-secondary/70")}`)}>${escape_html(clockTime)}</div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<div${attr_class(`text-xs tabular-nums ${stringify(completedSteps.has(i) ? "text-base-content/40 line-through" : "text-secondary/70")}`)}>${escape_html(durationLabel(step))}</div>`);
        }
        $$renderer2.push(`<!--]--></div></div> `);
        if (step.notes) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p${attr_class(`text-[11px] mt-0.5 leading-snug ${stringify(completedSteps.has(i) ? "text-base-content/25 line-through" : "text-base-content/55")}`)}>${escape_html(step.notes)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div></li>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<li class="flex gap-4 pb-5 relative group cursor-pointer select-none" role="checkbox"${attr("aria-checked", completedSteps.has(i))} tabindex="0">`);
        if (i < stepsWithTimes().length - 1) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="absolute left-4 top-8 bottom-0 w-px bg-secondary/20"></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <div${attr_class(`shrink-0 w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center z-10 transition-colors ${stringify(completedSteps.has(i) ? "bg-success/15 text-success" : "bg-secondary/15 text-secondary group-hover:bg-secondary/25")}`)}>`);
        if (completedSteps.has(i)) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`✓`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`${escape_html(topLevelIndex + 1)}`);
        }
        $$renderer2.push(`<!--]--></div> <div${attr_class(`flex-1 min-w-0 transition-opacity ${stringify(completedSteps.has(i) ? "opacity-50" : "")}`)}><div class="flex items-start justify-between gap-2"><span${attr_class(`text-sm font-semibold leading-tight transition-colors ${stringify(completedSteps.has(i) ? "text-base-content/50 line-through" : "text-base-content")}`)}>${escape_html(step.label)}</span> <div class="shrink-0 text-right">`);
        if (scheduleMode === "clock" && clockTime) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div${attr_class(`text-xs font-bold tabular-nums ${stringify(completedSteps.has(i) ? "text-base-content/50 line-through" : "text-secondary")}`)}>${escape_html(clockTime)}</div> `);
          if (endClockTime && endClockTime !== clockTime) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<div${attr_class(`text-xs text-base-content/50 tabular-nums ${stringify(completedSteps.has(i) ? "line-through" : "")}`)}>→ ${escape_html(endClockTime)}</div>`);
          } else {
            $$renderer2.push("<!--[-1-->");
          }
          $$renderer2.push(`<!--]-->`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<div${attr_class(`text-xs font-bold tabular-nums ${stringify(completedSteps.has(i) ? "text-base-content/50 line-through" : "text-secondary")}`)}>${escape_html(durationLabel(step))}</div>`);
        }
        $$renderer2.push(`<!--]--></div></div> `);
        if (step.notes) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p${attr_class(`text-xs mt-1 leading-snug ${stringify(completedSteps.has(i) ? "text-base-content/30 line-through" : "text-base-content/70")}`)}>${escape_html(step.notes)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div></li>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></ol></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function WarningsCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const t = derived$1(() => translations[store_get($$store_subs ??= {}, "$lang", lang)]);
    let { warnings } = $$props;
    const alertVariant = {
      info: "alert-info alert-soft",
      warn: "alert-warning alert-soft",
      danger: "alert-error alert-soft"
    };
    if (warnings.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70"><div class="card-body p-5 gap-3"><h2 class="text-base font-semibold text-base-content uppercase tracking-wide">${escape_html(t().notesWarnings)}</h2> <!--[-->`);
      const each_array = ensure_array_like(warnings);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let w = each_array[$$index];
        $$renderer2.push(`<div${attr_class(`alert ${stringify(alertVariant[w.level] ?? "alert-info")} text-sm py-3 px-4`)}><span class="shrink-0 text-base leading-none">`);
        if (w.level === "info") {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`ℹ`);
        } else if (w.level === "warn") {
          $$renderer2.push("<!--[1-->");
          $$renderer2.push(`⚠`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`✕`);
        }
        $$renderer2.push(`<!--]--></span> <p class="leading-snug">${escape_html(w.message)}</p></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function GuidanceCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const t = derived$1(() => translations[store_get($$store_subs ??= {}, "$lang", lang)]);
    let { crumbGoal } = $$props;
    const info = derived$1(() => t().guidance[crumbGoal]);
    const translatedGoal = derived$1(() => t().crumbGoalNames[crumbGoal]);
    $$renderer2.push(`<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70"><div class="card-body p-5"><h2 class="text-base font-semibold text-base-content uppercase tracking-wide mb-3">${escape_html(t().readingYourCrumb)}</h2> <div class="text-sm text-base-content space-y-2"><p><span class="font-semibold text-secondary">${escape_html(t().target(translatedGoal()))}</span> ${escape_html(info().description)}</p> <p><span class="font-semibold text-warning">${escape_html(t().underFermented)}</span> ${escape_html(info().underFermented)}</p> <p><span class="font-semibold text-error">${escape_html(t().overFermented)}</span> ${escape_html(info().overFermented)}</p></div> <div class="mt-4 pt-4 border-t border-base-200 text-xs text-base-content/70 space-y-1"><p><strong>${escape_html(t().floatTest)}</strong> ${escape_html(t().floatTestDesc)}</p> <p><strong>${escape_html(t().pokeTest)}</strong> ${escape_html(t().pokeTestDesc)}</p> <p><strong>${escape_html(t().jiggleTest)}</strong> ${escape_html(t().jiggleTestDesc)}</p></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function AssumptionsDrawer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const t = derived$1(() => translations[store_get($$store_subs ??= {}, "$lang", lang)]);
    let { assumptions } = $$props;
    if (store_get($$store_subs ??= {}, "$assumptionsOpen", assumptionsOpen)) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<button type="button" class="fixed inset-0 z-40 bg-neutral/40 backdrop-blur-sm" aria-label="Close assumptions drawer"></button> <div class="fixed bottom-0 left-0 right-0 z-50 max-h-[70vh] overflow-y-auto rounded-t-2xl bg-base-100 shadow-xl ring-1 ring-base-300/80" role="dialog" aria-modal="true"${attr("aria-label", t().calculationAssumptions)}><div class="sticky top-0 flex items-center justify-between px-5 py-4 bg-base-100/95 backdrop-blur border-b border-base-200"><h2 class="text-base font-semibold text-base-content">${escape_html(t().calculationAssumptions)}</h2> <button type="button" class="btn btn-ghost btn-sm btn-circle" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="px-5 py-4"><p class="text-sm text-base-content/70 mb-4">${escape_html(t().assumptionsDesc)}</p> <dl class="space-y-2"><!--[-->`);
      const each_array = ensure_array_like(Object.entries(assumptions));
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let [key, value] = each_array[$$index];
        $$renderer2.push(`<div class="flex justify-between items-center py-2 border-b border-base-200"><dt class="text-sm text-base-content/70">${escape_html(key)}</dt> <dd class="text-sm font-semibold text-base-content tabular-nums">${escape_html(value)}</dd></div>`);
      }
      $$renderer2.push(`<!--]--></dl></div> <div class="px-5 pb-6"><button type="button" class="btn btn-primary w-full">${escape_html(t().done)}</button></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const t = derived$1(() => translations[store_get($$store_subs ??= {}, "$lang", lang)]);
    const totalFlour = derived$1(() => store_get($$store_subs ??= {}, "$inputs", inputs).totalFlourInputG);
    let darkMode = false;
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>DoughCulator</title>`);
      });
    });
    $$renderer2.push(`<div class="min-h-screen bg-gradient-to-b from-base-200 via-base-200 to-base-300/40"><header class="bg-neutral/95 text-neutral-content border-b border-primary/25 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-neutral/90 sticky top-0 z-30">`);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="install-cta-row border-b border-neutral-content/15 bg-neutral/70 svelte-1uha8ag"><div class="max-w-2xl mx-auto px-4 py-2 flex justify-end"><button type="button"${attr_class(`btn btn-xs sm:btn-sm rounded-full shadow-sm ${stringify("btn-outline border-neutral-content/30 text-neutral-content hover:border-neutral-content/45 hover:bg-neutral-content/10 hover:text-neutral-content")}`)}>${escape_html(t().saveToHomeScreen)}</button></div></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="max-w-2xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-y-3"><div class="flex items-center gap-3 min-w-0"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-xl text-primary ring-1 ring-primary/35" aria-hidden="true">🍞</span> <div><h1 class="text-base font-bold text-neutral-content leading-tight">DoughCulator</h1> <p class="text-xs text-neutral-content/70 leading-tight">${escape_html(t().appSubtitle)}</p></div></div> <div class="flex items-center flex-wrap justify-end gap-2"><label class="swap swap-rotate inline-grid h-9 w-9 place-items-center rounded-full border border-transparent bg-transparent text-neutral-content/75 transition-colors duration-200 hover:border-neutral-content/35 hover:bg-neutral-content/10 hover:text-neutral-content focus-within:border-primary/45 focus-within:ring-2 focus-within:ring-primary/55 focus-within:ring-offset-2 focus-within:ring-offset-neutral/95" aria-label="Toggle dark mode"><input type="checkbox"${attr("checked", darkMode, true)} class="sr-only appearance-none"/> <svg class="swap-on h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg> <svg class="swap-off h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg></label> <div class="join border border-neutral-content/25 rounded-full bg-neutral-content/5 p-0.5" aria-label="Select language"><button type="button"${attr_class(`btn btn-xs join-item rounded-l-full border-0 ${stringify(store_get($$store_subs ??= {}, "$lang", lang) === "en" ? "btn-primary" : "btn-ghost text-neutral-content/70 hover:text-neutral-content hover:bg-neutral-content/10")}`)}>EN</button> <button type="button"${attr_class(`btn btn-xs join-item border-0 ${stringify(store_get($$store_subs ??= {}, "$lang", lang) === "es" ? "btn-primary" : "btn-ghost text-neutral-content/70 hover:text-neutral-content hover:bg-neutral-content/10")}`)}>ES</button> <button type="button"${attr_class(`btn btn-xs join-item rounded-r-full border-0 ${stringify(store_get($$store_subs ??= {}, "$lang", lang) === "sv" ? "btn-primary" : "btn-ghost text-neutral-content/70 hover:text-neutral-content hover:bg-neutral-content/10")}`)}>SV</button></div> <button type="button" class="btn btn-outline btn-sm rounded-full border-neutral-content/25 text-neutral-content/80 hover:border-neutral-content/40 hover:bg-neutral-content/10 hover:text-neutral-content">${escape_html(t().assumptions)}</button> <button type="button"${attr("disabled", totalFlour() <= 0, true)}${attr_class(`btn btn-sm rounded-full shadow-sm ${stringify(totalFlour() > 0 ? "btn-primary" : "btn-disabled")}`)}>${escape_html(t().copyRecipe)}</button></div></div></header> <main class="max-w-2xl mx-auto px-4 py-6 space-y-4">`);
    InputSection($$renderer2);
    $$renderer2.push(`<!----> `);
    if (totalFlour() > 0) {
      $$renderer2.push("<!--[0-->");
      WarningsCard($$renderer2, {
        warnings: store_get($$store_subs ??= {}, "$result", result).warnings
      });
      $$renderer2.push(`<!----> `);
      FormulaCard($$renderer2, {
        formula: store_get($$store_subs ??= {}, "$result", result).formula
      });
      $$renderer2.push(`<!----> `);
      TimingCard($$renderer2, {
        timing: store_get($$store_subs ??= {}, "$result", result).timing,
        formula: store_get($$store_subs ??= {}, "$result", result).formula,
        proofMethod: store_get($$store_subs ??= {}, "$inputs", inputs).proofMethod
      });
      $$renderer2.push(`<!----> `);
      ScheduleCard($$renderer2, {
        steps: store_get($$store_subs ??= {}, "$result", result).schedule,
        scheduleMode: store_get($$store_subs ??= {}, "$inputs", inputs).scheduleMode,
        startTime: store_get($$store_subs ??= {}, "$inputs", inputs).scheduleMode === "clock" ? store_get($$store_subs ??= {}, "$inputs", inputs).startTime ?? "08:00" : null
      });
      $$renderer2.push(`<!----> `);
      GuidanceCard($$renderer2, {
        crumbGoal: store_get($$store_subs ??= {}, "$inputs", inputs).crumbGoal
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="card bg-base-100/95 shadow-sm ring-1 ring-base-300/70"><div class="card-body items-center text-center"><div class="text-4xl mb-3" aria-hidden="true">⚖️</div> <p class="text-base-content/70 font-medium">${escape_html(t().emptyStateTitle)}</p> <p class="text-base-content/50 text-sm mt-1">${escape_html(t().emptyStateSubtitle)}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></main> <footer class="max-w-2xl mx-auto px-4 py-8 text-center text-xs text-base-content/60"><p>${escape_html(t().footerLine1)}</p> <p class="mt-1">${escape_html(t().footerLine2)}</p> <div class="mt-6 flex justify-center"><a href="https://www.buymeacoffee.com/alestryperez" target="_blank" rel="noopener noreferrer"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important; width: 217px !important;" loading="lazy"/></a></div></footer> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    AssumptionsDrawer($$renderer2, {
      assumptions: store_get($$store_subs ??= {}, "$result", result).assumptions
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
