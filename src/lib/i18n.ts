// ============================================================
// DoughCulator — Internationalization (EN / ES / SV)
// ============================================================

export type Lang = 'en' | 'es' | 'sv';

// ------------------------------------
// Calculator-level string tables
// (used by calculator.ts)
// ------------------------------------

export const scheduleStrings = {
	en: {
		autolyse: 'Autolyse',
		autolyseNote: () =>
			'Mix flour and most of water (hold back ~50g water, all salt, all starter). Cover and rest.',
		addStarterSalt: 'Add Starter + Salt',
		addStarterNote: 'Incorporate starter and salt, pinch and fold until fully integrated.',
		bulkFermentation: 'Bulk Fermentation',
		bulkNote:
			'Ferment until dough has grown 50–75%, feels airy, passes float test. Adjust based on your environment.',
		stretchFold: (n: number) => `Stretch & Fold ${n}`,
		stretchFoldNote: (n: number, mins: number) =>
			`Set of 4 coil folds (${mins} min into bulk). Dough should start to hold tension.`,
		restBulk: 'Rest (Remaining Bulk)',
		restNote:
			'Cover and leave undisturbed. Watch for signs of fermentation (bubbles, jiggle, rise).',
		preShape: 'Pre-shape',
		preShapeNote: 'Gentle pre-shape, rest on counter uncovered.',
		benchRest: 'Bench Rest',
		benchRestNote: 'Allow gluten to relax before final shape.',
		finalShape: 'Final Shape',
		finalShapeNote:
			'Shape into batard or boule. Build surface tension. Place seam-side up in floured banneton.',
		roomProof: 'Room Temperature Proof',
		roomProofNote:
			'Cover banneton. Dough should puff and pass the poke test (slow spring-back).',
		coldRetard: 'Cold Retard (Fridge)',
		coldRetardNote: (temp: number) =>
			`Place covered banneton in fridge at ${temp}°C. Can bake directly from cold.`,
		preheatOven: 'Preheat Oven + Dutch Oven',
		preheatNote:
			'500°F / 260°C with Dutch oven inside. Oven must be fully saturated with heat.',
		scoreBake: 'Score + Bake',
		scoreBakeNote:
			'Score dough quickly. Bake covered 20 min, then uncover and bake 25 min more until deep golden.'
	},
	es: {
		autolyse: 'Autólisis',
		autolyseNote: () =>
			'Mezcla la harina y la mayor parte del agua (reserva ~50g de agua, toda la sal e iniciador). Tapa y reposa.',
		addStarterSalt: 'Agregar Iniciador + Sal',
		addStarterNote:
			'Incorpora el iniciador y la sal; pellizca y pliega hasta integrar completamente.',
		bulkFermentation: 'Fermentación en Masa',
		bulkNote:
			'Fermenta hasta que la masa crezca un 50–75%, se sienta aireada y pase la prueba de flotación. Ajusta según tu ambiente.',
		stretchFold: (n: number) => `Estirado y Plegado ${n}`,
		stretchFoldNote: (n: number, mins: number) =>
			`Serie de 4 pliegues en espiral (${mins} min desde el inicio). La masa debe comenzar a mantener tensión.`,
		restBulk: 'Reposo (Resto de Fermentación)',
		restNote:
			'Tapa y deja reposar sin tocar. Observa señales de fermentación (burbujas, temblor, subida).',
		preShape: 'Pre-formado',
		preShapeNote: 'Pre-forma con cuidado y deja reposar en la mesa sin tapar.',
		benchRest: 'Reposo en Mesa',
		benchRestNote: 'Deja que el gluten se relaje antes del formado final.',
		finalShape: 'Formado Final',
		finalShapeNote:
			'Forma un batard o boule. Crea tensión superficial. Coloca con la costura hacia arriba en el banneton enharinado.',
		roomProof: 'Fermentación a Temperatura Ambiente',
		roomProofNote:
			'Tapa el banneton. La masa debe hincharse y pasar la prueba del dedo (recuperación lenta).',
		coldRetard: 'Fermentación en Frío (Nevera)',
		coldRetardNote: (temp: number) =>
			`Coloca el banneton tapado en la nevera a ${temp}°C. Se puede hornear directamente desde el frío.`,
		preheatOven: 'Precalentar Horno + Olla',
		preheatNote: '260°C / 500°F con la olla dentro. El horno debe estar completamente caliente.',
		scoreBake: 'Greñar + Hornear',
		scoreBakeNote:
			'Greña rápidamente. Hornea tapado 20 min, luego destapa y hornea 25 min más hasta dorar bien.'
	},
	sv: {
		autolyse: 'Autolys',
		autolyseNote: () =>
			'Blanda mjöl och det mesta av vattnet (håll tillbaka ~50g vatten, allt salt och all surdeg). Täck och vila.',
		addStarterSalt: 'Tillsätt Surdeg + Salt',
		addStarterNote:
			'Blanda in surdegen och saltet, nyp och vik tills allt är helt integrerat.',
		bulkFermentation: 'Bulkjäsning',
		bulkNote:
			'Jäs tills degen vuxit 50–75%, känns luftig och klarar flottestet. Justera efter din miljö.',
		stretchFold: (n: number) => `Sträck & Vik ${n}`,
		stretchFoldNote: (n: number, mins: number) =>
			`4 vikningar (${mins} min in i bulkjäsningen). Degen ska börja hålla spänning.`,
		restBulk: 'Vila (Resterande Bulkjäsning)',
		restNote:
			'Täck och låt stå ostörd. Titta efter jästecken (bubblor, rörelse, stigning).',
		preShape: 'Förformning',
		preShapeNote: 'Försiktig förformning, vila på bänken utan täckning.',
		benchRest: 'Bänkvila',
		benchRestNote: 'Låt glutenet slappna av inför slutformningen.',
		finalShape: 'Slutformning',
		finalShapeNote:
			'Forma till batard eller boule. Bygg upp ytterspänning. Lägg med skarven uppåt i mjölat jäskorg.',
		roomProof: 'Jäsning i Rumstemperatur',
		roomProofNote:
			'Täck jäskorgen. Degen ska puffa upp och klara stickprovet (långsam återfjädring).',
		coldRetard: 'Kall Jäsning (Kylskåp)',
		coldRetardNote: (temp: number) =>
			`Ställ täckt jäskorg i kylskåp på ${temp}°C. Kan bakas direkt från kylskåpet.`,
		preheatOven: 'Förvärm Ugn + Gryta',
		preheatNote:
			'260°C / 500°F med gjutjärnsgryta inuti. Ugnen måste vara ordentligt uppvärmd.',
		scoreBake: 'Snitta + Baka',
		scoreBakeNote:
			'Snitta snabbt. Baka täckt i 20 min, ta sedan av locket och baka ytterligare 25 min tills djupt gyllenbrun.'
	}
};

