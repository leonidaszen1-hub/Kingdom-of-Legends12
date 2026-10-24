
"use strict";

/* =========================================================
   KINGDOM OF LEGENDS
   Search, filters, pagination, stories, quotes and languages
   ========================================================= */

const PAGE_SIZE = 9;

const GOALS = {
  kings: 100,
  leaders: 80,
  scientists: 50,
  places: 100,
  quotes: 250,
  events: 100
};

const CATEGORY_INFO = {
  kings: {
    icon: "👑",
    title: "Kings",
    description: "Monarchs who shaped kingdoms and empires."
  },
  leaders: {
    icon: "🛡️",
    title: "Leaders",
    description: "Leaders who influenced nations and people."
  },
  scientists: {
    icon: "🔬",
    title: "Scientists",
    description: "Discoveries that changed our understanding."
  },
  places: {
    icon: "🏛️",
    title: "Places",
    description: "Places that preserve the memory of history."
  },
  quotes: {
    icon: "💬",
    title: "Quotes",
    description: "Funny and motivational words to remember."
  },
  events: {
    icon: "📜",
    title: "Events",
    description: "Events that changed the course of history."
  }
};

/*
  IMPORTANT:
  These are starter records, not the complete collection of 680.
  Add researched records to this array to expand the library.
  Do not use invented biographical facts as historical facts.
*/

