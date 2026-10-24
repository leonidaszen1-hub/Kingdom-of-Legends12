
/* ==========================================
   KINGDOM OF LEGENDS 👑
   Main JavaScript
   ========================================== */

"use strict";

const TARGETS = {
  kings: 100,
  leaders: 80,
  scientists: 50,
  places: 100,
  quotes: 250,
  events: 100
};

const DATA = {
  kings: [
    {name:"Haile Selassie I",period:"1892–1975",region:"Africa",description:"Emperor of Ethiopia from 1930 to 1974. He became an important voice for African unity and helped establish the Organization of African Unity in 1963.",fact:"He addressed the League of Nations in 1936 after Italy invaded Ethiopia.",works:"African unity and international diplomacy"},
    {name:"Menelik II",period:"1844–1913",region:"Africa",description:"Emperor of Ethiopia who expanded the empire and oversaw major modernization. Ethiopian forces defeated Italy at the Battle of Adwa in 1896.",fact:"The victory at Adwa became a landmark in African resistance to colonialism.",works:"Modernization and the Battle of Adwa"},
    {name:"Tewodros II",period:"c. 1818–1868",region:"Africa",description:"Ethiopian emperor who sought to reunify the country and reform its government and military.",fact:"His reign ended during the British expedition to Magdala in 1868.",works:"Centralization and military reform"},
    {name:"Ezana of Aksum",period:"4th century CE",region:"Africa",description:"Ruler of the Kingdom of Aksum who adopted Christianity, making Aksum one of the earliest Christian states.",fact:"Inscriptions from his reign document changes in royal religious symbols.",works:"Aksumite inscriptions"},
    {name:"Ramesses II",period:"c. 1303–1213 BCE",region:"Africa",description:"Pharaoh of ancient Egypt known for monumental building projects and his long reign.",fact:"He commissioned the rock-cut temples at Abu Simbel.",works:"Abu Simbel and the Ramesseum"},
    {name:"Cleopatra VII",period:"69–30 BCE",region:"Africa",description:"The last active ruler of Ptolemaic Egypt, known for her political relationships with Julius Caesar and Mark Antony.",fact:"She belonged to a Macedonian Greek dynasty that ruled Egypt.",works:"Ptolemaic diplomacy"},
    {name:"Alexander the Great",period:"356–323 BCE",region:"Europe",description:"King of Macedon whose campaigns created a vast empire stretching from Greece into parts of Asia.",fact:"Alexandria in Egypt was one of several cities named after him.",works:"Military campaigns across Asia"},
    {name:"Julius Caesar",period:"100–44 BCE",region:"Europe",description:"Roman general and political leader whose victories and reforms transformed the Roman Republic.",fact:"His calendar reform helped establish the Julian calendar.",works:"Commentaries on the Gallic War"},
    {name:"Ashoka",period:"c. 304–232 BCE",region:"Asia",description:"Mauryan emperor who promoted Buddhist teachings and ethical governance after the Kalinga War.",fact:"His edicts were inscribed on rocks and pillars across his empire.",works:"Edicts of Ashoka"},
    {name:"Cyrus the Great",period:"c. 600–530 BCE",region:"Asia",description:"Founder of the Achaemenid Persian Empire, known for building a large and diverse empire.",fact:"His rule is documented in Persian and Babylonian sources.",works:"Achaemenid imperial administration"}
  ],

  leaders: [
    {name:"Nelson Mandela",period:"1918–2013",region:"Africa",description:"South African anti-apartheid leader who became the country's first Black president elected in a fully representative democratic election.",fact:"He shared the 1993 Nobel Peace Prize with F. W. de Klerk.",works:"Long Walk to Freedom"},
    {name:"Kwame Nkrumah",period:"1909–1972",region:"Africa",description:"Ghanaian independence leader and Ghana's first prime minister and president.",fact:"Ghana gained independence in 1957.",works:"Africa Must Unite"},
    {name:"Martin Luther King Jr.",period:"1929–1968",region:"Americas",description:"American civil rights leader who advocated nonviolent resistance and racial equality.",fact:"He received the Nobel Peace Prize in 1964.",works:"Letter from Birmingham Jail"},
    {name:"Mahatma Gandhi",period:"1869–1948",region:"Asia",description:"Leader of India's independence movement who promoted nonviolent civil resistance.",fact:"The Salt March of 1930 challenged British colonial salt laws.",works:"Nonviolent resistance"},
    {name:"Winston Churchill",period:"1874–1965",region:"Europe",description:"British prime minister during much of the Second World War and a prominent political writer.",fact:"He received the Nobel Prize in Literature in 1953.",works:"The Second World War"},
    {name:"Ellen Johnson Sirleaf",period:"1938–",region:"Africa",description:"Liberian politician and the first elected female head of state in Africa.",fact:"She shared the 2011 Nobel Peace Prize.",works:"Public service and postwar reconstruction"},
    {name:"Abraham Lincoln",period:"1809–1865",region:"Americas",description:"Sixteenth president of the United States, who led the country during the Civil War.",fact:"The Emancipation Proclamation took effect in 1863.",works:"Gettysburg Address"},
    {name:"Emperor Haile Selassie I",period:"1892–1975",region:"Africa",description:"Ethiopian head of state and an influential advocate of collective African diplomacy.",fact:"He was a founding figure in the Organization of African Unity.",works:"African diplomacy"}
  ],

  scientists: [
    {name:"Albert Einstein",period:"1879–1955",field:"Physics",description:"Theoretical physicist whose theory of relativity changed modern understanding of space, time and gravity.",fact:"He received the 1921 Nobel Prize in Physics for his explanation of the photoelectric effect.",works:"Special and general relativity"},
    {name:"Marie Curie",period:"1867–1934",field:"Physics and Chemistry",description:"Pioneering scientist who conducted foundational research on radioactivity.",fact:"She was the first woman to receive a Nobel Prize and the first person to win Nobel Prizes in two scientific fields.",works:"Research on radioactivity"},
    {name:"Isaac Newton",period:"1643–1727",field:"Physics and Mathematics",description:"English mathematician and physicist who developed laws of motion and universal gravitation.",fact:"His book Principia was published in 1687.",works:"Principia Mathematica"},
    {name:"Katherine Johnson",period:"1918–2020",field:"Mathematics",description:"American mathematician whose calculations helped NASA's early crewed spaceflight missions.",fact:"Her work was highlighted in the book and film Hidden Figures.",works:"Orbital trajectory calculations"},
    {name:"Ibn al-Haytham",period:"c. 965–1040",field:"Optics",description:"Scientist and mathematician whose work helped shape the study of optics and experimental investigation.",fact:"His Book of Optics examined vision and light.",works:"Book of Optics"},
    {name:"Al-Khwarizmi",period:"c. 780–850",field:"Mathematics",description:"Persian mathematician whose writings helped establish algebra as a systematic discipline.",fact:"The word algorithm derives from a Latinized form of his name.",works:"The Compendious Book on Calculation by Completion and Balancing"},
    {name:"Charles Darwin",period:"1809–1882",field:"Biology",description:"Naturalist who developed the theory of evolution by natural selection.",fact:"On the Origin of Species appeared in 1859.",works:"On the Origin of Species"},
    {name:"Nikola Tesla",period:"1856–1943",field:"Engineering",description:"Inventor and electrical engineer associated with the development of alternating-current power systems.",fact:"His patents and demonstrations influenced modern electrical engineering.",works:"Alternating-current technology"}
  ],

  places: [
    {name:"Lalibela",period:"Medieval Ethiopia",region:"Africa",description:"Historic Ethiopian town famous for its remarkable rock-hewn churches, carved directly into volcanic rock.",fact:"The churches are recognized as a UNESCO World Heritage Site.",works:"Rock-hewn churches"},
    {name:"Aksum",period:"Ancient Ethiopia",region:"Africa",description:"Historic center of the Aksumite civilization, known for monumental stelae and ancient inscriptions.",fact:"Aksum was an important trading power linking Africa and the Red Sea.",works:"Stelae and archaeological remains"},
    {name:"Fasil Ghebbi",period:"17th century",region:"Africa",description:"Fortified royal enclosure in Gondar, Ethiopia, with palaces and other historic buildings.",fact:"It reflects several architectural influences.",works:"Royal castles and buildings"},
    {name:"Rock-Hewn Churches of Lalibela",period:"12th–13th centuries",region:"Africa",description:"A group of medieval churches carved from rock and still used for religious worship.",fact:"They remain an important pilgrimage destination.",works:"Eleven principal medieval churches"},
    {name:"Pyramids of Giza",period:"c. 2600–2500 BCE",region:"Africa",description:"Monumental ancient Egyptian pyramids built as royal tombs.",fact:"The Great Pyramid is the only surviving ancient Wonder of the World.",works:"Great Pyramid and neighboring monuments"},
    {name:"Petra",period:"Ancient Nabataean era",region:"Asia",description:"Archaeological city in present-day Jordan, famous for monumental structures carved into sandstone.",fact:"Its water-management systems helped support settlement in an arid landscape.",works:"Al-Khazneh and rock-cut tombs"},
    {name:"Great Wall of China",period:"Several historical periods",region:"Asia",description:"A vast system of defensive walls and fortifications built and rebuilt by successive Chinese states.",fact:"Different sections date to different periods.",works:"Defensive walls and fortifications"},
    {name:"Colosseum",period:"1st century CE",region:"Europe",description:"Large Roman amphitheatre in the center of Rome.",fact:"It was inaugurated under the Flavian emperors.",works:"Roman amphitheatre"},
    {name:"Machu Picchu",period:"15th century",region:"Americas",description:"Inca archaeological site in the Andes of present-day Peru.",fact:"Its terraces and stone buildings fit into a steep mountain landscape.",works:"Inca architecture and terraces"},
    {name:"Timbuktu",period:"Medieval and early modern era",region:"Africa",description:"Historic West African city associated with trans-Saharan trade and centers of Islamic scholarship.",fact:"Its manuscript traditions preserve important intellectual history.",works:"Historic mosques and manuscripts"}
  ],

  quotes: [
    {name:"Nelson Mandela",type:"Motivational",period:"Leadership",description:"It always seems impossible until it's done."},
    {name:"Mahatma Gandhi",type:"Motivational",period:"Nonviolence",description:"Be the change you wish to see in the world."},
    {name:"Confucius",type:"Motivational",period:"Philosophy",description:"It does not matter how slowly you go as long as you do not stop."},
    {name:"Oscar Wilde",type:"Funny",period:"Humor",description:"I can resist everything except temptation."},
    {name:"Mark Twain",type:"Funny",period:"Humor",description:"The secret of getting ahead is getting started."},
    {name:"Anonymous",type:"Funny",period:"Everyday humor",description:"I am on a seafood diet. I see food, and I eat it."},
    {name:"Theodore Roosevelt",type:"Motivational",period:"Perseverance",description:"Believe you can and you're halfway there."},
    {name:"Walt Disney",type:"Motivational",period:"Creativity",description:"The way to get started is to quit talking and begin doing."},
    {name:"Aristotle",type:"Motivational",period:"Philosophy",description:"We are what we repeatedly do."},
    {name:"Anonymous",type:"Funny",period:"Everyday humor",description:"My bed and I are perfect for each other, but my alarm keeps trying to break us up."},
    {name:"Benjamin Franklin",type:"Motivational",period:"Wisdom",description:"Well done is better than well said."},
    {name:"Anonymous",type:"Funny",period:"Everyday humor",description:"I followed my heart, and it led me to the fridge."}
  ],

  events: [
    {name:"Battle of Adwa",period:"1896",region:"Africa",description:"Ethiopian forces defeated the invading Italian army near Adwa, preserving Ethiopian independence.",fact:"The victory became a powerful symbol of African resistance to colonialism.",works:"Ethiopian military victory"},
    {name:"Ethiopian Revolution",period:"1974",region:"Africa",description:"A revolution ended the rule of Emperor Haile Selassie and brought the Derg military government to power.",fact:"It transformed Ethiopia's political and social system.",works:"End of the imperial government"},
    {name:"Founding of the United Nations",period:"1945",region:"Global",description:"The United Nations was established after the Second World War to promote international cooperation and peace.",fact:"The UN Charter entered into force on 24 October 1945.",works:"United Nations Charter"},
    {name:"First Moon Landing",period:"1969",region:"Global",description:"Apollo 11 astronauts Neil Armstrong and Buzz Aldrin walked on the Moon while Michael Collins orbited above.",fact:"The landing took place on 20 July 1969.",works:"Apollo 11 mission"},
    {name:"French Revolution",period:"1789",region:"Europe",description:"A major political and social upheaval that transformed France and influenced political movements worldwide.",fact:"The storming of the Bastille took place on 14 July 1789.",works:"Declaration of the Rights of Man and of the Citizen"},
    {name:"Ghanaian Independence",period:"1957",region:"Africa",description:"Ghana became independent from British colonial rule under the leadership of Kwame Nkrumah.",fact:"It was the first sub-Saharan African country to gain independence from colonial rule in the postwar era.",works:"Independence of Ghana"},
    {name:"Fall of the Berlin Wall",period:"1989",region:"Europe",description:"The opening of border crossings in Berlin became a defining moment in the end of the Cold War in Europe.",fact:"The wall had divided East and West Berlin since 1961.",works:"German reunification process"},
    {name:"Publication of On the Origin of Species",period:"1859",region:"Global",description:"Charles Darwin published a major scientific work explaining evolution by natural selection.",fact:"The book reshaped biological science and public debate.",works:"On the Origin of Species"}
  ]
};