export const warningStrings = {
	en: {
		dangerLow:
			'Dough temp dangerously low — fermentation nearly dormant. Consider warming location.',
		dangerHigh:
			'Above 30°C — overproofing risk and structural integrity drops. Use cold water, cool location, or fridge.',
		warnHigh:
			'High temperature — watch dough closely, may ferment faster than estimated.',
		infoSweet: 'Sweet spot temperature — ideal for active fermentation.',
		infoSlow:
			'Slow & sour zone — excellent flavor development, longer timeline.',
		warnHydrationTemp:
			'High hydration + warm temp — runaway fermentation risk. Aim for cooler environment (~22–23°C).',
		infoHighHydration:
			'High hydration dough — requires strong bench technique. Wet hands, gentle folds.',
		infoWWAutolyse:
			'High whole wheat % — consider shorter autolyse (20–25 min) or bassinage technique to improve handling.',
		warnOpenCrumb:
			'Open crumb requires tighter environmental control. Monitor dough closely for proper fermentation signs.'
	},
	es: {
		dangerLow:
			'Temperatura peligrosamente baja — fermentación casi inactiva. Considera un lugar más cálido.',
		dangerHigh:
			'Por encima de 30°C — riesgo de sobrefermentación y pérdida de estructura. Usa agua fría, un lugar fresco o la nevera.',
		warnHigh:
			'Temperatura alta — vigila la masa de cerca, puede fermentar más rápido de lo estimado.',
		infoSweet: 'Temperatura ideal — perfecta para una fermentación activa.',
		infoSlow:
			'Zona lenta y ácida — excelente desarrollo de sabor, mayor tiempo de fermentación.',
		warnHydrationTemp:
			'Hidratación alta + temperatura cálida — riesgo de fermentación desbocada. Busca un ambiente más fresco (~22–23°C).',
		infoHighHydration:
			'Masa de alta hidratación — requiere buena técnica de mesa. Manos húmedas y pliegues suaves.',
		infoWWAutolyse:
			'Alto % de integral — considera una autólisis más corta (20–25 min) o técnica de bassinage para mejorar el manejo.',
		warnOpenCrumb:
			'La miga abierta requiere un control ambiental más riguroso. Vigila la masa de cerca para detectar señales correctas de fermentación.'
	},
	sv: {
		dangerLow:
			'Degens temperatur farligt låg — jäsningen nästan inaktiv. Överväg en varmare plats.',
		dangerHigh:
			'Över 30°C — risk för överjäsning och strukturen försämras. Använd kallt vatten, sval plats eller kylskåp.',
		warnHigh:
			'Hög temperatur — övervaka degen noga, kan jäsa snabbare än beräknat.',
		infoSweet: 'Idealtemperatur — perfekt för aktiv jäsning.',
		infoSlow:
			'Långsam & syrlig zon — utmärkt smakutveckling, längre tidsram.',
		warnHydrationTemp:
			'Hög hydratation + varm temperatur — risk för skenande jäsning. Sikta på svalare miljö (~22–23°C).',
		infoHighHydration:
			'Hög hydratation — kräver bra bänkteknik. Blöta händer, varsamma vikningar.',
		infoWWAutolyse:
			'Hög andel fullkorn — överväg kortare autolys (20–25 min) eller bassinage-teknik för bättre hantering.',
		warnOpenCrumb:
			'Öppen smulstruktur kräver noggrannare miljökontroll. Övervaka degen noga för rätt jästecken.'
	}
};

