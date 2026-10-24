
"use strict";

/*
 * KINGDOM OF LEGENDS
 * Initial working dataset.
 * These are starter examples, not the complete 680-entry collection.
 */

const PAGE_SIZE = 9;

const CATEGORY_INFO = {
  kings: {
    label: "Kings",
    icon: "👑",
    target: 100,
    description: "Monarchs who shaped kingdoms and empires."
  },
  leaders: {
    label: "Leaders",
    icon: "🛡️",
    target: 80,
    description: "Leaders who influenced nations and people."
  },
  scientists: {
    label: "Scientists",
    icon: "🔬",
    target: 50,
    description: "Discoveries that changed our understanding."
  },
  places: {
    label: "Historical Places",
    icon: "🏛️",
    target: 100,
    description: "Places that preserve the memory of history."
  },
  quotes: {
    label: "Quotes",
    icon: "💬",
    target: 250,
    description: "Funny and motivational words to remember."
  },
  events: {
    label: "Historical Events",
    icon: "📜",
    target: 100,
    description: "Events that changed the course of history."
  }
};

const DATA = [
  {
    id: "king-mansa-musa",
    category: "kings",
    title: "Mansa Musa",
    meta: "c. 1280–c. 1337 · Mali Empire · Africa",
    icon: "👑",
    region: "Africa",
    summary: "The celebrated ruler of the Mali Empire, remembered for his pilgrimage to Mecca and the wealth and learning associated with his reign.",
    details: [
      ["Early life and rise", "Mansa Musa became ruler of the Mali Empire in the early 14th century. Details of his childhood and the circumstances of his accession are limited in surviving sources."],
      ["Achievements", "His reign is associated with the expansion and consolidation of Mali, trans-Saharan trade, and the growth of Islamic scholarship. Timbuktu became an important center of learning over time."],
      ["The pilgrimage", "In 1324, Musa traveled to Mecca with a large entourage. Accounts of his generosity became famous across parts of North Africa and the Middle East."],
      ["Death and legacy", "The exact year of his death is uncertain. He is remembered as one of the best-known rulers of medieval West Africa."]
    ]
  },
  {
    id: "king-ramesses-ii",
    category: "kings",
    title: "Ramesses II",
    meta: "c. 1303–1213 BCE · Ancient Egypt",
    icon: "👑",
    region: "Africa",
    summary: "One of ancient Egypt's most prominent pharaohs, known for monumental building projects and the Battle of Kadesh.",
    details: [
      ["Early life", "Ramesses II was the son of Pharaoh Seti I and became pharaoh around 1279 BCE."],
      ["Reign and building", "He commissioned temples, statues, and monuments, including major works at Abu Simbel and additions at Karnak and Luxor."],
      ["Battle and diplomacy", "The Battle of Kadesh against the Hittites is usually dated to around 1274 BCE. The conflict was followed years later by a surviving peace treaty."],
      ["Death and legacy", "He died after a long reign and was buried in the Valley of the Kings. His monuments and inscriptions made his name enduring."]
    ]
  },
  {
    id: "king-cleopatra",
    category: "kings",
    title: "Cleopatra VII",
    meta: "69–30 BCE · Ptolemaic Egypt",
    icon: "👑",
    region: "Africa",
    summary: "The last active ruler of the Ptolemaic Kingdom of Egypt, known for her political strategy and relationships with Roman leaders.",
    details: [
      ["Background", "Cleopatra VII belonged to the Ptolemaic dynasty, which descended from one of Alexander the Great's generals. She ruled with periods of conflict and co-rule."],
      ["Politics", "She worked with Julius Caesar and later Mark Antony to protect her kingdom amid Roman civil wars."],
      ["Final conflict", "After Antony and Cleopatra were defeated by Octavian's forces at Actium in 31 BCE, Roman forces entered Egypt."],
      ["Death and legacy", "Cleopatra died in 30 BCE. The exact circumstances of her death remain debated. Egypt then came under Roman rule."]
    ]
  },
  {
    id: "king-aksum-ezana",
    category: "kings",
    title: "King Ezana",
    meta: "4th century CE · Kingdom of Aksum · Ethiopia",
    icon: "👑",
    region: "Africa",
    summary: "An important Aksumite king associated with the adoption of Christianity by the royal court.",
    details: [
      ["Kingdom of Aksum", "Aksum was a powerful trading kingdom in the Horn of Africa, connected to Red Sea and wider international trade networks."],
      ["Christianity", "In Ezana's reign, the royal court adopted Christianity. Inscriptions from his reign reflect a change in religious language and symbols."],
      ["Power and trade", "Aksum issued coins and used monumental inscriptions to express royal authority. Its trade connected Africa, Arabia, and the Mediterranean."],
      ["Legacy", "Ezana is a major figure in Ethiopian history. The precise chronology of his reign is reconstructed from inscriptions and other evidence."]
    ]
  },
  {
    id: "king-menelik-ii",
    category: "kings",
    title: "Menelik II",
    meta: "1844–1913 · Ethiopia",
    icon: "👑",
    region: "Africa",
    summary: "Emperor of Ethiopia, associated with state expansion, modernization efforts, and the Ethiopian victory at Adwa.",
    details: [
      ["Rise to power", "Menelik became King of Shewa and later Emperor of Ethiopia in 1889."],
      ["Battle of Adwa", "In 1896, Ethiopian forces defeated an invading Italian army at Adwa. Empress Taytu Betul and many commanders and communities played important roles."],
      ["Modernization", "During his reign, Ethiopia expanded telegraph and rail projects and introduced other state institutions and technologies, though changes were uneven."],
      ["Legacy", "Menelik II remains a significant and debated historical figure. His reign also involved territorial expansion and conflict."]
    ]
  },

  {
    id: "leader-nelson-mandela",
    category: "leaders",
    title: "Nelson Mandela",
    meta: "1918–2013 · South Africa",
    icon: "🛡️",
    region: "Africa",
    summary: "Anti-apartheid leader who became South Africa's first Black president elected in a fully representative democratic election.",
    details: [
      ["Early life", "Mandela studied law and became involved in opposition to apartheid, the system of racial segregation and white minority rule."],
      ["Imprisonment", "He spent 27 years in prison, much of that time on Robben Island, for his role in the anti-apartheid struggle."],
      ["Presidency", "Released in 1990, he helped negotiate a transition to democracy and was elected president in 1994."],
      ["Legacy", "Mandela became an international symbol of resistance, negotiation, and reconciliation, although South Africa continued to face deep inequality."]
    ]
  },
  {
    id: "leader-taytu-betul",
    category: "leaders",
    title: "Empress Taytu Betul",
    meta: "c. 1851–1918 · Ethiopia",
    icon: "🛡️",
    region: "Africa",
    summary: "Ethiopian empress and political figure who played a notable role during the period of the Battle of Adwa.",
    details: [
      ["Political role", "Taytu Betul was the wife of Emperor Menelik II and an influential figure in the Ethiopian imperial court."],
      ["Adwa", "During the 1896 conflict with Italy, she supported the Ethiopian war effort and was present with the imperial forces."],
      ["Addis Ababa", "She is associated with the early development of Addis Ababa as Ethiopia's capital."],
      ["Legacy", "Taytu is remembered for political influence and opposition to Italian colonial ambitions. Accounts of particular events vary by source."]
    ]
  },
  {
    id: "leader-martin-luther-king",
    category: "leaders",
    title: "Martin Luther King Jr.",
    meta: "1929–1968 · United States",
    icon: "🛡️",
    region: "Americas",
    summary: "Baptist minister and civil rights leader who advocated nonviolent resistance to racial segregation.",
    details: [
      ["Leadership", "King became a prominent leader in the US civil rights movement, including the Montgomery bus boycott."],
      ["Nonviolent protest", "He supported marches, boycotts, and civil disobedience to challenge segregation and discrimination."],
      ["Major achievements", "The movement helped build public pressure for the Civil Rights Act of 1964 and the Voting Rights Act of 1965."],
      ["Legacy", "King was assassinated in 1968. His work remains influential in civil rights movements worldwide."]
    ]
  },
  {
    id: "leader-wangari-maathai",
    category: "leaders",
    title: "Wangari Maathai",
    meta: "1940–2011 · Kenya",
    icon: "🛡️",
    region: "Africa",
    summary: "Environmental activist and founder of the Green Belt Movement, awarded the Nobel Peace Prize in 2004.",
    details: [
      ["Education", "Maathai became a biologist and was the first woman in East and Central Africa to earn a doctorate."],
      ["Green Belt Movement", "Founded in 1977, the movement supported tree planting, environmental protection, and community participation, especially by women."],
      ["Public service", "She served in Kenya's parliament and continued to campaign for environmental protection and democratic rights."],
      ["Legacy", "She received the Nobel Peace Prize in 2004 for contributions to sustainable development, democracy, and peace."]
    ]
  },

  {
    id: "scientist-marie-curie",
    category: "scientists",
    title: "Marie Curie",
    meta: "1867–1934 · Physics and Chemistry",
    icon: "🔬",
    region: "Europe",
    summary: "Pioneering scientist whose research on radioactivity led to Nobel Prizes in two scientific fields.",
    details: [
      ["Early life", "Born Maria Skłodowska in Warsaw, she moved to Paris to study at the Sorbonne."],
      ["Research", "Working with Pierre Curie and other collaborators, she investigated radioactivity and helped identify polonium and radium."],
      ["Awards", "She received the 1903 Nobel Prize in Physics and the 1911 Nobel Prize in Chemistry."],
      ["Legacy", "Her scientific work transformed physics and chemistry. She died in 1934 from aplastic anemia, associated with prolonged radiation exposure."]
    ]
  },
  {
    id: "scientist-isaac-newton",
    category: "scientists",
    title: "Isaac Newton",
    meta: "1643–1727 · Physics and Mathematics",
    icon: "🔬",
    region: "Europe",
    summary: "Physicist and mathematician whose work helped establish classical mechanics and laws of motion.",
    details: [
      ["Scientific work", "Newton developed major ideas in calculus, optics, and mechanics. Some mathematical ideas were developed independently by other scholars, including Leibniz."],
      ["Principia", "His 1687 book described laws of motion and universal gravitation."],
      ["Optics", "He investigated light and color and built an influential reflecting telescope."],
      ["Legacy", "Newton's work shaped science for centuries, though later physics revised some of its limits."]
    ]
  },
  {
    id: "scientist-albert-einstein",
    category: "scientists",
    title: "Albert Einstein",
    meta: "1879–1955 · Theoretical Physics",
    icon: "🔬",
    region: "Europe",
    summary: "Physicist whose theories of relativity transformed modern understanding of space, time, gravity, and energy.",
    details: [
      ["Early career", "Einstein published several influential papers in 1905, including work on the photoelectric effect and special relativity."],
      ["Relativity", "General relativity, published in 1915, described gravity as the curvature of spacetime."],
      ["Nobel Prize", "He received the 1921 Nobel Prize in Physics for his explanation of the photoelectric effect, not specifically for relativity."],
      ["Legacy", "Einstein became one of the best-known scientists of the modern era and spoke publicly about peace and social issues."]
    ]
  },
  {
    id: "scientist-katherine-johnson",
    category: "scientists",
    title: "Katherine Johnson",
    meta: "1918–2020 · Mathematics and Spaceflight",
    icon: "🔬",
    region: "Americas",
    summary: "Mathematician whose calculations helped support early US crewed space missions.",
    details: [
      ["Career", "Johnson worked at the organization that became NASA, contributing mathematical calculations for flight trajectories."],
      ["Space missions", "Her work supported the 1961 flight of Alan Shepard and the 1962 orbital mission of John Glenn, among others."],
      ["Breaking barriers", "She worked through a period of racial segregation and gender discrimination in American institutions."],
      ["Recognition", "Johnson received the Presidential Medal of Freedom in 2015. Her career gained wider recognition through books and film."]
    ]
  },

  {
    id: "place-lalibela",
    category: "places",
    title: "Rock-Hewn Churches of Lalibela",
    meta: "Medieval period · Amhara, Ethiopia",
    icon: "🏛️",
    region: "Africa",
    summary: "A group of remarkable churches carved from rock, forming an important Ethiopian Orthodox Christian pilgrimage site.",
    details: [
      ["Construction", "The churches were carved from living rock over time, mainly during the medieval period. Their exact construction histories differ and remain subjects of research."],
      ["Purpose", "They serve religious, liturgical, and pilgrimage purposes and are central to Ethiopian Orthodox Christian tradition."],
      ["Architecture", "The complex includes trenches, tunnels, courtyards, and monolithic or semi-monolithic churches."],
      ["Preservation", "Lalibela is a UNESCO World Heritage Site. Conservation must balance protecting the structures with continued religious use."]
    ]
  },
  {
    id: "place-axum",
    category: "places",
    title: "Aksum Archaeological Site",
    meta: "Ancient and medieval periods · Tigray, Ethiopia",
    icon: "🏛️",
    region: "Africa",
    summary: "The remains of the ancient Aksumite civilization, including monumental stelae and archaeological remains.",
    details: [
      ["Ancient kingdom", "Aksum was a major political and commercial center connecting the Horn of Africa with Red Sea trade."],
      ["Monuments", "The site includes large carved stone stelae, tombs, and remains of palaces and other structures."],
      ["Religion and writing", "Aksumite inscriptions and coins provide evidence of political history, trade, and the adoption of Christianity."],
      ["Importance", "Aksum is a UNESCO World Heritage Site and an important place in Ethiopian historical and religious memory."]
    ]
  },
  {
    id: "place-pyramids",
    category: "places",
    title: "Pyramids of Giza",
    meta: "c. 26th–25th centuries BCE · Egypt",
    icon: "🏛️",
    region: "Africa",
    summary: "Monumental royal tombs built during Egypt's Old Kingdom, including the Great Pyramid of Khufu.",
    details: [
      ["Who built them?", "Ancient Egyptian workers, craftspeople, planners, and laborers constructed the pyramids under royal authority. Archaeology shows organized workforces rather than supporting the old myth that enslaved people alone built them."],
      ["Purpose", "The pyramids served as royal tombs and parts of larger funerary complexes connected with Egyptian beliefs about kingship and the afterlife."],
      ["Construction", "Builders quarried, transported, and positioned huge stone blocks using sophisticated organization and engineering. Details of some construction methods remain debated."],
      ["Legacy", "The Giza pyramids are among the most famous surviving monuments of ancient Egypt."]
    ]
  },
  {
    id: "place-great-wall",
    category: "places",
    title: "Great Wall of China",
    meta: "Multiple periods · China",
    icon: "🏛️",
    region: "Asia",
    summary: "A network of fortifications built and rebuilt by successive Chinese states and dynasties over many centuries.",
    details: [
      ["Construction history", "Different walls were built by various states. Qin-era rulers linked some earlier fortifications, while many surviving sections date to later dynasties, especially the Ming."],
      ["Purpose", "The walls helped control movement, defend strategic areas, and support border administration, though effectiveness varied."],
      ["Design", "The system includes walls, watchtowers, passes, and other defensive structures adapted to local terrain."],
      ["Legacy", "The Great Wall is a UNESCO World Heritage Site and an enduring symbol of Chinese history."]
    ]
  },

  {
    id: "event-berlin-wall",
    category: "events",
    title: "The Fall of the Berlin Wall",
    meta: "9 November 1989 · Germany",
    icon: "📜",
    region: "Europe",
    summary: "A historic turning point in the Cold War that opened the way toward German reunification.",
    details: [
      ["Why was the wall built?", "After World War II, Germany and Berlin were divided into sectors controlled by the victorious powers. As Cold War tensions deepened, East Germany faced large-scale emigration to West Berlin and West Germany. The East German government began building the Berlin Wall on 13 August 1961 to stop people leaving through Berlin. The wall became a symbol of the division between communist East and capitalist West."],
      ["Who built it?", "The wall was built by the German Democratic Republic (East Germany), under its ruling Socialist Unity Party and security forces, with the wider political backing of the Soviet bloc. It began as barriers and wire fencing and later became a fortified border system."],
      ["Why did it fall?", "By 1989, public protests in East Germany were growing, more East Germans were leaving through other Eastern European countries, and political change across the Soviet bloc was weakening the government's control. On 9 November, East German official Günter Schabowski gave a confusing announcement about new travel rules, saying they were effective immediately. Crowds gathered at border crossings, and guards eventually opened them."],
      ["Who brought it down?", "There was no single person who brought the wall down. Peaceful protesters, East German citizens, wider political changes, and the actions of border guards all contributed. People began chipping away at the wall that night; demolition and removal continued afterward."],
      ["What happened next?", "The opening of the border accelerated the process that led to German reunification on 3 October 1990. It also became one of the defining events associated with the end of the Cold War in Europe."],
      ["Historical significance", "The fall of the Berlin Wall showed how public pressure and political change could transform a divided society. It did not instantly solve every social or economic problem, but it marked the end of one of the most visible symbols of Cold War division."]
    ]
  },
  {
    id: "event-battle-adwa",
    category: "events",
    title: "Battle of Adwa",
    meta: "1 March 1896 · Ethiopia",
    icon: "📜",
    region: "Africa",
    summary: "A decisive Ethiopian victory over invading Italian forces that became a major landmark in African and anti-colonial history.",
    details: [
      ["Background", "Conflict grew from disputes over Italy's attempt to establish colonial control and the interpretation of the Treaty of Wuchale. The Italian and Amharic versions differed on whether Ethiopia was required to conduct foreign relations through Italy."],
      ["Who led the forces?", "Emperor Menelik II and Empress Taytu Betul were central figures. Ethiopian commanders included Ras Makonnen, Ras Alula, Ras Mikael, and others; many regional forces participated."],
      ["The battle", "On 1 March 1896, Ethiopian forces defeated the Italian army near Adwa in northern Ethiopia. The outcome reflected mobilization, leadership, terrain, and serious problems in the Italian campaign."],
      ["Consequences", "The victory helped preserve Ethiopia's independence. The Treaty of Addis Ababa in October 1896 replaced the disputed treaty and recognized Ethiopia's independence."],
      ["Legacy", "Adwa became a powerful symbol of African resistance to European colonialism and remains a central event in Ethiopian national history."]
    ]
  },
  {
    id: "event-moon-landing",
    category: "events",
    title: "Apollo 11 Moon Landing",
    meta: "20 July 1969 · Moon",
    icon: "📜",
    region: "Americas",
    summary: "The first crewed mission to land humans on the Moon, carried out by NASA during the Space Race.",
    details: [
      ["Background", "The mission grew from the Space Race between the United States and the Soviet Union during the Cold War. President John F. Kennedy had set the goal of landing a person on the Moon and returning them safely to Earth."],
      ["The crew", "Neil Armstrong and Buzz Aldrin landed on the Moon in the lunar module Eagle, while Michael Collins remained in lunar orbit in the command module."],
      ["The landing", "The lunar module touched down on 20 July 1969 UTC. Armstrong and Aldrin walked on the lunar surface while Collins continued orbiting above."],
      ["Return", "The astronauts returned safely to Earth on 24 July 1969."],
      ["Legacy", "Apollo 11 was a major engineering achievement and a landmark in space exploration, enabled by the work of many engineers, scientists, technicians, and support teams."]
    ]
  },

  {
    id: "quote-motivation-1",
    category: "quotes",
    title: "Small Steps",
    meta: "Motivational · Original wording",
    icon: "💬",
    quoteType: "Motivational",
    summary: "Small steps taken consistently can lead to meaningful progress.",
    details: [
      ["Quote", "You do not have to climb the whole mountain today. Just take the next honest step."],
      ["Reflection", "Progress is often built through steady effort rather than one dramatic moment."]
    ]
  },
  {
    id: "quote-motivation-2",
    category: "quotes",
    title: "Keep Learning",
    meta: "Motivational · Original wording",
    icon: "💬",
    quoteType: "Motivational",
    summary: "Mistakes can become useful lessons when you learn from them.",
    details: [
      ["Quote", "A mistake is not the end of the lesson; sometimes it is where the lesson begins."],
      ["Reflection", "Review what happened, adjust your approach, and keep moving forward."]
    ]
  },
  {
    id: "quote-funny-1",
    category: "quotes",
    title: "The Five-Minute Plan",
    meta: "Funny · Original wording",
    icon: "💬",
    quoteType: "Funny",
    summary: "A little joke about procrastination.",
    details: [
      ["Quote", "I made a five-minute plan. It took me three hours to feel ready to start."],
      ["Reflection", "Sometimes the hardest part of a task is simply beginning."]
    ]
  },
  {
    id: "quote-funny-2",
    category: "quotes",
    title: "Expert Napper",
    meta: "Funny · Original wording",
    icon: "💬",
    quoteType: "Funny",
    summary: "A playful reminder that rest is tempting.",
    details: [
      ["Quote", "My productivity app says I need focus. My pillow says I need a meeting."],
      ["Reflection", "Balance matters: work when it's time to work, and rest when it's time to rest."]
    ]
  }
];