const CATEGORY_INFO = [
  {key:"kings",title:"Legendary Kings",icon:"👑",target:100},
  {key:"leaders",title:"Great Leaders",icon:"🛡️",target:80},
  {key:"scientists",title:"Brilliant Scientists",icon:"🔬",target:50},
  {key:"places",title:"Historical Places",icon:"🏛️",target:100},
  {key:"quotes",title:"Funny & Motivational Quotes",icon:"💬",target:250},
  {key:"events",title:"Historical Events",icon:"📜",target:100}
];

const PAGE_SIZE = 6;
const currentPages = {};
const searchTerms = {};
const filterTerms = {};

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  })[character]);
}

function getCategoryData(key) {
  return DATA[key] || [];
}

function getFilteredData(key) {
  const term = (searchTerms[key] || "").trim().toLowerCase();
  const filter = filterTerms[key] || "all";

  return getCategoryData(key).filter(item => {
    const text = Object.values(item).join(" ").toLowerCase();
    const matchesSearch = !term || text.includes(term);

    let matchesFilter = true;
    if (key === "quotes" && filter !== "all") {
      matchesFilter = item.type.toLowerCase() === filter;
    } else if (key === "kings" || key === "leaders" || key === "places" || key === "events") {
      if (filter !== "all") {
        matchesFilter = (item.region || "").toLowerCase() === filter;
      }
    } else if (key === "scientists" && filter !== "all") {
      matchesFilter = (item.field || "").toLowerCase().includes(filter);
    }

    return matchesSearch && matchesFilter;
  });
}