export const assumptionStrings = {
	en: {
		ambientTemp: 'Ambient temp',
		salt: 'Salt',
		starterHydration: 'Starter hydration',
		inoculation: 'Inoculation',
		baseHydration: 'Base hydration',
		wwHydrationAdjust: 'WW hydration adjust',
		finalHydration: 'Final hydration',
		autolyse: 'Autolyse',
		off: 'Off',
		saltAuto: (pct: string, computed: string) =>
			`${pct}% (auto — ${computed}% computed from flour blend)`,
		saltManual: (pct: number) => `${pct}% (manual override)`,
		autolyseMins: (mins: number) => `${mins} min`
	},
	es: {
		ambientTemp: 'Temperatura ambiente',
		salt: 'Sal',
		starterHydration: 'Hidratación del iniciador',
		inoculation: 'Inoculación',
		baseHydration: 'Hidratación base',
		wwHydrationAdjust: 'Ajuste hidratación integral',
		finalHydration: 'Hidratación final',
		autolyse: 'Autólisis',
		off: 'Apagada',
		saltAuto: (pct: string, computed: string) =>
			`${pct}% (auto — ${computed}% calculado desde la mezcla de harina)`,
		saltManual: (pct: number) => `${pct}% (ajuste manual)`,
		autolyseMins: (mins: number) => `${mins} min`
	},
	sv: {
		ambientTemp: 'Omgivningstemperatur',
		salt: 'Salt',
		starterHydration: 'Surdeghydratation',
		inoculation: 'Inokulering',
		baseHydration: 'Bashydratation',
		wwHydrationAdjust: 'Fullkornsjustering hydratation',
		finalHydration: 'Sluthydratation',
		autolyse: 'Autolys',
		off: 'Av',
		saltAuto: (pct: string, computed: string) =>
			`${pct}% (auto — ${computed}% beräknat från mjölblandningen)`,
		saltManual: (pct: number) => `${pct}% (manuell inställning)`,
		autolyseMins: (mins: number) => `${mins} min`
	}
};

// ------------------------------------
// UI string tables (used by components)
// ------------------------------------