const UI_TEXT = {
  en: {
    home: "Home",
    kings: "Kings",
    leaders: "Leaders",
    scientists: "Scientists",
    places: "Places",
    quotes: "Quotes",
    events: "Events",
    feedback: "Feedback",
    heroEyebrow: "EXPLORE THE STORIES THAT SHAPED OUR WORLD",
    heroTitle: "Discover the <span>Kingdom</span> of History",
    heroText: "Explore kings, leaders, scientists, historical places, unforgettable events, and words that inspire.",
    explore: "Explore the collection",
    learn: "Discover the mission",
    collectionTitle: "Explore the Collections",
    collectionText: "Choose a collection to explore its entries.",
    noticeTitle: "Growing collection:",
    noticeText: "The numbers shown are collection goals. The entries currently available are starter examples; the full 680-entry collection is not complete yet.",
    browseTitle: "Browse the Collection",
    browseText: "Search names, places, dates, events, and descriptions.",
    searchLabel: "Search",
    searchPlaceholder: "Search history...",
    categoryLabel: "Category",
    allCategories: "All categories",
    sortLabel: "Sort",
    newest: "Newest added",
    alphabetical: "Alphabetical",
    resultSingular: "entry",
    resultPlural: "entries",
    readMore: "Read More",
    copy: "Copy",
    share: "Share",
    noResults: "No matching entries",
    noResultsText: "Try another search term or choose a different category.",
    previous: "Previous",
    next: "Next",
    missionTitle: "Our Mission",
    missionText: "Kingdom of Legends aims to make history easier to explore through clear summaries and detailed stories. Entries are being added in stages, and historical details should be checked against reliable sources.",
    feedbackTitle: "Share Your Feedback",
    feedbackText: "Tell us what works well and what you would like to see improved.",
    feedbackName: "Name (optional)",
    feedbackNamePlaceholder: "Your name",
    feedbackMessage: "Your message",
    feedbackPlaceholder: "Write your feedback...",
    feedbackSubmit: "Submit feedback",
    feedbackNote: "This demo has no connected server, so feedback is not sent to the site owner.",
    feedbackSuccess: "Your message was checked in this demo, but it was not sent or saved.",
    requiredMessage: "Please write a message first.",
    footer: "Made for curious minds and lovers of history.",
    close: "Close",
    quote: "Quote",
    copied: "Copied to clipboard!",
    copyFailed: "Copy was not available. Please select and copy the text manually.",
    shareUnavailable: "Sharing is not supported in this browser. You can copy the quote instead.",
    details: "Details"
  },
  am: {
    home: "መነሻ",
    kings: "ነገሥታት",
    leaders: "መሪዎች",
    scientists: "ሳይንቲስቶች",
    places: "ታሪካዊ ቦታዎች",
    quotes: "ጥቅሶች",
    events: "ታሪካዊ ክስተቶች",
    feedback: "አስተያየት",
    heroEyebrow: "ዓለማችንን የቀየሩ ታሪኮችን ያስሱ",
    heroTitle: "የታሪክን <span>መንግሥት</span> ያግኙ",
    heroText: "ነገሥታትን፣ መሪዎችን፣ ሳይንቲስቶችን፣ ታሪካዊ ቦታዎችን፣ ክስተቶችንና አነቃቂ ጥቅሶችን ያስሱ።",
    explore: "ስብስቡን ያስሱ",
    learn: "ስለ ዓላማችን ይወቁ",
    collectionTitle: "የታሪክ ስብስቦች",
    collectionText: "ለማስሰስ አንድ ምድብ ይምረጡ።",
    noticeTitle: "በመጨመር ላይ:",
    noticeText: "የሚታዩት ቁጥሮች የስብስቡ ግቦች ናቸው። አሁን ያሉት መረጃዎች የመጀመሪያ ምሳሌዎች ናቸው፤ ሙሉው 680 መረጃዎች ገና አልተሟሉም።",
    browseTitle: "ስብስቡን ያስሱ",
    browseText: "ስሞችን፣ ቦታዎችን፣ ቀኖችንና መግለጫዎችን ይፈልጉ።",
    searchLabel: "ፍለጋ",
    searchPlaceholder: "ታሪክ ይፈልጉ...",
    categoryLabel: "ምድብ",
    allCategories: "ሁሉም ምድቦች",
    sortLabel: "ቅደም ተከተል",
    newest: "አዲስ የተጨመሩ",
    alphabetical: "በፊደል ቅደም ተከተል",
    resultSingular: "መረጃ",
    resultPlural: "መረጃዎች",
    readMore: "ተጨማሪ ያንብቡ",
    copy: "ቅዳ",
    share: "አጋራ",
    noResults: "የሚዛመድ መረጃ አልተገኘም",
    noResultsText: "ሌላ ቃል ይፈልጉ ወይም ሌላ ምድብ ይምረጡ።",
    previous: "ቀዳሚ",
    next: "ቀጣይ",
    missionTitle: "የእኛ ዓላማ",
    missionText: "ዓላማችን ታሪክን በግልጽ ማብራሪያዎችና በዝርዝር ታሪኮች ማቅረብ ነው። መረጃዎች በደረጃ እየተጨመሩ ነው።",
    feedbackTitle: "አስተያየት ይስጡ",
    feedbackText: "ምን እንደወደዱና ምን መሻሻል እንዳለበት ይንገሩን።",
    feedbackName: "ስም (አማራጭ)",
    feedbackNamePlaceholder: "ስምዎ",
    feedbackMessage: "መልዕክትዎ",
    feedbackPlaceholder: "አስተያየትዎን ይጻፉ...",
    feedbackSubmit: "አስተያየት ላክ",
    feedbackNote: "ይህ የሙከራ ስሪት ከሰርቨር ጋር አልተገናኘም፤ ስለዚህ አስተያየቱ ለገጹ ባለቤት አይላክም።",
    feedbackSuccess: "መልዕክቱ በሙከራው ላይ ተመርምሯል፤ ግን አልተላከም ወይም አልተቀመጠም።",
    requiredMessage: "እባክዎ መጀመሪያ መልዕክት ይጻፉ።",
    footer: "ታሪክን ለሚወዱና ለሚጠይቁ አእምሮዎች የተዘጋጀ።",
    close: "ዝጋ",
    quote: "ጥቅስ",
    copied: "ወደ clipboard ተቀድቷል!",
    copyFailed: "መቅዳት አልተቻለም፤ ጽሑፉን በእጅ ይምረጡና ይቅዱ።",
    shareUnavailable: "በዚህ አሳሽ ማጋራት አይደገፍም፤ ጥቅሱን መቅዳት ይችላሉ።",
    details: "ዝርዝር"
  },
  ti: {
    home: "መበገሲ",
    kings: "ነገስታት",
    leaders: "መራሕቲ",
    scientists: "ሳይንቲስታት",
    places: "ታሪኻዊ ቦታታት",
    quotes: "ጥቕስታት",
    events: "ታሪኻዊ ፍጻመታት",
    feedback: "ርእይቶ",
    heroEyebrow: "ታሪኽ ዝቐየሩ ዛንታታት ኣስስሑ",
    heroTitle: "መንግስቲ <span>ታሪኽ</span> ዳህስሱ",
    heroText: "ነገስታት፣ መራሕቲ፣ ሳይንቲስታት፣ ታሪኻዊ ቦታታትን ፍጻመታትን ዳህስሱ።",
    explore: "ስብስቡ ዳህስሱ",
    learn: "ብዛዕባ ዕላማና",
    collectionTitle: "ስብስባት ታሪኽ",
    collectionText: "ንምድህሳስ ምድብ ምረጹ።",
    noticeTitle: "እናዓበየ ዝኸይድ ስብስብ:",
    noticeText: "እቶም ቁጽርታት ዕላማታት እዮም። እቶም ሕጂ ዘለዉ መረዳእታታት መጀመርታዊ ኣብነታት እዮም።",
    browseTitle: "ስብስቡ ዳህስሱ",
    browseText: "ስማት፣ ቦታታት፣ ዕለታትን መግለጺታትን ድለዩ።",
    searchLabel: "ድለዩ",
    searchPlaceholder: "ታሪኽ ድለዩ...",
    categoryLabel: "ምድብ",
    allCategories: "ኩሎም ምድባት",
    sortLabel: "ምድባር",
    newest: "ሓደሽቲ",
    alphabetical: "ብፊደል",
    resultSingular: "መረዳእታ",
    resultPlural: "መረዳእታታት",
    readMore: "ተወሳኺ ኣንብቡ",
    copy: "ቅዳሕ",
    share: "ኣካፍሉ",
    noResults: "ዝሰማማዕ መረዳእታ ኣይተረኽበን",
    noResultsText: "ካልእ ቃል ድለዩ ወይ ካልእ ምድብ ምረጹ።",
    previous: "ዝሓለፈ",
    next: "ዝቕጽል",
    missionTitle: "ዕላማና",
    missionText: "ዕላማና ታሪኽ ብንጹር መግለጺታትን ዝርዝር ዛንታታትን ምቕራብ እዩ።",
    feedbackTitle: "ርእይቶ ሃቡ",
    feedbackText: "እንታይ ከም ዝፈተኹምን እንታይ ክመሓየሽ ከም ዘለዎን ንገሩና።",
    feedbackName: "ስም (ኣማራጺ)",
    feedbackNamePlaceholder: "ስምኩም",
    feedbackMessage: "መልእኽትኹም",
    feedbackPlaceholder: "ርእይቶኹም ጸሓፉ...",
    feedbackSubmit: "ርእይቶ ስደዱ",
    feedbackNote: "እዚ ሙከራ ስሪት ምስ ሰርቨር ኣይተኣሳሰረን።",
    feedbackSuccess: "መልእኽትኹም ኣብዚ ሙከራ ተመርሚሩ፤ ግን ኣይተላእከን።",
    requiredMessage: "በጃኹም መጀመርታ መልእኽቲ ጸሓፉ።",
    footer: "ንታሪኽ ዝፈትዉ ኣእምሮታት ዝተዳለወ።",
    close: "ዕጸዉ",
    quote: "ጥቕሲ",
    copied: "ተቐዲሑ!",
    copyFailed: "ኣይተቐድሐን፤ ጽሑፉ ብኢድኩም ቅድሑ።",
    shareUnavailable: "ኣብዚ ኣሳሽ ምክፋል ኣይድገፍን።",
    details: "ዝርዝር"
  },
  fr: {
    home: "Accueil", kings: "Rois", leaders: "Dirigeants",
    scientists: "Scientifiques", places: "Lieux historiques",
    quotes: "Citations", events: "Événements", feedback: "Avis",
    heroEyebrow: "EXPLOREZ LES HISTOIRES QUI ONT FAÇONNÉ LE MONDE",
    heroTitle: "Découvrez le <span>royaume</span> de l’histoire",
    heroText: "Explorez les rois, dirigeants, scientifiques, lieux historiques, événements et citations inspirantes.",
    explore: "Explorer la collection", learn: "Notre mission",
    collectionTitle: "Explorer les collections",
    collectionText: "Choisissez une collection à explorer.",
    noticeTitle: "Collection en développement :",
    noticeText: "Les nombres indiqués sont des objectifs. Les entrées actuelles sont des exemples de départ ; les 680 entrées ne sont pas encore terminées.",
    browseTitle: "Parcourir la collection",
    browseText: "Recherchez des noms, des lieux, des dates et des descriptions.",
    searchLabel: "Recherche", searchPlaceholder: "Rechercher dans l’histoire...",
    categoryLabel: "Catégorie", allCategories: "Toutes les catégories",
    sortLabel: "Trier", newest: "Ajouts récents", alphabetical: "Ordre alphabétique",
    resultSingular: "entrée", resultPlural: "entrées", readMore: "Lire la suite",
    copy: "Copier", share: "Partager", noResults: "Aucun résultat",
    noResultsText: "Essayez un autre terme ou une autre catégorie.",
    previous: "Précédent", next: "Suivant",
    missionTitle: "Notre mission",
    missionText: "Kingdom of Legends rend l’histoire plus facile à explorer grâce à des résumés clairs et des récits détaillés.",
    feedbackTitle: "Votre avis", feedbackText: "Dites-nous ce qui fonctionne et ce qui pourrait être amélioré.",
    feedbackName: "Nom (facultatif)", feedbackNamePlaceholder: "Votre nom",
    feedbackMessage: "Votre message", feedbackPlaceholder: "Écrivez votre avis...",
    feedbackSubmit: "Envoyer l’avis",
    feedbackNote: "Cette démo n’est reliée à aucun serveur ; votre avis n’est pas transmis au propriétaire du site.",
    feedbackSuccess: "Votre message a été vérifié dans cette démo, mais il n’a pas été envoyé ni enregistré.",
    requiredMessage: "Veuillez d’abord écrire un message.",
    footer: "Pour les esprits curieux et les passionnés d’histoire.",
    close: "Fermer", quote: "Citation", copied: "Copié !",
    copyFailed: "Copie indisponible. Sélectionnez et copiez le texte manuellement.",
    shareUnavailable: "Le partage n’est pas pris en charge ici. Vous pouvez copier la citation.",
    details: "Détails"
  },
  es: {
    home: "Inicio", kings: "Reyes", leaders: "Líderes",
    scientists: "Científicos", places: "Lugares históricos",
    quotes: "Citas", events: "Acontecimientos", feedback: "Opiniones",
    heroEyebrow: "EXPLORA LAS HISTORIAS QUE CAMBIARON EL MUNDO",
    heroTitle: "Descubre el <span>reino</span> de la historia",
    heroText: "Explora reyes, líderes, científicos, lugares históricos, acontecimientos y frases inspiradoras.",
    explore: "Explorar colección", learn: "Nuestra misión",
    collectionTitle: "Explorar las colecciones",
    collectionText: "Elige una colección para explorarla.",
    noticeTitle: "Colección en crecimiento:",
    noticeText: "Las cifras son objetivos. Las entradas actuales son ejemplos iniciales; las 680 entradas aún no están completas.",
    browseTitle: "Explorar la colección",
    browseText: "Busca nombres, lugares, fechas y descripciones.",
    searchLabel: "Buscar", searchPlaceholder: "Buscar historia...",
    categoryLabel: "Categoría", allCategories: "Todas las categorías",
    sortLabel: "Ordenar", newest: "Añadidos recientemente", alphabetical: "Orden alfabético",
    resultSingular: "entrada", resultPlural: "entradas", readMore: "Leer más",
    copy: "Copiar", share: "Compartir", noResults: "No hay resultados",
    noResultsText: "Prueba otra palabra o categoría.",
    previous: "Anterior", next: "Siguiente",
    missionTitle: "Nuestra misión",
    missionText: "Kingdom of Legends facilita explorar la historia con resúmenes claros y relatos detallados.",
    feedbackTitle: "Envía tu opinión", feedbackText: "Cuéntanos qué funciona y qué se puede mejorar.",
    feedbackName: "Nombre (opcional)", feedbackNamePlaceholder: "Tu nombre",
    feedbackMessage: "Tu mensaje", feedbackPlaceholder: "Escribe tu opinión...",
    feedbackSubmit: "Enviar opinión",
    feedbackNote: "Esta demostración no está conectada a un servidor; el mensaje no se envía al propietario.",
    feedbackSuccess: "El mensaje se revisó en esta demostración, pero no se envió ni guardó.",
    requiredMessage: "Escribe un mensaje primero.",
    footer: "Para mentes curiosas y amantes de la historia.",
    close: "Cerrar", quote: "Cita", copied: "¡Copiado!",
    copyFailed: "No se pudo copiar. Selecciona el texto y cópialo manualmente.",
    shareUnavailable: "Este navegador no permite compartir aquí. Puedes copiar la cita.",
    details: "Detalles"
  },
  ar: {
    home: "الرئيسية", kings: "الملوك", leaders: "القادة",
    scientists: "العلماء", places: "أماكن تاريخية",
    quotes: "اقتباسات", events: "أحداث تاريخية", feedback: "ملاحظات",
    heroEyebrow: "اكتشف القصص التي غيّرت العالم",
    heroTitle: "اكتشف <span>مملكة</span> التاريخ",
    heroText: "استكشف الملوك والقادة والعلماء والأماكن التاريخية والأحداث والاقتباسات الملهمة.",
    explore: "استكشف المجموعة", learn: "تعرف على رسالتنا",
    collectionTitle: "استكشف المجموعات", collectionText: "اختر مجموعة لاستكشافها.",
    noticeTitle: "مجموعة قيد التطوير:",
    noticeText: "الأرقام هي أهداف للمجموعة. المحتوى الحالي أمثلة أولية، ولم تكتمل العناصر الـ680 بعد.",
    browseTitle: "تصفح المجموعة", browseText: "ابحث عن الأسماء والأماكن والتواريخ والأوصاف.",
    searchLabel: "بحث", searchPlaceholder: "ابحث في التاريخ...",
    categoryLabel: "الفئة", allCategories: "كل الفئات",
    sortLabel: "ترتيب", newest: "المضاف حديثًا", alphabetical: "أبجديًا",
    resultSingular: "عنصر", resultPlural: "عناصر", readMore: "اقرأ المزيد",
    copy: "نسخ", share: "مشاركة", noResults: "لا توجد نتائج",
    noResultsText: "جرّب كلمة أخرى أو فئة مختلفة.",
    previous: "السابق", next: "التالي",
    missionTitle: "رسالتنا", missionText: "يساعد موقع Kingdom of Legends على استكشاف التاريخ بملخصات واضحة وقصص مفصلة.",
    feedbackTitle: "أرسل ملاحظاتك", feedbackText: "أخبرنا بما يعجبك وما يحتاج إلى تحسين.",
    feedbackName: "الاسم (اختياري)", feedbackNamePlaceholder: "اسمك",
    feedbackMessage: "رسالتك", feedbackPlaceholder: "اكتب ملاحظاتك...",
    feedbackSubmit: "إرسال الملاحظات",
    feedbackNote: "هذه نسخة تجريبية غير متصلة بخادم؛ لن تُرسل الملاحظات إلى مالك الموقع.",
    feedbackSuccess: "تم فحص الرسالة في هذه النسخة التجريبية، لكنها لم تُرسل أو تُحفظ.",
    requiredMessage: "يرجى كتابة رسالة أولًا.",
    footer: "للعقول الفضولية ومحبي التاريخ.",
    close: "إغلاق", quote: "اقتباس", copied: "تم النسخ!",
    copyFailed: "تعذر النسخ. حدّد النص وانسخه يدويًا.",
    shareUnavailable: "المشاركة غير مدعومة في هذا المتصفح. يمكنك نسخ الاقتباس.",
    details: "التفاصيل"
  },
  de: {
    home: "Startseite", kings: "Könige", leaders: "Führungspersönlichkeiten",
    scientists: "Wissenschaftler", places: "Historische Orte",
    quotes: "Zitate", events: "Ereignisse", feedback: "Feedback",
    heroEyebrow: "ENTDECKE DIE GESCHICHTEN, DIE UNSERE WELT PRÄGTEN",
    heroTitle: "Entdecke das <span>Königreich</span> der Geschichte",
    heroText: "Entdecke Könige, Führungspersönlichkeiten, Wissenschaftler, historische Orte und Ereignisse.",
    explore: "Sammlung entdecken", learn: "Unsere Mission",
    collectionTitle: "Sammlungen entdecken", collectionText: "Wähle eine Sammlung.",
    noticeTitle: "Wachsende Sammlung:",
    noticeText: "Die Zahlen sind Ziele. Die aktuellen Einträge sind erste Beispiele; die vollständigen 680 Einträge sind noch nicht fertig.",
    browseTitle: "Sammlung durchsuchen", browseText: "Suche nach Namen, Orten, Daten und Beschreibungen.",
    searchLabel: "Suche", searchPlaceholder: "Geschichte suchen...",
    categoryLabel: "Kategorie", allCategories: "Alle Kategorien",
    sortLabel: "Sortieren", newest: "Neu hinzugefügt", alphabetical: "Alphabetisch",
    resultSingular: "Eintrag", resultPlural: "Einträge", readMore: "Mehr lesen",
    copy: "Kopieren", share: "Teilen", noResults: "Keine Treffer",
    noResultsText: "Versuche einen anderen Suchbegriff oder eine andere Kategorie.",
    previous: "Zurück", next: "Weiter",
    missionTitle: "Unsere Mission", missionText: "Kingdom of Legends macht Geschichte durch klare Zusammenfassungen und ausführliche Geschichten zugänglich.",
    feedbackTitle: "Feedback geben", feedbackText: "Sag uns, was gut funktioniert und was verbessert werden kann.",
    feedbackName: "Name (optional)", feedbackNamePlaceholder: "Dein Name",
    feedbackMessage: "Deine Nachricht", feedbackPlaceholder: "Schreibe dein Feedback...",
    feedbackSubmit: "Feedback senden",
    feedbackNote: "Diese Demo ist nicht mit einem Server verbunden; dein Feedback wird nicht an den Betreiber gesendet.",
    feedbackSuccess: "Die Nachricht wurde in dieser Demo geprüft, aber nicht gesendet oder gespeichert.",
    requiredMessage: "Bitte schreibe zuerst eine Nachricht.",
    footer: "Für neugierige Köpfe und Geschichtsfans.",
    close: "Schließen", quote: "Zitat", copied: "Kopiert!",
    copyFailed: "Kopieren nicht möglich. Bitte markiere und kopiere den Text manuell.",
    shareUnavailable: "Teilen wird in diesem Browser nicht unterstützt. Du kannst das Zitat kopieren.",
    details: "Details"
  },
  it: {
    home: "Home", kings: "Re", leaders: "Leader",
    scientists: "Scienziati", places: "Luoghi storici",
    quotes: "Citazioni", events: "Eventi storici", feedback: "Feedback",
    heroEyebrow: "ESPLORA LE STORIE CHE HANNO CAMBIATO IL MONDO",
    heroTitle: "Scopri il <span>regno</span> della storia",
    heroText: "Esplora re, leader, scienziati, luoghi storici, eventi e citazioni ispiratrici.",
    explore: "Esplora la raccolta", learn: "La nostra missione",
    collectionTitle: "Esplora le raccolte", collectionText: "Scegli una raccolta.",
    noticeTitle: "Raccolta in crescita:",
    noticeText: "I numeri sono obiettivi. Le voci attuali sono esempi iniziali; le 680 voci complete non sono ancora pronte.",
    browseTitle: "Sfoglia la raccolta", browseText: "Cerca nomi, luoghi, date e descrizioni.",
    searchLabel: "Cerca", searchPlaceholder: "Cerca nella storia...",
    categoryLabel: "Categoria", allCategories: "Tutte le categorie",
    sortLabel: "Ordina", newest: "Aggiunti di recente", alphabetical: "Ordine alfabetico",
    resultSingular: "voce", resultPlural: "voci", readMore: "Leggi di più",
    copy: "Copia", share: "Condividi", noResults: "Nessun risultato",
    noResultsText: "Prova un'altra parola o categoria.",
    previous: "Precedente", next: "Successivo",
    missionTitle: "La nostra missione", missionText: "Kingdom of Legends rende la storia più accessibile con riassunti chiari e racconti dettagliati.",
    feedbackTitle: "Lascia un feedback", feedbackText: "Dicci cosa funziona e cosa potrebbe migliorare.",
    feedbackName: "Nome (facoltativo)", feedbackNamePlaceholder: "Il tuo nome",
    feedbackMessage: "Il tuo messaggio", feedbackPlaceholder: "Scrivi il tuo feedback...",
    feedbackSubmit: "Invia feedback",
    feedbackNote: "Questa demo non è collegata a un server; il messaggio non viene inviato al proprietario.",
    feedbackSuccess: "Il messaggio è stato controllato in questa demo, ma non è stato inviato né salvato.",
    requiredMessage: "Scrivi prima un messaggio.",
    footer: "Per menti curiose e amanti della storia.",
    close: "Chiudi", quote: "Citazione", copied: "Copiato!",
    copyFailed: "Copia non disponibile. Seleziona e copia il testo manualmente.",
    shareUnavailable: "La condivisione non è supportata in questo browser. Puoi copiare la citazione.",
    details: "Dettagli"
  },
  pt: {
    home: "Início", kings: "Reis", leaders: "Líderes",
    scientists: "Cientistas", places: "Lugares históricos",
    quotes: "Citações", events: "Eventos históricos", feedback: "Opiniões",
    heroEyebrow: "EXPLORE AS HISTÓRIAS QUE MUDARAM O MUNDO",
    heroTitle: "Descubra o <span>reino</span> da história",
    heroText: "Explore reis, líderes, cientistas, lugares históricos, eventos e frases inspiradoras.",
    explore: "Explorar coleção", learn: "Nossa missão",
    collectionTitle: "Explorar coleções", collectionText: "Escolha uma coleção.",
    noticeTitle: "Coleção em crescimento:",
    noticeText: "Os números são metas. As entradas atuais são exemplos iniciais; as 680 entradas completas ainda não estão prontas.",
    browseTitle: "Navegar pela coleção", browseText: "Pesquise nomes, lugares, datas e descrições.",
    searchLabel: "Pesquisar", searchPlaceholder: "Pesquisar história...",
    categoryLabel: "Categoria", allCategories: "Todas as categorias",
    sortLabel: "Ordenar", newest: "Adicionados recentemente", alphabetical: "Ordem alfabética",
    resultSingular: "entrada", resultPlural: "entradas", readMore: "Ler mais",
    copy: "Copiar", share: "Compartilhar", noResults: "Nenhum resultado",
    noResultsText: "Tente outro termo ou categoria.",
    previous: "Anterior", next: "Próximo",
    missionTitle: "Nossa missão", missionText: "Kingdom of Legends facilita explorar a história com resumos claros e relatos detalhados.",
    feedbackTitle: "Envie sua opinião", feedbackText: "Conte o que funciona bem e o que pode melhorar.",
    feedbackName: "Nome (opcional)", feedbackNamePlaceholder: "Seu nome",
    feedbackMessage: "Sua mensagem", feedbackPlaceholder: "Escreva sua opinião...",
    feedbackSubmit: "Enviar opinião",
    feedbackNote: "Esta demonstração não está conectada a um servidor; sua mensagem não será enviada ao proprietário.",
    feedbackSuccess: "A mensagem foi verificada nesta demonstração, mas não foi enviada nem salva.",
    requiredMessage: "Escreva uma mensagem primeiro.",
    footer: "Para mentes curiosas e amantes da história.",
    close: "Fechar", quote: "Citação", copied: "Copiado!",
    copyFailed: "Não foi possível copiar. Selecione e copie o texto manualmente.",
    shareUnavailable: "O compartilhamento não é compatível com este navegador. Você pode copiar a citação.",
    details: "Detalhes"
  }
};