function createStats() {
  const container = document.getElementById("stats");
  if (!container) return;

  container.innerHTML = CATEGORY_INFO.map(category => `
    <article class="stat-card">
      <div class="stat-number">${category.icon} ${category.target}</div>
      <div class="stat-label">${escapeHTML(category.title)}</div>
      <p class="card-meta">${getCategoryData(category.key).length} sample entries currently included</p>
    </article>
  `).join("");
}

function createCollections() {
  const container = document.getElementById("collections");
  if (!container) return;

  container.innerHTML = CATEGORY_INFO.map(category => `
    <a class="collection-card" href="#${category.key}">
      <div class="stat-number">${category.icon}</div>
      <h3>${escapeHTML(category.title)}</h3>
      <p>${category.target} planned entries</p>
      <span class="card-meta">Explore collection →</span>
    </a>
  `).join("");
}

function createControls(key) {
  const search = `
    <label for="${key}-search">Search ${escapeHTML(key)}</label>
    <input id="${key}-search" type="search"
      placeholder="Type to search..."
      value="${escapeHTML(searchTerms[key] || "")}"
      data-search="${key}">
  `;

  let options = "";
  if (key === "quotes") {
    options = `
      <option value="all">All quotes</option>
      <option value="funny">Funny</option>
      <option value="motivational">Motivational</option>`;
  } else if (key === "scientists") {
    options = `
      <option value="all">All fields</option>
      <option value="physics">Physics</option>
      <option value="mathematics">Mathematics</option>
      <option value="biology">Biology</option>
      <option value="chemistry">Chemistry</option>
      <option value="engineering">Engineering</option>
      <option value="optics">Optics</option>`;
  } else {
    options = `
      <option value="all">All regions</option>
      <option value="africa">Africa</option>
      <option value="europe">Europe</option>
      <option value="asia">Asia</option>
      <option value="americas">Americas</option>
      <option value="global">Global</option>`;
  }

  return `
    <div class="content-controls">
      ${search}
      <label for="${key}-filter">Filter</label>
      <select id="${key}-filter" data-filter="${key}">
        ${options}
      </select>
    </div>
  `;
}