const en = {
	// App / header
	appSubtitle: 'Formula, timing & schedule',
	assumptions: 'Assumptions',
	copyRecipe: 'Copy Recipe',
	copied: 'Copied!',
	// Empty state
	emptyStateTitle: 'Enter your flour amounts above to calculate your recipe.',
	emptyStateSubtitle: 'The calculator updates automatically as you type.',
	// Footer
	footerLine1: 'Sourdough Calculator — open source, runs entirely in your browser.',
	footerLine2: 'All calculations are guidelines. Your dough knows best.',
	// Copy text
	copyTitle: '🍞 SOURDOUGH RECIPE',
	copyDivider: '===================',
	copyScheduleHeader: 'SCHEDULE',
	copyScheduleDivider: '--------',
	copyAssumptionsHeader: 'ASSUMPTIONS',
	copyAssumptionsDivider: '-----------',
	copyFooter: 'Generated by DoughCulator',
	// InputSection
	parameters: 'Parameters',
	totalFlour: 'Total Flour (g)',
	flourBlend: 'Flour Blend',
	white: 'White',
	wholeWheat: 'Whole Wheat',
	crumbGoal: 'Crumb Goal',
	crumbGoalNames: { Tight: 'Tight', Balanced: 'Balanced', Open: 'Open' } as Record<string, string>,
	crumbDescriptions: {
		Tight: 'Dense, uniform bubbles. Best for toast & sandwiches.',
		Balanced: 'Medium bubbles, versatile crumb. Classic sourdough.',
		Open: 'Large holes, translucent walls. Advanced technique required.'
	} as Record<string, string>,
	advancedOptions: 'Advanced Options',
	ambientTemp: 'Ambient Temperature',
	doughTemp: 'Dough Temperature',
	optional: '— optional',
	leaveBlankAmbient: 'Leave blank to use ambient',
	salt: 'Salt',
	saltAutoLabel: (pct: string, g: string) => `Auto: ${pct}% = ${g}g`,
	saltManual: 'Manual',
	saltOverride: 'Override',
	saltBakersPct: "Baker's % relative to total flour",
	starterHydration: 'Starter Hydration (%)',
	autolyse: 'Autolyse',
	duration: 'Duration',
	fermentationPhilosophyLabel: 'Fermentation Philosophy',
	philosophyPredictability: 'Predictability',
	philosophyFlavorDev: 'Flavor Development',
	philosophyPredictabilityDesc: 'More starter when cold — consistent timing.',
	philosophyFlavorDevDesc: 'Less starter when cold — slower fermentation builds complexity.',
	philosophyModalTitle: 'Fermentation Philosophy',
	philosophyModalPredictabilityBody:
		'Predictability uses a higher inoculation rate when temperatures drop. This keeps fermentation on a reliable schedule regardless of season or kitchen conditions — ideal when you want consistent results and a repeatable bake-day routine.',
	philosophyModalFlavorDevBody:
		'Flavor Development lowers inoculation in cold conditions, letting the dough ferment slowly over a longer window. Extended time produces more acetic and lactic acids, yielding a more complex, tangy flavor — great for cold retard bakes or when you can be flexible with timing.',
	proofMethod: 'Proof Method',
	roomTemp: 'Room Temp',
	coldRetard: 'Cold Retard',
	fridgeTemp: 'Fridge Temperature',
	scheduleMode: 'Schedule Mode',
	relative: 'Relative',
	clock: 'Clock',
	startTime: 'Start Time (HH:MM)',
	// FormulaCard
	formula: 'Formula',
	bakersPctSubtitle: "Baker's percentages relative to total flour",
	ingredient: 'Ingredient',
	grams: 'Grams',
	bakersPct: "Baker's %",
	totalFlourRow: 'Total Flour',
	whiteFlouRow: '— White flour',
	wwFlourRow: '— Whole wheat',
	water: 'Water',
	saltRow: 'Salt',
	starter: 'Starter',
	totalDough: 'Total Dough',
	starterBreakdown: 'Starter Breakdown',
	starterFlour: 'Starter flour',
	starterWater: 'Starter water',
	totalStarter: 'Total starter',
	mixAdditions: 'What You Add (from bag/tap)',
	mixFlour: 'Mix flour',
	mixWater: 'Mix water',
	starterNote: 'Starter flour/water is already counted in total formula above.',
	// TimingCard
	timing: 'Timing',
	bulkFermentation: 'Bulk Fermentation',
	fastest: 'Fastest',
	slowest: 'Slowest',
	foldSchedule: (count: number, interval: number) =>
		`${count} stretch-and-fold sets, every ${interval} min`,
	roomProof: 'Room Proof',
	coldRetardProof: 'Cold Retard',
	bakeColdNote: 'Can bake directly from fridge.',
	totalActiveTime: 'Estimated total active time (excl. bake):',
	inoculation: 'Inoculation',
	hydration: 'Hydration',
	// ScheduleCard
	schedule: 'Schedule',
	// WarningsCard
	notesWarnings: 'Notes & Warnings',
	// GuidanceCard
	readingYourCrumb: 'Reading Your Crumb',
	target: (goal: string) => `Target (${goal}):`,
	underFermented: 'Under-fermented:',
	overFermented: 'Over-fermented:',
	guidance: {
		Tight: {
			description: 'Dense but moist interior, small uniform bubbles.',
			underFermented: 'Gummy center, flat rise, pale crust.',
			overFermented: 'Bitter flavor, dense with no oven spring.'
		},
		Balanced: {
			description: 'Mix of small and medium bubbles, even distribution.',
			underFermented: 'Dense patches, brick-like texture on the bottom.',
			overFermented: 'Large irregular holes with weak structure, shaggy crumb.'
		},
		Open: {
			description: 'Large irregular holes, translucent bubble walls — requires high skill.',
			underFermented: 'Closed crumb despite high hydration, no bloom.',
			overFermented: 'Flat, gummy, shredded crumb with sour overload.'
		}
	} as Record<string, { description: string; underFermented: string; overFermented: string }>,
	floatTest: 'Float test:',
	floatTestDesc: 'Drop a small piece of dough in water — if it floats, bulk is done.',
	pokeTest: 'Poke test:',
	pokeTestDesc: 'Poke proofed dough — slow, partial spring-back = ready to bake.',
	jiggleTest: 'Jiggle test:',
	jiggleTestDesc: 'Shake container — dough should move like jello when bulk is complete.',
	// AssumptionsDrawer
	calculationAssumptions: 'Calculation Assumptions',
	assumptionsDesc:
		'These are the values used to calculate your formula, timing, and schedule.',
	done: 'Done',
	// TempBand / HydrationBand display
	tempBands: {
		Cold: 'Cold',
		Freezing: 'Freezing',
		Standard: 'Standard',
		Warm: 'Warm',
		Hot: 'Hot'
	} as Record<string, string>,
	hydrationBands: {
		Low: 'Low',
		Medium: 'Medium',
		High: 'High'
	} as Record<string, string>
};