const entries = [
  // KINGS
  {
    id: "king-mansa-musa",
    category: "kings",
    name: "Mansa Musa",
    period: "c. 1280 – c. 1337",
    region: "Africa",
    icon: "👑",
    summary: "The famous ruler of the Mali Empire, remembered for his immense wealth and pilgrimage to Mecca.",
    details: "Mansa Musa ruled the Mali Empire in West Africa during the 14th century. His pilgrimage to Mecca in 1324 brought international attention to the wealth and influence of his empire. He is also associated with the growth of scholarship and architecture in Timbuktu.",
    facts: [
      "Ruled the Mali Empire in West Africa.",
      "Made a famous pilgrimage to Mecca in 1324.",
      "Supported learning and Islamic scholarship."
    ]
  },
  {
    id: "king-ramesses-ii",
    category: "kings",
    name: "Ramesses II",
    period: "c. 1303–1213 BCE",
    region: "Africa",
    icon: "🏺",
    summary: "An Egyptian pharaoh known for monumental building projects and the Battle of Kadesh.",
    details: "Ramesses II ruled ancient Egypt for approximately 66 years. His reign is remembered for temples, statues, and monuments, including major works at Abu Simbel. He fought the Hittites at Kadesh and later became associated with one of the earliest surviving peace treaties.",
    facts: [
      "Ruled during Egypt's New Kingdom.",
      "Expanded monumental architecture.",
      "His reign lasted around six decades."
    ]
  },
  {
    id: "king-ashoka",
    category: "kings",
    name: "Ashoka the Great",
    period: "c. 304–232 BCE",
    region: "Asia",
    icon: "🪷",
    summary: "An Indian emperor who promoted Buddhist teachings after the devastating Kalinga War.",
    details: "Ashoka ruled much of the Indian subcontinent as an emperor of the Maurya dynasty. After the Kalinga War, he promoted a policy often described through the ideas of dhamma, ethical conduct, and concern for living beings. His inscriptions remain important historical sources.",
    facts: [
      "Belonged to the Maurya dynasty.",
      "Issued inscriptions across his empire.",
      "Supported the spread of Buddhism."
    ]
  },
  {
    id: "king-cleopatra",
    category: "kings",
    name: "Cleopatra VII",
    period: "69–30 BCE",
    region: "Africa",
    icon: "🐍",
    summary: "The last active ruler of Ptolemaic Egypt, known for her political alliances with Rome.",
    details: "Cleopatra VII ruled Egypt during a period of intense Roman expansion. She formed political and personal alliances with Julius Caesar and Mark Antony. After her defeat alongside Antony by Octavian's forces, she died in 30 BCE and Egypt became a Roman province.",
    facts: [
      "Ruled Ptolemaic Egypt.",
      "Was a member of a Macedonian Greek dynasty.",
      "Egypt came under Roman control after her death."
    ]
  },
  {
    id: "king-menelik-ii",
    category: "kings",
    name: "Menelik II",
    period: "1844–1913",
    region: "Ethiopia",
    icon: "🇪🇹",
    summary: "Ethiopian emperor associated with the victory at Adwa and major state modernization.",
    details: "Menelik II became emperor of Ethiopia in 1889. During his reign, Ethiopian forces defeated an Italian invasion at the Battle of Adwa in 1896, preserving the country's independence. His period also saw the expansion of Addis Ababa and the introduction of new infrastructure and technologies.",
    facts: [
      "Became emperor in 1889.",
      "Ethiopian forces won at Adwa in 1896.",
      "Helped expand modern state institutions."
    ]
  },

  // LEADERS
  {
    id: "leader-nelson-mandela",
    category: "leaders",
    name: "Nelson Mandela",
    period: "1918–2013",
    region: "Africa",
    icon: "🕊️",
    summary: "South African anti-apartheid leader who became the country's first Black president.",
    details: "Nelson Mandela was a central figure in the struggle against apartheid in South Africa. After spending 27 years in prison, he was released in 1990. In 1994, he became South Africa's first Black president in the country's first fully democratic national election.",
    facts: [
      "Received the Nobel Peace Prize in 1993 with F. W. de Klerk.",
      "Became president in 1994.",
      "Promoted reconciliation after apartheid."
    ]
  },
  {
    id: "leader-wangari-maathai",
    category: "leaders",
    name: "Wangari Maathai",
    period: "1940–2011",
    region: "Africa",
    icon: "🌳",
    summary: "Kenyan environmentalist and women's rights advocate who founded the Green Belt Movement.",
    details: "Wangari Maathai founded the Green Belt Movement in Kenya in 1977. The organization encouraged tree planting, environmental conservation, and community participation, especially among women. In 2004, she became the first African woman to receive the Nobel Peace Prize.",
    facts: [
      "Founded the Green Belt Movement.",
      "Won the 2004 Nobel Peace Prize.",
      "Advocated environmental protection and democracy."
    ]
  },
  {
    id: "leader-martin-luther-king",
    category: "leaders",
    name: "Martin Luther King Jr.",
    period: "1929–1968",
    region: "Americas",
    icon: "✊",
    summary: "American civil rights leader known for advocating nonviolent resistance.",
    details: "Martin Luther King Jr. was a Baptist minister and leading voice in the American civil rights movement. He advocated nonviolent protest against racial segregation and discrimination. His leadership contributed to the momentum behind major civil rights legislation in the United States.",
    facts: [
      "Delivered the famous 'I Have a Dream' speech in 1963.",
      "Received the Nobel Peace Prize in 1964.",
      "Advocated nonviolent civil rights activism."
    ]
  },
  {
    id: "leader-emperor-haile-selassie",
    category: "leaders",
    name: "Haile Selassie",
    period: "1892–1975",
    region: "Ethiopia",
    icon: "🇪🇹",
    summary: "Ethiopian emperor who became an important voice in African and international diplomacy.",
    details: "Haile Selassie served as emperor of Ethiopia from 1930 to 1974, apart from the period of Italian occupation. He appealed to the League of Nations after Italy invaded Ethiopia in 1935 and later supported African cooperation. The Organization of African Unity was founded in Addis Ababa in 1963.",
    facts: [
      "Addressed the League of Nations in 1936.",
      "Hosted the founding of the OAU in Addis Ababa.",
      "His rule ended in 1974."
    ]
  },

  // SCIENTISTS
  {
    id: "scientist-marie-curie",
    category: "scientists",
    name: "Marie Curie",
    period: "1867–1934",
    region: "Europe",
    field: "Physics and Chemistry",
    icon: "⚛️",
    summary: "Pioneering researcher in radioactivity and the first woman to win a Nobel Prize.",
    details: "Marie Curie conducted groundbreaking research into radioactivity with Pierre Curie and other colleagues. She discovered the elements polonium and radium with Pierre Curie. She won the Nobel Prize in Physics in 1903 and the Nobel Prize in Chemistry in 1911.",
    facts: [
      "Won Nobel Prizes in two scientific fields.",
      "Advanced research into radioactivity.",
      "Helped develop mobile X-ray services during World War I."
    ]
  },
  {
    id: "scientist-albert-einstein",
    category: "scientists",
    name: "Albert Einstein",
    period: "1879–1955",
    region: "Europe",
    field: "Physics",
    icon: "🧠",
    summary: "Theoretical physicist known for relativity and contributions to modern physics.",
    details: "Albert Einstein developed the special theory of relativity in 1905 and the general theory of relativity in 1915. His work transformed the understanding of space, time, gravity, and energy. He received the 1921 Nobel Prize in Physics for his explanation of the photoelectric effect.",
    facts: [
      "Published the special theory of relativity in 1905.",
      "Received the 1921 Nobel Prize in Physics.",
      "Made foundational contributions to theoretical physics."
    ]
  },
  {
    id: "scientist-ibn-al-haytham",
    category: "scientists",
    name: "Ibn al-Haytham",
    period: "c. 965 – c. 1040",
    region: "Middle East",
    field: "Optics",
    icon: "🔭",
    summary: "Scientist and mathematician whose work transformed the study of vision and light.",
    details: "Ibn al-Haytham, also known in Latin as Alhazen, wrote extensively on optics, mathematics, and scientific investigation. His Book of Optics examined vision and the behavior of light. His careful use of observation and experimentation influenced later scholars.",
    facts: [
      "Wrote the influential Book of Optics.",
      "Studied vision and light.",
      "Contributed to mathematics and scientific methodology."
    ]
  },
  {
    id: "scientist-george-washington-carver",
    category: "scientists",
    name: "George Washington Carver",
    period: "c. 1864–1943",
    region: "Americas",
    field: "Agriculture and Botany",
    icon: "🌱",
    summary: "American agricultural scientist who promoted soil conservation and crop diversification.",
    details: "George Washington Carver researched agricultural methods and encouraged farmers to diversify crops and improve soil health. He promoted peanuts, sweet potatoes, and other crops as alternatives to continuous cotton cultivation. His educational work supported sustainable farming practices.",
    facts: [
      "Taught and researched at Tuskegee Institute.",
      "Promoted crop rotation and soil conservation.",
      "Worked to improve agricultural opportunities for farmers."
    ]
  },

  // HISTORICAL PLACES
  {
    id: "place-lalibela",
    category: "places",
    name: "Rock-Hewn Churches of Lalibela",
    period: "Mainly 12th–13th centuries",
    region: "Ethiopia",
    icon: "⛪",
    summary: "A remarkable complex of churches carved directly into rock in the Ethiopian highlands.",
    details: "Lalibela is famous for its group of medieval rock-hewn churches, carved from living rock. The site remains an important pilgrimage destination for Ethiopian Orthodox Christians and is recognized as a UNESCO World Heritage Site.",
    facts: [
      "Located in northern Ethiopia.",
      "Recognized as a UNESCO World Heritage Site.",
      "Still used for religious worship and pilgrimage."
    ]
  },
  {
    id: "place-aksum",
    category: "places",
    name: "Aksum",
    period: "Ancient to medieval period",
    region: "Ethiopia",
    icon: "🗿",
    summary: "The center of an influential ancient kingdom in the Horn of Africa.",
    details: "Aksum was the center of a powerful kingdom that developed extensive trading connections across the Red Sea. The site is known for its monumental stelae, archaeological remains, and connections to the early history of Christianity in Ethiopia.",
    facts: [
      "Located in northern Ethiopia.",
      "Famous for its monumental stelae.",
      "Associated with an important ancient trading kingdom."
    ]
  },
  {
    id: "place-pyramids-giza",
    category: "places",
    name: "Pyramids of Giza",
    period: "c. 26th century BCE",
    region: "Egypt",
    icon: "🔺",
    summary: "Monumental ancient Egyptian pyramids built as royal tombs.",
    details: "The Giza pyramid complex includes the pyramids associated with Khufu, Khafre, and Menkaure. The Great Pyramid of Khufu is the only surviving structure of the traditional Seven Wonders of the Ancient World.",
    facts: [
      "Located near modern Cairo, Egypt.",
      "Built during Egypt's Old Kingdom.",
      "The Great Pyramid was built for Pharaoh Khufu."
    ]
  },
  {
    id: "place-great-wall",
    category: "places",
    name: "Great Wall of China",
    period: "Various periods from ancient times onward",
    region: "China",
    icon: "🏯",
    summary: "A vast system of defensive walls built and rebuilt by successive Chinese states.",
    details: "The Great Wall is not a single uninterrupted wall built at one time. Different Chinese states constructed defensive walls over many centuries. Many of the best-known surviving sections date to the Ming dynasty.",
    facts: [
      "Located across northern China.",
      "Built and rebuilt over many centuries.",
      "Many famous surviving sections date to the Ming dynasty."
    ]
  },

  // QUOTES: original wording; no false historical attributions
  {
    id: "quote-small-steps",
    category: "quotes",
    name: "Small Steps",
    type: "motivational",
    icon: "💬",
    author: "Kingdom of Legends",
    summary: "Small steps still move you forward.",
    details: "Small steps still move you forward. Consistency can turn a difficult goal into a manageable journey."
  },
  {
    id: "quote-keep-learning",
    category: "quotes",
    name: "Keep Learning",
    type: "motivational",
    icon: "📚",
    author: "Kingdom of Legends",
    summary: "A curious mind never runs out of new worlds to discover.",
    details: "A curious mind never runs out of new worlds to discover. Stay open to evidence, questions, and new ideas."
  },
  {
    id: "quote-try-again",
    category: "quotes",
    name: "Try Again",
    type: "motivational",
    icon: "🌟",
    author: "Kingdom of Legends",
    summary: "A setback can teach you what the easy road never could.",
    details: "A setback can teach you what the easy road never could. Reflect on what happened and choose your next step wisely."
  },
  {
    id: "quote-late-homework",
    category: "quotes",
    name: "The Homework Clock",
    type: "funny",
    icon: "😂",
    author: "Kingdom of Legends",
    summary: "Homework has a special talent for becoming urgent at bedtime.",
    details: "Homework has a special talent for becoming urgent at bedtime. Future you would appreciate starting a little earlier."
  },
  {
    id: "quote-wifi",
    category: "quotes",
    name: "The Wi-Fi Mystery",
    type: "funny",
    icon: "📶",
    author: "Kingdom of Legends",
    summary: "The Wi-Fi only gets mysterious when the assignment is due.",
    details: "The Wi-Fi only gets mysterious when the assignment is due. Technology has impeccable comedic timing."
  },

  // HISTORICAL EVENTS
  {
    id: "event-battle-adwa",
    category: "events",
    name: "Battle of Adwa",
    period: "1 March 1896",
    region: "Ethiopia",
    icon: "🇪🇹",
    summary: "Ethiopian forces defeated an invading Italian army, helping preserve Ethiopia's independence.",
    details: "The Battle of Adwa took place in northern Ethiopia on 1 March 1896. Forces led by Emperor Menelik II and Empress Taytu Betul defeated an Italian invasion. The victory became a major symbol of African resistance to European colonial expansion.",
    facts: [
      "Took place on 1 March 1896.",
      "Ethiopian forces defeated Italy's invading army.",
      "Became an important symbol of African independence."
    ]
  },
  {
    id: "event-berlin-wall",
    category: "events",
    name: "Fall of the Berlin Wall",
    period: "9 November 1989",
    region: "Europe",
    icon: "🧱",
    summary: "The opening of the Berlin Wall became a defining moment in the end of the Cold War in Europe.",
    details: "The Berlin Wall had divided East and West Berlin since 1961. On 9 November 1989, following political changes and confusion over a public announcement, crowds gathered at border crossings and the barriers opened. The event accelerated German reunification, which took place in October 1990.",
    facts: [
      "The wall was built in 1961.",
      "Border crossings opened in November 1989.",
      "Germany reunified in 1990."
    ]
  },
  {
    id: "event-moon-landing",
    category: "events",
    name: "Apollo 11 Moon Landing",
    period: "20 July 1969",
    region: "World",
    icon: "🌕",
    summary: "Apollo 11 carried the first humans to land on the Moon.",
    details: "NASA's Apollo 11 mission landed on the Moon on 20 July 1969. Neil Armstrong and Buzz Aldrin walked on the lunar surface while Michael Collins remained in lunar orbit. The mission was a milestone in space exploration.",
    facts: [
      "Launched on 16 July 1969.",
      "The lunar module landed on 20 July.",
      "Returned safely to Earth on 24 July 1969."
    ]
  },
  {
    id: "event-french-revolution",
    category: "events",
    name: "French Revolution",
    period: "1789–1799",
    region: "Europe",
    icon: "⚖️",
    summary: "A period of political upheaval that transformed France and influenced modern political ideas.",
    details: "The French Revolution began in 1789 amid financial crisis, social inequality, and political conflict. It brought the end of the monarchy, the establishment of a republic, and major debates about citizenship, rights, and government. Its consequences reshaped France and influenced politics internationally.",
    facts: [
      "Began in 1789.",
      "Ended the French absolute monarchy.",
      "Influenced political movements around the world."
    ]
  }
];