function createCard(item, key, index) {
  if (key === "quotes") {
    return `
      <article class="content-card">
        <p class="card-meta">${escapeHTML(item.type)} · ${escapeHTML(item.period)}</p>
        <h3>“${escapeHTML(item.description)}”</h3>
        <p>— ${escapeHTML(item.name)}</p>
        <div class="card-actions">
          <button class="primary-button" type="button"
            data-copy-quote="${index}" data-category="${key}">Copy quote</button>
          <button class="secondary-button" type="button"
            data-share-quote="${index}" data-category="${key}">Share</button>
        </div>
      </article>
    `;
  }

  return `
    <article class="content-card">
      <p class="card-meta">${escapeHTML(item.period || "")}
        ${item.region ? " · " + escapeHTML(item.region) : ""}
        ${item.field ? " · " + escapeHTML(item.field) : ""}
      </p>
      <h3>${escapeHTML(item.name)}</h3>
      <p>${escapeHTML(item.description)}</p>
      <button class="primary-button" type="button"
        data-detail="${index}" data-category="${key}">Read more</button>
    </article>
  `;
}

function renderCategory(key) {
  const container = document.getElementById(`${key}-content`);
  if (!container) return;

  const items = getFilteredData(key);
  const pageCount = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  currentPages[key] = Math.min(currentPages[key] || 1, pageCount);

  const page = currentPages[key];
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = items.slice(start, start + PAGE_SIZE);

  container.innerHTML = `
    ${createControls(key)}
    <p class="section-intro">
      Showing ${items.length} of ${getCategoryData(key).length} sample entries.
    </p>
    <div class="content-grid">
      ${pageItems.length
        ? pageItems.map((item, index) => createCard(item, key, start + index)).join("")
        : "<p>No results found. Try another search.</p>"}
    </div>
    <div class="pagination">
      <button type="button" data-page="${key}" data-direction="-1"
        ${page <= 1 ? "disabled" : ""}>← Previous</button>
      <span>Page ${page} of ${pageCount}</span>
      <button type="button" data-page="${key}" data-direction="1"
        ${page >= pageCount ? "disabled" : ""}>Next →</button>
    </div>
  `;

  const filter = container.querySelector(`[data-filter="${key}"]`);
  if (filter) filter.value = filterTerms[key] || "all";
}

