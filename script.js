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
  { categoria: "Converting", progetto: "Taglierina ribobinatrice", descrizione: "Macchina del converting che ricava n bobine figlie da una bobina madre di materiale laminato, svolgendolo a tensione controllata e tagliandolo longitudinalmente.", dettagli: "Bialbero, piccole dimensioni.", paese: "Cina", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Taglierina ribobinatrice", descrizione: "Macchina del converting che ricava n bobine figlie da una bobina madre di materiale laminato, svolgendolo a tensione controllata e tagliandolo longitudinalmente.", dettagli: "Monoalbero.", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Taglierina ribobinatrice", descrizione: "Macchina del converting che ricava n bobine figlie da una bobina madre di materiale laminato, svolgendolo a tensione controllata e tagliandolo longitudinalmente.", dettagli: "Bialbero, specializzata nel taglio di carta termica (tipo scontrini).", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Taglierina ribobinatrice", descrizione: "Macchina del converting che ricava n bobine figlie da una bobina madre di materiale laminato, svolgendolo a tensione controllata e tagliandolo longitudinalmente.", dettagli: "Monoalbero, specializzata nel taglio di cartine da sigarette e bustine di tè.", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Taglierina ribobinatrice", descrizione: "Macchina del converting che ricava n bobine figlie da una bobina madre di materiale laminato, svolgendolo a tensione controllata e tagliandolo longitudinalmente.", dettagli: "Alberi di avvolgimento separati, per gestire bobine di diametro/larghezza differenti sullo stesso albero.", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Taglierina ribobinatrice", descrizione: "Macchina del converting che ricava n bobine figlie da una bobina madre di materiale laminato, svolgendolo a tensione controllata e tagliandolo longitudinalmente.", dettagli: "Bialbero, alberi frizionati, specializzata per alluminio.", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Taglierina ribobinatrice", descrizione: "Macchina del converting che ricava n bobine figlie da una bobina madre di materiale laminato, svolgendolo a tensione controllata e tagliandolo longitudinalmente.", dettagli: "Bialbero, alberi frizionati, specializzata per plastica.", paese: "Cina", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Taglierina ribobinatrice", descrizione: "Macchina del converting che ricava n bobine figlie da una bobina madre di materiale laminato, svolgendolo a tensione controllata e tagliandolo longitudinalmente.", dettagli: "4 alberi, scarico automatico, alberi frizionati.", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Taglierina ribobinatrice", descrizione: "Macchina del converting che ricava n bobine figlie da una bobina madre di materiale laminato, svolgendolo a tensione controllata e tagliandolo longitudinalmente.", dettagli: "2 alberi, scarico manuale, alberi frizionati.", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Taglierina ribobinatrice", descrizione: "Macchina del converting che ricava n bobine figlie da una bobina madre di materiale laminato, svolgendolo a tensione controllata e tagliandolo longitudinalmente.", dettagli: "4 alberi, scarico automatico, alberi frizionati, posizionamento automatico taglio; specializzata per carta fotosensibile da camera oscura.", paese: "Olanda", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Spolettatrice", descrizione: "Macchina che avvolge nastri/bende strette di materiale su rocchetti di plastica.", dettagli: "-", paese: "Cina", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Goffratore", descrizione: "Macchina che imprime un rilievo (goffratura) sulla superficie del materiale in bobina.", dettagli: "-", paese: "Cina", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Ispezionatrice", descrizione: "Macchina che controlla in linea la qualità del materiale in bobina, rilevando difetti superficiali o dimensionali.", dettagli: "-", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Ispezionatrice", descrizione: "Macchina che controlla in linea la qualità del materiale in bobina, rilevando difetti superficiali o dimensionali.", dettagli: "-", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Ispezionatrice", descrizione: "Macchina che controlla in linea la qualità del materiale in bobina, rilevando difetti superficiali o dimensionali.", dettagli: "-", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Ispezionatrice", descrizione: "Macchina che controlla in linea la qualità del materiale in bobina, rilevando difetti superficiali o dimensionali.", dettagli: "-", paese: "Cina", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Tagliaribobinatrice rotoli domestici", descrizione: "Taglierina ribobinatrice dedicata a rotoli per uso domestico (alluminio, pellicola, carta forno).", dettagli: "Software di gestione realizzato internamente (serie Rotomac).", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Tagliaribobinatrice rotoli domestici", descrizione: "Taglierina ribobinatrice dedicata a rotoli per uso domestico (alluminio, pellicola, carta forno).", dettagli: "Software di gestione realizzato internamente (serie Rotomac).", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Tagliaribobinatrice rotoli domestici", descrizione: "Taglierina ribobinatrice dedicata a rotoli per uso domestico (alluminio, pellicola, carta forno).", dettagli: "Software di gestione realizzato internamente (serie Rotomac).", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Converting", progetto: "Tagliaribobinatrice rotoli domestici", descrizione: "Taglierina ribobinatrice dedicata a rotoli per uso domestico (alluminio, pellicola, carta forno).", dettagli: "-", paese: "Italia", tagClass: "tag-converting" },
  { categoria: "Lavorazione pietra naturale", progetto: "Spazzola di pulitura lastre", descrizione: "Macchina dotata di spazzola con funzione di brandeggio trasversale rispetto allo scorrimento della lastra, che eroga acqua e acido per la pulitura, sincronizzando il movimento con la velocità di avanzamento.", dettagli: "-", paese: "Italia", tagClass: "tag-stone" },
  { categoria: "Lavorazione pietra naturale", progetto: "Ceratrice", descrizione: "Macchina analoga alla spazzola di pulitura, dedicata all'applicazione della cera lucidante sulla lastra.", dettagli: "Gestione di dosaggio estremamente preciso del prodotto, data l'elevata costosità della cera.", paese: "Italia", tagClass: "tag-stone" },
  { categoria: "Lavorazione pietra naturale", progetto: "Tagliatrice a filo", descrizione: "Macchina a portale scorrevole su binari trasversali che taglia blocchi di marmo in lastre tramite un filo diamantato in tensione.", dettagli: "Regolazione precisa di tensione del filo e velocità di taglio; interfaccia operatore per programmare sequenze di taglio complesse.", paese: "Italia", tagClass: "tag-stone" },
  { categoria: "Lavorazione pietra naturale", progetto: "Lucidalastre", descrizione: "Macchina con trave mobile trasversalmente sulla lastra in scorrimento, dotata di teste rotanti che si abbassano sulla superficie per levigarla e lucidarla.", dettagli: "Memorizzazione contorno lastra in ingresso e scorrimento virtuale; controllo ad alta precisione. Collaudo completato in sole 2.5 settimane in azienda e 10 giorni on-site.", paese: "Italia", tagClass: "tag-stone" },
  { categoria: "Lavorazione pietra naturale", progetto: "Calibratrice", descrizione: "Macchina con assieme a movimento verticale regolabile in altezza, dotata di mandrini elettrici con utensili diamantati per asportare materiale.", dettagli: "Regolazione PID che combina la forza di asportazione degli utensili con la velocità di avanzamento per ottimizzare i consumi elettrici.", paese: "Italia", tagClass: "tag-stone" },
  { categoria: "Progettazione elettrica", progetto: "Centrale termica di backup e pompaggio teleriscaldamento", descrizione: "Progettazione elettrica di impianti a servizio di reti di teleriscaldamento, comprendenti centrali termiche di backup e stazioni di pompaggio.", dettagli: "Fossalta di Portogruaro (VE).", paese: "Italia", tagClass: "tag-elec" },
  { categoria: "Progettazione elettrica", progetto: "Centrale di pompaggio teleriscaldamento Iren Energia", descrizione: "Revisione del progetto elettrico di una centrale di pompaggio a servizio di una rete di teleriscaldamento.", dettagli: "Cliente Iren Energia, Torino.", paese: "Italia", tagClass: "tag-elec" },
  { categoria: "Progettazione elettrica", progetto: "Impianti elettrici, antincendio e laboratorio ATEX", descrizione: "Progettazione integrata di impianti elettrici, impianti antincendio e impianti di laboratorio con zone classificate ATEX per uno stabilimento produttivo.", dettagli: "Cliente Coop. CPL Concordia.", paese: "Italia", tagClass: "tag-elec" },
  { categoria: "Progettazione elettrica", progetto: "Impianto di cogenerazione", descrizione: "Progettazione elettrica di un impianto di cogenerazione a servizio di uno stabilimento produttivo.", dettagli: "Cliente Venchi, Cuneo.", paese: "Italia", tagClass: "tag-elec" },
  { categoria: "Intralogistica - magazzini automatici", progetto: "Magazzino verticale a casse", descrizione: "Sistema di stoccaggio automatico 'goods-to-person' composto da due colonne contrapposte di ripiani servite da un estrattore verticale.", dettagli: "Ottimizzazione spazio, gestione altezza automatica vassoi, integrazione WMS e barriere di sicurezza.", paese: "Stati Uniti", tagClass: "tag-intra" },
  { categoria: "Intralogistica - magazzini automatici", progetto: "Magazzino automatico a casse di grandi dimensioni", descrizione: "Magazzino automatico a scaffalature contrapposte servito da trasloelevatori su rotaia.", dettagli: "Lunghezza 150m, altezza 30m, ~5000 posizioni cassa. Trasloelevatori a tre assi gestiti da WMS/WCS.", paese: "Stati Uniti", tagClass: "tag-intra" },
  { categoria: "Intralogistica - magazzini automatici", progetto: "Manipolatore portale cartesiano per prelievo singola lamiera", descrizione: "Portale cartesiano con organo di presa a ventose sottovuoto per il picking di singoli fogli di lamiera.", dettagli: "Rilevamento anomalia doppio prelievo tramite misura del vuoto tra le lamiere.", paese: "Germania", tagClass: "tag-intra" },
  { categoria: "Intralogistica - magazzini automatici", progetto: "Manipolatore regolarizzatore pacchi lamiera", descrizione: "Macchina per la regolarizzazione della forma di pacchi di lamiera disposti in modo irregolare.", dettagli: "Deposito su supporto/pallet destinato all'inserimento in magazzino automatico.", paese: "Germania", tagClass: "tag-intra" }
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