const CATEGORY_LABEL_KEYS = {
  kings: "kings",
  leaders: "leaders",
  scientists: "scientists",
  places: "places",
  quotes: "quotes",
  events: "events"
};

const state = {
  page: 1,
  query: "",
  category: "all",
  sort: "newest",
  language: "en"
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function t(key) {
  const language = UI_TEXT[state.language] || UI_TEXT.en;
  return language[key] ?? UI_TEXT.en[key] ?? key;
}

function categoryLabel(category) {
  const key = CATEGORY_LABEL_KEYS[category];
  return key ? t(key) : (CATEGORY_INFO[category]?.label || category);
}

function getQuote(item) {
  const quoteDetail = item.details?.find(([heading]) => heading.toLowerCase() === "quote");
  return quoteDetail ? quoteDetail[1] : item.summary;
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function renderCollections() {
  const grid = $("#collectionGrid");
  if (!grid) return;

  grid.innerHTML = Object.entries(CATEGORY_INFO).map(([key, category]) => {
    const currentCount = DATA.filter(item => item.category === key).length;
    return `
      <a class="collection-card" href="#${key}" data-category-link="${key}">
        <div class="collection-icon" aria-hidden="true">${category.icon}</div>
        <h3>${escapeHTML(categoryLabel(key))}</h3>
        <p>${escapeHTML(category.description)}</p>
        <span class="collection-count">${currentCount} available · goal ${category.target}</span>
      </a>`;
  }).join("");
}

function getFilteredData() {
  let items = DATA.filter(item => {
    const matchesCategory = state.category === "all" || item.category === state.category;
    const searchable = [
      item.title,
      item.meta,
      item.summary,
      item.region,
      item.quoteType,
      ...(item.details || []).flat()
    ].join(" ").toLocaleLowerCase();

    const matchesQuery = searchable.includes(state.query.toLocaleLowerCase());
    return matchesCategory && matchesQuery;
  });

  if (state.sort === "alphabetical") {
    items.sort((a, b) => a.title.localeCompare(b.title));
  }

  return items;
}

function renderCards() {
  const grid = $("#entryGrid");
  const count = $("#resultCount");
  const pagination = $("#pagination");
  if (!grid || !count || !pagination) return;

  const filtered = getFilteredData();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  if (state.page > totalPages) state.page = totalPages;
  if (state.page < 1) state.page = 1;

  const start = (state.page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  count.textContent = `${filtered.length} ${filtered.length === 1 ? t("resultSingular") : t("resultPlural")}`;

  if (visible.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>${escapeHTML(t("noResults"))}</h3>
        <p>${escapeHTML(t("noResultsText"))}</p>
      </div>`;
  } else {
    grid.innerHTML = visible.map(item => {
      const quote = item.category === "quotes";
      const summary = quote ? getQuote(item) : item.summary;
      return `
        <article class="entry-card">
          <div class="entry-top">
            <div class="entry-icon" aria-hidden="true">${item.icon || "📜"}</div>
            <span class="entry-category">${escapeHTML(categoryLabel(item.category))}</span>
          </div>
          <div class="entry-body">
            <h3>${escapeHTML(item.title)}</h3>
            <div class="entry-meta">${escapeHTML(item.meta || "")}</div>
            <p>${escapeHTML(summary)}</p>
            <div class="entry-actions">
              <button class="btn btn-primary" type="button" data-read="${escapeHTML(item.id)}">${escapeHTML(t("readMore"))}</button>
              ${quote ? `<button class="btn btn-secondary" type="button" data-copy="${escapeHTML(item.id)}">${escapeHTML(t("copy"))}</button>
              <button class="btn btn-secondary" type="button" data-share="${escapeHTML(item.id)}">${escapeHTML(t("share"))}</button>` : ""}
            </div>
          </div>
        </article>`;
    }).join("");
  }

  renderPagination(filtered.length, totalPages);
}

function renderPagination(total, totalPages) {
  const pagination = $("#pagination");
  if (!pagination) return;

  if (total <= PAGE_SIZE) {
    pagination.innerHTML = "";
    return;
  }

  let html = `
    <button type="button" data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""}>
      ${escapeHTML(t("previous"))}
    </button>`;

  for (let page = 1; page <= totalPages; page++) {
    html += `
      <button type="button" data-page="${page}" class="${page === state.page ? "active" : ""}" ${page === state.page ? 'aria-current="page"' : ""}>
        ${page}
      </button>`;
  }

  html += `
    <button type="button" data-page="${state.page + 1}" ${state.page === totalPages ? "disabled" : ""}>
      ${escapeHTML(t("next"))}
    </button>`;

  pagination.innerHTML = html;
}

function openDetails(id) {
  const item = DATA.find(entry => entry.id === id);
  if (!item) return;

  const dialog = $("#detailDialog");
  const content = $("#detailContent");
  if (!dialog || !content) return;

  const heading = dialog.querySelector("#detailTitle");
  if (heading) heading.textContent = item.title;

  content.innerHTML = `
    <div class="entry-meta">${escapeHTML(item.meta || "")}</div>
    <p>${escapeHTML(item.summary || "")}</p>
    ${(item.details || []).map(([headingText, paragraph]) => `
      <h3>${escapeHTML(headingText)}</h3>
      <p>${escapeHTML(paragraph)}</p>
    `).join("")}
    <p class="notice"><strong>${escapeHTML(t("details"))}:</strong> This entry is part of the starter dataset. Additional entries and source references will be added as the collection grows.</p>
  `;

  if (typeof dialog.showModal === "function") {
    if (!dialog.open) dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

async function copyQuote(id) {
  const item = DATA.find(entry => entry.id === id);
  if (!item) return;

  const text = `"${getQuote(item)}" — ${item.title}`;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      showToast(t("copied"));
    } else {
      const temporary = document.createElement("textarea");
      temporary.value = text;
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.appendChild(temporary);
      temporary.select();
      const copied = document.execCommand("copy");
      temporary.remove();
      showToast(copied ? t("copied") : t("copyFailed"));
    }
  } catch {
    showToast(t("copyFailed"));
  }
}

async function shareQuote(id) {
  const item = DATA.find(entry => entry.id === id);
  if (!item) return;

  const text = `"${getQuote(item)}" — ${item.title}`;

  if (navigator.share) {
    try {
      await navigator.share({ title: item.title, text });
    } catch (error) {
      if (error?.name !== "AbortError") showToast(t("shareUnavailable"));
    }
  } else {
    await copyQuote(id);
    showToast(t("shareUnavailable"));
  }
}

function applyLanguage(language) {
  state.language = UI_TEXT[language] ? language : "en";
  const isArabic = state.language === "ar";

  document.documentElement.lang = state.language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.dir = isArabic ? "rtl" : "ltr";

  const select = $("#languageSelect");
  if (select && select.value !== state.language) select.value = state.language;

  const dictionary = UI_TEXT[state.language];

  $$("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) element.innerHTML = dictionary[key];
  });

  $$("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key] !== undefined) element.setAttribute("placeholder", dictionary[key]);
  });

  $$("[data-i18n-label]").forEach(element => {
    const key = element.dataset.i18nLabel;
    if (dictionary[key] !== undefined) element.setAttribute("aria-label", dictionary[key]);
  });

  const categorySelect = $("#categoryFilter");
  if (categorySelect) {
    const previous = state.category;
    categorySelect.innerHTML = `
      <option value="all">${escapeHTML(t("allCategories"))}</option>
      ${Object.keys(CATEGORY_INFO).map(key => `
        <option value="${key}">${escapeHTML(categoryLabel(key))}</option>
      `).join("")}`;
    categorySelect.value = previous;
  }

  const sortSelect = $("#sortFilter");
  if (sortSelect) {
    const previous = state.sort;
    sortSelect.innerHTML = `
      <option value="newest">${escapeHTML(t("newest"))}</option>
      <option value="alphabetical">${escapeHTML(t("alphabetical"))}</option>`;
    sortSelect.value = previous;
  }

  renderCollections();
  renderCards();

  const dialog = $("#detailDialog");
  if (dialog?.open) {
    const currentTitle = $("#detailTitle")?.textContent;
    const currentItem = DATA.find(item => item.title === currentTitle);
    if (currentItem) openDetails(currentItem.id);
  }

  try {
    localStorage.setItem("kol-language", state.language);
  } catch {
    // Language still works if storage is unavailable.
  }
}

function init() {
  const search = $("#searchInput");
  const category = $("#categoryFilter");
  const sort = $("#sortFilter");
  const language = $("#languageSelect");
  const grid = $("#entryGrid");
  const pagination = $("#pagination");
  const feedbackForm = $("#feedbackForm");
  const dialog = $("#detailDialog");
  const closeButton = $("#dialogClose");

  if (search) {
    search.addEventListener("input", () => {
      state.query = search.value.trim();
      state.page = 1;
      renderCards();
    });
  }

  if (category) {
    category.addEventListener("change", () => {
      state.category = category.value;
      state.page = 1;
      renderCards();
    });
  }

  if (sort) {
    sort.addEventListener("change", () => {
      state.sort = sort.value;
      state.page = 1;
      renderCards();
    });
  }

  if (language) {
    language.addEventListener("change", () => applyLanguage(language.value));
  }

  if (grid) {
    grid.addEventListener("click", event => {
      const readButton = event.target.closest("[data-read]");
      const copyButton = event.target.closest("[data-copy]");
      const shareButton = event.target.closest("[data-share]");

      if (readButton) openDetails(readButton.dataset.read);
      if (copyButton) copyQuote(copyButton.dataset.copy);
      if (shareButton) shareQuote(shareButton.dataset.share);
    });
  }

  if (pagination) {
    pagination.addEventListener("click", event => {
      const button = event.target.closest("[data-page]");
      if (!button || button.disabled) return;

      state.page = Number(button.dataset.page);
      renderCards();

      const browse = $("#browse");
      if (browse) browse.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const collectionGrid = $("#collectionGrid");
  if (collectionGrid) {
    collectionGrid.addEventListener("click", event => {
      const link = event.target.closest("[data-category-link]");
      if (!link) return;

      state.category = link.dataset.categoryLink;
      state.page = 1;

      const categorySelect = $("#categoryFilter");
      if (categorySelect) categorySelect.value = state.category;

      renderCards();

      const browse = $("#browse");
      if (browse) {
        event.preventDefault();
        history.replaceState(null, "", `#${link.dataset.categoryLink}`);
        browse.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  if (closeButton && dialog) {
    closeButton.addEventListener("click", () => {
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    });

    dialog.addEventListener("click", event => {
      if (event.target === dialog) {
        if (typeof dialog.close === "function") dialog.close();
        else dialog.removeAttribute("open");
      }
    });
  }

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", event => {
      event.preventDefault();

      const messageField = $("#feedbackMessage");
      const status = $("#feedbackStatus");

      if (!messageField || !status) return;

      if (!messageField.value.trim()) {
        status.textContent = t("requiredMessage");
        status.style.color = "var(--danger)";
        messageField.focus();
        return;
      }

      status.textContent = t("feedbackSuccess");
      status.style.color = "var(--success)";
      feedbackForm.reset();
    });
  }

  $$(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.classList.add("navigation-highlight");
        window.setTimeout(() => target.classList.remove("navigation-highlight"), 1200);
      }
    });
  });

  $("#year") && ($("#year").textContent = new Date().getFullYear());

  try {
    const savedLanguage = localStorage.getItem("kol-language");
    if (savedLanguage && UI_TEXT[savedLanguage]) {
      state.language = savedLanguage;
    }
  } catch {
    // Continue in English if storage is unavailable.
  }

  if ($("#languageSelect")) $("#languageSelect").value = state.language;

  renderCollections();
  applyLanguage(state.language);
  renderCards();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