function renderAll() {
  createStats();
  createCollections();
  CATEGORY_INFO.forEach(category => renderCategory(category.key));
}

function showDetails(key, index) {
  const item = getFilteredData(key)[index];
  if (!item) return;

  let dialog = document.getElementById("detail-dialog");
  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.id = "detail-dialog";
    dialog.className = "detail-dialog";
    document.body.appendChild(dialog);
  }

  dialog.innerHTML = `
    <button type="button" class="dialog-close" aria-label="Close">✕</button>
    <p class="eyebrow">${escapeHTML(item.period || "")}</p>
    <h2>${escapeHTML(item.name)}</h2>
    <p>${escapeHTML(item.description)}</p>
    ${item.fact ? `<h3>Did you know?</h3><p>${escapeHTML(item.fact)}</p>` : ""}
    ${item.works ? `<h3>Notable work or legacy</h3><p>${escapeHTML(item.works)}</p>` : ""}
    ${item.region ? `<p class="card-meta">Region: ${escapeHTML(item.region)}</p>` : ""}
    ${item.field ? `<p class="card-meta">Field: ${escapeHTML(item.field)}</p>` : ""}
  `;

  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
  if (!dialog.open) dialog.showModal();
}

async function copyQuote(key, index) {
  const item = getFilteredData(key)[index];
  if (!item) return;

  const text = `“${item.description}” — ${item.name}`;
  try {
    await navigator.clipboard.writeText(text);
    alert("Quote copied!");
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    const copied = document.execCommand("copy");
    area.remove();
    alert(copied ? "Quote copied!" : "Copy failed. Please select and copy the quote manually.");
  }
}