export type Translations = typeof en;

const es: Translations = {
	// App / header
	appSubtitle: 'Fórmula, tiempos y programa',
	assumptions: 'Supuestos',
	copyRecipe: 'Copiar Receta',
	copied: '¡Copiado!',
	// Empty state
	emptyStateTitle: 'Ingresa la cantidad de harina para calcular tu receta.',
	emptyStateSubtitle: 'La calculadora se actualiza automáticamente.',
	// Footer
	footerLine1: 'Calculadora de masa madre — código abierto, funciona en tu navegador.',
	footerLine2: 'Todos los cálculos son orientativos. Tu masa lo sabe mejor.',
	// Copy text
	copyTitle: '🍞 RECETA DE MASA MADRE',
	copyDivider: '=======================',
	copyScheduleHeader: 'PROGRAMA',
	copyScheduleDivider: '--------',
	copyAssumptionsHeader: 'SUPUESTOS',
	copyAssumptionsDivider: '---------',
	copyFooter: 'Generado por DoughCulator',
	// InputSection
	parameters: 'Parámetros',
	totalFlour: 'Harina Total (g)',
	flourBlend: 'Mezcla de Harina',
	white: 'Blanca',
	wholeWheat: 'Integral',
	crumbGoal: 'Objetivo de Miga',
	crumbGoalNames: {
		Tight: 'Cerrada',
		Balanced: 'Equilibrada',
		Open: 'Abierta'
	} as Record<string, string>,
	crumbDescriptions: {
		Tight: 'Miga densa y uniforme. Ideal para tostadas y sándwiches.',
		Balanced: 'Burbujas medianas, miga versátil. Masa madre clásica.',
		Open: 'Agujeros grandes, paredes translúcidas. Requiere técnica avanzada.'
	} as Record<string, string>,
	advancedOptions: 'Opciones Avanzadas',
	ambientTemp: 'Temperatura Ambiente',
	doughTemp: 'Temperatura de la Masa',
	optional: '— opcional',
	leaveBlankAmbient: 'Dejar en blanco para usar temperatura ambiente',
	salt: 'Sal',
	saltAutoLabel: (pct: string, g: string) => `Auto: ${pct}% = ${g}g`,
	saltManual: 'Manual',
	saltOverride: 'Personalizar',
	saltBakersPct: '% de panadero relativo a la harina total',
	starterHydration: 'Hidratación del Iniciador (%)',
	autolyse: 'Autólisis',
	duration: 'Duración',
	fermentationPhilosophyLabel: 'Filosofía de Fermentación',
	philosophyPredictability: 'Consistencia',
	philosophyFlavorDev: 'Sabor',
	philosophyPredictabilityDesc: 'Más levadura en frío — tiempos consistentes.',
	philosophyFlavorDevDesc: 'Menos levadura en frío — fermentación más lenta para mayor sabor.',
	philosophyModalTitle: 'Filosofía de Fermentación',
	philosophyModalPredictabilityBody:
		'Consistencia usa una tasa de inoculación más alta cuando bajan las temperaturas. Esto mantiene la fermentación en un calendario fiable independientemente de la estación o las condiciones de cocina — ideal si buscas resultados consistentes y una rutina de horneado reproducible.',
	philosophyModalFlavorDevBody:
		'Sabor reduce la inoculación en condiciones frías, dejando que la masa fermente lentamente durante más tiempo. Este proceso produce más ácidos acético y láctico, generando un sabor más complejo y ácido — ideal para fermentaciones en frío o cuando tienes flexibilidad de tiempo.',
	proofMethod: 'Método de Fermentación Final',
	roomTemp: 'Temp. Ambiente',
	coldRetard: 'Frío (Nevera)',
	fridgeTemp: 'Temperatura de Nevera',
	scheduleMode: 'Modo de Programa',
	relative: 'Duración',
	clock: 'Reloj',
	startTime: 'Hora de Inicio (HH:MM)',
	// FormulaCard
	formula: 'Fórmula',
	bakersPctSubtitle: 'Porcentajes del panadero relativos a la harina total',
	ingredient: 'Ingrediente',
	grams: 'Gramos',
	bakersPct: '% Panadero',
	totalFlourRow: 'Harina Total',
	whiteFlouRow: '— Harina Blanca',
	wwFlourRow: '— Integral',
	water: 'Agua',
	saltRow: 'Sal',
	starter: 'Iniciador',
	totalDough: 'Masa Total',
	starterBreakdown: 'Desglose del Iniciador',
	starterFlour: 'Harina del iniciador',
	starterWater: 'Agua del iniciador',
	totalStarter: 'Iniciador total',
	mixAdditions: 'Lo Que Agregas (de bolsa/grifo)',
	mixFlour: 'Harina para mezclar',
	mixWater: 'Agua para mezclar',
	starterNote: 'La harina/agua del iniciador ya está contada en la fórmula total.',
	// TimingCard
	timing: 'Tiempos',
	bulkFermentation: 'Fermentación en Masa',
	fastest: 'Más rápido',
	slowest: 'Más lento',
	foldSchedule: (count: number, interval: number) =>
		`${count} series de estirado y plegado, cada ${interval} min`,
	roomProof: 'Fermentación a Temp. Ambiente',
	coldRetardProof: 'Fermentación en Frío',
	bakeColdNote: 'Se puede hornear directamente desde la nevera.',
	totalActiveTime: 'Tiempo activo total estimado (sin hornear):',
	inoculation: 'Inoculación',
	hydration: 'Hidratación',
	// ScheduleCard
	schedule: 'Programa',
	// WarningsCard
	notesWarnings: 'Notas y Advertencias',
	// GuidanceCard
	readingYourCrumb: 'Leyendo Tu Miga',
	target: (goal: string) => `Objetivo (${goal}):`,
	underFermented: 'Subfermentada:',
	overFermented: 'Sobrefermentada:',
	guidance: {
		Tight: {
			description: 'Interior denso pero húmedo, burbujas pequeñas y uniformes.',
			underFermented: 'Centro gomoso, poco volumen, corteza pálida.',
			overFermented: 'Sabor amargo, miga densa sin resorte en el horno.'
		},
		Balanced: {
			description: 'Mezcla de burbujas pequeñas y medianas, distribución uniforme.',
			underFermented: 'Zonas densas, textura ladrillo en la base.',
			overFermented:
				'Agujeros grandes irregulares con estructura débil, miga deshilachada.'
		},
		Open: {
			description:
				'Grandes agujeros irregulares, paredes translúcidas — requiere alta habilidad.',
			underFermented: 'Miga cerrada pese a la alta hidratación, sin bloom.',
			overFermented:
				'Miga plana, gomosa y deshilachada con exceso de acidez.'
		}
	} as Record<string, { description: string; underFermented: string; overFermented: string }>,
	floatTest: 'Prueba de flotación:',
	floatTestDesc:
		'Suelta un trozo de masa en agua — si flota, la fermentación en masa terminó.',
	pokeTest: 'Prueba del dedo:',
	pokeTestDesc:
		'Presiona la masa fermentada — si recupera lento y parcialmente, está lista para hornear.',
	jiggleTest: 'Prueba del temblor:',
	jiggleTestDesc:
		'Sacude el recipiente — la masa debe moverse como gelatina al terminar la fermentación.',
	// AssumptionsDrawer
	calculationAssumptions: 'Supuestos de Cálculo',
	assumptionsDesc:
		'Estos son los valores usados para calcular tu fórmula, tiempos y programa.',
	done: 'Listo',
	// TempBand / HydrationBand display
	tempBands: {
		Cold: 'Frío',
		Freezing: 'Muy frío',
		Standard: 'Estándar',
		Warm: 'Cálido',
		Hot: 'Caliente'
	} as Record<string, string>,
	hydrationBands: {
		Low: 'Baja',
		Medium: 'Media',
		High: 'Alta'
	} as Record<string, string>
};

