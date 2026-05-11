export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  publishDate: string;
  readingTime: string;
  category: string;
  excerpt: string;
  content: BlogSection[];
  relatedServiceHref?: string;
  relatedServiceLabel?: string;
  relatedPosts?: { slug: string; label: string }[];
  heroImage?: { src: string; alt: string };
  tableOfContents?: boolean;
  faqSchema?: boolean;
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'faq' | 'callout' | 'quote' | 'table';
  text?: string;
  items?: string[];
  faqItems?: { q: string; a: string }[];
  tableHead?: string[];
  tableRows?: string[][];
  author?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'things-to-do-stockholm-summer',
    title: 'Things to Do in Stockholm This Summer: A Local\'s Guide for 2026',
    metaDescription: 'A local\'s honest guide to Stockholm summer 2026. SUP yoga at sunset, archipelago islands, swimming spots, parks, and the things actually worth your time.',
    publishDate: '2026-05-11',
    readingTime: '9 min',
    category: 'Stockholm & Travel',
    excerpt: 'Stockholm in summer is short, bright, and a little bit magic. The sun barely sets, the water turns swimmable, and the whole city moves outside. Here is what I would tell a friend visiting for the first time.',
    relatedServiceHref: '/tjanster/sup-yoga-klasser',
    relatedServiceLabel: 'Book a SUP yoga class',
    tableOfContents: true,
    faqSchema: true,
    heroImage: { src: '/images/sup-yoga-floating-dock.jpg', alt: 'SUP yoga at Sickla Strand in Stockholm at sunset' },
    relatedPosts: [
      { slug: 'outdoor-water-activities-stockholm-summer', label: 'Outdoor & Water Activities in Stockholm' },
      { slug: 'summer-team-day-ideas-stockholm', label: 'Summer Team Day Ideas in Stockholm' },
      { slug: 'hen-party-ideas-stockholm', label: 'Bachelorette Party Ideas in Stockholm' },
    ],
    content: [
      { type: 'paragraph', text: 'I moved to Sweden from Australia and I still find Stockholm summers a little unreal. The light stays until almost 11 pm. The water turns swimmable. The whole city moves outside, slowly, like everyone collectively remembered how to exhale. If you are visiting this summer, this is what I would tell a friend.' },
      { type: 'paragraph', text: 'Nothing here is a checklist. You do not need to tick all twelve. You probably should not. Pick three or four and let the rest be a reason to come back.' },
      { type: 'callout', text: 'Short on time? If you only do one thing in Stockholm this summer, do [SUP yoga and sauna at Sickla Strand](/tjanster/sup-yoga-klasser). It is the only activity on this list you cannot really do anywhere else, and it is the one most visitors message me about afterwards.' },

      { type: 'heading', text: 'SUP yoga and sauna at Sickla Strand' },
      { type: 'paragraph', text: 'Yoga on a paddleboard on a calm Stockholm lake, followed by a sauna right at the water\'s edge. Vinyasa or yin, depending on the week. Boards are wide and stable. No experience needed, in yoga or on a paddleboard. The whole class is taught in English, which matters if you are visiting.' },
      { type: 'paragraph', text: 'This is the most Stockholm-summer thing I can think of. The lake is glassy in the early evening, the sauna is hot, and almost everyone ends up swimming between the two. I run [open drop-in classes](/tjanster/sup-yoga-klasser) all season from late April through September, single class 350 kr including board and sauna. If you are travelling as a group of 3 or more, [private SUP yoga events](/tjanster/sup-yoga) are usually a better fit, from 500 kr per person.' },
      { type: 'paragraph', text: 'Sickla Strand is 10 to 15 minutes from central Stockholm by tunnelbana (Sickla or Hammarby Sjöstad station). Bring a swimsuit and a towel. Everything else is included.' },

      { type: 'heading', text: 'Swim at a local badplats' },
      { type: 'paragraph', text: 'Stockholm has free public swimming spots all through the city, and most tourists never use them. Långholmen is the classic, a small rocky island connected by bridge with grass, cliffs, and clean water. Smedsuddsbadet on Kungsholmen has a proper sandy beach and is good for families. Fredhäll is where locals go to drink wine on the cliffs at golden hour, less of a swimming destination, more of a sunset one.' },
      { type: 'paragraph', text: 'All free. All reachable by tunnelbana or a 20 minute walk from the centre. The water is cleanest from late June through August.' },

      { type: 'heading', text: 'Take the ferry to an archipelago island' },
      { type: 'paragraph', text: 'Stockholm sits on 30,000 islands. You only see them properly from a boat. Three options depending on how much time you have.' },
      { type: 'paragraph', text: 'Vaxholm is the easy one, 50 minutes by Waxholmsbolaget ferry from Strömkajen, and your SL travel card might already cover it. Old wooden houses, ice cream, a fortress. Half a day. Grinda is the middle option, 90 minutes out, smaller, with one inn and a lot of walking trails. A full day, ideally with a packed lunch. Sandhamn is the longest trip, 2 to 3 hours, and feels properly remote even though it is technically a day-trip from Stockholm.' },

      { type: 'heading', text: 'Walk Djurgården at golden hour' },
      { type: 'paragraph', text: 'Djurgården is a royal park, an island, and the closest thing Stockholm has to a forest you can walk to from the city centre. Most tourists do it at midday and miss the point. Go after 6 pm, when the tour buses have left. The light comes through the trees sideways and everything looks slightly impossible.' },
      { type: 'paragraph', text: 'Walk from Djurgårdsbron toward Rosendal. Stop at Rosendals Trädgård for sourdough and something baked. Keep walking out to Blockhusudden if you have time. You can be back in town in 20 minutes.' },

      { type: 'heading', text: 'Skansen, or Gröna Lund, or both' },
      { type: 'paragraph', text: 'Both are on Djurgården, both are touristy, and both are worth it for different reasons. Skansen is an open-air museum where you walk through old Swedish houses, watch chickens (I have a soft spot), and learn things you did not plan to learn. Half a day. Gröna Lund is the city\'s amusement park, busiest at night, with summer concerts on a small stage. If you have kids or you like rollercoasters, Gröna. If you want to understand Sweden a bit, Skansen. If you have a full day, both, with lunch in between.' },

      { type: 'heading', text: 'The Vasa Museum' },
      { type: 'paragraph', text: 'A 17th century warship that sank in Stockholm harbour 20 minutes into its maiden voyage, then sat at the bottom for 333 years, then got pulled up almost intact. The museum is built around the ship. It is the most-visited museum in Scandinavia for a reason. Yes, it is on every tourist itinerary. Yes, go anyway. Allow 90 minutes.' },

      { type: 'heading', text: 'Cycle Söder Mälarstrand to Långholmen to Reimersholme' },
      { type: 'paragraph', text: 'A free, do-it-yourself bike loop along the south side of the water. Rent a bike for the day (Söder Cykel or the city bike share), start at Slussen, ride west along the waterfront, cross to Långholmen for a swim, keep going to Reimersholme for a coffee, loop back. About 2 hours including stops. This is what locals actually do on a Saturday afternoon in July.' },

      { type: 'heading', text: 'Mariatorget for fika, Mosebacke for the view' },
      { type: 'paragraph', text: 'A small Södermalm pocket worth half a day. Mariatorget is a leafy square with cafés and the kind of slow weekend energy people actually live for. Have fika at Greasy Spoon or Drop Coffee. Then walk 10 minutes uphill to Mosebacke Torg and step out onto the terrace at Södra Teatern. The view across the rooftops to Gamla Stan is the postcard one, and it is free.' },

      { type: 'heading', text: 'Hike Nackareservatet' },
      { type: 'paragraph', text: 'Stockholm\'s wild side, 15 minutes from the centre by bus. Pine forest, blueberry bushes, small lakes you can swim in, almost no other people. There are marked trails of 3 to 10 km. Start at Hellasgården, which also has a sauna and a swimming dock if you want to combine. I sometimes lead a trail run here as an add-on to [private SUP yoga days](/tjanster/sup-yoga), if that combination interests you.' },

      { type: 'heading', text: 'A Sunday at Hornstulls Marknad' },
      { type: 'paragraph', text: 'Sundays from late spring through summer, the waterfront at Hornstull turns into a flea market and street food strip. Vintage clothes, vinyl, secondhand books, ten different food trucks. Get a bowl of something, sit on the wall facing the water, watch the boats. The Södermalm version of a slow afternoon. Free entry.' },

      { type: 'heading', text: 'Catch a 2026 summer event' },
      { type: 'paragraph', text: 'A few dates worth planning around if your trip overlaps.' },
      { type: 'list', items: [
        '**Midsommar weekend, 19 to 20 June 2026.** The most Swedish thing you can witness. Most locals leave the city for the countryside, but Skansen runs a proper public midsommar celebration with flower crowns, the frog dance, and a maypole.',
        '**Rosendal Garden Party, 12 to 14 June 2026.** Outdoor concerts on Djurgården in a garden setting, world-class lineup, smaller and gentler than a big festival.',
        '**Stockholm Pride, 27 July to 1 August 2026.** The biggest Pride in Scandinavia. The parade on the Saturday is the centrepiece. The city is loud, joyful, and rainbow-painted for the whole week.',
        '**Stockholm Culture Festival, mid-August.** Five days of free music, dance, theatre and food across the city centre. 600 events. Pace yourself.',
        '**Baltic Sea Festival, 21 to 29 August 2026.** Classical music and conversations about the Baltic, at Berwaldhallen. Quieter, beautiful, ends the summer.',
      ]},

      { type: 'heading', text: 'A slow morning at a floating sauna' },
      { type: 'paragraph', text: 'Stockholm has a small handful of floating saunas you can book by the hour. Hammarby Bastuförening on Hammarbykanalen is the most loved one. Bring a swimsuit and a towel, book a slot, alternate between the heat and a swim in the canal. If you have already done SUP yoga and sauna with me at Sickla, this is the city-centre version on a smaller scale.' },

      { type: 'heading', text: 'If you only have one day' },
      { type: 'paragraph', text: 'Honestly: do SUP yoga at sunset, swim afterwards, then have dinner outside on Södermalm. That is the entire summer in three hours, and you can [book it here](/tjanster/sup-yoga-klasser) or email me at hello.yogawithcamilla@gmail.com for [a private group experience](/tjanster/sup-yoga).' },

      { type: 'faq', faqItems: [
        { q: 'When is the best time to visit Stockholm in summer?', a: 'Mid-June through mid-August. Late June and July have the longest days (sun until 10 or 11 pm) and the warmest water. August is slightly quieter and locals are back from holiday.' },
        { q: 'Do I need to speak Swedish to do these activities?', a: 'No. Almost everyone in Stockholm speaks fluent English. SUP yoga with me is taught in English, signage at museums and ferries is bilingual, and you will be completely fine.' },
        { q: 'Is SUP yoga safe for total beginners?', a: 'Yes. The boards are wider and more stable than regular paddleboards. You do not need yoga experience or paddleboard experience. Most people in any given class are first-timers. You just need to be able to swim.' },
        { q: 'How do I get around Stockholm without a car?', a: 'SL is the city transport system. Buy a 24-hour or 72-hour travel card and it covers tunnelbana (metro), buses, trams, and some commuter ferries (including Vaxholm). The metro covers everything in this guide except Nackareservatet, which is a short bus ride from Slussen.' },
        { q: 'What should I wear for outdoor activities?', a: 'Layers. Even in July, Stockholm can drop 10 degrees between midday and evening. Bring a swimsuit, a light waterproof, and shoes you can walk a lot in. For SUP yoga, just a swimsuit and a towel, everything else is provided.' },
        { q: 'Is Stockholm expensive in summer?', a: 'Yes, but most of this guide is free or low-cost. Swimming, walking, parks, the archipelago ferry to Vaxholm (if your travel card covers it), and Hornstulls Marknad are all free. The paid activities like SUP yoga (350 kr drop-in) and museums (around 200 kr) sit in the middle.' },
      ]},
    ]
  },
  {
    slug: 'outdoor-water-activities-stockholm-summer',
    title: 'Outdoor & Water Activities in Stockholm: Summer 2026 Guide',
    metaDescription: 'The best outdoor and water activities in Stockholm for summer 2026. SUP yoga, kayaking, wild swimming, trail running, sauna culture, and how to actually book them.',
    publishDate: '2026-05-11',
    readingTime: '7 min',
    category: 'Stockholm & Travel',
    excerpt: 'Stockholm is built for outdoor summer. Water on every side, daylight until 11 pm, forest 15 minutes from the centre. Here are the activities I send visitors to first.',
    relatedServiceHref: '/tjanster/sup-yoga-klasser',
    relatedServiceLabel: 'Book a SUP yoga class',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'things-to-do-stockholm-summer', label: 'Things to Do in Stockholm This Summer' },
      { slug: 'summer-team-day-ideas-stockholm', label: 'Summer Team Day Ideas in Stockholm' },
      { slug: 'hen-party-ideas-stockholm', label: 'Bachelorette Party Ideas in Stockholm' },
    ],
    content: [
      { type: 'paragraph', text: 'Stockholm is one of the easiest cities in the world to enjoy outdoors in summer. Water on every side. Forest you can reach by metro. Daylight until almost 11 pm in June and July. The locals are out on lakes, in saunas, and barefoot in parks from late May through September, and visitors are very welcome to join.' },
      { type: 'paragraph', text: 'These are the outdoor and water activities I send visitors to first.' },

      { type: 'heading', text: 'SUP yoga and sauna at Sickla Strand' },
      { type: 'paragraph', text: 'Yoga on a paddleboard on a calm Stockholm lake, followed by a sauna at the water\'s edge. It is the most "Stockholm summer" experience I can think of, and the activity I built my whole season around.' },
      { type: 'paragraph', text: 'A class starts on shore with a short briefing, then we paddle out to an anchor point and run a 45 to 50 minute flow on the boards. Vinyasa one week, yin the next, depending on weather and energy. Boards are wide and stable and very forgiving. You do not need yoga experience, you do not need paddleboard experience, you just need to be able to swim. The class is taught in English.' },
      { type: 'paragraph', text: 'Afterwards: sauna by the water. Most people swim between the heat and the cool-down. This is the part visitors do not expect and end up loving the most.' },
      { type: 'subheading', text: 'How to book' },
      { type: 'paragraph', text: 'Two ways:' },
      { type: 'list', items: [
        '**Drop-in classes:** [Open SUP yoga classes](/tjanster/sup-yoga-klasser) run weekly through the season (late April through September). 350 kr per class including board and sauna. 1000 kr for a 10-class pass. Booking goes through Smashing Balance.',
        '**Private events:** For groups of 3 or more, [private SUP yoga](/tjanster/sup-yoga) is usually a better fit. From 500 kr per person, sauna included, optional add-ons like trail running and food. Email hello.yogawithcamilla@gmail.com with your dates and group size for a quote.',
      ]},
      { type: 'paragraph', text: 'Sickla Strand is in Nacka, 10 to 15 minutes from central Stockholm by tunnelbana (Sickla or Hammarby Sjöstad). Bring a swimsuit and a towel.' },

      { type: 'heading', text: 'Wild swimming at the city badplatser' },
      { type: 'paragraph', text: 'Stockholm has free public swimming spots within walking distance of almost every neighbourhood. The water is properly swimmable from late June through August. A few worth seeking out.' },
      { type: 'list', items: [
        '**Långholmen.** A small island west of Södermalm with rocky swim spots, grass for sunbathing, and a beach on the western side. The classic.',
        '**Smedsuddsbadet, Kungsholmen.** Proper sandy beach in the city, family-friendly, kiosk nearby.',
        '**Fredhäll.** Cliffs on the north side of Kungsholmen, less of a swimming spot, more of a sunset one. Locals bring wine.',
        '**Hellasgården, Nacka.** A lake, a sauna, and a swimming dock in the forest, 20 minutes from town. Pay a small entry fee, stay all day.',
        '**Sätrabadet.** A 30 minute trip south, but a proper beach with shallow water, good for families travelling with small kids.',
      ]},
      { type: 'paragraph', text: 'All free except Hellasgården. None require booking.' },

      { type: 'heading', text: 'Kayaking the city centre' },
      { type: 'paragraph', text: 'Paddling a kayak through central Stockholm is one of the more surreal ways to see the city. You pass under Slussen, alongside Gamla Stan, out toward Djurgården. Some routes take you into the inner archipelago in a few hours.' },
      { type: 'paragraph', text: 'Långholmen Kajak rents single and double kayaks by the hour or day, from the southern shore of Långholmen. They also run guided tours if you want company and route planning. Kajak & Uteliv at Tantolunden is the other obvious rental spot, slightly more central. Beginners are absolutely welcome, the water inside the city is calm.' },

      { type: 'heading', text: 'Trail running in Nackareservatet' },
      { type: 'paragraph', text: 'Stockholm\'s wild forest, 15 minutes from Slussen by bus. Pine, blueberry, small lakes, and around 50 km of marked trails. You can run 5 km, you can run a half marathon. The terrain is gentle by Swedish standards, with enough rocks and roots to keep it interesting.' },
      { type: 'paragraph', text: 'Start at Hellasgården (bus 401 from Slussen). Loop one of the lake-circling trails. Finish with a sauna and a swim. This is the runner\'s version of a perfect Stockholm day.' },
      { type: 'paragraph', text: 'If you are travelling as a group and want a guided version, I run [private trail runs as an add-on to SUP yoga days](/tjanster/sup-yoga), usually a gentle 5 to 7 km in Nackareservatet followed by the SUP and sauna at Sickla. The two sit in the same forest, 20 minutes apart by car.' },

      { type: 'heading', text: 'Cycling routes' },
      { type: 'paragraph', text: 'Stockholm is flatter than people expect and has good cycle paths along most waterfronts. Two routes worth doing if you have a half day.' },
      { type: 'list', items: [
        '**Djurgården loop.** From Djurgårdsbron, around the perimeter of the island, past Rosendal and Blockhusudden, back through Skansen. About 12 km, mostly traffic-free.',
        '**Söder waterfront.** Slussen along Söder Mälarstrand to Långholmen, across to Reimersholme, back through Hornstull. About 8 km. Swimming stops built in.',
      ]},
      { type: 'paragraph', text: 'Rent a city bike for the day at any rental shop, or use the public bike share if you have time to sort out a temporary account.' },

      { type: 'heading', text: 'Stand-up paddleboarding (just the paddling, no yoga)' },
      { type: 'paragraph', text: 'If yoga is not your thing but the lake is calling, you can rent a regular paddleboard for an hour or a day. Sickla SUP rents from the same dock I use for the yoga classes. Hornsberg has rentals on the north side of Kungsholmen. The inner harbour is calm enough for first-timers.' },
      { type: 'paragraph', text: 'A small note: if you have already paddled and liked it, the yoga version is the natural next step. Most of the people in my [drop-in classes](/tjanster/sup-yoga-klasser) had paddled once or twice before deciding to try the yoga version.' },

      { type: 'heading', text: 'Floating saunas and sauna culture' },
      { type: 'paragraph', text: 'Sauna is not just a Finnish thing, and the Swedes do their own quieter version of it. A few public and floating saunas worth booking.' },
      { type: 'list', items: [
        '**Hammarby Bastuförening.** A floating sauna on Hammarbykanalen, bookable by the hour, with a ladder straight into the water. The most loved one in town.',
        '**Centralbadet.** A historic art nouveau bathhouse in the city centre, full spa experience with saunas, steam, and a pool.',
        '**Hellasgården.** Forest sauna with a swimming dock on a lake.',
        '**Sickla Strand (with me).** Sauna at the water\'s edge, included in every SUP yoga session.',
      ]},
      { type: 'paragraph', text: 'The Swedish way is: heat, cold water, heat again, then sit in silence afterwards. Not performance. Not even particularly social. Just a quiet reset.' },

      { type: 'heading', text: 'If you only do one thing' },
      { type: 'paragraph', text: 'Pick the one with water and sauna in the same hour. SUP yoga at Sickla Strand is the activity I keep landing on when visitors ask. [Book a drop-in class](/tjanster/sup-yoga-klasser) or email hello.yogawithcamilla@gmail.com for a [private group experience](/tjanster/sup-yoga).' },

      { type: 'faq', faqItems: [
        { q: 'Do I need experience for SUP yoga?', a: 'No. No yoga experience, no paddleboard experience. The boards are wide and stable. You just need to be able to swim. Most people in any given class are first-timers.' },
        { q: 'Are these activities taught in English?', a: 'SUP yoga with me is in English. Most rental and guided activities in Stockholm operate in English by default in summer because so many visitors come through. Swedish is rarely needed.' },
        { q: 'What if the weather is bad?', a: 'For SUP yoga: if there is lightning or strong wind I will reschedule or refund. Light rain we still run, with a warm sauna afterwards. For most other outdoor activities, summer rain in Stockholm passes quickly. A light waterproof solves most of it.' },
        { q: 'How cold is the water?', a: 'In July and August, Stockholm lake water sits around 20°C, which is comfortable for swimming. In May and September it is colder (12 to 16°C). The sauna afterwards is what makes the cooler months still enjoyable.' },
        { q: 'What is included in a SUP yoga class?', a: 'Board, paddle, life jacket if you want one, dry bag for your phone, sauna access, and the instruction itself. You only need to bring a swimsuit and a towel.' },
      ]},
    ]
  },
  {
    slug: 'yoga-mohippa-dalarna',
    title: 'Yoga möhippa i Dalarna: hela guiden från planering till eftersnack',
    metaDescription: 'Yoga möhippa i Dalarna: privat utomhusklass i skogen, stugupplägg, vad som ingår, priser från 3 000 kr, tips för att kombinera med andra aktiviteter.',
    publishDate: '2026-03-01',
    readingTime: '9 min',
    category: 'Events & Möhippa',
    excerpt: 'Det mest inkluderande möhippa-formatet i Dalarna. En privat yogaklass på altanen i skogen, för grupper där mamman inte dricker, kompisen inte springer, och kollegan har ryggont. Här är hela guiden.',
    relatedServiceHref: '/tjanster/privata-event',
    relatedServiceLabel: 'Boka yoga möhippa',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'mohippa-dalarna-aktiviteter', label: 'Möhippa i Dalarna, 7 aktiviteter' },
      { slug: 'mohippa-aktiviteter-stockholm', label: '7 möhippa-aktiviteter i Stockholm' },
      { slug: 'hen-party-ideas-stockholm', label: '6 Bachelorette Party Ideas in Stockholm' },
      { slug: 'honsyoga-dalarna-goat-yoga-sverige', label: 'Hönsyoga i Dalarna' },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'De flesta möhippor ser ungefär likadana ut. Restaurang, bar, kanske en aktivitet som hälften av gänget inte riktigt vill göra. [Yoga möhippa i Dalarna](/tjanster/privata-event) är alternativet. En privat klass för hela gruppen, utomhus i skogen eller på er hyrda boendeplats. Alla kan delta, oavsett nivå, ålder eller hur fysisk man känner för att vara. Här är hela guiden: varför det funkar, vad det kostar, och hur ni planerar helgen runt det.'
      },
      {
        type: 'callout',
        text: 'Snabbversion: Privat yoga möhippa i Dalarna från 3 000 kr. 60 eller 90 minuter utomhus eller inomhus. All utrustning ingår. Passar för 4 till 20 deltagare. Kombineras ofta med en helg på landet och andra aktiviteter. Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum och antal för offert.'
      },
      {
        type: 'heading',
        text: 'Varför yoga funkar som möhippa'
      },
      {
        type: 'paragraph',
        text: 'Möhippans dilemma är alltid detsamma. Gruppen är aldrig homogen. Det finns brudens mamma som inte dricker. Systern som just fött barn och är trött. Kollegan med ryggbesvär. Barndomskompisen som inte är lika inkörd i gänget som de andra. En vanlig möhippa-aktivitet, som padel, vinprovning eller karaoke, delar upp gruppen i de som är bekväma och de som låtsas vara det.'
      },
      {
        type: 'paragraph',
        text: 'Yoga löser det på ett sätt jag sett gång på gång. Alla kan delta. Ingen behöver prestera. Och när gruppen rör sig och andas tillsammans händer något som middagsbord med placeringskort sällan lyckas med. En slags gemenskap som släpps loss innan alkoholen, inte på grund av den. Brudens närmaste krets brukar bli förvånad över hur sammansvetsat det känns efteråt.'
      },
      {
        type: 'quote',
        text: 'Det var inte yogan i sig. Det var att vi alla låg på mattan och skrattade samtidigt. Jag vet fortfarande inte vad som gjorde det så speciellt.',
        author: 'Brudtärna, möhippa i Rättvik',
      },
      {
        type: 'heading',
        text: 'Var vi håller klassen i Dalarna'
      },
      {
        type: 'subheading',
        text: 'Utomhus på altanen'
      },
      {
        type: 'paragraph',
        text: 'Min favoritmiljö och den vanligaste platsen. En stor altan omgiven av granar och lövträd, fågelljud, ibland hönsen i bakgrunden. Det är en miljö som skapar ett annat mindset direkt. Borta från stan. Inne i något stillare. Fungerar maj till september beroende på väder.'
      },
      {
        type: 'subheading',
        text: 'På er hyrda boendeplats'
      },
      {
        type: 'paragraph',
        text: 'Har ni redan hyrt ett boende i Dalarna kan jag komma dit. Jag tar med mattor, block, bolster och allt som behövs. Vardagsrum med undanflyttade möbler räcker. Populärt på lördagsmorgon innan den större möhippan drar igång.'
      },
      {
        type: 'subheading',
        text: 'Utomhus vid sjö, skog eller berg'
      },
      {
        type: 'paragraph',
        text: 'Om ni vill ha en specifik plats, till exempel en brygga vid Siljan, en glänta i skogen eller en klippa med utsikt, går det oftast att lösa. Kräver bara att vi pratar i förväg för att hitta något som är praktiskt (tillgänglighet, underlag, avstånd till parkering).'
      },
      {
        type: 'heading',
        text: 'Planera möhippa-helgen runt yogan'
      },
      {
        type: 'paragraph',
        text: 'Yoga fungerar som enskild aktivitet men kommer bäst till sin rätt när den placeras i ett helgupplägg. Några upplägg som brukar funka:'
      },
      {
        type: 'subheading',
        text: 'Klassiskt Dalarna-helgupplägg'
      },
      {
        type: 'list',
        items: [
          'Fredag eftermiddag: incheckning på boendet, gemensam middag, vin',
          'Lördag morgon: yoga på altanen (60 till 90 minuter)',
          'Lördag eftermiddag: bad, promenad eller utflykt. Valfritt.',
          'Lördag kväll: bastu, middag, rolig möhippa-lek',
          'Söndag: lugn frukost, utchecka',
        ],
      },
      {
        type: 'subheading',
        text: 'Aktivt upplägg'
      },
      {
        type: 'list',
        items: [
          'Lördag morgon: yoga',
          'Lördag eftermiddag: vandring till Styggforsen eller liknande',
          'Lördag kväll: grillmiddag och lekar',
        ],
      },
      {
        type: 'subheading',
        text: 'Lyx-upplägg'
      },
      {
        type: 'list',
        items: [
          'Lördag morgon: yoga + bastu',
          'Lördag eftermiddag: spa eller massage (bokas separat)',
          'Lördag kväll: tre-rätters middag med dryckespaket',
        ],
      },
      {
        type: 'paragraph',
        text: 'Fler idéer i [Möhippa i Dalarna, 7 aktiviteter](/blogg/mohippa-dalarna-aktiviteter).'
      },
      {
        type: 'heading',
        text: 'Priser'
      },
      {
        type: 'table',
        tableHead: ['Format', 'Längd', 'Pris från', 'Passar för'],
        tableRows: [
          ['Altan-yoga i skogen', '60 min', '3 000 kr', 'Upp till 10 personer'],
          ['Altan-yoga, förlängt', '90 min', '3 800 kr', 'Upp till 10 personer'],
          ['Yoga på ert boende', '60 till 90 min', 'från 3 000 kr', 'Upp till 12 personer'],
          ['Större grupper (10 till 20)', '90 min', 'från 4 500 kr', 'Större möhippor'],
          ['Yoga + bastu', '2,5 tim totalt', 'offert', 'Helgpaket'],
        ],
      },
      {
        type: 'paragraph',
        text: 'Alla priser är exklusive moms. Inkluderar resa inom 30 minuter från min bas. Längre resa tillkommer enligt faktiskt utlägg (milersättning). Rabatt ges vid bokning av två klasser samma helg (exempelvis fredag kväll + lördag morgon).'
      },
      {
        type: 'heading',
        text: 'Vad ingår'
      },
      {
        type: 'list',
        items: [
          'Privat klass för er grupp, ingen annan med',
          'Alla mattor, block och bolster som behövs (jag tar med för upp till 20)',
          'Klass helt anpassad för gruppens nivå. Inga förkunskaper krävs.',
          'Undervisning på engelska',
          'En kort briefing med bruden eller brudtärnan innan, så ni vet vad som händer och kan tipsa gänget',
          'Flexibilitet med plats: altan, inomhus, brygga eller skog',
        ],
      },
      {
        type: 'heading',
        text: 'Yoga möhippa i Stockholm istället'
      },
      {
        type: 'paragraph',
        text: 'Om Dalarna inte funkar, om det är för långt, för kort helg, eller om inte alla kan resa, gör jag samma sak i Stockholm. Jag kommer till er lägenhet, hyrd lokal eller en park i stan med all utrustning. Där funkar även [privat SUP yoga vid Sickla Strand](/tjanster/sup-yoga) (i samarbete med Smashing Balance) som en rolig möhippa-aktivitet, med tillval som bastu och mer. Mer idéer i [7 möhippa-aktiviteter i Stockholm](/blogg/mohippa-aktiviteter-stockholm).'
      },
      {
        type: 'heading',
        text: 'Bokning och planering, steg för steg'
      },
      {
        type: 'list',
        items: [
          '6 till 8 veckor innan: mejla med datum, antal och ungefärlig plats. Jag bokar in datum.',
          '3 till 4 veckor innan: bekräfta exakt antal och plats, vi finjusterar format.',
          '1 vecka innan: jag skickar en kort deltagarinfo (kläder, plats, tider) att vidarebefordra.',
          'Dagen innan: vädercheck om vi ska vara utomhus. Backup-plan om vädret inte samarbetar.',
          'Själva dagen: jag är på plats 15 minuter innan start.',
        ],
      },
      {
        type: 'heading',
        text: 'Vanliga frågor om yoga möhippa i Dalarna'
      },
      {
        type: 'faq',
        faqItems: [
          {
            q: 'Hur mycket kostar en yoga möhippa?',
            a: 'Från 3 000 kr för en privat 60-minutersklass för upp till 10 personer i Dalarna. 90 minuter från 3 800 kr. Större grupper och kombinationspaket (yoga + bastu) prissätts individuellt.',
          },
          {
            q: 'Hur många kan vara med?',
            a: 'Allt från 4 till 20 personer. Det vanligaste är 8 till 12. Vid grupper över 15 krävs mer plats och vi pratar om lokal tillsammans.',
          },
          {
            q: 'Passar yoga möhippa för en grupp där ingen gjort yoga?',
            a: 'Ja. Det är till och med vanligast. Klassen är designad för nybörjare och blandad nivå. Inga avancerade positioner, ingen prestationskultur. Jag förklarar allt från grunden.',
          },
          {
            q: 'Kan ni ha det utomhus på vintern?',
            a: 'Inte rekommenderat. Utomhusyoga funkar maj till september. Under höst och vinter håller vi klassen inomhus, hos er eller i en hyrd lokal.',
          },
          {
            q: 'Vad händer om det regnar?',
            a: 'Vi har alltid en backup-plan inomhus. Utomhus är förstahandsval, men om vädret inte samarbetar flyttar vi in hos er eller till en annan närliggande lokal.',
          },
          {
            q: 'Kan ni komma till ett boende långt ut på landet?',
            a: 'Nästan alltid. Jag är mobil och van vid att hitta avlägsna platser. Resa över 30 minuter från min bas tillkommer enligt milersättning, specifieras på offerten.',
          },
          {
            q: 'Hur långt i förväg behöver vi boka?',
            a: 'Helgerna maj till september bokas ofta 2 till 4 månader i förväg. Andra perioder 4 till 8 veckor. Akuta bokningar går ibland att lösa med 1 till 2 veckors framförhållning beroende på datum.',
          },
          {
            q: 'Kan vi kombinera yogan med andra aktiviteter samma helg?',
            a: 'Ja. Vanliga kombinationer: yoga plus bastu, yoga plus hönsyoga (ja, med riktiga höns. Se [hönsyoga](/blogg/honsyoga-dalarna-goat-yoga-sverige)), eller yoga plus vandring. Jag hjälper gärna till att koordinera om ni vill.',
          },
          {
            q: 'Vad ska gruppen ha på sig?',
            a: 'Mjuka, bekväma kläder man kan röra sig i. Leggings, mjukis, t-shirt funkar. Inga speciella yogakläder behövs. Om vi är utomhus, tänk på att det kan vara lite kyligare än inomhus, ta med ett extra lager.',
          },
          {
            q: 'Kan bruden få en överraskning?',
            a: 'Självklart. Jag jobbar ofta med brudtärnan som kontakt och bruden vet ingenting om upplägget förrän vi börjar. Mycket uppskattat när det är en brud som inte brukar få stilla stunder annars.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Nästa steg'
      },
      {
        type: 'paragraph',
        text: 'Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum, antal, om ni redan har ett boende eller lokal, och om ni vill kombinera med andra aktiviteter. Jag svarar inom ett dygn med tillgänglighet och en konkret offert. Läs mer på tjänstesidan för [privata event](/tjanster/privata-event), eller bläddra bland fler [möhippa-aktiviteter i Dalarna](/blogg/mohippa-dalarna-aktiviteter).'
      },
    ]
  },
  {
    slug: 'konferensyoga-teambuilding',
    title: 'Konferensyoga och yoga som teambuilding: hela guiden för 2026',
    metaDescription: 'Konferensyoga i Stockholm och Dalarna. Upplägg, priser från 3 000 kr, och varför 60 min yoga slår ännu en teambuilding. Här är hela guiden.',
    publishDate: '2026-03-08',
    readingTime: '9 min',
    category: 'Företag & Konferens',
    excerpt: 'En praktisk guide till yoga på konferenser och som teambuilding. Upplägg, pris, format, vanliga missförstånd, plus ärligt snack om när yoga faktiskt inte är rätt val.',
    relatedServiceHref: '/tjanster/foretagsyoga',
    relatedServiceLabel: 'Boka företagsyoga',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'foretagsyoga-vad-ingar-och-kostar', label: 'Företagsyoga, vad ingår och kostar?' },
      { slug: 'sommaravslutning-aktiviteter-stockholm', label: '7 idéer för sommaravslutning i Stockholm' },
      { slug: 'teambuilding-aktiviteter-stockholm', label: '7 teambuilding-aktiviteter i Stockholm' },
      { slug: 'yoga-retreat-dalarna-vs-stockholm', label: 'Yoga retreat Dalarna vs Stockholm' },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Dag 2 på konferensen. Alla har suttit i sex timmar. Luften är trött, kaffet smakar termos, hälften av teamet scrollar i smyg under presentationerna. Det är inte ointresse. Det är fysiologi. Kroppen är byggd för rörelse. Håll den stilla för länge så stänger hjärnan ner. Ännu en teambuilding-övning räddar inte det. 60 minuter [yoga](/tjanster/foretagsyoga) kan.'
      },
      {
        type: 'callout',
        text: 'Snabbversionen: Konferensyoga från 3 000 kr per 60-minutersklass i Stockholm och Dalarna. Passar 10 till 40 deltagare, ingen förkunskap krävs, jag tar med allt. Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) för offert.'
      },
      {
        type: 'heading',
        text: 'Vad konferensyoga faktiskt är'
      },
      {
        type: 'paragraph',
        text: 'Konferensyoga är en yogaklass som hålls som del av en konferens, kickoff, kundevent eller längre teambuilding-dag. Syftet är inte att lära ut yoga. Det är att bryta av stillasittandet, återställa uppmärksamheten och ge deltagarna en delad upplevelse som gör dem mer närvarande i resten av programmet.'
      },
      {
        type: 'paragraph',
        text: 'Det skiljer sig från vanlig [företagsyoga](/blogg/foretagsyoga-vad-ingar-och-kostar) på två sätt. Det är oftast en engångsklass, och innehållet är designat för blandad nivå i en grupp som sällan är uppvärmd. Människor som just klivit ur en PowerPoint och ska tillbaka till en lunch.'
      },
      {
        type: 'heading',
        text: 'Varför det funkar bättre än ännu en teambuilding-övning'
      },
      {
        type: 'paragraph',
        text: 'Det finns två skäl, ett praktiskt och ett psykologiskt. Det praktiska: rörelse och andning påverkar det autonoma nervsystemet. Långsam utandning och milda stretchar sänker vilopuls och skärper fokus. Det är samma mekanism som gör att en kort promenad ofta löser det en till kaffekopp inte löser. Skillnaden är att yoga gör det gemensamt. Hela rummet sänker tempot samtidigt.'
      },
      {
        type: 'paragraph',
        text: 'Det psykologiska: det är svårt att vara formell när man balanserar på ett ben bredvid sin chef. En yogaklass nivellerar kort statuserna i rummet. För psykologisk trygghet gör skratten under ett stapplande "trädet" ofta mer än en hel workshop om samarbete.'
      },
      {
        type: 'quote',
        text: 'Det var tystnaden efteråt som var grejen. Folk pratade mjukare med varandra resten av dagen. Vi fick igenom det som inte ville röra sig på mötet innan.',
        author: 'Konferensansvarig, bolag i fintech-branschen',
      },
      {
        type: 'heading',
        text: 'Tre sätt att lägga in yoga på konferensen'
      },
      {
        type: 'subheading',
        text: '1. Morgonyoga innan programmet (07:30 till 08:30)'
      },
      {
        type: 'paragraph',
        text: 'Sätter tonen för dagen. En 45 till 60 minuters klass som bygger upp: andningsövningar, soluppgångshälsningar, lättare styrke- och balansövningar. Frivilligt men marknadsfört väl. Min erfarenhet: 40 till 70 procent av deltagarna kommer när det schemaläggs som en valbar punkt innan frukost. Gör dag ett betydligt mer uppvaknad.'
      },
      {
        type: 'subheading',
        text: '2. Lunchyoga eller eftermiddagsreset (12:00 till 13:00 eller 14:30 till 15:15)'
      },
      {
        type: 'paragraph',
        text: 'Fungerar som alternativ till "en till PowerPoint-session". 30 till 45 minuter som bryter dagen mitt itu. Fokus på rörlighet för axlar, rygg och höfter som stelnar av att sitta. Alla deltar samtidigt, till skillnad från morgonyoga där det är frivilligt. Det här är det vanligaste formatet bland mina konferenskunder.'
      },
      {
        type: 'subheading',
        text: '3. Avslutningsyoga på sista dagen (15:30 till 16:30)'
      },
      {
        type: 'paragraph',
        text: 'En mjukare klass på sista eftermiddagen. Släpper intensiteten från dagarna innan. Yin- eller restorativ-stil med längre positioner, färre övningar, mer andning. Bra som avslutning innan hemresa eller middag. Folk lämnar konferensen med lugnet i kroppen istället för trötthet i huvudet.'
      },
      {
        type: 'heading',
        text: 'Priser för konferensyoga'
      },
      {
        type: 'paragraph',
        text: 'Alla priser är exklusive moms. Resa inom Stockholms kommun ingår. Konferenser utanför Stockholm tillkommer enligt faktiskt utlägg (tåg eller milersättning).'
      },
      {
        type: 'table',
        tableHead: ['Format', 'Längd', 'Pris från', 'Antal deltagare'],
        tableRows: [
          ['Energizer / reset', '30 min', '2 000 kr', 'Upp till 25'],
          ['Standard konferensklass', '60 min', '3 000 kr', 'Upp till 25'],
          ['Halvdagsupplägg (2 klasser)', '2 x 45 min', '5 500 kr', 'Upp till 25'],
          ['Stor konferens (25 till 40 personer)', '60 min', 'offert', '25 till 40'],
          ['Outdoor-upplägg Dalarna', '60 till 90 min', 'från 4 000 kr plus resa', 'Upp till 20'],
        ],
      },
      {
        type: 'paragraph',
        text: 'För kickoffer och kundevent där yoga är ett inslag bland flera (exempelvis som start på en dag, följt av workshop och middag) prissätts det individuellt. Ofta 3 000 till 5 000 kr beroende på längd, lokal, och om jag ska vara på plats hela dagen eller komma in punktvis.'
      },
      {
        type: 'heading',
        text: 'Konferensyoga i Dalarna: en annan sorts konferens'
      },
      {
        type: 'paragraph',
        text: 'Allt fler företag lägger sina konferenser och kickoffer i Dalarna, av en anledning. Det är slut på konferenscentrum med heltäckningsmatta och spotlights. Om ni redan tar teamet hit, till Romme, Sälen, Rättvik eller ett boende vid en sjö, så lägg in en yogaklass utomhus. En morgon på altanen med skogen runt om, gryningsljus och fågelljud gör mer för ett team än tre workshops om värderingar.'
      },
      {
        type: 'paragraph',
        text: 'Jag kommer till er konferensanläggning, ert boende eller friluftsområde. Utomhus när vädret tillåter, inomhus som backup. Resa från min bas i Dalarna är ofta gratis eller minimal kostnad om ni är inom 30 minuter. Se också [yoga retreat Dalarna vs Stockholm](/blogg/yoga-retreat-dalarna-vs-stockholm) för mer om varför skogsmiljön gör skillnad.'
      },
      {
        type: 'heading',
        text: 'Konferensyoga i Stockholm: format, lokaler, logistik'
      },
      {
        type: 'paragraph',
        text: 'I Stockholm händer konferensyoga oftast på ett av tre ställen: i er egen lokal (konferensrum, matsal, takterrass), på hotellet där konferensen hålls, eller i en extern yogasal ni hyr för tillfället. Alla tre fungerar. Det jag rekommenderar för grupper upp till 25 är hotellets största mötesrum med bord och stolar undanflyttade. Tillräckligt stort, känt för deltagarna, logistiskt enklast.'
      },
      {
        type: 'paragraph',
        text: 'För större grupper (25 till 40) lönar det sig att boka en riktig yogasal eller en större öppen yta. Jag har samarbete med flera studior i centrala Stockholm och på Södermalm som tar privatgrupper till fast pris.'
      },
      {
        type: 'heading',
        text: 'Vad som ingår'
      },
      {
        type: 'list',
        items: [
          '500-timmars certifierad yogalärare (Yoga Alliance)',
          'Yogamattor och block för upp till 20 deltagare (fler på beställning)',
          'Klass designad specifikt för gruppen. Blandad nivå, inga avancerade positioner.',
          'Undervisning på engelska',
          'Uppriggning och nedpackning (jag är på plats 15 min innan start)',
          'En kort förhandsbriefing med konferensansvarig dagarna innan för att finjustera format och längd',
        ],
      },
      {
        type: 'heading',
        text: 'När yoga inte är rätt val (var ärlig)'
      },
      {
        type: 'paragraph',
        text: 'Det finns tillfällen då yoga inte är bästa valet, och det är värt att säga rakt ut. Om hela teamet aldrig gjort yoga, är vagt motvilligt, och ni bokar det för att "utmana dem", så funkar det sällan. Motståndet dominerar rummet. Då är det bättre med något rörelsebaserat som är mindre laddat: en gemensam promenad, kajak, padel.'
      },
      {
        type: 'paragraph',
        text: 'Om programmet redan är packat och det enda "lediga" spåret är 20 minuter mellan två workshops, skippa yogan. Det blir stressigt, ingen hinner landa, och klassen blir en till punkt att bocka av istället för en paus. Boka hellre ett 45-minutersblock mellan kaffe och lunch.'
      },
      {
        type: 'heading',
        text: 'Så här bokar du'
      },
      {
        type: 'list',
        items: [
          '1. Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum, ort, antal deltagare och tänkt placering i programmet.',
          '2. Jag återkommer med tillgänglighet och två till tre förslag på upplägg.',
          '3. Vi bokar datum och diskuterar lokal, format och eventuella anpassningar.',
          '4. Några dagar innan skickar jag en kort deltagarinfo ni kan klistra in i kallelsen.',
          '5. Jag kommer, leder klassen, plockar ihop. Faktura skickas efter utförd klass.',
        ],
      },
      {
        type: 'heading',
        text: 'Vanliga frågor om konferensyoga'
      },
      {
        type: 'faq',
        faqItems: [
          {
            q: 'Vad kostar konferensyoga?',
            a: 'En 60 minuters standardklass kostar från 3 000 kr i Stockholm. En 30-minuters energizer från 2 000 kr. Halvdagsupplägg (två klasser) från 5 500 kr. Större grupper (25 till 40 personer) och konferenser utanför Stockholm prissätts individuellt. Alla priser är exklusive moms.',
          },
          {
            q: 'Hur långt i förväg behöver jag boka?',
            a: 'Gärna 3 till 6 veckor innan för konferenser i Stockholm, 6 till 8 veckor för Dalarna och andra orter. Akuta bokningar går ofta att lösa med 1 till 2 veckors framförhållning beroende på datum.',
          },
          {
            q: 'Behöver alla deltagare vara med?',
            a: 'Nej. Det mest uppskattade upplägget är att yogan är frivillig på morgonen och obligatorisk på eftermiddagen. Ingen ska känna sig tvingad in på en matta. Det är okej att någon väljer att sitta på stol och göra mjukare rörelser istället.',
          },
          {
            q: 'Funkar det för ett team där ingen gjort yoga?',
            a: 'Ja, det är det vanligaste. Konferensyoga designas för blandad nivå: nybörjare, stela ryggar, folk i jeans. Inga avancerade positioner, ingen press att göra rätt. Det är tänkt som en gemensam rörelsepaus, inte en träningsklass.',
          },
          {
            q: 'Vad ska deltagarna ha på sig?',
            a: 'Vanliga mjuka kläder räcker. T-shirt och byxor man kan röra sig i. Inget speciellt ombyte krävs. Om konferensen är formell och folk går i finare kläder rekommenderar jag att ni flaggar "bekväma kläder" i schemat inför dagen.',
          },
          {
            q: 'Kan ni kombinera yoga med andningsworkshop eller meditation?',
            a: 'Ja. Vanliga kombinationer: 30 min yoga plus 15 min guidad andning, eller 45 min yoga plus 15 min tyst meditation. Bra på dag två av en tredagarskonferens när deltagarna behöver landa istället för laddas.',
          },
          {
            q: 'Vad händer om det regnar på en outdoor-klass?',
            a: 'Vi flyttar inomhus. Det finns alltid en backup-plan bokad. Om vädret är en känd faktor (exempelvis i Dalarna i november) rekommenderar jag direkt inomhusformat.',
          },
          {
            q: 'Hur stor grupp kan du ta?',
            a: 'Bekvämt upp till 20 personer med min utrustning. Upp till 40 under förutsättning att lokalen är stor nog och ni tillhandahåller extra mattor (jag koordinerar det). Större grupper går att lösa men tenderar att bli kvalitetsmässigt sämre för individen.',
          },
          {
            q: 'Fakturerar du med moms?',
            a: 'Ja, med svensk F-skatt. Moms specificeras separat på offerten. Fråga er redovisningskonsult om hur ni bokför företagsyoga. Det klassas oftast som personalvård eller konferenskostnad.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Nästa steg'
      },
      {
        type: 'paragraph',
        text: 'Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum, ort, antal deltagare och placering i programmet. Jag återkommer med en konkret offert. För regelbunden yoga på kontoret utanför konferensen, se [företagsyoga](/tjanster/foretagsyoga). För fler team-aktiviteter i Stockholm, kolla in [7 teambuilding-aktiviteter i Stockholm](/blogg/teambuilding-aktiviteter-stockholm).'
      },
    ]
  },
  {
    slug: 'sup-yoga-stockholm',
    title: 'SUP yoga Stockholm: privat event eller öppen klass, här är skillnaden',
    metaDescription: 'SUP yoga i Stockholm vid Sickla Strand: vinyasa eller yin på paddleboard, bastu ingår. Öppna veckoklasser via Smashing Balance, privata event för möhippa och team direkt med mig.',
    publishDate: '2026-03-15',
    readingTime: '9 min',
    category: 'SUP Yoga',
    excerpt: 'Yoga på paddleboard vid Sickla Strand, 15 minuter från T-centralen. Bastu ingår. Det finns två sätt att vara med: öppen veckoklass via Smashing Balance, eller privat event för er grupp via mig. Här är skillnaden, priserna och vad som faktiskt ingår.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Boka privat SUP Yoga',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'sup-yoga-klasser-stockholm', label: 'SUP yoga klasser Stockholm: enstaka klass, klippkort, säsongspass' },
      { slug: 'mohippa-aktiviteter-stockholm', label: '6 möhippa-aktiviteter i Stockholm' },
      { slug: 'hen-party-ideas-stockholm', label: '5 Bachelorette Party Ideas in Stockholm' },
      { slug: 'sommaravslutning-aktiviteter-stockholm', label: '7 idéer för sommaravslutning i Stockholm' },
      { slug: 'teambuilding-aktiviteter-stockholm', label: '7 teambuilding-aktiviteter i Stockholm' },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Du ligger i savasana på en paddleboard. Brädan gungar lite. Vattnet glittrar i solen. Det enda ljudet är fåglar, vattnet mot brädan, och svagt ploppande av åror en bit bort. Du är 15 minuter från T-centralen. Det här är [SUP yoga](/tjanster/sup-yoga) i Stockholm. En av få upplevelser i stan som är så bra som den låter.'
      },
      {
        type: 'callout',
        text: 'Snabbinfo: SUP yoga vid Sickla Strand i Nacka, i samarbete med Smashing Balance. Säsong slutet april till september. Två sätt att vara med: **öppen veckoklass från 350 kr** (vinyasa eller yin, 75 min, bastu ingår, [bokas via Smashing Balance](https://smashingbalance.se/collections/sup-yoga)) eller **privat event från 500 kr per person** för möhippa, team eller födelsedag, [bokas direkt med mig](mailto:hello.yogawithcamilla@gmail.com).'
      },
      {
        type: 'heading',
        text: 'Vad SUP yoga faktiskt är'
      },
      {
        type: 'paragraph',
        text: 'SUP står för "stand-up paddleboard". En stor, uppblåsbar bräda man står på ute på vattnet. SUP yoga är yoga som utförs på brädan istället för en matta. Brädorna är bredare och tjockare än vanliga SUP-brädor, designade specifikt för stabilitet när någon ligger, sitter eller gör positioner på dem.'
      },
      {
        type: 'paragraph',
        text: 'Det är mindre allvarligt och mer lekfullt än vanlig yoga. Brädan gungar. Du tappar balansen. Någon ramlar i. Alla skrattar. Samtidigt händer något märkligt. Balanskravet tvingar hjärnan att fokusera på brädan och kroppen just nu, och allt som brukar snurra i huvudet tystnar. Det är omöjligt att tänka på morgondagens möte när du försöker hålla dig upp på ett ben på ett gungande plank.'
      },
      {
        type: 'heading',
        text: 'Var: Sickla Strand i Nacka'
      },
      {
        type: 'paragraph',
        text: 'Klasserna och eventen hålls vid Sickla Strand, vid Elton\'s Café och Uthyrning, på Sicklasjön i Nacka. En lugn insjö, 10 till 15 minuter från centrala Stockholm med tunnelbana eller buss. Skyddad från vind och trafikerade vattenleder, omgiven av skog.'
      },
      {
        type: 'paragraph',
        text: 'Närmaste tunnelbana är Sickla eller Hammarby Sjöstad. Det finns parkering på plats. Vi möts vid Elton\'s där brädorna och bastun finns.'
      },
      {
        type: 'paragraph',
        text: 'Smashing Balance driver platsen vid Sickla Strand: Elton\'s Café, bastun och SUP-uthyrningen. Jag undervisar yogan.'
      },
      {
        type: 'heading',
        text: 'Två sätt att vara med'
      },
      {
        type: 'subheading',
        text: 'Alternativ 1: Öppen veckoklass (för dig själv eller med någon)'
      },
      {
        type: 'paragraph',
        text: 'Öppna klasser under säsongen. Du bokar en plats för dig själv eller en vän, dyker upp 10 till 15 minuter innan, och är på vattnet i 75 minuter. Vinyasa eller yin beroende på klass. Bastu vid sjön ingår.'
      },
      {
        type: 'paragraph',
        text: 'Enstaka klass 350 kr (bräda och bastu ingår), 150 kr om du tar med egen SUP, 10-klippkort 1 000 kr, säsongspass 2026 för 1 500 kr. Allt bokas via Smashing Balance på [smashingbalance.se/collections/sup-yoga](https://smashingbalance.se/collections/sup-yoga). Mer detaljer på [SUP yoga klasser Stockholm](/blogg/sup-yoga-klasser-stockholm).'
      },
      {
        type: 'subheading',
        text: 'Alternativ 2: Privat event (för er grupp)'
      },
      {
        type: 'paragraph',
        text: 'Skräddarsydd upplevelse för er grupp. Möhippa, team, födelsedag, vänner. Ni får brädorna för er själva, jag leder en klass för just er. Vinyasa eller yin, ni väljer. Lägg till bastu vid sjön, trail run i Nacka, tennis, vattencyklar eller mat på plats om ni vill bygga ut dagen.'
      },
      {
        type: 'paragraph',
        text: 'Från 500 kr per person, vanligtvis 3 till 10 personer (större grupper på förfrågan). Bokas direkt med mig på [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com), så återkommer jag med offert. Se [Privat SUP Yoga](/tjanster/sup-yoga) för hela paketet.'
      },
      {
        type: 'heading',
        text: 'Säsong och vädervillkor'
      },
      {
        type: 'paragraph',
        text: 'SUP yoga i Stockholm är en sommarsak. Säsongen är slutet av april till september. Vi avbryter vid för hård vind (över 6 m/s), åska eller riktigt låga temperaturer. För privata event bokar du oftast med en preferensdag och en backup-dag om vädret inte samarbetar.'
      },
      {
        type: 'paragraph',
        text: 'Juli och början av augusti är bäst för varmt vatten. Maj och september är svalare men ofta lugnare och mindre trafikerade. Det är min personliga favoritsäsong.'
      },
      {
        type: 'heading',
        text: 'Priser'
      },
      {
        type: 'table',
        tableHead: ['Upplägg', 'Längd', 'Pris', 'Bokas via'],
        tableRows: [
          ['Enstaka klass', '75 min', '350 kr', 'Smashing Balance'],
          ['Enstaka klass (egen SUP)', '75 min', '150 kr', 'Smashing Balance'],
          ['10-klippkort', '10 klasser', '1 000 kr', 'Smashing Balance'],
          ['Säsongspass 2026', 'Hela säsongen', '1 500 kr', 'Smashing Balance'],
          ['Privat event', '2 till 4 tim', 'från 500 kr / person', 'Direkt med mig'],
        ],
      },
      {
        type: 'paragraph',
        text: 'Bastu vid sjön ingår i de öppna klasserna. För privata event är bastu ett tillval som offereras separat tillsammans med eventuella andra tillval. Privata event kan faktureras till företag mot moms.'
      },
      {
        type: 'heading',
        text: 'Vem passar SUP yoga för'
      },
      {
        type: 'paragraph',
        text: 'Nästan alla. Det är ett av få yogaformat som är mer tillgängligt än studio-yoga, eftersom ingen förväntar sig att du ska kunna det. Det är inbyggt roligt och lite klumpigt. Det passar särskilt bra för:'
      },
      {
        type: 'list',
        items: [
          'Möhippor och födelsedagsgrupper där deltagarna har olika nivåer. Alla har samma chans att ramla i.',
          'Team som vill något mindre allvarligt än en konferens med whiteboards',
          'Personer som tycker studio-yoga känns prestationsladdat',
          'Gäster på besök i Stockholm som vill göra något som bara kan göras här',
          'Familjer med tonåringar och uppåt. Mellanstadiebarn brukar älska det.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Det är mindre lämpat för personer som inte är bekväma med att hamna i vatten, eller de som är allvarligt rörelsenedsatta (brädan kräver att man kan komma upp i stående position från knä).'
      },
      {
        type: 'heading',
        text: 'Vad du ska ha på dig och ta med'
      },
      {
        type: 'list',
        items: [
          'Badkläder under (ja, du kommer att hamna i vattnet). Cykelshorts och topp funkar också.',
          'Lätt t-shirt eller träningskläder över som kan bli blöta',
          'Handduk',
          'Vattenflaska',
          'Solglasögon med band',
          'Solkräm. Solen studsar hårt från vattenytan.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Mobilen och värdesakerna stannar på land i låst skåp. Brädan är våt. Det är en av fördelarna.'
      },
      {
        type: 'heading',
        text: 'Så här går en klass till'
      },
      {
        type: 'paragraph',
        text: 'Vi möts 10 till 15 minuter innan start vid Elton\'s. Brädorna är klara. Kort säkerhetsgenomgång på land: hur man kommer upp på brädan, hur man paddlar ut till ankringsplatsen, vad vi ska göra. Sen ut på vattnet.'
      },
      {
        type: 'paragraph',
        text: 'Första delen är vi i sittande och liggande positioner nära ankringspunkten. Stabilt, tyst, lugnt. Sen bygger vi upp till knästående och så småningom stående positioner för de som vill. Avslutningen är savasana i ryggläge. Efter klassen paddlar vi in, in i bastun, hoppar i sjön, repeterar.'
      },
      {
        type: 'quote',
        text: 'Jag trodde det skulle vara nervöst och det var det de första två minuterna. Sedan var det bara roligt. Bästa måndagsstart på flera år.',
        author: 'Deltagare, team från ett bolag i Stockholm',
      },
      {
        type: 'heading',
        text: 'SUP yoga jämfört med vanlig yoga på mattan'
      },
      {
        type: 'paragraph',
        text: 'SUP yoga är inte en ersättning för regelbunden yogapraktik på mattan. Det är ett annat format. Mer upplevelsebaserat, mer socialt, mindre tekniskt. Du bygger inte styrka eller flexibilitet på samma sätt. Men du får något som studio-yoga sällan ger: en känsla av att vara utomhus och lekfull samtidigt. Om du söker regelbunden praktik, kolla [mina andra tjänster](/#services) istället.'
      },
      {
        type: 'heading',
        text: 'Vanliga frågor om SUP yoga i Stockholm'
      },
      {
        type: 'faq',
        faqItems: [
          {
            q: 'Var bokar jag en enstaka klass?',
            a: 'Veckoklasserna bokas via Smashing Balance på smashingbalance.se/collections/sup-yoga. Där ser du aktuellt schema och alla biljettyper (enstaka klass, klippkort, säsongspass).',
          },
          {
            q: 'Var bokar jag ett privat event?',
            a: 'Privata event för möhippa, team, födelsedag eller vänner bokas direkt med mig. Mejla hello.yogawithcamilla@gmail.com med datum och gruppstorlek så återkommer jag med offert.',
          },
          {
            q: 'Vad är Smashing Balance?',
            a: 'De driver platsen vid Sickla Strand: Elton\'s Café, bastun och SUP-uthyrningen. Jag undervisar de öppna veckoklasserna och är er kontaktperson när ni bokar privat event.',
          },
          {
            q: 'Behöver jag kunna paddla?',
            a: 'Nej. Du behöver bara kunna paddla några minuter ut till platsen där vi ankrar brädorna. Det är enkelt, jag visar hur.',
          },
          {
            q: 'Behöver jag kunna yoga?',
            a: 'Nej. SUP yoga är ofta lättare att börja med än studio-yoga, eftersom brädans instabilitet innebär att ingen förväntar sig avancerade positioner. Klassen anpassas efter de som är där.',
          },
          {
            q: 'Vad händer om jag ramlar i vattnet?',
            a: 'Det händer ofta första gången du försöker stå upp. Vattnet är rent och sommartid varmt. Du kravlar upp på brädan igen och klassen fortsätter. Ramlandet är en del av upplevelsen.',
          },
          {
            q: 'Vad kostar en enstaka klass?',
            a: '350 kr per klass, inklusive bräda, paddel, flytväst och bastu efter klassen. 150 kr om du tar med egen SUP. Klippkort (10 klasser) 1 000 kr, säsongspass 1 500 kr. Allt via Smashing Balance.',
          },
          {
            q: 'Vad kostar ett privat event?',
            a: 'Från 500 kr per person, beroende på gruppstorlek, längd och tillval. Vanligtvis 3 till 10 personer, större grupper på förfrågan. Mejla mig så får ni en konkret offert.',
          },
          {
            q: 'Hur lång är en klass?',
            a: 'Öppna klasser är 75 minuter inklusive paddling till och från ankringsplatsen. Privata event 1 till 4 timmar, längden anpassas efter yoga och eventuella tillval.',
          },
          {
            q: 'Ingår bastu?',
            a: 'Bastu vid sjön ingår i de öppna klasserna. För privata event är bastu ett tillval som ni lägger till i offerten om ni vill.',
          },
          {
            q: 'När är säsongen?',
            a: 'Slutet av april till september. Juli och augusti är varmast i vattnet. Maj och september är ofta lugnare.',
          },
          {
            q: 'Är SUP yoga säkert?',
            a: 'Ja. Vattnet är lugnt, ankringspunkten är nära strand, flytväst finns tillgänglig och Smashing Balance ansvarar för säkerhetsutrustningen. Säkerhetsgenomgång hålls innan varje klass.',
          },
          {
            q: 'Kan små barn vara med?',
            a: 'Rekommenderat från cirka 10 år och uppåt. Yngre barn har ofta svårt att hålla sig still och tappar lätt intresset.',
          },
          {
            q: 'Var parkerar man?',
            a: 'Det finns parkering på plats vid Elton\'s Café och Uthyrning. T-bana Sickla eller Hammarby Sjöstad är 10 till 15 minuters promenad.',
          },
          {
            q: 'Vad händer vid dåligt väder?',
            a: 'Vid hård vind (över 6 m/s), åska eller för kallt vatten flyttar vi klassen. För öppna klasser får du info via Smashing Balance, för privata event blir du kontaktad senast kvällen innan.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Nästa steg'
      },
      {
        type: 'paragraph',
        text: 'Vill ni boka en privat grupp för möhippa, team eller födelsedag? Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum, antal och om ni vill lägga till bastu eller andra tillval. Mer detaljer på [Privat SUP Yoga](/tjanster/sup-yoga). Vill du bara komma på en öppen veckoklass? Se schema och boka direkt på [Smashing Balance](https://smashingbalance.se/collections/sup-yoga), eller läs mer på [SUP yoga klasser Stockholm](/blogg/sup-yoga-klasser-stockholm).'
      },
    ]
  },
  {
    slug: 'sup-yoga-klasser-stockholm',
    title: 'SUP yoga klasser Stockholm: enstaka klass, klippkort och säsongspass på Sickla Strand',
    metaDescription: 'Öppna SUP yoga-klasser varje vecka i Stockholm vid Sickla Strand. Vinyasa eller yin på paddleboard, 75 min, bastu ingår. Enstaka klass 350 kr, 10-klippkort 1 000 kr, säsongspass 1 500 kr.',
    publishDate: '2026-04-24',
    readingTime: '7 min',
    category: 'SUP Yoga',
    excerpt: 'De öppna SUP yoga-klasserna jag undervisar varje vecka under säsongen. Vinyasa eller yin på paddleboard vid Sickla Strand, 75 minuter, bastu ingår. Här är scheman, priser och vad som faktiskt händer på en klass.',
    relatedServiceHref: '/tjanster/sup-yoga-klasser',
    relatedServiceLabel: 'Boka SUP yoga klass',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'sup-yoga-stockholm', label: 'SUP yoga Stockholm: privat event eller öppen klass' },
      { slug: 'mohippa-aktiviteter-stockholm', label: '7 möhippa-aktiviteter i Stockholm' },
      { slug: 'sommaravslutning-aktiviteter-stockholm', label: '7 idéer för sommaravslutning i Stockholm' },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Det här är guiden till de öppna [SUP yoga-klasserna](/tjanster/sup-yoga-klasser) jag undervisar i Stockholm under sommaren. Enstaka klass, klippkort eller säsongspass. Du behöver inte boka en hel grupp, du kan komma själv eller med en vän.',
      },
      {
        type: 'callout',
        text: 'Snabbinfo: Vinyasa eller yin SUP yoga vid Sickla Strand. 75 minuter inklusive paddling. Bastu vid sjön ingår. Säsong slutet april till september 2026. Enstaka klass 350 kr, 150 kr med egen SUP, 10-klippkort 1 000 kr, säsongspass 1 500 kr. [Boka via Smashing Balance](https://smashingbalance.se/collections/sup-yoga).',
      },
      {
        type: 'heading',
        text: 'Vad det är',
      },
      {
        type: 'paragraph',
        text: 'En öppen yoga-klass på paddleboard, ledd av mig, vid Sickla Strand i Nacka. Brädan är bredare och stabilare än en vanlig SUP. Du paddlar några minuter ut till ankringsplatsen, vi kör en klass tillsammans, och paddlar in. Bastu vid sjön efteråt.',
      },
      {
        type: 'paragraph',
        text: 'Klasserna hålls i samarbete med Smashing Balance, som driver platsen, brädorna, bastun och säkerhetsutrustningen. Jag står för yogan.',
      },
      {
        type: 'heading',
        text: 'Två stilar: vinyasa eller yin',
      },
      {
        type: 'subheading',
        text: 'Vinyasa SUP yoga',
      },
      {
        type: 'paragraph',
        text: 'Aktivt flöde på brädan. Mjuka övergångar, anpassade för vattnet. Du bygger styrka och balans samtidigt som du landar i andningen. Bra om du vill röra på dig och bränna lite energi.',
      },
      {
        type: 'subheading',
        text: 'Yin SUP yoga',
      },
      {
        type: 'paragraph',
        text: 'Lugna, hållna positioner med vattnet i rörelse under dig. Återhämtande, mjukt, perfekt på en kväll efter jobbet eller en söndagsmorgon. Bra om du behöver landa snarare än röra på dig.',
      },
      {
        type: 'paragraph',
        text: 'Båda stilarna passar alla nivåer. Schemat varierar från vecka till vecka, kolla aktuella tider på [Smashing Balance](https://smashingbalance.se/collections/sup-yoga) så ser du vilken stil som körs när.',
      },
      {
        type: 'heading',
        text: 'Priser och biljettyper',
      },
      {
        type: 'table',
        tableHead: ['Biljett', 'Pris', 'Vad ingår'],
        tableRows: [
          ['Enstaka klass', '350 kr', 'En klass, bräda, paddel, flytväst, dry bag, bastu'],
          ['Enstaka klass (egen SUP)', '150 kr', 'En klass om du tar med egen bräda, bastu ingår'],
          ['10-klippkort', '1 000 kr', 'Tio klasser, bräda och bastu ingår'],
          ['Säsongspass 2026', '1 500 kr', 'Obegränsade klasser hela säsongen'],
        ],
      },
      {
        type: 'paragraph',
        text: 'Bastu ingår alltid. Klippkort och säsongspass lönar sig från ungefär tre klasser i månaden. Allt bokas via [Smashing Balance](https://smashingbalance.se/collections/sup-yoga).',
      },
      {
        type: 'heading',
        text: 'Var och när',
      },
      {
        type: 'paragraph',
        text: 'Sickla Strand vid Elton\'s Café och Uthyrning, Nacka. Cirka 10 till 15 minuter från city. T-bana Sickla eller Hammarby Sjöstad. Parkering finns på plats.',
      },
      {
        type: 'paragraph',
        text: 'Säsongen är slutet av april till september 2026. Schemat uppdateras varje vecka. Juli och augusti är varmast i vattnet, maj och september är ofta lugnare och mindre bokade.',
      },
      {
        type: 'heading',
        text: 'Så går en klass till',
      },
      {
        type: 'paragraph',
        text: 'Kom 10 till 15 minuter innan klassen börjar. Du checkas in, lägger värdesakerna i ett låst skåp, byter om vid behov. Vi samlas på land för en kort säkerhetsgenomgång: hur du kommer upp på brädan, hur du paddlar ut, vad vi ska göra på vattnet.',
      },
      {
        type: 'paragraph',
        text: 'Vi paddlar några minuter ut till ankringsplatsen, ankrar brädorna och kör klassen. Första delen är sittande och liggande positioner, sen bygger vi upp till knästående och stående för dem som vill. Avslutning i savasana. Sedan tillbaka in, in i bastun.',
      },
      {
        type: 'paragraph',
        text: 'Hela klassen inklusive paddling tar 75 minuter. Räkna med att vara på plats i ungefär två timmar med incheckning, omklädning och bastu efteråt.',
      },
      {
        type: 'heading',
        text: 'Vad du ska ta med',
      },
      {
        type: 'list',
        items: [
          'Badkläder under (du kommer att bli våt)',
          'Träningskläder eller t-shirt över',
          'Handduk',
          'Vattenflaska',
          'Solglasögon (gärna med band) och solkräm',
          'Eventuellt extra ombyte för efter bastun',
        ],
      },
      {
        type: 'paragraph',
        text: 'Mobil och värdesaker stannar på land i låst skåp. Brädan är våt. Det är en del av poängen.',
      },
      {
        type: 'heading',
        text: 'Vem klasserna passar för',
      },
      {
        type: 'list',
        items: [
          'Du som vill prova SUP yoga utan att binda upp en hel grupp',
          'Du som har yogamatpraktik och vill ha en sommarvariant utomhus',
          'Du som inte tycker om varma studior på sommaren',
          'Du som söker en mjuk veckoritual som inkluderar bad och bastu',
          'Besökande till Stockholm som vill göra något typiskt skandinaviskt',
        ],
      },
      {
        type: 'paragraph',
        text: 'Inga förkunskaper i yoga eller SUP behövs. Brädorna är breda och stabila. Klassen anpassas alltid efter de som dyker upp.',
      },
      {
        type: 'heading',
        text: 'Öppen veckoklass vs privat event',
      },
      {
        type: 'paragraph',
        text: 'Om du vill komma på egen hand eller med en vän, en öppen veckoklass är rätt. Om ni är en grupp som vill ha hela upplevelsen för er själva, möhippa, team, födelsedag, då passar ett [privat SUP yoga-event](/tjanster/sup-yoga) bättre. Privata event bokas direkt med mig från 500 kr per person, och hela upplägget anpassas efter er.',
      },
      {
        type: 'heading',
        text: 'Vanliga frågor',
      },
      {
        type: 'faq',
        faqItems: [
          {
            q: 'Hur bokar jag en klass?',
            a: 'Via Smashing Balance på smashingbalance.se/collections/sup-yoga. Där ser du aktuellt schema, väljer datum och biljettyp och betalar online.',
          },
          {
            q: 'Vad kostar det?',
            a: 'Enstaka klass 350 kr, 150 kr med egen SUP, 10-klippkort 1 000 kr, säsongspass 2026 för 1 500 kr. Bastu ingår alltid.',
          },
          {
            q: 'Hur lång är en klass?',
            a: '75 minuter inklusive paddling till och från ankringsplatsen. Räkna med ungefär två timmar på plats med incheckning, omklädning och bastu efteråt.',
          },
          {
            q: 'Vinyasa eller yin, vilken ska jag välja?',
            a: 'Vinyasa om du vill röra på dig och bränna energi. Yin om du vill landa och slappna av. Båda passar alla nivåer. Kolla schemat på Smashing Balance för att se vilken som körs när.',
          },
          {
            q: 'Behöver jag erfarenhet av yoga eller SUP?',
            a: 'Nej. Brädorna är stabila och klassen börjar med en säkerhetsgenomgång. Anpassas alltid efter de som är där.',
          },
          {
            q: 'Vad ingår i priset?',
            a: 'Bräda, paddel, flytväst, dry bag, omklädningsrum, lås till värdesaker och bastu vid sjön efter klassen. Allt utom det du har på dig.',
          },
          {
            q: 'Får jag pengarna tillbaka om jag inte kan komma?',
            a: 'Avbokningsregler hanteras av Smashing Balance. Se deras villkor på smashingbalance.se vid bokning.',
          },
          {
            q: 'Kan jag boka en hel grupp?',
            a: 'För grupper är ett privat event vanligtvis bättre. Det bokas direkt med mig på hello.yogawithcamilla@gmail.com. Se Privat SUP Yoga för mer info.',
          },
          {
            q: 'Vad händer vid dåligt väder?',
            a: 'Vid hård vind, åska eller för kallt vatten ställs klassen in. Du får besked via Smashing Balance och oftast möjlighet att boka om.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Nästa steg',
      },
      {
        type: 'paragraph',
        text: 'Se aktuellt schema och boka en klass på [Smashing Balance](https://smashingbalance.se/collections/sup-yoga). Eller läs mer om hela upplägget på sidan [SUP yoga klasser](/tjanster/sup-yoga-klasser). Är ni en grupp och vill ha det för er själva istället, kolla in [Privat SUP Yoga](/tjanster/sup-yoga).',
      },
    ],
  },
  {
    slug: 'yoga-brollopsaktivitet',
    title: 'Yoga som bröllopsaktivitet. Fler svenska par gör det.',
    metaDescription: 'Yoga som bröllopsaktivitet i Dalarna och Stockholm. Inkluderande, lugnt, minnesvärt. Jag kommer till er med allt. Från 3 000 kr.',
    publishDate: '2026-03-20',
    readingTime: '4 min',
    category: 'Bröllop & Events',
    excerpt: 'Fler brudpar väljer yoga som en del av bröllopsveckan. Inkluderande, lugnt, och gästerna pratar faktiskt om det efteråt.',
    relatedServiceHref: '/tjanster/privata-event',
    relatedServiceLabel: 'Boka privat event med yoga',
    content: [
      {
        type: 'paragraph',
        text: 'Bröllopstrender i Sverige rör sig mot meningsfulla upplevelser. Mindre pomp, mer närvaro. Vinprovning och karaoke är kvar. Men de kompletteras med aktiviteter som faktiskt ger något.'
      },
      {
        type: 'paragraph',
        text: 'Yoga som bröllopsaktivitet är ett av de bästa exemplen.'
      },
      {
        type: 'heading',
        text: 'Varför yoga funkar på bröllop'
      },
      {
        type: 'paragraph',
        text: 'Bröllop samlar människor som aldrig träffats. Yoga är en naturlig brygga. Ingen behöver kunna något. Alla åldrar och nivåer funkar. Och det skapas en gemenskap redan från första andetaget.'
      },
      {
        type: 'paragraph',
        text: 'Sen det praktiska: bröllopsveckan är stressig. Oavsett planering finns nervositet i luften. En yogaklass på morgonen, eller kvällen innan, ger brudparet och gästerna det de behöver. Ett andetag.'
      },
      {
        type: 'heading',
        text: 'Format som funkar'
      },
      {
        type: 'list',
        items: [
          'Morgonyoga för brudparet. Bara ni två, 45 minuter, innan dagen drar igång.',
          'Gäst-yoga dagen innan. Samla alla för att mötas och lugna ner sig.',
          'Utomhusyoga efter middagen. För gästerna som stannar natten.',
          'Yoga-bröllopsvecka i Dalarna. Yoga som återkommande inslag hela helgen.'
        ]
      },
      {
        type: 'heading',
        text: 'Bröllopsyoga i Dalarna'
      },
      {
        type: 'paragraph',
        text: 'Dalarna är en uppskattad bröllopsdestination. Naturskönt, lugnt. Och jag finns runt hörnet med en altan omgiven av skog. Jag kan hålla yoga på er lokation, hos mig på altanen, eller utomhus.'
      },
      {
        type: 'heading',
        text: 'Bröllopsyoga i Stockholm'
      },
      {
        type: 'paragraph',
        text: 'Jag kommer till er bröllopslokation med all utrustning. Eller hjälper till att boka en yogasal för en morgonsession.'
      },
      {
        type: 'paragraph',
        text: 'Pris: från 3 000 kr. Maila hello.yogawithcamilla@gmail.com med bröllopsdatum, plats och vad ni funderar på.'
      }
    ]
  },
  {
    slug: 'honsyoga-dalarna-goat-yoga-sverige',
    title: 'Hönsyoga i Dalarna: Sveriges motsvarighet till goat yoga (fast bättre)',
    metaDescription: 'Hönsyoga i Dalarna på altanen med mina höns runt mattorna. Vad det är, hur det skiljer sig från goat yoga, priser från 2 500 kr, och hur du bokar för grupp eller möhippa.',
    publishDate: '2026-03-24',
    readingTime: '8 min',
    category: 'Yoga & Natur',
    excerpt: 'Yoga på altanen i skogen med mina höns vandrande runt mattorna. Sveriges enda hönsyoga, bokbar maj till september. Här är hela guiden: vad det är, varför det funkar, och hur ni bokar för grupp eller möhippa.',
    relatedServiceHref: '/tjanster/honsyoga',
    relatedServiceLabel: 'Boka hönsyoga i Dalarna',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'outdoor-yoga-dalarna', label: 'Utomhusyoga i Dalarna' },
      { slug: 'yoga-mohippa-dalarna', label: 'Yoga möhippa i Dalarna' },
      { slug: 'mohippa-dalarna-aktiviteter', label: 'Möhippa i Dalarna, 7 aktiviteter' },
      { slug: 'yoga-retreat-dalarna-vs-stockholm', label: 'Yoga retreat Dalarna vs Stockholm' },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Jag har höns. De lever sina egna liv, rör sig fritt på altanen, och bryr sig inte nämnvärt om vad vi gör på mattorna. [Hönsyoga](/tjanster/honsyoga) är en riktig yogaklass på altanen i Dalarna där mina höns strövar omkring medan vi praktiserar. Det är Sveriges svar på det amerikanska "goat yoga"-fenomenet. Fast mjukare, mindre jippo, och med djur som faktiskt hör hemma på en svensk gård.'
      },
      {
        type: 'callout',
        text: 'Snabbinfo: Hönsyoga i Dalarna, 60 minuter, max 6 deltagare. Privat bokning från 2 500 kr. Säsong maj till september. Passar för grupper, möhippor, par, företag på kickoff. Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) för datum och offert.'
      },
      {
        type: 'heading',
        text: 'Vad hönsyoga faktiskt är'
      },
      {
        type: 'paragraph',
        text: 'En riktig yogaklass. Rörelse, andning, närvaro. Lett av en 500-timmars certifierad lärare (jag). Det är inte en gimmick eller en Instagram-stunt. Det är en ordentlig 60-minutersklass, fast den hålls utomhus på altanen, och hönsen är med.'
      },
      {
        type: 'paragraph',
        text: 'Hönsen interagerar inte aktivt med er. De vandrar runt, pickar, kacklar lite åt varandra. Ibland kliver någon över en matta. En gång satte sig en av dem på min rygg mitt under en nedåtgående hunden. Det är ovanligt, men det händer. Och deras närvaro skapar en mjukhet som en yogasal aldrig kan.'
      },
      {
        type: 'heading',
        text: 'Hönsyoga vs goat yoga: vad skillnaden är'
      },
      {
        type: 'paragraph',
        text: 'Goat yoga startade i USA runt 2016 och blev viralt för att getter klättrar på ryggarna av folk under nedåtgående hunden. Det är ofta högt tempo, hög volym, mycket fotografering. Roligt, men mer spektakel än yoga.'
      },
      {
        type: 'paragraph',
        text: 'Hönsyoga är motsatsen. Hönsen är mindre invasiva. De går sin egen takt. Ni får lugnet i att ha djurliv runt er utan att bli avbrutna. Det är yoga med djur, inte cirkus. För folk som vill ha naturens mjukhet, inte nyhetsvärdet.'
      },
      {
        type: 'heading',
        text: 'Varför det funkar: det som händer i kroppen när djur är med'
      },
      {
        type: 'paragraph',
        text: 'Djur tar oss in i nuet nästan omedelbart. Det är svårt att oroa sig för morgondagen när en höna precis har trampat över din matta och funderar på om din vattenflaska är ätbar. Uppmärksamheten flyttar sig utåt, och det är precis vad yoga försöker åstadkomma: en paus från det inre pratet.'
      },
      {
        type: 'paragraph',
        text: 'Därtill kommer att ni är utomhus. Tid i naturen, särskilt skogsmiljö, har i flera studier kopplats till lägre stressmarkörer och förbättrat humör (det som japanerna kallar "shinrin-yoku", skogsbad). Vi är inte i en klinisk miljö, vi gör ingen vetenskaplig studie, men kombinationen av utomhus, skog, djurliv och rörelse är svår att matcha.'
      },
      {
        type: 'heading',
        text: 'Så här ser en klass ut'
      },
      {
        type: 'paragraph',
        text: 'Ni kommer till mig. Vi samlas på altanen där jag redan har mattor, block och bolster klara. Hönsen är oftast redan där, nyfikna men inte påträngande. Jag välkomnar, presenterar hönsen vid namn (de har namn), och vi börjar med 5 minuters andning på mattan.'
      },
      {
        type: 'paragraph',
        text: 'Sen en mjuk uppmjukning. Någonstans mellan 25 och 35 minuter rörelse, vinyasa-inspirerat men utan komplicerade sekvenser. Fokus på öppna höfter, ryggens rörlighet och balans. De sista 10 minuterna är långa mjuka positioner och savasana. Hönsen vandrar som vanligt, och ingen märker när de kommer och går.'
      },
      {
        type: 'quote',
        text: 'Jag trodde det skulle vara knasigt. Men när en höna satte sig bredvid mig i savasana kände jag något jag inte känt sedan barndomen.',
        author: 'Deltagare, privat bokning augusti 2025',
      },
      {
        type: 'heading',
        text: 'Vem passar hönsyoga för'
      },
      {
        type: 'list',
        items: [
          'Grupper som vill ha en annorlunda upplevelse i Dalarna: möhippor, födelsedagar, nära vänner',
          'Företagsgrupper på kickoff eller konferens i regionen som vill bryta mönstret',
          'Par eller familjer som söker något ovanligt att göra tillsammans',
          'Yogautövare som är nyfikna på att praktisera utomhus med djur',
          'Absoluta nybörjare. Hönsen tar bort prestationskänslan.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Det passar mindre bra för personer som är rädda för fåglar eller djur i närheten, personer med allergier mot fjäderdjur, eller de som söker en intensiv fysisk träningsklass (det här är mjukare och mer meditativt).'
      },
      {
        type: 'heading',
        text: 'Priser'
      },
      {
        type: 'table',
        tableHead: ['Upplägg', 'Deltagare', 'Pris från', 'Passar för'],
        tableRows: [
          ['Privat par', '2 personer', '2 500 kr', 'Dejt, årsdag'],
          ['Liten grupp', '3 till 4 personer', '3 000 kr', 'Vänner, familj'],
          ['Större grupp', '5 till 6 personer', '3 500 kr', 'Möhippa, födelsedag'],
          ['Kombination med annat', '2 till 6 personer', 'offert', 'Yoga plus stugpaket'],
        ],
      },
      {
        type: 'paragraph',
        text: 'Priserna inkluderar 60 minuter yoga, all utrustning, och en kort fika efteråt på altanen (kaffe, te, hembakat). Alla priser exklusive moms.'
      },
      {
        type: 'heading',
        text: 'Säsong och praktiska detaljer'
      },
      {
        type: 'paragraph',
        text: 'Hönsyoga är en utomhusaktivitet och säsongen är maj till och med september. I september kan det vara svalt på morgonen, så då brukar vi börja senare på dagen. Höst och vinter: tyvärr ingen hönsyoga eftersom hönsen har inomhusperiod och altanen inte är uppvärmd.'
      },
      {
        type: 'paragraph',
        text: 'Om det regnar flyttar vi till en annan dag, eller håller en vanlig [utomhusyoga-klass](/blogg/outdoor-yoga-dalarna) utan hönsen under tak. Jag hör av mig kvällen innan om vi behöver flytta.'
      },
      {
        type: 'heading',
        text: 'Hur ni hittar hit'
      },
      {
        type: 'paragraph',
        text: 'Altanen ligger i Dalarna, cirka 2,5 timmar från Stockholm med bil eller tåg. Närmaste större orter är Borlänge, Falun och Rättvik. Jag skickar detaljerade vägbeskrivningar när bokningen är bekräftad. Flera av mina gäster kombinerar hönsyoga med en övernattning i trakten. Det finns flera bra B&B och boenden att hyra i närheten.'
      },
      {
        type: 'heading',
        text: 'Kombinera med andra aktiviteter'
      },
      {
        type: 'paragraph',
        text: 'Hönsyoga funkar utmärkt som del av en större helgupplevelse. Populära kombinationer: hönsyoga plus bastu plus middag, hönsyoga plus vandring till Styggforsen, eller för möhippor: hönsyoga plus en vanlig [yoga möhippa i Dalarna](/blogg/yoga-mohippa-dalarna) samma helg (två olika klasser, två olika stämningar). Se också [möhippa i Dalarna, 7 aktiviteter](/blogg/mohippa-dalarna-aktiviteter).'
      },
      {
        type: 'heading',
        text: 'Vanliga frågor om hönsyoga'
      },
      {
        type: 'faq',
        faqItems: [
          {
            q: 'Vad är hönsyoga?',
            a: 'En riktig yogaklass på altanen i Dalarna där frigående höns vandrar omkring medan vi praktiserar. Ledd av en certifierad yogalärare, 60 minuter, för blandad nivå. Svensk motsvarighet till amerikansk goat yoga, fast lugnare och mer naturligt.',
          },
          {
            q: 'Vad kostar hönsyoga?',
            a: 'Från 2 500 kr för ett privat par, 3 000 kr för 3 till 4 personer, 3 500 kr för 5 till 6 personer. Priserna inkluderar 60 minuter yoga, all utrustning och en kort fika efteråt.',
          },
          {
            q: 'Finns det goat yoga i Sverige?',
            a: 'Det finns något liknande i Sverige, men det är ovanligt och ofta säsongsbegränsat. Hönsyoga hos mig i Dalarna är den närmaste svenska motsvarigheten till den amerikanska trenden.',
          },
          {
            q: 'Sitter hönsen på en?',
            a: 'Ibland. Oftast inte. Mina höns är nyfikna men inte påträngande. Någon gång ibland kliver någon på en rygg under en position. Det är inte regel utan undantag. De är generellt mer intresserade av att picka i gräset.',
          },
          {
            q: 'Behöver jag vara rädd för hönsen?',
            a: 'Nej. Hönsen är vana vid människor, de sprätter inte, de är lugna och orädda. Om någon deltagare är osäker kan jag hålla hönsen i deras hägn under klassen. Bara säg till vid bokning.',
          },
          {
            q: 'Finns hönsen året runt?',
            a: 'Hönsyogasäsongen är maj till september. Under vinterhalvåret håller hönsen till inne och vi erbjuder inte klassen då. Övriga [utomhusyoga](/blogg/outdoor-yoga-dalarna)-klasser kan bokas året runt beroende på väder.',
          },
          {
            q: 'Är det hygieniskt?',
            a: 'Ja. Altanen är stor och hönsen vistas där normalt. Mattorna läggs ut precis innan klassen och rengörs efteråt. Hönsen håller sig till gräset bredvid, inte ovanpå mattorna.',
          },
          {
            q: 'Kan barn vara med?',
            a: 'Barn från cirka 10 år och uppåt som kan följa en 60-minuters yogaklass. Yngre barn blir oftast rastlösa och jagar hönsen, vilket inte är idealt för vare sig dem, er eller hönsen.',
          },
          {
            q: 'Hur många kan delta?',
            a: 'Max 6 personer per bokning. Det är en bekväm gränsstorlek för altanen och det är viktigt för djurens välmående att det inte blir för många människor samtidigt.',
          },
          {
            q: 'Hur bokar man?',
            a: 'Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med önskat datum och antal. Jag återkommer med tillgänglighet och offert. Bokning bekräftas mot Swish eller faktura.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Nästa steg'
      },
      {
        type: 'paragraph',
        text: 'Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum och antal, så återkommer jag med en konkret offert. Läs mer på [tjänstesidan för hönsyoga](/tjanster/honsyoga) eller titta på relaterade upplevelser: [utomhusyoga i Dalarna](/blogg/outdoor-yoga-dalarna) och [yoga möhippa i Dalarna](/blogg/yoga-mohippa-dalarna).'
      },
    ]
  },
  {
    slug: 'outdoor-yoga-dalarna',
    title: 'Utomhusyoga i Dalarna. Varför naturen gör praktiken bättre.',
    metaDescription: 'Utomhusyoga i Dalarna på altanen i skogen. Yoga i naturen ger något inomhusstudios inte kan. Privat bokning för grupper och events.',
    publishDate: '2026-03-25',
    readingTime: '4 min',
    category: 'Yoga & Natur',
    excerpt: 'Dalarnas skog och luft är mer än en bakgrund. De är en del av praktiken.',
    relatedServiceHref: '/tjanster/privata-event',
    relatedServiceLabel: 'Se yoga retreat & upplevelser i Dalarna',
    content: [
      {
        type: 'paragraph',
        text: 'Det finns fina yogastudios i Sverige. Och sen finns det att stå på altanen i Dalarna med granskogens doft, fågelsång och morgonljus som silar genom träden. Ingen studio kan kopiera det.'
      },
      {
        type: 'paragraph',
        text: 'Utomhusyoga är en annan upplevelse. Inte för att det är svårare. För att det är riktigare.'
      },
      {
        type: 'heading',
        text: 'Vad naturen ger yogan'
      },
      {
        type: 'paragraph',
        text: 'Forskningen är tydlig. Tid utomhus sänker kortisolet, aktiverar det parasympatiska nervsystemet och ökar närvaro. Exakt det yoga strävar mot. Kombinationen är inte bara estetisk. Den är funktionell.'
      },
      {
        type: 'paragraph',
        text: 'Utomhus är det svårare att fastna i huvudet. Vinden. Fåglarna. Känslan av trä under fötterna. Allt ger nervsystemet något att jobba med. Du tvingas vara här, nu.'
      },
      {
        type: 'heading',
        text: 'Altanen i Dalarna'
      },
      {
        type: 'paragraph',
        text: 'En stor altan omgiven av granskog. Utsikt över det öppna landskapet. Yoga här alla årstider utom regn. Även höst- och vintermorgnarna har sin magi.'
      },
      {
        type: 'paragraph',
        text: 'Det är basen för privata klasser, möhippor, retreats och äventyrpaket. Gäster nämner platsen som det de minns mest.'
      },
      {
        type: 'heading',
        text: 'Vem passar det?'
      },
      {
        type: 'paragraph',
        text: 'Alla. Anpassas för alla nivåer och alla kroppar. Enda skillnaden är kontexten. Och den spelar roll.'
      },
      {
        type: 'list',
        items: [
          'Privat klass i naturen? Boka på altanen.',
          'Dag-retreat? Se Privata Event & Yoga Retreat.',
          'Grupp? Se Privata Event & Yoga Retreat.',
          'Konferens i Dalarna? Utomhusyoga som konferensinslag.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Maila hello.yogawithcamilla@gmail.com för att boka utomhusyoga i Dalarna.'
      }
    ]
  },
  {
    slug: 'mohippa-dalarna-aktiviteter',
    title: 'Möhippa i Dalarna. 7 aktiviteter utöver det vanliga.',
    metaDescription: 'Planerar du möhippa i Dalarna? 7 aktiviteter som funkar. Yoga i skogen, hönsyoga, SUP, vandring. Boende + natur = minnesvärd helg.',
    publishDate: '2026-04-09',
    readingTime: '6 min',
    category: 'Events & Möhippa',
    excerpt: 'Dalarna är perfekt för möhippor som vill bort från stan. 7 aktiviteter som gör helgen minnesvärd som faktiskt funkar.',
    relatedServiceHref: '/tjanster/privata-event',
    relatedServiceLabel: 'Boka privat event med yoga',
    relatedPosts: [
      { slug: 'yoga-mohippa-dalarna', label: 'Yoga möhippa i Dalarna' },
      { slug: 'yoga-retreat-dalarna-vs-stockholm', label: 'Retreat Dalarna vs Stockholm' },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Allt fler grupper väljer Dalarna för möhippan. Naturen, lugnet, friheten. En helg här istället för en kväll i stan.'
      },
      {
        type: 'paragraph',
        text: 'Men vad gör man egentligen? Här är 7 aktiviteter som funkar. Testade och uppskattade.'
      },
      {
        type: 'heading',
        text: '1. Yoga på altanen'
      },
      {
        type: 'paragraph',
        text: 'Privat yogaklass i naturen. Utomhus, i skogen, fågelsång som soundtrack. Alla nivåer. Sätter stämningen för hela helgen. Jag kan komma till ert boende med all utrustning.'
      },
      {
        type: 'heading',
        text: '2. Hönsyoga'
      },
      {
        type: 'paragraph',
        text: 'Yoga på altanen, med höns som vandrar fritt runt mattorna. Det är en av de mest uppskattade upplevelserna jag erbjuder. Hönsen skapar en lätthet som gör att hela gruppen slappnar av.'
      },
      {
        type: 'heading',
        text: '3. Vandring med picknicklunch'
      },
      {
        type: 'paragraph',
        text: 'Dalarna har vandringsleder för alla nivåer. Packa en korglunch, ta en halvdagsvandring och njut av utsikten. Enkel logistik, noll kostnad (förutom maten), och en aktivitet som alla kan hantera.'
      },
      {
        type: 'heading',
        text: '4. Bastubad vid sjön'
      },
      {
        type: 'paragraph',
        text: 'Många boenden i Dalarna har bastu. Har ni en sjö i närheten blir det ett naturligt inslag. Basta, dopp, upprepa.'
      },
      {
        type: 'heading',
        text: '5. Matlagning hemma'
      },
      {
        type: 'paragraph',
        text: 'Skippa restaurangen och laga mat tillsammans istället. Köp lokala råvaror, duka fint och gör middagen till en del av upplevelsen. Det blir både billigare och mer personligt.'
      },
      {
        type: 'heading',
        text: '6. Paddling eller kanot'
      },
      {
        type: 'paragraph',
        text: 'Dalarna har gott om sjöar och åar. Hyr kanoter för en halvdag på vattnet. Lugnt tempo, bra för samtal och skratt. Ingen erfarenhet krävs.'
      },
      {
        type: 'heading',
        text: '7. Trail run + yoga-kombo'
      },
      {
        type: 'paragraph',
        text: 'För den aktiva gruppen: löptur i skogen följt av yogaklass. Jag erbjuder trail run + yoga som paket. Perfekt om gruppen gillar att röra på sig.'
      },
      {
        type: 'heading',
        text: 'Planera er möhippa i Dalarna'
      },
      {
        type: 'paragraph',
        text: 'Det bästa med en möhippa i Dalarna är att programmet kan vara enkelt. Boende + natur + en eller två organiserade aktiviteter = en helg som alla minns. Vill ni ha yoga som en del av det? Hör av er på hello.yogawithcamilla@gmail.com.'
      }
    ]
  },
  {
    slug: 'yoga-retreat-dalarna-vs-stockholm',
    title: 'Yoga retreat i Dalarna vs Stockholm. Var ska du boka?',
    metaDescription: 'Yoga retreat i Dalarna vs Stockholm. Natur vs stad, pris, upplevelse. Tips från en yogalärare som erbjuder båda.',
    publishDate: '2026-04-09',
    readingTime: '5 min',
    category: 'Retreats & Upplevelser',
    excerpt: 'Funderar du på yoga retreat men vet inte om du ska välja Dalarna eller Stockholm? Här jämför jag de två och hjälper dig välja.',
    relatedServiceHref: '/tjanster/privata-event',
    relatedServiceLabel: 'Boka yoga retreat i Dalarna',
    relatedPosts: [
      { slug: 'outdoor-yoga-dalarna', label: 'Utomhusyoga i Dalarna' },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Du vill ha ett avbrott. Tid för dig själv, yoga, natur, och kanske några timmars tystnad utan att behöva förklara varför. Du har landat i att en retreat vore det perfekta. Men var?'
      },
      {
        type: 'paragraph',
        text: 'Dalarna och Stockholm erbjuder helt olika retreat-upplevelser. Här jämför jag de två så att du kan välja det som faktiskt passar dig.'
      },
      {
        type: 'heading',
        text: 'Dalarna: skogen, lugnet och tystnaden'
      },
      {
        type: 'paragraph',
        text: 'En yoga retreat i Dalarna är en naturupplevelse. Yoga på altanen omgiven av granskog, fågelsång istället för trafik, och en avskildhet som gör det enkelt att stänga av. Här handlar retreaten inte bara om yogan. Det är platsen i sig som gör jobbet.'
      },
      {
        type: 'paragraph',
        text: 'Jag erbjuder yoga retreats i Dalarna: en halvdag eller heldag med yoga, andningsövningar, vandring eller trail run och tid i naturen. Perfekt för dig som vill ha retreat-känslan utan att ta en hel vecka ledigt.'
      },
      {
        type: 'heading',
        text: 'Stockholm: tillgänglighet och stad'
      },
      {
        type: 'paragraph',
        text: 'En retreat i Stockholm passar dig som inte vill resa. Du kan ha yoga på morgonen och vara hemma till middag. Det är bekvämt, och det finns bra lokaler och parker att praktisera i.'
      },
      {
        type: 'paragraph',
        text: 'Nackdelen? Du får aldrig samma avskildhet. Stadsmiljön är kvar runt hörnet, och den mentala brytningen blir inte lika stark som när du åker bort.'
      },
      {
        type: 'heading',
        text: 'Vad passar dig?'
      },
      {
        type: 'list',
        items: [
          'Vill du koppla av totalt? → Dalarna. Naturen gör halva jobbet åt dig.',
          'Vill du ha en retreat utan övernattning? → Stockholm funkar bra som halv- eller heldagsupplägg.',
          'Är ni en grupp (möhippa, företag)? → Dalarna med eget boende ger den starkaste upplevelsen.',
          'Har du ont om tid? → Stockholm. Inga resor, flexibla tider.',
          'Budget? → Dalarna kan vara billigare om ni delar ett boende. Stockholm kräver ofta salsuthyrning.'
        ]
      },
      {
        type: 'heading',
        text: 'Min rekommendation'
      },
      {
        type: 'paragraph',
        text: 'Om du har möjlighet att ta dig till Dalarna, gör det. Kombinationen av yoga och natur ger en effekt som en stadsretreat inte riktigt matchar. Men om tid eller logistik gör det svårt, så erbjuder jag privata yogaklasser i Stockholm som ger retreat-känsla utan resan.'
      },
      {
        type: 'paragraph',
        text: 'Kontakta hello.yogawithcamilla@gmail.com med dina önskemål. Jag sätter ihop ett förslag som funkar för dig.'
      }
    ]
  },
  {
    slug: 'foretagsyoga-vad-ingar-och-kostar',
    title: 'Företagsyoga i Stockholm: priser, upplägg och vad som faktiskt ingår',
    metaDescription: 'Komplett guide till företagsyoga i Stockholm. Priser från 1 000 kr/klass, format (morgon, lunch, event), vad som ingår, friskvårdsbidrag och svar på vanliga frågor.',
    publishDate: '2026-04-09',
    readingTime: '10 min',
    category: 'Företag & Konferens',
    excerpt: 'Allt du behöver veta innan ni bokar företagsyoga i Stockholm. Priser, format, friskvårdsbidrag, lokal, och de frågor alla HR-ansvariga ställer till mig först.',
    relatedServiceHref: '/tjanster/foretagsyoga',
    relatedServiceLabel: 'Boka företagsyoga',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'konferensyoga-teambuilding', label: 'Konferensyoga, varför 60 min yoga slår ännu en teambuilding' },
      { slug: 'sommaravslutning-aktiviteter-stockholm', label: '7 idéer för sommaravslutning i Stockholm' },
      { slug: 'teambuilding-aktiviteter-stockholm', label: '7 teambuilding-aktiviteter i Stockholm' },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Du har fått i uppdrag att hitta en friskvårdsaktivitet som faktiskt funkar. Eller så planeras en konferens och ni vill ha något bättre än ännu en workshop om "samarbete". [Företagsyoga](/tjanster/foretagsyoga) dyker upp som alternativ. Men vad kostar det egentligen, vad ingår, och funkar det för ett team där hälften aldrig lagt en yogamatta på golvet förut? Här är en rak genomgång. Inga yogafraser, bara det ni behöver för att fatta ett beslut.'
      },
      {
        type: 'callout',
        text: 'Snabbversionen: Företagsyoga i Stockholm från 1 000 kr per klass (30 min). Jag kommer till ert kontor med mattor och block, leder klassen, och ni behöver bara ett någorlunda fritt golvutrymme. Yoga är en godkänd friskvårdsaktivitet enligt Skatteverket. Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) för offert inom ett dygn.'
      },
      {
        type: 'heading',
        text: 'Vad är företagsyoga?'
      },
      {
        type: 'paragraph',
        text: 'Företagsyoga är yogaklasser som hålls på arbetsplatsen eller i samband med ett företagsevent. En certifierad yogalärare kommer till er med utrustning, leder en klass anpassad efter gruppens nivå, och ni behöver inte tänka på något annat än att dyka upp. Det fungerar både som återkommande friskvård och som enstaka inslag på konferenser, kickoffer, sommaravslutningar eller after works.'
      },
      {
        type: 'paragraph',
        text: 'Till skillnad från gymkort eller appar bokar ni en grej åt hela teamet samtidigt. Det gör det möjligt för folk som aldrig skulle gå till en yogastudio på egen hand att testa. Och det är ofta just de som behöver det mest.'
      },
      {
        type: 'heading',
        text: 'Varför företag väljer yoga framför andra friskvårdsaktiviteter'
      },
      {
        type: 'paragraph',
        text: 'Det finns praktiska skäl. Yoga kräver inte ombyte till träningskläder (en mjuk byxa och t-shirt räcker), ingen dusch efter, och ingen särskild lokal. Ett konferensrum med undanflyttade bord funkar. Det passar för alla kroppstyper och kondition, till skillnad från en padelturnering där halva teamet sitter som åskådare.'
      },
      {
        type: 'paragraph',
        text: 'Sen finns det något som är svårare att sätta siffror på, men lätt att känna i rummet efter en klass. Folk pratar med varandra annorlunda. En tyst kvart där alla andas tillsammans sänker tempot på ett sätt som en pingisturnering inte gör. För ett team som suttit i Teams-möten hela dagen är det ofta precis det som saknas.'
      },
      {
        type: 'heading',
        text: 'Format att välja mellan'
      },
      {
        type: 'paragraph',
        text: 'De vanligaste uppläggen. Välj det som passar er vecka bäst, eller kombinera dem.'
      },
      {
        type: 'subheading',
        text: 'Morgonyoga (07:30 till 08:30)'
      },
      {
        type: 'paragraph',
        text: 'Funkar för team som startar dagen gemensamt. 30 till 60 minuter yoga innan arbetet sätter igång. Passar särskilt om ni har kontorsyoga som återkommande friskvårdsförmån och vill att folk kan räkna in det i arbetsdagen utan att behöva boka om möten.'
      },
      {
        type: 'subheading',
        text: 'Lunchyoga (12:00 till 12:45)'
      },
      {
        type: 'paragraph',
        text: 'Det enklaste att införa. 45 minuter över lunchen, inklusive ombyte. Klassen är mjukare eftersom folk går tillbaka till skrivbordet efteråt. Fokus på axlar, höfter och rygg som stelnar av stillasittande. Populärast bland mina fasta företagskunder.'
      },
      {
        type: 'subheading',
        text: 'Eftermiddags- eller after work-yoga (16:00 till 17:30)'
      },
      {
        type: 'paragraph',
        text: 'Perfekt som markering mellan arbete och kväll. 60 minuter som är tyngre på stretching, långa positioner och andningsarbete. Fungerar extra bra på fredagar, och som återkommande upplägg för team med långa skärmveckor.'
      },
      {
        type: 'subheading',
        text: 'Konferens- och event-yoga'
      },
      {
        type: 'paragraph',
        text: 'En engångsklass som del av en kickoff, konferens, sommaravslutning eller kundkväll. Längd och format skräddarsys. Allt från en 20-minuters "andningsklass" mellan föreläsningar, till en full 90-minuters outdoor-klass med efterföljande middag. Prissätts individuellt eftersom det beror på plats, antal deltagare och tidpunkt.'
      },
      {
        type: 'subheading',
        text: 'Hybrid (live plus inspelat)'
      },
      {
        type: 'paragraph',
        text: 'För team med kontor på flera orter eller remote-anställda. Jag leder live från ert Stockholmskontor medan distanskollegor följer med via Zoom eller Teams. Samma pris som på plats, ni behöver bara en kamera och en projektor.'
      },
      {
        type: 'heading',
        text: 'Priser'
      },
      {
        type: 'paragraph',
        text: 'Priser för regelbundna bokningar på kontor i Stockholm. Alla priser är exklusive moms. Resa till ert kontor i Stockholm ingår.'
      },
      {
        type: 'table',
        tableHead: ['Format', 'Längd', 'Pris per klass', 'Rekommenderat'],
        tableRows: [
          ['Morgonyoga', '30 min', 'från 1 000 kr', 'Snabb reset, innan arbetsdagen'],
          ['Lunchyoga', '45 min', 'från 1 200 kr', 'Regelbundet, 1 gång per vecka'],
          ['Fullängd', '60 min', 'från 1 500 kr', 'After work, djupare klass'],
          ['Yin / restorativ', '75 min', 'från 1 800 kr', 'Fredagseftermiddagar, stressade team'],
          ['Event / konferens', '30 till 90 min', 'offert', 'Enstaka tillfällen, större grupper'],
        ],
      },
      {
        type: 'paragraph',
        text: 'Priserna ovan gäller vid återkommande bokning, alltså minst en gång i veckan, månadsvis. Enstaka klasser och event prissätts individuellt eftersom det påverkas av plats, antal deltagare, tid på dygnet och om det innefattar kringtjänster (andningsworkshop, föreläsning, outdoor-miljö).'
      },
      {
        type: 'paragraph',
        text: 'Rabatt ges vid terminsbokning (10 tillfällen eller fler) och större volymavtal. Hör av er med ungefärliga siffror så räknar jag.'
      },
      {
        type: 'heading',
        text: 'Vad ingår, och vad ingår inte'
      },
      {
        type: 'subheading',
        text: 'Ingår i priset'
      },
      {
        type: 'list',
        items: [
          '500-timmars certifierad yogalärare (Yoga Alliance)',
          'Yogamattor och block för upp till 20 deltagare',
          'Klassen anpassas efter gruppens nivå. Ingen förkunskap krävs.',
          'Undervisning på engelska',
          'Resa och uppriggning (jag är på plats 10 till 15 min innan start)',
          'Uppföljning efter första klassen för att finjustera upplägget',
        ],
      },
      {
        type: 'subheading',
        text: 'Ingår inte'
      },
      {
        type: 'list',
        items: [
          'Egen lokal eller lokalhyra. Ni står för utrymmet.',
          'Handdukar eller vatten till deltagare',
          'Specialutrustning för yin / restorativ (bolster) över 10 personer. Tillkommer om ni vill ha det.',
          'Resa utanför Stockholms kommun (Dalarna, övriga Sverige). Tillkommer enligt faktisk kostnad.',
        ],
      },
      {
        type: 'heading',
        text: 'Hur det funkar i praktiken'
      },
      {
        type: 'paragraph',
        text: 'Första gången ni bokar: vi mejlar fram datum, form och antal. Några dagar innan skickar jag en kort anvisning till era deltagare (kläder, vad som är bra att veta, inget mer) som ni vidarebefordrar eller klistrar in i mötesinbjudan. Jag kommer 10 till 15 minuter innan start, flyttar undan det som behöver flyttas, lägger ut mattor. Leder klassen. Plockar ihop efteråt. Ni gör ingenting.'
      },
      {
        type: 'paragraph',
        text: 'De flesta företag börjar med en enstaka klass eller fyra veckors provperiod innan de går över till återkommande bokning. Det är rimligt. Man kan inte veta om det passar er kultur förrän ni testat.'
      },
      {
        type: 'heading',
        text: 'Lokalen: krav och vad som faktiskt funkar'
      },
      {
        type: 'paragraph',
        text: 'Ni behöver ett utrymme som rymmer en matta per person med armlängd emellan. För 10 personer räcker ett konferensrum på 25 till 30 kvm där borden kan flyttas åt sidan. För 20 personer ett större rum eller öppet lounge-utrymme. Takterrass eller innergård på sommaren är fantastiskt. Jag tar med yttermattor om underlaget är ojämnt.'
      },
      {
        type: 'paragraph',
        text: 'Saker som ofta fungerar bra: tomma konferensrum, matsalar, receptionsytor efter stängning, takterrasser, wellness-rum. Saker som inte fungerar: rum under 15 kvm, golv med fast matta (svettigt och svårt att städa), utrymmen med mötesbord som är fastskruvade.'
      },
      {
        type: 'heading',
        text: 'Företagsyoga som friskvårdsförmån'
      },
      {
        type: 'paragraph',
        text: 'Yoga är en godkänd friskvårdsaktivitet enligt Skatteverket. Det innebär att ni kan betala det med friskvårdsbidraget (upp till 5 000 kr per anställd och år, skattefritt) eller erbjuda det som friskvård direkt på kontoret. De flesta av mina företagskunder betalar klassen som tjänst och räknar in det som en del av företagshälsan eller personalvården, inte via individuella friskvårdsbidrag. Prata med er ekonomi- eller HR-ansvarig om vad som passar er struktur bäst.'
      },
      {
        type: 'paragraph',
        text: 'En sak värd att notera: friskvård på arbetsplatsen är betydligt mer jämlikt än individuella bidrag. Alla får tillgång, inte bara de som redan tränar och vet hur man använder ett friskvårdsbidrag.'
      },
      {
        type: 'heading',
        text: 'Vanliga invändningar (och hur vi brukar lösa dem)'
      },
      {
        type: 'subheading',
        text: '"Vi har ingen på teamet som gjort yoga förut"'
      },
      {
        type: 'paragraph',
        text: 'Bra, det är precis målgruppen. Företagsyoga är inte flow-yoga som de ni sett på Instagram. Det är enkla rörelser, anpassade efter gruppen, inga avancerade positioner. Första gången är alltid lite valhänt. Andra gången är det normalt.'
      },
      {
        type: 'subheading',
        text: '"Teamet är splittrat mellan kontor och remote"'
      },
      {
        type: 'paragraph',
        text: 'Hybridformatet funkar bra. Jag leder live på kontoret och resten följer via Zoom. Eller så bokar ni en fast kontorsklass och jag gör en separat distansklass för remote-kollegor på en annan tid.'
      },
      {
        type: 'subheading',
        text: '"Vi har bara 30 minuter"'
      },
      {
        type: 'paragraph',
        text: 'Det räcker. En 30-minutersklass är designad för att vara koncentrerad. Ingen uppmjukning med pratstund, direkt in i andningen och rörelsen, avslutning med två minuter vila. Fungerar särskilt bra över lunchen när folk har tiden avsatt ändå.'
      },
      {
        type: 'subheading',
        text: '"Moms på företagsyoga?"'
      },
      {
        type: 'paragraph',
        text: 'Företagsyoga som tjänst på plats faktureras i regel med 25 procent moms, eftersom det är en tjänst som företaget köper, inte en tränings- eller idrottsanläggning. Fråga er redovisningskonsult om hur ni bokför det. Alla mina offerter specificerar momsen separat.'
      },
      {
        type: 'heading',
        text: 'Kombinera med andra aktiviteter'
      },
      {
        type: 'paragraph',
        text: 'Yoga funkar som egen återkommande aktivitet, men många bokar den som del av större event. Populära kombinationer: yoga plus gemensam lunch (halvdagsevent), yoga plus [SUP yoga vid Sickla](/tjanster/sup-yoga) (sommaravslutning med vatten), yoga plus skogspromenad plus middag (konferens i Dalarna).'
      },
      {
        type: 'paragraph',
        text: 'För idéer till sommaravslutningar, kickoffer och teambuilding finns mer läsning i [7 idéer för sommaravslutning i Stockholm](/blogg/sommaravslutning-aktiviteter-stockholm) och guiden till [teambuilding i Stockholm](/blogg/teambuilding-aktiviteter-stockholm).'
      },
      {
        type: 'heading',
        text: 'Företagsyoga i Dalarna och på konferenser'
      },
      {
        type: 'paragraph',
        text: 'Håller ni konferens eller kickoff i Dalarna? Jag håller yoga på er konferensanläggning, ert boende, eller utomhus på altanen i skogen. En utomhusklass med gryningsljus och fågelljud slår de flesta konferenssalar i effekt, särskilt på dag två av en tredagars, när alla är stela av att sitta. Resa debiteras enligt faktiskt utlägg (tåg eller milersättning), ofta 1 500 till 2 500 kr extra.'
      },
      {
        type: 'heading',
        text: 'Så här bokar du, steg för steg'
      },
      {
        type: 'list',
        items: [
          '1. Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum (eller önskad frekvens), ungefärligt antal deltagare, plats och format.',
          '2. Jag återkommer med tillgänglighet, förslag på upplägg och offert.',
          '3. Ni bokar datum och jag skickar en kort anvisning till era deltagare att vidarebefordra.',
          '4. Jag kommer, leder, plockar ihop. Faktura skickas månadsvis.',
        ],
      },
      {
        type: 'quote',
        text: 'Jag ville inte bli bra på yoga. Jag ville bara att måndagsmorgnarna skulle kännas mindre hårda.',
        author: 'HR-ansvarig, ett av mina tech-företag i Stockholm',
      },
      {
        type: 'heading',
        text: 'Vanliga frågor om företagsyoga'
      },
      {
        type: 'faq',
        faqItems: [
          {
            q: 'Vad kostar företagsyoga i Stockholm?',
            a: 'Företagsyoga hos mig kostar från 1 000 kr per 30-minutersklass vid regelbunden bokning på kontor i Stockholm. En 45-minutersklass kostar från 1 200 kr och en 60-minutersklass från 1 500 kr. Konferens- och eventyoga prissätts individuellt. Alla priser exklusive moms.',
          },
          {
            q: 'Hur många minst respektive max deltagare?',
            a: 'Det finns ingen minimigräns. Passet går att hålla även för 3 till 5 personer. Max är 20 deltagare med min utrustning. Större grupper går att lösa men kräver att vi pratar om lokal och eventuellt extra utrustning.',
          },
          {
            q: 'Räknas företagsyoga som friskvårdsförmån?',
            a: 'Ja. Yoga finns på Skatteverkets lista över godkända friskvårdsaktiviteter. Företag kan antingen betala som personalvård direkt (utan att dra från individuella friskvårdsbidrag) eller låta anställda använda sitt friskvårdsbidrag om klassen debiteras per deltagare.',
          },
          {
            q: 'Behöver deltagarna yoga-erfarenhet?',
            a: 'Nej. Företagsyoga är designat för blandad nivå, inklusive personer som aldrig gjort yoga. Klassen anpassas efter gruppen och inga avancerade positioner används. De flesta av mina företagskunder är team där majoriteten aldrig öppnat en yogamatta innan första klassen.',
          },
          {
            q: 'Vilken lokal behövs?',
            a: 'Ett utrymme som rymmer en yogamatta per person med armlängd emellan. För 10 personer räcker ett rum på 25 till 30 kvm. Konferensrum med undanflyttade bord, tomma loungeytor, matsalar eller takterrass funkar lika bra.',
          },
          {
            q: 'Vad ska deltagarna ha på sig?',
            a: 'Vanliga mjuka byxor och t-shirt. Inga speciella yogakläder krävs. Ombyte är valfritt. De flesta lunchyoga-deltagare byter om i 2 minuter innan och tillbaka efter, eller behåller samma kläder hela klassen.',
          },
          {
            q: 'Hur lång uppsägningstid har ni på återkommande bokningar?',
            a: 'Två veckor. Man binder sig inte vid terminen. Vill ni pausa sommaren eller avsluta helt så räcker det med ett mejl 14 dagar innan nästa klass.',
          },
          {
            q: 'Kan ni hålla klassen på engelska?',
            a: 'Ja, undervisningen hålls alltid på engelska. Jag är från Australien. Klassen går utmärkt att följa för svensktalande deltagare, även de utan yogaerfarenhet.',
          },
          {
            q: 'Går det att boka enstaka tillfällen för event?',
            a: 'Absolut. Många kunder bokar enstaka klasser för kickoff, konferens, sommaravslutning eller kundkväll. Kontakta mig för offert. Priset beror på antal deltagare, plats och tid.',
          },
          {
            q: 'Vad händer om jag eller deltagare är sjuka?',
            a: 'Avbokning fram till 24 timmar innan klassen är kostnadsfri. Enstaka frånvaro från deltagare i ett gruppupplägg påverkar inte priset. Ni betalar för klassen, inte per person.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Nästa steg'
      },
      {
        type: 'paragraph',
        text: 'Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum, antal deltagare, plats och typ av event. Jag återkommer med tillgänglighet och offert. Ni kan också läsa mer på tjänstesidan för [företagsyoga](/tjanster/foretagsyoga) eller börja med en 30-minuters provklass om ni vill testa innan ni bestämmer er för ett längre upplägg.'
      },
    ]
  },
  {
    slug: 'mohippa-aktiviteter-stockholm',
    title: '6 möhippa-aktiviteter i Stockholm du inte tänkt på',
    metaDescription: 'Planerar du möhippa i Stockholm? Här är 6 aktiviteter som faktiskt funkar för hela gänget, från SUP yoga med bastu till skärgårdstur och vinprovning.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Events & Möhippa',
    excerpt: 'Ska ni fira möhippa i Stockholm och vill ha något mer minnesvärt än en bar-crawl? Här är 6 aktiviteter som funkar oavsett mix i gänget.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Boka privat SUP yoga',
    relatedPosts: [
      { slug: 'yoga-mohippa-dalarna', label: 'Yoga möhippa i Dalarna' },
      { slug: 'mohippa-dalarna-aktiviteter', label: 'Möhippa i Dalarna, 7 aktiviteter' },
    ],
    content: [
      { type: 'paragraph', text: 'Stockholm är en fantastisk stad för möhippa, men också en lätt stad att slentrian-planera. Prosecco-frukost, spa, krogen, hem. Inget fel med formatet, men gänget kommer minnas det som vilken helg som helst. Det som gör en möhippa minnesvärd är sällan budgeten eller bilden på Instagram. Det är att ni gör något tillsammans som har en gemensam fokuspunkt, så det är okej att en är gravid, en är hungover och en flugit in samma morgon. Här är sex aktiviteter i Stockholm som funkar oavsett mix.' },
      { type: 'heading', text: '1. Privat SUP yoga och bastu vid Sickla Strand' },
      { type: 'paragraph', text: 'Yoga på ett paddleboard låter lite galet, och det är precis det som gör det så bra för möhippa. Alla skrattar, ingen behöver vara på, och ingen behöver kunna yoga sedan tidigare. Brädorna är breda och stabila, och bastun vid vattnet ingår i varje bokning så det finns en naturlig övergång från aktiv klass till att faktiskt prata. Vinyasa eller yin, ni väljer.' },
      { type: 'paragraph', text: 'Sickla Strand i Nacka, centralt och lätt att nå med tunnelbana. Vanligtvis 3 till 10 personer, större grupper på förfrågan. Från 500 kr per person. Klassen leds av mig, plats och utrustning kommer från Smashing Balance. Trail run i Nacka, tennis, vattencyklar eller mat på plats kan läggas till bokningen.' },
      { type: 'heading', text: '2. Privat skärgårdsbåt med skeppare' },
      { type: 'paragraph', text: 'Stockholms skärgård är ett av världens finaste naturområden och enda sättet att se den ordentligt som grupp är från vattnet. Strandrederi hyr ut båtar med skeppare för dagen, ni tar med mat och dryck eller beställer ombord. Kanebo Event är alternativet för större gäng, S/S Blidösund tar upp till 110 personer. För en snabbare variant med fartvind i håret kör RIB Stockholm 2 timmar upp till heldag. Boka tidigt, de bästa båtarna går snabbt under juni och augusti.' },
      { type: 'heading', text: '3. Matlagningskurs tillsammans' },
      { type: 'paragraph', text: 'Matlagning funkar för möhippa av en enkel anledning, alla har något att göra med händerna, så ingen behöver vara på i sig själv. AVEQIA är det klassiska valet i Stockholm, 10 till 140 personer i privata köksrum med kockar som guidar genom en tre- eller fyrarätters meny. Inget förkunskap behövs. Swedish Taste på Kungsholmen är det mindre, mer intima alternativet med säsongsmenyer och vinkurser, närmare en middag med vänner än ett event. Kolla vad bruden älskar att äta och välj därefter.' },
      { type: 'heading', text: '4. Vinprovning eller bubbelprovning' },
      { type: 'paragraph', text: 'Grus Grus i Vasastan tar emot privata grupper och bokningar för provningar med fokus på naturliga och småskaliga viner. Vill ni ha något mer skräddarsytt och utan att lämna gruppen drivs Nolea av en WSET-3-sommelier som kommer till er lägenhet, en vinkällare på Östermalm eller en jägarstuga i Enskede. 1,5 till 2 timmar från runt 5 000 kr. Funkar bäst som lugn bookend efter en mer aktiv förmiddag, inte som dagens peak.' },
      { type: 'heading', text: '5. Cocktailkurs med Bartendrr' },
      { type: 'paragraph', text: 'Bartendrr kommer till er lägenhet eller Airbnb med bar, glas, råvaror och is, och guidar gruppen genom två till tre signaturdrinkar över 1,5 till 2 timmar. Ingen behöver ha skakat en drink förut. Socialt lågt insteg, alla är med direkt, konversationen får ett naturligt fokus utan att någon behöver dra den. Lägg en middag efteråt så är kvällen i princip planerad.' },
      { type: 'heading', text: '6. Spa med privat avdelning' },
      { type: 'paragraph', text: 'Sparadiset på Kungsholmen och Stockholm Spa & Hälsostudio erbjuder båda privata avdelningar ni bokar för er grupp. Jacuzzi, bastu, behandlingar, och ingen främling att stöta på i omklädningsrummet. 50 minuter utanför stan har Smådalarö Gård Sveriges enda grupbehandlingsrum, 4 till 8 gäster över två timmar. Spa funkar bäst som finish efter en mer aktiv förmiddag, inte som hela dagens stomme, då blir det för lågmält.' },
      { type: 'subheading', text: 'Boka möhippan' },
      { type: 'callout', text: 'Privat SUP yoga och bastu bokar ni direkt via mig på [yogawithcamilla.se/tjanster/sup-yoga](/tjanster/sup-yoga). Med resten av listan har jag inga avtal, det är bara aktiviteterna jag själv skulle välja för en möhippa i Stockholm. Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum och gruppstorlek för offert.' },
    ]
  },
  {
    slug: 'hen-party-ideas-stockholm',
    title: '5 Bachelorette Party Ideas in Stockholm',
    metaDescription: 'Planning a bachelorette in Stockholm? 5 ideas that absorb the mix of energies in a real group, from private SUP yoga and sauna to archipelago boats and cocktail masterclasses.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Events & Möhippa',
    excerpt: 'Stockholm is one of the best cities in the world for a bachelorette party, and one of the easiest to default-plan. Here are five Stockholm picks that work for the mix of energies in a real group.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Book private SUP yoga and sauna',
    relatedPosts: [
      { slug: 'mohippa-aktiviteter-stockholm', label: 'Möhippa i Stockholm, 7 aktiviteter' },
    ],
    content: [
      { type: 'paragraph', text: 'Stockholm is one of the best cities in the world for a bachelorette party, and also one of the easiest to default-plan. Brunch, spa, dinner, bar. Nothing wrong with that loop, but most groups walk away remembering it as a good weekend, not the bachelorette. What turns a bachelorette into something the bride still talks about a year later isn\'t the budget or the Instagram angles. It\'s choosing activities that absorb the mix of energies in a real group: the pregnant one, the hungover one, the shy plus-one. Here are five Stockholm options that earn that.' },
      { type: 'heading', text: '1. Private SUP yoga and sauna at Sickla Strand' },
      { type: 'paragraph', text: 'Yoga on a paddleboard sounds slightly mad, and that is exactly why it works for a bachelorette. Everyone laughs, no one has to perform, and nobody needs prior yoga experience. The boards are wide and stable, the whole session is taught in English, and a lakeside sauna is built into every booking so there is a natural cool-down to actually talk afterwards. Vinyasa or yin, you pick.' },
      { type: 'paragraph', text: 'Sickla Strand in Nacka, just outside central Stockholm and easy to reach by tunnelbana. Usually 3 to 10 people, larger groups on request. From 500 kr per person. Led by me, with venue and equipment provided by Smashing Balance. Add-ons: trail running in Nacka, tennis, water bikes or food on site.' },
      { type: 'heading', text: '2. Private archipelago boat with a skipper' },
      { type: 'paragraph', text: 'Stockholm\'s archipelago is 30,000 islands, and the only way to see it properly as a group is from the water. Strandrederi rents skippered boats by the day, set up for groups with food and drink on board. Kanebo Event runs larger boats, S/S Blidösund seats 110 if you have a bigger crew. RIB Stockholm is the option if you want speed over calm, 2-hour to full-day tours that put you further out in less time. Book early, June and August fill up fast.' },
      { type: 'heading', text: '3. Swedish cooking class at AVEQIA' },
      { type: 'paragraph', text: 'Cooking works for bachelorettes because everyone has something to do with their hands, which takes the pressure off having to be "on". AVEQIA is the default for private groups in Stockholm, 10 to 140 people in private kitchen-dining rooms with a three- or four-course menu guided by chefs. No one needs to know how to cook beforehand. Swedish Taste in Kungsholmen runs a smaller, more intimate version with seasonal menus and wine courses if you want something closer to a dinner party than an event.' },
      { type: 'heading', text: '4. Cocktail masterclass with Bartendrr or Moyagi' },
      { type: 'paragraph', text: 'Bartendrr brings the bar to you, full equipment, ingredients, ice, glassware, and a bartender who walks the group through two or three signature cocktails over 1.5 to 2 hours. Low social cost of entry, everyone has a drink in their hand within ten minutes. Moyagi is the venue alternative if you would rather not host, their masterclass pairs cocktail craft with an Asian sharing menu in a hidden bar with karaoke rooms next door if the night escalates.' },
      { type: 'heading', text: '5. Wine tasting with Grus Grus or Nolea' },
      { type: 'paragraph', text: 'Grus Grus in Vasastan (not Gamla Stan, despite the cobblestone-friendly name) takes private group bookings and tastings, focused on natural and small-producer wines. If you want something more tailored that comes to you, Nolea is run by a WSET-3 sommelier and will host at your Airbnb, a wine cellar in Östermalm, or a hunter\'s cabin in Enskede. 1.5 to 2 hours from around 5 000 SEK. Best used as a calm bookend to a more active morning, not the peak of the day.' },
      { type: 'subheading', text: 'Booking your bachelorette' },
      { type: 'callout', text: 'Private SUP yoga and sauna is bookable directly through me at [yogawithcamilla.se/tjanster/sup-yoga](/tjanster/sup-yoga). I have no partnerships with the others on this list, they are just the picks I would actually hand to a friend planning a bachelorette in Stockholm. Email [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) with your dates and group size for a quote.' },
    ]
  },
  {
    slug: 'sommaravslutning-aktiviteter-stockholm',
    title: '7 idéer för sommaravslutning i Stockholm',
    metaDescription: 'Planerar du sommaravslutning med jobbet i Stockholm? Här är 7 idéer, från privat SUP yoga till skärgårdsbåt och kajakpaddling.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Företag & Konferens',
    excerpt: 'Sommaren är snart här och det är dags att belöna teamet. Här är 7 idéer för sommaravslutning i Stockholm, för grupper som vill göra något minnesvärt.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Boka privat SUP yoga för ert team',
    relatedPosts: [
      { slug: 'konferensyoga-teambuilding', label: 'Konferensyoga, varför 60 minuter yoga slår teambuilding' },
      { slug: 'foretagsyoga-vad-ingar-och-kostar', label: 'Företagsyoga, vad ingår och kostar?' },
    ],
    content: [
      { type: 'paragraph', text: 'Sommaravslutningen är ett av årets viktigaste tillfällen för ett team. Inte för att det står i någon HR-handbok, utan för att det är en av få gånger ni faktiskt stannar upp tillsammans. Firar det ni gjort. Andas ut lite. Här är sju idéer som funkar.' },
      { type: 'heading', text: '1. Privat SUP yoga vid Sickla Strand' },
      { type: 'paragraph', text: 'Yoga på paddleboard vid Sickla Strand är en upplevelse som ingen glömmer. En guidad yogasekvens på vattnet, vinyasa eller yin. Avkopplande, roligt och lite utmanande på samma gång.' },
      { type: 'paragraph', text: 'Ingen förkunskap krävs. Vanligtvis 3 till 10 personer, större grupper på förfrågan. Från 500 kr per person. Centralt i Sickla, enkelt att nå med tunnelbana. Klassen leds av mig, plats och utrustning kommer från Smashing Balance. Lägg till bastu vid sjön, trail run i Nacka, tennis eller mat på plats om ni vill bygga ut dagen.' },
      { type: 'heading', text: '2. Skärgårdstur med charterbåt' },
      { type: 'paragraph', text: 'Stockholm har 30 000 öar och sommaren är den enda tiden på året man faktiskt ser dem. Strandrederi hyr ut skärgårdsbåtar med skeppare för hel- eller halvdag, bra för kickoffer och sommaravslutningar där ni vill ha mat, dryck och utrymme ombord. För större grupper kör Kanebo Event båtar som tar upp till 110 gäster. RIB Stockholm är alternativet om ni vill ha fart snarare än lugn, 2 timmar till hel dag.' },
      { type: 'heading', text: '3. Matlagning hos AVEQIA' },
      { type: 'paragraph', text: 'Att laga mat tillsammans är ett av de bästa sätten att få ett team att samarbeta utan att det känns som en samarbetsövning. AVEQIA i centrala Stockholm tar grupper från 10 till 140 personer, privata köksrum och kockar som guidar er genom en tre- eller fyrarätters meny. Alla är inkluderade, ingen behöver kunna laga mat innan.' },
      { type: 'heading', text: '4. Vattencyklar och kajak med Smashing Balance' },
      { type: 'paragraph', text: 'Stockholm är omringat av vatten och de flesta team kommer aldrig ut på det. Smashing Balance hyr ut vattencyklar och kajaker direkt från Sickla Strand, så ni kan kombinera det med SUP yoga i punkt 1 eller köra det som en egen halvdag. Vattencyklarna är stabila nog för alla som kan sitta på en stol. Kajak kräver lite balans men ingen tidigare vana. Flytväst och utrustning finns på plats, ingen guide-logistik att lösa.' },
      { type: 'heading', text: '5. Yoga på kontoret eller utomhus' },
      { type: 'paragraph', text: 'En privat yogaklass för teamet, på kontoret, i en park, eller på taket. 60 minuter som bryter av dagen på ett annat sätt. Funkar som start på dagen eller avslutning, alla nivåer, ingen erfarenhet krävs.' },
      { type: 'heading', text: '6. Escape room hos Exit Games' },
      { type: 'paragraph', text: 'Exit Games i Gamla Stan kan köra upp till 44 personer samtidigt fördelade över flera rum, vilket är anledningen till att det funkar för ett helt team. Escape rooms sätter gruppen i ett läge där ni behöver kommunicera och lösa problem ihop, fast det är kul snarare än pressande. Håll rum på 4–6 personer.' },
      { type: 'heading', text: '7. Guidad promenad på Djurgården med picknick' },
      { type: 'paragraph', text: 'Det enklaste alternativet, men underskattat. Djurgården är en av Stockholms vackraste platser och den är gratis. En guidad promenad följt av en gemensam picknick på gräset är ett härligt sätt att fira sommaren utan att krångla till det. Bra backup-plan om budgeten är stram.' },
      { type: 'paragraph', text: 'Två av aktiviteterna ovan bokar ni direkt via mig: privat SUP yoga (yogawithcamilla.se/tjanster/sup-yoga) och yoga för ert team (yogawithcamilla.se/tjanster/foretagsyoga). Mejla hello.yogawithcamilla@gmail.com med datum och antal så återkommer jag med offert.' },
    ]
  },
  {
    slug: 'summer-team-day-ideas-stockholm',
    title: '7 Summer Team Day Ideas in Stockholm',
    metaDescription: 'Planning a summer team day in Stockholm? Here are 7 ideas, from private SUP yoga to archipelago boat trips. Something for every team size and budget.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Företag & Konferens',
    excerpt: 'Summer is the best time to take your team outside the office. Here are 7 team day ideas in Stockholm, from paddleboard yoga to archipelago boat trips.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Book private SUP yoga for your team',
    relatedPosts: [
      { slug: 'sommaravslutning-aktiviteter-stockholm', label: 'Sommaravslutning i Stockholm, 7 idéer' },
    ],
    content: [
      { type: 'paragraph', text: 'Summer in Stockholm is short, brilliant, and a little bit magic. The light stays until 10 pm. The water is warm enough to actually get in. And your team has probably been sitting in the same meeting room since January.' },
      { type: 'heading', text: '1. Private SUP Yoga at Sickla Strand' },
      { type: 'paragraph', text: 'You start on paddleboards on the water, moving through a gentle vinyasa or yin flow led by me. No experience needed. Nobody falls in as often as they expect. And everybody laughs more than they thought they would.' },
      { type: 'paragraph', text: 'Usually 3 to 10 people, larger groups on request. From 500 kr per person. Taught in English. Central Sickla location, easy to reach by tunnelbana. Yoga led by me, with venue and gear from Smashing Balance. Add a lakeside sauna, trail running in Nacka, tennis or food on site if you want to build out the day.' },
      { type: 'heading', text: '2. Archipelago Boat Trip with Strandrederi or Kanebo Event' },
      { type: 'paragraph', text: 'Stockholm sits on one of the most beautiful archipelagos in the world (more than 30,000 islands, most of them empty) and you only see it properly from a boat. Strandrederi charters skippered boats for half or full days, set up for company kickoffs and summer parties with food and drink on board. For bigger groups, Kanebo Event operates boats up to 110 guests. If you want speed over calm, RIB Stockholm runs faster archipelago tours from 2 hours to a full day.' },
      { type: 'heading', text: '3. Cooking Class at AVEQIA' },
      { type: 'paragraph', text: 'Cooking together is one of the best ways to get a team collaborating without anyone feeling like they are doing a corporate exercise. AVEQIA in central Stockholm takes groups from 10 to 140 people in private kitchen-dining rooms, with chefs walking you through a three- or four-course menu. Works whether your team cooks every day or never opens the kitchen drawer.' },
      { type: 'heading', text: '4. Water Bikes and Kayaks with Smashing Balance' },
      { type: 'paragraph', text: 'Stockholm is surrounded by water, and most teams never get on it. Smashing Balance rents water bikes and kayaks straight from Sickla Strand, so you can bundle this with the SUP yoga in activity 1 or run it as its own half-day. Water bikes are stable enough for anyone who can sit on a chair. Kayaks need basic balance but no real experience. Life jackets and equipment on site, no guide logistics to organise.' },
      { type: 'heading', text: '5. Yoga session for the team' },
      { type: 'paragraph', text: 'A private yoga class at your office, in a park, or on a rooftop. 60 minutes that resets the energy. Works as a morning opener or afternoon wind-down. All levels, no equipment required from the team.' },
      { type: 'heading', text: '6. Escape Room at Exit Games' },
      { type: 'paragraph', text: 'Exit Games in Gamla Stan can run up to 44 people at once across multiple rooms, which is why it works for a whole team rather than just a few people. You see quickly who leads under pressure, who thinks laterally, and who just reads the clues. Keep groups at 4 to 6 per room. Skip it if your team is bigger than 50.' },
      { type: 'heading', text: '7. Guided Summer Walk Through Stockholm' },
      { type: 'paragraph', text: 'The easiest option on the list but underrated. A good guide through Gamla Stan, the Södermalm cliffs, or the waterfront turns the parts of Stockholm people walk past every day into genuinely interesting stories. Cheap, flexible, and a reliable backup plan if weather shifts or budget is tight.' },
      { type: 'paragraph', text: 'Two of the activities above are bookable directly through me: private SUP yoga (yogawithcamilla.se/tjanster/sup-yoga) and yoga for your team (yogawithcamilla.se/tjanster/foretagsyoga). Email hello.yogawithcamilla@gmail.com with your dates and group size for a quote.' },
    ]
  },
  {
    slug: 'teambuilding-aktiviteter-stockholm',
    title: 'Teambuilding Stockholm: 7 aktiviteter teamet pratar om månader efteråt (2026)',
    metaDescription: 'Teambuilding i Stockholm: 7 aktiviteter som faktiskt funkar, med pris, gruppstorlek och när du ska skippa vilken. Yoga från 3 000 kr, SUP yoga och bastu från 500 kr per person.',
    publishDate: '2026-04-15',
    readingTime: '10 min',
    category: 'Företag & Konferens',
    excerpt: 'Bästa teambuilding handlar inte om att krypa under rep. Det handlar om att ge teamet något att prata om månader efteråt. Här är de sju aktiviteter jag bokar och bokar om för Stockholmsföretag, med ärlig vägledning om vilken som passar er.',
    relatedServiceHref: '/tjanster/foretagsyoga',
    relatedServiceLabel: 'Boka yoga för teamet',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'konferensyoga-teambuilding', label: 'Konferensyoga, varför yoga slår teambuilding' },
      { slug: 'sommaravslutning-aktiviteter-stockholm', label: 'Sommaravslutning i Stockholm, 7 idéer' },
    ],
    content: [
      { type: 'paragraph', text: 'De flesta teambuildingar är något teamet klarar av, inte något de ser fram emot. Du har varit på dem. Repen, post-it-lapparna, ledord som "synergi" på en whiteboard. Folk dyker upp, gör vad de blir tillsagda, och pratar om något annat på vägen hem.' },
      { type: 'paragraph', text: 'Det går att göra annorlunda. Jag bokar och bokar om de här sju aktiviteterna för Stockholmsföretag, från startups på tio personer till bolag som vill samla 80 på en sommardag. Det är inte en topp-tio från Google. Det är de som faktiskt funkar, med ärligt snack om när de inte gör det.' },
      { type: 'callout', text: 'Har du fem sekunder? Här är mina tre standardrekommendationer. Kickoff eller offsite (8 till 20 personer): SUP yoga och bastu vid vattnet. Stor sommaravslutning eller julbord (30 till 140): matlagning hos AVEQIA. Konferenspaus eller eftermiddagsreset: privat yoga på er konferenslokal. Resten av artikeln går igenom varför, för vem, och vad ni ska skippa.' },
      { type: 'heading', text: 'Vad teamet faktiskt minns från en bra teamdag' },
      { type: 'paragraph', text: 'Efter att ha lett team genom yoga, paddleboardpass och konferensavslut har jag märkt att samma sak går igen. Det är inte ord på en tavla. Det är tre saker:' },
      { type: 'list', items: [
        'Något fysiskt och lite klumpigt. När alla wobblar lite, jämnar hierarkin ut sig på två minuter. En vd som tappar balansen på en paddleboard är inte längre vd i rummet.',
        'Att skratt händer på ett ofarligt sätt. Inte vid någons bekostnad, utan vid situationens.',
        'Tid efter aktiviteten där folk pratar utan agenda. Bastu, måltid, drink, promenad. Det är där relationerna byggs, inte under själva övningen.',
      ] },
      { type: 'paragraph', text: 'Lägg det filtret över vilken aktivitet ni än väljer. Om ingen av de tre finns där, blir det förmodligen bara en eftermiddag som klockas in.' },
      { type: 'heading', text: '1. Matlagning hos AVEQIA' },
      { type: 'paragraph', text: 'AVEQIA är det många Stockholmsföretag landar på och det finns en anledning. Grupper från 10 till 140 personer lagar en tre- eller fyrarätters meny tillsammans i privata köksrum, med kockar som guidar. Funkar både för folk som lagar mat varje dag och folk som bränner rostbrödet. Bra val om teamet är blandat och ni vill att alla är med utan att någon känner sig utlämnad.' },
      { type: 'list', items: [
        'Bäst för: stora team, mixad grupp, en händelse på en hel kväll',
        'Storlek: 10 till 140',
        'Pris: cirka 1 500 till 2 500 kr per person beroende på meny och dryck',
        'Säsong: året runt, inomhus',
        'Energinivå: medel, alla rör sig men ingen behöver vara vältränad',
        'Skippa om: ni är färre än åtta (energin försvinner), eller om någon har allvarlig matallergi som AVEQIA inte hinner planera runt',
      ] },
      { type: 'heading', text: '2. Kajakpaddling med LEK MER' },
      { type: 'paragraph', text: 'Stockholm är en stad på vatten och de flesta team ser den aldrig från vattnet. LEK MER kör företagsdagar på Mälaren och i skärgården, riktar sig specifikt till företagsgrupper och anpassar rutten efter konditionsnivå. Guiden sköter logistiken, ni paddlar och pratar. Lugnt nog för folk som aldrig suttit i en kajak, intressant nog för dem som har.' },
      { type: 'list', items: [
        'Bäst för: maj till september, team som vill ut i naturen utan att det blir "extremt"',
        'Storlek: 6 till 30',
        'Pris: från cirka 950 kr per person',
        'Säsong: maj till september (vatten är kallt resten av året)',
        'Energinivå: medel-låg, ingen förkunskap krävs',
        'Skippa om: någon i teamet inte kan simma utan flytväst (de kan vara med, men ni bör veta), eller om regnet ligger fast under dagen',
      ] },
      { type: 'heading', text: '3. Privat SUP yoga och bastu vid Sickla Strand' },
      { type: 'paragraph', text: 'Yoga på paddleboard kräver koncentration och balans, vilket betyder att alla i gruppen är helt närvarande från första minuten. Ingen kollar telefonen. Ingen tänker på deadline. Alla fokuserar på att inte ramla i vattnet, och skrattar när någon gör det ändå.' },
      { type: 'paragraph', text: 'Efteråt: bastu direkt vid vattnet, tid att prata utan agenda. Det är där delen som ni faktiskt kom för händer. Vanligtvis 3 till 10 personer, större grupper på förfrågan. Ingen erfarenhet krävs, centralt vid Sickla Strand och enkelt att nå med tunnelbana. Yoga leds av mig, plats och utrustning via [Smashing Balance](https://smashingbalance.se).' },
      { type: 'list', items: [
        'Bäst för: ledningsgrupper, mindre kickoffs, kvartalsavstamp där folk redan känner varandra',
        'Storlek: 3 till 10 (större grupper på förfrågan)',
        'Pris: från 500 kr per person',
        'Säsong: maj till september (bastu året runt, SUP är säsongsbunden)',
        'Energinivå: medel, men ingen muskelträning, balans och fokus',
        'Skippa om: någon är gravid (lätt yoga går bra, men inte SUP-delen), eller om ni är fler än 12 och vill att alla SUP:ar samtidigt',
      ] },
      { type: 'heading', text: '4. Yoga för teamet, på kontoret eller konferensen' },
      { type: 'paragraph', text: 'En privat yogaklass för teamet, hemma på kontoret, i konferenslokalen, eller utomhus om vädret tillåter. 60 minuter som bryter av en dag och ger ny energi. Alla nivåer, ingen erfarenhet krävs, ingen utrustning från teamet. Funkar som morgonöppning på en konferens, som lunchreset under en kickoff-dag, eller som avslutning på en lång eftermiddag.' },
      { type: 'paragraph', text: 'Det här är min mest bokade B2B-tjänst och anledningen är pragmatisk: den kräver ingen logistik från er sida och den passar oavsett om teamet är trött, stressat, eller redan glada. Mer detaljer om upplägg, priser och format på [företagsyoga-sidan](/tjanster/foretagsyoga) och i den längre guiden om [konferensyoga](/blogg/konferensyoga-teambuilding).' },
      { type: 'list', items: [
        'Bäst för: konferenser, kickoff-dagar, regelbundna teamdagar, eller när lokalen ändå är bokad',
        'Storlek: upp till 25 bekvämt, upp till 40 i större lokal',
        'Pris: från 3 000 kr för 60 min i Stockholm (exkl. moms)',
        'Säsong: året runt',
        'Energinivå: låg till medel, anpassas efter gruppen',
        'Skippa om: teamet är öppet motvilligt och ni bokar det för att "utmana dem" (motvilja smittar och kvarstår), eller om det bara finns 20 minuter mellan workshops',
      ] },
      { type: 'heading', text: '5. Escape room hos Exit Games eller Fox in a Box' },
      { type: 'paragraph', text: 'Exit Games i Gamla Stan kan köra upp till 44 personer samtidigt fördelade över flera rum, vilket är ovanligt och anledningen till att de funkar för ett helt team. Fox in a Box är det andra naturliga valet, större med bredare svårighetsgrad. Håll rum på 4 till 6 personer: ni ser snabbt vem som leder, vem som tänker sidledes och vem som bara läser ledtrådar.' },
      { type: 'list', items: [
        'Bäst för: team där folk redan känner varandra och vill se nya sidor av varandra',
        'Storlek: 4 till 50 (i grupper om 4 till 6 per rum)',
        'Pris: cirka 350 till 500 kr per person',
        'Säsong: året runt, inomhus',
        'Energinivå: låg fysiskt, hög mentalt',
        'Skippa om: någon i teamet inte tål instängda utrymmen (fråga innan ni bokar, inte i lokalen), eller om gruppen är större än 50',
      ] },
      { type: 'heading', text: '6. Skattjakt med The Go Game eller myCityHunt' },
      { type: 'paragraph', text: 'The Go Game kör app-baserade stadsjakter genom Gamla Stan, SoFo eller Skeppsholmen. Teamen löser utmaningar på mobilen medan de rör sig genom staden. Delar sig naturligt i mindre tävlande lag, vilket är vad ni vill ha för grupper på 20 till 100. För en enklare och billigare variant kör myCityHunt liknande jakter från cirka 130 kr per person.' },
      { type: 'list', items: [
        'Bäst för: stora grupper, mixad rörlighet, vår och höst i Stockholm',
        'Storlek: 20 till 100',
        'Pris: cirka 130 kr (myCityHunt) till 800 kr (The Go Game) per person',
        'Säsong: april till oktober (regn fungerar, snöstorm gör det inte)',
        'Energinivå: låg-medel, mest promenad',
        'Skippa om: någon har svårt att gå längre sträckor (en stadsvandring med fast guide är då ett bättre val), eller om det är minusgrader och blåst',
      ] },
      { type: 'heading', text: '7. Vinprovning med Nolea eller cocktailkurs med Bartendrr' },
      { type: 'paragraph', text: 'För vin: Nolea drivs av en WSET-3-sommelier och gör skräddarsydda företagsprovningar hemma på kontoret, i en vinkällare på Östermalm eller i en jägarstuga i Enskede. 1,5 till 2 timmar från runt 5 000 kr för gruppen. För cocktails: Bartendrr kommer till er med bar, glas, råvaror och is och guidar teamet genom två till tre signaturdrinkar.' },
      { type: 'paragraph', text: 'Båda formaten ger gruppen något att fokusera på, så att samtalet får en anledning att hända. Det är inte aktiviteten i sig som är poängen, det är att den skapar utrymme för det som faktiskt bygger team.' },
      { type: 'list', items: [
        'Bäst för: kvällsformat, mindre team, belöning eller avslut efter en lång dag',
        'Storlek: 6 till 25',
        'Pris: från cirka 5 000 kr för gruppen (vin) eller 600 kr per person (cocktails)',
        'Säsong: året runt, inomhus',
        'Energinivå: låg',
        'Skippa om: någon i teamet inte dricker och formatet inte har ett bra alkoholfritt spår (fråga vendorn, båda klarar det men det måste planeras)',
      ] },
      { type: 'heading', text: 'Snabb jämförelse: vilken aktivitet passar?' },
      { type: 'table',
        tableHead: ['Aktivitet', 'Storlek', 'Pris/person', 'Säsong', 'Inne/ute', 'Energi'],
        tableRows: [
          ['AVEQIA matlagning', '10 till 140', '1 500 till 2 500 kr', 'året runt', 'inne', 'medel'],
          ['LEK MER kajak', '6 till 30', 'från 950 kr', 'maj till sep', 'ute', 'medel-låg'],
          ['SUP yoga + bastu', '3 till 10', 'från 500 kr', 'maj till sep', 'ute', 'medel'],
          ['Yoga för teamet', 'upp till 40', 'från 3 000 kr/grupp', 'året runt', 'båda', 'låg-medel'],
          ['Escape room', '4 till 50', '350 till 500 kr', 'året runt', 'inne', 'låg fysiskt'],
          ['Skattjakt', '20 till 100', '130 till 800 kr', 'apr till okt', 'ute', 'låg-medel'],
          ['Vin / cocktail', '6 till 25', 'från 5 000 kr/grupp', 'året runt', 'inne', 'låg'],
        ]
      },
      { type: 'heading', text: 'Matcha aktivitet med tillfälle' },
      { type: 'paragraph', text: 'Det vanligaste misstaget jag ser är att samma aktivitet bokas till alla tillfällen, oavsett om det är en kickoff, en kvartalsavstamp eller ett julbord. Olika tillfällen vill ha olika energi. Här är min snabba mall:' },
      { type: 'list', items: [
        'Kickoff för året eller kvartalet (8 till 20 personer): SUP yoga och bastu på sommaren, yoga och middag på vintern. Energin ska vara fokuserad och delad, inte tävlingsinriktad.',
        'Stort kvartals- eller sommaravslutning (30 till 140): AVEQIA. Inget annat skalar lika väl med kvalitet.',
        'Julbord eller vinteravslutning: yoga på dagen (eftermiddagsreset på kontoret), middag på kvällen. Lägg inte teamaktivitet under själva middagen.',
        'Konferens, dag 1: morgonyoga 07:30 eller eftermiddagsyoga 14:30. Reset, inte program.',
        'Konferens, dag 2: längre teamaktivitet på kvällen, AVEQIA eller skattjakt om ni är många.',
        'Belöning eller fredagsfirande för ett mindre team: vinprovning eller cocktailkurs. Lägg inte SUP yoga eller kajak som "belöning", det kräver för mycket av deltagarna.',
        'Återkommande team-rytm: månadsyoga på kontoret är den klart enklaste att hålla i gång. Boka samma tid varje månad ett halvår framåt.',
      ] },
      { type: 'heading', text: 'Vanliga frågor från HR och team leads' },
      { type: 'faq', faqItems: [
        { q: 'Hur långt i förväg behöver jag boka?', a: '3 till 6 veckor är normalt för Stockholm, 6 till 8 veckor om ni är fler än 30 personer eller bokar ut till skärgården. Akutbokningar 1 till 2 veckor framåt går ofta att lösa för yoga på kontoret. För AVEQIA och stora kajakdagar, räkna med längre framförhållning under maj till juni och oktober till december.' },
        { q: 'Vad gör vi om någon inte vill vara med?', a: 'Ge alltid en mjuk opt-out, särskilt på fysiska aktiviteter. För yoga på konferens fungerar det bra att morgonpasset är frivilligt och eftermiddagspasset obligatoriskt. För SUP yoga är det vettigt att ha en "stannar på land och hejar" roll. För matlagning, escape room och skattjakt brukar det inte vara ett problem, men kommunicera alltid att deltagandet är förväntat, inte tvingat.' },
        { q: 'Funkar det på engelska?', a: 'Yoga på kontoret och SUP yoga går på engelska som standard om gruppen är internationell. AVEQIA, LEK MER, Exit Games, Fox in a Box, The Go Game, Nolea och Bartendrr går alla att boka på engelska. Be om engelsktalande instruktör vid bokningen så att det inte missas.' },
        { q: 'Vad om det regnar?', a: 'SUP yoga och kajak flyttas inomhus eller bokas om. För yoga är inomhusbackup alltid med i upplägget. För skattjakt med The Go Game gäller "lätt regn är OK, störtregn skjuts upp". AVEQIA, vinprovning, cocktail och escape room påverkas inte av väder.' },
        { q: 'Vad kostar det totalt för 25 personer?', a: 'Som riktvärde för hela teamet på 25: yoga 3 000 till 5 500 kr, SUP yoga och bastu cirka 12 500 kr, AVEQIA cirka 40 000 till 60 000 kr beroende på meny, kajakdag cirka 25 000 kr, escape room cirka 10 000 kr, skattjakt 3 250 till 20 000 kr, vinprovning från 5 000 kr. Alla siffror är ungefärliga och exkl. moms, men ger en känsla.' },
        { q: 'Måste vi byta om eller ha särskild utrustning?', a: 'För yoga: bekväma kläder, det räcker. Matta och block tar jag med. För SUP: badkläder eller kläder som tål att bli våta, handduk. Smashing Balance har omklädningsrum vid Sickla Strand. För kajak: kläder som tål vatten, LEK MER har all utrustning. Övriga aktiviteter kräver inget särskilt.' },
        { q: 'Funkar det om någon är gravid, skadad eller har en kronisk sjukdom?', a: 'I de flesta fall ja, men flagga det i förväg. Yoga går alltid att anpassa, jag jobbar runt graviditet, knäskador och ländryggsproblem rutinmässigt. SUP yoga är inte rekommenderat under graviditet. Kajak går att anpassa med stabilare modeller. Escape room kan vara obekvämt vid klaustrofobi. Att fråga gruppen diskret i förväg är värt fem minuter administration.' },
        { q: 'Hur betalar vi och vad gäller med moms?', a: 'Alla vendorer ovan fakturerar med svensk F-skatt. Moms 25% läggs på normalt. Teamaktiviteter klassas oftast som personalvård eller konferenskostnad, fråga er ekonomi om hur ni vill bokföra det. Jag fakturerar yoga och SUP yoga separat från min sida, AVEQIA, LEK MER och de andra fakturerar er direkt.' },
      ] },
      { type: 'heading', text: 'Innan du mejlar någon: skicka det här på en gång' },
      { type: 'paragraph', text: 'Spelar ingen roll vem ni bokar med. Det här är vad varje vendor (inklusive jag) behöver för att kunna komma tillbaka med en konkret offert i första svaret, inte i tredje:' },
      { type: 'list', items: [
        'Datum och tid, eller två till tre datumalternativ',
        'Antal personer, och om antalet är ungefärligt eller fastställt',
        'Plats om den är given, eller "öppen för förslag"',
        'Budgetspann per person eller totalt',
        'Om språket ska vara svenska eller engelska',
        'Tillfället: kickoff, kvartalsavslut, julbord, konferens, belöning, eller annat',
        'Eventuella krav: alkoholfritt spår, tillgänglighetskrav, gravid i gruppen, allergier ni vet om',
      ] },
      { type: 'heading', text: 'Vill ni boka SUP yoga, bastu eller yoga för teamet?' },
      { type: 'paragraph', text: 'Två av aktiviteterna ovan bokar ni direkt via mig. SUP yoga och bastu vid Sickla Strand, och privat yoga för teamet på kontoret, konferenslokalen eller utomhus. Båda passar för team som vill ha en upplevelse som faktiskt sitter kvar.' },
      { type: 'list', items: [
        'För SUP yoga och bastu: läs mer på [SUP yoga-sidan](/tjanster/sup-yoga)',
        'För yoga på kontoret eller konferensen: läs mer på [företagsyoga-sidan](/tjanster/foretagsyoga), eller längre guide i [Konferensyoga, hela guiden för 2026](/blogg/konferensyoga-teambuilding)',
      ] },
      { type: 'paragraph', text: 'Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com?subject=Teambuilding%20Stockholm%20offert) med datum, antal personer och tillfälle. Jag återkommer med offert och två till tre formatförslag att välja mellan.' },
    ]
  },
  {
    slug: 'team-building-activities-stockholm',
    title: 'Team Building Stockholm: 7 Activities Your Team Will Still Be Talking About (2026)',
    metaDescription: 'Team building in Stockholm: 7 activities that actually work, with prices, group sizes and when to skip each one. Yoga from 3 000 SEK, SUP yoga and sauna from 500 SEK per person.',
    publishDate: '2026-04-15',
    readingTime: '10 min',
    category: 'Företag & Konferens',
    excerpt: 'The best team building isn\'t about crawling under ropes. It\'s about giving your team something to talk about months later. Here are the seven activities I book and re-book for Stockholm companies, with honest guidance on which one fits you.',
    relatedServiceHref: '/tjanster/foretagsyoga',
    relatedServiceLabel: 'Book yoga for your team',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'teambuilding-aktiviteter-stockholm', label: 'Teambuilding i Stockholm, 7 aktiviteter' },
      { slug: 'summer-team-day-ideas-stockholm', label: 'Summer team day ideas in Stockholm' },
    ],
    content: [
      { type: 'paragraph', text: 'Most team building is something a team gets through, not something they look forward to. You\'ve been to those. The ropes, the post-it notes, words like "synergy" on a whiteboard. People show up, do what they\'re told, and talk about something else on the way home.' },
      { type: 'paragraph', text: 'It can be done differently. I book and re-book these seven activities for Stockholm companies, from ten-person startups to companies bringing 80 people out for a summer day. This isn\'t a top-ten from Google. These are the ones that actually work, with honest notes on when they don\'t.' },
      { type: 'callout', text: 'Got five seconds? Here are my three default picks. Kickoff or offsite (8 to 20 people): SUP yoga and sauna by the water. Big summer party or Christmas dinner (30 to 140): cooking at AVEQIA. Conference break or afternoon reset: private yoga in your conference room. The rest of the article covers why, for whom, and what to skip.' },
      { type: 'heading', text: 'What teams actually remember from a good team day' },
      { type: 'paragraph', text: 'After leading teams through yoga sessions, paddleboard classes, and conference closings, I keep seeing the same pattern. It\'s not the words on a whiteboard. It\'s three things:' },
      { type: 'list', items: [
        'Something physical and a little awkward. When everyone wobbles a bit, the hierarchy levels out in two minutes. A CEO losing their balance on a paddleboard is no longer the CEO in the room.',
        'Laughter that happens at no one\'s expense. The situation is the joke, not a person.',
        'Time after the activity for people to talk without an agenda. Sauna, meal, drink, walk. That\'s where the relationships get built, not during the exercise itself.',
      ] },
      { type: 'paragraph', text: 'Run that filter over whichever activity you pick. If none of those three are there, you\'re probably just booking an afternoon people will clock.' },
      { type: 'heading', text: '1. Cooking Class at AVEQIA' },
      { type: 'paragraph', text: 'AVEQIA is the one most Stockholm companies end up booking, and there is a reason. Groups from 10 to 140 cook a three- or four-course menu together in private kitchen-dining rooms, guided by chefs. It works for people who cook every day and people who burn toast. Good option if your team is mixed and you want everyone included without anyone feeling exposed.' },
      { type: 'list', items: [
        'Best for: larger teams, mixed groups, a full evening event',
        'Size: 10 to 140',
        'Price: roughly 1 500 to 2 500 SEK per person depending on menu and drinks',
        'Season: year-round, indoors',
        'Energy level: medium, everyone moves around but no one needs to be fit',
        'Skip if: you\'re fewer than 8 (the energy disappears) or someone has a serious food allergy AVEQIA can\'t plan around in time',
      ] },
      { type: 'heading', text: '2. Kayaking with LEK MER' },
      { type: 'paragraph', text: 'Stockholm is built on water and most teams never see it from the water. LEK MER runs corporate kayak days on Mälaren and in the archipelago, specifically caters to company groups, and tailors the route to your fitness level. The guide handles the logistics, you paddle and talk. Calm enough for people who\'ve never sat in a kayak, interesting enough for those who have.' },
      { type: 'list', items: [
        'Best for: May to September, teams that want to be outdoors without it getting "extreme"',
        'Size: 6 to 30',
        'Price: from around 950 SEK per person',
        'Season: May to September (the water is cold the rest of the year)',
        'Energy level: medium-low, no prior experience needed',
        'Skip if: someone in the team can\'t swim without a life vest (they can still come, but you should know), or if rain is forecast to settle in for the day',
      ] },
      { type: 'heading', text: '3. Private SUP Yoga + Sauna at Sickla Strand' },
      { type: 'paragraph', text: 'Paddleboard yoga at Sickla Strand followed by a sauna is one of the more interesting team options in Stockholm right now. Yoga on a paddleboard requires focus and balance, which means everyone in the group is fully present from minute one. No one checks their phone. No one is thinking about a deadline. Everyone is focused on not falling in the water, and laughing when someone does.' },
      { type: 'paragraph', text: 'After that: a sauna right by the water, time to talk without an agenda. That\'s where the part you actually came for happens. Usually 3 to 10 people, larger groups on request. No experience needed, central location, easy to reach by tunnelbana. Yoga led by me, venue and gear via [Smashing Balance](https://smashingbalance.se).' },
      { type: 'list', items: [
        'Best for: leadership groups, smaller kickoffs, quarterly resets where people already know each other',
        'Size: 3 to 10 (larger groups on request)',
        'Price: from 500 SEK per person',
        'Season: May to September (sauna year-round, SUP is seasonal)',
        'Energy level: medium, but no strength training, just balance and focus',
        'Skip if: someone is pregnant (gentle yoga is fine, but not the SUP part), or if you\'re more than 12 people and want everyone SUP-ing at the same time',
      ] },
      { type: 'heading', text: '4. Yoga for the Team, at the Office or the Conference' },
      { type: 'paragraph', text: 'A private yoga class for the team, at your office, in the conference venue, or outdoors if the weather allows. 60 minutes that breaks up a day and resets the energy. All levels, no experience required, no equipment from the team. Works as a morning opener at a conference, a lunch reset during a kickoff day, or a closing session at the end of a long afternoon.' },
      { type: 'paragraph', text: 'This is my most-booked B2B service and the reason is practical: it requires no logistics on your side and it fits regardless of whether the team is tired, stressed, or already in a good mood. More on format, pricing, and setup on the [corporate yoga page](/tjanster/foretagsyoga) and in the longer [conference yoga guide](/blogg/konferensyoga-teambuilding).' },
      { type: 'list', items: [
        'Best for: conferences, kickoff days, recurring team days, or whenever the venue is already booked',
        'Size: up to 25 comfortably, up to 40 in a larger room',
        'Price: from 3 000 SEK for 60 min in Stockholm (excl. VAT)',
        'Season: year-round',
        'Energy level: low to medium, adapted to the group',
        'Skip if: the team is openly reluctant and you\'re booking it to "challenge them" (reluctance spreads and stays), or if there are only 20 minutes between workshops',
      ] },
      { type: 'heading', text: '5. Escape Room at Exit Games or Fox in a Box' },
      { type: 'paragraph', text: 'Exit Games in Gamla Stan can run up to 44 people at once across multiple rooms, rare for an escape room, which is why it works for a whole team. Fox in a Box is the other obvious pick, larger and with a wider range of difficulty. Keep rooms at 4 to 6 people each: you see quickly who leads, who thinks laterally, and who just reads the clues.' },
      { type: 'list', items: [
        'Best for: teams where people already know each other and want to see new sides of each other',
        'Size: 4 to 50 (in rooms of 4 to 6 each)',
        'Price: around 350 to 500 SEK per person',
        'Season: year-round, indoors',
        'Energy level: physically low, mentally high',
        'Skip if: someone on the team doesn\'t do well in enclosed spaces (ask before you book, not at the venue), or if the group is larger than 50',
      ] },
      { type: 'heading', text: '6. Scavenger Hunt with The Go Game or myCityHunt' },
      { type: 'paragraph', text: 'The Go Game runs app-based city hunts through Gamla Stan, SoFo, or Skeppsholmen. Teams solve challenges on their phones while moving through the city. It splits naturally into smaller competing teams, which is what you want for groups of 20 to 100. For a cheaper, lighter version, myCityHunt runs similar hunts from around 130 SEK per person.' },
      { type: 'list', items: [
        'Best for: large groups, mixed mobility, spring and autumn in Stockholm',
        'Size: 20 to 100',
        'Price: around 130 SEK (myCityHunt) to 800 SEK (The Go Game) per person',
        'Season: April to October (rain is fine, snowstorms are not)',
        'Energy level: low-medium, mostly walking',
        'Skip if: someone has trouble walking longer distances (a fixed-guide city walk is better in that case), or if it\'s below freezing and windy',
      ] },
      { type: 'heading', text: '7. Wine Tasting with Nolea or a Cocktail Masterclass with Bartendrr' },
      { type: 'paragraph', text: 'For wine: Nolea is run by a WSET-3 sommelier and does tailored corporate tastings, at your office, in a wine cellar in Östermalm, or in a hunter\'s cabin in Enskede. Sessions run 1.5 to 2 hours from around 5 000 SEK for the group. For cocktails: Bartendrr will come to your office with bar, glassware, ingredients and ice, and walk the team through two or three signature drinks.' },
      { type: 'paragraph', text: 'Both formats give the group something to focus on so the conversation has a reason to happen. The activity isn\'t the point, the space it creates for what actually builds teams is.' },
      { type: 'list', items: [
        'Best for: evening formats, smaller teams, rewards or wind-downs after a long day',
        'Size: 6 to 25',
        'Price: from around 5 000 SEK for the group (wine) or 600 SEK per person (cocktails)',
        'Season: year-round, indoors',
        'Energy level: low',
        'Skip if: someone on the team doesn\'t drink and the format doesn\'t have a solid non-alcoholic track (ask the vendor, both can handle it but it needs to be planned)',
      ] },
      { type: 'heading', text: 'Quick comparison: which activity fits?' },
      { type: 'table',
        tableHead: ['Activity', 'Size', 'Price/person', 'Season', 'In/out', 'Energy'],
        tableRows: [
          ['AVEQIA cooking', '10 to 140', '1 500 to 2 500 SEK', 'year-round', 'in', 'medium'],
          ['LEK MER kayak', '6 to 30', 'from 950 SEK', 'May to Sep', 'out', 'medium-low'],
          ['SUP yoga + sauna', '3 to 10', 'from 500 SEK', 'May to Sep', 'out', 'medium'],
          ['Yoga for the team', 'up to 40', 'from 3 000 SEK/group', 'year-round', 'both', 'low-medium'],
          ['Escape room', '4 to 50', '350 to 500 SEK', 'year-round', 'in', 'low physical'],
          ['Scavenger hunt', '20 to 100', '130 to 800 SEK', 'Apr to Oct', 'out', 'low-medium'],
          ['Wine / cocktail', '6 to 25', 'from 5 000 SEK/group', 'year-round', 'in', 'low'],
        ]
      },
      { type: 'heading', text: 'Match the activity to the occasion' },
      { type: 'paragraph', text: 'The most common mistake I see is the same activity getting booked for every occasion, regardless of whether it\'s a kickoff, a quarterly meeting, or a Christmas dinner. Different occasions want different energy. Here\'s my quick template:' },
      { type: 'list', items: [
        'Annual or quarterly kickoff (8 to 20 people): SUP yoga and sauna in summer, yoga and dinner in winter. The energy should be focused and shared, not competitive.',
        'Large quarterly or summer party (30 to 140): AVEQIA. Nothing else scales as well with quality intact.',
        'Christmas dinner or winter party: yoga during the day (afternoon reset at the office), dinner in the evening. Don\'t schedule a team activity during the dinner itself.',
        'Conference, day 1: morning yoga at 07:30 or afternoon yoga at 14:30. Reset, not program.',
        'Conference, day 2: longer team activity in the evening, AVEQIA or a scavenger hunt if you\'re a larger group.',
        'Reward or Friday celebration for a smaller team: wine tasting or cocktail class. Don\'t schedule SUP yoga or kayaking as a "reward", it asks too much of the participants.',
        'Recurring team rhythm: monthly yoga at the office is by far the easiest to maintain. Book the same time every month half a year out.',
      ] },
      { type: 'heading', text: 'Common questions from HR and team leads' },
      { type: 'faq', faqItems: [
        { q: 'How far in advance do I need to book?', a: 'Three to six weeks is normal for Stockholm, six to eight weeks if you\'re more than 30 people or going out to the archipelago. Last-minute bookings 1 to 2 weeks out are often workable for office yoga. For AVEQIA and larger kayak days, expect longer lead times during May to June and October to December.' },
        { q: 'What do we do if someone doesn\'t want to take part?', a: 'Always offer a soft opt-out, especially for physical activities. For conference yoga it works well to make the morning session voluntary and the afternoon session mandatory. For SUP yoga it makes sense to have a "stays on land and cheers" role. For cooking, escape rooms, and scavenger hunts it\'s usually not an issue, but always communicate that participation is expected, not forced.' },
        { q: 'Does it work in English?', a: 'Office yoga and SUP yoga run in English by default if the group is international. AVEQIA, LEK MER, Exit Games, Fox in a Box, The Go Game, Nolea, and Bartendrr can all be booked in English. Ask for an English-speaking instructor at booking so it doesn\'t get missed.' },
        { q: 'What if it rains?', a: 'SUP yoga and kayaking get moved indoors or rebooked. For yoga there\'s always an indoor backup built into the plan. For The Go Game scavenger hunts, "light rain is fine, downpours get postponed". AVEQIA, wine, cocktails, and escape rooms aren\'t affected by weather.' },
        { q: 'What does it cost in total for 25 people?', a: 'As a ballpark for a team of 25: yoga 3 000 to 5 500 SEK, SUP yoga and sauna around 12 500 SEK, AVEQIA around 40 000 to 60 000 SEK depending on menu, kayak day around 25 000 SEK, escape room around 10 000 SEK, scavenger hunt 3 250 to 20 000 SEK, wine tasting from 5 000 SEK. All figures are approximate and excl. VAT, but give you a feel.' },
        { q: 'Do we need to change clothes or bring anything special?', a: 'For yoga: comfortable clothes, that\'s it. I bring mats and blocks. For SUP: swimwear or clothes that can get wet, a towel. Smashing Balance has changing rooms at Sickla Strand. For kayaking: clothes that can handle water, LEK MER provides all gear. The other activities don\'t require anything special.' },
        { q: 'Does it work if someone is pregnant, injured, or has a chronic condition?', a: 'In most cases yes, but flag it in advance. Yoga can always be adapted, I work around pregnancy, knee injuries, and lower-back issues routinely. SUP yoga is not recommended during pregnancy. Kayaking can be adjusted with more stable models. Escape rooms can be uncomfortable for people with claustrophobia. A quiet check-in with the group beforehand is worth five minutes of admin.' },
        { q: 'How do we pay and what about VAT?', a: 'All vendors above invoice with Swedish F-tax. VAT at 25% is added as standard. Team activities are usually classified as employee wellness or conference expense, ask your finance team how you want to book it. I invoice yoga and SUP yoga separately from my side; AVEQIA, LEK MER, and the others invoice you directly.' },
      ] },
      { type: 'heading', text: 'Before you email anyone: send this right away' },
      { type: 'paragraph', text: 'Doesn\'t matter who you book with. This is what every vendor (me included) needs in order to come back with a concrete quote in the first reply, not the third:' },
      { type: 'list', items: [
        'Date and time, or two to three date options',
        'Number of people, and whether the number is approximate or firm',
        'Location if it\'s set, or "open to suggestions"',
        'Budget range per person or total',
        'Whether the language should be Swedish or English',
        'The occasion: kickoff, quarterly close, Christmas party, conference, reward, or other',
        'Any requirements: non-alcoholic track, accessibility, anyone pregnant in the group, allergies you know about',
      ] },
      { type: 'heading', text: 'Want to book SUP yoga, sauna, or yoga for the team?' },
      { type: 'paragraph', text: 'Two of the activities above are bookable directly through me. SUP yoga and sauna at Sickla Strand, and private yoga for the team at your office, conference venue, or outdoors. Both are good fits for teams that want an experience that actually sticks.' },
      { type: 'list', items: [
        'For SUP yoga and sauna: more on the [SUP yoga page](/tjanster/sup-yoga)',
        'For yoga at the office or the conference: more on the [corporate yoga page](/tjanster/foretagsyoga), or the longer guide in [Conference yoga, the full guide for 2026](/blogg/konferensyoga-teambuilding)',
      ] },
      { type: 'paragraph', text: 'Email [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com?subject=Team%20Building%20Stockholm%20quote) with date, number of people, and the occasion. I\'ll come back with a quote and two or three format options to choose from.' },
    ]
  },
  {
    slug: 'paddleboard-yoga-stockholm-sickla-strand',
    title: 'Paddleboard Yoga in Stockholm: Drop-in Classes in English at Sickla Strand',
    metaDescription: 'Weekly drop-in SUP yoga classes in Stockholm at Sickla Strand. Taught in English by an Australian 500-hour certified teacher. Vinyasa or yin on a paddleboard, 75 min, sauna included. From 350 SEK.',
    publishDate: '2026-05-11',
    readingTime: '8 min',
    category: 'SUP Yoga',
    excerpt: 'Drop-in paddleboard yoga at Sickla Strand, taught in English, 10 minutes from central Stockholm. Vinyasa or yin on the water, 75 minutes, sauna included afterwards. Here is when, where, and what to expect.',
    relatedServiceHref: '/tjanster/sup-yoga-klasser',
    relatedServiceLabel: 'Book a SUP yoga class',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'sup-yoga-klasser-stockholm', label: 'SUP yoga klasser Stockholm (svenska)' },
      { slug: 'team-building-activities-stockholm', label: 'Team building in Stockholm, 7 activities' },
      { slug: 'hen-party-ideas-stockholm', label: 'Bachelorette party ideas in Stockholm' },
      { slug: 'summer-team-day-ideas-stockholm', label: 'Summer team day ideas in Stockholm' },
    ],
    content: [
      { type: 'paragraph', text: 'This is the guide to the weekly drop-in [SUP yoga classes](/tjanster/sup-yoga-klasser) I teach in Stockholm during the warmer half of the year. In English, by the water, 10 minutes from the city. You can come on your own. You don\'t need a group, and you don\'t need yoga experience.' },
      { type: 'callout', text: 'Quick info: Vinyasa or yin SUP yoga at Sickla Strand, Nacka. 75 minutes including the paddle out and back. Sauna by the water included. Season: late April to September 2026. Taught in English. Single class 350 SEK (150 SEK with your own SUP), 10-class card 1 000 SEK, season pass 1 500 SEK. [Book through Smashing Balance](https://smashingbalance.se/collections/sup-yoga).' },
      { type: 'heading', text: 'What it is' },
      { type: 'paragraph', text: 'A yoga class on a paddleboard, led by me, at Sickla Strand in Nacka. The boards are wider and more stable than a standard SUP, so balance is much easier than it looks from the dock. You paddle out a few minutes to the anchor spot, we run the class on the water, and you paddle back in. Sauna by the lake afterwards.' },
      { type: 'paragraph', text: 'I run the yoga. Smashing Balance runs the venue, the boards, the sauna and the safety equipment. Everything you need is on site.' },
      { type: 'heading', text: 'Why I teach in English' },
      { type: 'paragraph', text: 'I\'m Australian. I moved to Sweden a few years ago and now teach yoga from a forest cabin in Dalarna and on the water at Sickla Strand. All my classes are taught in English by default, the cues are in English, the corrections are in English, and the small talk after class is in English too.' },
      { type: 'paragraph', text: 'If you\'re an expat who hasn\'t quite found a yoga rhythm in Stockholm, or you\'re visiting and want to do something that isn\'t a museum or a cinnamon bun, this is built for you. You don\'t need to translate cat-cow.' },
      { type: 'heading', text: 'Two styles: vinyasa or yin' },
      { type: 'subheading', text: 'Vinyasa SUP yoga' },
      { type: 'paragraph', text: 'An active flow on the board. Soft transitions adapted for the water. You build strength and balance while you land in the breath. Good if you want to move, work up a bit of heat, and burn off a week of meetings.' },
      { type: 'subheading', text: 'Yin SUP yoga' },
      { type: 'paragraph', text: 'Slow, held shapes with the water moving underneath you. Restorative, soft, and surprisingly grounding. Good on a weekday evening or a Sunday morning, when what you actually need is to land rather than push.' },
      { type: 'paragraph', text: 'Both styles work for all levels. The schedule rotates week to week, so check the current times on [Smashing Balance](https://smashingbalance.se/collections/sup-yoga) to see which style runs when.' },
      { type: 'heading', text: 'Prices and tickets' },
      { type: 'table',
        tableHead: ['Ticket', 'Price', 'Included'],
        tableRows: [
          ['Single class', '350 SEK', 'One class, board, paddle, life vest, dry bag, sauna'],
          ['Single class (your own SUP)', '150 SEK', 'One class if you bring your own board, sauna included'],
          ['10-class card', '1 000 SEK', 'Ten classes, board and sauna included'],
          ['Season pass 2026', '1 500 SEK', 'Unlimited classes all season'],
        ]
      },
      { type: 'paragraph', text: 'Sauna is always included. The class card and season pass start paying off around three classes a month. All bookings go through [Smashing Balance](https://smashingbalance.se/collections/sup-yoga).' },
      { type: 'heading', text: 'Getting to Sickla Strand from central Stockholm' },
      { type: 'paragraph', text: 'Sickla Strand sits next to Elton\'s Café and Uthyrning in Nacka, on the edge of the city. About 10 to 15 minutes from central Stockholm. The easiest options:' },
      { type: 'list', items: [
        'Tunnelbana (metro): green line to Hammarby Sjöstad, then a 10-minute walk along the water',
        'Tvärbanan tram: Sickla stop, then a 10-minute walk',
        'Bike: the Hammarby Sjöstad bike path goes straight there',
        'Car: parking is on site at Sickla Strand',
      ] },
      { type: 'paragraph', text: 'Bring swimwear under your clothes, you\'ll save yourself the changing-room queue.' },
      { type: 'heading', text: 'When the season runs' },
      { type: 'paragraph', text: 'The season is late April through September 2026. Schedules update weekly. July and August are the warmest in the water. May and September are usually quieter and easier to book last-minute.' },
      { type: 'heading', text: 'How a class actually flows' },
      { type: 'paragraph', text: 'Arrive 10 to 15 minutes before the class starts. You check in, lock up your valuables, change if you need to. We gather on land for a short safety briefing, how to get onto the board, how to paddle out, what we\'ll do once we\'re on the water.' },
      { type: 'paragraph', text: 'We paddle out a few minutes to the anchor spot, anchor the boards, and run the class together. The first part is seated and lying down. Then we build up to kneeling and standing for those who want to. We close in savasana on the board, listening to the water. Then back to shore, into the sauna.' },
      { type: 'paragraph', text: 'The full class including paddling is 75 minutes. Plan for about two hours on site with check-in, changing, and sauna afterwards.' },
      { type: 'heading', text: 'What to bring' },
      { type: 'list', items: [
        'Swimwear underneath (you will get wet)',
        'Training clothes or a t-shirt over the top',
        'A towel',
        'A water bottle',
        'Sunglasses (with a strap if you have one) and sunscreen',
        'A second change of clothes for after the sauna',
      ] },
      { type: 'paragraph', text: 'Phones and valuables stay on land in a locked locker. The board is wet. That\'s part of the point.' },
      { type: 'heading', text: 'Who this class is for' },
      { type: 'list', items: [
        'Expats who haven\'t quite landed in the Stockholm yoga scene and want classes that run in English by default',
        'Tourists looking for something that doesn\'t exist in their home city',
        'Anyone with a mat practice who wants an outdoor summer version',
        'People who find indoor studios stifling once the weather turns',
        'Anyone looking for a soft weekly ritual that includes water and sauna',
      ] },
      { type: 'paragraph', text: 'No yoga or SUP experience needed. The boards are wide and stable. The class adapts to whoever shows up that morning.' },
      { type: 'heading', text: 'Drop-in class or private event?' },
      { type: 'paragraph', text: 'If you want to show up alone or with a friend, the drop-in class is right. If you\'re a group that wants the whole experience to yourselves, a hen party, a team day, a birthday, a private [SUP yoga event](/tjanster/sup-yoga) is the better format. Private bookings go directly through me, from 500 SEK per person, with the whole thing built around your group.' },
      { type: 'heading', text: 'A note on Stockholm yoga in English' },
      { type: 'paragraph', text: 'Stockholm has a deep yoga scene in Swedish. In English, much less. Most studios run a few English classes a week if you\'re lucky, often led by a non-native English speaker translating in their head. Nothing wrong with that, but it shows up in the cues. The pace gets clipped. The humour gets lost.' },
      { type: 'paragraph', text: 'A class that runs in English from the start, with a native English-speaking teacher, lets you actually listen to the instruction instead of decoding it. That matters more on a paddleboard than on a mat, because the cues have to be specific and you don\'t want to be working out whether "lean back" means leaning back into a backbend or leaning back to recover your balance.' },
      { type: 'heading', text: 'Frequently asked questions' },
      { type: 'faq', faqItems: [
        { q: 'Is the class in English or Swedish?', a: 'All my SUP yoga classes are taught in English by default. I\'m Australian, English is my first language. If a Swedish-speaking participant needs the occasional translation I\'m happy to do that, but the class runs in English from start to finish.' },
        { q: 'I\'ve never done SUP yoga before, will I fall in?', a: 'Probably not. The boards used at Sickla Strand are wider and more stable than a regular SUP, designed specifically for yoga. Falling in is rare and not the end of the world if it happens. You\'ll be wearing a life vest and the water is shallow at the anchor spot.' },
        { q: 'How do I book?', a: 'Through Smashing Balance at smashingbalance.se/collections/sup-yoga. You\'ll see the current schedule, pick a date and ticket type, and pay online. No phone call needed.' },
        { q: 'What does it cost?', a: 'Single class 350 SEK, 150 SEK if you bring your own SUP. 10-class card 1 000 SEK. Season pass 2026 for 1 500 SEK. Sauna is always included.' },
        { q: 'How long is the class?', a: '75 minutes including the paddle out and back. Plan for about two hours on site total, including check-in, changing, and sauna afterwards.' },
        { q: 'Vinyasa or yin, which one should I pick?', a: 'Vinyasa if you want to move and work up a sweat. Yin if you want to slow down and land. Both work for all levels. Check the schedule on Smashing Balance to see which style runs which day.' },
        { q: 'Do I need yoga or paddleboard experience?', a: 'No. The boards are stable and the class always begins with a safety briefing. The class adapts to whoever shows up.' },
        { q: 'What\'s included in the price?', a: 'Board, paddle, life vest, dry bag, changing room, locker for valuables, and the sauna by the lake after class. Everything except what you wear.' },
        { q: 'Can I get a refund if I can\'t make it?', a: 'Cancellation rules are handled by Smashing Balance. Their terms are on smashingbalance.se when you book.' },
        { q: 'Can I book the whole class for my group?', a: 'For groups, a private event is usually a better fit. Those are booked directly with me at hello.yogawithcamilla@gmail.com. See the [private SUP yoga page](/tjanster/sup-yoga) for more.' },
        { q: 'What happens if the weather is bad?', a: 'If there\'s strong wind, lightning, or the water is too cold, the class is cancelled. Smashing Balance will let you know and you can usually rebook.' },
        { q: 'Is there a class for tourists who only have one weekend in Stockholm?', a: 'Yes, the drop-in class is exactly that. Book one class, no commitment, bring a friend or come on your own. It\'s a 10-minute metro ride from central Stockholm and you\'ll be done in two hours.' },
      ] },
      { type: 'heading', text: 'Next steps' },
      { type: 'paragraph', text: 'See the current schedule and book a class on [Smashing Balance](https://smashingbalance.se/collections/sup-yoga). For more on the format, the [SUP yoga classes page](/tjanster/sup-yoga-klasser) has the full breakdown. If you\'re a group and want the whole thing to yourselves instead, [private SUP yoga](/tjanster/sup-yoga) is the better fit.' },
    ]
  },
  {
    slug: 'yoga-in-english-stockholm-expat-guide',
    title: 'Yoga in English in Stockholm: An Expat\'s Guide to Finding Classes That Actually Stick',
    metaDescription: 'New to Stockholm and looking for yoga in English? A practical guide to finding classes that fit, what to ask, and how to build a practice that lasts longer than your first six months in the city.',
    publishDate: '2026-05-11',
    readingTime: '11 min',
    category: 'Expat & English',
    excerpt: 'You can read a class schedule in Swedish. Doing yoga in your second language is a different story. Here is what actually works for English-speaking yogis in Stockholm, from drop-in classes to private sessions to the format most expats end up landing on.',
    relatedServiceHref: '/tjanster/sup-yoga-klasser',
    relatedServiceLabel: 'Book a class in English',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'paddleboard-yoga-stockholm-sickla-strand', label: 'Paddleboard Yoga in Stockholm at Sickla Strand' },
      { slug: 'team-building-activities-stockholm', label: 'Team building in Stockholm, 7 activities' },
      { slug: 'hen-party-ideas-stockholm', label: 'Bachelorette party ideas in Stockholm' },
      { slug: 'summer-team-day-ideas-stockholm', label: 'Summer team day ideas in Stockholm' },
    ],
    content: [
      { type: 'paragraph', text: 'You\'ve been in Stockholm for a few months, or a few years. The Swedish is coming along for groceries and small talk. You can read a metro sign. You\'ve mostly stopped translating menus in your head. But yoga in your second language is still a different exercise, and most of the studio schedules you\'ve looked at are in Swedish.' },
      { type: 'paragraph', text: 'This is a guide for the expats, the long-term visitors, and the people who moved here for work and never quite found a yoga rhythm that stuck. What actually exists in English in Stockholm, what to look for, what to ask, and the format most expats I\'ve taught end up landing on.' },
      { type: 'callout', text: 'Short version: drop-in classes in English exist but the schedule is thinner than the Swedish one. Private and small-group formats in English are easier to find and easier to commit to. Outdoor SUP yoga at Sickla Strand runs in English all season. I\'m Australian, 500-hour certified, and teach all classes in English by default. Email [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com).' },
      { type: 'heading', text: 'Why "yoga in English" is its own search' },
      { type: 'paragraph', text: 'Most yoga in Stockholm is taught in Swedish. That\'s fine if you\'re fluent. If you\'re not, here\'s what changes when you do a class in your second language:' },
      { type: 'list', items: [
        'You\'re translating in your head, which means you\'re half a beat behind every cue',
        'Subtle instructions get flattened. "Soften the back of your throat" turns into "relax"',
        'You stop listening for nuance and just watch the person next to you, which is a different kind of practice',
        'The closing meditation, the part you actually came for, gets harder to land in if you\'re still parsing the words',
      ] },
      { type: 'paragraph', text: 'For some people that\'s fine, they treat yoga as exercise and the language gap is just background noise. For others, the language is exactly why the practice doesn\'t stick. Knowing which one you are saves you a lot of searching.' },
      { type: 'heading', text: 'What\'s actually out there in Stockholm' },
      { type: 'subheading', text: 'Drop-in studio classes' },
      { type: 'paragraph', text: 'A handful of central studios run English-language classes a few times a week. The schedule tends to be thinner than the Swedish one and the times are often awkward, late evening or mid-afternoon. The teacher quality varies. Some are native English speakers, others are Swedes teaching in their second language. Both can be excellent, but the cues feel different. Worth trying a few before you commit to a class card.' },
      { type: 'subheading', text: 'Private and small-group sessions' },
      { type: 'paragraph', text: 'Private 1-on-1 or small-group sessions in English are easier to find and easier to make stick. You set the time, the teacher fits the practice to where you actually are, and you don\'t have to coordinate around a studio schedule. Expensive per hour, but if you\'ve been bouncing between drop-ins for a year without building a rhythm, this is often the format that finally works.' },
      { type: 'subheading', text: 'Outdoor and seasonal classes' },
      { type: 'paragraph', text: 'In summer there are more options, outdoor yoga in the parks, SUP yoga on the water, retreats and weekend events. My weekly [SUP yoga classes at Sickla Strand](/tjanster/sup-yoga-klasser) run in English by default from late April to September. Easy entry point if you want to try something new before committing to a regular indoor practice.' },
      { type: 'subheading', text: 'Corporate and workplace yoga' },
      { type: 'paragraph', text: 'If you work at an international company, your office may already book yoga, or be open to it. International tech, biotech, and consulting offices in Stockholm often have a mixed-language team and need classes in English by default. If yours doesn\'t have one yet, it\'s often easier to start one than to find a studio class that fits your week. More on [corporate yoga](/tjanster/foretagsyoga) and what to ask for.' },
      { type: 'subheading', text: 'Online yoga over Zoom' },
      { type: 'paragraph', text: 'For early mornings, travel weeks, or living somewhere the studios are nowhere near, online sessions in English are a real option. Private Zoom yoga works well for 1-on-1 and small group formats. The downside is the same as every other Zoom call, the screen pulls you out of the body. Best used as a supplement, not a replacement.' },
      { type: 'heading', text: 'What to ask before you book' },
      { type: 'paragraph', text: 'A class advertised as "in English" can mean a lot of different things. Before you commit to a class card or pay for a private session, ask:' },
      { type: 'list', items: [
        'Is the teacher a native English speaker, or teaching in their second language? Both work, but you should know which one you\'re booking',
        'How many years has the teacher been teaching in English? Two years and ten years are very different',
        'What style is it? Vinyasa, yin, hatha, ashtanga, restorative, all valid, all different',
        'How big are the groups? Drop-in studio classes can be 20+ people, private and outdoor are usually 1 to 10',
        'Is the schedule the same every week? Because if you\'re building a rhythm, week-to-week changes are the thing that breaks it',
        'What\'s the cancellation policy? Important if your calendar moves around',
      ] },
      { type: 'paragraph', text: 'A teacher who answers these questions clearly is usually the one who\'ll show up to class the same way. If the answers are vague, expect the class to feel vague too.' },
      { type: 'heading', text: 'How to build a practice that actually sticks' },
      { type: 'paragraph', text: 'I\'ve taught a lot of expats in Stockholm. The ones who build a real practice tend to do three things, none of them complicated:' },
      { type: 'list', items: [
        'Pick one teacher, not five studios. Variety sounds good in theory and burns out in practice. One teacher who knows your body, your shoulders, your tight hips, will move you further in six months than five teachers in a year',
        'Commit to a weekly time, not a weekly intention. "Tuesday 18:30" beats "twice a week" every time, because Tuesday 18:30 doesn\'t require a decision',
        'Treat the first month as a trial, not a verdict. The first three classes you\'ll feel awkward, slow, behind. By class six you\'ll have a body that knows the room',
      ] },
      { type: 'paragraph', text: 'Doesn\'t matter if you go with me or someone else. If those three are in place, the practice will land. If they\'re not, you\'ll be re-doing this search again in a year.' },
      { type: 'heading', text: 'What I offer in English in Stockholm' },
      { type: 'paragraph', text: 'A summary, since you got this far. I\'m Camilla, an Australian 500-hour certified yoga teacher based in Stockholm. All my classes run in English by default. Specifically:' },
      { type: 'table',
        tableHead: ['Format', 'Where', 'Group size', 'Season', 'From'],
        tableRows: [
          ['Drop-in SUP yoga', 'Sickla Strand', '1 to 10', 'Apr to Sep', '350 SEK / class'],
          ['Private SUP yoga & sauna', 'Sickla Strand', '3 to 10', 'May to Sep', '500 SEK / person'],
          ['Office yoga', 'Your office', 'Up to 25', 'Year-round', '3 000 SEK / 60 min'],
          ['Private event yoga', 'Your venue', '5 to 30', 'Year-round', 'On request'],
        ]
      },
      { type: 'paragraph', text: 'Details on each: [SUP yoga drop-in](/tjanster/sup-yoga-klasser), [private SUP yoga](/tjanster/sup-yoga), [corporate yoga](/tjanster/foretagsyoga), [private events](/tjanster/privata-event). If you\'re not sure which fits, send an email with a sentence or two about what you\'re looking for and I\'ll suggest a format.' },
      { type: 'heading', text: 'Yoga in English in Stockholm: a starter month' },
      { type: 'paragraph', text: 'If you want a concrete plan rather than a list, here\'s what I\'d suggest for someone who just moved to Stockholm and wants to find a sustainable practice in English:' },
      { type: 'list', items: [
        'Week 1: try one drop-in class somewhere central, in any style, just to clear the cobwebs',
        'Week 2: book a single 1-on-1 session in English. Tell the teacher about your body, your goals, and what hasn\'t worked. Pay attention to whether they actually listen',
        'Week 3: try a different format. If week 1 was vinyasa, try yin. If week 1 was indoors, try outdoor or SUP yoga. You\'re looking for the one that pulls you back, not the one that makes sense on paper',
        'Week 4: pick the teacher and format from the previous three weeks that you\'d want to return to. Commit to a weekly time slot for the next two months',
      ] },
      { type: 'paragraph', text: 'Four classes, four signals. Cheaper than buying a class card you don\'t use, and a much more honest test of what fits.' },
      { type: 'heading', text: 'Frequently asked questions' },
      { type: 'faq', faqItems: [
        { q: 'Are there yoga studios in Stockholm that teach in English?', a: 'A handful of central studios run English-language classes each week. The schedule is thinner than the Swedish one and times are often awkward. Independent teachers (myself included) tend to be easier to book in English for private and small-group formats.' },
        { q: 'Do I need to speak Swedish to do yoga in Stockholm?', a: 'No, but knowing what you\'re booking matters. A class advertised "in English" can be taught by anyone from a native English speaker to a Swede in their second language. Both work, but the experience is different. Ask before you book.' },
        { q: 'Is yoga in Stockholm expensive?', a: 'Drop-in studio classes run roughly 200 to 350 SEK. Class cards drop the per-class price. Private 1-on-1 sessions usually start around 1 000 to 1 500 SEK per hour. Corporate yoga is a different model, usually around 3 000 SEK for a 60-minute class for a group.' },
        { q: 'Can I do yoga in English with a native English speaker in Stockholm?', a: 'Yes. I\'m Australian, English is my first language, and I teach all classes in English by default. There are a few other native English-speaking teachers in the city as well, mostly independent rather than studio-based.' },
        { q: 'I just moved to Stockholm, where should I start?', a: 'Pick one drop-in to see what\'s on offer, then a 1-on-1 in English to find a teacher whose style fits you, then commit to one weekly time slot for two months. The plan in the section above walks through it in more detail.' },
        { q: 'I\'ve been here a while and still haven\'t found a rhythm, what should I change?', a: 'Usually one of three things. Too many teachers (variety burns out), no fixed weekly time (decisions get skipped), or a format that doesn\'t fit your week (a 19:00 studio class doesn\'t work if your commute ends at 18:50). Change one variable at a time.' },
        { q: 'Do you teach private yoga in English in Stockholm?', a: 'Yes, private and small-group sessions, in English, in Stockholm or online. Send a note with what you\'re looking for and your schedule constraints, and I\'ll come back with options.' },
        { q: 'What about online yoga over Zoom?', a: 'I run Zoom sessions for English-speaking clients, especially for people who travel a lot or live outside the city. Works well for 1-on-1 and small groups, less well for 10+. Email if you want to set one up.' },
        { q: 'Do you teach yoga for people who don\'t do yoga?', a: 'Most of my clients in Stockholm aren\'t "yoga people" in the social-media sense. They\'re busy adults who want to move, breathe, and stop running a scorecard on themselves. Classes are challenging but not punishing, no extreme poses, no aspirational improvement framing.' },
      ] },
      { type: 'heading', text: 'Get in touch' },
      { type: 'paragraph', text: 'Email [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) with a line or two about what you\'re looking for. Private session in the city, a class card on the water, something for your office, anything in between. I\'ll come back with a format, a price, and the next available time.' },
    ]
  },
  {
    slug: 'office-yoga-english-international-teams-stockholm',
    title: 'Office Yoga in English for International Teams in Stockholm',
    metaDescription: 'Private office yoga in English for international teams in Stockholm. 60-minute classes at your office, conference, or offsite. Taught by an Australian 500-hour certified teacher. From 3 000 SEK per session.',
    publishDate: '2026-05-11',
    readingTime: '9 min',
    category: 'Företag & Konferens',
    excerpt: 'Most workplace yoga in Stockholm runs in Swedish. If your team is half Swedes and half international hires, that\'s a problem nobody mentions until you book a class and half the room is translating. Here is the format that actually works for mixed-language teams.',
    relatedServiceHref: '/tjanster/foretagsyoga',
    relatedServiceLabel: 'Book office yoga in English',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'team-building-activities-stockholm', label: 'Team building in Stockholm, 7 activities' },
      { slug: 'summer-team-day-ideas-stockholm', label: 'Summer team day ideas in Stockholm' },
      { slug: 'yoga-in-english-stockholm-expat-guide', label: 'Yoga in English in Stockholm, an expat\'s guide' },
      { slug: 'foretagsyoga-vad-ingar-och-kostar', label: 'Företagsyoga, vad ingår och kostar? (svenska)' },
    ],
    content: [
      { type: 'paragraph', text: 'Most workplace yoga in Stockholm runs in Swedish by default. That works fine for a team where everyone speaks Swedish. It does not work for the international tech, biotech, and consulting offices where the working language is English, half the team learned Swedish six months ago, and the other half are visiting from Berlin for the quarter.' },
      { type: 'paragraph', text: 'I run [corporate yoga](/tjanster/foretagsyoga) in English by default. Most of the bookings I get are for exactly the situation above. Here is how it works, what to ask for, and the formats that actually fit an international team.' },
      { type: 'callout', text: 'Quick version: 60-minute private yoga class at your office, conference venue, or outdoors. Taught in English by an Australian 500-hour certified teacher. No equipment needed from the team. From 3 000 SEK per session in Stockholm (excl. VAT). Recurring bookings get a discount. Email [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) with date, headcount, and address.' },
      { type: 'heading', text: 'Why the language matters more than HR thinks' },
      { type: 'paragraph', text: 'You can run an English-only product team in Stockholm and still book a Swedish yoga teacher because "everyone gets it more or less". I\'ve seen it. Here\'s what happens.' },
      { type: 'list', items: [
        'The Swedes follow the cues comfortably and look relaxed at the end',
        'The half-fluent Swedish speakers spend the class half a beat behind, watching the person next to them',
        'The newer arrivals and visiting colleagues do roughly what they see and check out mentally by minute 20',
        'Afterwards the team rates it 4 out of 5, because polite, but no one asks when the next one is',
      ] },
      { type: 'paragraph', text: 'A class run in English from the start removes that whole layer. The Swedes are fine, English is fine for them too. The international team members can actually listen instead of decode. The class lands the same way for everyone, which is what you wanted in the first place.' },
      { type: 'heading', text: 'What I deliver' },
      { type: 'paragraph', text: 'A private yoga class for your team, in English, at your office or conference venue. 60 minutes by default. I bring mats and blocks. No one needs to be a yoga person. The class adapts to the group in the room, which means it works for the engineer who runs marathons, the head of finance who hasn\'t stretched since school, and the new hire who\'s pregnant.' },
      { type: 'list', items: [
        'Style: gentle to medium vinyasa, with options for everyone. No headstands, no hot room, no chanting',
        'Duration: 60 minutes standard. 45 or 75 minutes on request',
        'Group size: up to 25 comfortably in a normal conference room, up to 40 in a larger space',
        'Equipment: I bring mats and blocks for up to 25. Teams over 20 are easier if you have a clear space and people bring their own mats or wear comfortable clothes',
        'Language: English by default. A few Swedish phrases sprinkled in for the Swedes if it fits',
        'Music: optional, ambient and unobtrusive, can be skipped',
      ] },
      { type: 'paragraph', text: 'Full setup, pricing and FAQ on the [corporate yoga page](/tjanster/foretagsyoga). The Swedish-language version of this article, with more on pricing breakdowns, is at [Företagsyoga, vad ingår och kostar?](/blogg/foretagsyoga-vad-ingar-och-kostar).' },
      { type: 'heading', text: 'Three formats that work for international teams' },
      { type: 'subheading', text: 'Recurring weekly or biweekly class at the office' },
      { type: 'paragraph', text: 'The most-booked format. A 60-minute class on the same day and time, every week or every other week, in a conference room or open space at your office. People show up, do the class, go back to their desks or out for the day. It\'s the version that actually changes how a team feels at work, because the cumulative effect is what does the work, not any one class.' },
      { type: 'paragraph', text: 'Why it works for international teams: the schedule is in everyone\'s calendar, nobody has to coordinate, the format is the same every week. Easy to commit to even when the team is busy.' },
      { type: 'list', items: [
        'Best for: teams of 8 to 25 with stable schedules',
        'Price: from 3 000 SEK per session in Stockholm (excl. VAT)',
        'Recurring discount: yes, for 8+ sessions booked together',
        'Lead time: 2 to 4 weeks for the first session, ongoing after that',
      ] },
      { type: 'subheading', text: 'Conference yoga or kickoff day yoga' },
      { type: 'paragraph', text: 'A single class as part of a conference, kickoff, or offsite. Morning before the program starts, afternoon as a reset between sessions, or end of the day as a closing. Works particularly well for international teams flying in from other offices, because everyone\'s slightly jet-lagged and a 60-minute reset is the difference between an alert afternoon and a flat one.' },
      { type: 'paragraph', text: 'Why it works for international teams: shared experience across people who don\'t see each other often. Yoga creates a shared room very quickly. Conversation flows better at dinner if everyone wobbled together at 09:00.' },
      { type: 'list', items: [
        'Best for: conferences, kickoffs, quarterly offsites, leadership weeks',
        'Price: from 3 000 SEK per session in Stockholm, custom quotes for full-day or multi-session bookings',
        'Group size: up to 40 in the right room',
        'Lead time: 3 to 6 weeks, longer in May, June, October and November (peak conference season)',
      ] },
      { type: 'subheading', text: 'One-off team day or wellness experience' },
      { type: 'paragraph', text: 'A single class as a wellness perk, a team day, or part of a longer offsite. Could be at the office, at a conference venue, outdoors in summer, or paired with [SUP yoga and sauna](/tjanster/sup-yoga) at Sickla Strand for a longer experience. Often the entry point, a team tries it once, then books a recurring rhythm.' },
      { type: 'list', items: [
        'Best for: trying it before committing, smaller teams, wellness weeks',
        'Price: from 3 000 SEK per session in Stockholm (excl. VAT)',
        'Lead time: 1 to 3 weeks usually workable',
      ] },
      { type: 'heading', text: 'What to send when you email' },
      { type: 'paragraph', text: 'To get a concrete quote in the first reply rather than a back-and-forth, send the following:' },
      { type: 'list', items: [
        'Date and time, or two to three options',
        'Headcount, and whether the number is approximate or firm',
        'Address, or "open to suggestions"',
        'Recurring or one-off?',
        'Language: confirmed in English, or mixed Swedish/English',
        'Any constraints: pregnancy in the team, injuries, anyone with a chronic condition',
        'Budget range if you have one, otherwise I\'ll suggest a format that fits the headcount',
      ] },
      { type: 'paragraph', text: 'Email goes to [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com). I\'ll come back with two or three format options, a quote, and the next available slot.' },
      { type: 'heading', text: 'Pricing for international teams in Stockholm' },
      { type: 'table',
        tableHead: ['Format', 'Group size', 'Price (excl. VAT)', 'Lead time'],
        tableRows: [
          ['Single class', 'up to 25', 'from 3 000 SEK', '1 to 3 weeks'],
          ['Recurring weekly or biweekly', '8 to 25', 'from 2 600 SEK / class (8+ sessions)', '2 to 4 weeks'],
          ['Conference / kickoff day', 'up to 40', 'from 3 500 SEK per session', '3 to 6 weeks'],
          ['Half-day combined with SUP yoga', '3 to 10', 'from 500 SEK / person', '3 to 6 weeks (May to Sep)'],
        ]
      },
      { type: 'paragraph', text: 'All prices are starting points and excl. VAT. Final quotes depend on day of the week, location within Stockholm, group size, and equipment needs. I invoice with Swedish F-tax, so finance teams can book the cost under wellness or conference expense.' },
      { type: 'heading', text: 'A note on what won\'t work' },
      { type: 'paragraph', text: 'A few honest caveats, because I\'d rather not waste your team\'s afternoon.' },
      { type: 'list', items: [
        'A 25-minute class doesn\'t work. The team takes 10 minutes to land, has 10 minutes of practice, and is back at their desks before anything resets. Book 60 minutes or skip it',
        'Booking yoga for a team that\'s vocally resistant doesn\'t work. The reluctance spreads. If the team isn\'t up for it, do something else and revisit later',
        'Squeezing a yoga session between two intense workshops doesn\'t work. The class needs 15 minutes either side to actually function. Build the schedule with that in mind',
        'Booking once a quarter "for wellness" rarely sticks. The cumulative effect is what does the work. Either book a recurring rhythm or treat it as a one-off experience, not both',
      ] },
      { type: 'paragraph', text: 'A team day with SUP yoga and sauna is often a better fit than a single office class if the team is together infrequently. More on that in the [team building guide](/blogg/team-building-activities-stockholm).' },
      { type: 'heading', text: 'Frequently asked questions from HR and team leads' },
      { type: 'faq', faqItems: [
        { q: 'Is the class taught in English?', a: 'Yes, by default. I\'m Australian, 500-hour certified, and all my corporate classes run in English unless the team specifically asks for Swedish. A few Swedish phrases can be sprinkled in for Swedish team members if it fits.' },
        { q: 'Can the whole team take part, including people who have never done yoga?', a: 'Yes. The class is designed for complete beginners and people who haven\'t moved much, while still giving more experienced practitioners something to work with. No headstands, no fancy poses, nothing punishing.' },
        { q: 'Where do you teach? At our office or somewhere else?', a: 'Both. Most bookings are at the company\'s office or conference venue. I can also pair an office session with outdoor yoga or SUP yoga at Sickla Strand for a longer team experience.' },
        { q: 'How much does a class cost?', a: 'From 3 000 SEK per session in Stockholm for a 60-minute class for up to 25 people, excl. VAT. Recurring weekly or biweekly bookings get a per-class discount. Conference and offsite formats are usually 3 500 SEK and up depending on length and group size.' },
        { q: 'What equipment do we need to provide?', a: 'Mats and blocks for up to 25 are included. For larger groups, either rent additional mats or ask the team to bring comfortable clothes and we\'ll work without mats where it makes sense. The room needs to be clear of furniture, that\'s the main logistical lift.' },
        { q: 'How far in advance do we need to book?', a: '1 to 3 weeks is usually workable for a single session. Recurring bookings need 2 to 4 weeks to set up. Conference and kickoff bookings should go in 3 to 6 weeks ahead, especially during May to June and October to November.' },
        { q: 'What if someone is pregnant or has an injury?', a: 'The class adapts. Yoga can be modified around pregnancy (any trimester, but I need to know), knee and back injuries, shoulder issues, and most chronic conditions. Always flag anything specific in advance so I can plan modifications without singling anyone out in class.' },
        { q: 'Do you cover anywhere outside central Stockholm?', a: 'Inner-city Stockholm, Solna, Sundbyberg, Sickla, and Hammarby Sjöstad without travel surcharge. Further out (Kista, Älvsjö, Bromma, Lidingö, the archipelago) is workable with a travel cost added to the quote.' },
        { q: 'Can we book yoga for a remote / hybrid team?', a: 'Yes. I run Zoom sessions for distributed teams, with the in-office members in the same room and the remote members joining individually. Works best for groups of 6 to 15. Not the same as in-person but a real option for teams that can\'t all be in the same city.' },
        { q: 'Do you offer corporate retainers?', a: 'For ongoing engagements (weekly or biweekly for six months or more), yes, with a fixed monthly fee and a guaranteed slot. Better cost predictability for finance teams and easier to plan. Email and I\'ll send the framework.' },
      ] },
      { type: 'heading', text: 'Next step' },
      { type: 'paragraph', text: 'Email [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) with date, headcount, and the address. I\'ll come back with two or three format options, a quote, and the next available slot. More background on the format at [Corporate yoga](/tjanster/foretagsyoga) and the longer Swedish-language pricing breakdown at [Företagsyoga, vad ingår och kostar?](/blogg/foretagsyoga-vad-ingar-och-kostar).' },
    ]
  },
  {
    slug: 'australian-yoga-teacher-stockholm-cabin-story',
    title: 'Why an Australian Yoga Teacher Ended Up in a Swedish Cabin (and What That Means for Your Practice)',
    metaDescription: 'How an Australian 500-hour certified yoga teacher ended up teaching from a forest cabin in Dalarna and on the water in Stockholm, and what an Australian teaching philosophy actually changes about your practice.',
    publishDate: '2026-05-11',
    readingTime: '7 min',
    category: 'Personligt',
    excerpt: 'I grew up doing yoga on a beach in Australia. I now teach it from a cabin in a Swedish forest and on a paddleboard at Sickla Strand. The route is less interesting than the difference it makes to how I teach. Here is the short version.',
    relatedServiceHref: '/om-mig',
    relatedServiceLabel: 'More about me',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'yoga-in-english-stockholm-expat-guide', label: 'Yoga in English in Stockholm, an expat\'s guide' },
      { slug: 'paddleboard-yoga-stockholm-sickla-strand', label: 'Paddleboard yoga in Stockholm at Sickla Strand' },
      { slug: 'office-yoga-english-international-teams-stockholm', label: 'Office yoga in English for international teams' },
      { slug: 'team-building-activities-stockholm', label: 'Team building in Stockholm, 7 activities' },
    ],
    content: [
      { type: 'paragraph', text: 'The short version: I\'m Australian, I\'m 500-hour certified, I now live in a forest cabin in Dalarna with chickens, and I teach yoga in Stockholm and across Sweden. The longer version explains why that combination matters more for your practice than it sounds like it should.' },
      { type: 'heading', text: 'How I got here' },
      { type: 'paragraph', text: 'I grew up on the east coast of Australia, where yoga isn\'t a special thing. People do it on the beach in the morning. There\'s a class in the back of every gym. Nobody talks about it the way it gets talked about online, with the candles and the captions. It\'s just something you do, like swimming or walking.' },
      { type: 'paragraph', text: 'I did my first 200-hour teacher training in my twenties, mostly because I wanted to understand what was happening in my own body when I practised, not because I planned to teach. The teaching part came later, slowly. I taught small classes on weekends. I did a 500-hour at a school I respected. I started building a practice that other people could trust.' },
      { type: 'paragraph', text: 'Then I met a Swede. The way these things go.' },
      { type: 'heading', text: 'Why a cabin in a forest in Dalarna' },
      { type: 'paragraph', text: 'I moved to Sweden a few years ago. I tried Stockholm first, because that\'s where the work was, and it was fine. Good food. Reliable trains. Polite people. But I missed space. The kind of space you don\'t get in any city, regardless of which country it\'s in.' },
      { type: 'paragraph', text: 'We found a cabin in Dalarna, three hours north of the city, surrounded by trees. Not a renovated farmhouse with a Pinterest mood-board, an actual cabin, with a wood stove and chickens we now keep. It\'s quiet in a way I forgot was possible. I teach yoga on the deck in summer, in a heated space inside in winter, and the chickens wander around during the warmer half of the year.' },
      { type: 'paragraph', text: 'I still teach in Stockholm regularly, weekly SUP yoga at Sickla Strand, corporate yoga at offices around town, private events. The two locations together are the thing I offer that nobody else can: an Australian yoga teacher who lives between a Swedish forest and a Stockholm waterfront.' },
      { type: 'heading', text: 'What an Australian teaching style actually changes' },
      { type: 'paragraph', text: 'Yoga is global enough that "where the teacher is from" can sound like a marketing line. It\'s not nothing, though. A few things shift when you train and teach in the Australian context:' },
      { type: 'subheading', text: 'Less ceremony, more practice' },
      { type: 'paragraph', text: 'Australian yoga is generally low on ceremony. Less Sanskrit, fewer Om\'s, less of the language that can feel like you\'ve walked into someone else\'s religion if it\'s not yours. The poses are still the poses. The breath is still the breath. But the framing is closer to "this is something to do with your body" than "this is a spiritual journey".' },
      { type: 'paragraph', text: 'That suits a lot of expats and Swedes who like the practice but not the packaging.' },
      { type: 'subheading', text: 'Outdoors as default, not as a novelty' },
      { type: 'paragraph', text: 'Yoga in Australia happens outside as often as inside. It\'s normal to roll a mat onto the grass or the sand. Translating that to Sweden means I lean into outdoor formats more than most Stockholm studios, SUP yoga on the water in summer, yoga on the cabin deck, outdoor classes for private events when the weather cooperates. The outdoor part isn\'t a marketing angle, it\'s just how I trained.' },
      { type: 'subheading', text: 'Direct, not performative' },
      { type: 'paragraph', text: 'I don\'t coach in the inspirational-quote style. I\'ll tell you to soften your jaw if your jaw is tight. I\'ll tell you to skip a pose if it\'s not working today. I won\'t deliver a metaphor about a flower opening because that\'s not how I talk and it\'s probably not how you want to be talked to either.' },
      { type: 'paragraph', text: 'Most of my clients in Stockholm are high-functioning adults who can read between metaphors. They want the instruction clear and the practice solid. That\'s what I do.' },
      { type: 'subheading', text: 'English is the first language, not the translated one' },
      { type: 'paragraph', text: 'I teach in English by default. The cues are in English. The corrections are in English. The half-sentence I drop in when I see someone forcing a pose, also in English. For people doing yoga in their second language already, that one detail is what makes a class actually land instead of feel like a workout you happened to attend.' },
      { type: 'heading', text: 'What you can actually book' },
      { type: 'paragraph', text: 'A quick summary of where I teach and what I offer, so this isn\'t just a story.' },
      { type: 'list', items: [
        '[SUP yoga drop-in classes](/tjanster/sup-yoga-klasser) at Sickla Strand in Stockholm, weekly from late April to September',
        '[Private SUP yoga and sauna](/tjanster/sup-yoga) for groups, hen parties, team days, birthdays, also at Sickla Strand',
        '[Corporate yoga](/tjanster/foretagsyoga) at offices, conferences, and offsites across Stockholm and Dalarna',
        '[Private events and retreats](/tjanster/privata-event) in Dalarna (cabin deck, chickens, forest) and Stockholm (any venue you book or one I suggest)',
        '[Hönsyoga](/tjanster/honsyoga) in Dalarna, which is yoga with chickens roaming around, and yes that\'s a real service and yes people book it',
      ] },
      { type: 'paragraph', text: 'Online private and small-group sessions over Zoom for clients outside Stockholm or for travel weeks.' },
      { type: 'heading', text: 'What I don\'t do' },
      { type: 'paragraph', text: 'For honesty, since you got this far:' },
      { type: 'list', items: [
        'No headstands, handstands, or other advanced poses. That\'s a deliberate position, not a limitation. Yoga as self-acceptance, not self-improvement',
        'No hot rooms. The room temperature is whatever the room temperature is',
        'No spiritual framing you didn\'t sign up for. If you want a deeper philosophical thread, I can offer one. If you don\'t, the practice still works',
        'No 6am classes. I\'m a morning person but I\'m not that morning',
        'No drop-ins for the corporate yoga work, those are private bookings. The drop-ins are SUP yoga at Sickla Strand',
      ] },
      { type: 'heading', text: 'Frequently asked questions' },
      { type: 'faq', faqItems: [
        { q: 'Are you actually Australian or is that branding?', a: 'Actually Australian. Born and raised on the east coast. I still sound like it. The accent doesn\'t fade in Stockholm winters as much as you\'d think.' },
        { q: 'Where in Sweden are you based?', a: 'I live in a cabin in Dalarna, three hours north of Stockholm. I teach weekly in Stockholm at Sickla Strand and travel into the city regularly for private and corporate bookings. Most clients book me in Stockholm. Dalarna is where I live and where the retreat and cabin-based offerings happen.' },
        { q: 'Do you teach in English?', a: 'All my classes run in English by default. I\'m Australian, English is my first language. A few Swedish phrases sprinkled in if it fits the group, but the class is in English from start to finish.' },
        { q: 'What style of yoga do you teach?', a: 'A mix of vinyasa and yin, depending on the format and the group. Vinyasa for movement, yin for stillness, often both in the same class. No extreme poses, no hot room. Closer to "challenging but not punishing" than "yoga as fitness goal".' },
        { q: 'Do you have a studio?', a: 'No. I teach at clients\' venues, on the water at Sickla Strand (in partnership with Smashing Balance), and at the cabin in Dalarna for retreats and private events. Means I can be more flexible, no studio overhead, no class card system to navigate.' },
        { q: 'Are the chickens part of yoga or is that a side hobby?', a: 'Both. They live with us at the cabin. They\'re part of the lifestyle, but they\'ve also turned into [hönsyoga](/tjanster/honsyoga), which is a private offering for groups in Dalarna. Hens wandering around while we practise. It works better than it sounds.' },
        { q: 'Can I take a private class with you?', a: 'Yes, 1-on-1 and small group, in Stockholm, in Dalarna, or over Zoom. Email with what you\'re looking for and your schedule constraints.' },
        { q: 'I just want to try one class to see if you\'re a fit. What\'s the easiest entry point?', a: 'Drop-in SUP yoga at Sickla Strand from late April to September. Single class, no commitment, you\'ll see how I teach in 75 minutes. Booked through Smashing Balance.' },
      ] },
      { type: 'heading', text: 'If you want to get in touch' },
      { type: 'paragraph', text: 'Email [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com). Tell me what you\'re looking for and roughly when, and I\'ll come back with a format, a quote, and the next available slot. If you\'re still in the looking-around phase, the [About page](/om-mig) has more on credentials and background, and the [expat guide to yoga in English in Stockholm](/blogg/yoga-in-english-stockholm-expat-guide) covers the full picture of what\'s out there in the city.' },
    ]
  }
];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