async function shareQuote(key, index) {
  const item = getFilteredData(key)[index];
  if (!item) return;

  const text = `“${item.description}” — ${item.name}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: "Kingdom of Legends", text });
    } catch (error) {
      if (error.name !== "AbortError") alert("Sharing is not available right now.");
    }
  } else {
    await copyQuote(key, index);
  }
}

document.addEventListener("input", event => {
  const key = event.target.dataset.search;
  if (!key) return;

  searchTerms[key] = event.target.value;
  currentPages[key] = 1;

  const cursor = event.target.selectionStart;
  renderCategory(key);

  const replacement = document.querySelector(`[data-search="${key}"]`);
  if (replacement) {
    replacement.focus();
    replacement.setSelectionRange(cursor, cursor);
  }
});

document.addEventListener("change", event => {
  const key = event.target.dataset.filter;
  if (!key) return;

  filterTerms[key] = event.target.value;
  currentPages[key] = 1;
  renderCategory(key);
});

document.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.page) {
    const key = button.dataset.page;
    currentPages[key] = (currentPages[key] || 1) + Number(button.dataset.direction);
    renderCategory(key);
  }

  if (button.dataset.detail !== undefined) {
    showDetails(button.dataset.category, Number(button.dataset.detail));
  }

  if (button.dataset.copyQuote !== undefined) {
    copyQuote(button.dataset.category, Number(button.dataset.copyQuote));
  }

  if (button.dataset.shareQuote !== undefined) {
    shareQuote(button.dataset.category, Number(button.dataset.shareQuote));
  }
});

const feedbackForm = document.getElementById("feedback-form");
if (feedbackForm) {
  feedbackForm.addEventListener("submit", event => {
    event.preventDefault();
    const status = document.getElementById("feedback-status");
    if (status) {
      status.textContent = "Thank you for your feedback! This demo does not send or save messages to a server.";
    }
    feedbackForm.reset();
  });
}

renderAll();