const sv: Translations = {
	// App / header
	appSubtitle: 'Formel, timing & schema',
	assumptions: 'Antaganden',
	copyRecipe: 'Kopiera Recept',
	copied: 'Kopierat!',
	// Empty state
	emptyStateTitle: 'Ange mängden mjöl ovan för att beräkna ditt recept.',
	emptyStateSubtitle: 'Kalkylatorn uppdateras automatiskt när du skriver.',
	// Footer
	footerLine1: 'Surdegskalkylator — öppen källkod, körs i din webbläsare.',
	footerLine2: 'Alla beräkningar är riktlinjer. Din deg vet bäst.',
	// Copy text
	copyTitle: '🍞 SURDEGRECEPT',
	copyDivider: '===============',
	copyScheduleHeader: 'SCHEMA',
	copyScheduleDivider: '------',
	copyAssumptionsHeader: 'ANTAGANDEN',
	copyAssumptionsDivider: '----------',
	copyFooter: 'Genererat av DoughCulator',
	// InputSection
	parameters: 'Parametrar',
	totalFlour: 'Totalt Mjöl (g)',
	flourBlend: 'Mjölblandning',
	white: 'Vitt',
	wholeWheat: 'Fullkorn',
	crumbGoal: 'Smulmål',
	crumbGoalNames: { Tight: 'Tät', Balanced: 'Balanserad', Open: 'Öppen' } as Record<string, string>,
	crumbDescriptions: {
		Tight: 'Tät, jämn smul. Bäst för toast & smörgåsar.',
		Balanced: 'Medelstora bubblor, mångsidig smul. Klassisk surdeg.',
		Open: 'Stora hål, genomskinliga väggar. Avancerad teknik krävs.'
	} as Record<string, string>,
	advancedOptions: 'Avancerade Alternativ',
	ambientTemp: 'Omgivningstemperatur',
	doughTemp: 'Degtemperatur',
	optional: '— valfritt',
	leaveBlankAmbient: 'Lämna tomt för att använda omgivningstemperatur',
	salt: 'Salt',
	saltAutoLabel: (pct: string, g: string) => `Auto: ${pct}% = ${g}g`,
	saltManual: 'Manuell',
	saltOverride: 'Anpassa',
	saltBakersPct: "Bagarprocent relativt totalt mjöl",
	starterHydration: 'Surdeghydratation (%)',
	autolyse: 'Autolys',
	duration: 'Varaktighet',
	fermentationPhilosophyLabel: 'Jäsningsfilosofi',
	philosophyPredictability: 'Förutsägbarhet',
	philosophyFlavorDev: 'Smakutveckling',
	philosophyPredictabilityDesc: 'Mer surdeg vid kyla — konsekvent timing.',
	philosophyFlavorDevDesc: 'Mindre surdeg vid kyla — långsammare jäsning ger mer smak.',
	philosophyModalTitle: 'Jäsningsfilosofi',
	philosophyModalPredictabilityBody:
		'Förutsägbarhet använder en högre inokulationsgrad när temperaturen sjunker. Det håller jäsningen på ett pålitligt schema oavsett årstid eller köksförhållanden — idealiskt när du vill ha konsekventa resultat och en repeterbar bakrutin.',
	philosophyModalFlavorDevBody:
		'Smakutveckling sänker inokulationen i kalla förhållanden och låter degen jäsa långsamt under längre tid. Den förlängda tiden producerar mer ättiksyra och mjölksyra, vilket ger en mer komplex och syrlig smak — perfekt för kall jäsning eller när du har flexibel timing.',
	proofMethod: 'Jäsningsmetod',
	roomTemp: 'Rumstemperatur',
	coldRetard: 'Kall Jäsning',
	fridgeTemp: 'Kylskåpstemperatur',
	scheduleMode: 'Schemaläge',
	relative: 'Relativt',
	clock: 'Klocka',
	startTime: 'Starttid (HH:MM)',
	// FormulaCard
	formula: 'Formel',
	bakersPctSubtitle: "Bagarprocent relativt totalt mjöl",
	ingredient: 'Ingrediens',
	grams: 'Gram',
	bakersPct: "Bagarens %",
	totalFlourRow: 'Totalt Mjöl',
	whiteFlouRow: '— Vitt mjöl',
	wwFlourRow: '— Fullkorn',
	water: 'Vatten',
	saltRow: 'Salt',
	starter: 'Surdeg',
	totalDough: 'Total Deg',
	starterBreakdown: 'Surdegspecifikation',
	starterFlour: 'Surdegsmjöl',
	starterWater: 'Surdegsvatten',
	totalStarter: 'Total surdeg',
	mixAdditions: 'Vad Du Tillsätter (från påse/kran)',
	mixFlour: 'Mjöl att blanda',
	mixWater: 'Vatten att blanda',
	starterNote: 'Surdegsmjöl/vatten är redan inkluderat i totalformeln ovan.',
	// TimingCard
	timing: 'Timing',
	bulkFermentation: 'Bulkjäsning',
	fastest: 'Snabbast',
	slowest: 'Långsammast',
	foldSchedule: (count: number, interval: number) =>
		`${count} sträck-och-vik-set, var ${interval}:e min`,
	roomProof: 'Jäsning i Rumstemperatur',
	coldRetardProof: 'Kall Jäsning',
	bakeColdNote: 'Kan bakas direkt från kylskåpet.',
	totalActiveTime: 'Beräknad total aktiv tid (exkl. bakning):',
	inoculation: 'Inokulering',
	hydration: 'Hydratation',
	// ScheduleCard
	schedule: 'Schema',
	// WarningsCard
	notesWarnings: 'Noteringar & Varningar',
	// GuidanceCard
	readingYourCrumb: 'Tolka Din Smul',
	target: (goal: string) => `Mål (${goal}):`,
	underFermented: 'Underjäst:',
	overFermented: 'Överjäst:',
	guidance: {
		Tight: {
			description: 'Tät men fuktig inre, små jämna bubblor.',
			underFermented: 'Klibbigt centrum, låg volym, blek skorpa.',
			overFermented: 'Bitter smak, tät smul utan ugnsresning.'
		},
		Balanced: {
			description: 'Blandning av små och medelstora bubblor, jämn fördelning.',
			underFermented: 'Täta områden, tegelliknande textur i botten.',
			overFermented: 'Stora oregelbundna hål med svag struktur, fransig smul.'
		},
		Open: {
			description: 'Stora oregelbundna hål, genomskinliga bubbelväggar — kräver hög skicklighet.',
			underFermented: 'Tät smul trots hög hydratation, ingen blomning.',
			overFermented: 'Platt, klibbig, söndrig smul med syraöverskott.'
		}
	} as Record<string, { description: string; underFermented: string; overFermented: string }>,
	floatTest: 'Flottesttest:',
	floatTestDesc: 'Släpp en liten degbit i vatten — om den flyter är bulkjäsningen klar.',
	pokeTest: 'Stickprov:',
	pokeTestDesc: 'Tryck på den jästa degen — långsam, delvis återfjädring = redo att baka.',
	jiggleTest: 'Skakprov:',
	jiggleTestDesc: 'Skaka behållaren — degen ska röra sig som gelé när bulkjäsningen är klar.',
	// AssumptionsDrawer
	calculationAssumptions: 'Beräkningsantaganden',
	assumptionsDesc: 'Dessa är värdena som används för att beräkna din formel, timing och schema.',
	done: 'Klar',
	// TempBand / HydrationBand display
	tempBands: {
		Cold: 'Kallt',
		Freezing: 'Mycket kallt',
		Standard: 'Standard',
		Warm: 'Varmt',
		Hot: 'Hett'
	} as Record<string, string>,
	hydrationBands: {
		Low: 'Låg',
		Medium: 'Medium',
		High: 'Hög'
	} as Record<string, string>
};

export const translations: Record<Lang, Translations> = { en, es, sv };