/* -------------------- Translations -------------------- */

const UI = {
  en: {
    navHome: "Home",
    navCollections: "Collections",
    navExplore: "Explore",
    navQuotes: "Quotes",
    navFeedback: "Feedback",
    heroEyebrow: "HISTORY · KNOWLEDGE · INSPIRATION",
    heroTitle: 'Discover the <span class="gold-text">Legends</span> of History',
    heroDescription: "Explore the kings who ruled empires, the minds that changed science, the places that shaped civilizations, and the events that changed our world.",
    exploreButton: "Explore Collections",
    quotesButton: "Discover Quotes",
    statKings: "Kings",
    statLeaders: "Leaders",
    statScientists: "Scientists",
    statPlaces: "Historic Places",
    statQuotes: "Quotes",
    statEvents: "Historical Events",
    collectionsEyebrow: "THE ARCHIVES",
    collectionsTitle: "Explore the Collections",
    collectionsDescription: "Choose a collection and discover its stories.",
    browseEyebrow: "YOUR JOURNEY STARTS HERE",
    browseTitle: "Explore History",
    browseDescription: "Search the archives and open a story to learn more.",
    searchLabel: "Search",
    searchPlaceholder: "Search names, places, or stories...",
    categoryLabel: "Collection",
    allCollections: "All collections",
    sortLabel: "Sort by",
    sortDefault: "Default",
    sortAZ: "Name: A–Z",
    sortZA: "Name: Z–A",
    quotesEyebrow: "WORDS THAT LAST",
    quotesHeading: "Quotes to Remember",
    quotesDescription: "Discover funny and motivational words, then copy or share your favorites.",
    quoteSearchLabel: "Find a quote",
    quoteSearchPlaceholder: "Search quotes...",
    quoteTypeLabel: "Quote type",
    quoteAll: "All quotes",
    quoteMotivational: "Motivational",
    quoteFunny: "Funny",
    feedbackEyebrow: "HELP US GROW",
    feedbackTitle: "Share Your Feedback",
    feedbackDescription: "Tell us what you enjoyed and what you would like to see next.",
    feedbackSubheading: "Your ideas matter",
    feedbackSubtext: "Help make this historical library more useful for curious minds everywhere.",
    nameLabel: "Your name (optional)",
    namePlaceholder: "Enter your name",
    messageLabel: "Your feedback",
    messagePlaceholder: "Write your feedback...",
    sendFeedback: "Submit Feedback",
    feedbackNote: "Demo form: feedback is not sent to a server.",
    footerText: "Preserving the stories of yesterday, inspiring the minds of tomorrow.",
    storyDetails: "STORY DETAILS",
    readMore: "Read More",
    copy: "Copy",
    share: "Share",
    copied: "Copied to clipboard!",
    copyFailed: "Could not copy automatically. Please select and copy the text.",
    shareUnavailable: "Sharing is not available in this browser.",
    previous: "Previous",
    next: "Next",
    noResults: "No matching stories found. Try another search.",
    loading: "Loading stories...",
    results: "stories found",
    of: "of",
    available: "available",
    goal: "goal",
    feedbackSuccess: "Thank you for your feedback!",
    feedbackRequired: "Please enter your feedback first.",
    demoWarning: "This demo does not send or save feedback online.",
    region: "Region",
    field: "Field",
    author: "By",
    quoteType: "Type"
  },
  am: {
    navHome: "መነሻ",
    navCollections: "ስብስቦች",
    navExplore: "ፈልግ",
    navQuotes: "ጥቅሶች",
    navFeedback: "አስተያየት",
    heroEyebrow: "ታሪክ · እውቀት · መነሳሳት",
    heroTitle: 'የታሪክ <span class="gold-text">ታላላቅ ሰዎችን</span> ያግኙ',
    heroDescription: "ንጉሦችን፣ ሳይንቲስቶችን፣ ታሪካዊ ቦታዎችንና ዓለምን የቀየሩ ክስተቶችን ያስሱ።",
    exploreButton: "ስብስቦችን ያስሱ",
    quotesButton: "ጥቅሶችን ይመልከቱ",
    statKings: "ነገሥታት",
    statLeaders: "መሪዎች",
    statScientists: "ሳይንቲስቶች",
    statPlaces: "ታሪካዊ ቦታዎች",
    statQuotes: "ጥቅሶች",
    statEvents: "ታሪካዊ ክስተቶች",
    collectionsEyebrow: "የታሪክ ማህደር",
    collectionsTitle: "የታሪክ ስብስቦችን ያስሱ",
    collectionsDescription: "አንድ ስብስብ ይምረጡና ታሪኮቹን ያግኙ።",
    browseEyebrow: "ጉዞዎ እዚህ ይጀምራል",
    browseTitle: "ታሪክን ያስሱ",
    browseDescription: "ታሪኮችን ይፈልጉና ዝርዝራቸውን ያንብቡ።",
    searchLabel: "ፍለጋ",
    searchPlaceholder: "ስም፣ ቦታ ወይም ታሪክ ይፈልጉ...",
    categoryLabel: "ስብስብ",
    allCollections: "ሁሉም ስብስቦች",
    sortLabel: "አደራደር",
    sortDefault: "መደበኛ",
    sortAZ: "ስም፦ ከ A እስከ Z",
    sortZA: "ስም፦ ከ Z እስከ A",
    quotesEyebrow: "የማይረሱ ቃላት",
    quotesHeading: "የሚታወሱ ጥቅሶች",
    quotesDescription: "አበረታችና አስቂኝ ጥቅሶችን ያግኙ፤ ይቅዱ ወይም ያጋሩ።",
    quoteSearchLabel: "ጥቅስ ይፈልጉ",
    quoteSearchPlaceholder: "ጥቅስ ይፈልጉ...",
    quoteTypeLabel: "የጥቅስ አይነት",
    quoteAll: "ሁሉም ጥቅሶች",
    quoteMotivational: "አበረታች",
    quoteFunny: "አስቂኝ",
    feedbackEyebrow: "እንድናድግ ይርዱን",
    feedbackTitle: "አስተያየትዎን ያጋሩ",
    feedbackDescription: "የወደዱትንና ቀጥሎ ማየት የሚፈልጉትን ይንገሩን።",
    feedbackSubheading: "ሀሳብዎ ዋጋ አለው",
    feedbackSubtext: "ይህ የታሪክ ማህደር የበለጠ ጠቃሚ እንዲሆን ይርዱን።",
    nameLabel: "ስም (አማራጭ)",
    namePlaceholder: "ስምዎን ያስገቡ",
    messageLabel: "አስተያየትዎ",
    messagePlaceholder: "አስተያየትዎን ይጻፉ...",
    sendFeedback: "አስተያየት ይላኩ",
    feedbackNote: "የሙከራ ቅጽ ነው፤ መረጃው ወደ ሰርቨር አይላክም።",
    footerText: "ያለፈውን ታሪክ እንጠብቃለን፣ የነገውን አእምሮ እናነሳሳለን።",
    storyDetails: "የታሪኩ ዝርዝር",
    readMore: "ተጨማሪ ያንብቡ",
    copy: "ቅዳ",
    share: "አጋራ",
    copied: "ወደ ቅጂ ሰሌዳ ተቀድቷል!",
    copyFailed: "በራስ-ሰር መቅዳት አልተቻለም።",
    shareUnavailable: "በዚህ አሳሽ ማጋራት አይቻልም።",
    previous: "ቀዳሚ",
    next: "ቀጣይ",
    noResults: "የሚዛመድ ታሪክ አልተገኘም። ሌላ ይፈልጉ።",
    loading: "ታሪኮች በመጫን ላይ...",
    results: "ታሪኮች ተገኝተዋል",
    of: "ከ",
    available: "የተገኙ",
    goal: "ግብ",
    feedbackSuccess: "ስለ አስተያየትዎ እናመሰግናለን!",
    feedbackRequired: "እባክዎ መጀመሪያ አስተያየት ያስገቡ።",
    demoWarning: "ይህ የሙከራ ቅጽ አስተያየትን በመስመር ላይ አይልክም።",
    region: "ክልል",
    field: "የሙያ መስክ",
    author: "ደራሲ",
    quoteType: "አይነት"
  }
};

