// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }
});

// ---------- Portfolio (usato solo in portfolio.html) ----------
const projects = [
  { categoria: "Converting", progetto: "Taglierina-Riavvolgitrice Automatica per Materiali Laminati - Carta Fotosensibile", descrizione: "Svolgimento a tensione controllata di bobina madre con taglio longitudinale continuo e riavvolgimento simultaneo in bobine figlie ad alta velocità. Gestione dinamica dei profili di tiro, sincronizzazione cinemematica dei mandrini e compensazione dell'inerzia nelle fasi di accelerazione e decelerazione.", dettagli: "4 alberi, scarico automatico, alberi frizionati, posizionamento automatico taglio; specializzata per carta fotosensibile da camera oscura.", paese: "Olanda", tagClass: "tag-converting" },
  { categoria: "Siemens Special Project", progetto: "Migrazione S7-1500 pressa pressofusione Zama", descrizione: "Progetto svolto come dipendente di Siemens Italia assieme a clienti-partner. Re-engineering e migrazione dell'automazione di una pressa per pressofusione di leghe Zama da piattaforma S7-300 a S7-1500, con riscrittura della gestione matematica e meccanica della ginocchiera di chiusura e ottimizzazione delle fasi di iniezione ad alta dinamica, con regolazione della pressione in intervalli di tempo estremamente brevi durante l'iniezione del metallo fuso.", dettagli: "Utilizzo di Oggetti Tecnologici e blocchi matematici avanzati per ricalcolare cinematica e geometria della ginocchiera, con maggiore fluidità di movimento e calcolo più accurato della forza di chiusura; riscrittura degli anelli di regolazione tramite controllori PID avanzati ad alta velocità dell'S7-1500 con cicli deterministici, per una risposta dinamica superiore e riduzione dei difetti di fusione.", paese: "Italia", tagClass: "tag-siemens" },
  { categoria: "Pietra naturale", progetto: "Lucidalastre", descrizione: "Macchina con trave mobile trasversalmente sulla lastra in scorrimento, dotata di teste rotanti che si abbassano sulla superficie per levigarla e lucidarla.", dettagli: "Memorizzazione contorno lastra in ingresso e scorrimento virtuale; controllo ad alta precisione. Collaudo completato in sole 2.5 settimane in azienda e 10 giorni on-site.", paese: "Italia", tagClass: "tag-stone" },
  { categoria: "Siemens Special Project", progetto: "Saldatura automatica lamiere ondulate per filtri fumi", descrizione: "Progetto svolto come dipendente di Siemens Italia assieme a clienti-partner. Macchina per la saldatura di precisione di lamiere ondulate e microforate destinate al materiale filtrante di filtri fumi di ciminiere industriali, con posizionamento delle teste di saldatura nei punti esatti di combaciamento tra gola e picco delle lamiere sovrapposte.", dettagli: "Sensori di distanza laser a triangolazione integrati con il Motion Control per la scansione preventiva del profilo e il riposizionamento dinamico delle torce; azzeramento degli scarti da errore di posizionamento su profili complessi.", paese: "Italia", tagClass: "tag-siemens" },
  { categoria: "Siemens Special Project", progetto: "Caricatore lingotti forno fusorio a induzione", descrizione: "Progetto svolto come dipendente di Siemens Italia assieme a clienti-partner. Realizzazione di un caricatore di lingotti all'interno di un forno fusorio a induzione che alimenta la pressa per lo stampaggio di maniglie in lega Zama.", dettagli: "Automazione entry-level (microautomazione) realizzata nelle fasi iniziali di lancio del PLC S7-1200 e dei Basic Panel di seconda generazione.", paese: "Italia", tagClass: "tag-siemens" },
  { categoria: "Pietra naturale", progetto: "Calibratrice", descrizione: "Macchina con assieme a movimento verticale regolabile in altezza, dotata di mandrini elettrici con utensili diamantati per asportare materiale.", dettagli: "Regolazione PID che combina la forza di asportazione degli utensili con la velocità di avanzamento per ottimizzare i consumi elettrici.", paese: "Italia", tagClass: "tag-stone" },
  { categoria: "Converting", progetto: "Taglierina-Riavvolgitrice Automatica per Materiali Laminati - Alberi Separati", descrizione: "Svolgimento a tensione controllata di bobina madre con taglio longitudinale continuo e riavvolgimento simultaneo in bobine figlie ad alta velocità. Gestione dinamica dei profili di tiro, sincronizzazione cinemematica dei mandrini e compensazione dell'inerzia nelle fasi di accelerazione e decelerazione.", dettagli: "Alberi di avvolgimento separati, per gestire bobine di diametro/larghezza differenti sullo stesso albero.", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Pietra naturale", progetto: "Tagliatrice a filo", descrizione: "Macchina a portale scorrevole su binari trasversali che taglia blocchi di marmo in lastre tramite un filo diamantato in tensione.", dettagli: "Regolazione precisa di tensione del filo e velocità di taglio; interfaccia operatore per programmare sequenze di taglio complesse.", paese: "Italia", tagClass: "tag-stone" },
  { categoria: "Siemens Special Project", progetto: "Sistema telemetrico trenino turistico in miniera", descrizione: "Progetto svolto come dipendente di Siemens Italia assieme a clienti-partner. Sistema di monitoraggio e sicurezza passeggeri per un trenino turistico in una miniera di talco dismessa, con acquisizione dello stato dei sensori di cinture e presenza su carrozze componibili riconfigurabili senza riprogrammazione.", dettagli: "Architettura distribuita con PLC Siemens S7-1200 su ogni carrozza; il software riconosce autonomamente la topologia del convoglio e l'ordine delle carrozze, aggiornando la diagnostica centralizzata per il macchinista.", paese: "Italia", tagClass: "tag-siemens" },
  { categoria: "Converting", progetto: "Tagliaribobinatrice rotoli domestici senza anima di cartone", descrizione: "Taglierina ribobinatrice dedicata a rotoli per uso domestico (alluminio, pellicola, carta forno).", dettagli: "Avvolgitura dei rotoli senza l'utilizzo di un core rigido (sistema brevettato per iniziare e mantenere l'avvolgimento a partire da un foglio di carta).", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Taglierina-Riavvolgitrice Automatica per Materiali Laminati - Cartine Sigarette", descrizione: "Svolgimento a tensione controllata di bobina madre con taglio longitudinale continuo e riavvolgimento simultaneo in bobine figlie ad alta velocità. Gestione dinamica dei profili di tiro, sincronizzazione cinemematica dei mandrini e compensazione dell'inerzia nelle fasi di accelerazione e decelerazione.", dettagli: "Monoalbero, specializzata nel taglio di cartine da sigarette e bustine di tè.", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Intralogistica - magazzini automatici", progetto: "Magazzino verticale a casse", descrizione: "Sistema di stoccaggio automatico 'goods-to-person' composto da due colonne contrapposte di ripiani servite da un estrattore verticale.", dettagli: "Ottimizzazione spazio, gestione altezza automatica vassoi, integrazione WMS e barriere di sicurezza.", paese: "Stati Uniti", tagClass: "tag-intra" },
  { categoria: "Converting", progetto: "Taglierina-Riavvolgitrice Automatica per Materiali Laminati - Carta Termica", descrizione: "Svolgimento a tensione controllata di bobina madre con taglio longitudinale continuo e riavvolgimento simultaneo in bobine figlie ad alta velocità. Gestione dinamica dei profili di tiro, sincronizzazione cinemematica dei mandrini e compensazione dell'inerzia nelle fasi di accelerazione e decelerazione.", dettagli: "Bialbero, specializzata nel taglio di carta termica (tipo scontrini).", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Taglierina-Riavvolgitrice Automatica per Materiali Laminati - Alluminio", descrizione: "Svolgimento a tensione controllata di bobina madre con taglio longitudinale continuo e riavvolgimento simultaneo in bobine figlie ad alta velocità. Gestione dinamica dei profili di tiro, sincronizzazione cinemematica dei mandrini e compensazione dell'inerzia nelle fasi di accelerazione e decelerazione.", dettagli: "Bialbero, alberi frizionati, specializzata per alluminio.", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Taglierina-Riavvolgitrice Automatica per Materiali Laminati - Plastica", descrizione: "Svolgimento a tensione controllata di bobina madre con taglio longitudinale continuo e riavvolgimento simultaneo in bobine figlie ad alta velocità. Gestione dinamica dei profili di tiro, sincronizzazione cinemematica dei mandrini e compensazione dell'inerzia nelle fasi di accelerazione e decelerazione.", dettagli: "Bialbero, alberi frizionati, specializzata per plastica.", paese: "Cina", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Taglierina-Riavvolgitrice Automatica per Materiali Laminati - Scarico Automatico", descrizione: "Svolgimento a tensione controllata di bobina madre con taglio longitudinale continuo e riavvolgimento simultaneo in bobine figlie ad alta velocità. Gestione dinamica dei profili di tiro, sincronizzazione cinemematica dei mandrini e compensazione dell'inerzia nelle fasi di accelerazione e decelerazione.", dettagli: "4 alberi, scarico automatico, alberi frizionati.", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Pietra naturale", progetto: "Spazzola di pulitura lastre", descrizione: "Macchina dotata di spazzola con funzione di brandeggio trasversale rispetto allo scorrimento della lastra, che eroga acqua e acido per la pulitura, sincronizzando il movimento con la velocità di avanzamento.", dettagli: "-", paese: "Italia", tagClass: "tag-stone" },
  { categoria: "Converting", progetto: "Cartonatrice (Cartoning Machine) per rotoli domestici", descrizione: "Preleva il fustellato/astuccio piatto, lo forma, inserisce il singolo prodotto (es. il rotolo) e chiude la scatola.", dettagli: "Interfacciamento con robot manipolatore per gestione del rotolo in formato industriale", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Pietra naturale", progetto: "Ceratrice", descrizione: "Macchina analoga alla spazzola di pulitura, dedicata all'applicazione della cera lucidante sulla lastra.", dettagli: "Gestione di dosaggio estremamente preciso del prodotto, data l'elevata costosità della cera.", paese: "Italia", tagClass: "tag-stone" },
  { categoria: "Converting", progetto: "Taglierina-Riavvolgitrice Automatica per Materiali Laminati - Compatta", descrizione: "Svolgimento a tensione controllata di bobina madre con taglio longitudinale continuo e riavvolgimento simultaneo in bobine figlie ad alta velocità. Gestione dinamica dei profili di tiro, sincronizzazione cinemematica dei mandrini e compensazione dell'inerzia nelle fasi di accelerazione e decelerazione.", dettagli: "Bialbero, piccole dimensioni.", paese: "Cina", tagClass: "tag-converting" },
  { categoria: "Intralogistica - magazzini automatici", progetto: "Magazzino automatico a casse di grandi dimensioni", descrizione: "Magazzino automatico a scaffalature contrapposte servito da trasloelevatori su rotaia.", dettagli: "Lunghezza 150m, altezza 30m, ~5000 posizioni cassa. Trasloelevatori a tre assi gestiti da WMS/WCS.", paese: "Stati Uniti", tagClass: "tag-intra" },
  { categoria: "Intralogistica - magazzini automatici", progetto: "Manipolatore portale cartesiano per prelievo singola lamiera", descrizione: "Portale cartesiano con organo di presa a ventose sottovuoto per il picking di singoli fogli di lamiera.", dettagli: "Rilevamento anomalia doppio prelievo tramite misura del vuoto tra le lamiere.", paese: "Germania", tagClass: "tag-intra" },
  { categoria: "Intralogistica - magazzini automatici", progetto: "Manipolatore regolarizzatore pacchi lamiera", descrizione: "Macchina per la regolarizzazione della forma di pacchi di lamiera disposti in modo irregolare.", dettagli: "Deposito su supporto/pallet destinato all'inserimento in magazzino automatico.", paese: "Germania", tagClass: "tag-intra" },
  { categoria: "Progettazione elettrica", progetto: "Centrale termica di backup e pompaggio teleriscaldamento", descrizione: "Progettazione elettrica di impianti a servizio di reti di teleriscaldamento, comprendenti centrali termiche di backup e stazioni di pompaggio.", dettagli: "Fossalta di Portogruaro (VE).", paese: "Italia", tagClass: "tag-elec" },
  { categoria: "Progettazione elettrica", progetto: "Impianti elettrici, antincendio e laboratorio ATEX", descrizione: "Progettazione integrata di impianti elettrici, impianti antincendio e impianti di laboratorio con zone classificate ATEX per uno stabilimento produttivo.", dettagli: "-", paese: "Italia", tagClass: "tag-elec" },
  { categoria: "Converting", progetto: "Tagliaribobinatrice rotoli domestici", descrizione: "Taglierina ribobinatrice dedicata a rotoli per uso domestico (alluminio, pellicola, carta forno).", dettagli: "Software di gestione realizzato internamente.", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Ispezionatrice", descrizione: "Macchina che controlla in linea la qualità del materiale in bobina, rilevando difetti superficiali o dimensionali.", dettagli: "-", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Ispezionatrice", descrizione: "Macchina che controlla in linea la qualità del materiale in bobina, rilevando difetti superficiali o dimensionali.", dettagli: "-", paese: "Cina", tagClass: "tag-converting" },
  { categoria: "Progettazione elettrica", progetto: "Centrale di pompaggio teleriscaldamento", descrizione: "Revisione del progetto elettrico di una centrale di pompaggio a servizio di una rete di teleriscaldamento.", dettagli: "Torino.", paese: "Italia", tagClass: "tag-elec" },
  { categoria: "Progettazione elettrica", progetto: "Impianto di cogenerazione", descrizione: "Progettazione elettrica di un impianto di cogenerazione a servizio di uno stabilimento produttivo.", dettagli: "Cuneo.", paese: "Italia", tagClass: "tag-elec" },
  { categoria: "Converting", progetto: "Goffratore", descrizione: "Macchina che imprime un rilievo (goffratura) sulla superficie del materiale in bobina.", dettagli: "-", paese: "Cina", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Spolettatrice", descrizione: "Macchina che avvolge nastri/bende strette di materiale su rocchetti di plastica.", dettagli: "-", paese: "Cina", tagClass: "tag-converting" }
];

let currentCategory = 'all';

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  const searchInput = document.getElementById('searchInput');
  const searchVal = searchInput ? searchInput.value.toLowerCase() : '';
  grid.innerHTML = '';

  const filtered = projects.filter(p => {
    const matchesCategory = (currentCategory === 'all' || p.categoria === currentCategory);
    const matchesSearch = p.progetto.toLowerCase().includes(searchVal) ||
      p.descrizione.toLowerCase().includes(searchVal) ||
      p.dettagli.toLowerCase().includes(searchVal) ||
      p.paese.toLowerCase().includes(searchVal);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">Nessun progetto trovato per questa ricerca.</div>';
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'pcard';
    card.innerHTML = `
      <div>
        <div class="pcard-header">
          <span class="pcard-title">${p.progetto}</span>
          <span class="tag ${p.tagClass}">${p.categoria.split(' ')[0]}</span>
        </div>
        <div class="pcard-body">${p.descrizione}</div>
        ${p.dettagli !== '-' ? `<div class="pcard-details"><strong>Dettagli:</strong> ${p.dettagli}</div>` : ''}
      </div>
      <div class="pcard-footer">
        <span>Paese di destinazione:</span>
        <span class="country-flag">${p.paese}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects();
}

function filterProjects() {
  renderProjects();
}

document.addEventListener('DOMContentLoaded', renderProjects);