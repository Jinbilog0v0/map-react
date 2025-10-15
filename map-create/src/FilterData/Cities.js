// Cities array
const cities = [
  {
    id: 1,
    detail: "Philippine City Fr :)",
    image: "/Images/Manila_City.jpg",
    category: "Luzon",
    name: "Manila City",
    detail:
      "Manila is the national capital and a dynamic cultural and economic hub located along the eastern shore of Manila Bay. The city blends centuries of history with contemporary urban life — from colonial-era landmarks and museums to thriving commercial districts and culinary destinations. As the heart of the National Capital Region, Manila is an essential starting point for exploring the country’s heritage, festivals, and waterfront attractions.",
    attractions: [
      {
        id: 1,
        name: "Rizal Park",
        image: "/Images/rizalpark.jpg",
        description:
          "Rizal Park (Luneta) is an expansive urban green space honoring national hero José Rizal and serving as a focal point for national events and leisurely city strolls. The park’s landscaped sections, monuments, and open lawns make it an ideal spot for both reflection and family outings.",
        visitingHours: "Open 24/7",
      },
      {
        id: 2,
        name: "Manila Ocean Park",
        image: "/Images/manila-ocean.jpg",
        description:
          "Manila Ocean Park is a modern oceanarium offering close-up marine exhibits, interactive displays, and family-friendly performances. Visitors can explore themed zones, observe marine life in large viewing tanks, and enjoy educational programs suited for all ages.",
        visitingHours: "10:00 AM - 8:00 PM",
      },
      {
        id: 3,
        name: "Intramuros",
        image: "/Images/intramuros.jpg",
        description:
          "Intramuros, the historic walled city, preserves Spanish colonial architecture, forts, and churches that trace Manila’s past. Walking its cobblestone streets reveals museums, restored plazas, and cultural sites that bring Philippine history to life.",
        visitingHours: "Open daily, specific sites have varying hours",
      },
    ],
  },

  {
    id: 2,
    detail: "Philippine City Fr :)",
    image: "/Images/quezon.jpg",
    category: "Luzon",
    name: "Quezon City",
    detail:
      "Quezon City is a major metropolitan center northeast of Manila known for its cultural institutions, government landmarks, and green spaces. Once the country’s capital, it remains an important center for arts, education, media, and commerce. The city’s mix of museums, parks, and dining neighborhoods makes it a versatile destination for both residents and visitors.",
    attractions: [
      {
        id: 1,
        name: "Art in Island",
        image: "/Images/artQuezon.jpg",
        description:
          "Art in Island is an interactive 3D art museum where visitors can pose with immersive, trompe-l’oeil murals that play with perspective. It’s designed for family fun and creative photography, with rotating themed exhibits and playful installations.",
      },
      {
        id: 2,
        name: "La Mesa Ecopark",
        image: "/Images/lamesa.jpg",
        description:
          "La Mesa Ecopark is a protected urban forest and watershed park that provides hiking trails, picnic areas, and scenic viewpoints. The park’s tranquil environment highlights the city’s commitment to green spaces and outdoor recreation.",
      },
      {
        id: 3,
        name: "Quezon Memorial Circle",
        image: "/Images/memorial.jpg",
        description:
          "Quezon Memorial Circle is a landmark park centered on a monumental mausoleum honoring President Manuel L. Quezon. The surrounding grounds feature museums, gardens, and weekend markets that showcase local food and crafts.",
      },
    ],
  },

  {
    id: 3,
    detail: "Philippine City Fr :)",
    image: "/Images/baguio_city.jpg",
    category: "Luzon",
    name: "Baguio City",
    detail:
      "Baguio is a cool mountain city set among pine-clad hills in northern Luzon, celebrated as the country’s premier summer retreat. Known for its breezy climate, scenic outlooks, and vibrant arts scene, Baguio offers gardens, cultural villages, and lively markets that emphasize local crafts and cuisine. The city’s parks and scenic roads invite relaxed exploration and cultural discovery.",
    attractions: [
      {
        id: 1,
        name: "Burnham Park",
        image: "/Images/burnham.jpg",
        description:
          "Burnham Park is a central urban park laid out around a man-made lake with boating, landscaped gardens, and open spaces for relaxation. It is the social heart of Baguio and a great place for families, joggers, and street food vendors.",
      },
      {
        id: 2,
        name: "Mines View Park",
        image: "/Images/mines view.jpg",
        description:
          "Mines View Park offers panoramic views of mountain ranges and the historic mining townscapes below. Visitors come for scenic overlooks, souvenir stalls, and traditional costumes and photo opportunities.",
      },
      {
        id: 3,
        name: "Tam-awan Village",
        image: "/Images/tam-awan.jpg",
        description:
          "Tam-awan Village is an open-air cultural village showcasing Cordillera art, traditional huts, and indigenous craft demonstrations. It provides insights into local heritage and contemporary artist workshops in a tranquil hillside setting.",
      },
    ],
  },

  {
    id: 4,
    detail: "Philippine City Fr :)",
    image:
      "/Images/Cebu-City-Oldest-City-in-the-Philippines-Aerial-View-Copyright-to-Project-LUPAD-1.jpg",
    category: "Visayas",
    name: "Cebu City",
    detail:
      "Cebu City is a historic and commercial hub in the central Visayas, known for its vibrant port, cultural landmarks, and gateway access to surrounding islands. The city blends colonial-era heritage, bustling markets, and modern urban amenities, making it a focal point for trade, tourism, and regional cuisine. Cebu’s accessibility by air and sea makes it an excellent base for cultural tours and island excursions.",
    attractions: [
      {
        id: 1,
        name: "Magellan's cross",
        image: "/Images/magellan'scross.jpg",
        description:
          "Magellan’s Cross is an important historical marker planted by Ferdinand Magellan’s expedition in 1521 and housed in a small chapel in downtown Cebu. It symbolizes the introduction of Christianity and is a must-visit for those interested in the island’s earliest colonial history.",
      },
      {
        id: 2,
        name: "Casa Gorordo Museum",
        image: "/Images/casa.jpg",
        description:
          "Casa Gorordo Museum is a preserved colonial-era house museum that offers a glimpse into 19th-century Filipino-Spanish domestic life. Exhibits include period furnishings, photographs, and cultural artifacts that illuminate Cebu’s social history.",
      },
      {
        id: 3,
        name: "Fort San Pedro",
        image: "/Images/fortsanpedro.jpg",
        description:
          "Fort San Pedro is a preserved Spanish fortification that now serves as a public park and museum, showcasing artifacts and the colonial military architecture of early Cebu. Its ramparts and grounds are ideal for a relaxed historical stroll.",
      },
    ],
  },

  {
    id: 5,
    detail: "Philippine City Fr :)",
    image: "/Images/tacloban_city.jpg",
    category: "Visayas",
    name: "Tacloban City",
    detail:
      "Tacloban is the largest city in the Eastern Visayas and a vital regional port and distribution center for Leyte and Samar. The city combines important wartime history, active fishing and agricultural markets, and growing civic institutions, making it a functional and culturally significant urban center. Its coastal setting and memorial parks provide meaningful historical context and local seaside character.",
    attractions: [
      {
        id: 1,
        name: "Sto. Nino Shrine and Heritage Museum",
        image: "/Images/st. nino.jpg",
        description:
          "The Sto. Niño Shrine and Heritage Museum houses religious art, period furnishings, and a notable collection of family heirlooms that reflect Filipino Catholic heritage and local history. The museum is adjacent to a revered chapel and provides cultural perspective on devotion and tradition.",
      },
      {
        id: 2,
        name: "MacArthur Landing Memorial Park",
        image: "/Images/red beach.jpg",
        description:
          "MacArthur Landing Memorial Park commemorates General Douglas MacArthur’s historic return to Leyte in 1944 and features statues, landscaped grounds, and interpretive markers. The site is both a solemn tribute and a civic park with views of Leyte Gulf.",
      },
      {
        id: 3,
        name: "Leyte Provincial Capitol",
        image: "/Images/leyte.jpg",
        description:
          "The Leyte Provincial Capitol is an architectural and administrative landmark in Tacloban that anchors civic life and events. The surrounding grounds and government buildings are historically significant and frequently host public gatherings.",
      },
    ],
  },

  {
    id: 6,
    detail: "Philippine City Fr :)",
    image: "/Images/iloili_city.jpg",
    category: "Visayas",
    name: "Iloilo City",
    detail:
      "Iloilo City is a refined coastal city on Panay Island recognized for its well-preserved heritage districts, grand churches, and a thriving culinary scene. Historically a center for sugar trade, Iloilo blends Spanish colonial architecture with contemporary urban renewal and lively festivals. Its plazas, old mansions, and local craft traditions make it an appealing destination for heritage tourism.",
    attractions: [
      {
        id: 1,
        name: "Molo Mansion",
        image: "/Images/Molo mansion.jpg",
        description:
          "Molo Mansion is a restored heritage home that showcases elegant architecture, historically furnished rooms, and cultural exhibitions. The mansion is a highlight in the Molo district’s walkable heritage trail.",
      },
      {
        id: 2,
        name: "Jaro Cathedral",
        image: "/Images/Jaro.jpg",
        description:
          "Jaro Cathedral is an important religious landmark featuring notable architecture and a prominent bell tower. The cathedral’s sanctuary plays a central role in local festivals and pilgrimage traditions.",
      },
      {
        id: 3,
        name: "Calle Real",
        image: "/Images/calle.jpg",
        description:
          "Calle Real is Iloilo’s historic commercial street lined with heritage buildings, boutique shops, and cafés. The avenue offers a pleasant stroll through the city’s colonial-era urban fabric and modern retail life.",
      },
    ],
  },

  {
    id: 7,
    detail: "Philippine City Fr :)",
    image: "/Images/davaocity.jpg",
    category: "Mindanao",
    name: "Davao City",
    detail:
      "Davao City is a major regional center on Mindanao known for its diverse economy, robust agricultural exports, and accessible natural attractions. The city offers a combination of coastal access, mountain views, and urban parks, while serving as a hub for trade, festivals, and eco-adventure departures. Davao’s local cuisine, cultural events, and proximity to islands like Samal make it an attractive base for exploration.",
    attractions: [
      {
        id: 1,
        name: "Samal Island",
        image: "/Images/samal.jpg",
        description:
          "Samal Island (Garden City of Samal) offers pristine beaches, resort facilities, and marine recreation close to Davao City. It’s ideal for day trips or overnight stays featuring snorkeling, island hopping, and relaxed beachfront dining.",
      },
      {
        id: 2,
        name: "San Pedro Cathedral",
        image: "/Images/sanpedro.jpg",
        description:
          "San Pedro Cathedral is an important parish church in Davao with historic significance to the local Catholic community. Its architecture and religious celebrations are central to the city’s cultural life.",
      },
      {
        id: 3,
        name: "Mount Apo",
        image: "/Images/t. apo.jpg",
        description:
          "Mount Apo, the Philippines’ highest peak, is a premier destination for hikers and nature lovers, offering rich biodiversity and panoramic views from its summit. Guided treks and protected park areas provide opportunities to experience Mindanao’s montane ecosystems.",
      },
    ],
  },

  {
    id: 8,
    detail: "Philippine City Fr :)",
    image: "/Images/Aerial-of-Butuan-City.jpg",
    category: "Mindanao",
    name: "Butuan City",
    detail:
      "Butuan City sits on the Agusan River and has a long history as an early trading and settlement center in northern Mindanao. Today it functions as a commercial and transit hub for the Agusan River valley while also preserving archaeological and colonial-era sites. The city provides easy access to waterways, forested uplands, and local craft traditions.",
    attractions: [
      {
        id: 1,
        name: "Mount Mayapay",
        image: "/Images/mayapay.jpg",
        description:
          "Mount Mayapay offers scenic trails and panoramic views of the surrounding countryside, rewarding visitors with a peaceful mountain experience close to the city. It is favored by local hikers and nature photographers.",
      },
      {
        id: 2,
        name: "Saint Joseph Cathedral",
        image: "/Images/St. joseph.jpg",
        description:
          "Saint Joseph Cathedral is an imposing religious landmark and community focal point in Butuan, known for its architectural presence and active parish life. The cathedral is central to local festivals and solemn observances.",
      },
      {
        id: 3,
        name: "Bood Eco Park",
        image: "/Images/bood.jpg",
        description:
          "Bood Eco Park is an eco-tourism destination that highlights regional biodiversity, forest trails, and riverine attractions. The park offers guided nature activities and opportunities to learn about local conservation efforts.",
      },
    ],
  },

  {
    id: 9,
    detail: "Philippine City Fr :)",
    image: "/Images/Plaza_Heneral_GenSan_RobSison.jpg",
    category: "Mindanao",
    name: "General Santos City",
    detail:
      "General Santos City is a coastal urban center in southern Mindanao known for its tuna industry and lively markets. The city combines industrial activity with natural attractions nearby, including highland viewpoints and coastal scenery. General Santos serves as a gateway to the surrounding agricultural and fishing communities.",
    attractions: [
      {
        id: 1,
        name: "Sanchez Peak",
        image: "/Images/sanchez.jpg",
        description:
          "Sanchez Peak provides scenic elevated viewpoints over the surrounding highlands and is a favorite spot for sunrise and landscape photography. The area draws hikers seeking moderate trails and panoramic vistas.",
      },
      {
        id: 2,
        name: "Sarangani Highlands",
        image: "/Images/sarangani.jpg",
        description:
          "Sarangani Highlands is a collection of elevated landscapes offering rolling views, nature walks, and cool-climate retreats. The highlands are well-suited for eco-lodges and agri-tourism experiences.",
      },
      {
        id: 3,
        name: "Plaza Heneral Santos",
        image: "/Images/plaza.jpg",
        description:
          "Plaza Heneral Santos is the civic center and communal square that hosts public events, markets, and cultural celebrations. It is a convenient place to observe local life and seasonal festivals.",
      },
    ],
  },

  {
    id: 10,
    detail: "Philippine City Fr :)",
    image: "/Images/zambo.jpg",
    category: "Mindanao",
    name: "Zamboanga City",
    detail:
      "Zamboanga City is a vibrant port city on the southwestern tip of the Zamboanga Peninsula, celebrated for its Spanish-influenced architecture and colorful cultural heritage. The city’s coastal setting, historic forts, and nearby islands make it a popular destination for heritage and beach tourism. Zamboanga’s unique cuisine and festival traditions reflect the area’s multicultural influences.",
    attractions: [
      {
        id: 1,
        name: "Santa Cruz Island",
        image: "/Images/santacruz.jpg",
        description:
          "Santa Cruz Island is famous for its unique pink sand beaches and accessible island activities, offering snorkeling and scenic coastal walks. The island is a highlight for visitors seeking distinctive seaside experiences.",
      },
      {
        id: 2,
        name: "Sadik Grand Mosque",
        image: "/Images/sadik.jpg",
        description:
          "The Sadik Grand Mosque is an important religious and architectural landmark that serves as a center for worship and community events. Its design and prominence reflect Zamboanga’s rich cultural tapestry.",
      },
      {
        id: 3,
        name: "Fort Pilar",
        image: "/Images/fort pillar.jpg",
        description:
          "Fort Pilar is a historic citadel and shrine that overlooks the port and serves as a cultural museum and heritage site. The fort’s grounds and chapel are frequently visited for their historical significance and panoramic views.",
      },
    ],
  },

  {
    id: 11,
    detail: "Philippine City Fr :)",
    image: "/Images/cagayan.jpg",
    category: "Mindanao",
    name: "Cagayan de Oro City",
    detail:
      "Cagayan de Oro is a bustling regional hub in northern Mindanao known for its river-based adventure tourism and growing commercial activity. The city is a gateway to white-water rafting, eco-parks, and highland retreats while also offering urban comforts and hospitality. Its strategic transport links and vibrant culinary scene make it a convenient base for exploring the region.",
    attractions: [
      {
        id: 1,
        name: "Mapwa Nature Park",
        image: "/Images/mapwa.jpg",
        description:
          "Mapawa Nature Park features forest trails, waterfalls, and outdoor activity facilities that are ideal for day trips and family adventures. The park emphasizes nature immersion, canopy walks, and refreshing swimming spots.",
      },
      {
        id: 2,
        name: "Gardens of Malasag Eco-Tourism Village",
        image: "/Images/gardens of malasag.jpg",
        description:
          "Gardens of Malasag is an eco-tourism village that showcases indigenous crafts, landscaped gardens, and cultural performances within a hillside setting. Visitors can learn about local traditions while enjoying panoramic views of Cagayan de Oro.",
      },
      {
        id: 3,
        name: "Dahilayan Adventure Park",
        image: "/Images/dahilayan.jpg",
        description:
          "Dahilayan Adventure Park is a premier adventure destination featuring the country’s longest zipline, canopy tours, and family-friendly attractions set in cool, forested highlands. It is a magnet for thrill-seekers and outdoor enthusiasts.",
      },
    ],
  },
];

export default cities;