let currentLanguage = "en";
let currentPage = 1;
let currentQuotePage = 1;
let toastTimeout = null;

/* -------------------- Helpers -------------------- */

function $(selector) {
  return document.querySelector(selector);
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, function (char) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char];
  });
}

function t(key) {
  const selected = UI[currentLanguage] || UI.en;
  return selected[key] ?? UI.en[key] ?? key;
}

function categoryName(category) {
  const keys = {
    kings: "statKings",
    leaders: "statLeaders",
    scientists: "statScientists",
    places: "statPlaces",
    quotes: "statQuotes",
    events: "statEvents"
  };

  return t(keys[category] || category);
}

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
}

function getEntry(id) {
  return entries.find(entry => entry.id === id);
}

function getVisibleEntries() {
  const search = normalizeText($("#searchInput")?.value || "");
  const category = $("#categoryFilter")?.value || "all";
  const sort = $("#sortFilter")?.value || "default";

  let result = entries.filter(entry => {
    const matchesCategory =
      category === "all" || entry.category === category;

    const searchable = normalizeText([
      entry.name,
      entry.period,
      entry.region,
      entry.field,
      entry.type,
      entry.author,
      entry.summary,
      entry.details,
      ...(entry.facts || [])
    ].join(" "));

    return matchesCategory && searchable.includes(search);
  });

  if (sort === "az") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "za") {
    result.sort((a, b) => b.name.localeCompare(a.name));
  }

  return result;
}

