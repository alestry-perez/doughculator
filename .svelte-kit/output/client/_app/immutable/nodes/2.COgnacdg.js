import{c as b2,a as _,t as fe,f as E,d as $t}from"../chunks/CJB3Lq6w.js";import{c as a2,b as $a,aR as U2,h as de,a as r2,e as Da,z as La,L as r,A as Ea,an as Oa,B as P2,s as o2,d as St,C as Ia,aL as Na,aA as j2,j as Ga,aS as Fe,i as u2,aT as Wa,k as Ua,X as Va,aU as qa,aK as g2,aV as Ka,aW as Ya,J as Za,al as R2,aX as Ja,S as Xa,r as V2,p as q2,I as n2,ak as K2,aY as Qa,aZ as er,aI as tr,m as ar,f as rr,g as or,y as Y2,o as Z2,a_ as nr,a$ as sr,b0 as lr,b1 as ir,b2 as J2,b3 as cr,b4 as dr,ai as ur,ab as $e,x as ne,ad as De,ae as a,af as e,ag as n,ac as R,aQ as m1,aB as nt,K as U,aP as le,O as $2,u as Ht,b5 as mr,$ as pr}from"../chunks/C5I-1U-g.js";import{s as l,d as st,a as j}from"../chunks/CQwauJEr.js";import{i as d1,s as Le,a as se,p as f2,c as vr}from"../chunks/BY2PMcfd.js";import{h as br}from"../chunks/CQDDIKX6.js";import{w as lt,d as gr}from"../chunks/BCuxDiaq.js";function ge(t,o){return o}function fr(t,o,c){for(var s=[],b=o.length,f,d=o.length,i=0;i<b;i++){let S=o[i];q2(S,()=>{if(f){if(f.pending.delete(S),f.done.add(S),f.pending.size===0){var W=t.outrogroups;m2(t,g2(f.done)),W.delete(f),W.size===0&&(t.outrogroups=null)}}else d-=1},!1)}if(d===0){var g=s.length===0&&c!==null;if(g){var A=c,y=A.parentNode;tr(y),y.append(A),t.items.clear()}m2(t,o,!g)}else f={pending:new Set(o),done:new Set},(t.outrogroups??=new Set).add(f)}function m2(t,o,c=!0){var s;if(t.pending.size>0){s=new Set;for(const d of t.pending.values())for(const i of d)s.add(t.items.get(i).e)}for(var b=0;b<o.length;b++){var f=o[b];if(s?.has(f)){f.f|=Fe;const d=document.createDocumentFragment();ar(f,d)}else rr(o[b],c)}}var D2;function J1(t,o,c,s,b,f=null){var d=t,i=new Map,g=(o&U2)!==0;if(g){var A=t;d=de?r2(Da(A)):A.appendChild(a2())}de&&La();var y=null,S=Va(()=>{var L=c();return qa(L)?L:L==null?[]:g2(L)}),W,J=new Map,$=!0;function k(L){(V.effect.f&Xa)===0&&(V.pending.delete(L),V.fallback=y,hr(V,W,d,o,s),y!==null&&(W.length===0?(y.f&Fe)===0?V2(y):(y.f^=Fe,ht(y,null,d)):q2(y,()=>{y=null})))}function u(L){V.pending.delete(L)}var D=$a(()=>{W=r(S);var L=W.length;let N=!1;if(de){var x=Ea(d)===Oa;x!==(L===0)&&(d=P2(),r2(d),o2(!1),N=!0)}for(var T=new Set,z=Ga,P=Ua(),B=0;B<L;B+=1){de&&St.nodeType===Ia&&St.data===Na&&(d=St,N=!0,o2(!1));var G=W[B],Y=s(G,B),a1=$?null:i.get(Y);a1?(a1.v&&j2(a1.v,G),a1.i&&j2(a1.i,B),P&&z.unskip_effect(a1.e)):(a1=Mr(i,$?d:D2??=a2(),G,Y,B,b,o,c),$||(a1.e.f|=Fe),i.set(Y,a1)),T.add(Y)}if(L===0&&f&&!y&&($?y=u2(()=>f(d)):(y=u2(()=>f(D2??=a2())),y.f|=Fe)),L>T.size&&Wa(),de&&L>0&&r2(P2()),!$)if(J.set(z,T),P){for(const[b1,l1]of i)T.has(b1)||z.skip_effect(l1.e);z.oncommit(k),z.ondiscard(u)}else k(z);N&&o2(!0),r(S)}),V={effect:D,items:i,pending:J,outrogroups:null,fallback:y};$=!1,de&&(d=St)}function gt(t){for(;t!==null&&(t.f&Qa)===0;)t=t.next;return t}function hr(t,o,c,s,b){var f=(s&er)!==0,d=o.length,i=t.items,g=gt(t.effect.first),A,y=null,S,W=[],J=[],$,k,u,D;if(f)for(D=0;D<d;D+=1)$=o[D],k=b($,D),u=i.get(k).e,(u.f&Fe)===0&&(u.nodes?.a?.measure(),(S??=new Set).add(u));for(D=0;D<d;D+=1){if($=o[D],k=b($,D),u=i.get(k).e,t.outrogroups!==null)for(const G of t.outrogroups)G.pending.delete(u),G.done.delete(u);if((u.f&Fe)!==0)if(u.f^=Fe,u===g)ht(u,null,c);else{var V=y?y.next:g;u===t.effect.last&&(t.effect.last=u.prev),u.prev&&(u.prev.next=u.next),u.next&&(u.next.prev=u.prev),Re(t,y,u),Re(t,u,V),ht(u,V,c),y=u,W=[],J=[],g=gt(y.next);continue}if((u.f&n2)!==0&&(V2(u),f&&(u.nodes?.a?.unfix(),(S??=new Set).delete(u))),u!==g){if(A!==void 0&&A.has(u)){if(W.length<J.length){var L=J[0],N;y=L.prev;var x=W[0],T=W[W.length-1];for(N=0;N<W.length;N+=1)ht(W[N],L,c);for(N=0;N<J.length;N+=1)A.delete(J[N]);Re(t,x.prev,T.next),Re(t,y,x),Re(t,T,L),g=L,y=T,D-=1,W=[],J=[]}else A.delete(u),ht(u,g,c),Re(t,u.prev,u.next),Re(t,u,y===null?t.effect.first:y.next),Re(t,y,u),y=u;continue}for(W=[],J=[];g!==null&&g!==u;)(A??=new Set).add(g),J.push(g),g=gt(g.next);if(g===null)continue}(u.f&Fe)===0&&W.push(u),y=u,g=gt(u.next)}if(t.outrogroups!==null){for(const G of t.outrogroups)G.pending.size===0&&(m2(t,g2(G.done)),t.outrogroups?.delete(G));t.outrogroups.size===0&&(t.outrogroups=null)}if(g!==null||A!==void 0){var z=[];if(A!==void 0)for(u of A)(u.f&n2)===0&&z.push(u);for(;g!==null;)(g.f&n2)===0&&g!==t.fallback&&z.push(g),g=gt(g.next);var P=z.length;if(P>0){var B=(s&U2)!==0&&d===0?c:null;if(f){for(D=0;D<P;D+=1)z[D].nodes?.a?.measure();for(D=0;D<P;D+=1)z[D].nodes?.a?.fix()}fr(t,z,B)}}f&&K2(()=>{if(S!==void 0)for(u of S)u.nodes?.a?.apply()})}function Mr(t,o,c,s,b,f,d,i){var g=(d&Ka)!==0?(d&Ya)===0?Za(c,!1,!1):R2(c):null,A=(d&Ja)!==0?R2(b):null;return{v:g,i:A,e:u2(()=>(f(o,g??c,A??b,i),()=>{t.delete(s)}))}}function ht(t,o,c){if(t.nodes)for(var s=t.nodes.start,b=t.nodes.end,f=o&&(o.f&Fe)===0?o.nodes.start:c;s!==null;){var d=or(s);if(f.before(s),s===b)return;s=d}}function Re(t,o,c){o===null?t.effect.first=c:o.next=c,c===null?t.effect.last=o:c.prev=o}function Mt(t,o,c){Y2(()=>{var s=Z2(()=>o(t,c?.())||{});if(s?.destroy)return()=>s.destroy()})}function X2(t){var o,c,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var b=t.length;for(o=0;o<b;o++)t[o]&&(c=X2(t[o]))&&(s&&(s+=" "),s+=c)}else for(c in t)t[c]&&(s&&(s+=" "),s+=c);return s}function xr(){for(var t,o,c=0,s="",b=arguments.length;c<b;c++)(t=arguments[c])&&(o=X2(t))&&(s&&(s+=" "),s+=o);return s}function We(t){return typeof t=="object"?xr(t):t??""}function yr(t,o,c){var s=t==null?"":""+t;return s===""?null:s}function zr(t,o){return t==null?null:String(t)}function u1(t,o,c,s,b,f){var d=t.__className;if(de||d!==c||d===void 0){var i=yr(c);(!de||i!==t.getAttribute("class"))&&(i==null?t.removeAttribute("class"):o?t.className=i:t.setAttribute("class",i)),t.__className=c}return f}function L2(t,o,c,s){var b=t.__style;if(de||b!==o){var f=zr(o);(!de||f!==t.getAttribute("style"))&&(f==null?t.removeAttribute("style"):t.style.cssText=f),t.__style=o}return s}const _r=Symbol("is custom element"),kr=Symbol("is html"),wr=J2?"link":"LINK",Tr=J2?"progress":"PROGRESS";function ce(t){if(de){var o=!1,c=()=>{if(!o){if(o=!0,t.hasAttribute("value")){var s=t.value;Z(t,"value",null),t.value=s}if(t.hasAttribute("checked")){var b=t.checked;Z(t,"checked",null),t.checked=b}}};t.__on_r=c,K2(c),ir()}}function oe(t,o){var c=h2(t);c.value===(c.value=o??void 0)||t.value===o&&(o!==0||t.nodeName!==Tr)||(t.value=o??"")}function s2(t,o){var c=h2(t);c.checked!==(c.checked=o??void 0)&&(t.checked=o)}function Z(t,o,c,s){var b=h2(t);de&&(b[o]=t.getAttribute(o),o==="src"||o==="srcset"||o==="href"&&t.nodeName===wr)||b[o]!==(b[o]=c)&&(o==="loading"&&(t[cr]=c),c==null?t.removeAttribute(o):typeof c!="string"&&Fr(t).includes(o)?t[o]=c:t.setAttribute(o,c))}function h2(t){return t.__attributes??={[_r]:t.nodeName.includes("-"),[kr]:t.namespaceURI===nr}}var E2=new Map;function Fr(t){var o=t.getAttribute("is")||t.nodeName,c=E2.get(o);if(c)return c;E2.set(o,c=[]);for(var s,b=t,f=Element.prototype;f!==b;){s=lr(b);for(var d in s)s[d].set&&c.push(d);b=sr(b)}return c}function Sr(t,o,c=o){dr(t,"change",s=>{var b=s?t.defaultChecked:t.checked;c(b)}),(de&&t.defaultChecked!==t.checked||Z2(o)==null)&&c(t.checked),ur(()=>{var s=o();t.checked=!!s})}const Cr={en:{autolyse:"Autolyse",autolyseNote:(t,o,c)=>`Mix ${Math.round(t)}g flour and ${Math.round(o)}g water (hold back all salt and all starter). Cover and rest for ${c}.`,mix:"Mix",mixNote:(t,o,c,s,b,f)=>t?`Add ${Math.round(s)}g starter and ${Math.round(b)}g salt to the autolysed dough. Mix until incorporated.`:`Combine ${Math.round(s)}g starter and ${Math.round(c)}g water, stir until dissolved. Add ${Math.round(o)}g flour and ${Math.round(b)}g salt to form a shaggy dough. Rest covered for ${f}.`,stretchFold:"Stretch & Fold",stretchFoldNote:(t,o)=>`${o??3} sets, ${t} min apart.`,coilFolds:"Coil Folds",coilFoldsNote:(t,o)=>`${o??2} sets, ${t} min apart.`,bulkFermentation:"Bulk Ferment",bulkNote:(t,o)=>`Ferment at room temp for ${t}–${o}h until puffy.`,preShape:"Preshape",preShapeNote:t=>`Shape into a round ball. Rest covered for ${t}.`,roomProof:"Final Shape & Room Proof",roomProofNote:t=>`Shape and place into a floured proofing basket. Cover and rest for ${t}. Dough should puff and pass the poke test (slow spring-back).`,coldRetard:"Final Shape & Cold Proof",coldRetardNote:(t=Pt,o=jt)=>`Shape and place into a floured proofing basket. Refrigerate ${t}–${o} hours.`,bake:"Bake",bakeNote:"Preheat oven + Dutch oven to 230°C (450°F). Score and load.",bakeCovered:"Covered (lid on)",bakeCoveredNote:t=>`Bake with lid on for ${t} — steam builds crust structure.`,handsOffRise:"Hands-off Rise",handsOffRiseNote:t=>`Leave dough undisturbed for ${t}. Watch for 50–75% volume increase.`,score:"Score",scoreNote:t=>`Use a lame or razor blade (${t}). Score just before loading into the oven.`,bakeUncovered:"Uncovered (lid off)",bakeUncoveredNote:t=>`Remove lid and bake for ${t} until deep golden brown.`,autolyseUserNote:t=>` (your input: ${t} min)`},es:{autolyse:"Autólisis",autolyseNote:(t,o,c)=>`Mezcla ${Math.round(t)}g de harina y ${Math.round(o)}g de agua (reserva toda la sal e iniciador). Tapa y reposa por ${c}.`,mix:"Mezclar",mixNote:(t,o,c,s,b,f)=>t?`Añade ${Math.round(s)}g de iniciador y ${Math.round(b)}g de sal a la masa autolizada. Mezcla hasta incorporar.`:`Combina ${Math.round(s)}g de iniciador y ${Math.round(c)}g de agua, mezcla hasta disolver. Agrega ${Math.round(o)}g de harina y ${Math.round(b)}g de sal para formar una masa irregular. Reposa tapado por ${f}.`,stretchFold:"Estirado y Plegado",stretchFoldNote:(t,o)=>`${o??3} series, ${t} min de descanso entre cada una.`,coilFolds:"Pliegues en Espiral",coilFoldsNote:(t,o)=>`${o??2} series, ${t} min de descanso entre cada una.`,bulkFermentation:"Fermentación en Masa",bulkNote:(t,o)=>`Fermenta a temperatura ambiente por ${t}–${o}h hasta que esté esponjosa.`,preShape:"Pre-formado",preShapeNote:t=>`Forma una bola redonda. Reposa tapado por ${t}.`,roomProof:"Formado Final & Fermentación Ambiente",roomProofNote:t=>`Forma y coloca en el banneton enharinado. Tapa y reposa por ${t}. La masa debe hincharse y pasar la prueba del dedo (recuperación lenta).`,coldRetard:"Formado Final & Fermentación en Frío",coldRetardNote:(t=Pt,o=jt)=>`Forma y coloca en el banneton enharinado. Refrigera ${t}–${o} horas.`,bake:"Hornear",bakeNote:"Precalienta el horno + olla holandesa a 230°C (450°F). Greña y carga.",bakeCovered:"Tapado (con tapa)",bakeCoveredNote:t=>`Hornea con tapa por ${t} — el vapor forma la estructura de la corteza.`,handsOffRise:"Reposo sin tocar",handsOffRiseNote:t=>`Deja la masa sin tocar por ${t}. Observa un aumento de volumen del 50–75%.`,score:"Greñar",scoreNote:t=>`Usa una cuchilla o navaja (${t}). Greña justo antes de cargar en el horno.`,bakeUncovered:"Destapado (sin tapa)",bakeUncoveredNote:t=>`Retira la tapa y hornea por ${t} hasta que esté dorado oscuro.`,autolyseUserNote:t=>` (tu elección: ${t} min)`},sv:{autolyse:"Autolys",autolyseNote:(t,o,c)=>`Blanda ${Math.round(t)}g mjöl och ${Math.round(o)}g vatten (håll tillbaka allt salt och all surdeg). Täck och vila i ${c}.`,mix:"Blanda",mixNote:(t,o,c,s,b,f)=>t?`Tillsätt ${Math.round(s)}g surdeg och ${Math.round(b)}g salt till den autolyserade degen. Blanda tills inkorporerat.`:`Kombinera ${Math.round(s)}g surdeg och ${Math.round(c)}g vatten, rör tills upplöst. Tillsätt ${Math.round(o)}g mjöl och ${Math.round(b)}g salt och forma en grov deg. Vila täckt i ${f}.`,stretchFold:"Sträck & Vik",stretchFoldNote:(t,o)=>`${o??3} omgångar, ${t} min mellan varje.`,coilFolds:"Spiralvikningar",coilFoldsNote:(t,o)=>`${o??2} omgångar, ${t} min mellan varje.`,bulkFermentation:"Bulkjäsning",bulkNote:(t,o)=>`Jäs i rumstemperatur i ${t}–${o}h tills degen är luftig.`,preShape:"Förformning",preShapeNote:t=>`Forma till en rund boll. Vila täckt i ${t}.`,roomProof:"Slutformning & Rumstemperaturjäsning",roomProofNote:t=>`Forma och lägg i mjölat jäskorg. Täck och vila i ${t}. Degen ska puffa upp och klara stickprovet (långsam återfjädring).`,coldRetard:"Slutformning & Kall Jäsning",coldRetardNote:(t=Pt,o=jt)=>`Forma och lägg i mjölat jäskorg. Kyl i ${t}–${o} timmar.`,bake:"Baka",bakeNote:"Förvärm ugn + gryta till 230°C (450°F). Snitta och lägg in.",bakeCovered:"Med lock",bakeCoveredNote:t=>`Baka med lock i ${t} — ångan bygger skorpans struktur.`,handsOffRise:"Vila utan att röra",handsOffRiseNote:t=>`Låt degen vila ostörd i ${t}. Titta efter 50–75% volymökning.`,score:"Snitta",scoreNote:t=>`Använd en lame eller rakblad (${t}). Snitta precis innan du laddar ugnen.`,bakeUncovered:"Utan lock",bakeUncoveredNote:t=>`Ta bort locket och baka i ${t} tills djupt gyllenbrun.`,autolyseUserNote:t=>` (ditt val: ${t} min)`}},Ar={en:{dangerLow:"Dough temp dangerously low — fermentation nearly dormant. Consider warming location.",dangerHigh:"Above 30°C — overproofing risk and structural integrity drops. Use cold water, cool location, or fridge.",warnHigh:"High temperature — watch dough closely, may ferment faster than estimated.",infoSweet:"Sweet spot temperature — ideal for active fermentation.",infoSlow:"Slow & sour zone — excellent flavor development, longer timeline.",warnHydrationTemp:"High hydration + warm temp — runaway fermentation risk. Aim for cooler environment (~22–23°C).",infoHighHydration:"High hydration dough — requires strong bench technique. Wet hands, gentle folds.",infoWWAutolyse:"High whole wheat % — consider shorter autolyse (20–25 min) or bassinage technique to improve handling.",warnOpenCrumb:"Open crumb requires tighter environmental control. Monitor dough closely for proper fermentation signs.",ryeHighWarning:"High rye (>30%) — fermentation may be faster than predicted. Watch your dough closely.",dangerOpenCrumbRye:"Open crumb + high rye (>60%) is physically unrealistic. Rye lacks the gluten structure needed for an open crumb. Choose a tighter crumb goal or reduce rye.",warnStarterHydrationClamped:"Starter hydration was outside the accepted range (50–200%) and has been clamped. Timing and hydration calculations used the clamped value.",dangerSubZeroTemp:"Temperature at or below 0°C — fermentation will be completely halted. Check your temperature inputs.",negativeWater:"Warning: Starter water exceeds total water needed. Reduce inoculation or increase hydration.",minFlourAmount:"Minimum flour amount is 100g."},es:{dangerLow:"Temperatura peligrosamente baja — fermentación casi inactiva. Considera un lugar más cálido.",dangerHigh:"Por encima de 30°C — riesgo de sobrefermentación y pérdida de estructura. Usa agua fría, un lugar fresco o la nevera.",warnHigh:"Temperatura alta — vigila la masa de cerca, puede fermentar más rápido de lo estimado.",infoSweet:"Temperatura ideal — perfecta para una fermentación activa.",infoSlow:"Zona lenta y ácida — excelente desarrollo de sabor, mayor tiempo de fermentación.",warnHydrationTemp:"Hidratación alta + temperatura cálida — riesgo de fermentación desbocada. Busca un ambiente más fresco (~22–23°C).",infoHighHydration:"Masa de alta hidratación — requiere buena técnica de mesa. Manos húmedas y pliegues suaves.",infoWWAutolyse:"Alto % de integral — considera una autólisis más corta (20–25 min) o técnica de bassinage para mejorar el manejo.",warnOpenCrumb:"La miga abierta requiere un control ambiental más riguroso. Vigila la masa de cerca para detectar señales correctas de fermentación.",ryeHighWarning:"Centeno alto (>30%) — la fermentación puede ser más rápida de lo previsto. Vigila tu masa de cerca.",dangerOpenCrumbRye:"Miga abierta + centeno alto (>60%) no es realista. El centeno carece de la estructura de gluten necesaria para una miga abierta. Elige una meta de miga más cerrada o reduce el centeno.",warnStarterHydrationClamped:"La hidratación del iniciador estaba fuera del rango aceptado (50–200%) y ha sido ajustada. Los cálculos usaron el valor ajustado.",dangerSubZeroTemp:"Temperatura igual o inferior a 0°C — la fermentación estará completamente detenida. Revisa tus valores de temperatura.",negativeWater:"Advertencia: El agua del fermento excede el agua total necesaria. Reduzca la inoculación o aumente la hidratación.",minFlourAmount:"La cantidad mínima de harina es 100g."},sv:{dangerLow:"Degens temperatur farligt låg — jäsningen nästan inaktiv. Överväg en varmare plats.",dangerHigh:"Över 30°C — risk för överjäsning och strukturen försämras. Använd kallt vatten, sval plats eller kylskåp.",warnHigh:"Hög temperatur — övervaka degen noga, kan jäsa snabbare än beräknat.",infoSweet:"Idealtemperatur — perfekt för aktiv jäsning.",infoSlow:"Långsam & syrlig zon — utmärkt smakutveckling, längre tidsram.",warnHydrationTemp:"Hög hydratation + varm temperatur — risk för skenande jäsning. Sikta på svalare miljö (~22–23°C).",infoHighHydration:"Hög hydratation — kräver bra bänkteknik. Blöta händer, varsamma vikningar.",infoWWAutolyse:"Hög andel fullkorn — överväg kortare autolys (20–25 min) eller bassinage-teknik för bättre hantering.",warnOpenCrumb:"Öppen smulstruktur kräver noggrannare miljökontroll. Övervaka degen noga för rätt jästecken.",ryeHighWarning:"Hög rågandel (>30%) — jäsningen kan gå snabbare än beräknat. Övervaka degen noga.",dangerOpenCrumbRye:"Öppen smulstruktur + hög rågandel (>60%) är fysiskt orealistiskt. Råg saknar den glutenstruktur som krävs för öppen smula. Välj ett tätare mål eller minska rågen.",warnStarterHydrationClamped:"Surdeghydratation var utanför godkänt intervall (50–200%) och har justerats. Beräkningar använde det justerade värdet.",dangerSubZeroTemp:"Temperatur vid eller under 0°C — jäsningen är helt stillastående. Kontrollera dina temperaturinmatningar.",negativeWater:"Varning: Starterns vatten överstiger det totala vattenbehovet. Minska inokulationen eller öka hydrationen.",minFlourAmount:"Minsta mjölmängd är 100g."}},Br={en:{ambientTemp:"Ambient temp",salt:"Salt",starterHydration:"Starter hydration",inoculation:"Inoculation",baseHydration:"Base hydration",wwHydrationAdjust:"Blend hydration adjust",blendAbsorption:"Blend absorption",blendFermentMult:"Ferment multiplier",finalHydration:"Final hydration",autolyse:"Autolyse",off:"Off",saltAuto:(t,o)=>`${t}% (auto — ${o}% computed from flour blend)`,saltManual:t=>`${t}% (manual override)`,starterHydrationAuto:t=>`${t}% (default)`,starterHydrationManual:t=>`${t}% (manual override)`,autolyseMins:t=>`${t} min`,effectiveTemp:"Effective temp",timingConfidence:"Timing confidence",timingConfidenceValue:t=>`±${t} from flour coefficient uncertainty`},es:{ambientTemp:"Temperatura ambiente",salt:"Sal",starterHydration:"Hidratación del iniciador",inoculation:"Inoculación",baseHydration:"Hidratación base",wwHydrationAdjust:"Ajuste hidratación mezcla",blendAbsorption:"Absorción de la mezcla",blendFermentMult:"Multiplicador de fermentación",finalHydration:"Hidratación final",autolyse:"Autólisis",off:"Apagada",saltAuto:(t,o)=>`${t}% (auto — ${o}% calculado desde la mezcla de harina)`,saltManual:t=>`${t}% (ajuste manual)`,starterHydrationAuto:t=>`${t}% (predeterminado)`,starterHydrationManual:t=>`${t}% (ajuste manual)`,autolyseMins:t=>`${t} min`,effectiveTemp:"Temp. efectiva",timingConfidence:"Confianza del tiempo",timingConfidenceValue:t=>`±${t} por incertidumbre del coeficiente de harina`},sv:{ambientTemp:"Omgivningstemperatur",salt:"Salt",starterHydration:"Surdeghydratation",inoculation:"Inokulering",baseHydration:"Bashydratation",wwHydrationAdjust:"Blandningsjustering hydratation",blendAbsorption:"Blandningsabsorption",blendFermentMult:"Jäsningsmultiplikator",finalHydration:"Sluthydratation",autolyse:"Autolys",off:"Av",saltAuto:(t,o)=>`${t}% (auto — ${o}% beräknat från mjölblandningen)`,saltManual:t=>`${t}% (manuell inställning)`,starterHydrationAuto:t=>`${t}% (standard)`,starterHydrationManual:t=>`${t}% (manuell inställning)`,autolyseMins:t=>`${t} min`,effectiveTemp:"Effektiv temp",timingConfidence:"Tidssäkerhet",timingConfidenceValue:t=>`±${t} från mjölkoefficientens osäkerhet`}},Hr={appSubtitle:"Formula, timing & schedule",saveToHomeScreen:"Save to Home Screen",installHelpTitle:"Add DoughCulator to your home screen",installHelpIntro:"If no install prompt appears, use your browser menu:",installHelpIOS:'iPhone/iPad (Safari): Tap Share, then "Add to Home Screen".',installHelpAndroid:'Android (Chrome): Open the menu, then tap "Install app" or "Add to Home screen".',installHelpDesktop:"Desktop (Chrome/Edge): Use the install icon in the address bar or browser menu.",close:"Close",assumptions:"Assumptions",copyRecipe:"Copy Recipe",copied:"Copied!",emptyStateTitle:"Enter your flour amounts above to calculate your recipe.",emptyStateSubtitle:"The calculator updates automatically as you type.",footerLine1:"Sourdough Calculator — open source, runs entirely in your browser.",footerLine2:"All calculations are guidelines. Your dough knows best.",redditBadge:"Share your bake on r/Sourdough!",copyTitle:"🍞 SOURDOUGH RECIPE",copyDivider:"===================",copyScheduleHeader:"SCHEDULE",copyScheduleDivider:"--------",copyAssumptionsHeader:"ASSUMPTIONS",copyAssumptionsDivider:"-----------",copyFooter:"Generated by DoughCulator",parameters:"Parameters",kitchenTemp:"Kitchen temp",temperatures:"Temperatures",bakingProfile:"Baking Profile",fineTuning:"Fine Tuning",totalFlour:"Total Flour (g)",flourSelection:"Flour Selection",flourTypes:{BreadFlour:"Bread Flour",AllPurpose:"All-Purpose",WholeWheat:"Whole Wheat",Rye:"Rye",Spelt:"Spelt",Einkorn:"Einkorn"},blendTotal:"Total",blendNormalize:"Normalize to 100%",flourBlend:"Flour Blend",crumbGoal:"Crumb Goal",crumbGoalNames:{Tight:"Tight",Balanced:"Balanced",Open:"Open"},crumbDescriptions:{Tight:"Dense, uniform bubbles. Best for toast & sandwiches.",Balanced:"Medium bubbles, versatile crumb. Classic sourdough.",Open:"Large holes, translucent walls. Advanced technique required."},crumbModalTitle:"Crumb Goal Guide",crumbModalTightBody:"A tight crumb has small, evenly distributed bubbles throughout the bread. This structure is ideal for sandwich loaves and toast, as it holds spreads and toppings without falling through. Achieved with lower hydration (60–68%), shorter bulk fermentation, and thorough shaping to de-gas the dough.",crumbModalBalancedBody:"A balanced crumb features a mix of small and medium-sized holes, offering both structure and airiness. This is the classic sourdough look — versatile for everyday baking. Typical hydration ranges from 68–75%, with moderate bulk fermentation and gentle shaping.",crumbModalOpenBody:"An open crumb has large, irregular holes with thin, translucent walls. It requires high hydration (75–85%+), extended bulk fermentation with careful stretch-and-folds, and minimal shaping to preserve gas. This is an advanced technique that rewards patience and practice.",advancedOptions:"Advanced Options",ambientTemp:"Ambient Temperature",doughTemp:"Dough Temperature",optional:"— optional",leaveBlankAmbient:"Leave blank to use ambient",salt:"Salt",saltAutoLabel:(t,o)=>`Auto: ${t}% = ${o}g`,saltManual:"Manual",saltOverride:"Override",saltBakersPct:"Baker's % relative to total flour",starterHydration:"Starter Hydration (%)",starterHydrationDefaultLabel:"Default: 100%",starterHydrationManual:"Manual",starterHydrationOverride:"Override",autolyse:"Autolyse",off:"Off",auto:"Auto",duration:"Duration",autolyseModalTitle:"Autolyse Guide",autolyseModalIntro:"Autolyse is a short rest after mixing flour and water, before adding starter and salt. It improves hydration and starts gluten development with less mixing.",autolyseModalUseTitle:"When to use it",autolyseModalUseItems:["High-hydration doughs where you want better extensibility and easier shaping.","Doughs with whole wheat or thirsty flours that benefit from fuller hydration.","When the dough feels tight during mixing and you want gentler gluten development."],autolyseModalAvoidTitle:"When to skip or shorten",autolyseModalAvoidItems:["Very warm kitchen or dough conditions (around 29°C / 84°F and above); keep it short or leave it off.","If your dough already gets slack or sticky quickly; long autolyse can reduce strength.","When you need a fast mix-and-go workflow and prefer speed over marginal handling gains."],fermentationPhilosophyLabel:"Fermentation Philosophy",philosophyPredictability:"Predictability",philosophyFlavorDev:"Flavor Development",philosophyPredictabilityDesc:"More starter when cold — consistent timing.",philosophyFlavorDevDesc:"Less starter when cold — slower fermentation builds complexity.",philosophyModalTitle:"Fermentation Philosophy",philosophyModalPredictabilityBody:"Predictability uses a higher inoculation rate when temperatures drop. This keeps fermentation on a reliable schedule regardless of season or kitchen conditions — ideal when you want consistent results and a repeatable bake-day routine.",philosophyModalFlavorDevBody:"Flavor Development lowers inoculation in cold conditions, letting the dough ferment slowly over a longer window. Extended time produces more acetic and lactic acids, yielding a more complex, tangy flavor — great for cold retard bakes or when you can be flexible with timing.",proofMethod:"Proof Method",proofMethodModalTitle:"Proof Methods",proofMethodRoomBody:"Room temperature proofing lets your shaped dough rise at ambient temperature. It's faster (typically 1–3 hours) and produces a milder flavor. Watch the dough closely — it can over-proof quickly in a warm kitchen.",proofMethodColdRetardBody:"Cold retard places your shaped dough in the fridge (typically 8–16 hours overnight). The slow, cold fermentation develops more complex, tangy flavors and gives you a flexible baking window — pull it out when you're ready to bake.",roomTemp:"Room Temp",coldRetard:"Cold Retard",fridgeTemp:"Fridge Temperature",scheduleMode:"Schedule Mode",relative:"Relative",clock:"Clock",clockStart:"Start",clockEnd:"End",startTime:"Start Time (HH:MM)",formulaInfoTitle:"Understanding Your Formula",formulaInfoMixBody:`"What You Add" shows the amounts you physically measure and mix — flour, water, starter, and salt. The flour and water here exclude what's already inside your starter.`,formulaInfoFormulaBody:`The "Full Baker's Formula" shows total flour and water in the entire dough, including the flour and water contributed by your starter. Baker's percentages are always calculated relative to this total flour — that's why the flour amount here is higher than what you physically add.`,formula:"Formula",bakersPctSubtitle:"Baker's percentages relative to total flour",ingredient:"Ingredient",grams:"Grams",bakersPct:"Baker's %",totalFlourRow:"Total Flour",whiteFlouRow:"— White flour",wwFlourRow:"— Whole wheat",water:"Water",saltRow:"Salt",starter:"Starter",totalDough:"Total Dough",doughWeight:"Dough weight",starterBreakdown:"Starter Breakdown",starterFlour:"Starter flour",starterWater:"Starter water",totalStarter:"Total starter",mixAdditions:"What You Add",bakersFormula:"Baker's Formula",fullFormula:"Full Baker's Formula",totalFlourBasis:"Total flour (basis)",mixFlour:"Flour",mixWater:"Water",starterNote:"Starter flour/water is already counted in total formula above.",starterContains:(t,o,c)=>`Starter contains ${t}g flour + ${o}g water (ratio ${c})`,timing:"Timing",bulkFermentation:"Bulk Fermentation",timingBarsModalTitle:"Timing Bar Guide",timingBarsModalIntro:"These bars show a fermentation window, not one exact minute. Read them left to right: the darker inner bar marks the earliest likely ready point, and the lighter bar behind it shows the later end of the recommended range.",timingBarsBulkTitle:"Bulk Fermentation",timingBarsBulkBody:"When the darker bar ends, start checking the dough for rise, bubbles, and jiggle. If it still needs time, let it continue toward the end of the lighter bar.",timingBarsColdTitle:"Cold Retard",timingBarsColdBody:"For cold retard, the darker fill marks the earliest bake-ready point after chilling. The lighter full bar shows the longer holding window in the fridge before the dough risks going too far.",fastest:"Fastest",slowest:"Slowest",foldSchedule:(t,o)=>`${t} stretch-and-fold sets, every ${o} min`,roomProof:"Room Proof",coldRetardProof:"Cold Retard",bakeColdNote:"Can bake directly from fridge.",totalActiveTime:"Estimated total active time (excl. bake):",inoculation:"Inoculation",hydration:"Hydration",schedule:"Schedule",notesWarnings:"Notes & Warnings",readingYourCrumb:"Reading Your Crumb",target:t=>`Target (${t}):`,underFermented:"Under-fermented:",overFermented:"Over-fermented:",guidance:{Tight:{description:"Dense but moist interior, small uniform bubbles.",underFermented:"Gummy center, flat rise, pale crust.",overFermented:"Bitter flavor, dense with no oven spring."},Balanced:{description:"Mix of small and medium bubbles, even distribution.",underFermented:"Dense patches, brick-like texture on the bottom.",overFermented:"Large irregular holes with weak structure, shaggy crumb."},Open:{description:"Large irregular holes, translucent bubble walls — requires high skill.",underFermented:"Closed crumb despite high hydration, no bloom.",overFermented:"Flat, gummy, shredded crumb with sour overload."}},floatTest:"Float test:",floatTestDesc:"The float test checks if your starter/levain is ready — a spoonful of ripe starter should float in water. This test is for starter readiness, not bulk dough.",pokeTest:"Poke test:",pokeTestDesc:"Poke proofed dough — slow, partial spring-back = ready to bake.",jiggleTest:"Jiggle test:",jiggleTestDesc:"Shake container — dough should move like jello when bulk is complete.",calculationAssumptions:"Calculation Assumptions",assumptionsDesc:"These are the values used to calculate your formula, timing, and schedule.",done:"Done",tempBands:{VeryCold:"Very Cold",Cold:"Cold",Standard:"Standard",Warm:"Warm",Hot:"Hot"},hydrationBands:{Low:"Low",Medium:"Medium",High:"High",VeryHigh:"Very High"},scheduleComplete:"Press to mark completed step",timingDisclaimer:"Timing estimates are approximate (±30-60 min). Observe your dough, not just the clock.",preFermentedFlour:"pre-fermented flour",ariaLabels:{toggleDarkMode:"Toggle dark mode",selectLanguage:"Select language",closeAssumptionsDrawer:"Close assumptions drawer",closeButton:"Close",learnTimingBars:"Learn how to read timing bars",closeTimingBarModal:"Close timing bar info modal",toggleTempUnit:"Toggle temperature unit",learnFermentationPhilosophy:"Learn about fermentation philosophy options",overrideSalt:"Override salt",overrideStarterHydration:"Override starter hydration",learnAutolyse:"Learn about autolyse",toggleAutolyseAuto:"Toggle autolyse auto mode",autolyseDurationProgress:"Autolyse duration progress",closeFermentationPhilosophyModal:"Close fermentation philosophy modal",closeAutolyseModal:"Close autolyse info modal",learnFormula:"Learn about the formula sections",closeFormulaModal:"Close formula info modal",learnProofMethod:"Learn about proof methods",closeProofMethodModal:"Close proof method info modal",learnCrumbGoal:"Learn about crumb goals",closeCrumbGoalModal:"Close crumb goal info modal"}},Pr={appSubtitle:"Fórmula, tiempos y programa",saveToHomeScreen:"Guardar en inicio",installHelpTitle:"Añadir DoughCulator a la pantalla de inicio",installHelpIntro:"Si no aparece el aviso de instalación, usa el menú del navegador:",installHelpIOS:'iPhone/iPad (Safari): toca Compartir y luego "Añadir a pantalla de inicio".',installHelpAndroid:'Android (Chrome): abre el menú y toca "Instalar app" o "Añadir a pantalla de inicio".',installHelpDesktop:"Escritorio (Chrome/Edge): usa el icono de instalación en la barra de direcciones o el menú del navegador.",close:"Cerrar",assumptions:"Supuestos",copyRecipe:"Copiar Receta",copied:"¡Copiado!",emptyStateTitle:"Ingresa la cantidad de harina para calcular tu receta.",emptyStateSubtitle:"La calculadora se actualiza automáticamente.",footerLine1:"Calculadora de masa madre — código abierto, funciona en tu navegador.",footerLine2:"Todos los cálculos son orientativos. Tu masa lo sabe mejor.",redditBadge:"Comparte tu horneada en r/Sourdough!",copyTitle:"🍞 RECETA DE MASA MADRE",copyDivider:"=======================",copyScheduleHeader:"PROGRAMA",copyScheduleDivider:"--------",copyAssumptionsHeader:"SUPUESTOS",copyAssumptionsDivider:"---------",copyFooter:"Generado por DoughCulator",parameters:"Parámetros",kitchenTemp:"Temp. de cocina",temperatures:"Temperaturas",bakingProfile:"Perfil de Horneado",fineTuning:"Ajuste Fino",totalFlour:"Harina Total (g)",flourSelection:"Selección de Harina",flourTypes:{BreadFlour:"Harina de Fuerza",AllPurpose:"Harina Todo Uso",WholeWheat:"Harina Integral",Rye:"Centeno",Spelt:"Espelta",Einkorn:"Einkorn"},blendTotal:"Total",blendNormalize:"Normalizar al 100%",flourBlend:"Mezcla de Harina",crumbGoal:"Objetivo de Miga",crumbGoalNames:{Tight:"Cerrada",Balanced:"Equilibrada",Open:"Abierta"},crumbDescriptions:{Tight:"Miga densa y uniforme. Ideal para tostadas y sándwiches.",Balanced:"Burbujas medianas, miga versátil. Masa madre clásica.",Open:"Agujeros grandes, paredes translúcidas. Requiere técnica avanzada."},crumbModalTitle:"Guía de Objetivo de Miga",crumbModalTightBody:"Una miga cerrada tiene burbujas pequeñas y uniformes. Esta estructura es ideal para pan de molde y tostadas, ya que sostiene ingredientes sin que se caigan. Se logra con menor hidratación (60–68%), fermentación en bloque más corta y formado firme para desgasificar la masa.",crumbModalBalancedBody:"Una miga equilibrada tiene una mezcla de agujeros pequeños y medianos, ofreciendo tanto estructura como ligereza. Es el aspecto clásico de la masa madre — versátil para el horneado diario. La hidratación típica va del 68–75%, con fermentación moderada y formado suave.",crumbModalOpenBody:"Una miga abierta tiene agujeros grandes e irregulares con paredes finas y translúcidas. Requiere alta hidratación (75–85%+), fermentación en bloque extendida con pliegues cuidadosos y formado mínimo para preservar el gas. Es una técnica avanzada que premia la paciencia y la práctica.",advancedOptions:"Opciones Avanzadas",ambientTemp:"Temperatura Ambiente",doughTemp:"Temperatura de la Masa",optional:"— opcional",leaveBlankAmbient:"Dejar en blanco para usar temperatura ambiente",salt:"Sal",saltAutoLabel:(t,o)=>`Auto: ${t}% = ${o}g`,saltManual:"Manual",saltOverride:"Personalizar",saltBakersPct:"% de panadero relativo a la harina total",starterHydration:"Hidratación del Iniciador (%)",starterHydrationDefaultLabel:"Predeterminado: 100%",starterHydrationManual:"Manual",starterHydrationOverride:"Personalizar",autolyse:"Autólisis",off:"Apagada",auto:"Auto",duration:"Duración",autolyseModalTitle:"Guía de Autólisis",autolyseModalIntro:"La autólisis es un reposo corto tras mezclar harina y agua, antes de añadir iniciador y sal. Mejora la hidratación y comienza el desarrollo de gluten con menos amasado.",autolyseModalUseTitle:"Cuándo usarla",autolyseModalUseItems:["Masas de alta hidratación cuando buscas más extensibilidad y formado más fácil.","Masas con harina integral o harinas muy absorbentes que se benefician de una hidratación completa.","Cuando la masa se siente tensa al mezclar y quieres desarrollar gluten de forma más suave."],autolyseModalAvoidTitle:"Cuándo evitarla o acortarla",autolyseModalAvoidItems:["Cocina o masa muy cálida (aprox. 29°C / 84°F o más); acórtala o déjala apagada.","Si la masa ya se vuelve floja o pegajosa con rapidez; una autólisis larga puede debilitar estructura.","Cuando necesitas un flujo rápido de mezclar y seguir, y priorizas velocidad."],fermentationPhilosophyLabel:"Filosofía de Fermentación",philosophyPredictability:"Consistencia",philosophyFlavorDev:"Sabor",philosophyPredictabilityDesc:"Más levadura en frío — tiempos consistentes.",philosophyFlavorDevDesc:"Menos levadura en frío — fermentación más lenta para mayor sabor.",philosophyModalTitle:"Filosofía de Fermentación",philosophyModalPredictabilityBody:"Consistencia usa una tasa de inoculación más alta cuando bajan las temperaturas. Esto mantiene la fermentación en un calendario fiable independientemente de la estación o las condiciones de cocina — ideal si buscas resultados consistentes y una rutina de horneado reproducible.",philosophyModalFlavorDevBody:"Sabor reduce la inoculación en condiciones frías, dejando que la masa fermente lentamente durante más tiempo. Este proceso produce más ácidos acético y láctico, generando un sabor más complejo y ácido — ideal para fermentaciones en frío o cuando tienes flexibilidad de tiempo.",proofMethod:"Método de Fermentación Final",proofMethodModalTitle:"Métodos de Fermentación Final",proofMethodRoomBody:"La fermentación a temperatura ambiente deja que tu masa formada suba a temperatura del entorno. Es más rápida (normalmente 1–3 horas) y produce un sabor más suave. Vigila la masa de cerca — puede sobre-fermentar rápidamente en una cocina cálida.",proofMethodColdRetardBody:"La fermentación en frío coloca tu masa formada en la nevera (normalmente 8–16 horas durante la noche). La fermentación lenta y fría desarrolla sabores más complejos y ácidos, y te da flexibilidad horaria — sácala cuando estés listo para hornear.",roomTemp:"Temp. Ambiente",coldRetard:"Frío (Nevera)",fridgeTemp:"Temperatura de Nevera",scheduleMode:"Modo de Programa",relative:"Duración",clock:"Reloj",clockStart:"Inicio",clockEnd:"Fin",startTime:"Hora de Inicio (HH:MM)",formulaInfoTitle:"Entendiendo Tu Fórmula",formulaInfoMixBody:'"Lo que añades" muestra las cantidades que mides y mezclas físicamente — harina, agua, masa madre y sal. La harina y el agua aquí excluyen lo que ya está dentro de tu masa madre.',formulaInfoFormulaBody:'La "Fórmula Completa del Panadero" muestra la harina y el agua totales en toda la masa, incluyendo la harina y el agua que aporta tu masa madre. Los porcentajes del panadero siempre se calculan respecto a esta harina total — por eso la cantidad de harina aquí es mayor que lo que añades físicamente.',formula:"Fórmula",bakersPctSubtitle:"Porcentajes del panadero relativos a la harina total",ingredient:"Ingrediente",grams:"Gramos",bakersPct:"% Panadero",totalFlourRow:"Harina Total",whiteFlouRow:"— Harina Blanca",wwFlourRow:"— Integral",water:"Agua",saltRow:"Sal",starter:"Iniciador",totalDough:"Masa Total",doughWeight:"Peso de la masa",starterBreakdown:"Desglose del Iniciador",starterFlour:"Harina del iniciador",starterWater:"Agua del iniciador",totalStarter:"Iniciador total",mixAdditions:"Lo Que Agregas",bakersFormula:"Fórmula del Panadero",fullFormula:"Fórmula Completa",totalFlourBasis:"Harina total (base)",mixFlour:"Harina",mixWater:"Agua",starterNote:"La harina/agua del iniciador ya está contada en la fórmula total.",starterContains:(t,o,c)=>`El iniciador contiene ${t}g harina + ${o}g agua (proporción ${c})`,timing:"Tiempos",bulkFermentation:"Fermentación en Masa",timingBarsModalTitle:"Guía de Barras de Tiempo",timingBarsModalIntro:"Estas barras muestran una ventana de fermentación, no un minuto exacto. Léelas de izquierda a derecha: la barra interior más oscura marca el primer punto probable de estar lista, y la barra más clara detrás muestra el final más tardío del rango recomendado.",timingBarsBulkTitle:"Fermentación en Masa",timingBarsBulkBody:"Cuando termina la barra más oscura, empieza a revisar volumen, burbujas y temblor de la masa. Si aún necesita tiempo, déjala seguir hasta el final de la barra más clara.",timingBarsColdTitle:"Fermentación en Frío",timingBarsColdBody:"En frío, el relleno más oscuro marca el punto más temprano para hornear tras el reposo en nevera. La barra clara completa muestra la ventana más larga de permanencia en frío antes de que la masa corra riesgo de pasarse.",fastest:"Más rápido",slowest:"Más lento",foldSchedule:(t,o)=>`${t} series de estirado y plegado, cada ${o} min`,roomProof:"Fermentación a Temp. Ambiente",coldRetardProof:"Fermentación en Frío",bakeColdNote:"Se puede hornear directamente desde la nevera.",totalActiveTime:"Tiempo activo total estimado (sin hornear):",inoculation:"Inoculación",hydration:"Hidratación",schedule:"Programa",notesWarnings:"Notas y Advertencias",readingYourCrumb:"Leyendo Tu Miga",target:t=>`Objetivo (${t}):`,underFermented:"Subfermentada:",overFermented:"Sobrefermentada:",guidance:{Tight:{description:"Interior denso pero húmedo, burbujas pequeñas y uniformes.",underFermented:"Centro gomoso, poco volumen, corteza pálida.",overFermented:"Sabor amargo, miga densa sin resorte en el horno."},Balanced:{description:"Mezcla de burbujas pequeñas y medianas, distribución uniforme.",underFermented:"Zonas densas, textura ladrillo en la base.",overFermented:"Agujeros grandes irregulares con estructura débil, miga deshilachada."},Open:{description:"Grandes agujeros irregulares, paredes translúcidas — requiere alta habilidad.",underFermented:"Miga cerrada pese a la alta hidratación, sin bloom.",overFermented:"Miga plana, gomosa y deshilachada con exceso de acidez."}},floatTest:"Prueba de flotación:",floatTestDesc:"La prueba de flotación comprueba si tu masa madre está lista — una cucharada de masa madre madura debe flotar en agua. Esta prueba es para la madurez del fermento, no para la masa en bulk.",pokeTest:"Prueba del dedo:",pokeTestDesc:"Presiona la masa fermentada — si recupera lento y parcialmente, está lista para hornear.",jiggleTest:"Prueba del temblor:",jiggleTestDesc:"Sacude el recipiente — la masa debe moverse como gelatina al terminar la fermentación.",calculationAssumptions:"Supuestos de Cálculo",assumptionsDesc:"Estos son los valores usados para calcular tu fórmula, tiempos y programa.",done:"Listo",tempBands:{VeryCold:"Muy frío",Cold:"Frío",Standard:"Estándar",Warm:"Cálido",Hot:"Caliente"},hydrationBands:{Low:"Baja",Medium:"Media",High:"Alta",VeryHigh:"Muy Alta"},scheduleComplete:"Pulsa para marcar el paso como completado",timingDisclaimer:"Los tiempos son aproximados (±30-60 min). Observe su masa, no solo el reloj.",preFermentedFlour:"harina prefermentada",ariaLabels:{toggleDarkMode:"Alternar modo oscuro",selectLanguage:"Seleccionar idioma",closeAssumptionsDrawer:"Cerrar panel de supuestos",closeButton:"Cerrar",learnTimingBars:"Aprender a leer las barras de tiempo",closeTimingBarModal:"Cerrar modal de barras de tiempo",toggleTempUnit:"Cambiar unidad de temperatura",learnFermentationPhilosophy:"Conocer las opciones de filosofía de fermentación",overrideSalt:"Ajustar sal manualmente",overrideStarterHydration:"Ajustar hidratación del iniciador",learnAutolyse:"Aprender sobre autólisis",toggleAutolyseAuto:"Alternar modo automático de autólisis",autolyseDurationProgress:"Progreso de duración de autólisis",closeFermentationPhilosophyModal:"Cerrar modal de filosofía de fermentación",closeAutolyseModal:"Cerrar modal de información de autólisis",learnFormula:"Conocer las secciones de la fórmula",closeFormulaModal:"Cerrar modal de información de la fórmula",learnProofMethod:"Conocer los métodos de fermentación final",closeProofMethodModal:"Cerrar modal de métodos de fermentación final",learnCrumbGoal:"Conocer los objetivos de miga",closeCrumbGoalModal:"Cerrar modal de objetivos de miga"}},jr={appSubtitle:"Formel, timing & schema",saveToHomeScreen:"Spara på hemskärmen",installHelpTitle:"Lägg till DoughCulator på hemskärmen",installHelpIntro:"Om ingen installationsruta visas, använd webbläsarens meny:",installHelpIOS:'iPhone/iPad (Safari): tryck på Dela och sedan "Lägg till på hemskärmen".',installHelpAndroid:'Android (Chrome): öppna menyn och tryck på "Installera app" eller "Lägg till på hemskärmen".',installHelpDesktop:"Desktop (Chrome/Edge): använd installationsikonen i adressfältet eller webbläsarmenyn.",close:"Stäng",assumptions:"Antaganden",copyRecipe:"Kopiera Recept",copied:"Kopierat!",emptyStateTitle:"Ange mängden mjöl ovan för att beräkna ditt recept.",emptyStateSubtitle:"Kalkylatorn uppdateras automatiskt när du skriver.",footerLine1:"Surdegskalkylator — öppen källkod, körs i din webbläsare.",footerLine2:"Alla beräkningar är riktlinjer. Din deg vet bäst.",redditBadge:"Dela ditt bak på r/Sourdough!",copyTitle:"🍞 SURDEGRECEPT",copyDivider:"===============",copyScheduleHeader:"SCHEMA",copyScheduleDivider:"------",copyAssumptionsHeader:"ANTAGANDEN",copyAssumptionsDivider:"----------",copyFooter:"Genererat av DoughCulator",parameters:"Parametrar",kitchenTemp:"Kökstemperatur",temperatures:"Temperaturer",bakingProfile:"Bakprofil",fineTuning:"Finjustering",totalFlour:"Totalt Mjöl (g)",flourSelection:"Mjölval",flourTypes:{BreadFlour:"Vetemjöl Special",AllPurpose:"Vetemjöl",WholeWheat:"Fullkornsvetemjöl",Rye:"Råg",Spelt:"Dinkel",Einkorn:"Einkorn"},blendTotal:"Totalt",blendNormalize:"Normalisera till 100%",flourBlend:"Mjölblandning",crumbGoal:"Smulmål",crumbGoalNames:{Tight:"Tät",Balanced:"Balanserad",Open:"Öppen"},crumbDescriptions:{Tight:"Tät, jämn smul. Bäst för toast & smörgåsar.",Balanced:"Medelstora bubblor, mångsidig smul. Klassisk surdeg.",Open:"Stora hål, genomskinliga väggar. Avancerad teknik krävs."},crumbModalTitle:"Guide för Smulmål",crumbModalTightBody:"En tät smul har små, jämnt fördelade bubblor. Denna struktur är idealisk för rostbröd och smörgåsar, eftersom den håller pålägg utan att det faller igenom. Uppnås med lägre hydrering (60–68%), kortare bulkjäsning och noggrann formning för att avlägsna gas.",crumbModalBalancedBody:"En balanserad smul har en blandning av små och medelstora hål som ger både struktur och luftighet. Detta är det klassiska surdegsbrödet — mångsidigt för vardagsbak. Typisk hydrering är 68–75%, med måttlig bulkjäsning och försiktig formning.",crumbModalOpenBody:"En öppen smul har stora, oregelbundna hål med tunna, genomskinliga väggar. Kräver hög hydrering (75–85%+), förlängd bulkjäsning med försiktiga sträck-och-vik, och minimal formning för att bevara gasen. Detta är en avancerad teknik som belönar tålamod och övning.",advancedOptions:"Avancerade Alternativ",ambientTemp:"Omgivningstemperatur",doughTemp:"Degtemperatur",optional:"— valfritt",leaveBlankAmbient:"Lämna tomt för att använda omgivningstemperatur",salt:"Salt",saltAutoLabel:(t,o)=>`Auto: ${t}% = ${o}g`,saltManual:"Manuell",saltOverride:"Anpassa",saltBakersPct:"Bagarprocent relativt totalt mjöl",starterHydration:"Surdeghydratation (%)",starterHydrationDefaultLabel:"Standard: 100%",starterHydrationManual:"Manuell",starterHydrationOverride:"Anpassa",autolyse:"Autolys",off:"Av",auto:"Auto",duration:"Varaktighet",autolyseModalTitle:"Autolysguide",autolyseModalIntro:"Autolys är en kort vila efter att mjöl och vatten blandats, innan surdeg och salt tillsätts. Den förbättrar hydreringen och startar glutenutvecklingen med mindre bearbetning.",autolyseModalUseTitle:"När du bör använda den",autolyseModalUseItems:["Degar med hög hydrering där du vill ha bättre tänjbarhet och enklare formning.","Degar med fullkorn eller törstiga mjölsorter som mår bra av mer fullständig hydrering.","När degen känns stram tidigt i blandningen och du vill ha skonsammare glutenutveckling."],autolyseModalAvoidTitle:"När du bör hoppa över eller korta ner",autolyseModalAvoidItems:["Mycket varm köks- eller degtemperatur (runt 29°C / 84°F eller högre); håll den kort eller stäng av.","Om degen redan blir slapp eller kladdig snabbt; lång autolys kan minska styrkan.","När du behöver ett snabbt arbetsflöde och prioriterar tempo över små hanteringsvinster."],fermentationPhilosophyLabel:"Jäsningsfilosofi",philosophyPredictability:"Förutsägbarhet",philosophyFlavorDev:"Smakutveckling",philosophyPredictabilityDesc:"Mer surdeg vid kyla — konsekvent timing.",philosophyFlavorDevDesc:"Mindre surdeg vid kyla — långsammare jäsning ger mer smak.",philosophyModalTitle:"Jäsningsfilosofi",philosophyModalPredictabilityBody:"Förutsägbarhet använder en högre inokulationsgrad när temperaturen sjunker. Det håller jäsningen på ett pålitligt schema oavsett årstid eller köksförhållanden — idealiskt när du vill ha konsekventa resultat och en repeterbar bakrutin.",philosophyModalFlavorDevBody:"Smakutveckling sänker inokulationen i kalla förhållanden och låter degen jäsa långsamt under längre tid. Den förlängda tiden producerar mer ättiksyra och mjölksyra, vilket ger en mer komplex och syrlig smak — perfekt för kall jäsning eller när du har flexibel timing.",proofMethod:"Jäsningsmetod",proofMethodModalTitle:"Jäsningsmetoder",proofMethodRoomBody:"Rumstemperaturjäsning låter din formade deg jäsa vid omgivningstemperatur. Det går snabbare (vanligtvis 1–3 timmar) och ger en mildare smak. Håll koll på degen — den kan överjäsa snabbt i ett varmt kök.",proofMethodColdRetardBody:"Kall jäsning placerar din formade deg i kylskåpet (vanligtvis 8–16 timmar över natten). Den långsamma, kalla jäsningen utvecklar mer komplexa, syrliga smaker och ger dig ett flexibelt bakfönster — ta ut den när du är redo att baka.",roomTemp:"Rumstemperatur",coldRetard:"Kall Jäsning",fridgeTemp:"Kylskåpstemperatur",scheduleMode:"Schemaläge",relative:"Relativt",clock:"Klocka",clockStart:"Start",clockEnd:"Slut",startTime:"Starttid (HH:MM)",formulaInfoTitle:"Förstå Din Formel",formulaInfoMixBody:'"Det du tillsätter" visar mängderna du fysiskt mäter upp och blandar — mjöl, vatten, surdeg och salt. Mjölet och vattnet här exkluderar det som redan finns i din surdeg.',formulaInfoFormulaBody:'"Fullständig Bagarformel" visar totalt mjöl och vatten i hela degen, inklusive mjölet och vattnet som din surdeg bidrar med. Bagarprocent beräknas alltid relativt detta totala mjöl — därför är mjölmängden här högre än vad du fysiskt tillsätter.',formula:"Formel",bakersPctSubtitle:"Bagarprocent relativt totalt mjöl",ingredient:"Ingrediens",grams:"Gram",bakersPct:"Bagarens %",totalFlourRow:"Totalt Mjöl",whiteFlouRow:"— Vitt mjöl",wwFlourRow:"— Fullkorn",water:"Vatten",saltRow:"Salt",starter:"Surdeg",totalDough:"Total Deg",doughWeight:"Degvikt",starterBreakdown:"Surdegspecifikation",starterFlour:"Surdegsmjöl",starterWater:"Surdegsvatten",totalStarter:"Total surdeg",mixAdditions:"Vad Du Tillsätter",bakersFormula:"Bagarformel",fullFormula:"Fullständig Bagarformel",totalFlourBasis:"Totalt mjöl (bas)",mixFlour:"Mjöl",mixWater:"Vatten",starterNote:"Surdegsmjöl/vatten är redan inkluderat i totalformeln ovan.",starterContains:(t,o,c)=>`Surdegen innehåller ${t}g mjöl + ${o}g vatten (förhållande ${c})`,timing:"Timing",bulkFermentation:"Bulkjäsning",timingBarsModalTitle:"Guide till Tidsstaplar",timingBarsModalIntro:"Dessa staplar visar ett jästidsfönster, inte en exakt minut. Läs dem från vänster till höger: den mörkare inre stapeln markerar den tidigaste sannolika tidpunkten då degen är klar, och den ljusare stapeln bakom visar den senare delen av det rekommenderade intervallet.",timingBarsBulkTitle:"Bulkjäsning",timingBarsBulkBody:"När den mörkare stapeln tar slut bör du börja kontrollera degens höjd, bubblor och gung. Om den behöver mer tid kan du låta den fortsätta mot slutet av den ljusare stapeln.",timingBarsColdTitle:"Kall Jäsning",timingBarsColdBody:"För kall jäsning markerar den mörkare fyllningen den tidigaste punkten då degen brukar vara redo att bakas efter kylning. Den ljusare hela stapeln visar det längre förvaringsfönstret i kylen innan degen riskerar att gå för långt.",fastest:"Snabbast",slowest:"Långsammast",foldSchedule:(t,o)=>`${t} sträck-och-vik-set, var ${o}:e min`,roomProof:"Jäsning i Rumstemperatur",coldRetardProof:"Kall Jäsning",bakeColdNote:"Kan bakas direkt från kylskåpet.",totalActiveTime:"Beräknad total aktiv tid (exkl. bakning):",inoculation:"Inokulering",hydration:"Hydratation",schedule:"Schema",notesWarnings:"Noteringar & Varningar",readingYourCrumb:"Tolka Din Smul",target:t=>`Mål (${t}):`,underFermented:"Underjäst:",overFermented:"Överjäst:",guidance:{Tight:{description:"Tät men fuktig inre, små jämna bubblor.",underFermented:"Klibbigt centrum, låg volym, blek skorpa.",overFermented:"Bitter smak, tät smul utan ugnsresning."},Balanced:{description:"Blandning av små och medelstora bubblor, jämn fördelning.",underFermented:"Täta områden, tegelliknande textur i botten.",overFermented:"Stora oregelbundna hål med svag struktur, fransig smul."},Open:{description:"Stora oregelbundna hål, genomskinliga bubbelväggar — kräver hög skicklighet.",underFermented:"Tät smul trots hög hydratation, ingen blomning.",overFermented:"Platt, klibbig, söndrig smul med syraöverskott."}},floatTest:"Flottesttest:",floatTestDesc:"Flottesttestet kontrollerar om din surdeg är redo — en sked mogen surdeg ska flyta i vatten. Det här testet gäller surdegsmognad, inte bulkdegen.",pokeTest:"Stickprov:",pokeTestDesc:"Tryck på den jästa degen — långsam, delvis återfjädring = redo att baka.",jiggleTest:"Skakprov:",jiggleTestDesc:"Skaka behållaren — degen ska röra sig som gelé när bulkjäsningen är klar.",calculationAssumptions:"Beräkningsantaganden",assumptionsDesc:"Dessa är värdena som används för att beräkna din formel, timing och schema.",done:"Klar",tempBands:{VeryCold:"Mycket kallt",Cold:"Kallt",Standard:"Standard",Warm:"Varmt",Hot:"Hett"},hydrationBands:{Low:"Låg",Medium:"Medium",High:"Hög",VeryHigh:"Mycket Hög"},scheduleComplete:"Tryck för att markera steget som klart",timingDisclaimer:"Tidsuppskattningar är ungefärliga (±30-60 min). Observera din deg, inte bara klockan.",preFermentedFlour:"förjäst mjöl",ariaLabels:{toggleDarkMode:"Växla mörkt läge",selectLanguage:"Välj språk",closeAssumptionsDrawer:"Stäng antagandepanelen",closeButton:"Stäng",learnTimingBars:"Lär dig läsa tidsstaplarna",closeTimingBarModal:"Stäng tidsstapelmodal",toggleTempUnit:"Växla temperaturenhet",learnFermentationPhilosophy:"Lär dig om jäsningsfilosofi",overrideSalt:"Ändra salt manuellt",overrideStarterHydration:"Ändra surdeghydratation",learnAutolyse:"Lär dig om autolys",toggleAutolyseAuto:"Växla autoläge för autolys",autolyseDurationProgress:"Autolysens tidsförlopp",closeFermentationPhilosophyModal:"Stäng jäsningsfilosofimodal",closeAutolyseModal:"Stäng autolys-infomodal",learnFormula:"Lär dig om formelsektionerna",closeFormulaModal:"Stäng formelinfomodal",learnProofMethod:"Lär dig om jäsningsmetoder",closeProofMethodModal:"Stäng jäsningsmetodmodal",learnCrumbGoal:"Lär dig om smulmål",closeCrumbGoalModal:"Stäng smulmålsmodal"}},Ee={en:Hr,es:Pr,sv:jr},Rr=["WholeWheat","Rye","Spelt","Einkorn"],$r=["BreadFlour","AllPurpose","WholeWheat","Rye","Spelt","Einkorn"],l2={BreadFlour:{absorptionCoeff:K1(1,.05),fermentMult:K1(1,.05),proofFermentMult:K1(1,.05)},AllPurpose:{absorptionCoeff:K1(.97,.05),fermentMult:K1(1,.05),proofFermentMult:K1(1,.05)},WholeWheat:{absorptionCoeff:K1(1.12,.1),fermentMult:K1(.85,.1),proofFermentMult:K1(.88,.1)},Rye:{absorptionCoeff:K1(1.2,.15),fermentMult:K1(.72,.15),proofFermentMult:K1(.78,.2)},Spelt:{absorptionCoeff:K1(1.02,.15),fermentMult:K1(.82,.15),proofFermentMult:K1(.85,.15)},Einkorn:{absorptionCoeff:K1(1.02,.15),fermentMult:K1(.9,.2),proofFermentMult:K1(.88,.2)}};function ot(t,o,c){return Math.max(t,Math.min(o,c))}function K1(t,o=.12){return{value:t,low:t*(1+o),high:t*(1-o)}}function xt(t,o){const c=o!==null?(t+o)/2:t;return c>=29?20:c>=27?25:c>=24?30:c>=21?35:c>=18?40:45}function Dr(t){let{totalFlourInputG:o,flourBlend:c,crumbGoal:s,ambientTempC:b,doughTempC:f,saltAutoCalc:d,saltPct:i,starterHydrationAutoCalc:g,starterHydrationPct:A}=t;(!c.length||c.every(K=>K.pct<=0))&&(c=[{type:"BreadFlour",pct:100}]),o<=0&&(o=100);const y=o,S=c.reduce((K,C)=>K+C.pct,0),W=S>0?100/S:1,J=c.filter(K=>Rr.includes(K.type)).reduce((K,C)=>K+C.pct*W,0),$=y>0?J/100:0,k=Math.round(y*$),u=y-k,D=c.reduce((K,C)=>K+C.pct,0),V=D>0?D:1,L=c.reduce((K,C)=>{const h=l2[C.type].absorptionCoeff,w=C.pct/V;return{value:K.value+w*h.value,low:K.low+w*h.low,high:K.high+w*h.high}},{value:0,low:0,high:0}),N=L.value,x={value:L.value,low:L.low,high:L.high},T=c.reduce((K,C)=>{const h=l2[C.type].fermentMult,w=C.pct/V;return{value:K.value+w*h.value,low:K.low+w*h.low,high:K.high+w*h.high}},{value:0,low:0,high:0}),z=T.value,P={value:T.value,low:T.low,high:T.high},B=c.reduce((K,C)=>{const h=l2[C.type].proofFermentMult,w=C.pct/V;return{value:K.value+w*h.value,low:K.low+w*h.low,high:K.high+w*h.high}},{value:0,low:0,high:0}),Y={Tight:65,Balanced:73,Open:82}[s],a1=(N-1)*100,b1=Math.min(Y+a1,95);let l1;b1<70?l1="Low":b1<=75?l1="Medium":b1<=83?l1="High":l1="VeryHigh";const c1=f!==null?(b+f)/2:b;let x1;c1<18?x1="VeryCold":c1<21?x1="Cold":c1<24?x1="Standard":c1<27?x1="Warm":x1="Hot";const{fermentationPhilosophy:g1}=t;let O;g1==="FlavorDevelopment"?(O={Tight:12,Balanced:14,Open:10}[s],c1<21?O-=4:c1<24?O+=0:c1<27?O-=3:c1<=29?O-=5:O-=6,c1<21&&(O+=Math.min(3,(21-c1)*.5)),l1==="Low"?O+=2:l1==="High"?O-=2:l1==="VeryHigh"&&(O-=3),$>=.3&&(O-=1),O=ot(5,12.5,O)):(O={Tight:18,Balanced:20,Open:16}[s],c1<21?O+=4:c1<24?O+=0:c1<27?O-=2:c1<=29?O-=4:O-=6,l1==="Low"?O+=2:l1==="High"?O-=2:l1==="VeryHigh"&&(O-=3),$>=.3&&(O-=1),O=ot(10,26,O));const z1=b1/100*y,B1=ot(1.9,2.2,1.9+$*.3),R1=d?B1:i,H1=R1/100*y,k1=ot(50,200,g?100:A),T1=y*(O/100),C1=T1*(1+k1/100),F1=C1-T1,X1=y-T1,W1=z1-F1,Q1=Math.max(0,W1),E1=W1<0,O1=y,U1=z1,Y1=y+z1+H1,p1=B.value*At,h1={value:B.value*At,low:B.low*At,high:B.high*At};return{totalFlourG:y,whiteFlourG:u,wwFlourG:k,wwRatio:$,baseHydrationPct:Y,wwHydrationAdjust:a1,blendAbsorption:N,blendAbsorptionRange:x,blendFermentMult:z,blendFermentMultRange:P,blendProofFermentMult:p1,blendProofFermentMultRange:h1,finalHydrationPct:b1,hydrationBand:l1,totalWaterG:z1,autoSaltPct:B1,effectiveSaltPct:R1,saltG:H1,effectiveStarterHydrationPct:k1,inoculationPct:O,starterFlourG:T1,starterWaterG:F1,starterTotalG:C1,totalFormulaFlourG:O1,totalFormulaWaterG:U1,totalDoughWeightG:Y1,mixFlourG:X1,mixWaterG:Q1,negativeWater:E1,effectiveTempC:c1,tempBand:x1}}function ft(t,o){if(t<=o[0][0])return o[0][1];if(t>=o[o.length-1][0])return o[o.length-1][1];for(let c=0;c<o.length-1;c++){const[s,b]=o[c],[f,d]=o[c+1];if(t>=s&&t<=f)return b+(t-s)/(f-s)*(d-b)}return o[o.length-1][1]}const O2=[[16,8],[19.5,8],[22.5,5],[25.5,3.5],[28,3],[31,2]],Lr=[[16,12],[19.5,12],[22.5,8],[25.5,6],[28,5],[31,4]],Er=[[16,2],[19.5,2],[22.5,1.4],[25.5,1],[28,.75],[31,.6]],Or=[[16,35],[19.5,30],[22.5,25],[25.5,22],[28,20],[31,20]];function Ir(t,o){const{effectiveTempC:c,hydrationBand:s,inoculationPct:b,blendFermentMult:f,blendFermentMultRange:d,blendProofFermentMult:i,blendProofFermentMultRange:g}=t,{fermentationPhilosophy:A,ambientTempC:y}=o;let S=c;{const F1=ft(c,O2),X1=s==="Low"?1.15:s==="High"?.85:s==="VeryHigh"?.75:1,W1=Math.pow(20/b,.35),E1=F1*X1*W1*f*60;if(E1>180){const O1=c-(E1/60-3)*.3;S=Math.max(y,Math.min(c,O1))}}const W=ft(S,O2),J=ft(S,Lr),$=s==="Low"?1.15:s==="High"?.85:s==="VeryHigh"?.75:1,k=Math.pow(20/b,.35),u=1+(t.effectiveSaltPct-2)*.1,D=W*$*k*f*u,V=J*$*k*f*u,L=W*$*k*d.low*u,N=J*$*k*d.high*u,x=1.5,T=3,z=ft(S,Er);let P=x*z*$*k*i*u,B=T*z*$*k*i*u,G=x*z*$*k*g.low*u;x*z*$*k*g.high*u;const Y=Pt,a1=jt,b1=(D+V)/2,c1=1.15-.2*ot(.3,1,b1/V),{fridgeTempC:x1}=o,g1=ot(.7,1.5,1-(x1-4)*.08);let O=Math.round(Y*g1*c1),z1=Math.round(a1*g1*c1);A==="FlavorDevelopment"&&(P*=1.2,B*=1.2,G*=1.2,O=Math.round(O*1.25),z1=Math.round(z1*1.25));const B1=Math.round(ft(S,Or)),R1=Math.min(4,Math.floor(D*60/B1)),H1=d.low/f,L1=g.low/i,k1={value:D,low:L,high:D/H1},T1={value:V,low:V*H1,high:N},C1={value:P,low:G,high:P/L1};return{bulkMin:D,bulkMax:V,bulkMinRange:k1,bulkMaxRange:T1,proofMin:P,proofMax:B,proofMinRange:C1,coldRetardMin:O,coldRetardMax:z1,foldCount:R1,foldIntervalMins:B1}}function Nr(t,o,c,s){const{autolyseOn:b,autolyseMins:f,proofMethod:d}=t,{proofMin:i,proofMax:g,coldRetardMin:A,coldRetardMax:y,foldIntervalMins:S,bulkMin:W,bulkMax:J,foldCount:$}=c,k=Cr[s],u=[],D=Math.round(W*10)/10,V=Math.round(J*10)/10,L=xt(t.ambientTempC,t.doughTempC);if(b){const B=L,G=f!==L?k.autolyseUserNote(f):"";u.push({label:k.autolyse,durationMins:B,notes:k.autolyseNote(o.mixFlourG,o.mixWaterG,D1(B))+G})}u.push({label:k.mix,durationMins:W2,notes:k.mixNote(b,o.mixFlourG,o.mixWaterG,o.starterTotalG,o.saltG,D1(W2))});const N=$>=2?Math.ceil($*.6):Math.max(1,$),x=Math.max(0,$-N)+1,T=(N+x)*S;u.push({label:k.bulkFermentation,durationMins:null,rangeMinMins:Math.round(W*60),rangeMaxMins:Math.round(J*60),notes:k.bulkNote(D,V)}),u.push({label:k.stretchFold,durationMins:N*S,notes:k.stretchFoldNote(S,N),setCount:N,isSubStep:!0}),x>0&&u.push({label:k.coilFolds,durationMins:x*S,notes:k.coilFoldsNote(S,x),setCount:x,isSubStep:!0});const z=Math.max(0,Math.round(W*60)-T),P=Math.max(0,Math.round(J*60)-T);if(P>0&&u.push({label:k.handsOffRise,durationMins:null,rangeMinMins:z,rangeMaxMins:P,notes:k.handsOffRiseNote(D1(z)+" – "+D1(P)),isSubStep:!0}),u.push({label:k.preShape,durationMins:G2,notes:k.preShapeNote(D1(G2))}),d==="Room"){const B=Bt+Math.round(i*60),G=Bt+Math.round(g*60);u.push({label:k.roomProof,durationMins:null,rangeMinMins:B,rangeMaxMins:G,notes:k.roomProofNote(D1(B)+" – "+D1(G))})}else u.push({label:k.coldRetard,durationMins:null,rangeMinMins:Bt+A*60,rangeMaxMins:Bt+y*60,notes:k.coldRetardNote(A,y)});return u.push({label:k.score,durationMins:2,notes:k.scoreNote(D1(2))}),u.push({label:k.bake,durationMins:null,notes:k.bakeNote}),u.push({label:k.bakeCovered,durationMins:I2,notes:k.bakeCoveredNote(D1(I2)),isSubStep:!0}),u.push({label:k.bakeUncovered,durationMins:N2,notes:k.bakeUncoveredNote(D1(N2)),isSubStep:!0}),u}function Gr(t,o,c){const s=[],{effectiveTempC:b,hydrationBand:f,wwRatio:d,effectiveStarterHydrationPct:i,negativeWater:g}=o,{autolyseOn:A,autolyseMins:y,crumbGoal:S,starterHydrationAutoCalc:W,starterHydrationPct:J,proofMethod:$,fridgeTempC:k}=t,u=Ar[c];t.totalFlourInputG<=0&&s.push({level:"warn",message:u.minFlourAmount??"Flour amount too low; defaulted to 100g."}),g&&s.push({level:"danger",message:u.negativeWater??"Starter hydration exceeds dough water; reduce inoculation or starter hydration."}),(t.doughTempC!==null?(t.ambientTempC+t.doughTempC)/2:t.ambientTempC)<=0&&s.push({level:"danger",message:u.dangerSubZeroTemp}),b<18&&s.push({level:"danger",message:u.dangerLow}),b>=30&&s.push({level:"danger",message:u.dangerHigh}),b>=27&&b<30&&s.push({level:"warn",message:u.warnHigh}),b>=24&&b<27&&s.push({level:"success",message:u.infoSweet}),b>=20&&b<24&&s.push({level:"info",message:u.infoSlow}),(f==="High"||f==="VeryHigh")&&b>26&&s.push({level:"warn",message:u.warnHydrationTemp}),(f==="High"||f==="VeryHigh")&&s.push({level:"info",message:u.infoHighHydration});const V=xt(t.ambientTempC,t.doughTempC);d>.3&&A&&y>V&&s.push({level:"info",message:u.infoWWAutolyse}),S==="Open"&&s.push({level:"warn",message:u.warnOpenCrumb});const L=t.flourBlend.find(x=>x.type==="Rye"),N=L?L.pct:0;return S==="Open"&&N>60&&s.push({level:"danger",message:u.dangerOpenCrumbRye}),N>30&&s.push({level:"warn",message:u.ryeHighWarning}),W||Math.max(50,Math.min(200,J))!==J&&s.push({level:"warn",message:u.warnStarterHydrationClamped}),s}function Wr(t,o,c){const{ambientTempC:s,saltAutoCalc:b,saltPct:f,starterHydrationAutoCalc:d,autolyseOn:i,autolyseMins:g}=t,{effectiveTempC:A,inoculationPct:y,baseHydrationPct:S,wwHydrationAdjust:W,blendAbsorption:J,blendAbsorptionRange:$,blendFermentMult:k,blendFermentMultRange:u,finalHydrationPct:D,autoSaltPct:V,effectiveSaltPct:L,effectiveStarterHydrationPct:N}=o,x=Br[c],T=W>=0?"+":"",z=`${((u.low/k-1)*100).toFixed(0)}%`;return{[x.ambientTemp]:`${s.toFixed(1)}°C`,[x.effectiveTemp]:`${A.toFixed(1)}°C`,[x.salt]:b?x.saltAuto(L.toFixed(2),V.toFixed(2)):x.saltManual(f),[x.starterHydration]:d?x.starterHydrationAuto(N):x.starterHydrationManual(N),[x.inoculation]:`${y.toFixed(1)}%`,[x.baseHydration]:`${S}%`,[x.blendAbsorption]:`${J.toFixed(3)} (${$.low.toFixed(3)}–${$.high.toFixed(3)})`,[x.blendFermentMult]:`${k.toFixed(3)} (${u.low.toFixed(3)}–${u.high.toFixed(3)})`,[x.wwHydrationAdjust]:`${T}${W.toFixed(1)}%`,[x.finalHydration]:`${D.toFixed(1)}%`,[x.autolyse]:i?x.autolyseMins(g):x.off,[x.timingConfidence]:x.timingConfidenceValue(z)}}function Ur(t,o="en"){const c=Dr(t),s=Ir(c,t),b=Nr(t,c,s,o),f=Gr(t,c,o),d=Wr(t,c,o);return{formula:c,timing:s,schedule:b,warnings:f,assumptions:d}}function i2(t){return Math.round(t*9/5+32)}function Vr(t){return(t-32)*5/9}function D1(t){const o=Math.floor(t/60),c=Math.round(t%60);return o===0?`${c}m`:c===0?`${o}h`:`${o}h ${c}m`}function Ct(t,o){if(!/^\d{1,2}:\d{2}$/.test(t))return t;const[c,s]=t.split(":"),f=((parseInt(c)*60+parseInt(s)+Math.round(o))%1440+1440)%1440,d=Math.floor(f/60),i=f%60;return`${d.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}const Pt=8,jt=16,At=1.15,I2=20,N2=20,G2=45,Bt=10,W2=45,Rt={totalFlourInputG:500,flourBlend:[{type:"BreadFlour",pct:80},{type:"WholeWheat",pct:20}],crumbGoal:"Balanced",ambientTempC:24,doughTempC:null,saltAutoCalc:!0,saltPct:2,starterHydrationAutoCalc:!0,starterHydrationPct:100,autolyseMins:30,autolyseOn:!1,proofMethod:"ColdRetard",fermentationPhilosophy:"Predictability",scheduleMode:"relative",startTime:null,fridgeTempC:4,tempUnit:"C"},Q2="sourdough_cal_inputs";function qr(){try{const t=localStorage.getItem(Q2);if(t){const o=JSON.parse(t);return{...Rt,...o,tempUnit:Rt.tempUnit}}}catch{}return{...Rt}}function c2(t){try{const{tempUnit:o,...c}=t;localStorage.setItem(Q2,JSON.stringify(c))}catch{}}function d2(t){let{flourBlend:o,totalFlourInputG:c,...s}=t;return(!o.length||o.every(b=>b.pct<=0))&&(o=[{type:"BreadFlour",pct:100}]),c<=0&&(c=100),{...s,flourBlend:o,totalFlourInputG:c}}function Kr(){const{subscribe:t,set:o,update:c}=lt(d2(qr()));return{subscribe:t,set:s=>{const b=d2(s);c2(b),o(b)},update:s=>{c(b=>{const f=d2(s(b));return c2(f),f})},reset:()=>{const s={...Rt};c2(s),o(s)}}}const be=Kr(),ea="sourdough_cal_lang";function Yr(){return localStorage.getItem(ea)??"en"}const ye=lt(Yr());ye.subscribe(t=>{localStorage.setItem(ea,t)});const ta=gr([be,ye],([t,o])=>Ur(t,o)),p2=lt(!1),aa="sourdough_cal_full_formula";function Zr(){return localStorage.getItem(aa)==="true"}const v2=lt(Zr());v2.subscribe(t=>{localStorage.setItem(aa,String(t))});const ra="sourdough_cal_baking_profile",oa="sourdough_cal_fine_tuning";function na(t,o){const c=localStorage.getItem(t);return c===null?o:c==="true"}const Jr=lt(na(ra,!0)),Xr=lt(na(oa,!1));Jr.subscribe(t=>{localStorage.setItem(ra,String(t))});Xr.subscribe(t=>{localStorage.setItem(oa,String(t))});var Qr=E('<div><span class="shrink-0 text-base leading-none"><!></span> <p class="leading-snug"> </p></div>'),e3=E('<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70"><div class="card-body p-5 gap-3"><h2 class="text-base font-semibold text-base-content uppercase tracking-wide"> </h2> <!></div></div>');function t3(t,o){$e(o,!0);const c=()=>se(ye,"$lang",s),[s,b]=Le(),f=m1(()=>Ee[c()]),d={info:"alert-info alert-soft",success:"alert-success alert-soft",warn:"alert-warning alert-soft",danger:"alert-error alert-soft"};var i=b2(),g=ne(i);{var A=y=>{var S=e3(),W=a(S),J=a(W),$=a(J,!0);e(J);var k=n(J,2);J1(k,17,()=>o.warnings,ge,(u,D)=>{var V=Qr(),L=a(V),N=a(L);{var x=Y=>{var a1=fe("✓");_(Y,a1)},T=Y=>{var a1=fe("ℹ");_(Y,a1)},z=Y=>{var a1=fe("⚠");_(Y,a1)},P=Y=>{var a1=fe("✕");_(Y,a1)};d1(N,Y=>{r(D).level==="success"?Y(x):r(D).level==="info"?Y(T,1):r(D).level==="warn"?Y(z,2):Y(P,-1)})}e(L);var B=n(L,2),G=a(B,!0);e(B),e(V),R(()=>{u1(V,1,`alert ${d[r(D).level]??"alert-info"??""} text-sm py-3 px-4`),l(G,r(D).message)}),_(u,V)}),e(W),e(S),R(()=>l($,r(f).notesWarnings)),_(y,S)};d1(g,y=>{o.warnings.length>0&&y(A)})}_(t,i),De(),b()}var a3=$t(`<svg viewBox="0 0 551.000000 315.000000" fill="currentColor" aria-hidden="true"><g transform="translate(551, 0) rotate(90)"><g transform="translate(0.000000,551.000000) scale(0.100000,-0.100000)"><path d="M1915 5454 c-16 -3 -76 -14 -133 -25 -438 -84 -901 -387 -1165 -761
-79 -112 -147 -179 -248 -244 -136 -87 -199 -156 -199 -216 0 -26 43 -88 61
-88 16 0 199 -91 199 -99 0 -4 -28 -33 -61 -66 -160 -156 -241 -361 -289 -730
-25 -195 -28 -547 -5 -735 48 -403 142 -765 269 -1032 124 -262 292 -482 490
-642 235 -190 485 -304 819 -373 122 -25 151 -27 377 -27 237 -1 248 0 343 26
355 99 550 306 613 650 21 110 23 353 5 613 -54 810 -41 1208 70 2120 28 230
32 290 32 520 1 277 -10 366 -65 535 -92 286 -324 477 -673 555 -68 16 -375
29 -440 19z m464 -113 c105 -27 268 -105 343 -165 154 -122 248 -320 278 -581
23 -209 12 -446 -45 -925 -51 -438 -65 -588 -76 -870 -11 -268 0 -767 22
-1045 7 -77 12 -243 13 -370 1 -208 -1 -239 -21 -318 -72 -282 -225 -441 -509
-530 -298 -94 -791 -35 -1163 139 -370 173 -671 499 -836 909 -210 520 -291
1195 -206 1715 51 311 114 456 263 602 130 128 122 156 -69 250 -57 28 -106
55 -109 60 -10 16 46 67 154 140 138 93 172 125 255 242 188 266 420 462 712
606 171 83 297 124 515 164 14 2 108 3 210 1 150 -2 201 -7 269 -24z M1920
5282 c-40 -33 -26 -115 25 -142 88 -47 155 46 88 120 -36 39 -81 48 -113 22z
m90 -62 c22 -41 -15 -66 -52 -33 -21 18 -24 59 -5 66 17 6 45 -10 57 -33z
M1727 5272 c-33 -36 -8 -92 40 -92 25 0 53 30 53 57 0 46 -62 69 -93 35z
M2157 5252 c-35 -38 -6 -112 43 -112 29 0 60 35 60 68 0 55 -68 83 -103 44z
m61 -45 c2 -12 -3 -17 -17 -17 -12 0 -21 6 -21 13 0 31 32 34 38 4z M2373
5233 c-26 -5 -63 -52 -63 -81 0 -27 35 -69 65 -76 49 -12 105 34 105 86 0 24
-32 68 -50 68 -4 0 -14 2 -22 4 -7 2 -23 1 -35 -1z m56 -57 c20 -24 -4 -58
-37 -54 -27 3 -39 25 -28 54 7 18 50 18 65 0z M1537 5202 c-23 -25 -21 -78 3
-102 30 -30 83 -27 109 6 27 35 26 59 -4 89 -30 31 -84 34 -108 7z m81 -50 c4
-28 -24 -40 -45 -19 -21 21 -9 49 19 45 15 -2 24 -11 26 -26z M1726 5154 c-19
-18 -20 -38 -6 -65 16 -29 75 -26 96 6 15 23 15 27 0 50 -19 29 -66 34 -90 9z
M2562 5134 c-17 -12 -22 -25 -22 -60 0 -39 4 -47 33 -64 43 -26 73 -25 102 5
33 33 32 70 -4 106 -33 33 -74 38 -109 13z m69 -34 c11 -6 19 -21 19 -36 0
-22 -4 -25 -26 -22 -31 3 -50 28 -41 52 7 19 20 20 48 6z M1360 5110 c-29 -29
-26 -74 6 -99 53 -42 114 -13 114 53 0 60 -77 89 -120 46z m75 -45 c0 -22 -31
-33 -47 -17 -17 17 -1 44 24 40 15 -2 23 -10 23 -23z M2058 5099 c-37 -21 -12
-125 41 -173 31 -28 94 -26 125 3 31 29 35 84 10 120 -32 45 -135 74 -176 50z
m114 -55 c31 -16 43 -46 29 -72 -24 -44 -71 -31 -101 28 -27 52 -21 73 17 64
16 -4 40 -13 55 -20z M1881 5056 c-47 -26 -63 -84 -35 -124 23 -34 96 -31 129
4 67 73 -8 168 -94 120z m63 -32 c36 -14 2 -74 -41 -74 -34 0 -40 27 -13 56
25 26 30 27 54 18z M1676 5028 c-22 -32 -20 -61 7 -86 47 -45 107 -17 107 49
0 45 -15 59 -61 59 -28 0 -42 -6 -53 -22z m72 -40 c-2 -13 -10 -23 -18 -23 -8
0 -16 10 -18 23 -3 17 2 22 18 22 16 0 21 -5 18 -22z M1496 5018 c-36 -51 -4
-112 59 -112 65 0 98 66 55 112 -29 31 -93 31 -114 0z m85 -34 c11 -14 10 -18
-6 -30 -10 -8 -22 -14 -26 -14 -14 0 -31 30 -25 45 7 20 40 19 57 -1z M2352
5023 c-7 -3 -18 -16 -23 -30 -23 -62 61 -102 97 -47 16 24 16 27 -3 52 -20 27
-46 36 -71 25z m38 -48 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10
15 6 0 10 -7 10 -15z M2745 4990 c-53 -20 -60 -88 -14 -123 45 -33 99 -1 99
57 0 48 -44 81 -85 66z m43 -66 c2 -12 -4 -24 -12 -27 -19 -7 -40 18 -32 39 8
22 40 13 44 -12z M1239 4951 c-31 -31 -39 -46 -39 -75 0 -51 14 -72 54 -86 65
-21 143 34 153 108 7 56 -27 92 -88 92 -35 0 -48 -6 -80 -39z m109 -13 c32
-32 -11 -108 -61 -108 -51 0 -61 42 -21 89 27 32 61 40 82 19z M2484 4944
c-62 -61 29 -149 99 -94 18 15 27 31 27 51 0 65 -78 92 -126 43z m76 -30 c11
-12 11 -18 -2 -30 -18 -18 -48 -8 -48 15 0 33 28 42 50 15z M1030 4886 c-37
-27 -46 -39 -48 -68 -4 -41 24 -68 68 -68 34 0 44 8 79 60 36 52 38 71 13 93
-27 25 -62 20 -112 -17z m85 -26 c-5 -8 -11 -8 -17 -2 -6 6 -7 16 -3 22 5 8
11 8 17 2 6 -6 7 -16 3 -22z m-56 -29 c17 -11 7 -41 -13 -41 -19 0 -29 17 -22
35 6 17 15 18 35 6z M2225 4898 c-27 -15 -35 -28 -35 -60 0 -57 82 -78 119
-31 24 30 20 58 -11 86 -23 20 -44 21 -73 5z m53 -51 c4 -21 -25 -34 -40 -19
-8 8 -8 16 2 27 16 19 34 15 38 -8z M1636 4879 c-20 -16 -26 -29 -26 -59 0
-72 84 -106 135 -55 40 39 32 96 -16 120 -38 20 -62 19 -93 -6z m83 -43 c25
-30 -24 -71 -54 -46 -16 13 -20 42 -8 53 11 12 50 8 62 -7z M2015 4876 c-19
-28 -9 -58 25 -76 24 -13 54 0 70 31 17 30 -11 69 -50 69 -20 0 -35 -8 -45
-24z M2630 4865 c-18 -21 -3 -55 25 -55 15 0 26 7 30 20 7 23 -10 50 -30 50
-7 0 -18 -7 -25 -15z M1430 4847 c-34 -17 -48 -69 -27 -100 37 -57 119 -35
125 35 5 54 -49 90 -98 65z m55 -62 c0 -13 -8 -21 -22 -23 -19 -3 -23 1 -23
23 0 22 4 26 23 23 14 -2 22 -10 22 -23z M2362 4807 c-40 -43 -22 -120 34
-143 61 -25 116 34 94 101 -21 64 -87 86 -128 42z m78 -36 c26 -50 -3 -90 -40
-56 -23 20 -26 45 -8 63 18 18 36 15 48 -7z M1849 4799 c-15 -15 -20 -30 -17
-55 2 -21 -1 -35 -9 -38 -21 -8 -26 -52 -9 -85 30 -57 121 -58 151 -1 8 15 14
41 14 56 0 16 3 43 6 61 15 67 -85 113 -136 62z m85 -35 c20 -19 20 -28 1 -44
-12 -10 -20 -9 -40 4 -27 18 -33 41 -12 49 22 10 35 7 51 -9z m-4 -109 c0 -36
-70 -44 -84 -10 -12 32 3 43 45 33 21 -6 39 -16 39 -23z M2062 4764 c-16 -11
-22 -25 -22 -53 0 -47 24 -71 72 -71 43 0 68 25 68 68 0 61 -66 93 -118 56z
m66 -33 c21 -13 10 -46 -16 -49 -27 -4 -40 22 -22 43 14 17 20 18 38 6z M2780
4753 c-58 -73 40 -164 105 -98 30 30 32 64 4 99 -29 37 -80 36 -109 -1z m83
-35 c8 -12 7 -21 -2 -32 -18 -22 -38 -20 -51 5 -22 40 29 66 53 27z M2605
4758 c-48 -26 -60 -87 -26 -129 28 -35 95 -33 127 4 13 16 24 35 24 43 0 31
-30 72 -61 83 -38 13 -39 13 -64 -1z m73 -67 c3 -15 -3 -30 -13 -37 -24 -18
-65 2 -65 31 0 30 9 36 45 33 23 -2 31 -8 33 -27z M894 4738 c-26 -12 -44 -49
-44 -89 0 -39 48 -89 85 -89 72 0 102 105 46 161 -31 30 -52 35 -87 17z m66
-59 c15 -26 5 -65 -17 -74 -20 -7 -53 26 -53 54 0 41 52 55 70 20z M1093 4720
c-109 -66 -36 -193 77 -135 57 29 69 99 24 134 -33 26 -60 26 -101 1z m82 -40
c21 -33 -49 -86 -80 -60 -19 16 -19 29 2 52 17 19 68 25 78 8z M1655 4705
c-29 -28 -31 -42 -9 -73 17 -25 71 -31 92 -10 21 21 15 75 -10 92 -31 22 -45
20 -73 -9z m55 -40 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8
0 15 -7 15 -15z M1261 4674 c-44 -55 -16 -134 47 -136 40 -1 79 33 88 77 14
74 -88 118 -135 59z m87 -42 c7 -49 -52 -74 -64 -27 -8 31 12 57 40 53 13 -2
22 -12 24 -26z M1465 4658 c-27 -15 -35 -28 -35 -60 0 -57 76 -91 113 -50 17
19 22 68 9 88 -8 12 -46 34 -59 34 -4 0 -17 -6 -28 -12z m55 -58 c0 -24 -26
-38 -42 -22 -16 16 -2 42 22 42 13 0 20 -7 20 -20z M1994 4615 c-4 -9 0 -23 8
-31 20 -20 50 -7 46 20 -4 26 -45 35 -54 11z M2240 4600 c-51 -51 -26 -122 45
-128 48 -4 85 27 85 73 0 64 -85 100 -130 55z m83 -42 c13 -20 -6 -48 -34 -48
-28 0 -43 35 -23 55 19 19 43 16 57 -7z M2113 4589 c-24 -9 -39 -48 -29 -74
10 -27 55 -38 82 -20 56 37 10 118 -53 94z m37 -55 c0 -16 -16 -19 -25 -4 -8
13 4 32 16 25 5 -4 9 -13 9 -21z M2450 4580 c-29 -29 -26 -74 6 -99 35 -28 69
-26 99 4 48 47 19 115 -50 115 -22 0 -43 -8 -55 -20z m85 -45 c0 -13 -8 -21
-24 -23 -28 -4 -45 17 -29 36 17 20 53 11 53 -13z M2825 4555 c-16 -15 -25
-36 -25 -55 0 -38 39 -80 75 -80 36 0 75 42 75 80 0 38 -39 80 -75 80 -14 0
-37 -11 -50 -25z m75 -30 c16 -19 3 -55 -20 -55 -29 0 -44 35 -24 54 19 20 28
20 44 1z M2673 4560 c-47 -19 -58 -92 -20 -134 32 -36 67 -42 100 -16 22 17
27 30 27 65 0 36 -5 48 -31 69 -33 28 -42 30 -76 16z m57 -54 c29 -36 -10 -85
-45 -56 -15 13 -20 51 -8 63 11 12 40 8 53 -7z M1915 4535 c-14 -13 -25 -36
-25 -50 0 -36 42 -75 80 -75 40 0 80 39 80 78 0 65 -87 96 -135 47z m89 -37
c15 -24 -13 -53 -43 -43 -21 6 -29 43 -14 59 12 12 45 2 57 -16z M1112 4534
c-31 -22 -27 -74 7 -91 46 -22 91 24 69 71 -6 14 -15 26 -19 26 -4 0 -13 2
-21 5 -7 3 -23 -2 -36 -11z m48 -44 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0
6 7 10 15 10 8 0 15 -4 15 -10z M772 4517 c-53 -57 8 -146 79 -116 52 21 63
68 28 113 -27 34 -77 36 -107 3z m77 -31 c25 -30 -16 -67 -44 -40 -18 19 -19
26 -3 42 16 16 33 15 47 -2z M1567 4520 c-32 -25 -42 -69 -27 -115 22 -67 91
-87 135 -39 29 31 33 80 10 124 -27 52 -74 64 -118 30z m83 -51 c14 -25 12
-52 -3 -73 -30 -40 -87 18 -67 68 14 39 51 42 70 5z M1753 4520 c-48 -19 -36
-90 16 -90 16 0 34 7 41 14 29 36 -13 93 -57 76z M1311 4484 c-12 -15 -21 -33
-21 -41 0 -28 31 -73 60 -88 38 -20 52 -19 84 6 38 30 35 72 -8 115 -43 43
-85 46 -115 8z m99 -54 c24 -45 -38 -58 -67 -14 -16 25 -16 27 1 40 22 16 50
5 66 -26z M965 4466 c-29 -12 -55 -51 -55 -80 0 -30 41 -66 74 -66 76 0 116
95 60 139 -31 24 -38 25 -79 7z m63 -57 c4 -21 -26 -51 -47 -47 -20 4 -26 35
-10 54 16 19 53 14 57 -7z M2322 4434 c-54 -38 -44 -105 21 -144 84 -52 177
12 142 98 -24 55 -114 81 -163 46z m102 -45 c31 -24 34 -54 6 -69 -35 -19
-100 14 -100 50 0 42 51 53 94 19z M591 4414 c-12 -15 -21 -38 -21 -51 0 -32
42 -73 75 -73 36 0 75 42 75 80 0 67 -88 97 -129 44z m78 -28 c15 -18 -2 -56
-24 -56 -22 0 -39 38 -24 56 6 8 17 14 24 14 7 0 18 -6 24 -14z M1155 4395
c-48 -47 -16 -125 52 -125 32 0 73 42 73 75 0 33 -42 75 -75 75 -14 0 -37 -11
-50 -25z m73 -27 c29 -29 -9 -69 -43 -44 -14 10 -15 16 -6 34 13 25 31 28 49
10z M1822 4403 c-22 -9 -33 -50 -20 -78 21 -46 91 -45 108 1 22 56 -30 101
-88 77z m53 -53 c0 -8 -8 -16 -17 -18 -13 -2 -18 3 -18 18 0 15 5 20 18 18 9
-2 17 -10 17 -18z M2125 4385 c-14 -13 -25 -30 -25 -38 0 -26 41 -67 66 -67
31 0 64 33 64 65 0 30 -32 65 -60 65 -12 0 -32 -11 -45 -25z m62 -31 c9 -23
-13 -40 -32 -24 -12 10 -13 16 -4 26 15 18 28 18 36 -2z M2546 4375 c-9 -9
-16 -29 -16 -44 0 -62 80 -82 110 -28 13 24 13 30 0 55 -19 33 -69 42 -94 17z
m59 -45 c0 -22 -29 -18 -33 3 -3 14 1 18 15 15 10 -2 18 -10 18 -18z M759
4351 c-20 -16 -22 -23 -14 -47 6 -18 21 -33 39 -39 24 -8 31 -6 47 14 24 30
24 46 -1 71 -25 25 -41 25 -71 1z M2800 4357 c-14 -7 -31 -25 -38 -41 -43 -88
85 -180 153 -111 44 43 22 125 -40 151 -41 17 -43 17 -75 1z m72 -54 c25 -23
24 -70 -2 -78 -32 -10 -70 20 -70 54 0 15 3 31 7 34 12 12 46 7 65 -10z M436
4299 c-17 -13 -26 -30 -26 -49 0 -31 39 -70 70 -70 57 0 86 85 41 122 -30 23
-52 23 -85 -3z m64 -48 c0 -27 -19 -36 -37 -18 -18 18 -9 37 18 37 12 0 19 -7
19 -19z M1959 4307 c-27 -21 -41 -57 -35 -92 9 -45 39 -70 88 -70 49 0 78 31
78 82 0 66 -83 117 -131 80z m71 -47 c11 -11 20 -26 20 -34 0 -16 -26 -46 -40
-46 -32 0 -52 64 -28 88 17 17 25 15 48 -8z M1490 4280 c-11 -11 -20 -29 -20
-40 0 -49 79 -79 114 -44 23 22 21 81 -3 94 -31 16 -69 12 -91 -10z m68 -42
c-2 -13 -10 -23 -18 -23 -8 0 -16 10 -18 23 -3 17 2 22 18 22 16 0 21 -5 18
-22z M884 4276 c-62 -27 -64 -110 -5 -141 27 -14 35 -14 65 -1 43 18 60 48 51
93 -5 27 -13 38 -40 49 -40 16 -32 16 -71 0z m65 -50 c9 -11 10 -20 1 -36 -14
-26 -63 -24 -68 3 -8 39 42 63 67 33z M1270 4258 c-59 -64 33 -152 103 -98 33
26 37 78 9 103 -27 25 -87 22 -112 -5z m86 -33 c6 -15 -11 -45 -25 -45 -19 0
-42 27 -35 43 8 21 52 23 60 2z M2212 4247 c-58 -62 11 -152 86 -113 47 24 57
76 22 114 -28 30 -80 29 -108 -1z m82 -32 c9 -25 -5 -45 -30 -45 -29 0 -41 24
-24 45 16 19 46 19 54 0z M605 4215 c-47 -46 -21 -105 45 -105 29 0 43 6 54
22 21 30 20 50 -5 82 -26 33 -62 34 -94 1z m63 -43 c3 -17 -2 -22 -17 -22 -14
0 -21 6 -21 18 0 38 33 41 38 4z M1689 4211 c-56 -56 -29 -141 45 -141 19 0
42 3 51 6 19 8 45 55 45 84 0 31 -53 80 -85 80 -16 0 -38 -12 -56 -29z m89
-58 c3 -28 -1 -33 -23 -39 -29 -7 -55 10 -55 35 0 25 22 42 50 39 20 -2 26 -9
28 -35z M1045 4205 c-41 -40 -33 -105 17 -131 87 -45 159 57 89 127 -36 36
-73 37 -106 4z m80 -39 c28 -42 -10 -82 -46 -50 -22 20 -24 45 -7 62 18 18 36
14 53 -12z M2441 4216 c-28 -16 -50 -52 -51 -84 0 -29 42 -72 70 -72 35 0 76
27 89 58 31 75 -37 137 -108 98z m59 -41 c15 -18 6 -61 -15 -69 -40 -15 -62
35 -29 68 19 20 28 20 44 1z M2642 4214 c-26 -18 -30 -65 -6 -88 37 -37 104
-7 104 47 0 27 -32 57 -60 57 -9 0 -26 -7 -38 -16z m54 -35 c10 -17 -13 -36
-27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z M1440 4134 c-46 -19 -70 -51
-70 -92 0 -102 159 -113 206 -14 37 78 -48 144 -136 106z m84 -40 c41 -16 -6
-94 -56 -94 -29 0 -58 19 -58 37 0 43 65 76 114 57z M1873 4122 c-6 -4 -17
-20 -22 -35 -11 -29 -1 -63 23 -79 21 -14 73 -8 89 10 22 25 21 75 -1 95 -19
18 -68 22 -89 9z m65 -55 c4 -20 -25 -34 -40 -19 -15 15 -1 44 19 40 10 -2 19
-11 21 -21z M2059 4101 c-38 -39 -39 -82 -1 -111 57 -46 156 1 154 72 -2 70
-97 94 -153 39z m95 -17 c24 -9 19 -41 -9 -60 -29 -19 -54 -16 -69 9 -9 15 -7
22 13 38 24 20 39 23 65 13z M723 4100 c-58 -35 -69 -85 -28 -125 37 -37 106
-35 146 4 38 38 38 74 0 112 -35 34 -72 37 -118 9z m78 -30 c11 -6 19 -21 19
-36 0 -30 -37 -50 -74 -40 -33 8 -35 48 -4 70 26 19 33 19 59 6z M1215 4100
c-21 -24 -24 -72 -5 -94 15 -19 83 -21 98 -3 23 27 24 62 2 90 -26 33 -69 36
-95 7z m60 -50 c0 -27 -22 -39 -31 -16 -8 22 3 49 19 43 6 -2 12 -14 12 -27z
M2791 4097 c-43 -21 -66 -64 -66 -118 0 -42 4 -53 25 -69 56 -43 135 -9 158
67 14 50 6 89 -26 113 -28 23 -57 25 -91 7z m67 -39 c34 -34 -8 -128 -59 -128
-5 0 -16 11 -25 25 -14 21 -14 30 -4 55 13 31 45 60 65 60 6 0 16 -5 23 -12z
M2280 4053 c-40 -51 -3 -126 61 -126 64 0 92 81 44 128 -33 34 -77 33 -105 -2z
m82 -38 c14 -31 0 -50 -30 -41 -25 8 -36 34 -21 52 18 21 38 17 51 -11z M2546
4044 c-36 -35 -9 -94 43 -94 34 0 54 21 54 55 0 14 -6 32 -13 40 -16 20 -64
19 -84 -1z m58 -39 c-1 -18 -34 -18 -34 0 0 10 7 15 18 13 9 -2 17 -8 16 -13z
M907 4022 c-21 -23 -22 -66 -2 -82 22 -18 66 -15 82 6 42 57 -33 128 -80 76z
m51 -40 c2 -7 -3 -12 -12 -12 -9 0 -16 7 -16 16 0 17 22 14 28 -4z M1636 4019
c-34 -27 -35 -71 -1 -104 34 -35 86 -34 114 1 24 30 26 43 10 77 -21 47 -80
60 -123 26z m78 -35 c21 -21 3 -57 -26 -52 -30 4 -45 32 -29 52 17 20 35 20
55 0z M1031 3984 c-27 -35 -26 -59 4 -89 34 -35 86 -34 114 1 12 15 21 34 21
44 0 10 -9 29 -21 44 -16 20 -29 26 -59 26 -30 0 -43 -6 -59 -26z m89 -29 c10
-12 10 -18 0 -30 -27 -32 -71 -8 -56 30 3 8 14 15 24 15 11 0 25 -7 32 -15z
M553 3940 c-27 -16 -33 -26 -33 -52 1 -63 58 -98 118 -72 55 23 56 101 2 129
-38 20 -48 19 -87 -5z m71 -36 c18 -18 19 -24 7 -42 -11 -18 -51 -11 -65 11
-9 15 -7 21 8 33 25 18 31 18 50 -2z M1834 3927 c-20 -17 -27 -33 -27 -57 0
-24 7 -40 27 -57 32 -27 56 -29 96 -8 54 28 65 80 25 120 -32 33 -84 33 -121
2z m80 -23 c23 -9 20 -51 -4 -64 -40 -22 -80 26 -48 58 13 13 28 15 52 6z
M1241 3914 c-28 -35 -26 -69 4 -99 68 -69 175 23 119 103 -23 34 -95 31 -123
-4z m93 -31 c9 -22 -27 -58 -48 -50 -23 9 -31 34 -16 52 17 20 56 19 64 -2z
M2087 3922 c-40 -45 -6 -122 53 -122 63 0 98 90 48 124 -30 22 -81 20 -101 -2z
m80 -42 c5 -26 -13 -43 -36 -35 -20 6 -28 34 -14 49 12 12 48 2 50 -14z M2411
3904 c-25 -32 -26 -43 -7 -89 14 -34 59 -65 93 -65 67 0 88 96 34 151 -39 39
-91 40 -120 3z m89 -34 c22 -22 27 -65 8 -73 -23 -8 -57 12 -64 38 -13 53 18
73 56 35z M1436 3894 c-22 -21 -20 -67 2 -87 22 -21 62 -22 87 -3 21 15 25 67
5 90 -16 21 -74 20 -94 0z m67 -30 c9 -10 -4 -34 -18 -34 -17 0 -28 17 -20 30
7 11 28 13 38 4z M2612 3888 c-28 -28 -3 -88 37 -88 23 0 51 31 51 56 0 27
-19 44 -50 44 -14 0 -31 -5 -38 -12z M763 3866 c-22 -19 -28 -32 -28 -66 0
-46 24 -74 73 -87 35 -9 93 24 105 60 29 90 -77 156 -150 93z m101 -35 c21
-23 14 -56 -15 -72 -46 -24 -93 24 -64 67 19 29 55 31 79 5z M1613 3828 c-57
-60 10 -164 92 -144 85 22 58 147 -36 162 -27 5 -38 1 -56 -18z m82 -43 c29
-28 31 -38 11 -54 -33 -27 -93 32 -66 64 17 21 27 19 55 -10z M2247 3832 c-25
-27 -22 -78 5 -96 46 -33 108 -4 108 49 0 55 -77 87 -113 47z m67 -31 c9 -14
-4 -41 -19 -41 -18 0 -28 17 -21 35 6 17 32 20 40 6z M1010 3820 c-27 -27 -25
-62 4 -89 30 -28 68 -23 92 14 40 61 -44 127 -96 75z m63 -34 c8 -20 -20 -43
-35 -28 -14 14 -3 42 16 42 7 0 16 -6 19 -14z M2765 3815 c-33 -33 -32 -70 4
-106 35 -34 68 -37 105 -8 20 16 26 29 26 59 0 72 -84 106 -135 55z m83 -27
c34 -34 -7 -79 -46 -52 -12 8 -22 21 -22 28 0 17 21 36 40 36 9 0 21 -5 28
-12z M436 3784 c-37 -37 -3 -98 50 -92 18 2 34 13 43 29 13 24 13 29 -2 53
-20 30 -66 35 -91 10z m54 -48 c-7 -7 -14 -6 -22 2 -10 10 -10 15 2 22 17 11
34 -10 20 -24z M1932 3750 c-58 -36 -69 -105 -23 -151 23 -23 38 -29 71 -29
75 0 120 37 120 100 0 42 -15 67 -50 85 -40 20 -79 19 -118 -5z m108 -40 c26
-26 25 -54 -2 -80 -30 -28 -82 -27 -102 2 -22 31 -20 45 9 73 29 30 68 32 95
5z M1166 3737 c-43 -43 -28 -100 34 -132 96 -50 185 42 117 121 -18 20 -35 28
-74 31 -45 5 -55 2 -77 -20z m114 -37 c24 -24 25 -43 5 -60 -27 -22 -105 12
-105 46 0 34 70 44 100 14z M1427 3733 c-8 -10 -18 -30 -22 -45 -9 -35 31 -78
73 -78 62 0 95 77 52 120 -25 25 -81 26 -103 3z m71 -32 c23 -14 10 -46 -18
-46 -16 0 -26 6 -28 19 -3 16 12 36 28 36 3 0 11 -4 18 -9z M613 3728 c-12 -6
-27 -24 -34 -40 -10 -25 -9 -33 8 -56 28 -38 68 -48 109 -28 30 14 34 20 34
56 0 30 -5 43 -22 54 -33 21 -70 27 -95 14z m75 -64 c2 -15 -3 -23 -17 -27
-27 -7 -56 15 -48 37 10 26 61 17 65 -10z M2574 3711 c-62 -38 -71 -135 -17
-178 54 -44 132 -22 168 47 24 46 19 78 -19 116 -40 40 -83 45 -132 15z m94
-37 c29 -20 30 -74 2 -99 -27 -24 -79 -24 -96 0 -21 28 -17 56 13 87 30 32 49
35 81 12z M2353 3710 c-24 -10 -43 -39 -43 -65 0 -30 55 -75 93 -75 79 0 93
99 20 138 -25 14 -40 14 -70 2z m61 -43 c22 -16 18 -50 -7 -55 -36 -7 -67 48
-34 61 19 8 22 8 41 -6z M348 3679 c-25 -14 -22 -55 3 -73 30 -20 63 -6 67 28
6 47 -29 69 -70 45z M915 3665 c-33 -33 -33 -78 1 -112 22 -22 32 -25 67 -20
48 7 87 44 87 83 0 67 -105 100 -155 49z m103 -47 c4 -35 -33 -57 -67 -39 -43
23 -18 74 34 69 24 -2 31 -8 33 -30z M2179 3631 c-16 -13 -23 -29 -23 -55 0
-49 31 -80 79 -79 43 1 62 15 70 53 16 74 -67 129 -126 81z m76 -37 c18 -18
16 -33 -7 -47 -23 -15 -48 -1 -48 26 0 40 26 50 55 21z M1772 3614 c-24 -17
-30 -62 -10 -82 7 -7 24 -12 38 -12 33 0 50 17 50 51 0 24 -30 59 -50 59 -3 0
-16 -7 -28 -16z M439 3591 c-47 -48 -38 -116 21 -146 26 -14 34 -14 65 -1 65
28 72 120 12 156 -44 27 -63 25 -98 -9z m91 -47 c19 -50 -27 -85 -64 -48 -31
31 -13 74 31 74 16 0 27 -8 33 -26z M1594 3612 c-15 -10 -34 -47 -34 -67 0
-23 45 -65 70 -65 12 0 32 11 46 26 28 27 27 63 -3 97 -16 17 -59 23 -79 9z
m60 -49 c4 -9 0 -23 -9 -32 -13 -14 -17 -14 -32 1 -13 14 -14 20 -3 32 16 21
36 20 44 -1z M2782 3603 c-32 -25 -39 -82 -15 -112 26 -32 90 -32 115 -1 55
67 -34 167 -100 113z m62 -39 c18 -18 18 -17 10 -38 -8 -21 -50 -21 -58 0 -7
17 9 54 24 54 5 0 16 -7 24 -16z M764 3600 c-81 -32 -64 -144 21 -144 27 0 43
6 56 23 49 60 -9 148 -77 121z m56 -70 c0 -11 -9 -24 -19 -30 -38 -20 -63 38
-27 62 16 10 46 -11 46 -32z M1344 3547 c-71 -62 3 -192 99 -173 50 10 77 43
77 92 0 62 -31 95 -96 101 -43 5 -54 2 -80 -20z m111 -42 c28 -27 30 -37 15
-66 -13 -24 -66 -26 -92 -2 -35 31 -13 93 33 93 11 0 31 -11 44 -25z M1143
3523 c-32 -6 -72 -50 -79 -88 -18 -99 105 -152 171 -73 64 76 6 179 -92 161z
m61 -59 c20 -20 20 -44 0 -72 -12 -18 -24 -22 -52 -20 -34 3 -37 6 -40 36 -6
59 53 95 92 56z M1980 3490 c-11 -11 -20 -26 -20 -33 0 -24 31 -57 55 -57 50
0 73 60 37 93 -25 22 -48 21 -72 -3z m50 -35 c0 -8 -4 -15 -9 -15 -13 0 -22
16 -14 24 11 11 23 6 23 -9z M2433 3498 c-12 -6 -27 -24 -34 -40 -10 -25 -9
-33 8 -56 26 -34 65 -40 92 -13 30 30 27 75 -5 100 -30 24 -31 24 -61 9z m44
-53 c5 -16 -14 -38 -26 -31 -18 12 -13 48 6 44 9 -2 18 -7 20 -13z M602 3463
c-32 -27 -37 -64 -12 -96 26 -33 71 -36 100 -7 56 56 -28 154 -88 103z m63
-58 c0 -25 -40 -33 -49 -10 -9 24 2 37 27 33 14 -2 22 -10 22 -23z M940 3450
c-11 -11 -20 -29 -20 -40 0 -22 33 -60 53 -60 27 0 57 31 57 60 0 18 -8 34
-22 44 -30 21 -44 20 -68 -4z m50 -35 c0 -8 -7 -15 -15 -15 -16 0 -20 12 -8
23 11 12 23 8 23 -8z M1803 3460 c-55 -22 -73 -104 -35 -158 40 -55 129 -56
157 -2 31 60 11 126 -46 156 -32 16 -44 17 -76 4z m87 -72 c13 -25 13 -31 0
-55 -20 -35 -53 -40 -79 -14 -23 23 -28 70 -9 89 22 22 71 10 88 -20z M288
3445 c-34 -19 -46 -67 -24 -100 22 -33 60 -42 91 -21 20 13 25 25 25 60 0 61
-41 88 -92 61z m52 -60 c0 -18 -5 -25 -20 -25 -15 0 -20 7 -20 25 0 18 5 25
20 25 15 0 20 -7 20 -25z M2125 3435 c-42 -41 -30 -102 25 -130 82 -42 162 18
129 97 -24 58 -111 77 -154 33z m99 -28 c22 -16 18 -55 -7 -71 -21 -14 -70 10
-75 37 -8 40 44 62 82 34z M1598 3429 c-29 -16 -24 -75 8 -96 24 -15 29 -15
53 -2 31 18 38 51 17 85 -17 25 -48 31 -78 13z m47 -59 c-5 -8 -11 -8 -17 -2
-6 6 -7 16 -3 22 5 8 11 8 17 2 6 -6 7 -16 3 -22z M2758 3414 c-27 -14 -34
-33 -29 -78 4 -51 80 -76 114 -38 17 19 23 78 9 98 -8 12 -46 34 -59 34 -4 -1
-20 -8 -35 -16z m60 -68 c-2 -13 -10 -21 -23 -21 -23 0 -32 30 -14 51 16 19
41 -1 37 -30z M2579 3391 c-16 -16 -29 -36 -29 -45 0 -32 24 -65 54 -76 79
-27 127 104 50 139 -36 16 -42 14 -75 -18z m69 -48 c-3 -31 -34 -44 -44 -19
-9 24 3 46 26 46 17 0 21 -5 18 -27z M760 3360 c-52 -52 6 -141 81 -125 34 8
49 31 49 74 0 42 -31 71 -75 71 -22 0 -43 -8 -55 -20z m85 -50 c0 -34 -50 -42
-60 -11 -9 29 3 43 33 39 21 -2 27 -8 27 -28z M423 3340 c-52 -21 -69 -115
-28 -155 62 -62 158 6 141 100 -11 54 -57 77 -113 55z m61 -46 c20 -19 20 -34
0 -62 -17 -24 -43 -29 -62 -10 -17 17 -15 32 9 62 24 30 32 32 53 10z M1503
3318 c-44 -22 -50 -105 -10 -133 52 -36 117 -3 117 59 0 60 -57 99 -107 74z
m57 -53 c18 -22 3 -57 -23 -53 -22 3 -33 28 -23 54 7 18 30 18 46 -1z M2307
3310 c-53 -42 -24 -130 43 -130 60 0 92 72 53 118 -27 32 -64 37 -96 12z m68
-60 c0 -18 -6 -26 -23 -28 -24 -4 -38 18 -28 44 3 9 15 14 28 12 17 -2 23 -10
23 -28z M1975 3285 c-25 -24 -34 -77 -17 -101 26 -40 109 -41 137 -1 56 81
-51 172 -120 102z m85 -30 c15 -19 4 -52 -21 -60 -38 -12 -65 35 -37 63 16 16
43 15 58 -3z M617 3279 c-45 -26 -39 -106 9 -128 52 -23 94 7 94 68 0 56 -55
88 -103 60z m57 -51 c14 -23 -11 -53 -30 -37 -23 19 -15 64 10 56 5 -2 14 -10
20 -19z M1010 3273 c-33 -22 -40 -33 -40 -64 0 -60 71 -103 129 -79 55 23 66
87 22 131 -34 33 -74 38 -111 12z m91 -49 c20 -24 -1 -49 -41 -49 -40 0 -61
25 -41 49 8 9 26 16 41 16 15 0 33 -7 41 -16z M1256 3267 c-31 -32 -33 -70 -6
-115 43 -70 130 -93 175 -47 28 27 31 51 11 99 -17 42 -66 77 -116 83 -32 5
-43 1 -64 -20z m119 -52 c30 -29 34 -82 8 -92 -39 -15 -124 63 -110 100 10 27
73 22 102 -8z M2451 3244 c-12 -15 -21 -34 -21 -44 0 -33 39 -70 74 -70 60 0
93 66 56 113 -29 37 -80 37 -109 1z m79 -29 c10 -12 10 -18 0 -30 -25 -30 -61
-7 -46 30 3 8 12 15 19 15 8 0 20 -7 27 -15z M1698 3226 c-10 -7 -21 -24 -27
-37 -28 -76 106 -180 174 -135 21 14 25 24 25 62 0 40 -5 51 -39 85 -32 32
-46 39 -77 39 -22 0 -47 -6 -56 -14z m101 -50 c12 -13 23 -36 24 -52 2 -23 -2
-30 -20 -32 -28 -4 -79 31 -88 59 -15 47 46 66 84 25z M2171 3226 c-19 -22 -4
-56 23 -56 32 0 53 26 39 48 -14 23 -47 27 -62 8z M2707 3210 c-68 -54 -20
-168 63 -151 59 11 81 101 35 146 -29 30 -64 32 -98 5z m77 -53 c8 -21 6 -31
-6 -43 -24 -24 -58 -9 -58 25 0 54 47 68 64 18z M785 3185 c-29 -28 -31 -42
-9 -73 30 -44 104 -16 104 39 0 17 -44 59 -62 59 -5 0 -20 -11 -33 -25z m50
-34 c7 -12 -12 -24 -25 -16 -11 7 -4 25 10 25 5 0 11 -4 15 -9z M261 3176
c-53 -29 -67 -101 -26 -141 54 -54 135 -12 135 71 0 34 -5 47 -26 63 -31 24
-49 26 -83 7z m69 -64 c0 -20 -27 -62 -40 -62 -5 0 -16 7 -25 16 -18 18 -12
52 12 71 20 15 53 0 53 -25z M2570 3117 c-31 -15 -49 -61 -34 -85 6 -9 23 -24
37 -32 24 -13 30 -13 55 0 45 25 43 97 -3 118 -31 14 -25 14 -55 -1z m50 -56
c0 -27 -19 -36 -37 -18 -18 18 -9 37 18 37 12 0 19 -7 19 -19z M2342 3087
c-28 -30 -29 -85 -2 -137 35 -69 99 -91 140 -50 39 39 19 174 -28 199 -35 19
-86 13 -110 -12z m93 -37 c25 -28 32 -102 11 -119 -37 -31 -108 85 -76 124 17
21 44 19 65 -5z M444 3075 c-31 -48 4 -95 63 -83 28 5 40 51 19 82 -22 34 -60
34 -82 1z m56 -36 c0 -5 -7 -9 -15 -9 -15 0 -20 12 -9 23 8 8 24 -1 24 -14z
M625 3085 c-43 -23 -65 -55 -65 -97 0 -106 178 -120 220 -18 12 28 11 37 -1
58 -32 56 -104 83 -154 57z m93 -51 c42 -29 18 -77 -45 -90 -37 -7 -77 24 -66
53 18 52 67 68 111 37z M1149 3087 c-85 -65 -17 -247 94 -247 111 0 128 112
33 214 -35 38 -49 46 -77 46 -19 0 -41 -6 -50 -13z m116 -87 c30 -43 31 -96 4
-113 -27 -17 -77 10 -100 54 -25 50 -24 84 2 103 29 20 60 5 94 -44z M1525
3065 c-48 -47 -22 -135 39 -135 14 0 37 11 53 24 35 30 40 99 8 122 -29 22
-73 17 -100 -11z m74 -29 c14 -16 5 -43 -18 -55 -35 -18 -52 9 -31 50 12 22
33 25 49 5z M1978 3064 c-34 -18 -48 -43 -48 -86 1 -59 48 -98 120 -98 90 0
124 98 56 166 -38 38 -81 44 -128 18z m97 -49 c29 -28 31 -42 9 -73 -18 -26
-60 -29 -86 -5 -25 23 -23 68 4 87 31 22 45 20 73 -9z M932 3064 c-21 -9 -42
-60 -42 -102 0 -105 136 -94 156 13 9 50 -19 89 -67 92 -19 1 -40 -1 -47 -3z
m66 -51 c21 -36 -26 -98 -58 -78 -16 10 -12 56 7 77 20 22 39 23 51 1z M2196
3044 c-19 -18 -21 -65 -4 -82 29 -29 98 -4 98 36 0 50 -61 80 -94 46z m52 -42
c2 -7 -3 -12 -12 -12 -9 0 -16 7 -16 16 0 17 22 14 28 -4z M1742 2987 c-43
-46 -13 -107 52 -107 62 0 86 61 41 105 -30 31 -65 32 -93 2z m66 -41 c2 -10
-1 -23 -7 -29 -15 -15 -46 16 -37 38 8 21 40 15 44 -9z M2661 2987 c-22 -8
-40 -24 -52 -47 -21 -39 -17 -66 13 -92 61 -53 178 28 148 102 -7 17 -24 33
-42 39 -17 6 -31 11 -32 10 -1 0 -16 -5 -35 -12z m67 -64 c4 -29 -51 -61 -74
-42 -18 15 -18 28 3 51 23 26 67 20 71 -9z M356 2959 c-38 -30 -36 -79 5 -113
37 -31 58 -33 93 -5 43 34 33 99 -21 127 -31 17 -47 15 -77 -9z m79 -49 c8
-25 -1 -40 -24 -40 -24 0 -45 25 -37 45 8 23 53 19 61 -5z M1421 2919 c-64
-24 -36 -129 34 -129 37 0 65 26 65 61 0 52 -49 86 -99 68z m57 -62 c2 -9 -4
-20 -12 -23 -21 -8 -46 13 -39 32 8 20 47 13 51 -9z M1880 2870 c-24 -24 -25
-38 -4 -68 20 -29 79 -31 94 -3 16 31 12 59 -12 75 -30 21 -54 20 -78 -4z m56
-31 c3 -6 1 -16 -5 -22 -9 -9 -14 -8 -21 3 -9 15 -4 30 10 30 5 0 12 -5 16
-11z M2137 2872 c-23 -25 -21 -58 3 -82 39 -39 100 -14 100 42 0 51 -69 78
-103 40z m59 -33 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16
-11z M1567 2852 c-54 -59 20 -177 98 -158 59 15 68 87 18 146 -30 36 -89 42
-116 12z m89 -46 c20 -32 15 -71 -10 -71 -27 0 -60 47 -51 74 9 28 41 27 61
-3z M739 2845 c-48 -26 -45 -96 5 -150 68 -72 166 -53 166 32 0 46 -33 91 -84
114 -49 22 -53 22 -87 4z m99 -66 c35 -34 40 -60 17 -79 -39 -33 -135 67 -98
103 15 16 51 5 81 -24z M948 2849 c-21 -12 -25 -71 -5 -87 28 -22 56 -23 76
-3 26 26 27 55 1 81 -22 22 -46 25 -72 9z m50 -47 c2 -7 -3 -12 -12 -12 -9 0
-16 7 -16 16 0 17 22 14 28 -4z M1765 2826 c-23 -16 -15 -57 12 -67 31 -11 58
11 50 43 -8 30 -39 41 -62 24z M2271 2806 c-53 -56 -26 -146 44 -146 41 0 85
47 85 89 0 71 -82 107 -129 57z m63 -22 c20 -8 21 -57 1 -74 -8 -7 -22 -10
-30 -6 -18 7 -20 57 -3 74 14 14 12 14 32 6z M2712 2800 c-47 -44 -17 -140 44
-140 60 0 93 47 73 107 -18 55 -76 71 -117 33z m78 -40 c8 -14 8 -26 0 -40
-21 -40 -67 -11 -56 35 8 31 41 34 56 5z M423 2800 c-30 -12 -33 -74 -4 -90
50 -26 101 12 82 62 -13 36 -38 44 -78 28z m45 -48 c2 -7 -3 -12 -12 -12 -9 0
-16 7 -16 16 0 17 22 14 28 -4z M1265 2790 c-26 -29 -22 -70 9 -97 33 -28 46
-29 80 -2 50 39 22 119 -42 119 -16 0 -37 -9 -47 -20z m70 -45 c0 -13 -8 -21
-22 -23 -17 -3 -23 2 -23 16 0 10 3 22 7 26 13 13 38 1 38 -19z M2496 2785
c-32 -29 -34 -67 -6 -113 35 -58 101 -65 140 -15 24 31 25 64 5 103 -29 55
-94 67 -139 25z m96 -46 c16 -22 18 -30 9 -48 -24 -43 -83 -18 -83 35 0 49 42
56 74 13z M1077 2780 c-20 -16 -27 -30 -27 -56 0 -47 14 -70 50 -83 37 -12 72
-1 94 31 53 75 -44 165 -117 108z m86 -52 c12 -35 -34 -63 -61 -36 -16 16 -15
33 4 52 17 17 48 8 57 -16z M570 2770 c-25 -25 -25 -51 -2 -80 21 -26 66 -30
89 -7 23 23 19 68 -7 89 -29 23 -55 23 -80 -2z m57 -35 c7 -20 -2 -29 -21 -22
-9 4 -13 13 -10 22 8 19 23 19 31 0z M2028 2759 c-12 -7 -18 -22 -18 -49 0
-34 4 -42 30 -55 24 -13 35 -13 53 -4 29 16 37 28 37 61 0 45 -59 73 -102 47z
m59 -45 c6 -16 -15 -37 -29 -28 -4 3 -8 14 -8 25 0 23 28 26 37 3z M1854 2734
c-86 -42 -62 -154 33 -154 40 0 93 45 93 79 0 33 -20 68 -47 80 -31 14 -42 14
-79 -5z m74 -66 c3 -22 -2 -30 -22 -39 -47 -22 -83 15 -50 52 27 30 68 22 72
-13z M1427 2722 c-19 -21 -22 -45 -7 -73 8 -14 21 -19 51 -19 34 0 41 4 50 28
23 59 -52 111 -94 64z m58 -32 c3 -6 -1 -13 -10 -16 -19 -8 -30 0 -20 15 8 14
22 14 30 1z M273 2720 c-78 -33 -38 -160 50 -160 50 0 79 27 79 74 0 65 -70
111 -129 86z m65 -46 c25 -17 29 -46 7 -64 -20 -16 -54 -3 -68 27 -9 21 -8 27
8 39 24 17 26 17 53 -2z M457 2662 c-22 -24 -21 -65 1 -85 40 -36 102 -9 102
45 0 51 -69 78 -103 40z m58 -42 c0 -8 -8 -16 -17 -18 -13 -2 -18 3 -18 18 0
15 5 20 18 18 9 -2 17 -10 17 -18z M2140 2618 c-19 -13 -39 -35 -44 -49 -41
-117 147 -193 199 -82 46 97 -66 191 -155 131z m104 -41 c23 -16 24 -63 3 -84
-24 -24 -68 -19 -94 11 -23 28 -22 52 5 74 21 16 63 15 86 -1z M2693 2604
c-15 -24 -15 -29 -2 -53 17 -31 68 -41 89 -16 16 19 16 60 0 80 -20 25 -67 19
-87 -11z m62 -24 c3 -6 -1 -13 -10 -16 -19 -8 -30 0 -20 15 8 14 22 14 30 1z
M1610 2600 c-22 -22 -26 -70 -10 -101 14 -25 82 -59 119 -59 34 0 71 39 71 75
0 74 -130 135 -180 85z m104 -41 c27 -21 35 -64 14 -71 -7 -3 -28 -1 -46 4
-40 11 -62 49 -42 73 17 21 42 19 74 -6z M606 2579 c-39 -46 -37 -108 5 -143
39 -33 84 -34 123 -3 23 19 30 33 33 74 5 45 2 55 -20 77 -20 20 -36 26 -71
26 -37 0 -48 -5 -70 -31z m108 -25 c23 -23 19 -57 -10 -85 -23 -22 -27 -23
-52 -8 -35 19 -41 60 -13 88 25 25 54 27 75 5z M832 2598 c-18 -18 -14 -73 6
-91 52 -47 126 20 88 78 -18 28 -72 35 -94 13z m61 -34 c9 -9 -4 -34 -18 -34
-14 0 -27 25 -18 34 4 3 12 6 18 6 6 0 14 -3 18 -6z M980 2580 c-24 -24 -26
-77 -4 -108 11 -16 25 -22 53 -22 47 0 71 24 71 73 0 67 -75 102 -120 57z m68
-29 c8 -4 12 -19 10 -32 -4 -34 -52 -34 -56 0 -3 20 11 41 28 41 3 0 11 -4 18
-9z M1405 2565 c-63 -62 13 -162 100 -129 23 9 47 61 39 87 -20 67 -93 89
-139 42z m89 -31 c9 -8 16 -19 16 -24 0 -13 -30 -40 -44 -40 -7 0 -21 9 -30
19 -36 40 21 83 58 45z M2391 2566 c-30 -32 -26 -82 11 -109 69 -52 159 52 98
113 -28 28 -81 26 -109 -4z m83 -31 c9 -25 -5 -45 -30 -45 -14 0 -27 7 -30 15
-10 25 4 45 30 45 13 0 26 -7 30 -15z M1170 2543 c-36 -32 -50 -83 -38 -131
19 -71 127 -77 169 -8 32 52 20 127 -25 158 -25 17 -76 8 -106 -19z m90 -33
c11 -11 20 -31 20 -45 0 -51 -70 -86 -100 -50 -18 21 -4 81 23 100 28 19 33
19 57 -5z M407 2515 c-58 -58 10 -156 77 -112 36 24 44 62 19 95 -24 32 -73
41 -96 17z m63 -41 c11 -12 10 -18 -3 -32 -16 -15 -18 -15 -34 0 -13 14 -14
20 -3 32 7 9 16 16 20 16 4 0 13 -7 20 -16z M2570 2510 c-30 -30 -27 -83 6
-109 35 -28 69 -26 99 4 30 30 32 64 4 99 -26 33 -79 36 -109 6z m81 -41 c15
-29 -12 -59 -39 -43 -22 14 -28 44 -10 55 22 14 37 10 49 -12z M250 2480 c-45
-45 -11 -120 54 -120 63 0 87 69 41 115 -29 30 -68 32 -95 5z m70 -35 c17 -20
5 -45 -20 -45 -23 0 -35 22 -26 45 7 19 30 19 46 0z M1958 2466 c-26 -13 -34
-46 -18 -75 8 -15 21 -21 45 -21 44 0 62 28 45 70 -14 33 -39 42 -72 26z m42
-47 c0 -5 -7 -9 -15 -9 -15 0 -20 12 -9 23 8 8 24 -1 24 -14z M789 2416 c-30
-14 -38 -66 -14 -90 36 -36 95 -9 95 43 0 44 -41 67 -81 47z m41 -51 c0 -8 -7
-15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z M1572 2414
c-28 -20 -31 -83 -4 -107 28 -25 87 -22 106 5 49 69 -33 151 -102 102z m73
-54 c0 -16 -6 -26 -19 -28 -25 -5 -39 12 -31 38 10 31 50 24 50 -10z M961
2396 c-26 -14 -50 -51 -51 -77 0 -9 9 -28 21 -43 16 -21 29 -26 64 -26 36 0
48 5 69 31 34 40 33 64 -3 100 -32 31 -62 36 -100 15z m79 -52 c11 -13 10 -19
-7 -36 -29 -28 -73 -18 -73 16 0 36 56 50 80 20z M1803 2400 c-45 -18 -58 -95
-23 -130 29 -29 94 -27 114 2 31 43 19 101 -25 123 -32 17 -35 17 -66 5z m57
-55 c30 -36 -20 -74 -54 -40 -12 12 -13 21 -6 36 13 23 43 25 60 4z M2395
2385 c-59 -58 1 -175 89 -175 40 0 76 41 76 86 0 29 -8 44 -39 75 -47 47 -89
52 -126 14z m108 -56 c26 -36 16 -69 -23 -69 -30 0 -70 33 -70 56 0 51 58 59
93 13z M2124 2390 c-30 -12 -54 -49 -54 -83 0 -87 98 -140 155 -83 51 51 41
136 -20 161 -39 17 -51 17 -81 5z m80 -63 c13 -20 -2 -66 -27 -81 -15 -9 -23
-6 -43 17 -29 34 -30 51 -4 77 22 22 56 16 74 -13z M489 2343 c-53 -56 -62
-100 -29 -133 47 -47 140 -12 161 61 11 35 10 43 -8 67 -30 40 -89 43 -124 5z
m75 -19 c39 -15 -4 -98 -47 -92 -34 5 -35 50 -1 77 30 24 27 23 48 15z M2699
2337 c-46 -31 -64 -85 -45 -132 16 -39 47 -51 99 -41 87 16 120 143 47 181
-40 21 -61 19 -101 -8z m97 -52 c12 -50 -55 -105 -91 -75 -38 31 0 100 55 100
23 0 31 -5 36 -25z M1315 2318 c-32 -17 -45 -39 -45 -76 0 -46 16 -71 55 -88
58 -24 115 15 115 79 0 39 -15 64 -50 82 -34 18 -48 18 -75 3z m77 -64 c22
-47 -24 -83 -63 -48 -34 31 -18 74 28 74 15 0 27 -9 35 -26z M290 2300 c-26
-26 -26 -81 -2 -103 28 -25 87 -22 106 5 50 71 -43 159 -104 98z m70 -35 c17
-20 5 -45 -20 -45 -23 0 -35 22 -26 45 7 19 30 19 46 0z M668 2283 c-26 -29
-30 -60 -14 -91 37 -71 136 -48 136 31 0 63 -84 104 -122 60z m77 -34 c4 -5 4
-21 1 -35 -5 -19 -12 -25 -29 -22 -37 5 -36 68 2 68 11 0 23 -5 26 -11z M1911
2234 c-25 -32 -25 -36 -6 -74 27 -53 103 -53 125 -1 22 53 -9 101 -65 101 -24
0 -39 -7 -54 -26z m79 -29 c10 -12 10 -18 0 -30 -25 -30 -61 -7 -46 30 3 8 12
15 19 15 8 0 20 -7 27 -15z M1081 2224 c-24 -31 -24 -34 -11 -69 26 -67 130
-47 130 26 0 65 -80 93 -119 43z m77 -38 c4 -21 -14 -37 -35 -29 -14 5 -18 35
-6 47 12 12 38 1 41 -18z M1539 2225 c-49 -26 -67 -111 -35 -160 34 -52 103
-56 148 -7 83 88 -9 223 -113 167z m79 -41 c44 -30 17 -114 -37 -114 -15 0
-32 5 -39 12 -20 20 -14 67 13 93 28 29 33 30 63 9z M1768 2204 c-54 -29 -44
-107 15 -129 46 -15 81 10 85 62 3 34 -1 44 -24 62 -31 25 -40 25 -76 5z m60
-62 c4 -29 -26 -42 -44 -18 -17 24 -6 48 20 44 13 -2 22 -12 24 -26z M2270
2180 c-39 -39 -14 -100 41 -100 34 0 49 18 49 56 0 23 -7 38 -22 48 -30 21
-44 20 -68 -4z m50 -40 c0 -11 -7 -20 -15 -20 -15 0 -21 21 -8 33 12 13 23 7
23 -13z M827 2152 c-39 -40 -36 -85 6 -127 40 -40 77 -51 116 -35 36 15 55 58
48 108 -13 79 -115 112 -170 54z m101 -28 c27 -19 31 -81 6 -91 -25 -9 -67 10
-80 36 -15 29 -8 50 20 61 29 12 29 12 54 -6z M2502 2154 c-75 -37 -112 -75
-112 -114 0 -98 124 -155 188 -87 39 41 63 137 46 182 -5 13 -52 45 -67 45 -1
0 -26 -12 -55 -26z m80 -36 c7 -20 -11 -99 -27 -125 -22 -33 -77 -32 -104 3
-34 44 -28 57 49 109 39 26 76 32 82 13z M515 2135 c-40 -21 -55 -43 -55 -78
0 -39 15 -64 50 -82 86 -44 190 20 163 101 -19 58 -102 89 -158 59z m96 -45
c12 -7 19 -21 19 -40 0 -47 -61 -67 -108 -34 -61 42 20 110 89 74z M2102 2143
c-17 -6 -42 -57 -42 -83 0 -33 44 -70 83 -70 45 0 76 26 83 70 10 63 -59 109
-124 83z m72 -49 c19 -18 19 -20 6 -45 -14 -24 -56 -25 -69 -1 -7 14 -6 25 5
40 18 26 37 28 58 6z M329 2116 c-47 -23 -28 -106 23 -106 38 0 58 19 58 54 0
49 -39 74 -81 52z m41 -52 c0 -16 -16 -19 -25 -4 -8 13 4 32 16 25 5 -4 9 -13
9 -21z M1150 2082 c-39 -19 -56 -55 -46 -95 8 -34 40 -50 96 -49 35 0 49 6 67
27 13 14 23 32 23 40 0 30 -24 65 -55 80 -41 19 -42 19 -85 -3z m80 -47 c6 -8
10 -22 8 -32 -5 -24 -76 -25 -91 -1 -24 37 54 68 83 33z M1366 2085 c-42 -43
-20 -105 37 -105 41 0 57 15 57 55 0 54 -58 85 -94 50z m51 -40 c7 -20 -2 -29
-21 -22 -9 4 -13 13 -10 22 8 19 23 19 31 0z M1931 2086 c-16 -19 -10 -66 10
-79 26 -16 68 0 75 29 12 47 -55 87 -85 50z M2687 2072 c-40 -44 -5 -122 54
-122 32 0 69 40 69 74 0 56 -86 89 -123 48z m79 -37 c7 -18 -13 -45 -33 -45
-17 0 -27 24 -19 45 7 20 45 19 52 0z M1637 2002 c-34 -38 -8 -92 44 -92 32 0
49 17 49 51 0 53 -59 79 -93 41z m53 -37 c0 -8 -7 -15 -15 -15 -16 0 -20 12
-8 23 11 12 23 8 23 -8z M1840 1997 c-61 -31 -67 -130 -10 -187 14 -14 33 -20
64 -20 37 0 48 5 70 31 47 55 24 134 -48 169 -50 24 -44 23 -76 7z m77 -59
c25 -24 31 -76 11 -96 -43 -43 -113 28 -89 92 13 33 46 34 78 4z M373 1989
c-33 -12 -41 -56 -15 -81 25 -26 69 -18 81 15 16 41 -25 82 -66 66z M2275
1955 c-36 -35 -34 -88 4 -126 36 -35 64 -37 96 -4 36 35 35 97 -1 130 -34 32
-68 32 -99 0z m70 -39 c26 -40 -4 -89 -37 -59 -21 19 -23 54 -6 71 17 17 26
15 43 -12z M811 1944 c-68 -48 -67 -185 0 -220 52 -27 115 -8 137 41 7 14 12
47 12 72 0 39 -5 50 -39 84 -42 43 -72 49 -110 23z m97 -75 c13 -26 9 -74 -9
-96 -31 -37 -99 0 -99 55 0 28 25 78 42 85 18 7 50 -15 66 -44z M648 1929
c-35 -20 -15 -69 28 -69 36 0 49 25 30 55 -18 27 -31 30 -58 14z M515 1908
c-26 -15 -35 -28 -35 -54 0 -47 71 -72 103 -36 24 27 21 58 -9 81 -31 24 -32
24 -59 9z m38 -53 c-4 -15 -26 -12 -31 3 -3 9 2 13 14 10 11 -2 18 -8 17 -13z
M1460 1912 c-8 -2 -25 -14 -37 -25 -50 -45 -9 -131 62 -131 46 0 75 31 75 78
0 48 -56 92 -100 78z m53 -63 c15 -24 1 -49 -27 -49 -31 0 -48 27 -34 53 11
22 46 19 61 -4z M2044 1895 c-41 -63 20 -175 89 -161 41 8 55 22 63 61 6 35
-5 65 -39 103 -30 32 -91 31 -113 -3z m88 -32 c23 -20 24 -71 2 -80 -37 -14
-80 50 -54 81 16 20 29 20 52 -1z M2657 1903 c-25 -29 -30 -68 -13 -101 31
-61 97 -81 136 -42 30 30 28 103 -5 135 -30 31 -93 34 -118 8z m87 -39 c20
-19 21 -58 2 -73 -32 -26 -85 33 -64 72 11 21 41 22 62 1z M1041 1884 c-27
-35 -26 -49 5 -80 19 -20 31 -24 52 -19 35 8 40 14 48 52 13 64 -65 98 -105
47z m65 -25 c9 -16 -12 -33 -31 -25 -14 5 -15 9 -5 21 15 18 26 19 36 4z
M1214 1898 c-66 -32 -43 -138 30 -138 37 0 49 7 65 37 17 34 13 52 -18 84 -31
31 -44 34 -77 17z m60 -53 c7 -20 -18 -49 -38 -42 -19 7 -22 53 -3 60 17 6 34
-2 41 -18z M2472 1864 c-30 -21 -30 -77 0 -98 41 -29 82 -13 93 36 5 21 1 33
-19 52 -29 30 -43 32 -74 10z m53 -54 c0 -22 -29 -18 -33 3 -3 14 1 18 15 15
10 -2 18 -10 18 -18z M365 1835 c-14 -13 -25 -33 -25 -45 0 -29 44 -70 75 -70
61 0 87 81 39 119 -35 27 -59 26 -89 -4z m63 -27 c17 -17 15 -35 -5 -42 -21
-9 -46 16 -37 37 7 20 25 22 42 5z M1655 1805 c-48 -47 -22 -161 41 -185 40
-15 53 -12 85 19 34 34 39 92 14 141 -29 56 -98 68 -140 25z m95 -37 c22 -24
27 -77 8 -96 -19 -19 -56 -14 -69 9 -12 23 -15 81 -4 98 10 18 43 12 65 -11z
M660 1793 c-43 -15 -54 -82 -18 -107 30 -21 61 -20 81 2 18 19 22 59 9 78 -7
10 -47 35 -54 33 -2 0 -10 -3 -18 -6z m40 -58 c0 -21 -30 -31 -40 -14 -11 17
-3 29 21 29 10 0 19 -7 19 -15z M495 1736 c-27 -19 -24 -74 4 -98 45 -36 101
-10 101 47 0 54 -60 84 -105 51z m60 -51 c0 -28 -29 -25 -33 3 -3 19 0 23 15
20 10 -2 18 -12 18 -23z M1015 1728 c-28 -16 -35 -28 -35 -65 0 -40 39 -73 86
-73 86 0 102 109 20 140 -34 13 -46 12 -71 -2z m70 -48 c15 -16 16 -22 5 -35
-16 -20 -49 -16 -63 7 -8 12 -7 21 2 32 18 21 34 20 56 -4z M1454 1719 c-44
-22 -69 -103 -44 -149 25 -46 114 -39 141 11 18 35 15 98 -7 119 -24 24 -63
32 -90 19z m64 -71 c6 -53 -34 -88 -66 -56 -16 16 -15 39 4 66 22 32 58 26 62
-10z M1923 1722 c-32 -5 -73 -58 -73 -94 0 -41 48 -88 90 -88 45 0 90 47 90
93 0 60 -46 98 -107 89z m57 -57 c30 -36 -19 -97 -60 -75 -23 12 -27 59 -8 78
17 17 53 15 68 -3z M2411 1704 c-36 -45 -24 -92 28 -114 44 -18 80 -5 95 32
16 37 4 83 -24 98 -35 19 -77 12 -99 -16z m73 -20 c20 -8 21 -50 1 -58 -34
-13 -66 24 -44 50 13 16 20 17 43 8z M2199 1697 c-92 -62 -42 -189 62 -158 77
23 108 117 53 160 -35 27 -73 27 -115 -2z m101 -55 c0 -34 -29 -62 -65 -62
-39 0 -54 26 -33 59 26 42 98 44 98 3z M2774 1695 c-20 -30 -11 -62 21 -77 52
-23 99 46 59 86 -23 24 -61 20 -80 -9z m56 -23 c0 -13 -12 -22 -22 -16 -10 6
-1 24 13 24 5 0 9 -4 9 -8z M1205 1675 c-24 -24 -31 -57 -19 -90 10 -26 62
-48 100 -40 96 18 77 155 -21 155 -25 0 -44 -8 -60 -25z m95 -30 c31 -38 -27
-83 -62 -47 -16 16 -18 23 -9 41 13 24 53 28 71 6z M2611 1644 c-62 -51 -28
-154 50 -154 77 0 119 101 64 155 -32 33 -75 32 -114 -1z m85 -39 c15 -23 15
-27 0 -50 -23 -35 -55 -31 -69 9 -9 22 17 66 38 66 8 0 22 -11 31 -25z M636
1628 c-9 -12 -16 -28 -16 -35 0 -18 37 -53 55 -53 21 0 55 36 55 59 0 48 -67
68 -94 29z m43 -33 c3 -12 -13 -9 -17 4 -2 7 0 11 6 7 5 -3 10 -8 11 -11z
M807 1619 c-50 -29 -40 -113 17 -149 44 -27 107 -27 131 0 25 27 24 83 0 111
-41 44 -107 62 -148 38z m106 -57 c27 -24 19 -66 -14 -70 -50 -6 -108 74 -66
92 18 7 60 -3 80 -22z M496 1559 c-20 -16 -26 -29 -26 -59 0 -30 6 -43 26 -59
15 -12 34 -21 44 -21 10 0 29 9 44 21 35 28 36 80 1 114 -30 30 -54 31 -89 4z
m72 -55 c4 -29 -23 -51 -43 -34 -16 13 -20 42 -8 54 14 14 48 1 51 -20z M1662
1568 c-18 -18 -14 -63 6 -81 50 -46 114 13 82 74 -12 22 -68 27 -88 7z m56
-40 c-6 -18 -28 -21 -28 -4 0 9 7 16 16 16 9 0 14 -5 12 -12z M1120 1510 c-39
-39 -12 -102 45 -102 36 0 55 19 55 57 0 58 -60 85 -100 45z m58 -43 c2 -12
-3 -17 -17 -17 -12 0 -21 6 -21 13 0 31 32 34 38 4z M2021 1504 c-28 -36 -26
-66 5 -103 63 -76 178 -4 132 82 -17 34 -39 46 -80 47 -28 0 -41 -6 -57 -26z
m95 -40 c12 -17 12 -23 0 -39 -12 -17 -17 -18 -40 -7 -33 15 -42 37 -25 58 16
20 48 14 65 -12z M1806 1484 c-9 -8 -16 -26 -16 -39 0 -13 7 -31 16 -39 33
-34 94 -9 94 38 0 47 -62 73 -94 40z m43 -41 c0 -5 -3 -9 -9 -11 -5 -2 -10 4
-10 13 0 16 16 14 19 -2z M2292 1480 c-45 -42 -34 -106 23 -132 29 -13 78 4
100 36 51 72 -57 157 -123 96z m84 -34 c15 -12 17 -18 8 -33 -23 -38 -94 -20
-78 20 5 14 16 20 45 26 3 0 14 -5 25 -13z M640 1453 c-58 -74 30 -190 102
-134 30 24 41 69 27 111 -20 57 -92 70 -129 23z m91 -34 c16 -31 -4 -71 -33
-67 -29 4 -47 50 -28 72 18 22 47 20 61 -5z M1550 1460 c-48 -48 -2 -139 63
-126 44 9 61 29 61 72 0 65 -79 99 -124 54z m78 -52 c3 -24 0 -28 -23 -28 -27
0 -41 20 -31 46 10 27 51 13 54 -18z M2511 1461 c-30 -30 -33 -92 -4 -123 22
-24 84 -24 106 0 23 25 22 94 -1 115 -31 29 -77 32 -101 8z m71 -45 c15 -34 4
-58 -24 -54 -23 3 -35 35 -24 64 8 22 35 16 48 -10z M2744 1469 c-22 -11 -44
-48 -44 -73 0 -7 9 -25 21 -40 26 -33 88 -37 119 -6 25 25 26 81 2 103 -24 22
-71 29 -98 16z m76 -63 c0 -21 -27 -38 -50 -31 -24 8 -26 40 -3 54 21 11 53
-3 53 -23z M1344 1441 c-114 -52 -119 -191 -7 -191 80 0 143 54 143 123 0 71
-62 103 -136 68z m92 -56 c12 -50 -55 -105 -111 -91 -60 15 2 116 71 116 28 0
35 -4 40 -25z M845 1385 c-59 -58 1 -155 78 -126 26 10 57 56 57 86 0 27 -46
65 -80 65 -19 0 -40 -9 -55 -25z m80 -50 c0 -25 -4 -31 -26 -33 -31 -4 -44 19
-28 49 6 13 18 19 32 17 17 -2 22 -10 22 -33z M1051 1364 c-61 -51 -28 -134
53 -134 45 0 86 36 86 75 0 34 -50 85 -83 85 -14 0 -39 -12 -56 -26z m88 -38
c9 -11 10 -20 1 -36 -13 -25 -57 -24 -73 2 -23 36 45 67 72 34z M1750 1350
c-42 -42 -15 -114 47 -126 26 -5 37 -1 57 19 33 33 33 71 1 102 -30 31 -77 33
-105 5z m80 -35 c18 -21 5 -45 -25 -45 -27 0 -41 20 -31 45 7 19 40 19 56 0z
M2140 1340 c-45 -45 -13 -130 49 -130 45 0 75 30 75 75 0 66 -78 101 -124 55z
m80 -41 c14 -26 -4 -51 -34 -47 -21 3 -32 28 -22 54 8 21 44 17 56 -7z M1956
1318 c-24 -34 -20 -73 10 -97 15 -12 34 -21 44 -21 31 0 70 39 70 71 0 62 -90
96 -124 47z m81 -34 c3 -8 -2 -23 -11 -32 -15 -15 -17 -15 -32 0 -21 21 -11
48 16 48 11 0 23 -7 27 -16z M2372 1324 c-24 -17 -30 -62 -10 -82 7 -7 24 -12
38 -12 33 0 50 17 50 51 0 24 -30 59 -50 59 -3 0 -16 -7 -28 -16z M1535 1275
c-31 -30 -32 -65 -2 -93 39 -37 98 -28 122 19 39 74 -60 135 -120 74z m73 -24
c21 -13 10 -46 -16 -49 -24 -4 -38 18 -28 43 6 17 24 19 44 6z M2752 1274
c-46 -32 -16 -104 44 -104 47 0 72 71 36 103 -23 21 -51 22 -80 1z m54 -35
c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z M2516 1243
c-34 -34 -41 -64 -24 -100 42 -89 188 -48 188 53 0 50 -29 74 -89 74 -39 0
-53 -5 -75 -27z m112 -25 c32 -32 -6 -81 -60 -76 -26 2 -34 8 -36 26 -7 47 63
83 96 50z M762 1213 c-12 -10 -24 -30 -28 -45 -5 -22 0 -33 24 -58 17 -16 37
-30 46 -30 32 0 67 21 77 47 27 71 -62 134 -119 86z m82 -49 c8 -22 -1 -34
-28 -34 -27 0 -46 18 -39 36 7 19 59 18 67 -2z M1010 1203 c-43 -15 -54 -82
-18 -107 48 -34 98 -7 98 51 0 41 -41 70 -80 56z m40 -58 c0 -19 -20 -29 -32
-17 -15 15 -2 43 17 36 8 -3 15 -12 15 -19z M2255 1175 c-48 -47 -20 -125 45
-125 67 0 96 88 44 129 -35 27 -59 26 -89 -4z m70 -35 c11 -18 -6 -50 -26 -50
-22 0 -34 22 -25 45 6 17 42 20 51 5z M1186 1159 c-32 -38 -33 -63 -1 -94 30
-31 82 -33 119 -4 56 44 18 129 -59 129 -25 0 -40 -8 -59 -31z m88 -25 c12
-12 13 -20 5 -35 -13 -24 -47 -22 -63 4 -9 15 -7 21 8 33 25 18 31 18 50 -2z
M1815 1164 c-43 -47 -26 -113 37 -145 49 -25 71 -24 104 5 43 36 39 88 -9 132
-47 44 -96 47 -132 8z m99 -35 c39 -31 33 -73 -10 -77 -25 -2 -37 3 -53 24
-25 32 -26 38 -5 58 21 21 36 20 68 -5z M1392 1158 c-37 -37 12 -113 57 -88
35 18 45 48 26 76 -17 26 -62 33 -83 12z M2085 1158 c-28 -16 -35 -28 -35 -64
0 -38 27 -64 66 -64 37 0 51 9 62 40 13 34 -5 79 -35 91 -30 11 -33 11 -58 -3z
m50 -59 c0 -15 -7 -25 -18 -27 -22 -4 -33 24 -17 43 18 21 35 13 35 -16z
M1604 1121 c-44 -27 -64 -59 -64 -103 0 -50 28 -78 76 -78 69 0 124 54 124
123 0 67 -72 97 -136 58z m84 -33 c19 -19 14 -44 -14 -77 -27 -32 -61 -40 -82
-19 -20 20 -13 49 19 79 33 31 58 36 77 17z M2695 1078 c-50 -29 -61 -90 -22
-126 42 -40 113 -21 136 37 29 68 -47 127 -114 89z m73 -57 c7 -44 -48 -68
-68 -30 -9 17 -8 25 6 40 24 27 58 21 62 -10z M900 1060 c-53 -53 7 -143 72
-109 46 24 51 67 13 104 -29 30 -58 32 -85 5z m65 -50 c0 -22 -39 -19 -43 3
-3 15 1 18 20 15 12 -2 23 -10 23 -18z M2407 1059 c-30 -18 -48 -71 -36 -110
13 -46 30 -66 71 -83 31 -13 38 -13 69 2 67 34 76 119 17 174 -32 30 -86 37
-121 17z m97 -60 c27 -31 28 -56 4 -86 -29 -36 -98 8 -98 62 0 61 52 75 94 24z
M1322 1017 c-31 -33 -28 -72 7 -108 39 -39 91 -40 120 -3 24 31 26 43 9 79
-24 54 -99 71 -136 32z m85 -41 c26 -23 27 -26 11 -42 -32 -33 -97 16 -68 51
17 20 24 19 57 -9z M2223 995 c-32 -23 -31 -69 2 -91 33 -21 68 -12 84 23 10
23 9 30 -7 52 -23 32 -50 37 -79 16z m42 -55 c-5 -8 -11 -8 -17 -2 -6 6 -7 16
-3 22 5 8 11 8 17 2 6 -6 7 -16 3 -22z M2005 989 c-50 -28 -62 -93 -23 -129
45 -42 117 -14 133 51 12 50 -63 104 -110 78z m60 -68 c0 -34 -30 -51 -51 -29
-25 24 -10 60 24 56 21 -2 27 -8 27 -27z M1089 961 c-58 -58 -24 -151 55 -151
70 0 104 102 51 155 -33 33 -70 32 -106 -4z m75 -27 c32 -31 8 -92 -32 -80
-29 10 -37 42 -18 71 19 29 29 31 50 9z M1734 906 c-42 -42 -46 -85 -9 -121
28 -29 54 -31 95 -10 36 19 50 43 50 89 0 78 -76 102 -136 42z m84 -18 c7 -7
12 -20 12 -29 0 -22 -47 -60 -66 -52 -19 7 -18 52 3 75 19 21 34 23 51 6z
M2589 866 c-13 -6 -30 -24 -39 -39 -13 -24 -13 -30 0 -54 33 -59 112 -52 133
11 17 52 -45 107 -94 82z m55 -51 c7 -19 -20 -46 -39 -39 -15 6 -20 35 -8 47
12 12 41 7 47 -8z M2132 844 c-25 -17 -30 -69 -9 -97 21 -28 72 -32 96 -8 44
44 16 121 -44 121 -11 0 -31 -7 -43 -16z m66 -48 c4 -21 -14 -37 -35 -29 -14
5 -18 35 -6 47 12 12 38 1 41 -18z M1296 827 c-36 -36 -36 -88 0 -116 56 -44
134 -13 134 53 0 45 -27 75 -72 82 -30 5 -41 2 -62 -19z m92 -53 c2 -11 -4
-27 -13 -34 -32 -26 -87 25 -58 54 4 4 21 6 38 4 22 -2 31 -9 33 -24z M1499
811 c-82 -82 34 -211 125 -140 38 30 49 64 36 105 -23 70 -108 88 -161 35z
m105 -27 c19 -18 21 -55 4 -72 -7 -7 -24 -12 -38 -12 -33 0 -50 17 -50 50 0
14 5 31 12 38 17 17 54 15 72 -4z M2319 811 c-19 -15 -24 -29 -24 -66 0 -40 5
-51 33 -76 70 -63 160 -23 149 66 -11 79 -101 122 -158 76z m95 -43 c18 -26
21 -74 5 -83 -37 -24 -101 45 -79 85 14 27 55 26 74 -2z M1920 800 c-27 -27
-25 -66 5 -95 38 -39 86 -32 111 16 13 26 13 32 0 58 -24 46 -81 56 -116 21z
m78 -46 c4 -27 -20 -37 -44 -19 -16 11 -16 15 -5 29 19 22 45 16 49 -10z
M1774 696 c-33 -14 -44 -33 -44 -70 0 -50 74 -80 128 -52 58 30 51 104 -11
126 -36 12 -35 12 -73 -4z m73 -52 c4 -11 -1 -22 -12 -30 -23 -17 -27 -17 -50
0 -16 12 -17 16 -6 30 17 21 60 21 68 0z M2165 670 c-22 -24 -23 -67 -2 -88
22 -21 77 -20 93 3 46 62 -39 142 -91 85z m63 -43 c2 -12 -3 -17 -17 -17 -12
0 -21 6 -21 13 0 31 32 34 38 4z M1997 632 c-33 -37 -11 -92 37 -92 51 0 74
66 34 94 -29 21 -51 20 -71 -2z m44 -45 c-13 -13 -26 -3 -16 12 3 6 11 8 17 5
6 -4 6 -10 -1 -17z"></path></g></g></svg>`);function r3(t,o){let c=f2(o,"class",3,"");var s=a3();R(()=>u1(s,0,We(c()))),_(t,s)}var o3=$t(`<svg viewBox="0 0 551.000000 316.000000" fill="currentColor" aria-hidden="true"><g transform="translate(551, 0) rotate(90)"><g transform="translate(0.000000,551.000000) scale(0.100000,-0.100000)"><path d="M1835 5439 c-472 -82 -952 -391 -1224 -788 -66 -97 -136 -162 -250
-236 -134 -87 -181 -141 -181 -208 0 -45 30 -74 116 -111 38 -16 86 -40 106
-53 l38 -23 -63 -63 c-164 -162 -244 -365 -293 -741 -86 -672 81 -1517 396
-1996 249 -378 587 -622 1030 -744 180 -49 279 -61 520 -61 285 0 357 14 540
103 102 50 125 66 206 146 107 107 158 199 200 361 36 138 42 363 20 700 -48
710 -36 1244 39 1835 58 452 81 736 71 885 -28 424 -119 643 -338 812 -223
171 -586 242 -933 182z m559 -102 c498 -132 678 -503 611 -1261 -9 -94 -22
-223 -30 -286 -25 -202 -54 -460 -72 -655 -26 -272 -25 -974 1 -1353 24 -353
19 -630 -13 -742 -31 -107 -93 -227 -151 -293 -103 -114 -274 -202 -465 -237
-351 -63 -871 42 -1191 241 -525 326 -815 876 -914 1734 -54 459 2 957 138
1235 28 57 57 96 124 163 90 91 108 114 108 141 0 32 -59 80 -160 130 -57 28
-105 56 -107 62 -6 19 55 73 158 141 111 73 187 144 235 219 83 129 252 310
391 417 248 191 551 324 838 370 17 3 113 4 215 2 162 -2 197 -6 284 -28z
M2102 5307 c-30 -32 -28 -63 7 -98 23 -23 39 -29 70 -29 67 0 97 44 70 103
-23 50 -110 64 -147 24z m102 -30 c28 -20 17 -51 -20 -55 -35 -3 -68 26 -58
52 7 19 53 21 78 3z M1770 5271 c-120 -28 -164 -83 -104 -130 64 -50 200 -54
291 -7 74 37 94 84 52 122 -16 14 -39 19 -112 20 -51 2 -108 -1 -127 -5z m189
-40 c36 -10 35 -23 -2 -48 -51 -35 -122 -48 -188 -34 -31 7 -65 18 -74 25 -18
13 -17 14 6 27 58 31 196 48 258 30z M2321 5231 c-98 -98 172 -391 364 -395
126 -3 111 129 -30 269 -119 119 -280 180 -334 126z m176 -62 c111 -55 243
-206 231 -267 -5 -26 -67 -27 -128 -1 -132 57 -276 221 -255 290 6 18 13 21
45 16 21 -3 69 -20 107 -38z M1382 5158 c-23 -12 -36 -43 -30 -75 5 -29 72
-30 92 -1 41 58 2 106 -62 76z m38 -42 c0 -16 -18 -31 -27 -22 -8 8 5 36 17
36 5 0 10 -6 10 -14z M2022 5119 c-65 -33 -138 -104 -168 -165 -34 -70 -30
-123 15 -168 27 -27 38 -31 81 -30 43 0 55 5 86 35 92 90 146 306 84 339 -28
15 -50 12 -98 -11z m82 -34 c18 -48 -54 -229 -106 -268 -33 -24 -73 -25 -98
-2 -26 24 -26 84 0 134 27 54 145 149 186 151 7 0 14 -7 18 -15z M1496 5099
c-34 -40 -34 -82 0 -115 19 -20 31 -24 52 -20 35 9 72 50 72 82 0 81 -74 113
-124 53z m79 -29 c8 -26 -11 -60 -34 -60 -24 0 -33 23 -21 55 11 30 46 33 55
5z M2222 5083 c-35 -30 -38 -68 -8 -97 31 -31 45 -32 80 -5 31 25 33 57 5 93
-24 30 -48 33 -77 9z m53 -44 c10 -30 -11 -48 -32 -27 -13 14 -14 20 -3 32 17
22 27 20 35 -5z M1702 5063 c-7 -3 -19 -18 -28 -35 -42 -81 58 -157 121 -93
49 48 17 136 -48 134 -18 0 -38 -3 -45 -6z m72 -55 c8 -13 8 -23 0 -35 -16
-26 -51 -28 -64 -4 -25 47 36 83 64 39z M1300 5002 c-77 -38 -107 -146 -55
-197 30 -31 54 -31 90 -3 32 25 75 111 75 151 0 30 -31 67 -57 67 -10 0 -34
-8 -53 -18z m65 -42 c7 -12 -40 -113 -60 -130 -22 -19 -45 5 -45 47 0 56 82
121 105 83z M2258 4929 c-81 -19 -177 -105 -199 -178 -26 -87 52 -122 141 -62
57 38 147 126 165 162 19 35 7 65 -31 79 -28 11 -25 11 -76 -1z m72 -50 c0
-17 -99 -117 -150 -149 -55 -35 -80 -38 -80 -10 0 49 66 126 130 154 41 18
100 21 100 5z M1045 4911 c-80 -48 -88 -141 -16 -171 106 -43 211 123 110 175
-37 20 -58 19 -94 -4z m85 -41 c27 -27 14 -60 -33 -83 -43 -22 -77 -10 -77 27
0 30 45 71 83 75 4 1 16 -8 27 -19z M1569 4867 c-96 -64 7 -166 112 -112 36
19 54 58 39 85 -28 52 -95 64 -151 27z m89 -23 c46 -13 19 -64 -34 -64 -55 0
-69 40 -20 60 27 11 26 11 54 4z M2422 4847 c-29 -31 -28 -72 3 -102 48 -49
125 -16 125 53 0 67 -82 98 -128 49z m86 -48 c2 -18 -3 -29 -14 -33 -27 -11
-54 3 -54 28 0 30 9 38 40 34 19 -2 26 -10 28 -29z M2791 4814 c-26 -33 -27
-70 -2 -110 46 -76 141 -55 141 31 0 87 -92 139 -139 79z m83 -33 c22 -25 18
-75 -7 -79 -26 -5 -57 26 -57 58 0 15 3 30 7 33 12 13 40 7 57 -12z M1370
4793 c-31 -39 -24 -93 13 -111 57 -28 119 30 102 95 -8 34 -21 43 -62 43 -22
0 -38 -8 -53 -27z m78 -29 c4 -27 -21 -59 -42 -51 -21 8 -21 53 2 66 23 14 36
9 40 -15z M1731 4754 c-58 -74 28 -152 103 -93 34 27 36 81 4 103 -35 25 -83
20 -107 -10z m88 -27 c8 -10 7 -18 -2 -31 -17 -23 -61 -18 -65 8 -7 32 44 49
67 23z M852 4747 c-45 -25 -92 -118 -92 -181 0 -92 84 -64 139 46 36 71 39
100 11 128 -23 23 -27 24 -58 7z m10 -114 c-21 -41 -62 -84 -62 -65 0 23 34
98 54 120 20 23 21 23 24 4 2 -11 -6 -38 -16 -59z M2588 4744 c-33 -17 -37
-57 -13 -104 23 -45 123 -122 154 -118 25 3 26 6 25 58 -1 79 -33 147 -78 165
-43 18 -54 18 -88 -1z m85 -52 c18 -16 51 -111 42 -121 -9 -8 -115 102 -115
120 0 31 37 31 73 1z M1092 4702 c-78 -31 -185 -136 -273 -269 -64 -95 -63
-154 3 -190 46 -25 255 -24 348 2 145 40 197 98 207 227 6 82 -7 142 -39 183
-47 60 -158 82 -246 47z m151 -36 c84 -36 116 -129 82 -243 -27 -92 -94 -130
-267 -153 -85 -12 -141 -9 -205 11 -55 17 -44 70 34 172 150 196 253 257 356
213z M2295 4677 c-41 -41 -52 -92 -37 -166 23 -108 105 -167 197 -141 59 17
96 57 102 113 10 83 -38 167 -118 208 -59 30 -105 25 -144 -14z m153 -43 c35
-27 71 -93 72 -129 0 -35 -36 -82 -74 -95 -31 -10 -42 -9 -73 7 -52 25 -77 73
-78 146 0 53 3 61 29 84 35 30 72 26 124 -13z M1484 4670 c-89 -57 -54 -162
48 -145 81 14 129 104 80 148 -25 23 -90 21 -128 -3z m104 -46 c6 -42 -80 -84
-106 -51 -12 15 1 52 25 66 30 18 78 9 81 -15z M1850 4624 c-30 -8 -113 -43
-185 -78 -224 -111 -266 -147 -231 -200 41 -63 215 -166 355 -210 214 -68 387
1 435 175 38 133 -30 284 -143 317 -52 16 -164 14 -231 -4z m218 -39 c79 -34
121 -102 122 -198 1 -209 -197 -291 -453 -187 -111 46 -267 147 -267 175 0 18
49 50 190 121 191 97 320 125 408 89z M2868 4593 c-9 -2 -21 -17 -28 -33 -16
-39 -1 -81 35 -99 25 -12 32 -12 54 0 44 25 41 107 -4 127 -27 12 -29 13 -57
5z m52 -52 c13 -24 2 -53 -18 -49 -21 4 -36 32 -29 52 9 22 34 20 47 -3z M648
4429 c-62 -65 -117 -194 -103 -239 10 -33 50 -25 84 17 53 64 117 216 105 248
-11 27 -46 16 -86 -26z m11 -86 c-25 -59 -60 -116 -66 -109 -11 11 66 156 83
156 2 0 -6 -21 -17 -47z M2712 4425 c-35 -25 -44 -60 -28 -98 19 -45 190 -210
213 -205 66 12 44 205 -32 278 -42 40 -115 52 -153 25z m103 -41 c42 -27 65
-77 71 -151 l6 -68 -86 85 c-88 87 -104 119 -68 139 25 15 49 13 77 -5z M2553
4344 c-15 -39 38 -67 60 -32 8 12 7 21 -2 32 -17 21 -50 20 -58 0z M2334 4312
c-37 -6 -66 -47 -72 -101 -4 -43 -1 -53 21 -75 59 -59 147 -12 147 78 0 67
-40 107 -96 98z m50 -58 c16 -41 1 -96 -30 -108 -40 -15 -70 56 -44 105 13 24
65 26 74 3z M382 4287 c-40 -43 -17 -101 45 -113 26 -5 37 -1 57 19 31 32 33
56 5 91 -27 34 -77 36 -107 3z m78 -32 c10 -12 10 -18 0 -30 -7 -8 -18 -15
-25 -15 -7 0 -18 7 -25 15 -10 12 -10 18 0 30 7 8 18 15 25 15 7 0 18 -7 25
-15z M1363 4283 c-33 -6 -73 -59 -73 -97 0 -77 102 -113 164 -58 49 45 39 123
-20 148 -18 8 -37 13 -41 13 -4 -1 -18 -4 -30 -6z m69 -50 c24 -21 23 -48 -2
-73 -22 -22 -69 -27 -88 -8 -20 20 -14 64 11 81 29 21 56 21 79 0z M2500 4213
c-38 -20 -50 -53 -28 -80 21 -25 109 -63 149 -63 36 0 69 23 69 49 0 26 -35
71 -66 86 -53 25 -86 27 -124 8z m121 -59 c31 -28 24 -48 -12 -40 -46 9 -99
37 -99 51 0 29 76 21 111 -11z M1073 4184 c-46 -23 -67 -51 -67 -88 0 -105
145 -142 218 -55 41 48 30 105 -26 139 -39 24 -82 25 -125 4z m101 -35 c30
-14 38 -32 30 -64 -13 -53 -90 -72 -138 -34 -32 25 -33 49 -3 76 37 34 70 40
111 22z M636 4171 c-21 -23 -18 -70 7 -85 13 -8 24 -7 45 4 22 13 27 23 27 55
0 37 -2 40 -31 43 -20 2 -36 -4 -48 -17z m44 -36 c-7 -8 -16 -12 -21 -9 -13 8
-1 24 18 24 13 0 13 -3 3 -15z M810 4172 c-20 -10 -43 -33 -54 -53 -19 -35
-19 -38 -2 -64 23 -34 75 -57 116 -49 91 19 124 131 49 169 -36 19 -65 18
-109 -3z m91 -32 c44 -24 5 -90 -55 -90 -65 0 -75 50 -16 81 40 22 45 23 71 9z
M1664 4120 c-26 -10 -54 -48 -54 -72 0 -45 78 -65 118 -30 34 29 37 58 8 87
-27 27 -38 29 -72 15z m45 -39 c21 -13 -4 -41 -35 -41 -28 0 -32 24 -6 39 21
13 24 13 41 2z M2133 4120 c-41 -17 -58 -85 -28 -110 24 -20 77 -14 97 11 44
54 -5 124 -69 99z m50 -46 c11 -12 -13 -44 -33 -44 -20 0 -28 29 -13 43 8 9
38 9 46 1z M2751 4073 c-72 -59 -1 -233 94 -233 67 0 95 80 59 170 -27 68
-107 101 -153 63z m82 -43 c65 -51 53 -175 -14 -140 -41 22 -65 120 -37 148
16 16 21 15 51 -8z M2368 4061 c-112 -37 -185 -99 -228 -193 -47 -102 -2 -208
87 -208 31 0 149 31 249 65 112 38 178 111 178 196 0 59 -23 94 -82 127 -57
32 -133 37 -204 13z m180 -50 c79 -40 83 -118 10 -187 -36 -33 -63 -46 -163
-78 -170 -55 -215 -52 -230 14 -25 114 140 270 287 270 38 0 72 -7 96 -19z
M1384 4056 c-108 -27 -154 -77 -154 -169 0 -88 51 -137 126 -122 28 5 54 24
112 83 113 116 134 159 92 197 -26 23 -108 29 -176 11z m137 -36 c26 -15 14
-36 -73 -127 -78 -80 -115 -101 -147 -84 -25 14 -37 71 -25 119 11 43 43 67
114 86 67 18 105 19 131 6z M1822 4031 c-56 -19 -107 -60 -115 -92 -3 -12 4
-30 17 -46 61 -71 316 -11 316 75 0 37 -10 49 -53 67 -48 20 -100 19 -165 -4z
m168 -46 c16 -19 8 -29 -47 -55 -55 -26 -163 -33 -184 -13 -16 16 7 44 54 67
42 21 160 22 177 1z M616 4009 c-35 -27 -36 -86 -3 -116 55 -51 109 -57 156
-17 52 43 37 105 -33 138 -46 22 -88 20 -120 -5z m118 -40 c14 -11 26 -29 26
-40 0 -27 -42 -44 -81 -33 -40 11 -54 33 -45 67 5 23 12 27 40 27 19 0 45 -9
60 -21z M908 3949 c-46 -23 -59 -60 -33 -89 26 -29 101 -27 146 3 40 27 51 71
22 93 -26 19 -92 16 -135 -7z m107 -29 c8 -12 -47 -40 -80 -40 -37 0 -32 28 8
39 43 12 65 13 72 1z M475 3886 c-13 -19 -14 -29 -5 -45 14 -27 40 -27 68 -1
25 24 25 25 12 51 -15 27 -56 24 -75 -5z M1565 3875 c-44 -43 -30 -114 25
-134 56 -19 110 20 110 80 0 71 -85 105 -135 54z m79 -21 c24 -9 21 -61 -5
-74 -16 -9 -26 -8 -45 5 -28 18 -30 32 -7 57 17 19 31 22 57 12z M2020 3881
c-14 -28 -12 -67 4 -81 41 -33 101 24 78 74 -15 33 -66 37 -82 7z m50 -31 c0
-11 -4 -20 -10 -20 -5 0 -10 9 -10 20 0 11 5 20 10 20 6 0 10 -9 10 -20z
M1066 3854 c-25 -24 -20 -69 10 -93 34 -26 68 -27 94 -1 43 43 10 110 -54 110
-19 0 -42 -7 -50 -16z m82 -52 c-5 -24 -52 -23 -56 2 -2 10 2 22 9 27 18 11
51 -9 47 -29z M525 3787 c-48 -50 -88 -148 -83 -205 3 -32 7 -37 30 -40 55 -6
170 138 172 216 1 32 -4 47 -18 58 -33 23 -57 16 -101 -29z m76 -37 c-5 -39
-26 -71 -76 -120 -46 -45 -46 -45 -39 -15 11 48 43 118 67 143 27 29 53 25 48
-8z M764 3816 c-10 -26 4 -48 28 -44 17 2 23 10 23 28 0 18 -6 26 -23 28 -13
2 -25 -3 -28 -12z M1839 3797 c-47 -32 -59 -69 -32 -105 16 -21 29 -28 66 -30
38 -3 51 1 78 26 87 78 -13 176 -112 109z m90 -26 c39 -25 -36 -84 -78 -61
-18 9 -19 14 -10 31 16 31 62 46 88 30z M2830 3788 c-27 -29 -27 -87 1 -122
43 -55 105 -18 103 62 -2 73 -60 107 -104 60z m58 -30 c18 -18 15 -68 -4 -75
-19 -7 -34 13 -34 48 0 38 15 50 38 27z M2667 3753 c-15 -14 -5 -52 35 -130
35 -69 42 -95 48 -166 7 -89 13 -107 35 -107 28 0 39 43 38 140 -1 109 -28
196 -74 242 -26 26 -67 37 -82 21z m73 -83 c35 -69 22 -67 -19 3 -13 20 -18
37 -12 37 6 0 20 -18 31 -40z M826 3731 c-40 -27 -55 -57 -56 -113 -1 -119 76
-188 207 -188 192 0 283 154 151 253 -85 63 -242 88 -302 48z m233 -58 c124
-63 110 -164 -26 -193 -119 -25 -204 19 -218 113 -8 53 9 91 48 108 38 16 137
1 196 -28z M1196 3734 c-25 -24 -20 -71 9 -90 23 -15 27 -15 50 0 32 21 35 80
6 96 -27 14 -47 13 -65 -6z m44 -39 c0 -8 -4 -15 -9 -15 -13 0 -22 16 -14 24
11 11 23 6 23 -9z M348 3694 c-51 -27 -63 -135 -17 -149 55 -18 93 27 87 100
-4 50 -32 70 -70 49z m35 -68 c-2 -31 -21 -59 -34 -50 -22 13 1 89 24 81 7 -2
11 -16 10 -31z M672 3703 c-7 -3 -19 -18 -28 -34 -17 -33 -7 -61 27 -80 45
-24 99 52 67 92 -15 19 -47 30 -66 22z m38 -57 c0 -8 -5 -18 -11 -22 -14 -8
-33 11 -25 25 10 16 36 13 36 -3z M1420 3699 c-81 -14 -125 -39 -125 -69 0
-30 35 -50 90 -50 65 0 268 38 283 54 47 47 -113 89 -248 65z m141 -50 c-28
-11 -219 -25 -210 -16 11 13 87 25 159 25 59 1 70 -1 51 -9z M2020 3680 c-11
-11 -20 -24 -20 -30 0 -25 26 -60 53 -71 68 -29 119 54 61 100 -34 26 -68 27
-94 1z m79 -39 c12 -21 5 -31 -19 -31 -22 0 -44 25 -35 40 10 17 43 11 54 -9z
M2416 3635 c-96 -39 -136 -89 -136 -169 0 -53 34 -101 77 -109 28 -5 222 40
285 66 20 8 43 25 52 38 20 29 21 91 1 129 -36 71 -166 92 -279 45z m199 -31
c62 -29 71 -110 17 -138 -35 -18 -217 -66 -251 -66 -38 0 -61 27 -61 73 0 33
6 46 38 77 66 62 187 88 257 54z M2194 3607 c-33 -29 -28 -67 12 -86 59 -26
105 56 52 93 -29 21 -32 20 -64 -7z m56 -37 c0 -5 -5 -12 -11 -16 -14 -8 -33
11 -25 25 7 11 36 4 36 -9z M564 3561 c-89 -54 -147 -265 -109 -397 58 -203
213 -126 255 128 23 144 4 245 -51 273 -37 20 -58 19 -95 -4z m86 -48 c21 -26
22 -35 17 -151 -5 -113 -8 -129 -37 -188 -49 -100 -86 -108 -122 -28 -17 40
-20 61 -16 138 6 104 30 171 81 224 38 39 49 40 77 5z M1749 3560 c-133 -17
-220 -72 -259 -162 -39 -90 -12 -194 74 -286 138 -147 334 -133 506 37 163
161 193 283 85 346 -85 50 -282 82 -406 65z m305 -70 c77 -24 126 -64 126
-102 0 -47 -101 -179 -190 -250 -140 -111 -293 -110 -395 4 -55 61 -78 119
-73 188 7 92 56 141 178 176 69 21 267 11 354 -16z M1264 3516 c-65 -28 -84
-97 -39 -141 43 -44 129 -25 160 35 21 41 19 58 -14 91 -32 32 -59 35 -107 15z
m84 -38 c18 -18 15 -39 -10 -65 -23 -25 -67 -30 -86 -11 -17 17 -15 32 9 62
22 28 66 35 87 14z M313 3478 c-38 -42 -37 -95 1 -120 41 -28 96 14 96 72 0
64 -56 92 -97 48z m57 -47 c0 -21 -23 -44 -33 -34 -11 10 -8 38 5 51 14 14 28
6 28 -17z M756 3434 c-37 -36 -8 -114 42 -114 27 0 62 37 62 65 0 55 -67 87
-104 49z m59 -45 c0 -15 -7 -25 -17 -27 -13 -3 -18 3 -18 21 0 13 3 27 7 31
13 12 28 -1 28 -25z M226 3357 c-12 -9 -17 -23 -14 -47 3 -34 5 -35 43 -35 37
0 40 2 43 31 3 32 -18 64 -42 64 -7 0 -20 -6 -30 -13z M867 3322 c-39 -43 -8
-102 54 -102 40 0 52 7 68 38 12 23 1 58 -23 74 -22 15 -83 8 -99 -10z m81
-41 c-4 -20 -36 -27 -52 -11 -8 8 -6 15 7 25 23 17 49 9 45 -14z M2246 3318
c-33 -47 -10 -98 45 -98 32 0 69 31 69 58 0 34 -29 62 -65 62 -24 0 -39 -7
-49 -22z m71 -24 c7 -19 -20 -49 -36 -40 -12 8 -15 39 -4 49 12 12 33 7 40 -9z
M2472 3330 c-20 -9 -42 -45 -42 -71 0 -18 49 -59 70 -59 28 0 70 43 70 73 0
48 -50 77 -98 57z m53 -60 c0 -18 -6 -26 -23 -28 -27 -4 -40 22 -22 44 19 22
45 13 45 -16z M1100 3300 c-29 -29 -27 -90 3 -118 37 -35 79 -27 102 19 32 60
5 119 -55 119 -17 0 -39 -9 -50 -20z m78 -51 c4 -34 -22 -57 -43 -39 -16 13
-20 51 -8 64 16 16 48 1 51 -25z M2784 3295 c-20 -20 -25 -33 -22 -67 3 -37 7
-44 32 -53 25 -9 31 -6 57 23 34 37 38 81 11 105 -26 24 -49 21 -78 -8z m56
-39 c0 -30 -26 -54 -42 -38 -9 9 -9 18 0 37 15 32 42 33 42 1z M1320 3270
c-29 -29 -27 -84 5 -115 50 -51 125 -16 125 58 0 48 -28 77 -75 77 -22 0 -43
-8 -55 -20z m78 -32 c17 -17 15 -43 -4 -59 -31 -26 -70 25 -44 56 15 18 32 19
48 3z M301 3257 c-53 -27 -87 -158 -52 -200 20 -25 73 -21 99 6 25 27 44 104
36 147 -4 17 -16 37 -28 45 -25 18 -25 18 -55 2z m34 -96 c-1 -35 -6 -57 -19
-69 -16 -16 -18 -16 -31 2 -16 21 -12 52 12 99 21 42 38 28 38 -32z M740 3220
c-24 -24 -25 -48 -4 -78 13 -19 24 -22 57 -20 34 2 44 8 55 30 13 29 4 63 -22
80 -21 14 -66 8 -86 -12z m70 -26 c11 -12 10 -18 -3 -31 -8 -9 -23 -13 -31
-10 -19 8 -21 43 -3 50 20 9 24 8 37 -9z M2565 3183 c-68 -56 -91 -94 -74
-124 9 -18 17 -20 51 -15 95 15 185 86 173 136 -16 65 -73 66 -150 3z m102 -9
c3 -8 -1 -22 -8 -29 -20 -20 -129 -67 -129 -56 0 10 110 100 123 101 4 0 10
-7 14 -16z M935 3165 c-31 -30 -31 -40 1 -71 19 -20 31 -24 52 -19 58 14 81
65 44 98 -27 24 -69 21 -97 -8z m70 -31 c0 -22 -32 -31 -49 -14 -8 8 -6 15 9
26 24 18 40 13 40 -12z M2263 3180 c-89 -38 -238 -286 -269 -450 -29 -150 19
-219 133 -190 69 17 125 54 193 126 119 128 165 278 125 412 -23 77 -51 104
-111 108 -27 2 -59 0 -71 -6z m92 -36 c20 -8 50 -68 58 -117 25 -162 -124
-393 -285 -441 -53 -16 -84 -6 -99 31 -15 39 22 185 72 286 90 182 182 268
254 241z M1440 3110 c-22 -42 14 -78 67 -68 22 4 30 52 12 74 -18 21 -66 18
-79 -6z M2729 3081 c-57 -57 -27 -161 46 -161 47 0 75 37 75 101 0 86 -63 117
-121 60z m79 -45 c7 -61 -22 -101 -54 -75 -17 14 -18 62 -3 90 16 31 53 21 57
-15z M694 3090 c-34 -13 -64 -59 -64 -97 0 -75 96 -112 153 -59 50 47 48 114
-6 146 -35 22 -50 23 -83 10z m70 -46 c34 -34 6 -94 -44 -94 -33 0 -50 17 -50
51 0 48 62 76 94 43z M1241 3086 c-23 -28 -9 -69 31 -91 35 -18 40 -19 65 -5
38 21 44 71 11 94 -28 20 -92 21 -107 2z m77 -32 c12 -8 20 -20 17 -25 -9 -14
-39 -11 -61 6 -16 13 -17 16 -4 25 20 13 22 13 48 -6z M380 3038 c-42 -46 -14
-117 52 -133 22 -6 33 -1 58 23 34 34 37 50 15 91 -24 47 -89 57 -125 19z m90
-33 c6 -8 9 -23 5 -35 -5 -17 -13 -20 -38 -18 -32 3 -45 23 -33 54 7 18 50 18
66 -1z M945 3041 c-92 -24 -130 -76 -84 -114 22 -17 34 -19 119 -13 113 8 167
19 188 40 13 13 13 17 0 39 -25 37 -156 66 -223 48z m150 -56 c28 -11 23 -13
-71 -25 -110 -14 -148 -10 -123 15 34 33 125 38 194 10z M1951 3004 c-24 -31
-27 -76 -7 -93 8 -7 30 -11 48 -9 44 4 76 58 59 101 -15 38 -70 39 -100 1z
m69 -27 c0 -8 -9 -22 -20 -32 -18 -16 -20 -16 -26 -1 -3 9 -4 23 0 31 7 19 46
20 46 2z M1458 3000 c-24 -15 -23 -65 1 -89 43 -43 241 -94 286 -73 32 15 33
51 3 80 -66 61 -243 111 -290 82z m186 -71 c88 -43 95 -58 24 -48 -94 13 -196
58 -182 81 11 18 86 3 158 -33z M232 2990 c-25 -10 -52 -64 -52 -103 0 -41 36
-77 76 -77 48 0 70 14 83 52 15 43 4 94 -26 118 -28 22 -46 24 -81 10z m68
-49 c21 -41 0 -101 -36 -101 -21 0 -44 30 -44 57 0 52 58 84 80 44z M2519
2971 c-31 -31 -39 -77 -17 -99 24 -24 74 -14 102 19 31 36 33 69 8 92 -27 25
-60 21 -93 -12z m71 -30 c0 -18 -34 -51 -52 -51 -11 0 -10 28 2 51 14 25 50
25 50 0z M1260 2937 c-19 -9 -26 -22 -28 -49 -4 -48 32 -78 94 -78 92 0 114
83 34 125 -35 18 -67 19 -100 2z m94 -47 c14 -14 -2 -40 -24 -40 -46 0 -80 40
-47 54 15 6 59 -2 71 -14z M477 2885 c-92 -34 -169 -116 -214 -225 -27 -66
-24 -201 5 -256 30 -58 78 -103 140 -132 48 -22 64 -24 155 -20 122 5 172 24
246 93 64 60 91 127 91 225 0 133 -65 241 -182 299 -52 26 -72 31 -132 30 -39
0 -88 -7 -109 -14z m219 -54 c175 -83 219 -327 82 -458 -59 -57 -120 -78 -228
-77 -108 0 -156 17 -205 76 -47 55 -58 94 -53 183 5 93 28 147 92 213 91 96
198 117 312 63z M1826 2875 c-37 -34 -39 -104 -3 -142 23 -25 44 -28 80 -12
56 25 68 117 22 156 -34 30 -66 29 -99 -2z m72 -27 c14 -14 16 -57 3 -76 -4
-8 -19 -12 -32 -10 -19 2 -25 10 -27 34 -2 19 3 38 13 48 20 19 27 20 43 4z
M2608 2854 c-122 -87 -169 -292 -78 -339 70 -36 124 -6 174 97 45 91 59 201
32 243 -23 35 -78 34 -128 -1z m98 -38 c7 -28 -11 -122 -33 -178 -16 -39 -74
-98 -97 -98 -19 0 -45 32 -52 66 -10 49 30 135 86 188 55 52 86 59 96 22z
M909 2851 c-31 -25 -32 -83 -2 -113 57 -56 157 9 131 85 -18 49 -85 64 -129
28z m85 -27 c23 -22 20 -41 -8 -59 -50 -33 -92 26 -44 59 28 20 33 20 52 0z
M1128 2840 c-29 -18 -39 -46 -27 -73 11 -25 47 -47 74 -47 21 0 55 37 55 59 0
44 -65 83 -102 61z m60 -53 c2 -9 -4 -20 -13 -23 -20 -8 -50 19 -40 36 10 17
49 8 53 -13z M1495 2830 c-55 -22 -58 -72 -7 -106 62 -42 226 -45 266 -4 19
19 20 23 6 47 -29 51 -196 91 -265 63z m146 -46 c30 -9 60 -22 68 -29 11 -11
6 -15 -35 -21 -56 -8 -151 8 -173 31 -13 13 -12 15 10 24 35 14 69 13 130 -5z
M187 2752 c-22 -24 -21 -45 1 -65 35 -32 72 -14 72 33 0 48 -42 66 -73 32z
M1330 2737 c-35 -18 -38 -60 -6 -92 43 -43 116 -28 116 24 0 51 -65 91 -110
68z m55 -41 c24 -17 14 -46 -14 -39 -31 8 -48 32 -30 44 19 12 22 11 44 -5z
M1008 2690 c-29 -18 -23 -70 14 -114 31 -38 179 -141 268 -186 89 -46 190 -25
213 44 21 63 -32 116 -158 160 -39 13 -108 41 -155 61 -90 40 -154 52 -182 35z
m119 -56 c32 -14 94 -39 138 -55 44 -17 93 -35 109 -42 73 -28 111 -93 67
-117 -54 -29 -124 -4 -277 97 -162 106 -186 184 -37 117z M1871 2664 c-26 -33
-27 -56 -3 -77 24 -22 55 -21 75 1 21 23 22 51 1 80 -20 29 -48 28 -73 -4z
m49 -34 c0 -11 -7 -20 -15 -20 -15 0 -21 21 -8 33 12 13 23 7 23 -13z M2768
2663 c-26 -30 -31 -62 -14 -88 32 -48 96 -20 96 42 0 52 -51 81 -82 46z m42
-47 c0 -14 -5 -28 -10 -31 -13 -8 -24 20 -16 40 9 24 26 17 26 -9z M2350 2647
c-74 -58 -64 -187 14 -187 14 0 37 10 52 23 34 30 46 113 20 152 -18 27 -60
33 -86 12z m70 -62 c0 -27 -23 -76 -40 -85 -14 -7 -23 -6 -34 6 -20 19 -20 37
-1 74 21 40 46 54 63 33 6 -9 12 -22 12 -28z M1537 2622 c-32 -35 -16 -83 33
-101 73 -25 122 46 67 97 -29 27 -78 29 -100 4z m80 -38 c3 -9 0 -20 -8 -24
-17 -11 -49 6 -49 25 0 21 49 19 57 -1z M1738 2574 c-54 -29 -46 -88 16 -118
42 -20 59 -20 96 -1 54 28 49 90 -10 120 -36 19 -67 19 -102 -1z m87 -38 c24
-18 13 -46 -19 -46 -37 0 -56 10 -56 30 0 30 43 39 75 16z M932 2568 c-17 -17
-15 -74 4 -92 21 -22 31 -20 60 9 25 26 26 52 2 83 -13 15 -50 16 -66 0z m44
-54 c-4 -12 -10 -14 -17 -7 -5 5 -7 17 -3 27 4 12 10 14 17 7 5 -5 7 -17 3
-27z M1988 2486 c-19 -10 -23 -19 -23 -56 0 -39 4 -46 28 -58 24 -12 31 -11
51 2 30 19 37 46 21 83 -15 35 -43 46 -77 29z m46 -49 c8 -12 7 -20 -2 -29
-16 -16 -47 13 -38 37 7 19 25 16 40 -8z M2674 2490 c-51 -20 -134 -139 -134
-193 0 -34 29 -75 61 -86 54 -19 146 -14 168 8 50 50 52 210 4 263 -17 19 -63
23 -99 8z m70 -46 c23 -22 22 -160 -1 -186 -28 -31 -136 -19 -149 17 -14 35 8
88 56 136 52 52 69 58 94 33z M1023 2465 c-80 -35 -64 -135 30 -189 101 -58
246 -78 287 -41 11 10 20 23 20 28 0 51 -227 219 -293 217 -6 -1 -26 -7 -44
-15z m107 -50 c42 -22 180 -134 180 -146 0 -8 -23 -10 -67 -7 -73 4 -159 38
-200 77 -22 21 -31 70 -16 84 12 12 73 7 103 -8z M2482 2468 c-18 -18 -14 -63
8 -83 24 -22 65 -13 73 16 14 54 -45 103 -81 67z m48 -43 c0 -8 -4 -15 -10
-15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z M1628 2449 c-35 -20
-16 -82 27 -93 37 -9 65 9 65 43 0 49 -49 75 -92 50z m56 -44 c-1 -18 -34 -18
-34 0 0 10 7 15 18 13 9 -2 17 -8 16 -13z M2193 2440 c-53 -27 -148 -127 -173
-182 -62 -137 29 -279 159 -246 77 20 129 111 150 263 12 82 3 142 -23 164
-26 22 -70 22 -113 1z m81 -36 c32 -31 15 -187 -30 -275 -38 -77 -103 -101
-157 -58 -74 58 -49 177 59 281 30 28 85 62 111 68 1 0 9 -7 17 -16z M1811
2384 c-48 -61 -30 -202 35 -270 36 -39 52 -42 85 -15 22 18 24 27 24 103 -1
94 -15 154 -45 186 -29 31 -73 29 -99 -4z m73 -36 c31 -49 42 -181 19 -221 -8
-13 -35 16 -54 58 -29 64 -22 185 11 185 5 0 16 -10 24 -22z M2395 2390 c-27
-30 -55 -163 -57 -267 -1 -105 11 -135 68 -159 30 -12 39 -12 69 0 71 30 74
120 10 341 -29 102 -54 125 -90 85z m64 -160 c45 -169 40 -230 -19 -230 -59 0
-75 87 -45 245 16 86 23 110 29 104 3 -2 18 -56 35 -119z M854 2355 c-36 -55
25 -117 80 -81 28 18 34 52 16 87 -16 29 -75 26 -96 -6z m66 -20 c13 -16 6
-35 -15 -35 -18 0 -28 17 -21 35 7 19 20 19 36 0z M1588 2314 c-50 -27 -63
-90 -31 -145 35 -59 129 -65 158 -9 26 50 20 97 -19 136 -37 37 -65 42 -108
18z m77 -49 c29 -28 32 -61 8 -87 -22 -24 -39 -23 -68 7 -30 29 -32 54 -5 83
26 28 35 28 65 -3z M312 2245 c-91 -39 -70 -185 28 -185 47 0 80 34 87 89 10
74 -49 123 -115 96z m59 -35 c28 -16 27 -84 -3 -104 -12 -9 -26 -16 -30 -16
-17 0 -48 42 -48 65 0 25 31 65 51 65 6 0 19 -5 30 -10z M773 2231 c-64 -22
-121 -64 -129 -96 -15 -62 45 -88 242 -105 101 -8 138 -16 229 -50 121 -45
165 -49 213 -20 24 15 32 27 32 50 0 36 -16 46 -98 59 -73 12 -108 29 -188 92
-113 89 -192 108 -301 70z m158 -32 c19 -7 70 -39 114 -72 92 -68 144 -94 215
-103 54 -7 64 -19 26 -33 -30 -12 -83 0 -183 40 -63 25 -101 33 -198 41 -136
11 -209 27 -213 48 -3 18 52 56 105 76 47 16 90 17 134 3z M586 2218 c-15 -21
-9 -49 14 -63 18 -11 50 6 56 31 12 49 -41 74 -70 32z M1365 2195 c-67 -66 19
-155 104 -109 31 16 36 24 39 61 2 33 -1 44 -20 57 -35 25 -94 21 -123 -9z
m86 -15 c36 -20 17 -70 -26 -70 -45 0 -61 49 -22 68 28 14 25 14 48 2z M480
2160 c-74 -79 -105 -226 -58 -270 28 -26 40 -25 65 3 57 60 104 244 73 282
-19 23 -49 18 -80 -15z m50 -42 c0 -56 -62 -204 -80 -193 -24 15 -6 101 35
171 28 48 45 56 45 22z M1741 2121 c-25 -25 -17 -59 16 -72 32 -12 63 5 63 35
0 42 -51 65 -79 37z M2612 2090 c-74 -45 -93 -148 -51 -272 44 -126 116 -204
184 -196 50 5 60 39 63 231 4 184 1 208 -28 237 -28 28 -122 28 -168 0z m144
-37 c15 -16 16 -35 11 -189 -4 -94 -9 -178 -13 -187 -10 -28 -35 -19 -79 26
-83 87 -121 273 -66 331 35 38 117 48 147 19z M1877 2032 c-26 -28 -22 -70 8
-84 57 -26 129 32 99 80 -16 25 -85 28 -107 4z m68 -32 c0 -8 -10 -16 -22 -18
-22 -3 -32 16 -16 32 12 11 38 2 38 -14z M1648 2033 c-33 -5 -74 -45 -81 -79
-6 -35 8 -92 31 -123 71 -97 198 -96 248 1 51 99 -68 221 -198 201z m96 -57
c43 -18 66 -51 66 -97 0 -44 -36 -79 -79 -79 -59 0 -121 65 -121 126 0 59 60
81 134 50z M610 1978 c-83 -43 -138 -178 -111 -276 21 -78 70 -113 141 -97 43
9 306 191 357 246 32 36 35 82 6 94 -42 17 -194 46 -268 51 -71 5 -85 3 -125
-18z m195 -33 c71 -7 175 -34 175 -45 0 -14 -96 -89 -217 -171 -155 -105 -197
-106 -224 -6 -9 35 -8 51 7 95 32 95 98 147 174 137 14 -2 52 -7 85 -10z
M2222 1975 c-26 -22 -32 -34 -32 -65 0 -47 36 -94 84 -110 94 -31 146 78 74
155 -45 48 -85 55 -126 20z m92 -37 c36 -33 39 -92 6 -103 -23 -7 -75 18 -84
40 -11 30 -6 64 12 74 26 15 38 13 66 -11z M288 1965 c-9 -21 -8 -28 7 -45 31
-34 75 -20 75 25 0 48 -62 63 -82 20z M1092 1948 c-29 -29 -8 -63 46 -74 24
-5 32 -2 41 14 14 27 4 51 -26 63 -32 12 -47 11 -61 -3z M1366 1929 c-34 -40
-33 -71 5 -113 54 -62 129 -67 165 -11 14 22 15 32 5 65 -26 87 -124 120 -175
59z m112 -29 c32 -30 39 -70 17 -87 -25 -17 -34 -17 -72 7 -36 22 -52 62 -33
85 18 21 62 19 88 -5z M1997 1942 c-10 -10 -17 -31 -17 -45 0 -33 49 -67 98
-67 71 0 62 84 -13 116 -44 18 -49 18 -68 -4z m69 -46 c10 -8 16 -18 11 -22
-8 -8 -57 15 -57 28 0 13 24 9 46 -6z M2432 1854 c-47 -32 -14 -114 46 -114
37 0 52 17 52 56 0 23 -8 39 -26 53 -32 25 -43 26 -72 5z m57 -42 c6 -11 6
-23 0 -33 -8 -12 -13 -10 -29 10 -11 12 -17 27 -14 32 9 15 33 10 43 -9z
M1047 1846 c-85 -31 -287 -219 -331 -307 -46 -93 -33 -195 34 -272 102 -116
296 -115 530 3 119 60 278 182 325 250 35 50 43 111 21 146 -20 29 -88 63
-126 64 -49 0 -146 31 -235 76 -101 50 -162 61 -218 40z m213 -86 c65 -30 137
-55 190 -65 110 -22 128 -30 141 -58 31 -67 -140 -232 -346 -334 -232 -116
-423 -101 -492 37 -53 103 -20 184 135 330 118 111 189 155 237 145 17 -3 77
-28 135 -55z M371 1824 c-20 -15 -23 -23 -18 -62 8 -72 57 -102 97 -62 29 29
27 84 -5 115 -28 29 -42 31 -74 9z m57 -58 c5 -42 -13 -54 -33 -22 -20 30 -13
59 12 54 11 -2 19 -14 21 -32z M1913 1820 c-23 -9 -53 -58 -53 -85 0 -29 55
-75 90 -75 41 0 80 39 80 79 0 57 -66 102 -117 81z m58 -40 c28 -16 26 -68 -3
-79 -47 -18 -87 38 -53 73 19 19 29 20 56 6z M2100 1780 c-27 -27 -26 -75 2
-94 49 -34 108 -8 108 47 0 34 -32 67 -65 67 -14 0 -34 -9 -45 -20z m69 -34
c9 -11 8 -18 -5 -31 -15 -15 -19 -15 -32 -1 -17 17 -10 46 11 46 8 0 20 -6 26
-14z M2273 1720 c-13 -5 -23 -18 -23 -28 0 -14 29 -33 120 -76 70 -32 134 -56
153 -56 34 0 57 15 57 37 0 27 -63 83 -114 102 -64 24 -162 35 -193 21z m196
-70 c21 -10 44 -26 52 -36 13 -15 12 -16 -11 -10 -14 4 -56 23 -95 42 l-70 34
43 -5 c24 -3 61 -14 81 -25z M1723 1710 c-25 -10 -53 -58 -53 -90 0 -78 101
-92 144 -19 21 36 14 82 -17 104 -24 17 -42 18 -74 5z m63 -55 c4 -18 1 -32
-12 -46 -25 -28 -58 -21 -62 12 -6 52 62 83 74 34z M432 1628 c-29 -29 7 -82
49 -71 24 7 36 48 19 68 -15 18 -51 20 -68 3z M1996 1624 c-162 -35 -396 -195
-396 -271 0 -40 107 -139 200 -186 104 -51 186 -70 285 -65 181 10 305 123
305 279 0 117 -79 211 -207 244 -69 18 -97 18 -187 -1z m205 -49 c49 -17 90
-53 122 -104 29 -48 28 -146 -2 -195 -89 -143 -284 -172 -490 -74 -87 41 -197
134 -189 160 13 41 222 178 318 208 70 23 184 25 241 5z M2766 1574 c-25 -24
-20 -69 10 -93 34 -26 68 -27 94 -1 26 26 25 51 -1 84 -24 30 -78 36 -103 10z
m74 -34 c13 -24 5 -40 -19 -40 -28 0 -46 26 -31 45 17 21 37 19 50 -5z M536
1549 c-58 -46 -18 -179 54 -179 69 0 97 115 41 171 -35 34 -59 36 -95 8z m82
-52 c17 -36 4 -81 -26 -85 -32 -5 -60 57 -44 93 16 35 52 30 70 -8z M2420
1511 c-28 -53 1 -121 50 -121 57 0 76 74 33 123 -22 23 -70 22 -83 -2z m68
-54 c3 -21 -1 -27 -17 -27 -21 0 -37 32 -26 50 12 20 40 5 43 -23z M2605 1478
c-38 -30 -55 -76 -55 -153 0 -118 58 -205 137 -205 71 0 133 82 133 176 0 137
-131 248 -215 182z m122 -60 c64 -68 67 -166 8 -225 -38 -38 -53 -40 -88 -13
-56 44 -75 181 -34 244 26 39 74 36 114 -6z M1493 1375 c-29 -20 -38 -62 -18
-91 32 -50 105 -16 105 49 0 55 -41 74 -87 42z m47 -44 c0 -24 -18 -37 -32
-23 -8 8 -7 16 2 27 17 21 30 19 30 -4z M2405 1267 c-34 -29 -45 -96 -21 -132
22 -34 83 -35 114 -2 33 35 45 76 31 109 -21 52 -79 64 -124 25z m85 -32 c11
-13 10 -22 -3 -50 -13 -28 -22 -35 -46 -35 -26 0 -41 14 -41 39 0 5 9 20 21
35 23 29 50 34 69 11z M1379 1226 c-109 -39 -212 -145 -225 -232 -18 -119 113
-249 273 -269 40 -6 54 -3 83 17 45 30 77 94 91 187 28 187 -28 312 -139 311
-26 -1 -63 -7 -83 -14z m134 -46 c39 -31 50 -79 44 -189 -6 -113 -18 -158 -53
-196 -23 -25 -30 -27 -78 -22 -87 9 -178 65 -212 129 -19 36 -18 92 2 134 35
74 168 162 245 163 15 1 38 -8 52 -19z M754 1165 c-21 -21 -24 -31 -19 -58 13
-62 98 -117 145 -94 59 29 43 115 -29 155 -50 28 -66 28 -97 -3z m97 -44 c51
-51 28 -99 -31 -64 -53 31 -66 93 -20 93 12 0 35 -13 51 -29z M1095 1165 c-28
-27 -31 -43 -12 -69 29 -40 117 -3 117 49 0 49 -64 62 -105 20z m63 -27 c-5
-16 -48 -24 -48 -10 0 11 17 20 38 21 8 1 12 -5 10 -11z M1637 1172 c-50 -56
15 -140 87 -112 22 8 26 16 26 48 0 67 -73 108 -113 64z m74 -43 c8 -16 8 -24
0 -32 -16 -16 -45 3 -49 32 -5 29 33 29 49 0z M1827 1092 c-23 -25 -21 -58 3
-82 26 -26 42 -25 68 3 26 28 27 45 6 75 -18 27 -55 29 -77 4z m53 -36 c0 -8
-4 -17 -9 -21 -12 -7 -24 12 -16 25 9 15 25 12 25 -4z M2179 1095 c-30 -16
-40 -41 -28 -73 12 -32 71 -31 104 3 30 29 31 46 7 68 -22 20 -48 21 -83 2z
m49 -37 c-3 -7 -15 -15 -28 -16 -21 -3 -22 -2 -11 12 16 19 44 21 39 4z M2576
1089 c-28 -22 -35 -66 -14 -87 21 -21 65 -14 87 14 25 32 27 57 5 78 -21 22
-46 20 -78 -5z m54 -23 c0 -16 -14 -36 -26 -36 -14 0 -19 22 -7 33 7 8 33 10
33 3z M993 1090 c-12 -5 -26 -18 -32 -29 -25 -45 -3 -140 34 -155 74 -28 128
31 105 116 -16 56 -62 86 -107 68z m49 -47 c28 -25 22 -103 -8 -103 -34 0 -58
82 -32 108 15 15 18 15 40 -5z M2367 1066 c-120 -43 -219 -164 -203 -249 22
-114 145 -174 233 -114 68 45 143 191 143 278 0 32 -6 47 -29 70 -33 33 -79
38 -144 15z m112 -42 c20 -15 23 -22 18 -59 -15 -107 -113 -245 -173 -245 -85
1 -141 100 -100 178 28 53 105 111 176 133 39 12 54 10 79 -7z M2690 1032
c-80 -83 -123 -207 -85 -245 27 -27 46 -20 100 36 89 92 129 202 87 240 -30
27 -53 20 -102 -31z m70 -29 c0 -41 -94 -183 -121 -183 -28 0 31 130 84 188
27 29 37 28 37 -5z M1975 1044 c-36 -18 -54 -40 -101 -122 -19 -34 -64 -96
-99 -137 -73 -86 -81 -105 -65 -145 40 -97 191 -42 351 128 53 56 69 80 79
120 29 124 -61 210 -165 156z m104 -50 c47 -60 18 -138 -90 -238 -87 -80 -186
-133 -218 -117 -34 19 -24 49 38 117 32 36 75 95 95 133 40 77 94 131 131 131
14 0 32 -11 44 -26z M1696 1005 c-20 -21 -14 -63 12 -83 44 -34 108 -26 118
14 14 54 -90 109 -130 69z m74 -40 c7 -9 10 -19 6 -22 -8 -9 -38 9 -44 25 -5
17 23 15 38 -3z M1082 858 c-33 -33 7 -98 59 -98 50 0 60 64 16 95 -26 18 -59
19 -75 3z m59 -44 c12 -14 11 -16 -5 -13 -11 2 -21 10 -24 17 -5 17 13 15 29
-4z M2485 748 c-38 -29 -56 -75 -42 -105 21 -47 81 -37 129 21 20 24 23 77 6
94 -19 19 -63 14 -93 -10z m65 -31 c0 -22 -31 -57 -51 -57 -27 0 -25 35 3 54
27 19 48 21 48 3z M1541 704 c-25 -32 -25 -37 -6 -73 13 -25 39 -40 71 -41 22
0 54 41 54 70 0 65 -79 94 -119 44z m77 -42 c4 -28 -24 -40 -45 -19 -21 21 -9
49 19 45 15 -2 24 -11 26 -26z M2080 713 c-24 -9 -52 -36 -61 -60 -20 -54 41
-111 107 -99 32 7 84 55 84 79 -1 63 -66 103 -130 80z m86 -60 c13 -50 -62
-85 -100 -47 -20 19 -20 24 -1 51 27 39 91 36 101 -4z"></path></g></g></svg>`);function n3(t,o){let c=f2(o,"class",3,"");var s=o3();R(()=>u1(s,0,We(c()))),_(t,s)}var s3=$t(`<svg viewBox="0 0 551.000000 315.000000" fill="currentColor" aria-hidden="true"><g transform="translate(551, 0) rotate(90)"><g transform="translate(0.000000,551.000000) scale(0.100000,-0.100000)"><path d="M1838 5439 c-180 -31 -309 -73 -484 -159 -298 -145 -579 -383 -749
-636 -63 -94 -114 -142 -235 -222 -145 -97 -190 -147 -190 -212 0 -52 18 -70
107 -112 47 -22 101 -49 120 -60 l34 -20 -60 -54 c-173 -157 -277 -446 -311
-868 -26 -325 -5 -615 71 -1006 84 -431 259 -813 498 -1086 259 -297 586 -476
1031 -565 101 -21 145 -24 355 -24 221 0 248 2 335 24 234 59 419 186 524 359
41 68 83 188 102 292 19 105 18 451 -3 771 -33 522 -21 1086 32 1534 8 66 23
197 34 290 47 391 54 478 54 665 1 451 -101 727 -338 907 -225 171 -586 243
-927 182z m467 -84 c211 -37 369 -117 493 -249 77 -83 114 -146 151 -261 52
-158 65 -257 65 -495 1 -209 -4 -270 -49 -630 -88 -700 -107 -1176 -72 -1810
33 -608 32 -721 -13 -888 -107 -393 -490 -583 -1045 -518 -316 38 -586 131
-813 282 -175 117 -370 318 -484 500 -286 457 -439 1225 -373 1869 39 387 127
615 291 756 127 109 112 149 -94 249 -51 24 -92 49 -92 55 0 25 37 58 147 133
145 98 190 141 273 261 265 386 737 680 1210 754 69 11 325 6 405 -8z M1793
5271 c-28 -5 -71 -19 -95 -33 -38 -20 -43 -28 -43 -58 0 -27 6 -37 31 -52 83
-48 232 -44 309 10 32 23 41 35 43 64 3 30 -1 40 -23 54 -30 20 -142 27 -222
15z m191 -47 c26 -10 18 -31 -21 -56 -33 -20 -51 -23 -128 -23 -71 0 -97 4
-119 18 -27 18 -28 19 -8 33 11 8 38 18 59 23 44 10 194 14 217 5z M2335 5215
c-32 -31 -30 -67 6 -143 78 -161 354 -317 429 -242 49 49 11 150 -99 261 -86
86 -180 139 -260 147 -44 4 -53 1 -76 -23z m175 -58 c79 -39 178 -133 214
-204 32 -65 33 -80 1 -95 -21 -10 -35 -7 -83 12 -80 33 -123 62 -185 123 -76
77 -122 185 -84 200 22 10 70 -3 137 -36z M1506 5099 c-61 -72 -6 -165 79
-133 20 8 45 56 45 87 0 13 -9 36 -21 51 -29 37 -70 35 -103 -5z m73 -27 c12
-22 -7 -65 -31 -70 -24 -5 -33 34 -14 63 20 30 32 31 45 7z M2014 5092 c-110
-72 -174 -160 -174 -240 0 -54 35 -103 86 -121 38 -13 44 -13 80 6 94 48 182
246 154 345 -18 61 -62 64 -146 10z m99 -71 c-2 -74 -42 -168 -92 -219 -73
-72 -158 -13 -130 91 17 65 173 206 214 193 6 -2 9 -31 8 -65z M1315 5006
c-17 -7 -45 -30 -63 -50 -28 -32 -32 -44 -32 -91 0 -46 4 -56 26 -74 38 -30
71 -26 104 9 36 39 72 133 64 166 -6 24 -39 54 -59 54 -5 -1 -24 -7 -40 -14z
m55 -57 c0 -29 -35 -101 -60 -124 -22 -20 -22 -20 -37 0 -22 30 -10 85 27 118
37 33 70 36 70 6z M2228 4891 c-63 -32 -99 -63 -129 -109 -36 -56 -40 -125
-10 -142 55 -29 127 4 229 105 78 78 91 115 54 148 -25 23 -97 21 -144 -2z
m120 -39 c6 -18 -116 -133 -172 -162 -52 -28 -73 -20 -62 25 9 37 84 115 131
137 44 20 96 20 103 0z M1578 4863 c-58 -36 -62 -95 -7 -127 65 -38 159 3 159
70 0 63 -88 96 -152 57z m98 -37 c30 -23 7 -50 -45 -54 -51 -4 -67 21 -32 50
28 22 51 23 77 4z M842 4733 c-23 -9 -70 -89 -87 -147 -19 -66 -10 -106 24
-106 45 0 125 101 145 182 10 43 -9 78 -41 77 -16 0 -34 -3 -41 -6z m18 -116
c-34 -66 -70 -98 -70 -63 0 23 38 100 62 126 l23 25 3 -23 c2 -13 -6 -42 -18
-65z M2581 4703 c-28 -35 -21 -63 34 -124 75 -84 133 -111 154 -71 11 21 -4
113 -25 154 -25 48 -54 68 -100 68 -34 0 -47 -5 -63 -27z m99 -31 c20 -16 56
-119 46 -130 -7 -7 -105 89 -111 109 -13 40 26 53 65 21z M1083 4676 c-65 -31
-128 -88 -208 -191 -119 -152 -141 -221 -85 -268 77 -65 416 -36 513 44 49 41
77 118 76 212 -1 84 -14 126 -51 166 -62 65 -154 79 -245 37z m208 -64 c54
-60 62 -172 20 -268 -23 -51 -70 -78 -175 -101 -84 -18 -260 -21 -298 -5 -55
23 -31 89 81 232 116 147 171 182 275 177 62 -3 71 -6 97 -35z M2329 4674
c-51 -21 -73 -65 -73 -144 0 -150 117 -241 237 -184 121 58 93 249 -46 319
-58 29 -69 30 -118 9z m100 -49 c61 -31 110 -119 96 -173 -10 -39 -43 -71 -83
-78 -77 -15 -142 60 -142 163 0 89 55 127 129 88z M1843 4591 c-74 -21 -262
-113 -351 -171 -69 -46 -84 -75 -58 -115 36 -55 212 -164 332 -206 84 -29 215
-36 285 -16 72 21 139 80 168 147 25 57 30 151 12 216 -14 52 -74 122 -125
145 -53 24 -178 24 -263 0z m268 -56 c60 -43 84 -94 84 -180 0 -180 -136 -274
-337 -232 -130 26 -388 168 -388 213 0 31 240 163 383 210 103 35 199 30 258
-11z M673 4429 c-42 -15 -124 -148 -142 -230 -10 -46 -1 -79 24 -79 46 0 152
171 162 262 6 50 -5 62 -44 47z m-47 -165 c-38 -75 -58 -94 -37 -33 15 45 62
122 68 115 4 -3 -11 -40 -31 -82z M2734 4396 c-18 -8 -36 -27 -44 -46 -12 -28
-11 -36 5 -66 23 -42 188 -204 208 -204 47 0 59 87 27 192 -34 112 -111 161
-196 124z m93 -46 c37 -22 59 -59 68 -115 3 -22 9 -53 12 -69 7 -40 -4 -33
-97 58 -85 84 -98 114 -57 134 31 15 38 14 74 -8z M2497 4174 c-69 -37 5 -131
112 -142 61 -5 81 7 81 52 0 76 -118 131 -193 90z m125 -55 c53 -38 29 -58
-41 -34 -61 20 -80 39 -54 54 22 14 58 6 95 -20z M789 4125 c-33 -18 -59 -57
-59 -89 0 -37 52 -76 102 -76 97 0 154 95 93 155 -28 29 -93 34 -136 10z m115
-47 c23 -38 -42 -90 -91 -72 -41 14 -44 57 -6 78 35 20 83 16 97 -6z M2764
4042 c-53 -35 -41 -159 22 -217 34 -31 93 -34 118 -6 46 50 23 173 -38 211
-33 20 -81 26 -102 12z m79 -53 c37 -28 53 -93 32 -125 -21 -32 -38 -30 -69 6
-30 36 -42 90 -27 119 15 26 31 27 64 0z M2383 4025 c-77 -21 -129 -51 -179
-101 -105 -104 -114 -260 -17 -300 39 -17 51 -15 188 24 165 46 230 84 265
152 42 82 16 169 -60 207 -60 30 -132 36 -197 18z m178 -58 c48 -32 64 -70 50
-117 -14 -47 -73 -102 -132 -123 -95 -34 -217 -67 -247 -67 -100 0 -94 137 10
238 89 86 244 119 319 69z M1364 4014 c-112 -27 -164 -97 -148 -201 12 -78 72
-119 137 -92 70 28 217 190 217 238 0 62 -85 85 -206 55z m151 -38 c17 -13 18
-15 3 -37 -8 -13 -49 -59 -90 -101 -65 -68 -79 -78 -110 -78 -42 0 -58 27 -58
95 0 64 29 93 116 116 85 22 115 23 139 5z M1830 3995 c-86 -24 -149 -81 -135
-124 23 -73 226 -69 315 6 43 35 42 86 -1 108 -44 23 -116 27 -179 10z m158
-47 c19 -19 15 -25 -34 -54 -56 -33 -167 -45 -199 -21 -17 13 -18 17 -5 33 27
32 91 54 161 54 37 0 70 -5 77 -12z M910 3909 c-59 -24 -82 -86 -41 -109 54
-29 158 3 176 54 8 24 6 31 -14 47 -25 21 -80 24 -121 8z m90 -42 c0 -27 -91
-50 -105 -27 -7 12 49 39 83 40 12 0 22 -6 22 -13z M510 3753 c-51 -57 -92
-153 -88 -205 3 -38 6 -43 30 -46 57 -7 178 142 178 220 0 76 -66 93 -120 31z
m76 -27 c3 -8 -2 -31 -11 -50 -18 -38 -91 -126 -105 -126 -19 0 33 133 68 173
18 21 41 22 48 3z M1843 3759 c-70 -34 -79 -116 -16 -140 96 -36 202 81 127
140 -34 26 -58 26 -111 0z m94 -46 c9 -22 -31 -53 -68 -53 -40 0 -50 27 -20
52 29 23 79 24 88 1z M2678 3709 c-26 -15 -23 -33 28 -135 41 -82 47 -101 51
-179 6 -91 19 -113 50 -82 54 53 20 296 -51 372 -35 37 -49 41 -78 24z m72
-90 c31 -59 20 -67 -12 -8 -16 27 -24 49 -18 49 5 0 19 -18 30 -41z M808 3683
c-75 -48 -75 -200 -1 -265 74 -66 252 -61 325 9 115 110 -5 261 -217 270 -64
3 -86 0 -107 -14z m221 -53 c103 -45 134 -117 73 -171 -58 -52 -174 -63 -242
-22 -36 21 -70 86 -70 132 0 23 9 42 31 63 29 30 33 31 94 25 36 -3 87 -16
114 -27z M1370 3643 c-93 -22 -121 -51 -82 -86 24 -22 132 -22 262 -2 100 16
127 32 110 65 -21 40 -168 52 -290 23z m194 -30 c9 -9 -120 -31 -184 -32 -37
0 -42 1 -26 11 35 20 195 36 210 21z M2450 3606 c-143 -40 -215 -148 -165
-246 30 -58 67 -62 224 -24 136 34 178 55 197 101 19 45 11 85 -28 128 -46 53
-130 68 -228 41z m179 -53 c54 -41 54 -110 -1 -136 -18 -8 -82 -27 -142 -42
-121 -29 -147 -26 -167 19 -30 66 43 147 158 176 54 13 121 5 152 -17z M560
3522 c-44 -22 -83 -79 -112 -162 -31 -88 -31 -223 0 -292 43 -97 132 -98 188
-3 61 104 85 334 44 414 -13 26 -30 43 -51 50 -18 6 -32 11 -33 11 -1 0 -17
-8 -36 -18z m77 -59 c14 -22 18 -47 17 -125 -3 -211 -97 -368 -159 -265 -17
26 -20 50 -20 137 1 119 23 195 75 250 35 37 64 38 87 3z M1725 3514 c-122
-25 -209 -76 -240 -140 -10 -22 -21 -64 -23 -96 -8 -102 68 -222 180 -283 45
-25 64 -29 129 -30 67 0 84 4 150 37 107 53 257 207 289 299 36 102 -56 175
-263 209 -61 10 -182 12 -222 4z m326 -73 c92 -29 119 -52 119 -101 0 -29 -10
-51 -43 -96 -55 -74 -166 -177 -221 -204 -150 -72 -300 -19 -378 133 -16 32
-19 54 -16 108 3 59 8 72 33 100 32 33 92 67 140 80 17 4 91 7 165 5 104 -2
150 -8 201 -25z M295 3435 c-29 -28 -34 -85 -9 -109 45 -45 121 6 110 74 -10
61 -59 78 -101 35z m53 -56 c-4 -27 -23 -36 -32 -14 -8 22 13 60 26 47 5 -5 8
-20 6 -33z M855 3265 c-14 -13 -25 -31 -25 -40 0 -27 46 -65 80 -65 37 0 70
31 70 65 0 61 -80 86 -125 40z m74 -29 c14 -17 -9 -39 -33 -30 -19 7 -21 30
-3 37 20 9 24 8 36 -7z M1319 3250 c-23 -14 -42 -65 -35 -95 3 -13 16 -34 28
-45 62 -58 152 19 118 101 -19 45 -70 63 -111 39z m69 -79 c-4 -35 -42 -41
-59 -10 -10 20 -9 25 11 41 28 23 52 7 48 -31z M262 3198 c-46 -50 -58 -152
-22 -188 24 -24 48 -25 79 -4 47 34 68 145 35 192 -20 29 -64 29 -92 0z m58
-42 c14 -37 -10 -111 -35 -111 -17 0 -20 7 -19 42 0 36 25 93 39 93 3 0 10
-11 15 -24z M2556 3144 c-90 -76 -103 -134 -31 -134 43 0 147 51 169 82 23 33
20 74 -6 92 -38 27 -64 19 -132 -40z m105 0 c12 -14 9 -20 -16 -40 -33 -26
-115 -58 -115 -44 0 5 20 23 44 41 25 17 47 38 50 45 7 19 21 18 37 -2z M2236
3137 c-43 -24 -129 -131 -171 -211 -53 -101 -87 -208 -92 -293 -5 -77 -4 -82
20 -107 34 -34 71 -42 126 -27 138 37 281 198 317 358 46 209 -61 359 -200
280z m116 -36 c31 -25 48 -81 48 -158 0 -176 -152 -372 -317 -407 -25 -6 -36
-3 -52 13 -27 27 -27 75 -2 161 44 151 105 264 191 352 62 64 90 72 132 39z
M881 3000 c-110 -50 -90 -120 34 -120 84 1 205 18 221 31 37 31 6 69 -75 93
-72 21 -127 20 -180 -4z m180 -42 l34 -12 -30 -8 c-54 -14 -192 -22 -199 -10
-21 35 118 57 195 30z M1455 2970 c-88 -35 -41 -111 90 -148 l60 -17 -72 -6
c-79 -6 -113 -25 -113 -64 0 -30 29 -54 86 -71 94 -28 219 -11 235 33 11 31
-7 50 -76 78 l-60 26 48 -7 c53 -7 97 13 97 44 0 36 -81 89 -186 122 -72 22
-79 23 -109 10z m165 -79 c86 -43 93 -51 44 -51 -66 0 -204 53 -204 78 0 24
86 10 160 -27z m10 -151 c46 -13 66 -27 56 -37 -12 -13 -137 -9 -178 6 -40 13
-50 36 -20 45 23 6 98 -1 142 -14z M1250 2913 c-52 -20 -66 -75 -27 -110 28
-26 69 -33 113 -21 34 9 50 36 42 74 -7 36 -89 73 -128 57z m75 -56 c24 -18
11 -37 -24 -37 -33 0 -67 23 -57 38 10 16 58 15 81 -1z M460 2881 c-124 -38
-211 -137 -245 -277 -28 -117 2 -223 85 -298 66 -59 100 -70 220 -71 93 0 112
3 160 26 76 35 124 80 154 142 85 178 1 399 -177 466 -59 21 -147 27 -197 12z
m177 -52 c78 -30 146 -99 167 -170 20 -67 20 -153 0 -211 -58 -170 -329 -235
-472 -112 -59 50 -86 121 -79 209 6 92 34 154 99 218 85 84 178 106 285 66z
M1801 2836 c-57 -60 -27 -156 48 -156 43 0 67 20 81 69 25 87 -69 151 -129 87z
m87 -48 c7 -58 -48 -95 -67 -45 -14 38 10 80 43 75 14 -2 22 -12 24 -30z
M2609 2820 c-51 -33 -110 -113 -129 -174 -7 -21 -10 -61 -7 -89 5 -61 39 -97
90 -97 56 0 92 32 134 116 35 71 38 85 38 160 0 46 -5 88 -10 93 -26 26 -69
23 -116 -9z m91 -70 c0 -136 -117 -299 -170 -235 -50 60 14 215 114 276 38 23
56 10 56 -41z M966 2654 c-47 -46 5 -122 144 -212 118 -77 196 -112 248 -112
112 0 158 92 83 164 -17 16 -83 49 -157 78 -285 111 -289 112 -318 82z m169
-71 c39 -17 105 -43 149 -58 98 -36 140 -63 144 -95 4 -42 -12 -55 -65 -54
-56 1 -117 29 -240 111 -91 59 -146 119 -123 133 16 10 45 2 135 -37z M1718
2554 c-31 -16 -46 -58 -31 -83 5 -9 26 -24 47 -35 47 -23 100 -15 122 20 23
34 3 81 -42 100 -42 17 -62 17 -96 -2z m96 -57 c8 -14 8 -20 -4 -27 -34 -22
-89 3 -77 34 9 23 66 18 81 -7z M2665 2458 c-35 -19 -86 -72 -105 -108 -58
-115 -16 -183 115 -183 67 0 101 20 114 70 22 78 5 192 -32 218 -25 18 -64 19
-92 3z m75 -54 c6 -14 10 -56 10 -93 0 -88 -16 -106 -89 -99 -62 6 -81 21 -81
63 0 53 86 155 132 155 11 0 23 -11 28 -26z M953 2415 c-30 -30 -34 -40 -29
-66 12 -62 65 -107 171 -145 70 -26 171 -32 206 -14 25 14 25 54 -1 90 -25 35
-129 114 -192 146 -69 35 -112 32 -155 -11z m149 -31 c35 -18 147 -109 165
-134 12 -18 12 -21 -2 -26 -53 -21 -218 32 -270 86 -66 69 11 122 107 74z
M2175 2421 c-53 -24 -140 -118 -170 -183 -41 -88 -29 -163 34 -223 27 -25 40
-30 84 -30 38 0 61 6 84 23 96 68 149 354 76 412 -32 25 -56 25 -108 1z m98
-69 c10 -48 -13 -181 -41 -237 -28 -58 -62 -85 -107 -85 -47 0 -77 24 -95 77
-21 60 25 161 106 233 74 65 126 69 137 12z M1791 2364 c-55 -70 -27 -231 51
-287 78 -57 121 49 84 206 -23 100 -89 139 -135 81z m74 -37 c35 -54 42 -217
9 -217 -7 0 -25 20 -39 43 -51 88 -23 254 30 174z M2371 2362 c-19 -36 -43
-149 -48 -232 -6 -97 6 -151 40 -175 24 -17 89 -20 117 -5 21 11 40 60 40 106
0 60 -58 283 -81 311 -16 19 -57 16 -68 -5z m79 -176 c27 -104 32 -141 25
-162 -13 -35 -35 -49 -68 -40 -42 10 -54 66 -38 174 15 108 31 173 40 167 4
-2 23 -65 41 -139z M1549 2281 c-49 -50 -38 -132 23 -165 64 -35 127 1 135 77
5 43 3 49 -30 82 -45 45 -86 47 -128 6z m104 -43 c28 -38 15 -82 -27 -86 -58
-7 -91 69 -43 103 29 20 45 16 70 -17z M753 2233 c-69 -20 -133 -75 -133 -113
0 -58 43 -75 230 -91 105 -10 141 -17 230 -51 73 -27 122 -40 159 -40 49 -1
58 3 83 31 23 26 26 35 18 52 -13 24 -37 34 -105 44 -63 9 -103 30 -193 99
-109 86 -176 102 -289 69z m161 -40 c27 -10 67 -34 90 -53 91 -79 147 -107
249 -125 39 -6 48 -19 21 -29 -29 -11 -74 -6 -126 15 -136 53 -167 61 -283 69
-129 10 -200 27 -200 49 0 20 45 51 106 72 68 23 82 23 143 2z M483 2177 c-80
-44 -138 -231 -89 -286 43 -47 81 -16 127 102 35 93 37 161 4 183 -16 10 -25
10 -42 1z m23 -79 c-9 -54 -57 -170 -73 -176 -19 -6 -17 70 2 116 20 46 57
102 69 102 5 0 6 -19 2 -42z M2627 2076 c-20 -7 -43 -19 -51 -25 -46 -38 -59
-152 -30 -252 49 -166 187 -267 234 -171 10 19 15 84 18 213 4 184 4 186 -20
213 -29 34 -94 43 -151 22z m118 -47 c6 -6 9 -81 8 -191 -3 -216 -10 -234 -72
-182 -41 35 -98 151 -107 220 -8 68 8 129 38 145 53 29 109 32 133 8z M1600
2007 c-38 -19 -64 -75 -56 -119 14 -76 96 -148 169 -148 63 0 127 62 127 123
0 102 -147 191 -240 144z m114 -41 c51 -21 76 -54 76 -98 0 -49 -28 -78 -75
-78 -48 0 -82 18 -106 56 -56 92 5 162 105 120z M618 1991 c-82 -27 -148 -130
-148 -233 0 -109 48 -165 133 -156 73 8 375 223 397 282 17 46 -4 59 -132 85
-118 24 -215 33 -250 22z m265 -67 c34 -9 66 -20 70 -24 12 -11 -75 -83 -206
-171 -134 -90 -156 -98 -193 -75 -70 47 -50 197 37 270 33 28 35 29 132 23 54
-4 126 -14 160 -23z M1970 1920 c-26 -26 -25 -32 6 -69 44 -52 134 -51 134 2
0 39 -59 87 -106 87 -8 0 -23 -9 -34 -20z m88 -58 c2 -7 -3 -12 -11 -12 -17 0
-49 34 -40 43 8 8 45 -15 51 -31z M1045 1848 c-64 -14 -248 -169 -335 -280
-53 -68 -63 -164 -26 -243 48 -101 124 -144 256 -145 185 0 400 98 576 262
106 99 132 178 77 230 -32 29 -67 42 -173 63 -44 9 -115 35 -175 63 -114 55
-144 63 -200 50z m180 -89 c74 -36 131 -56 202 -70 105 -22 137 -36 145 -67
24 -89 -218 -287 -450 -368 -62 -22 -96 -28 -172 -28 -87 -1 -99 1 -142 27
-64 37 -101 100 -101 172 0 78 48 147 192 272 151 132 175 137 326 62z M2260
1703 c-28 -6 -40 -20 -33 -39 7 -18 247 -124 281 -124 96 0 44 111 -67 144
-57 17 -146 26 -181 19z m174 -63 c53 -20 85 -45 73 -57 -4 -3 -44 13 -89 35
-89 44 -79 57 16 22z M1930 1602 c-108 -36 -260 -131 -325 -204 -40 -44 -40
-60 3 -116 53 -69 212 -160 320 -183 82 -17 216 -7 278 20 172 75 220 292 93
419 -59 60 -102 76 -214 79 -77 2 -113 -1 -155 -15z m241 -38 c94 -28 159
-113 159 -209 0 -50 -44 -131 -90 -164 -50 -36 -130 -61 -196 -61 -120 0 -294
74 -381 162 -57 58 -56 61 39 133 179 135 330 180 469 139z M2583 1456 c-50
-37 -67 -168 -34 -257 25 -66 45 -87 93 -100 32 -8 46 -7 76 8 104 51 121 215
33 314 -33 38 -42 42 -91 46 -39 3 -61 0 -77 -11z m117 -46 c38 -27 60 -78 60
-140 0 -164 -146 -178 -180 -17 -26 129 39 215 120 157z M1387 1229 c-88 -21
-205 -111 -238 -184 -22 -48 -24 -113 -6 -158 32 -76 180 -167 270 -167 69 0
101 20 132 84 49 100 53 303 8 365 -43 56 -98 76 -166 60z m113 -67 c69 -70
46 -335 -34 -387 -35 -24 -95 -14 -170 28 -156 87 -164 210 -20 319 98 73 176
87 224 40z M957 1080 c-36 -29 -44 -79 -21 -127 25 -51 63 -69 102 -49 35 18
42 33 42 89 0 44 -20 77 -57 96 -30 15 -36 14 -66 -9z m76 -63 c19 -59 -25
-109 -53 -58 -11 22 -13 74 -3 85 15 15 47 0 56 -27z M2339 1046 c-101 -41
-170 -106 -189 -177 -37 -136 117 -254 230 -176 96 65 171 254 131 330 -27 51
-85 59 -172 23z m119 -32 c33 -23 29 -77 -13 -160 -67 -132 -121 -167 -195
-129 -55 28 -76 105 -45 165 25 49 107 105 195 134 26 8 35 6 58 -10z M2677
1017 c-47 -47 -107 -156 -107 -194 0 -40 18 -63 49 -63 57 0 174 159 175 237
0 74 -54 84 -117 20z m73 -29 c0 -36 -96 -178 -121 -178 -31 0 20 117 76 173
34 33 45 34 45 5z M1944 1031 c-36 -22 -60 -54 -97 -127 -14 -28 -48 -75 -74
-105 -103 -114 -111 -137 -69 -186 20 -23 32 -28 68 -27 55 1 106 28 202 104
123 97 175 198 146 284 -23 72 -107 99 -176 57z m109 -34 c25 -17 35 -66 24
-110 -16 -63 -143 -188 -245 -241 -18 -9 -48 -16 -65 -14 -54 5 -48 38 22 115
34 37 77 97 96 133 41 76 51 90 85 113 29 20 60 22 83 4z M1670 991 c-15 -29
-12 -45 13 -69 33 -31 83 -39 107 -17 27 24 25 47 -6 79 -34 33 -97 37 -114 7z
m74 -27 c18 -7 22 -34 5 -34 -17 0 -49 20 -49 30 0 11 21 13 44 4z"></path></g></g></svg>`);function l3(t,o){let c=f2(o,"class",3,"");var s=s3();R(()=>u1(s,0,We(c()))),_(t,s)}var i3=$t('<circle cx="100" cy="100" fill="none" stroke-width="18" stroke-linecap="butt" transform="rotate(-90 100 100)" class="transition-all duration-300"></circle>'),c3=E('<span class="flex items-center gap-1 text-xs text-base-content/50 tabular-nums"><span class="inline-block w-2 h-2 rounded-full flex-shrink-0"></span> </span>'),d3=E('<div class="flex flex-wrap justify-center gap-x-3 gap-y-0.5 mt-1"></div>'),u3=E('<button type="button"> </button>'),m3=E('<div class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full flex-shrink-0"></span> <span class="text-xs text-base-content/70 flex-1 min-w-0 truncate"> </span> <div class="flex items-center gap-2 flex-1"><input type="range" min="0" max="100" step="1" class="range range-sm range-secondary flex-1"/> <input type="number" min="0" max="100" step="1" class="input input-xs w-14 text-right tabular-nums"/> <span class="text-xs text-base-content/70">%</span></div></div>'),p3=E('<button type="button" class="btn btn-xs btn-ghost text-secondary border border-secondary/30"> </button>'),v3=E('<div class="mt-3 space-y-2"></div> <div class="flex items-center justify-between mt-2"><span class="text-xs text-base-content/50"> <span> </span></span> <!></div>',1),b3=E('<div class="px-5 pb-3"><!></div>'),g3=E('<button type="button"><!> <span class="text-xs font-bold"> </span></button>'),f3=E('<button type="button"> </button>'),h3=E('<button type="button"> </button>'),M3=E('<div class="form-control mt-3 pl-4 border-l-2 border-secondary/20"><label for="fridge-temp" class="label"><span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide"> </span></label> <input id="fridge-temp" type="number" step="0.5" class="input border-0 border-b-2 border-base-300 rounded-none focus:border-secondary focus:outline-none bg-transparent w-full"/></div>'),x3=E('<button type="button"> </button>'),y3=E('<div class="form-control mt-3 pl-4 border-l-2 border-secondary/20"><label for="start-time" class="label"><span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide"> </span></label> <input id="start-time" type="time" class="input border-0 border-b-2 border-base-300 rounded-none focus:border-secondary focus:outline-none bg-transparent w-full"/></div>'),z3=E('<div class="form-control"><input id="salt-pct" type="number" min="1" max="3" step="0.1" class="input border-0 border-b-2 border-base-300 rounded-none focus:border-secondary focus:outline-none bg-transparent w-full" placeholder="2.0"/></div> <p class="text-xs text-base-content/50 mt-1"> </p>',1),_3=E('<div class="form-control"><input id="starter-hyd" type="number" min="50" max="200" step="5" class="input border-0 border-b-2 border-base-300 rounded-none focus:border-secondary focus:outline-none bg-transparent w-full"/></div>'),k3=E('<div><div class="flex justify-between text-xs text-base-content/70 mb-1"><span> </span> <span class="font-semibold text-base-content"> </span></div> <progress class="progress progress-secondary progress-sm w-full"></progress> <div class="flex justify-between text-xs text-base-content/50 mt-0.5"><span></span> <span></span></div></div>'),w3=E('<div class="modal modal-open"><button type="button" class="modal-backdrop"></button> <div class="modal-box w-full max-w-sm p-0 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="philosophy-modal-title"><div class="flex items-center justify-between px-5 py-4 border-b border-base-200"><h2 id="philosophy-modal-title" class="text-base font-semibold text-base-content"> </h2> <button type="button" class="btn btn-ghost btn-sm btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="px-5 py-4 space-y-4"><div><p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1"> </p> <p class="text-sm text-base-content/70 leading-relaxed"> </p></div> <div class="border-t border-base-200 pt-4"><p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1"> </p> <p class="text-sm text-base-content/70 leading-relaxed"> </p></div></div> <div class="px-5 pb-5"><button type="button" class="btn btn-primary w-full"> </button></div></div></div>'),T3=E("<li> </li>"),F3=E("<li> </li>"),S3=E('<div class="modal modal-open"><button type="button" class="modal-backdrop"></button> <div class="modal-box w-full max-w-md p-0 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="autolyse-modal-title"><div class="flex items-center justify-between px-5 py-4 border-b border-base-200"><h2 id="autolyse-modal-title" class="text-base font-semibold text-base-content"> </h2> <button type="button" class="btn btn-ghost btn-sm btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="px-5 py-4 space-y-4"><p class="text-sm text-base-content/70 leading-relaxed"> </p> <div><p class="text-xs font-semibold text-success uppercase tracking-wide mb-1"> </p> <ul class="list-disc pl-5 space-y-1 text-sm text-base-content/70 leading-relaxed"></ul></div> <div class="border-t border-base-200 pt-4"><p class="text-xs font-semibold text-warning uppercase tracking-wide mb-1"> </p> <ul class="list-disc pl-5 space-y-1 text-sm text-base-content/70 leading-relaxed"></ul></div></div> <div class="px-5 pb-5"><button type="button" class="btn btn-primary w-full"> </button></div></div></div>'),C3=E('<div class="modal modal-open"><button type="button" class="modal-backdrop"></button> <div class="modal-box w-full max-w-sm p-0 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="proof-method-modal-title"><div class="flex items-center justify-between px-5 py-4 border-b border-base-200"><h2 id="proof-method-modal-title" class="text-base font-semibold text-base-content"> </h2> <button type="button" class="btn btn-ghost btn-sm btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="px-5 py-4 space-y-4"><div><p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1"> </p> <p class="text-sm text-base-content/70 leading-relaxed"> </p></div> <div class="border-t border-base-200 pt-4"><p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1"> </p> <p class="text-sm text-base-content/70 leading-relaxed"> </p></div></div> <div class="px-5 pb-5"><button type="button" class="btn btn-primary w-full"> </button></div></div></div>'),A3=E('<div class="modal modal-open"><button type="button" class="modal-backdrop"></button> <div class="modal-box w-full max-w-sm p-0 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="crumb-goal-modal-title"><div class="flex items-center justify-between px-5 py-4 border-b border-base-200"><h2 id="crumb-goal-modal-title" class="text-base font-semibold text-base-content"> </h2> <button type="button" class="btn btn-ghost btn-sm btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="px-5 py-4 space-y-4"><div><p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1"> </p> <p class="text-sm text-base-content/70 leading-relaxed"> </p></div> <div class="border-t border-base-200 pt-4"><p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1"> </p> <p class="text-sm text-base-content/70 leading-relaxed"> </p></div> <div class="border-t border-base-200 pt-4"><p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1"> </p> <p class="text-sm text-base-content/70 leading-relaxed"> </p></div></div> <div class="px-5 pb-5"><button type="button" class="btn btn-primary w-full"> </button></div></div></div>'),B3=E('<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70 overflow-hidden"><div class="px-5 pt-5 pb-3"><h2 class="text-base font-semibold text-base-content uppercase tracking-wide"> </h2></div> <div class="px-5 pb-5 space-y-5"><div class="flex flex-col items-center"><div class="relative w-44 h-44"><svg viewBox="0 0 200 200" class="w-full h-full"><circle cx="100" cy="100" fill="none" class="stroke-base-300/30" stroke-width="18"></circle><!></svg> <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"><div class="flex items-baseline pointer-events-auto"><input id="total-flour" type="number" min="0" step="50" class="w-28 bg-transparent border-none text-center text-3xl font-bold text-base-content focus:outline-none tabular-nums [appearance:textfield] [&amp;::-webkit-outer-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:appearance-none" placeholder="500"/> <span class="text-lg font-bold text-base-content/70 -ml-1">g</span></div> <span class="text-xs text-base-content/50"> </span></div></div> <!></div> <div><span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide"> </span> <div class="grid grid-cols-3 gap-2 mt-2"></div> <!></div> <div><div class="flex items-center justify-between mb-2"><span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide"> </span> <button type="button" class="btn btn-ghost btn-xs rounded-full border border-base-300 bg-base-100"><span>°C</span> <span class="text-base-content/30">/</span> <span>°F</span></button></div> <div class="grid grid-cols-2 gap-3"><div class="form-control"><label for="ambient-temp" class="label py-1"><span class="label-text text-xs text-base-content/70"> </span></label> <input id="ambient-temp" type="number" step="0.5" class="input border-0 border-b-2 border-base-300 rounded-none focus:border-secondary focus:outline-none bg-transparent w-full"/></div> <div class="form-control"><label for="dough-temp" class="label py-1"><span class="label-text text-xs text-base-content/70"> <span class="text-base-content/40"> </span></span></label> <input id="dough-temp" type="number" step="0.5" class="input border-0 border-b-2 border-base-300 rounded-none focus:border-secondary focus:outline-none bg-transparent w-full placeholder:text-base-content/30"/></div></div></div></div> <!> <div class="border-t border-base-200"><div class="px-5 py-3"><span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide"> </span></div> <div class="px-5 pb-5 space-y-5"><div><div class="flex items-center gap-1.5 mb-2"><p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide"> </p> <button type="button" class="btn btn-ghost btn-xs btn-circle flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></button></div> <div class="grid grid-cols-3 gap-2"></div> <p class="text-xs text-base-content/70 mt-2 leading-snug"> </p></div> <div><div class="flex items-center gap-1.5 mb-2"><p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide"> </p> <button type="button" class="btn btn-ghost btn-xs btn-circle flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></button></div> <div class="grid grid-cols-2 gap-2"></div> <p class="text-xs text-base-content/70 mt-2 leading-snug"> </p></div> <div><div class="flex items-center gap-1.5 mb-2"><p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide"> </p> <button type="button" class="btn btn-ghost btn-xs btn-circle flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></button></div> <div class="grid grid-cols-2 gap-2"></div> <!></div> <div><p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-2"> </p> <div class="grid grid-cols-2 gap-2"></div> <!></div></div></div> <div class="border-t border-base-200"><div class="px-5 py-3"><span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide"> </span></div> <div class="px-5 pb-5 space-y-4"><div><div class="flex items-center justify-between mb-1.5"><span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide"> </span> <div class="flex items-center gap-2"><span class="text-xs text-base-content/50"><!></span> <input type="checkbox" class="toggle toggle-secondary toggle-sm" role="switch"/> <span class="text-xs text-base-content/70"> </span></div></div> <!></div> <div><div class="flex items-center justify-between mb-1.5"><span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide"> </span> <div class="flex items-center gap-2"><span class="text-xs text-base-content/50"> </span> <input type="checkbox" class="toggle toggle-secondary toggle-sm" role="switch"/> <span class="text-xs text-base-content/70"> </span></div></div> <!></div> <div><div class="flex items-center justify-between mb-1.5"><div class="flex items-center gap-1.5"><span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide"> </span> <button type="button" class="btn btn-ghost btn-xs btn-circle flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></button></div> <div class="flex items-center gap-2"><span> </span> <input type="checkbox" class="toggle toggle-secondary toggle-sm" role="switch"/> <span> </span></div></div> <!></div></div></div></div> <!> <!> <!> <!>',1);function H3(t,o){$e(o,!0);const c=()=>se(ye,"$lang",f),s=()=>se(be,"$inputs",f),b=()=>se(ta,"$result",f),[f,d]=Le(),i=m1(()=>Ee[c()]);let g=le(!1),A=le(!1),y=le(!1),S=le(!1);const W=["Tight","Balanced","Open"],J={Tight:r3,Balanced:n3,Open:l3};let $=m1(()=>s().flourBlend.reduce((m,p)=>m+p.pct,0)),k=m1(()=>Math.round(r($))===100);function u(m){return s().flourBlend.some(p=>p.type===m)}function D(m){be.update(p=>{if(p.flourBlend.find(M=>M.type===m)){if(p.flourBlend.length<=1)return p;const M=p.flourBlend.filter(n1=>n1.type!==m),F=M.reduce((n1,Q)=>n1+Q.pct,0);let H;if(F>0){const n1=100/F;H=M.map(Q=>({...Q,pct:Math.round(Q.pct*n1)}))}else{const n1=Math.floor(100/M.length);H=M.map((Q,_1)=>({...Q,pct:_1===0?n1+(100-n1*M.length):n1}))}const t1=H.reduce((n1,Q)=>n1+Q.pct,0);return t1!==100&&H.length>0&&(H[0]={...H[0],pct:H[0].pct+(100-t1)}),{...p,flourBlend:H}}else{const M=p.flourBlend.length+1,F=Math.round(100/M),H=(100-F)/100,t1=p.flourBlend.map(Q=>({...Q,pct:Math.round(Q.pct*H)}));t1.push({type:m,pct:F});const n1=t1.reduce((Q,_1)=>Q+_1.pct,0);return n1!==100&&t1.length>0&&(t1[0]={...t1[0],pct:t1[0].pct+(100-n1)}),{...p,flourBlend:t1}}})}function V(m,p){const v=Math.max(0,Math.min(100,parseFloat(p)||0));be.update(M=>{const F=M.flourBlend.filter(Q=>Q.type!==m),H=F.reduce((Q,_1)=>Q+_1.pct,0),t1=100-v;let n1;if(F.length===0)n1=M.flourBlend.map(Q=>({...Q,pct:100}));else if(H===0){const Q=Math.floor(t1/F.length),_1=t1-Q*F.length;n1=M.flourBlend.map((f1,j1)=>{if(f1.type===m)return{...f1,pct:v};const $1=F.indexOf(f1);return{...f1,pct:Q+($1===0?_1:0)}})}else{const Q=t1/H,_1=F.map(s1=>({...s1,pct:s1.pct*Q})),f1=_1.map(s1=>({...s1,pct:Math.floor(s1.pct)})),j1=f1.reduce((s1,q1)=>s1+q1.pct,0);let $1=t1-j1;const me=_1.map((s1,q1)=>({i:q1,frac:s1.pct-Math.floor(s1.pct)})).sort((s1,q1)=>q1.frac-s1.frac);for(let s1=0;s1<$1;s1++)f1[me[s1].i].pct+=1;const V1=new Map(f1.map(s1=>[s1.type,s1.pct]));n1=M.flourBlend.map(s1=>s1.type===m?{...s1,pct:v}:{...s1,pct:V1.get(s1.type)??s1.pct})}return{...M,flourBlend:n1}})}function L(){be.update(m=>{const p=m.flourBlend.reduce((H,t1)=>H+t1.pct,0);if(p===0||p===100)return m;const v=100/p,M=m.flourBlend.map(H=>({...H,pct:Math.round(H.pct*v)})),F=M.reduce((H,t1)=>H+t1.pct,0);return F!==100&&M.length>0&&(M[0]={...M[0],pct:M[0].pct+(100-F)}),{...m,flourBlend:M}})}const N={BreadFlour:"#F59E0B",AllPurpose:"#60A5FA",WholeWheat:"#92400E",Rye:"#059669",Spelt:"#7C3AED",Einkorn:"#F43F5E"},x=80,T=2*Math.PI*x;let z=m1(()=>{let m=0;return s().flourBlend.map(p=>{const v=p.pct/100*T,M={type:p.type,color:N[p.type],dasharray:`${v} ${T-v}`,dashoffset:-m};return m+=v,M})}),P=m1(()=>b().formula.autoSaltPct),B=m1(()=>Math.round(b().formula.saltG)),G=m1(()=>s().tempUnit==="F"?Math.round(i2(s().ambientTempC)):s().ambientTempC),Y=m1(()=>s().doughTempC===null?"":s().tempUnit==="F"?Math.round(i2(s().doughTempC)):s().doughTempC),a1=m1(()=>s().tempUnit==="F"?Math.round(i2(s().fridgeTempC)):s().fridgeTempC);function b1(m,p){const v=s().tempUnit==="F"?Vr(p):p;be.update(M=>{const F={...M,[m]:v};return M.autolyseOn&&(m==="ambientTempC"||m==="doughTempC")?{...F,autolyseMins:xt(F.ambientTempC,F.doughTempC)}:F})}function l1(m,p){be.update(v=>({...v,[m]:p}))}function c1(){be.update(m=>({...m,tempUnit:m.tempUnit==="C"?"F":"C"}))}function x1(m){const p=Math.max(0,parseFloat(m.target.value)||0);l1("totalFlourInputG",p)}function g1(m){const p=m.target;let v=parseFloat(p.value);isNaN(v)||(v=Math.min(r(T1),Math.max(r(k1),v)),b1("ambientTempC",v))}function O(m){const v=m.target.value;if(v==="")be.update(M=>{const F={...M,doughTempC:null};return M.autolyseOn?{...F,autolyseMins:xt(F.ambientTempC,F.doughTempC)}:F});else{let M=parseFloat(v);isNaN(M)||(M=Math.min(r(T1),Math.max(r(k1),M)),b1("doughTempC",M))}}function z1(){be.update(m=>m.autolyseOn?{...m,autolyseOn:!1}:{...m,autolyseOn:!0,autolyseMins:xt(m.ambientTempC,m.doughTempC)})}function B1(m){let p=parseFloat(m.target.value);isNaN(p)||(p=Math.min(r(F1),Math.max(r(C1),p)),b1("fridgeTempC",p))}const R1='a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';function H1(m,p){const v=Array.from(m.querySelectorAll(R1));v.length&&v[0].focus();function M(F){if(F.key==="Escape"){U(g,!1),U(A,!1),U(y,!1),U(S,!1);return}if(F.key!=="Tab")return;const H=v[0],t1=v[v.length-1];F.shiftKey?document.activeElement===H&&(F.preventDefault(),t1.focus()):document.activeElement===t1&&(F.preventDefault(),H.focus())}return m.addEventListener("keydown",M),{destroy(){m.removeEventListener("keydown",M)}}}function L1(m){return H1(m)}const k1=m1(()=>s().tempUnit==="F"?32:0),T1=m1(()=>s().tempUnit==="F"?120:50),C1=m1(()=>s().tempUnit==="F"?28:-2),F1=m1(()=>s().tempUnit==="F"?50:10),X1=20,Q1=60-X1,E1=m1(()=>Math.max(0,Math.min(Q1,s().autolyseMins-X1)));var O1=B3(),U1=ne(O1),Y1=a(U1),p1=a(Y1),h1=a(p1,!0);e(p1),e(Y1);var K=n(Y1,2),C=a(K),h=a(C),w=a(h),X=a(w);Z(X,"r",x);var e1=n(X);J1(e1,17,()=>r(z),m=>m.type,(m,p)=>{var v=i3();Z(v,"r",x),R(()=>{Z(v,"stroke",r(p).color),Z(v,"stroke-dasharray",r(p).dasharray),Z(v,"stroke-dashoffset",r(p).dashoffset)}),_(m,v)}),e(w);var A1=n(w,2),q=a(A1),S1=a(q);ce(S1),nt(2),e(q);var y1=n(q,2),I=a(y1,!0);e(y1),e(A1),e(h);var r1=n(h,2);{var i1=m=>{var p=d3();J1(p,5,()=>s().flourBlend,v=>v.type,(v,M)=>{var F=c3(),H=a(F),t1=n(H);e(F),R(n1=>{L2(H,`background-color: ${N[r(M).type]??""}`),l(t1,` ${r(i).flourTypes[r(M).type]??""}: ${n1??""}g`)},[()=>Math.round(s().totalFlourInputG*r(M).pct/100)]),_(v,F)}),e(p),_(m,p)};d1(r1,m=>{s().flourBlend.length>1&&m(i1)})}e(C);var v1=n(C,2),o1=a(v1),M1=a(o1,!0);e(o1);var w1=n(o1,2);J1(w1,21,()=>$r,ge,(m,p)=>{var v=u3(),M=a(v,!0);e(v),R(F=>{u1(v,1,`btn btn-sm rounded-xl border-2 h-auto py-2 px-1 text-xs
							${F??""}`),l(M,r(i).flourTypes[r(p)])},[()=>u(r(p))?"btn-secondary border-secondary text-secondary-content":"btn-ghost border-base-300"]),j("click",v,()=>D(r(p))),_(m,v)}),e(w1);var P1=n(w1,2);{var I1=m=>{var p=v3(),v=ne(p);J1(v,5,()=>s().flourBlend,f1=>f1.type,(f1,j1)=>{var $1=m3(),me=a($1),V1=n(me,2),s1=a(V1,!0);e(V1);var q1=n(V1,2),ae=a(q1);ce(ae);var pe=n(ae,2);ce(pe),nt(2),e(q1),e($1),R(Z1=>{L2(me,`background-color: ${N[r(j1).type]??""}`),l(s1,r(i).flourTypes[r(j1).type]),oe(ae,r(j1).pct),oe(pe,Z1)},[()=>Math.round(r(j1).pct)]),j("input",ae,Z1=>V(r(j1).type,Z1.target.value)),j("change",pe,Z1=>V(r(j1).type,Z1.target.value)),_(f1,$1)}),e(v);var M=n(v,2),F=a(M),H=a(F),t1=n(H),n1=a(t1);e(t1),e(F);var Q=n(F,2);{var _1=f1=>{var j1=p3(),$1=a(j1,!0);e(j1),R(()=>l($1,r(i).blendNormalize)),j("click",j1,L),_(f1,j1)};d1(Q,f1=>{r(k)||f1(_1)})}e(M),R(f1=>{l(H,`${r(i).blendTotal??""}: `),u1(t1,1,`font-semibold tabular-nums ${r(k)?"text-success":"text-error"}`),l(n1,`${f1??""}%`)},[()=>Math.round(r($))]),_(m,p)};d1(P1,m=>{s().flourBlend.length>1&&m(I1)})}e(v1);var N1=n(v1,2),G1=a(N1),ee=a(G1),ze=a(ee,!0);e(ee);var ie=n(ee,2),Se=a(ie),he=n(Se,4);e(ie),e(G1);var _e=n(G1,2),Me=a(_e),ue=a(Me),xe=a(ue),ke=a(xe,!0);e(xe),e(ue);var te=n(ue,2);ce(te),e(Me);var He=n(Me,2),Ue=a(He),yt=a(Ue),Ve=a(yt),qe=n(Ve),Dt=a(qe,!0);e(qe),e(yt),e(Ue);var we=n(Ue,2);ce(we),e(He),e(_e),e(N1),e(K);var zt=n(K,2);{var _t=m=>{var p=b3(),v=a(p);t3(v,{get warnings(){return b().warnings}}),e(p),_(m,p)};d1(zt,m=>{s().totalFlourInputG>0&&m(_t)})}var it=n(zt,2),Ke=a(it),Ye=a(Ke),Lt=a(Ye,!0);e(Ye),e(Ke);var Ze=n(Ke,2),ct=a(Ze),Je=a(ct),Xe=a(Je),kt=a(Xe,!0);e(Xe);var wt=n(Xe,2);e(Je);var Qe=n(Je,2);J1(Qe,21,()=>W,ge,(m,p)=>{const v=m1(()=>J[r(p)]);var M=g3(),F=a(M);vr(F,()=>r(v),(n1,Q)=>{Q(n1,{class:"w-full h-auto max-h-full"})});var H=n(F,2),t1=a(H,!0);e(H),e(M),R(()=>{u1(M,1,`btn rounded-xl border-2 flex-col h-auto py-3 px-2 gap-1.5
								${s().crumbGoal===r(p)?"btn-secondary border-secondary text-secondary-content":"btn-ghost border-base-300"}`),l(t1,r(i).crumbGoalNames[r(p)])}),j("click",M,()=>l1("crumbGoal",r(p))),_(m,M)}),e(Qe);var dt=n(Qe,2),ut=a(dt,!0);e(dt),e(ct);var mt=n(ct,2),et=a(mt),pt=a(et),Oe=a(pt,!0);e(pt);var Ce=n(pt,2);e(et);var Ae=n(et,2);J1(Ae,20,()=>["Predictability","FlavorDevelopment"],ge,(m,p)=>{var v=f3(),M=a(v,!0);e(v),R(()=>{u1(v,1,`btn btn-sm rounded-xl border-2 h-auto py-2.5 px-3
							${s().fermentationPhilosophy===p?"btn-secondary border-secondary text-secondary-content":"btn-ghost border-base-300"}`),l(M,p==="Predictability"?r(i).philosophyPredictability:r(i).philosophyFlavorDev)}),j("click",v,()=>l1("fermentationPhilosophy",p)),_(m,v)}),e(Ae);var Pe=n(Ae,2),vt=a(Pe,!0);e(Pe),e(mt);var Be=n(mt,2),Ie=a(Be),je=a(Ie),Et=a(je,!0);e(je);var Tt=n(je,2);e(Ie);var Ot=n(Ie,2);J1(Ot,20,()=>["Room","ColdRetard"],ge,(m,p)=>{var v=h3(),M=a(v,!0);e(v),R(()=>{u1(v,1,`btn btn-sm rounded-xl border-2 h-auto py-2.5 px-3
								${s().proofMethod===p?"btn-secondary border-secondary text-secondary-content":"btn-ghost border-base-300"}`),l(M,p==="Room"?r(i).roomTemp:r(i).coldRetard)}),j("click",v,()=>l1("proofMethod",p)),_(m,v)}),e(Ot);var sa=n(Ot,2);{var la=m=>{var p=M3(),v=a(p),M=a(v),F=a(M);e(M),e(v);var H=n(v,2);ce(H),e(p),R(()=>{l(F,`${r(i).fridgeTemp??""} (°${s().tempUnit??""})`),Z(H,"min",r(C1)),Z(H,"max",r(F1)),oe(H,r(a1))}),j("input",H,B1),_(m,p)};d1(sa,m=>{s().proofMethod==="ColdRetard"&&m(la)})}e(Be);var M2=n(Be,2),It=a(M2),ia=a(It,!0);e(It);var Nt=n(It,2);J1(Nt,20,()=>["relative","clock"],ge,(m,p)=>{var v=x3(),M=a(v,!0);e(v),R(()=>{u1(v,1,`btn btn-sm rounded-xl border-2 h-auto py-2.5 px-3
								${s().scheduleMode===p?"btn-secondary border-secondary text-secondary-content":"btn-ghost border-base-300"}`),l(M,p==="relative"?r(i).relative:r(i).clock)}),j("click",v,()=>l1("scheduleMode",p)),_(m,v)}),e(Nt);var ca=n(Nt,2);{var da=m=>{var p=y3(),v=a(p),M=a(v),F=a(M,!0);e(M),e(v);var H=n(v,2);ce(H),e(p),R(()=>{l(F,r(i).startTime),oe(H,s().startTime??"08:00")}),j("input",H,t1=>l1("startTime",t1.target.value||null)),_(m,p)};d1(ca,m=>{s().scheduleMode==="clock"&&m(da)})}e(M2),e(Ze),e(it);var x2=n(it,2),Gt=a(x2),y2=a(Gt),ua=a(y2,!0);e(y2),e(Gt);var z2=n(Gt,2),Wt=a(z2),Ut=a(Wt),Vt=a(Ut),ma=a(Vt,!0);e(Vt);var _2=n(Vt,2),qt=a(_2),pa=a(qt);{var va=m=>{var p=fe();R(v=>l(p,v),[()=>r(i).saltAutoLabel(r(P).toFixed(2),String(r(B)))]),_(m,p)},ba=m=>{var p=fe();R(()=>l(p,r(i).saltManual)),_(m,p)};d1(pa,m=>{s().saltAutoCalc?m(va):m(ba,-1)})}e(qt);var tt=n(qt,2);ce(tt);var k2=n(tt,2),ga=a(k2,!0);e(k2),e(_2),e(Ut);var fa=n(Ut,2);{var ha=m=>{var p=z3(),v=ne(p),M=a(v);ce(M),e(v);var F=n(v,2),H=a(F,!0);e(F),R(()=>{oe(M,s().saltPct),l(H,r(i).saltBakersPct)}),j("input",M,t1=>l1("saltPct",parseFloat(t1.target.value)||2)),_(m,p)};d1(fa,m=>{s().saltAutoCalc||m(ha)})}e(Wt);var Kt=n(Wt,2),Yt=a(Kt),Zt=a(Yt),Ma=a(Zt,!0);e(Zt);var w2=n(Zt,2),Jt=a(w2),xa=a(Jt,!0);e(Jt);var at=n(Jt,2);ce(at);var T2=n(at,2),ya=a(T2,!0);e(T2),e(w2),e(Yt);var za=n(Yt,2);{var _a=m=>{var p=_3(),v=a(p);ce(v),e(p),R(()=>oe(v,s().starterHydrationPct)),j("input",v,M=>l1("starterHydrationPct",parseFloat(M.target.value)||100)),_(m,p)};d1(za,m=>{s().starterHydrationAutoCalc||m(_a)})}e(Kt);var F2=n(Kt,2),Xt=a(F2),Qt=a(Xt),e2=a(Qt),ka=a(e2,!0);e(e2);var S2=n(e2,2);e(Qt);var C2=n(Qt,2),Ft=a(C2),wa=a(Ft,!0);e(Ft);var rt=n(Ft,2);ce(rt);var t2=n(rt,2),Ta=a(t2,!0);e(t2),e(C2),e(Xt);var Fa=n(Xt,2);{var Sa=m=>{var p=k3(),v=a(p),M=a(v),F=a(M,!0);e(M);var H=n(M,2),t1=a(H);e(H),e(v);var n1=n(v,2);Z(n1,"max",Q1);var Q=n(n1,2),_1=a(Q);_1.textContent="20 min";var f1=n(_1,2);f1.textContent="60 min",e(Q),e(p),R(()=>{l(F,r(i).duration),l(t1,`${s().autolyseMins??""} min`),oe(n1,r(E1)),Z(n1,"aria-label",r(i).ariaLabels.autolyseDurationProgress)}),_(m,p)};d1(Fa,m=>{s().autolyseOn&&m(Sa)})}e(F2),e(z2),e(x2),e(U1);var A2=n(U1,2);{var Ca=m=>{var p=w3(),v=a(p),M=n(v,2),F=a(M),H=a(F),t1=a(H,!0);e(H);var n1=n(H,2);e(F);var Q=n(F,2),_1=a(Q),f1=a(_1),j1=a(f1,!0);e(f1);var $1=n(f1,2),me=a($1,!0);e($1),e(_1);var V1=n(_1,2),s1=a(V1),q1=a(s1,!0);e(s1);var ae=n(s1,2),pe=a(ae,!0);e(ae),e(V1),e(Q);var Z1=n(Q,2),re=a(Z1),Ne=a(re,!0);e(re),e(Z1),e(M),Mt(M,ve=>L1?.(ve)),e(p),R(()=>{Z(v,"aria-label",r(i).ariaLabels.closeFermentationPhilosophyModal),l(t1,r(i).philosophyModalTitle),Z(n1,"aria-label",r(i).ariaLabels.closeButton),l(j1,r(i).philosophyPredictability),l(me,r(i).philosophyModalPredictabilityBody),l(q1,r(i).philosophyFlavorDev),l(pe,r(i).philosophyModalFlavorDevBody),l(Ne,r(i).done)}),j("click",v,()=>U(g,!1)),j("click",n1,()=>U(g,!1)),j("click",re,()=>U(g,!1)),_(m,p)};d1(A2,m=>{r(g)&&m(Ca)})}var B2=n(A2,2);{var Aa=m=>{var p=S3(),v=a(p),M=n(v,2),F=a(M),H=a(F),t1=a(H,!0);e(H);var n1=n(H,2);e(F);var Q=n(F,2),_1=a(Q),f1=a(_1,!0);e(_1);var j1=n(_1,2),$1=a(j1),me=a($1,!0);e($1);var V1=n($1,2);J1(V1,21,()=>r(i).autolyseModalUseItems,ge,(ve,bt)=>{var Te=T3(),Ge=a(Te,!0);e(Te),R(()=>l(Ge,r(bt))),_(ve,Te)}),e(V1),e(j1);var s1=n(j1,2),q1=a(s1),ae=a(q1,!0);e(q1);var pe=n(q1,2);J1(pe,21,()=>r(i).autolyseModalAvoidItems,ge,(ve,bt)=>{var Te=F3(),Ge=a(Te,!0);e(Te),R(()=>l(Ge,r(bt))),_(ve,Te)}),e(pe),e(s1),e(Q);var Z1=n(Q,2),re=a(Z1),Ne=a(re,!0);e(re),e(Z1),e(M),Mt(M,ve=>L1?.(ve)),e(p),R(()=>{Z(v,"aria-label",r(i).ariaLabels.closeAutolyseModal),l(t1,r(i).autolyseModalTitle),Z(n1,"aria-label",r(i).ariaLabels.closeButton),l(f1,r(i).autolyseModalIntro),l(me,r(i).autolyseModalUseTitle),l(ae,r(i).autolyseModalAvoidTitle),l(Ne,r(i).done)}),j("click",v,()=>U(A,!1)),j("click",n1,()=>U(A,!1)),j("click",re,()=>U(A,!1)),_(m,p)};d1(B2,m=>{r(A)&&m(Aa)})}var H2=n(B2,2);{var Ba=m=>{var p=C3(),v=a(p),M=n(v,2),F=a(M),H=a(F),t1=a(H,!0);e(H);var n1=n(H,2);e(F);var Q=n(F,2),_1=a(Q),f1=a(_1),j1=a(f1,!0);e(f1);var $1=n(f1,2),me=a($1,!0);e($1),e(_1);var V1=n(_1,2),s1=a(V1),q1=a(s1,!0);e(s1);var ae=n(s1,2),pe=a(ae,!0);e(ae),e(V1),e(Q);var Z1=n(Q,2),re=a(Z1),Ne=a(re,!0);e(re),e(Z1),e(M),Mt(M,ve=>L1?.(ve)),e(p),R(()=>{Z(v,"aria-label",r(i).ariaLabels.closeProofMethodModal),l(t1,r(i).proofMethodModalTitle),Z(n1,"aria-label",r(i).ariaLabels.closeProofMethodModal),l(j1,r(i).roomTemp),l(me,r(i).proofMethodRoomBody),l(q1,r(i).coldRetard),l(pe,r(i).proofMethodColdRetardBody),l(Ne,r(i).done)}),j("click",v,()=>U(y,!1)),j("click",n1,()=>U(y,!1)),j("click",re,()=>U(y,!1)),_(m,p)};d1(H2,m=>{r(y)&&m(Ba)})}var Ha=n(H2,2);{var Pa=m=>{var p=A3(),v=a(p),M=n(v,2),F=a(M),H=a(F),t1=a(H,!0);e(H);var n1=n(H,2);e(F);var Q=n(F,2),_1=a(Q),f1=a(_1),j1=a(f1,!0);e(f1);var $1=n(f1,2),me=a($1,!0);e($1),e(_1);var V1=n(_1,2),s1=a(V1),q1=a(s1,!0);e(s1);var ae=n(s1,2),pe=a(ae,!0);e(ae),e(V1);var Z1=n(V1,2),re=a(Z1),Ne=a(re,!0);e(re);var ve=n(re,2),bt=a(ve,!0);e(ve),e(Z1),e(Q);var Te=n(Q,2),Ge=a(Te),ja=a(Ge,!0);e(Ge),e(Te),e(M),Mt(M,Ra=>L1?.(Ra)),e(p),R(()=>{Z(v,"aria-label",r(i).ariaLabels.closeCrumbGoalModal),l(t1,r(i).crumbModalTitle),Z(n1,"aria-label",r(i).ariaLabels.closeButton),l(j1,r(i).crumbGoalNames.Tight),l(me,r(i).crumbModalTightBody),l(q1,r(i).crumbGoalNames.Balanced),l(pe,r(i).crumbModalBalancedBody),l(Ne,r(i).crumbGoalNames.Open),l(bt,r(i).crumbModalOpenBody),l(ja,r(i).done)}),j("click",v,()=>U(S,!1)),j("click",n1,()=>U(S,!1)),j("click",Ge,()=>U(S,!1)),_(m,p)};d1(Ha,m=>{r(S)&&m(Pa)})}R(()=>{l(h1,r(i).parameters),oe(S1,s().totalFlourInputG),l(I,r(i).totalFlour),l(M1,r(i).flourSelection),l(ze,r(i).temperatures),Z(ie,"aria-label",r(i).ariaLabels.toggleTempUnit),u1(Se,1,We(s().tempUnit==="C"?"text-secondary font-semibold":"text-base-content/50")),u1(he,1,We(s().tempUnit==="F"?"text-secondary font-semibold":"text-base-content/50")),l(ke,r(i).kitchenTemp),Z(te,"min",r(k1)),Z(te,"max",r(T1)),oe(te,r(G)),l(Ve,`${r(i).doughTemp??""} `),l(Dt,r(i).optional),Z(we,"min",r(k1)),Z(we,"max",r(T1)),oe(we,r(Y)),Z(we,"placeholder",r(i).leaveBlankAmbient),l(Lt,r(i).bakingProfile),l(kt,r(i).crumbGoal),Z(wt,"aria-label",r(i).ariaLabels.learnCrumbGoal),l(ut,r(i).crumbDescriptions[s().crumbGoal]),l(Oe,r(i).fermentationPhilosophyLabel),Z(Ce,"aria-label",r(i).ariaLabels.learnFermentationPhilosophy),l(vt,s().fermentationPhilosophy==="Predictability"?r(i).philosophyPredictabilityDesc:r(i).philosophyFlavorDevDesc),l(Et,r(i).proofMethod),Z(Tt,"aria-label",r(i).ariaLabels.learnProofMethod),l(ia,r(i).scheduleMode),l(ua,r(i).fineTuning),l(ma,r(i).salt),s2(tt,!s().saltAutoCalc),Z(tt,"aria-checked",!s().saltAutoCalc),Z(tt,"aria-label",r(i).ariaLabels.overrideSalt),l(ga,r(i).saltOverride),l(Ma,r(i).starterHydration),l(xa,s().starterHydrationAutoCalc?r(i).starterHydrationDefaultLabel:r(i).starterHydrationManual),s2(at,!s().starterHydrationAutoCalc),Z(at,"aria-checked",!s().starterHydrationAutoCalc),Z(at,"aria-label",r(i).ariaLabels.overrideStarterHydration),l(ya,r(i).starterHydrationOverride),l(ka,r(i).autolyse),Z(S2,"aria-label",r(i).ariaLabels.learnAutolyse),u1(Ft,1,We(s().autolyseOn?"text-xs text-base-content/40":"text-xs text-base-content/70 font-semibold")),l(wa,r(i).off),s2(rt,s().autolyseOn),Z(rt,"aria-checked",s().autolyseOn),Z(rt,"aria-label",r(i).ariaLabels.toggleAutolyseAuto),u1(t2,1,We(s().autolyseOn?"text-xs text-base-content/70 font-semibold":"text-xs text-base-content/40")),l(Ta,r(i).auto)}),j("input",S1,x1),j("click",ie,c1),j("input",te,g1),j("input",we,O),j("click",wt,()=>U(S,!0)),j("click",Ce,()=>U(g,!0)),j("click",Tt,()=>U(y,!0)),j("change",tt,()=>l1("saltAutoCalc",!s().saltAutoCalc)),j("change",at,()=>l1("starterHydrationAutoCalc",!s().starterHydrationAutoCalc)),j("click",S2,()=>U(A,!0)),j("change",rt,z1),_(t,O1),De(),d()}st(["input","click","change"]);var P3=E('<div class="flex items-center justify-between text-[11px] text-base-content/55 px-1"><span class="truncate"> </span> <span class="tabular-nums font-medium ml-1"> </span></div>'),j3=E('<div class="mt-2 space-y-0.5"></div>'),R3=E('<tr class="bg-base-200/30"><td class="py-1.5 text-base-content/70 text-xs pl-4"> </td><td class="py-1.5 text-right tabular-nums text-base-content/70 text-xs"> </td><td class="py-1.5 text-right tabular-nums text-base-content/50 text-xs"> </td></tr>'),$3=E('<div class="px-5 pb-4"><table class="w-full text-sm"><thead><tr class="border-b border-base-200"><th class="text-left py-2 text-xs font-semibold text-base-content/50 uppercase tracking-wide"> </th><th class="text-right py-2 text-xs font-semibold text-base-content/50 uppercase tracking-wide"> </th><th class="text-right py-2 text-xs font-semibold text-base-content/50 uppercase tracking-wide"> </th></tr></thead><tbody class="divide-y divide-base-200"><tr><td class="py-2.5 text-base-content font-medium"> </td><td class="py-2.5 text-right tabular-nums text-base-content font-semibold"> </td><td class="py-2.5 text-right tabular-nums text-base-content/70">100%</td></tr><!><tr><td class="py-2.5 text-base-content font-medium"> </td><td class="py-2.5 text-right tabular-nums text-base-content font-semibold"> </td><td class="py-2.5 text-right tabular-nums text-base-content/70"> </td></tr><tr><td class="py-2.5 text-base-content font-medium"> </td><td class="py-2.5 text-right tabular-nums text-base-content font-semibold"> </td><td class="py-2.5 text-right tabular-nums text-base-content/70"> </td></tr><tr><td class="py-2.5 text-base-content font-medium"> </td><td class="py-2.5 text-right tabular-nums text-base-content font-semibold"> </td><td class="py-2.5 text-right tabular-nums text-base-content/70"> <span class="text-[10px] text-base-content/40 block leading-tight"> </span></td></tr></tbody><tfoot><tr class="border-t-2 border-secondary/30 bg-secondary/10"><td class="py-3 font-bold text-secondary"> </td><td class="py-3 text-right tabular-nums font-bold text-secondary"> </td><td class="py-3 text-right"></td></tr></tfoot></table></div>'),D3=E('<div class="modal modal-open"><button type="button" class="modal-backdrop"></button> <div class="modal-box w-full max-w-sm p-0 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="formula-modal-title"><div class="flex items-center justify-between px-5 py-4 border-b border-base-200"><h2 id="formula-modal-title" class="text-base font-semibold text-base-content"> </h2> <button type="button" class="btn btn-ghost btn-sm btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="px-5 py-4 space-y-4"><div><p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1"> </p> <p class="text-sm text-base-content/70 leading-relaxed"> </p></div> <div class="border-t border-base-200 pt-4"><p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1"> </p> <p class="text-sm text-base-content/70 leading-relaxed"> </p></div></div> <div class="px-5 pb-5"><button type="button" class="btn btn-primary w-full"> </button></div></div></div>'),L3=E('<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70 overflow-hidden"><div class="flex items-center justify-between px-5 pt-5 pb-3"><div><div class="flex items-center gap-1.5"><h2 class="text-base font-semibold text-base-content uppercase tracking-wide"> </h2> <button type="button" class="btn btn-ghost btn-xs btn-circle flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></button></div> <p class="text-xs text-base-content/50 mt-0.5"> </p></div> <div class="badge badge-secondary badge-lg tabular-nums font-bold gap-1"> </div></div> <div class="px-5 pb-4"><p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-3"> </p> <div class="grid grid-cols-2 gap-3"><div class="rounded-xl bg-base-200/80 ring-1 ring-base-300/60 px-3 py-3 text-center"><div class="text-2xl font-bold tabular-nums text-base-content"> </div> <div class="text-xs text-base-content/60 mt-1 font-medium"> </div> <!></div> <div class="rounded-xl bg-base-200/80 ring-1 ring-base-300/60 px-3 py-3 text-center"><div class="text-2xl font-bold tabular-nums text-base-content"> </div> <div class="text-xs text-base-content/60 mt-1 font-medium"> </div></div> <div class="rounded-xl bg-accent/10 ring-1 ring-accent/20 px-3 py-3 text-center"><div class="text-2xl font-bold tabular-nums text-accent"> </div> <div class="text-xs text-accent/70 mt-1 font-medium"> </div></div> <div class="rounded-xl bg-base-200/80 ring-1 ring-base-300/60 px-3 py-3 text-center"><div class="text-2xl font-bold tabular-nums text-base-content"> </div> <div class="text-xs text-base-content/60 mt-1 font-medium"> </div></div></div> <p class="text-xs text-base-content/50 mt-2.5 italic"> </p></div> <div class="border-t border-base-200"><button type="button" class="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-base-200/50 transition-colors"><span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide"> </span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button> <!></div></div> <!>',1);function E3(t,o){$e(o,!0);const c=()=>se(ye,"$lang",b),s=()=>se(v2,"$showFullFormula",b),[b,f]=Le(),d=m1(()=>Ee[c()]);function i(I,r1){return r1<=0?"—":`${(I/r1*100).toFixed(1)}%`}function g(I){return Math.round(I).toString()}function A(I,r1){const i1=Math.round(I),v1=Math.round(r1);if(i1<=0||v1<=0)return"—";let o1=i1,M1=v1;for(;M1;)[o1,M1]=[M1,o1%M1];return`${i1/o1}:${v1/o1}`}let y=le(!1);const S='a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';function W(I,r1){const i1=Array.from(I.querySelectorAll(S));i1.length&&i1[0].focus();function v1(o1){if(o1.key==="Escape"){U(y,!1);return}if(o1.key!=="Tab")return;const M1=i1[0],w1=i1[i1.length-1];o1.shiftKey?document.activeElement===M1&&(o1.preventDefault(),w1.focus()):document.activeElement===w1&&(o1.preventDefault(),M1.focus())}return I.addEventListener("keydown",v1),{destroy(){I.removeEventListener("keydown",v1)}}}function J(I){return W(I)}var $=L3(),k=ne($),u=a(k),D=a(u),V=a(D),L=a(V),N=a(L,!0);e(L);var x=n(L,2);e(V);var T=n(V,2),z=a(T,!0);e(T),e(D);var P=n(D,2),B=a(P);e(P),e(u);var G=n(u,2),Y=a(G),a1=a(Y,!0);e(Y);var b1=n(Y,2),l1=a(b1),c1=a(l1),x1=a(c1);e(c1);var g1=n(c1,2),O=a(g1,!0);e(g1);var z1=n(g1,2);{var B1=I=>{var r1=j3();J1(r1,21,()=>o.flourBlend,i1=>i1.type,(i1,v1)=>{var o1=P3(),M1=a(o1),w1=a(M1,!0);e(M1);var P1=n(M1,2),I1=a(P1);e(P1),e(o1),R(N1=>{l(w1,r(d).flourTypes[r(v1).type]??r(v1).type),l(I1,`${N1??""}g`)},[()=>g(o.formula.mixFlourG*r(v1).pct/100)]),_(i1,o1)}),e(r1),_(I,r1)};d1(z1,I=>{o.flourBlend.length>1&&I(B1)})}e(l1);var R1=n(l1,2),H1=a(R1),L1=a(H1);e(H1);var k1=n(H1,2),T1=a(k1,!0);e(k1),e(R1);var C1=n(R1,2),F1=a(C1),X1=a(F1);e(F1);var W1=n(F1,2),Q1=a(W1,!0);e(W1),e(C1);var E1=n(C1,2),O1=a(E1),U1=a(O1);e(O1);var Y1=n(O1,2),p1=a(Y1,!0);e(Y1),e(E1),e(b1);var h1=n(b1,2),K=a(h1,!0);e(h1),e(G);var C=n(G,2),h=a(C),w=a(h),X=a(w,!0);e(w);var e1=n(w,2);e(h);var A1=n(h,2);{var q=I=>{var r1=$3(),i1=a(r1),v1=a(i1),o1=a(v1),M1=a(o1),w1=a(M1,!0);e(M1);var P1=n(M1),I1=a(P1,!0);e(P1);var N1=n(P1),G1=a(N1,!0);e(N1),e(o1),e(v1);var ee=n(v1),ze=a(ee),ie=a(ze),Se=a(ie,!0);e(ie);var he=n(ie),_e=a(he);e(he),nt(),e(ze);var Me=n(ze);J1(Me,17,()=>o.flourBlend,Oe=>Oe.type,(Oe,Ce)=>{var Ae=R3(),Pe=a(Ae),vt=a(Pe);e(Pe);var Be=n(Pe),Ie=a(Be);e(Be);var je=n(Be),Et=a(je);e(je),e(Ae),R(Tt=>{l(vt,`— ${r(d).flourTypes[r(Ce).type]??r(Ce).type??""}`),l(Ie,`${Tt??""}g`),l(Et,`${r(Ce).pct??""}%`)},[()=>g(o.formula.totalFlourG*r(Ce).pct/100)]),_(Oe,Ae)});var ue=n(Me),xe=a(ue),ke=a(xe,!0);e(xe);var te=n(xe),He=a(te);e(te);var Ue=n(te),yt=a(Ue);e(Ue),e(ue);var Ve=n(ue),qe=a(Ve),Dt=a(qe,!0);e(qe);var we=n(qe),zt=a(we);e(we);var _t=n(we),it=a(_t,!0);e(_t),e(Ve);var Ke=n(Ve),Ye=a(Ke),Lt=a(Ye,!0);e(Ye);var Ze=n(Ye),ct=a(Ze);e(Ze);var Je=n(Ze),Xe=a(Je),kt=n(Xe),wt=a(kt,!0);e(kt),e(Je),e(Ke),e(ee);var Qe=n(ee),dt=a(Qe),ut=a(dt),mt=a(ut,!0);e(ut);var et=n(ut),pt=a(et);e(et),nt(),e(dt),e(Qe),e(i1),e(r1),R((Oe,Ce,Ae,Pe,vt,Be,Ie,je)=>{l(w1,r(d).ingredient),l(I1,r(d).grams),l(G1,r(d).bakersPct),l(Se,r(d).totalFlourRow),l(_e,`${Oe??""}g`),l(ke,r(d).water),l(He,`${Ce??""}g`),l(yt,`${Ae??""}%`),l(Dt,r(d).saltRow),l(zt,`${Pe??""}g`),l(it,vt),l(Lt,r(d).starter),l(ct,`${Be??""}g`),l(Xe,`${Ie??""} `),l(wt,r(d).preFermentedFlour),l(mt,r(d).totalDough),l(pt,`${je??""}g`)},[()=>g(o.formula.totalFlourG),()=>g(o.formula.totalWaterG),()=>o.formula.finalHydrationPct.toFixed(1),()=>g(o.formula.saltG),()=>i(o.formula.saltG,o.formula.totalFlourG),()=>g(o.formula.starterTotalG),()=>i(o.formula.starterFlourG,o.formula.totalFlourG),()=>g(o.formula.totalDoughWeightG)]),_(I,r1)};d1(A1,I=>{s()&&I(q)})}e(C),e(k);var S1=n(k,2);{var y1=I=>{var r1=D3(),i1=a(r1),v1=n(i1,2),o1=a(v1),M1=a(o1),w1=a(M1,!0);e(M1);var P1=n(M1,2);e(o1);var I1=n(o1,2),N1=a(I1),G1=a(N1),ee=a(G1,!0);e(G1);var ze=n(G1,2),ie=a(ze,!0);e(ze),e(N1);var Se=n(N1,2),he=a(Se),_e=a(he,!0);e(he);var Me=n(he,2),ue=a(Me,!0);e(Me),e(Se),e(I1);var xe=n(I1,2),ke=a(xe),te=a(ke,!0);e(ke),e(xe),e(v1),Mt(v1,He=>J?.(He)),e(r1),R(()=>{Z(i1,"aria-label",r(d).ariaLabels.closeFormulaModal),l(w1,r(d).formulaInfoTitle),Z(P1,"aria-label",r(d).ariaLabels.closeFormulaModal),l(ee,r(d).mixAdditions),l(ie,r(d).formulaInfoMixBody),l(_e,r(d).fullFormula),l(ue,r(d).formulaInfoFormulaBody),l(te,r(d).done)}),j("click",i1,()=>U(y,!1)),j("click",P1,()=>U(y,!1)),j("click",ke,()=>U(y,!1)),_(I,r1)};d1(S1,I=>{r(y)&&I(y1)})}R((I,r1,i1,v1,o1,M1)=>{l(N,r(d).formula),Z(x,"aria-label",r(d).ariaLabels.learnFormula),l(z,r(d).bakersPctSubtitle),l(B,`${I??""}g`),l(a1,r(d).mixAdditions),l(x1,`${r1??""}g`),l(O,r(d).mixFlour),l(L1,`${i1??""}g`),l(T1,r(d).mixWater),l(X1,`${v1??""}g`),l(Q1,r(d).starter),l(U1,`${o1??""}g`),l(p1,r(d).saltRow),l(K,M1),l(X,r(d).fullFormula),u1(e1,0,`w-4 h-4 text-base-content/40 transition-transform ${s()?"rotate-180":""}`)},[()=>g(o.formula.totalDoughWeightG),()=>g(o.formula.mixFlourG),()=>g(o.formula.mixWaterG),()=>g(o.formula.starterTotalG),()=>g(o.formula.saltG),()=>r(d).starterContains(g(o.formula.starterFlourG),g(o.formula.starterWaterG),A(o.formula.starterFlourG,o.formula.starterWaterG))]),j("click",x,()=>U(y,!0)),j("click",h,()=>v2.update(I=>!I)),_(t,$),De(),f()}st(["click"]);var O3=E('<div class="flex justify-between items-center mb-2"><span class="text-sm font-semibold text-base-content"> </span> <span class="text-sm tabular-nums font-bold text-info"> </span></div> <div class="relative h-3"><progress class="progress progress-info w-full absolute inset-0 opacity-50" max="100"></progress> <progress class="progress progress-info w-full absolute inset-0" max="100"></progress></div>',1),I3=E('<div class="flex justify-between items-center mb-2"><span class="text-sm font-semibold text-base-content"> </span> <span class="text-sm tabular-nums font-bold text-secondary"> </span></div> <div class="relative h-3"><progress class="progress progress-secondary w-full absolute inset-0 opacity-50" value="100" max="100"></progress> <progress class="progress progress-secondary w-full absolute inset-0" max="100"></progress></div> <p class="text-xs text-base-content/70 mt-1"> </p>',1),N3=E('<div class="modal modal-open"><button type="button" class="modal-backdrop"></button> <div class="modal-box w-full max-w-md p-0 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="timing-bars-modal-title"><div class="flex items-center justify-between px-5 py-4 border-b border-base-200"><h2 id="timing-bars-modal-title" class="text-base font-semibold text-base-content"> </h2> <button type="button" class="btn btn-ghost btn-sm btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="px-5 py-4 space-y-4"><p class="text-sm text-base-content/70 leading-relaxed"> </p> <div><p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1"> </p> <p class="text-sm text-base-content/70 leading-relaxed"> </p></div> <div class="border-t border-base-200 pt-4"><p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1"> </p> <p class="text-sm text-base-content/70 leading-relaxed"> </p></div></div> <div class="px-5 pb-5"><button type="button" class="btn btn-primary w-full"> </button></div></div></div>'),G3=E('<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70"><div class="card-body gap-5 p-5"><div class="flex items-center gap-1.5"><h2 class="text-base font-semibold text-base-content uppercase tracking-wide"> </h2> <button type="button" class="btn btn-ghost btn-xs btn-circle flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></button></div> <div class="flex flex-wrap gap-2"><span> </span> <span> </span> <span class="badge badge-soft badge-accent badge-md font-medium"> </span></div> <div><div class="flex justify-between items-center mb-2"><span class="text-sm font-semibold text-base-content"> </span> <span class="text-sm tabular-nums font-bold text-secondary"> </span></div> <div class="relative h-3"><progress class="progress progress-warning w-full absolute inset-0" max="100"></progress> <progress class="progress progress-secondary w-full absolute inset-0 opacity-80" max="100"></progress></div> <div class="flex justify-between text-xs text-base-content/50 mt-1"><span> </span> <span> </span></div> <p class="text-xs text-base-content/70 mt-1"> </p></div> <div><!></div> <div class="rounded-xl bg-secondary/10 ring-1 ring-secondary/20 px-4 py-3 text-sm"><span class="text-base-content/70"> </span> <span class="font-bold text-base-content ml-1"> </span></div> <p class="text-xs text-base-content/50 text-center"> </p></div></div> <!>',1);function W3(t,o){$e(o,!0);const c=()=>se(ye,"$lang",b),s=()=>se(be,"$inputs",b),[b,f]=Le(),d=85,i=95,g=m1(()=>Ee[c()]);let A=le(!1);const y=12;function S(y1){return Math.min(100,y1/y*100)}const W={Cold:"badge-info",VeryCold:"badge-info",Standard:"badge-success",Warm:"badge-warning",Hot:"badge-error"},J={Low:"badge-warning",Medium:"badge-success",High:"badge-info",VeryHigh:"badge-error"},$=m1(()=>S(o.timing.bulkMax)),k=m1(()=>S(o.timing.bulkMin)),u=m1(()=>S(o.timing.proofMax)),D=m1(()=>S(o.timing.proofMin)),V=m1(()=>S(o.timing.coldRetardMin));var L=G3(),N=ne(L),x=a(N),T=a(x),z=a(T),P=a(z,!0);e(z);var B=n(z,2);e(T);var G=n(T,2),Y=a(G),a1=a(Y);e(Y);var b1=n(Y,2),l1=a(b1);e(b1);var c1=n(b1,2),x1=a(c1);e(c1),e(G);var g1=n(G,2),O=a(g1),z1=a(O),B1=a(z1,!0);e(z1);var R1=n(z1,2),H1=a(R1);e(R1),e(O);var L1=n(O,2),k1=a(L1),T1=n(k1,2);e(L1);var C1=n(L1,2),F1=a(C1),X1=a(F1,!0);e(F1);var W1=n(F1,2),Q1=a(W1,!0);e(W1),e(C1);var E1=n(C1,2),O1=a(E1,!0);e(E1),e(g1);var U1=n(g1,2),Y1=a(U1);{var p1=y1=>{var I=O3(),r1=ne(I),i1=a(r1),v1=a(i1,!0);e(i1);var o1=n(i1,2),M1=a(o1);e(o1),e(r1);var w1=n(r1,2),P1=a(w1),I1=n(P1,2);e(w1),R((N1,G1)=>{l(v1,r(g).roomProof),l(M1,`${N1??""} – ${G1??""}`),oe(P1,r(u)),oe(I1,r(D))},[()=>D1(o.timing.proofMin*60),()=>D1(o.timing.proofMax*60)]),_(y1,I)},h1=y1=>{var I=I3(),r1=ne(I),i1=a(r1),v1=a(i1,!0);e(i1);var o1=n(i1,2),M1=a(o1);e(o1),e(r1);var w1=n(r1,2),P1=n(a(w1),2);e(w1);var I1=n(w1,2),N1=a(I1,!0);e(I1),R(()=>{l(v1,r(g).coldRetardProof),l(M1,`${o.timing.coldRetardMin??""}h – ${o.timing.coldRetardMax??""}h`),oe(P1,r(V)),l(N1,r(g).bakeColdNote)}),_(y1,I)};d1(Y1,y1=>{o.proofMethod==="Room"?y1(p1):y1(h1,-1)})}e(U1);var K=n(U1,2),C=a(K),h=a(C,!0);e(C);var w=n(C,2),X=a(w);e(w),e(K);var e1=n(K,2),A1=a(e1,!0);e(e1),e(x),e(N);var q=n(N,2);{var S1=y1=>{var I=N3(),r1=a(I),i1=n(r1,2),v1=a(i1),o1=a(v1),M1=a(o1,!0);e(o1);var w1=n(o1,2);e(v1);var P1=n(v1,2),I1=a(P1),N1=a(I1,!0);e(I1);var G1=n(I1,2),ee=a(G1),ze=a(ee,!0);e(ee);var ie=n(ee,2),Se=a(ie,!0);e(ie),e(G1);var he=n(G1,2),_e=a(he),Me=a(_e,!0);e(_e);var ue=n(_e,2),xe=a(ue,!0);e(ue),e(he),e(P1);var ke=n(P1,2),te=a(ke),He=a(te,!0);e(te),e(ke),e(i1),e(I),R(()=>{Z(r1,"aria-label",r(g).ariaLabels.closeTimingBarModal),l(M1,r(g).timingBarsModalTitle),Z(w1,"aria-label",r(g).ariaLabels.closeButton),l(N1,r(g).timingBarsModalIntro),l(ze,r(g).timingBarsBulkTitle),l(Se,r(g).timingBarsBulkBody),l(Me,r(g).timingBarsColdTitle),l(xe,r(g).timingBarsColdBody),l(He,r(g).done)}),j("click",r1,()=>U(A,!1)),j("click",w1,()=>U(A,!1)),j("click",te,()=>U(A,!1)),_(y1,I)};d1(q,y1=>{r(A)&&y1(S1)})}R((y1,I,r1,i1,v1,o1,M1,w1)=>{l(P,r(g).timing),Z(B,"aria-label",r(g).ariaLabels.learnTimingBars),u1(Y,1,`badge badge-soft ${W[o.formula.tempBand]??"badge-ghost"??""} badge-md font-medium`),l(a1,`${r(g).tempBands[o.formula.tempBand]??""} (${y1??""})`),u1(b1,1,`badge badge-soft ${J[o.formula.hydrationBand]??"badge-ghost"??""} badge-md font-medium`),l(l1,`${r(g).hydrationBands[o.formula.hydrationBand]??""} ${r(g).hydration??""} (${I??""}%)`),l(x1,`${r1??""}% ${r(g).inoculation??""}`),l(B1,r(g).bulkFermentation),l(H1,`${i1??""} – ${v1??""}`),oe(k1,r($)),oe(T1,r(k)),l(X1,r(g).fastest),l(Q1,r(g).slowest),l(O1,o1),l(h,r(g).totalActiveTime),l(X,`${M1??""} –
				${w1??""}`),l(A1,r(g).timingDisclaimer)},[()=>s().tempUnit==="F"?(o.formula.effectiveTempC*9/5+32).toFixed(1)+"°F":o.formula.effectiveTempC.toFixed(1)+"°C",()=>o.formula.finalHydrationPct.toFixed(1),()=>o.formula.inoculationPct.toFixed(1),()=>D1(o.timing.bulkMin*60),()=>D1(o.timing.bulkMax*60),()=>r(g).foldSchedule(o.timing.foldCount,o.timing.foldIntervalMins),()=>D1((o.timing.bulkMin+(o.proofMethod==="Room"?o.timing.proofMin:o.timing.coldRetardMin))*60+d),()=>D1((o.timing.bulkMax+(o.proofMethod==="Room"?o.timing.proofMax:o.timing.coldRetardMax))*60+i)]),j("click",B,()=>U(A,!0)),_(t,L),De(),f()}st(["click"]);var U3=E("<div> </div>"),V3=E("<div> </div> <!>",1),q3=E("<div> </div>"),K3=E("<p> </p>"),Y3=E('<button type="button"><!></button>'),Z3=E('<div class="flex gap-2 mt-1.5 flex-wrap"></div>'),J3=E('<li class="relative flex gap-3 pb-3 cursor-pointer select-none group pl-11" role="checkbox" tabindex="0"><div class="absolute top-0 bottom-0 w-px left-4 bg-secondary/20"></div> <div><span class="-rotate-45"><!></span></div> <div><div class="flex items-start justify-between gap-2"><span> </span> <div class="text-right shrink-0"><!></div></div> <!> <!></div></li>'),X3=E('<div class="absolute bottom-0 w-px left-4 top-8 bg-secondary/20"></div>'),Q3=E("<div> </div>"),eo=E("<div> </div> <!>",1),to=E("<div> </div>"),ao=E("<p> </p>"),ro=E("<button><!></button>"),oo=E('<div class="flex flex-wrap items-center gap-2 mt-2"></div>'),no=E('<li class="relative flex gap-4 pb-5 cursor-pointer select-none group" role="checkbox" tabindex="0"><!> <div><!></div> <div><div class="flex items-start justify-between gap-2"><span> </span> <div class="text-right shrink-0"><!></div></div> <!> <!></div></li>'),so=E('<div class="shadow-sm card bg-base-100 ring-1 ring-base-300/70"><div class="p-5 card-body"><h2 class="mb-1 text-base font-semibold tracking-wide uppercase text-base-content"> </h2> <p class="mb-3 text-xs italic text-base-content/60"> </p> <ol class="relative space-y-0"></ol></div></div>');function lo(t,o){$e(o,!0);const c=()=>se(ye,"$lang",s),[s,b]=Le(),f=m1(()=>Ee[c()]);let d=le($2(new Set)),i=le($2(new Map)),g=le("");Ht(()=>{const x=JSON.stringify(o.steps.map(T=>T.label+"|"+T.durationMins+"|"+T.rangeMinMins));x!==r(g)&&(U(g,x,!0),U(d,new Set,!0),U(i,new Map,!0))});function A(x){const T=new Set(r(d));T.has(x)?T.delete(x):T.add(x),U(d,T,!0)}function y(x,T){const z=new Map(r(i)),P=new Set(z.get(x)??[]);P.has(T)?P.delete(T):P.add(T),z.set(x,P),U(i,z,!0);const B=o.steps[x]?.setCount??0;if(B>0&&P.size===B){const G=new Set(r(d));G.add(x),U(d,G,!0)}}function S(x,T){return r(i).get(x)?.has(T)??!1}const W=m1(()=>{let x=0;if(o.scheduleMode!=="clock"||!o.startTime)return o.steps.map(B=>{const G=B.isSubStep?-1:x++;return{step:B,clockTime:null,endClockTime:null,topLevelIndex:G}});let T=0,z=0,P=0;return o.steps.map(B=>{const G=B.isSubStep?-1:x++;if(B.isSubStep){const Y=Ct(o.startTime,z+P),a1=B.durationMins??(B.rangeMinMins!=null?B.rangeMinMins:0);P+=a1;const b1=Ct(o.startTime,z+P);return{step:B,clockTime:Y,endClockTime:b1,topLevelIndex:G}}else{T=Math.max(T,z+P),z=T,P=0;const Y=Ct(o.startTime,T),a1=B.durationMins??(B.rangeMinMins!=null?B.rangeMinMins:0);T+=a1;const b1=Ct(o.startTime,T);return{step:B,clockTime:Y,endClockTime:b1,topLevelIndex:G}}})});function J(x){return x.durationMins!==null&&x.durationMins!==void 0?D1(x.durationMins):x.rangeMinMins!==void 0&&x.rangeMaxMins!==void 0?`${D1(x.rangeMinMins)} – ${D1(x.rangeMaxMins)}`:""}var $=so(),k=a($),u=a(k),D=a(u,!0);e(u);var V=n(u,2),L=a(V,!0);e(V);var N=n(V,2);J1(N,21,()=>r(W),ge,(x,T,z)=>{let P=()=>r(T).step,B=()=>r(T).clockTime,G=()=>r(T).endClockTime,Y=()=>r(T).topLevelIndex;var a1=b2(),b1=ne(a1);{var l1=x1=>{var g1=J3(),O=n(a(g1),2),z1=a(O),B1=a(z1);{var R1=p1=>{var h1=fe("✓");_(p1,h1)},H1=m1(()=>r(d).has(z));d1(B1,p1=>{r(H1)&&p1(R1)})}e(z1),e(O);var L1=n(O,2),k1=a(L1),T1=a(k1),C1=a(T1,!0);e(T1);var F1=n(T1,2),X1=a(F1);{var W1=p1=>{var h1=V3(),K=ne(h1),C=a(K);e(K);var h=n(K,2);{var w=X=>{var e1=U3(),A1=a(e1);e(e1),R(q=>{u1(e1,1,`text-[10px] tabular-nums ${q??""}`),l(A1,`${r(f).clockEnd??""} ${G()??""}`)},[()=>r(d).has(z)?"text-base-content/40 line-through":"text-base-content/50"]),_(X,e1)};d1(h,X=>{G()&&G()!==B()&&X(w)})}R(X=>{u1(K,1,`text-xs tabular-nums ${X??""}`),l(C,`${r(f).clockStart??""} ${B()??""}`)},[()=>r(d).has(z)?"text-base-content/40 line-through":"text-secondary/70"]),_(p1,h1)},Q1=p1=>{var h1=q3(),K=a(h1,!0);e(h1),R((C,h)=>{u1(h1,1,`text-xs tabular-nums ${C??""}`),l(K,h)},[()=>r(d).has(z)?"text-base-content/40 line-through":"text-secondary/70",()=>J(P())]),_(p1,h1)};d1(X1,p1=>{o.scheduleMode==="clock"&&B()?p1(W1):p1(Q1,-1)})}e(F1),e(k1);var E1=n(k1,2);{var O1=p1=>{var h1=K3(),K=a(h1,!0);e(h1),R(C=>{u1(h1,1,`text-[11px] mt-0.5 leading-snug ${C??""}`),l(K,P().notes)},[()=>r(d).has(z)?"text-base-content/25 line-through":"text-base-content/55"]),_(p1,h1)};d1(E1,p1=>{P().notes&&p1(O1)})}var U1=n(E1,2);{var Y1=p1=>{var h1=Z3();J1(h1,21,()=>Array(P().setCount),ge,(K,C,h)=>{var w=Y3(),X=a(w);{var e1=q=>{var S1=fe("✓");_(q,S1)},A1=m1(()=>S(z,h));d1(X,q=>{r(A1)&&q(e1)})}e(w),R(q=>u1(w,1,`w-5 h-5 rounded border-2 text-[10px] font-bold flex items-center justify-center transition-colors
                        ${q??""}`),[()=>S(z,h)?"bg-success/15 border-success/40 text-success":"border-base-300 hover:border-secondary/50"]),j("click",w,q=>{q.stopPropagation(),y(z,h)}),_(K,w)}),e(h1),_(p1,h1)};d1(U1,p1=>{P().setCount&&P().setCount>0&&p1(Y1)})}e(L1),e(g1),R((p1,h1,K,C)=>{Z(g1,"aria-checked",p1),u1(O,1,`shrink-0 w-5 h-5 rounded-sm rotate-45 text-[9px] font-bold flex items-center justify-center z-10 transition-colors mt-0.5
							${h1??""}`),u1(L1,1,`flex-1 min-w-0 transition-opacity ${K??""}`),u1(T1,1,`text-xs font-medium leading-tight transition-colors
									${C??""}`),l(C1,P().label)},[()=>r(d).has(z),()=>r(d).has(z)?"bg-success/15 text-success":"bg-secondary/10 text-secondary/70 group-hover:bg-secondary/20",()=>r(d).has(z)?"opacity-50":"",()=>r(d).has(z)?"text-base-content/40 line-through":"text-base-content/80"]),j("click",g1,()=>A(z)),j("keydown",g1,p1=>{(p1.key==="Enter"||p1.key===" ")&&(p1.preventDefault(),A(z))}),_(x1,g1)},c1=x1=>{var g1=no(),O=a(g1);{var z1=C=>{var h=X3();_(C,h)};d1(O,C=>{z<r(W).length-1&&C(z1)})}var B1=n(O,2),R1=a(B1);{var H1=C=>{var h=fe("✓");_(C,h)},L1=m1(()=>r(d).has(z)),k1=C=>{var h=fe();R(()=>l(h,Y()+1)),_(C,h)};d1(R1,C=>{r(L1)?C(H1):C(k1,-1)})}e(B1);var T1=n(B1,2),C1=a(T1),F1=a(C1),X1=a(F1,!0);e(F1);var W1=n(F1,2),Q1=a(W1);{var E1=C=>{var h=eo(),w=ne(h),X=a(w);e(w);var e1=n(w,2);{var A1=q=>{var S1=Q3(),y1=a(S1);e(S1),R(I=>{u1(S1,1,`text-xs text-base-content/50 tabular-nums ${I??""}`),l(y1,`${r(f).clockEnd??""} ${G()??""}`)},[()=>r(d).has(z)?"line-through":""]),_(q,S1)};d1(e1,q=>{G()&&G()!==B()&&q(A1)})}R(q=>{u1(w,1,`text-xs font-bold tabular-nums ${q??""}`),l(X,`${r(f).clockStart??""} ${B()??""}`)},[()=>r(d).has(z)?"text-base-content/50 line-through":"text-secondary"]),_(C,h)},O1=C=>{var h=to(),w=a(h,!0);e(h),R((X,e1)=>{u1(h,1,`text-xs font-bold tabular-nums ${X??""}`),l(w,e1)},[()=>r(d).has(z)?"text-base-content/50 line-through":"text-secondary",()=>J(P())]),_(C,h)};d1(Q1,C=>{o.scheduleMode==="clock"&&B()?C(E1):C(O1,-1)})}e(W1),e(C1);var U1=n(C1,2);{var Y1=C=>{var h=ao(),w=a(h,!0);e(h),R(X=>{u1(h,1,`text-xs mt-1 leading-snug ${X??""}`),l(w,P().notes)},[()=>r(d).has(z)?"text-base-content/30 line-through":"text-base-content/70"]),_(C,h)};d1(U1,C=>{P().notes&&C(Y1)})}var p1=n(U1,2);{var h1=C=>{var h=oo();J1(h,21,()=>Array.from({length:P().setCount},(w,X)=>X),ge,(w,X)=>{var e1=ro(),A1=a(e1);{var q=I=>{var r1=fe("✓");_(I,r1)},S1=m1(()=>S(z,r(X))),y1=I=>{var r1=fe();R(()=>l(r1,r(X)+1)),_(I,r1)};d1(A1,I=>{r(S1)?I(q):I(y1,-1)})}e(e1),R(I=>u1(e1,1,`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center transition-colors ${I??""}`),[()=>S(z,r(X))?"bg-success/15 text-success":"bg-secondary/15 text-secondary hover:bg-secondary/25"]),j("click",e1,I=>{I.stopPropagation(),y(z,r(X))}),_(w,e1)}),e(h),_(C,h)},K=m1(()=>P().setCount&&!r(d).has(z));d1(p1,C=>{r(K)&&C(h1)})}e(T1),e(g1),R((C,h,w,X)=>{Z(g1,"aria-checked",C),u1(B1,1,`shrink-0 w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center z-10 transition-colors
							${h??""}`),u1(T1,1,`flex-1 min-w-0 transition-opacity ${w??""}`),u1(F1,1,`text-sm font-semibold leading-tight transition-colors
									${X??""}`),l(X1,P().label)},[()=>r(d).has(z),()=>r(d).has(z)?"bg-success/15 text-success":"bg-secondary/15 text-secondary group-hover:bg-secondary/25",()=>r(d).has(z)?"opacity-50":"",()=>r(d).has(z)?"text-base-content/50 line-through":"text-base-content"]),j("click",g1,()=>A(z)),j("keydown",g1,C=>{(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),A(z))}),_(x1,g1)};d1(b1,x1=>{P().isSubStep?x1(l1):x1(c1,-1)})}_(x,a1)}),e(N),e(k),e($),R(()=>{l(D,r(f).schedule),l(L,r(f).scheduleComplete)}),_(t,$),De(),b()}st(["click","keydown"]);var io=E('<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70"><div class="card-body p-5"><h2 class="text-base font-semibold text-base-content uppercase tracking-wide mb-3"> </h2> <div class="text-sm text-base-content space-y-2"><p><span class="font-semibold text-secondary"> </span> </p> <p><span class="font-semibold text-warning"> </span> </p> <p><span class="font-semibold text-error"> </span> </p></div> <div class="mt-4 pt-4 border-t border-base-200 text-xs text-base-content/70 space-y-1"><p><strong> </strong> </p> <p><strong> </strong> </p> <p><strong> </strong> </p></div></div></div>');function co(t,o){$e(o,!0);const c=()=>se(ye,"$lang",s),[s,b]=Le(),f=m1(()=>Ee[c()]),d=m1(()=>r(f).guidance[o.crumbGoal]),i=m1(()=>r(f).crumbGoalNames[o.crumbGoal]);var g=io(),A=a(g),y=a(A),S=a(y,!0);e(y);var W=n(y,2),J=a(W),$=a(J),k=a($,!0);e($);var u=n($);e(J);var D=n(J,2),V=a(D),L=a(V,!0);e(V);var N=n(V);e(D);var x=n(D,2),T=a(x),z=a(T,!0);e(T);var P=n(T);e(x),e(W);var B=n(W,2),G=a(B),Y=a(G),a1=a(Y,!0);e(Y);var b1=n(Y);e(G);var l1=n(G,2),c1=a(l1),x1=a(c1,!0);e(c1);var g1=n(c1);e(l1);var O=n(l1,2),z1=a(O),B1=a(z1,!0);e(z1);var R1=n(z1);e(O),e(B),e(A),e(g),R(H1=>{l(S,r(f).readingYourCrumb),l(k,H1),l(u,` ${r(d).description??""}`),l(L,r(f).underFermented),l(N,` ${r(d).underFermented??""}`),l(z,r(f).overFermented),l(P,` ${r(d).overFermented??""}`),l(a1,r(f).floatTest),l(b1,` ${r(f).floatTestDesc??""}`),l(x1,r(f).pokeTest),l(g1,` ${r(f).pokeTestDesc??""}`),l(B1,r(f).jiggleTest),l(R1,` ${r(f).jiggleTestDesc??""}`)},[()=>r(f).target(r(i))]),_(t,g),De(),b()}var uo=E('<div class="flex justify-between items-center py-2 border-b border-base-200"><dt class="text-sm text-base-content/70"> </dt> <dd class="text-sm font-semibold text-base-content tabular-nums"> </dd></div>'),mo=E('<button type="button" class="fixed inset-0 z-40 bg-neutral/40 backdrop-blur-sm"></button> <div class="fixed bottom-0 left-0 right-0 z-50 max-h-[70vh] overflow-y-auto rounded-t-2xl bg-base-100 shadow-xl ring-1 ring-base-300/80" role="dialog" aria-modal="true"><div class="sticky top-0 flex items-center justify-between px-5 py-4 bg-base-100/95 backdrop-blur border-b border-base-200"><h2 class="text-base font-semibold text-base-content"> </h2> <button type="button" class="btn btn-ghost btn-sm btn-circle"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="px-5 py-4"><p class="text-sm text-base-content/70 mb-4"> </p> <dl class="space-y-2"></dl></div> <div class="px-5 pb-6"><button type="button" class="btn btn-primary w-full"> </button></div></div>',1);function po(t,o){$e(o,!0);const c=()=>se(ye,"$lang",b),s=()=>se(p2,"$assumptionsOpen",b),[b,f]=Le(),d=m1(()=>Ee[c()]);function i(){p2.set(!1)}var g=b2(),A=ne(g);{var y=S=>{var W=mo(),J=ne(W),$=n(J,2),k=a($),u=a(k),D=a(u,!0);e(u);var V=n(u,2);e(k);var L=n(k,2),N=a(L),x=a(N,!0);e(N);var T=n(N,2);J1(T,21,()=>Object.entries(o.assumptions),ge,(G,Y)=>{var a1=m1(()=>mr(r(Y),2));let b1=()=>r(a1)[0],l1=()=>r(a1)[1];var c1=uo(),x1=a(c1),g1=a(x1,!0);e(x1);var O=n(x1,2),z1=a(O,!0);e(O),e(c1),R(()=>{l(g1,b1()),l(z1,l1())}),_(G,c1)}),e(T),e(L);var z=n(L,2),P=a(z),B=a(P,!0);e(P),e(z),e($),R(()=>{Z(J,"aria-label",r(d).ariaLabels.closeAssumptionsDrawer),Z($,"aria-label",r(d).calculationAssumptions),l(D,r(d).calculationAssumptions),Z(V,"aria-label",r(d).ariaLabels.closeButton),l(x,r(d).assumptionsDesc),l(B,r(d).done)}),j("click",J,i),j("click",V,i),j("click",P,i),_(S,W)};d1(A,S=>{s()&&S(y)})}_(t,g),De(),f()}st(["click"]);var vo=E('<div class="install-cta-row border-b border-neutral-content/15 bg-neutral/70 svelte-1uha8ag"><div class="max-w-2xl mx-auto px-4 py-2 flex justify-end"><button type="button"> </button></div></div>'),bo=E("<!> <!> <!> <!>",1),go=E('<div class="card bg-base-100/95 shadow-sm ring-1 ring-base-300/70"><div class="card-body items-center text-center"><div class="text-4xl mb-3" aria-hidden="true">⚖️</div> <p class="text-base-content/70 font-medium"> </p> <p class="text-base-content/50 text-sm mt-1"> </p></div></div>'),fo=E('<dialog class="modal modal-open" aria-modal="true" aria-labelledby="install-help-title"><div class="modal-box max-w-lg"><h3 id="install-help-title" class="text-lg font-semibold"> </h3> <p class="mt-2 text-sm text-base-content/80"> </p> <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-base-content/90"><li> </li> <li> </li> <li> </li></ul> <div class="modal-action"><button type="button" class="btn btn-primary btn-sm rounded-full"> </button></div></div> <form method="dialog" class="modal-backdrop"><button type="button"> </button></form></dialog>'),ho=E('<div class="min-h-screen bg-gradient-to-b from-base-200 via-base-200 to-base-300/40"><header class="bg-neutral/95 text-neutral-content border-b border-primary/25 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-neutral/90 sticky top-0 z-30"><!> <div class="max-w-2xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-y-3"><div class="flex items-center gap-3 min-w-0"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-xl text-primary ring-1 ring-primary/35" aria-hidden="true">🍞</span> <div><h1 class="text-base font-bold text-neutral-content leading-tight">DoughCulator</h1> <p class="text-xs text-neutral-content/70 leading-tight"> </p></div></div> <div class="flex items-center flex-wrap justify-end gap-2"><label class="swap swap-rotate inline-grid h-9 w-9 place-items-center rounded-full border border-transparent bg-transparent text-neutral-content/75 transition-colors duration-200 hover:border-neutral-content/35 hover:bg-neutral-content/10 hover:text-neutral-content focus-within:border-primary/45 focus-within:ring-2 focus-within:ring-primary/55 focus-within:ring-offset-2 focus-within:ring-offset-neutral/95"><input type="checkbox" class="sr-only appearance-none"/> <svg class="swap-on h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg> <svg class="swap-off h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg></label> <div class="join border border-neutral-content/25 rounded-full bg-neutral-content/5 p-0.5"><button type="button">EN</button> <button type="button">ES</button> <button type="button">SV</button></div> <button type="button" class="btn btn-outline btn-sm rounded-full border-neutral-content/25 text-neutral-content/80 hover:border-neutral-content/40 hover:bg-neutral-content/10 hover:text-neutral-content"> </button> <button type="button"> </button></div></div></header> <main class="max-w-2xl mx-auto px-4 py-6 space-y-4"><!> <!></main> <footer class="max-w-2xl mx-auto px-4 py-8 text-center text-xs text-base-content/60"><p> </p> <p class="mt-1"> </p> <div class="mt-6 flex justify-center"><a href="https://www.buymeacoffee.com/alestryperez" target="_blank" rel="noopener noreferrer"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important; width: 217px !important;" loading="lazy"/></a></div></footer> <!></div> <!>',1);function wo(t,o){$e(o,!0);const c=()=>se(ye,"$lang",f),s=()=>se(ta,"$result",f),b=()=>se(be,"$inputs",f),[f,d]=Le(),i=m1(()=>Ee[c()]);let g=le(!1),A=le(null),y=le(!1),S=le("idle");function W(){const h=s().formula,w=s().schedule,X=s().assumptions,e1=w.map((q,S1)=>{let y1="";return q.durationMins!==null&&q.durationMins!==void 0?y1=D1(q.durationMins):q.rangeMinMins!==void 0&&q.rangeMaxMins!==void 0&&(y1=`${D1(q.rangeMinMins)} – ${D1(q.rangeMaxMins)}`),`${S1+1}. ${q.label}${y1?" ("+y1+")":""}${q.notes?" — "+q.notes:""}`}),A1=Object.entries(X).map(([q,S1])=>`${q}: ${S1}`);return[r(i).copyTitle,r(i).copyDivider,`${r(i).totalFlourRow}: ${Math.round(h.totalFlourG)}g (${b().flourBlend.map(q=>`${r(i).flourTypes[q.type]??q.type}: ${Math.round(h.totalFlourG*q.pct/100)}g`).join(", ")})`,`${r(i).water}: ${Math.round(h.totalWaterG)}g (${h.finalHydrationPct.toFixed(1)}%)`,`${r(i).saltRow}: ${Math.round(h.saltG)}g`,`${r(i).starter}: ${Math.round(h.starterTotalG)}g`,"",r(i).copyScheduleHeader,r(i).copyScheduleDivider,...e1,"",r(i).copyAssumptionsHeader,r(i).copyAssumptionsDivider,...A1,"",r(i).copyFooter].join(`
`)}async function J(){const h=W();try{if(!navigator.clipboard?.writeText)throw new Error("Clipboard API unavailable");await navigator.clipboard.writeText(h),U(g,!0),setTimeout(()=>U(g,!1),2500)}catch{const w=document.createElement("textarea");w.value=h,w.setAttribute("readonly",""),w.style.position="fixed",w.style.opacity="0",w.style.pointerEvents="none",document.body.appendChild(w),w.focus(),w.select();try{document.execCommand("copy")&&(U(g,!0),setTimeout(()=>U(g,!1),2500))}finally{document.body.removeChild(w)}}}function $(){p2.set(!0)}function k(h){ye.set(h)}function u(){if(typeof window>"u")return!1;const h=navigator;return window.matchMedia("(display-mode: standalone)").matches||h.standalone===!0}async function D(){if(u()){U(S,"installed");return}if(!r(A)){U(y,!0);return}await r(A).prompt();const{outcome:h}=await r(A).userChoice;U(S,h,!0),U(A,null),U(y,!1)}function V(){U(y,!1)}const L=m1(()=>b().totalFlourInputG);let N=le(!1);Ht(()=>{if(u()){U(S,"installed"),U(A,null);return}const h=X=>{const e1=X;e1.preventDefault(),U(A,e1,!0),U(S,"idle")},w=()=>{U(S,"installed"),U(A,null),U(y,!1)};return window.addEventListener("beforeinstallprompt",h),window.addEventListener("appinstalled",w),()=>{window.removeEventListener("beforeinstallprompt",h),window.removeEventListener("appinstalled",w)}}),Ht(()=>{U(N,localStorage.getItem("theme")==="dark")}),Ht(()=>{const h=r(N)?"dark":"bumblebee";document.documentElement.setAttribute("data-theme",h),localStorage.setItem("theme",h)});var x=ho();br("1uha8ag",h=>{Y2(()=>{pr.title="DoughCulator"})});var T=ne(x),z=a(T),P=a(z);{var B=h=>{var w=vo(),X=a(w),e1=a(X),A1=a(e1,!0);e(e1),e(X),e(w),R(()=>{u1(e1,1,`btn btn-xs sm:btn-sm rounded-full shadow-sm ${r(A)?"btn-primary":"btn-outline border-neutral-content/30 text-neutral-content hover:border-neutral-content/45 hover:bg-neutral-content/10 hover:text-neutral-content"}`),l(A1,r(i).saveToHomeScreen)}),j("click",e1,D),_(h,w)};d1(P,h=>{r(S)!=="installed"&&h(B)})}var G=n(P,2),Y=a(G),a1=n(a(Y),2),b1=n(a(a1),2),l1=a(b1,!0);e(b1),e(a1),e(Y);var c1=n(Y,2),x1=a(c1),g1=a(x1);ce(g1),nt(4),e(x1);var O=n(x1,2),z1=a(O),B1=n(z1,2),R1=n(B1,2);e(O);var H1=n(O,2),L1=a(H1,!0);e(H1);var k1=n(H1,2),T1=a(k1,!0);e(k1),e(c1),e(G),e(z);var C1=n(z,2),F1=a(C1);H3(F1,{});var X1=n(F1,2);{var W1=h=>{var w=bo(),X=ne(w);E3(X,{get formula(){return s().formula},get flourBlend(){return b().flourBlend}});var e1=n(X,2);W3(e1,{get timing(){return s().timing},get formula(){return s().formula},get proofMethod(){return b().proofMethod}});var A1=n(e1,2);{let S1=m1(()=>b().scheduleMode==="clock"?b().startTime??"08:00":null);lo(A1,{get steps(){return s().schedule},get scheduleMode(){return b().scheduleMode},get startTime(){return r(S1)}})}var q=n(A1,2);co(q,{get crumbGoal(){return b().crumbGoal}}),_(h,w)},Q1=h=>{var w=go(),X=a(w),e1=n(a(X),2),A1=a(e1,!0);e(e1);var q=n(e1,2),S1=a(q,!0);e(q),e(X),e(w),R(()=>{l(A1,r(i).emptyStateTitle),l(S1,r(i).emptyStateSubtitle)}),_(h,w)};d1(X1,h=>{r(L)>0?h(W1):h(Q1,-1)})}e(C1);var E1=n(C1,2),O1=a(E1),U1=a(O1,!0);e(O1);var Y1=n(O1,2),p1=a(Y1,!0);e(Y1),nt(2),e(E1);var h1=n(E1,2);{var K=h=>{var w=fo(),X=a(w),e1=a(X),A1=a(e1,!0);e(e1);var q=n(e1,2),S1=a(q,!0);e(q);var y1=n(q,2),I=a(y1),r1=a(I,!0);e(I);var i1=n(I,2),v1=a(i1,!0);e(i1);var o1=n(i1,2),M1=a(o1,!0);e(o1),e(y1);var w1=n(y1,2),P1=a(w1),I1=a(P1,!0);e(P1),e(w1),e(X);var N1=n(X,2),G1=a(N1),ee=a(G1,!0);e(G1),e(N1),e(w),R(()=>{l(A1,r(i).installHelpTitle),l(S1,r(i).installHelpIntro),l(r1,r(i).installHelpIOS),l(v1,r(i).installHelpAndroid),l(M1,r(i).installHelpDesktop),l(I1,r(i).close),Z(G1,"aria-label",r(i).close),l(ee,r(i).close)}),j("click",P1,V),j("click",G1,V),_(h,w)};d1(h1,h=>{r(y)&&h(K)})}e(T);var C=n(T,2);po(C,{get assumptions(){return s().assumptions}}),R(()=>{l(l1,r(i).appSubtitle),Z(x1,"aria-label",r(i).ariaLabels.toggleDarkMode),Z(O,"aria-label",r(i).ariaLabels.selectLanguage),u1(z1,1,`btn btn-xs join-item rounded-l-full border-0 ${c()==="en"?"btn-primary":"btn-ghost text-neutral-content/70 hover:text-neutral-content hover:bg-neutral-content/10"}`),u1(B1,1,`btn btn-xs join-item border-0 ${c()==="es"?"btn-primary":"btn-ghost text-neutral-content/70 hover:text-neutral-content hover:bg-neutral-content/10"}`),u1(R1,1,`btn btn-xs join-item rounded-r-full border-0 ${c()==="sv"?"btn-primary":"btn-ghost text-neutral-content/70 hover:text-neutral-content hover:bg-neutral-content/10"}`),l(L1,r(i).assumptions),k1.disabled=r(L)<=0,u1(k1,1,`btn btn-sm rounded-full shadow-sm ${r(g)?"btn-success":r(L)>0?"btn-primary":"btn-disabled"}`),l(T1,r(g)?r(i).copied:r(i).copyRecipe),l(U1,r(i).footerLine1),l(p1,r(i).footerLine2)}),Sr(g1,()=>r(N),h=>U(N,h)),j("click",z1,()=>k("en")),j("click",B1,()=>k("es")),j("click",R1,()=>k("sv")),j("click",H1,$),j("click",k1,J),_(t,x),De(),d()}st(["click"]);export{wo as component};