/* -------------------- Collection cards -------------------- */

function renderCollections() {
  const container = $("#collectionGrid");
  if (!container) return;

  container.innerHTML = Object.keys(CATEGORY_INFO).map(category => {
    const info = CATEGORY_INFO[category];
    const count = entries.filter(entry => entry.category === category).length;
    const goal = GOALS[category];

    return `
      <article class="collection-card">
        <a href="#browse"
           class="collection-icon"
           aria-label="Explore ${escapeHTML(info.title)}"
           data-category-link="${category}">${info.icon}</a>
        <h3>
          <a href="#browse" data-category-link="${category}">
            ${escapeHTML(categoryName(category))}
          </a>
        </h3>
        <p>${escapeHTML(
          currentLanguage === "am"
            ? ({
                kings: "መንግሥታትን ኢምፓየሮችን የቀየሩ ነገሥታት።",
                leaders: "ብሔሮችንና ሕዝቦችን የተፅዕኖ ያደረጉ መሪዎች።",
                scientists: "እውቀታችንን የቀየሩ ግኝቶች።",
                places: "የታሪክ ትውስታን የሚጠብቁ ቦታዎች።",
                quotes: "የሚታወሱ አበረታችና አስቂኝ ቃላት።",
                events: "የዓለምን ታሪክ የቀየሩ ክስተቶች።"
              })[category]
            : info.description
        )}</p>
        <a href="#browse"
           class="collection-count"
           data-category-link="${category}">
          ${count} ${escapeHTML(t("available"))} · ${escapeHTML(t("goal"))} ${goal}
        </a>
      </article>
    `;
  }).join("");

  container.querySelectorAll("[data-category-link]").forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const category = this.dataset.categoryLink;
      const filter = $("#categoryFilter");

      if (filter) filter.value = category;
      currentPage = 1;
      renderEntries();

      if (category === "quotes") {
        $("#quotes")?.scrollIntoView({ behavior: "smooth" });
      } else {
        $("#browse")?.scrollIntoView({ behavior: "smooth" });
      }

      history.replaceState(null, "", `#${category}`);
    });
  });
}

/* -------------------- Main entries and pagination -------------------- */

function renderEntries() {
  const grid = $("#entryGrid");
  const count = $("#resultCount");
  const pagination = $("#pagination");

  if (!grid) return;

  const filtered = getVisibleEntries();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  currentPage = Math.min(Math.max(currentPage, 1), totalPages);

  const start = (currentPage - 1) * PAGE_SIZE;
  const pageEntries = filtered.slice(start, start + PAGE_SIZE);

  if (count) {
    count.textContent = `${filtered.length} ${t("results")}`;
  }

  if (pageEntries.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>${escapeHTML(t("noResults"))}</p>
      </div>
    `;
  } else {
    grid.innerHTML = pageEntries.map(entry => `
      <article class="entry-card">
        <span class="entry-icon" aria-hidden="true">
          ${escapeHTML(entry.icon || "📜")}
        </span>
        <span class="entry-category">
          ${escapeHTML(categoryName(entry.category))}
        </span>
        <h3>${escapeHTML(entry.name)}</h3>
        ${entry.period ? `<div class="entry-meta">${escapeHTML(entry.period)}</div>` : ""}
        <p>${escapeHTML(entry.summary)}</p>
        <div class="entry-actions">
          <button class="button button-primary"
                  type="button"
                  data-read-more="${escapeHTML(entry.id)}">
            ${escapeHTML(t("readMore"))}
          </button>
          ${entry.category === "quotes" ? `
            <button class="button button-secondary"
                    type="button"
                    data-copy-quote="${escapeHTML(entry.id)}">
              ${escapeHTML(t("copy"))}
            </button>
          ` : ""}
        </div>
      </article>
    `).join("");
  }

  renderPagination(pagination, currentPage, totalPages, page => {
    currentPage = page;
    renderEntries();
    $("#browse")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  grid.querySelectorAll("[data-read-more]").forEach(button => {
    button.addEventListener("click", () => openDetails(button.dataset.readMore));
  });

  grid.querySelectorAll("[data-copy-quote]").forEach(button => {
    button.addEventListener("click", () => copyQuote(button.dataset.copyQuote));
  });
}

function renderPagination(container, page, totalPages, onPageChange) {
  if (!container) return;

  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  const buttons = [];

  buttons.push(`
    <button type="button" data-page="${page - 1}" ${page === 1 ? "disabled" : ""}>
      ${escapeHTML(t("previous"))}
    </button>
  `);

  for (let number = 1; number <= totalPages; number++) {
    if (
      totalPages > 7 &&
      number !== 1 &&
      number !== totalPages &&
      Math.abs(number - page) > 1
    ) {
      if (number === 2 && page > 4) buttons.push("<span>…</span>");
      if (number === totalPages - 1 && page < totalPages - 3) buttons.push("<span>…</span>");
      continue;
    }

    buttons.push(`
      <button type="button"
              data-page="${number}"
              class="${number === page ? "active" : ""}"
              ${number === page ? 'aria-current="page"' : ""}>
        ${number}
      </button>
    `);
  }

  buttons.push(`
    <button type="button" data-page="${page + 1}" ${page === totalPages ? "disabled" : ""}>
      ${escapeHTML(t("next"))}
    </button>
  `);

  container.innerHTML = buttons.join("");

  container.querySelectorAll("[data-page]").forEach(button => {
    button.addEventListener("click", () => {
      const nextPage = Number(button.dataset.page);
      if (nextPage >= 1 && nextPage <= totalPages) {
        onPageChange(nextPage);
      }
    });
  });
}

/* -------------------- Story details dialog -------------------- */

function openDetails(id) {
  const entry = getEntry(id);
  const dialog = $("#detailDialog");
  const content = $("#detailContent");

  if (!entry || !dialog || !content) return;

  const factsHTML = entry.facts?.length
    ? `<h3>${currentLanguage === "am" ? "ዋና ነጥቦች" : "Key facts"}</h3>
       <ul>${entry.facts.map(fact => `<li>${escapeHTML(fact)}</li>`).join("")}</ul>`
    : "";

  const metadata = [
    entry.period,
    entry.region,
    entry.field
  ].filter(Boolean);

  content.innerHTML = `
    <div class="detail-icon">${escapeHTML(entry.icon || "📜")}</div>
    <h2 id="detailTitle">${escapeHTML(entry.name)}</h2>
    ${metadata.length
      ? `<p class="detail-meta">${metadata.map(escapeHTML).join(" · ")}</p>`
      : ""}
    <p>${escapeHTML(entry.details || entry.summary)}</p>
    ${factsHTML}
    ${entry.category === "quotes" ? `
      <p class="detail-meta">${escapeHTML(t("author"))}: ${escapeHTML(entry.author || "Unknown")}</p>
      <div class="entry-actions">
        <button type="button" class="button button-primary" id="detailCopyQuote">
          ${escapeHTML(t("copy"))}
        </button>
        <button type="button" class="button button-secondary" id="detailShareQuote">
          ${escapeHTML(t("share"))}
        </button>
      </div>
    ` : ""}
  `;

  if (typeof dialog.showModal === "function") {
    if (!dialog.open) dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }

  $("#detailCopyQuote")?.addEventListener("click", () => copyQuote(id));
  $("#detailShareQuote")?.addEventListener("click", () => shareQuote(id));
}

function closeDetails() {
  const dialog = $("#detailDialog");
  if (!dialog) return;

  if (typeof dialog.close === "function" && dialog.open) {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

/* -------------------- Quote section -------------------- */

function getVisibleQuotes() {
  const search = normalizeText($("#quoteSearch")?.value || "");
  const type = $("#quoteType")?.value || "all";

  return entries.filter(entry => {
    if (entry.category !== "quotes") return false;

    const matchesType = type === "all" || entry.type === type;
    const text = normalizeText([
      entry.name,
      entry.summary,
      entry.details,
      entry.author,
      entry.type
    ].join(" "));

    return matchesType && text.includes(search);
  });
}

function renderQuotes() {
  const grid = $("#quoteCards");
  const pagination = $("#quotePagination");

  if (!grid) return;

  const filtered = getVisibleQuotes();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  currentQuotePage = Math.min(Math.max(currentQuotePage, 1), totalPages);

  const start = (currentQuotePage - 1) * PAGE_SIZE;
  const pageQuotes = filtered.slice(start, start + PAGE_SIZE);

  if (!pageQuotes.length) {
    grid.innerHTML = `<div class="empty-state">${escapeHTML(t("noResults"))}</div>`;
  } else {
    grid.innerHTML = pageQuotes.map(quote => `
      <article class="quote-card">
        <span class="quote-mark" aria-hidden="true">“</span>
        <span class="quote-type">${escapeHTML(
          quote.type === "funny" ? t("quoteFunny") : t("quoteMotivational")
        )}</span>
        <blockquote>${escapeHTML(quote.summary)}</blockquote>
        <p class="quote-author">— ${escapeHTML(quote.author || "Unknown")}</p>
        <div class="quote-actions">
          <button type="button" data-copy-quote="${escapeHTML(quote.id)}">
            ${escapeHTML(t("copy"))}
          </button>
          <button type="button" data-share-quote="${escapeHTML(quote.id)}">
            ${escapeHTML(t("share"))}
          </button>
        </div>
      </article>
    `).join("");
  }

  renderPagination(pagination, currentQuotePage, totalPages, page => {
    currentQuotePage = page;
    renderQuotes();
  });

  grid.querySelectorAll("[data-copy-quote]").forEach(button => {
    button.addEventListener("click", () => copyQuote(button.dataset.copyQuote));
  });

  grid.querySelectorAll("[data-share-quote]").forEach(button => {
    button.addEventListener("click", () => shareQuote(button.dataset.shareQuote));
  });
}

/* -------------------- Copy and share -------------------- */

function getQuoteText(entry) {
  return `“${entry.summary}” — ${entry.author || "Unknown"}`;
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      showToast(t("copied"));
      return true;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    const successful = document.execCommand("copy");
    textarea.remove();

    if (successful) {
      showToast(t("copied"));
      return true;
    }
  } catch (error) {
    console.error("Copy failed:", error);
  }

  showToast(t("copyFailed"));
  return false;
}

function copyQuote(id) {
  const entry = getEntry(id);
  if (!entry || entry.category !== "quotes") return;
  return copyText(getQuoteText(entry));
}

async function shareQuote(id) {
  const entry = getEntry(id);
  if (!entry || entry.category !== "quotes") return;

  const text = getQuoteText(entry);

  if (navigator.share) {
    try {
      await navigator.share({
        title: entry.name,
        text
      });
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error("Share failed:", error);
      }
    }
  } else {
    await copyText(text);
    showToast(t("shareUnavailable"));
  }
}

/* -------------------- Language selector -------------------- */

function applyLanguage(language) {
  currentLanguage = UI[language] ? language : "en";

  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const value = t(key);

    if (key === "heroTitle") {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  renderCollections();
  renderEntries();
  renderQuotes();
}

function initLanguage() {
  const select = $("#languageSelect");
  if (!select) return;

  let savedLanguage = "en";

  try {
    savedLanguage = localStorage.getItem("kingdomLanguage") || "en";
  } catch (error) {
    console.warn("Local storage is unavailable.");
  }

  if (!UI[savedLanguage]) savedLanguage = "en";
  select.value = savedLanguage;
  applyLanguage(savedLanguage);

  select.addEventListener("change", () => {
    const language = UI[select.value] ? select.value : "en";

    try {
      localStorage.setItem("kingdomLanguage", language);
    } catch (error) {
      console.warn("Could not save language preference.");
    }

    applyLanguage(language);
  });
}

/* -------------------- Feedback form -------------------- */

function initFeedback() {
  const form = $("#feedbackForm");
  const message = $("#feedbackMessage");
  const status = $("#feedbackStatus");

  if (!form || !message || !status) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    if (!message.value.trim()) {
      status.textContent = t("feedbackRequired");
      return;
    }

    status.textContent = `${t("feedbackSuccess")} ${t("demoWarning")}`;

    /*
      This is a front-end demo only.
      Connect a backend or form service to actually receive feedback.
    */
    form.reset();
  });
}

/* -------------------- Toast -------------------- */

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimeout) clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* -------------------- Event listeners and startup -------------------- */

function init() {
  const searchInput = $("#searchInput");
  const categoryFilter = $("#categoryFilter");
  const sortFilter = $("#sortFilter");
  const quoteSearch = $("#quoteSearch");
  const quoteType = $("#quoteType");
  const closeButton = $("#dialogClose");
  const dialog = $("#detailDialog");

  searchInput?.addEventListener("input", () => {
    currentPage = 1;
    renderEntries();
  });

  categoryFilter?.addEventListener("change", () => {
    currentPage = 1;
    renderEntries();
  });

  sortFilter?.addEventListener("change", () => {
    currentPage = 1;
    renderEntries();
  });

  quoteSearch?.addEventListener("input", () => {
    currentQuotePage = 1;
    renderQuotes();
  });

  quoteType?.addEventListener("change", () => {
    currentQuotePage = 1;
    renderQuotes();
  });

  closeButton?.addEventListener("click", closeDetails);

  dialog?.addEventListener("click", event => {
    if (event.target === dialog) closeDetails();
  });

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  initLanguage();
  initFeedback();

  renderCollections();
  renderEntries();
  renderQuotes();

  console.info(
    `Kingdom of Legends loaded: ${entries.length} starter records. ` +
    "The full 680-record collection has not yet been populated."
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
