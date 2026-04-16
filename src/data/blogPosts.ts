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
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'list';
  text?: string;
  items?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'yoga-mohippa-dalarna',
    title: 'Yoga möhippa i Dalarna. Det roligaste brudpartyt ingen pratat om.',
    metaDescription: 'Letar du efter en unik möhippa-idé? Yoga möhippa i Dalarna funkar för alla i gruppen. Ingen erfarenhet krävs. Från 3 000 kr.',
    publishDate: '2026-03-01',
    readingTime: '5 min',
    category: 'Events & Möhippa',
    excerpt: 'Trött på samma möhippa-koncept? Yoga är det oväntade valet som hela gruppen faktiskt uppskattar.',
    relatedServiceHref: '/tjanster/privata-event',
    relatedServiceLabel: 'Boka privat event med yoga',
    relatedPosts: [
      { slug: 'mohippa-dalarna-aktiviteter', label: 'Möhippa i Dalarna, 7 aktiviteter' },
      { slug: 'vad-kostar-privat-yoga-stockholm', label: 'Vad kostar privat yoga?' },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'De flesta möhippor ser ungefär likadana ut. Restaurang, bar, kanske en aktivitet som hälften av gruppen inte riktigt vill göra.'
      },
      {
        type: 'paragraph',
        text: 'Yoga möhippa är alternativet. En privat klass för hela gruppen, utomhus i naturen eller i en lokal ni väljer. Alla kan delta, ingen erfarenhet krävs.'
      },
      {
        type: 'heading',
        text: 'Varför yoga funkar när andra aktiviteter missar'
      },
      {
        type: 'paragraph',
        text: 'Möhippans dilemma är alltid detsamma. Gruppen är aldrig homogen. Det finns mamman som inte dricker. Kompisen som inte springer. Kollegan med ryggproblem. En yogaklass löser det. Alla kan delta. Ingen behöver prestera.'
      },
      {
        type: 'paragraph',
        text: 'Sen händer något när en grupp rör sig och andas tillsammans. En gemenskap som middagsbord med placering aldrig riktigt lyckas med. På matten är alla lika. Brudens närmaste krets brukar bli förvånad över hur sammansvetsat det känns efteråt.'
      },
      {
        type: 'heading',
        text: 'Möhippa-yoga i Dalarna. Skogen som bakgrund.'
      },
      {
        type: 'paragraph',
        text: 'Vi håller klassen utomhus på altanen, omgiven av granar och fågelljud. Det är en miljö som skapar ett annat mindset direkt. Borta från stan. Inne i något stillare.'
      },
      {
        type: 'paragraph',
        text: 'Många grupper kombinerar med en stughelg. Hyr en stuga på fredagen. Yoga lördagsmorgon. Vila och natur resten av helgen. Det är ett möhippaupplägg som skiljer sig från allt annat.'
      },
      {
        type: 'heading',
        text: 'Möhippa-yoga i Stockholm'
      },
      {
        type: 'paragraph',
        text: 'Vill ni ha möhippa-yoga utan att resa? Jag kan komma till er med all utrustning. Lägenhet, hyrd lokal eller park. Jag fixar matten, du fixar brudtärnan.'
      },
      {
        type: 'paragraph',
        text: 'Vill ni ta det ett steg till? SUP yoga på Sickla sjö skapar skratt och minnen som håller längre än kvällen.'
      },
      {
        type: 'heading',
        text: 'Vad ingår?'
      },
      {
        type: 'list',
        items: [
          'Privat klass för er grupp, upp till 10 personer',
          'All utrustning: mattor, block, bolster',
          'Klass anpassad för gruppens nivå. Inga förkunskaper krävs.',
          'Undervisning på engelska (svenska om det behövs)',
          '60 eller 90 minuter. Ni väljer.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Pris: från 3 000 kr. Maila hello.yogawithcamilla@gmail.com med datum och antal. Jag svarar inom ett dygn.'
      }
    ]
  },
  {
    slug: 'konferensyoga-teambuilding',
    title: 'Konferensyoga. Varför 60 minuter yoga slår ännu en teambuilding.',
    metaDescription: 'Konferensyoga i Stockholm och Dalarna. 60 minuter som ger mer energi än ytterligare en fika. Från 3 000 kr. Jag kommer till er med allt.',
    publishDate: '2026-03-08',
    readingTime: '5 min',
    category: 'Företag & Konferens',
    excerpt: 'Ditt team har suttit i sex timmar. Hälften kollar telefonen. Lösningen är inte mer kaffe. Det är 60 minuter yoga.',
    relatedServiceHref: '/tjanster/foretagsyoga',
    relatedServiceLabel: 'Boka företagsyoga',
    relatedPosts: [
      { slug: 'foretagsyoga-vad-ingar-och-kostar', label: 'Företagsyoga, vad ingår och kostar?' },
      { slug: 'yoga-retreat-dalarna-vs-stockholm', label: 'Retreat Dalarna vs Stockholm' },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Day 2 av konferensen. Alla har suttit i sex timmar. Luften är dålig. Kaffet smakar plast. Hälften av teamet kollar telefonen under presentationerna.'
      },
      {
        type: 'paragraph',
        text: 'Det är inte ointresse. Det är fysiologi. Kroppen är byggd för rörelse. Håll den still för länge och hjärnan stänger ner. Lösningen? Inte mer kaffe. 60 minuter yoga.'
      },
      {
        type: 'heading',
        text: 'Vad yoga gör med en konferensgrupp'
      },
      {
        type: 'paragraph',
        text: 'Yoga på konferensen är inte avslappning. Det är återaktivering. Rörelse, andning och fokus triggar det parasympatiska nervsystemet. Det system som ger lugn, klarhet och beslutsförmåga. Precis det du vill ha i ett rum fullt av människor som ska fatta beslut.'
      },
      {
        type: 'paragraph',
        text: 'Och det händer något annat. Det är svårt att vara formell när man försöker balansera på ett ben bredvid sin chef. Skratten gör mer för psykologisk trygghet än de flesta teambuilding-övningar.'
      },
      {
        type: 'heading',
        text: 'Tre sätt att lägga in yoga'
      },
      {
        type: 'list',
        items: [
          'Morgonyoga (07:30-08:30) innan dagen drar igång. Sätter rätt energi.',
          'Lunchyoga (12:00-13:00) istället för eller med lunch. Återställer fokus.',
          'Avslutningsyoga på sista dagen. Landa i rörelse istället för PowerPoint.'
        ]
      },
      {
        type: 'heading',
        text: 'Konferensyoga i Dalarna'
      },
      {
        type: 'paragraph',
        text: 'Fler företag håller konferens i Dalarna. Om ni redan är i regionen, lägg till yoga på programmet. Jag kan komma till er anläggning eller hålla klassen utomhus på altanen i skogen. En klass i naturen slår alla konferenssalar.'
      },
      {
        type: 'heading',
        text: 'Konferensyoga i Stockholm'
      },
      {
        type: 'paragraph',
        text: 'Jag kommer till er med all utrustning. Eller hjälper till att hitta en yogasal om ni behöver separat utrymme. Funkar också som regelbunden yoga på kontoret om teamet vill ha det varje vecka.'
      },
      {
        type: 'paragraph',
        text: 'Pris: från 3 000 kr för 60 minuter. Maila hello.yogawithcamilla@gmail.com med datum, antal och plats. Jag svarar med tillgänglighet och ett förslag.'
      }
    ]
  },
  {
    slug: 'sup-yoga-stockholm',
    title: 'SUP yoga Stockholm. Vad är det och varför ska du prova det?',
    metaDescription: 'SUP yoga i Stockholm: yoga på bräda vid Sickla sjö. Perfekt för möhippa, grupper och dig som vill prova något nytt. Ingen erfarenhet krävs.',
    publishDate: '2026-03-15',
    readingTime: '5 min',
    category: 'SUP Yoga',
    excerpt: 'Yoga på vatten. Roligare och mer avslappnande än det låter. Här är allt du behöver veta om SUP yoga i Stockholm.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Boka SUP Yoga',
    relatedPosts: [
      { slug: 'mohippa-dalarna-aktiviteter', label: 'Möhippa i Dalarna, 7 aktiviteter' },
      { slug: 'vad-kostar-privat-yoga-stockholm', label: 'Vad kostar privat yoga?' },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Du ligger i savasana. Brädan gungar lite. Vattnet glittrar. Tyst förutom fågelljud och svagt ploppande av åror en bit bort.'
      },
      {
        type: 'paragraph',
        text: 'Det är SUP yoga. Och det är en av de mer ovanliga sakerna du kan göra i Stockholm den här sommaren.'
      },
      {
        type: 'heading',
        text: 'Vad är SUP yoga?'
      },
      {
        type: 'paragraph',
        text: 'Yoga på en uppblåsbar surfbräda. Brädorna är bredare och stabilare än vanliga SUP-brädor, designade för yoga. Men de är fortfarande instabila nog att göra varje pose lite mer utmanande. Och lite mer rolig.'
      },
      {
        type: 'paragraph',
        text: 'Den instabila ytan tvingar dig att fokusera. Du aktiverar djupare muskler och kan inte tänka på jobbet. Det är omöjligt att multitaska när du försöker hålla balansen.'
      },
      {
        type: 'heading',
        text: 'Var?'
      },
      {
        type: 'paragraph',
        text: 'Sickla sjö i Stockholm. I samarbete med Smashing Balance som sköter brädor och säkerhet. Lugnt insjöläge, några minuter från tunnelbanan.'
      },
      {
        type: 'heading',
        text: 'Behöver jag kunna yoga? Eller paddla?'
      },
      {
        type: 'paragraph',
        text: 'Nej. Varken eller. Vi börjar med intro på land, sen ut på vattnet. Klassen anpassas för gruppen.'
      },
      {
        type: 'paragraph',
        text: 'Du kan hamna i vattnet. Det händer. Det är varmt nog under sommaren och det är en del av upplevelsen.'
      },
      {
        type: 'heading',
        text: 'SUP yoga för möhippa och grupper'
      },
      {
        type: 'paragraph',
        text: 'En av de mest efterfrågade möhippa-aktiviteterna i Stockholm. Roligt, inkluderande, och det ger minnen som håller.'
      },
      {
        type: 'paragraph',
        text: 'Boka för din grupp: maila hello.yogawithcamilla@gmail.com med datum och antal.'
      }
    ]
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
        text: 'Dalarna är en av de populäraste bröllopsdestinationerna i Sverige. Naturskönt, lugnt. Och jag finns runt hörnet med en altan omgiven av skog. Jag kan hålla yoga på er lokation, på stugan, eller utomhus.'
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
    title: 'Hönsyoga i Dalarna. Yoga utomhus med höns.',
    metaDescription: 'Hönsyoga i Dalarna: yoga på altanen med höns runt mattorna. Privat bokning för 2-6 personer. Maj till september.',
    publishDate: '2026-03-24',
    readingTime: '4 min',
    category: 'Yoga & Natur',
    excerpt: 'Yoga på altanen med höns som vandrar runt mattorna. En jordnära upplevelse i Dalarna för dig som vill ha yoga med lite karaktär.',
    relatedServiceHref: '/tjanster/honsyoga',
    relatedServiceLabel: 'Boka hönsyoga i Dalarna',
    content: [
      {
        type: 'paragraph',
        text: 'Vi har höns. De lever sina egna liv, rör sig fritt på altanen, och bryr sig inte om vad vi gör på mattorna. Det är en del av upplevelsen.'
      },
      {
        type: 'paragraph',
        text: 'Hönsyoga är ett vanligt yogapass på altanen vid stugan i Dalarna. Hönsen strövar runt. De pickar. De är där. Och det gör något med stämningen som är svårt att förklara men lätt att känna.'
      },
      {
        type: 'heading',
        text: 'Vad är hönsyoga?'
      },
      {
        type: 'paragraph',
        text: 'Ett ordentligt yogapass. Rörelse, andning, närvaro. 500-timmars certifierad lärare. Det är inte en gimmick. Men hönsen är med. Och de förändrar något.'
      },
      {
        type: 'paragraph',
        text: 'De interagerar inte med dig. De vandrar runt på sitt eget vis. Men deras närvaro skapar en mjukhet som en vanlig yogasal inte kan.'
      },
      {
        type: 'heading',
        text: 'Varför funkar det?'
      },
      {
        type: 'paragraph',
        text: 'Djur tar oss in i nuet. Omedelbart. Ofrivilligt. Forskning visar sänkt blodtryck, minskad stress. Kombinera det med yoga och du får något som är svårt att matcha inomhus.'
      },
      {
        type: 'paragraph',
        text: 'Det handlar också om att vara utomhus. I riktig natur. Med djurliv som pågår parallellt. Det är Dalarna som det faktiskt ser ut.'
      },
      {
        type: 'heading',
        text: 'Hur ser ett pass ut?'
      },
      {
        type: 'list',
        items: [
          'Altanen vid stugan i Dalarna',
          'Hönsen fritt strövande runt mattorna',
          '60 minuter, anpassat för alla nivåer',
          'Grupper, möhippor, vänner, sällskap',
          'Mattor och utrustning ingår',
          'Max 6 deltagare per bokning'
        ]
      },
      {
        type: 'paragraph',
        text: 'Funkar utmärkt för nybörjare. Hönsen tar bort allvaret utan att ta bort syftet.'
      },
      {
        type: 'heading',
        text: 'Boka'
      },
      {
        type: 'paragraph',
        text: 'Privat bokning, 2-6 personer. Säsong: maj till september. Maila hello.yogawithcamilla@gmail.com med datum och antal.'
      }
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
    relatedServiceHref: '/tjanster/mini-retreat',
    relatedServiceLabel: 'Se retreat & upplevelser i Dalarna',
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
          'Dag-retreat? Se mini-retreat-sidan.',
          'Grupp? Se äventyrpaket eller privata events.',
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
    slug: 'vad-kostar-privat-yoga-stockholm',
    title: 'Vad kostar privat yoga i Stockholm 2026?',
    metaDescription: 'Privat yoga i Stockholm: från 3 000 kr för en grupp-event med yogalärare, mattor och resa. En-till-en online från lägre pris. Här är vad du betalar för.',
    publishDate: '2026-04-09',
    readingTime: '5 min',
    category: 'Priser & Praktiskt',
    excerpt: 'Privat yoga betyder olika saker beroende på vad du letar efter. Här är en rak genomgång av vad det kostar, vad som ingår och vilken typ som passar dig.',
    relatedServiceHref: '/tjanster/privatlektioner',
    relatedServiceLabel: 'Boka privat yoga',
    relatedPosts: [
      { slug: 'foretagsyoga-vad-ingar-och-kostar', label: 'Företagsyoga, vad ingår och kostar?' },
      { slug: 'yoga-retreat-dalarna-vs-stockholm', label: 'Retreat Dalarna vs Stockholm' },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Du googlar "privat yoga Stockholm". Men vad menar du egentligen?'
      },
      {
        type: 'paragraph',
        text: 'Privat yoga kan betyda två helt olika saker. Det kan vara en en-till-en lektion, bara du och en lärare. Eller så kan det vara ett privat event för en grupp: en möhippa, ett företagsevent, en bröllopsmorgon, en retreat. Priset beror helt på vilken typ du letar efter.'
      },
      {
        type: 'heading',
        text: 'Typ 1: Privat grupp-event'
      },
      {
        type: 'paragraph',
        text: 'Det här är det vanligaste jag bokas för. En grupp på 4-20 personer som vill ha en privat yogaklass som en del av en upplevelse. Möhippor. Konferenser. Bröllopshelger. Födelsedagar. Kickoffs.'
      },
      {
        type: 'paragraph',
        text: 'Vad ingår? Jag, all utrustning (mattor, block), resa till er plats, och en klass anpassad för gruppen. Ni behöver inte ordna något utöver utrymmet.'
      },
      {
        type: 'paragraph',
        text: 'Pris: från 3 000 kr för 60 minuter. Det inkluderar lärare, utrustning och resa inom Stockholm eller Dalarna. Grupper på 10+ personer eller event utanför stan kan kosta mer. Ni får en exakt offert samma dag.'
      },
      {
        type: 'heading',
        text: 'Typ 2: En-till-en lektion'
      },
      {
        type: 'paragraph',
        text: 'Det här är för dig som vill jobba med din egen praktik. Du och jag, 60 eller 90 minuter. Jag ser din kropp, korrigerar i realtid, och bygger klassen kring vad du behöver. Inte vad en hel studio behöver.'
      },
      {
        type: 'paragraph',
        text: 'Privatlektioner sker online via Zoom (på engelska) eller i person om du befinner dig i Dalarna. Kontakta mig för pris och paket.'
      },
      {
        type: 'heading',
        text: 'Varför kostar det mer än drop-in?'
      },
      {
        type: 'paragraph',
        text: 'Drop-in på en studio kostar 150-250 kr per pass. Men du delar läraren med 20 andra. Ingen ser din kropp. Ingen anpassar. Du följer instruktioner och hoppas att det passar.'
      },
      {
        type: 'paragraph',
        text: 'Privat yoga är något annat. Vid ett grupp-event får ni en klass som är byggd för just er. Vid en-till-en får du en lärare som ser exakt var du behöver hjälp. Det är skillnaden mellan att "göra yoga" och att faktiskt förstå vad yoga gör i din kropp.'
      },
      {
        type: 'heading',
        text: 'Vilken typ passar dig?'
      },
      {
        type: 'list',
        items: [
          'Möhippa, bröllop eller fest? Grupp-event. Från 3 000 kr. Jag kommer till er.',
          'Företag, konferens eller kickoff? Grupp-event. Från 3 000 kr. Allt ingår.',
          'Vill du förbättra din egen praktik? En-till-en online via Zoom.',
          'Bor du i Dalarna? Privat klass på altanen i skogen.'
        ]
      },
      {
        type: 'heading',
        text: 'Boka'
      },
      {
        type: 'paragraph',
        text: 'Maila hello.yogawithcamilla@gmail.com. Berätta vad du letar efter, hur många ni är, och var. Jag svarar med en offert samma dag.'
      }
    ]
  },
  {
    slug: 'mohippa-dalarna-aktiviteter',
    title: 'Möhippa i Dalarna. 7 aktiviteter utöver det vanliga.',
    metaDescription: 'Planerar du möhippa i Dalarna? 7 aktiviteter som funkar. Yoga i skogen, hönsyoga, SUP, vandring. Stuga + natur = minnesvärd helg.',
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
        text: 'Dalarna har blivit en av de populäraste möhippa-destinationerna. Stugorna, naturen, lugnet. Fler grupper väljer en helg här istället för en kväll i stan.'
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
        text: 'Privat yogaklass i naturen. Utomhus, i skogen, fågelsång som soundtrack. Alla nivåer. Sätter stämningen för hela helgen. Jag kan komma till er stuga med all utrustning.'
      },
      {
        type: 'heading',
        text: '2. Hönsyoga'
      },
      {
        type: 'paragraph',
        text: 'Yoga på altanen vid stugan, med höns som vandrar fritt runt mattorna. Det är en av de mest uppskattade upplevelserna jag erbjuder. Hönsen skapar en lätthet som gör att hela gruppen slappnar av.'
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
        text: 'Många stugor i Dalarna har bastu. Har ni en sjö i närheten blir det ett naturligt inslag. Basta, dopp, upprepa.'
      },
      {
        type: 'heading',
        text: '5. Matlagning på stugan'
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
        text: 'Det bästa med en möhippa i Dalarna är att programmet kan vara enkelt. Stuga + natur + en eller två organiserade aktiviteter = en helg som alla minns. Vill ni ha yoga som en del av det? Hör av er på hello.yogawithcamilla@gmail.com.'
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
    relatedServiceHref: '/tjanster/mini-retreat',
    relatedServiceLabel: 'Boka mini retreat i Dalarna',
    relatedPosts: [
      { slug: 'outdoor-yoga-dalarna', label: 'Utomhusyoga i Dalarna' },
      { slug: 'vad-kostar-privat-yoga-stockholm', label: 'Vad kostar privat yoga?' },
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
        text: 'Jag erbjuder mini-retreats i Dalarna: en halvdag eller heldag med yoga, andningsövningar och tid i naturen. Perfekt för dig som vill ha retreat-känslan utan att ta en hel vecka ledigt.'
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
          'Är ni en grupp (möhippa, företag)? → Dalarna med stuga ger den starkaste upplevelsen.',
          'Har du ont om tid? → Stockholm. Inga resor, flexibla tider.',
          'Budget? → Dalarna kan vara billigare om ni delar en stuga. Stockholm kräver ofta salsuthyrning.'
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
    title: 'Företagsyoga. Vad ingår och vad kostar det?',
    metaDescription: 'Vad kostar företagsyoga i Stockholm? Priser från 1 000 kr/pass. Läs vad som ingår, hur det funkar och varför fler företag väljer yoga på kontoret.',
    publishDate: '2026-04-09',
    readingTime: '5 min',
    category: 'Företag & Konferens',
    excerpt: 'Funderar ni på yoga på kontoret eller som konferensinslag? Här är en rak genomgång av vad det kostar, vad som ingår och hur det funkar i praktiken.',
    relatedServiceHref: '/tjanster/foretagsyoga',
    relatedServiceLabel: 'Boka företagsyoga',
    relatedPosts: [
      { slug: 'konferensyoga-teambuilding', label: 'Konferensyoga, varför yoga på konferensen?' },
      { slug: 'vad-kostar-privat-yoga-stockholm', label: 'Vad kostar privat yoga?' },
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Du har fått i uppdrag att hitta en friskvårdsaktivitet för teamet. Eller så ska ni ha konferens och vill ha något bättre än ännu en workshop om "samarbete". Företagsyoga dyker upp som alternativ. Men vad kostar det egentligen? Och vad får man?'
      },
      {
        type: 'heading',
        text: 'Vad kostar företagsyoga?'
      },
      {
        type: 'paragraph',
        text: 'Mina priser för regelbundna klasser på kontoret i Stockholm:'
      },
      {
        type: 'list',
        items: [
          '30 minuter: 1 000 kr/pass',
          '45 minuter: 1 200 kr/pass',
          '60 minuter: 1 500 kr/pass',
          'Konferens och event: kontakta för offert (baseras på antal, längd och plats)'
        ]
      },
      {
        type: 'paragraph',
        text: 'Priserna gäller vid regelbunden bokning (minst 1 gång/vecka, månadsvis). Enstaka bokningar prissätts individuellt.'
      },
      {
        type: 'heading',
        text: 'Vad ingår?'
      },
      {
        type: 'list',
        items: [
          'Professionell yogalärare (500-timmars certifierad)',
          'Mattor och block för upp till 20 deltagare',
          'Klass anpassad för alla nivåer, ingen förkunskap krävs',
          'Undervisning på engelska',
          'Resa till er lokal i Stockholm (ingår i priset)'
        ]
      },
      {
        type: 'heading',
        text: 'Hur fungerar det i praktiken?'
      },
      {
        type: 'paragraph',
        text: 'Ni behöver bara ha ett utrymme som är tillräckligt stort: konferensrum, lounge, tak-terrass. Jag kommer med all utrustning 10 minuter innan klassen börjar, leder passet, och plockar ihop efteråt. Minimal insats från er sida.'
      },
      {
        type: 'paragraph',
        text: 'De vanligaste formaten: morgonyoga innan arbetsdagen (07:30–08:30), lunchyoga (12:00–12:45), eller en avslutande klass efter jobbet. De flesta företag börjar med en gång i veckan och ökar om det funkar.'
      },
      {
        type: 'heading',
        text: 'Företagsyoga i Dalarna'
      },
      {
        type: 'paragraph',
        text: 'Håller ni konferens i Dalarna? Jag erbjuder yoga på er konferensanläggning eller utomhus på altanen i skogen. Utomhusyoga under en konferensdag slår alla konferenssalar i effekt.'
      },
      {
        type: 'heading',
        text: 'Boka företagsyoga'
      },
      {
        type: 'paragraph',
        text: 'Maila hello.yogawithcamilla@gmail.com med datum, antal deltagare, stad och typ av event. Jag svarar inom 24 timmar med tillgänglighet och en offert.'
      }
    ]
  },
  {
    slug: 'mohippa-aktiviteter-stockholm',
    title: '7 möhippa-aktiviteter i Stockholm du inte tänkt på',
    metaDescription: 'Planerar du möhippa i Stockholm? Här är 7 aktiviteter som faktiskt funkar för hela gänget — från SUP yoga med bastu till skärgårdstur och vinprovning.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Events & Möhippa',
    excerpt: 'Ska ni fira möhippa i Stockholm och vill ha något mer minnesvärt än en bar-crawl? Här är 7 aktiviteter som funkar för hela gänget.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Boka SUP yoga & bastu',
    relatedPosts: [
      { slug: 'yoga-mohippa-dalarna', label: 'Yoga möhippa i Dalarna' },
      { slug: 'mohippa-dalarna-aktiviteter', label: 'Möhippa i Dalarna — 7 aktiviteter' },
    ],
    content: [
      { type: 'paragraph', text: 'Stockholm är en fantastisk stad för möhippa. Vatten överallt, bra restauranger, massor av alternativ. Men grejen är att många grupper fastnar i samma spår: prosecco-frukost, spa, och sedan ut på krogen. Inget fel med det. Men om ni vill ha en dag som faktiskt känns unik — en dag där bruden ser på er och säger "det här var exakt rätt" — så lönar det sig att tänka ett varv till.' },
      { type: 'heading', text: '1. SUP yoga och bastu vid Sicklasjön' },
      { type: 'paragraph', text: 'Det här är vår absoluta favorit. Yoga på ett paddleboard låter lite galet — men det är precis det som gör det så bra för möhippa. Ni skrattar, ni utmanar er lagom, ingen behöver kunna yoga sedan tidigare. Vi håller i ett pass utomhus på Sicklasjön där ni balanserar, faller i, och har det roligaste på länge.' },
      { type: 'paragraph', text: 'Efteråt: bastu direkt vid vattnet. Varmt, lugnt, bara ni och utsikten. Passar perfekt för grupper. Ingen förkunskap krävs. Mejla hello.yogawithcamilla@gmail.com för offert, eller läs mer på yogawithcamilla.se/tjanster/sup-yoga.' },
      { type: 'heading', text: '2. Skärgårdstur med egen båt' },
      { type: 'paragraph', text: 'Stockholms skärgård är ett av världens finaste naturområden — och den är bokstavligen utanför stadens dörrar. Hyr en båt för dagen, packa en korg med mat och dryck och sätt kurs mot något av de tusentals öarna. Ni kan bada, grilla, sova i solen.' },
      { type: 'heading', text: '3. Matlagningskurs tillsammans' },
      { type: 'paragraph', text: 'Det finns ett antal riktigt bra matlagningsstudior i Stockholm som tar emot privata grupper. Ni lagar mat tillsammans, äter ihop, och har något att prata om resten av kvällen. Koll på vad bruden älskar att äta och boka därefter.' },
      { type: 'heading', text: '4. Vinprovning eller bubbelprovning' },
      { type: 'paragraph', text: 'Stockholm har flera bra ställen för vinprovning i privat miljö. Ni får lära er något, ni dricker gott, och det finns ett naturligt samtalsflöde hela kvällen. Funkar lika bra som förmiddagsaktivitet som kvällsaktivitet.' },
      { type: 'heading', text: '5. Måla och skåla — workshop med duk och dryck' },
      { type: 'paragraph', text: 'Varje person får en duk, akrylfärger, och en instruktör som visar vad man ska göra. Ni skapar var sin tavla under kvällen, med ett glas i handen. Det kräver noll konstnärlighet — det är poängen.' },
      { type: 'heading', text: '6. Takvandring över Stockholm' },
      { type: 'paragraph', text: 'Om ni vill ha lite adrenalinkick utan att det tar hela dagen — boka en takvandring. Ni promenerar längs taket på ett av Stockholms höghus med utsikt över hela staden. Lagom skrämmande, spektakulärt, och garanterat något ingen gjort på en möhippa förut.' },
      { type: 'heading', text: '7. Spa-dag med privat avdelning' },
      { type: 'paragraph', text: 'Klassikern — men det finns en anledning till att den håller. Välj ett spa som erbjuder privat avdelning för er grupp. Kombinera med en behandling var och en fin finish på en dag full av aktiviteter.' },
      { type: 'paragraph', text: 'Möhippa i Stockholm behöver inte vara komplicerat. Det handlar om att välja aktiviteter som faktiskt passar gruppen — inte vad som ser bra ut på Instagram. Börja med att fråga: vad gillar bruden? Och om ni vill starta dagen med något som ingen av er glömmer på länge, vet ni var ni hittar oss.' },
    ]
  },
  {
    slug: 'hen-party-ideas-stockholm',
    title: '6 Bachelorette Party Ideas in Stockholm',
    metaDescription: 'Planning a bachelorette party in Stockholm? Here are 6 unforgettable bachelorette activities — from SUP yoga and sauna to archipelago boat trips and cooking classes.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Events & Möhippa',
    excerpt: 'Stockholm is genuinely one of the best cities in the world for a bachelorette party. Water everywhere, world-class spas, incredible food — and yes, yoga on paddleboards with a sauna waiting on shore.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Book SUP yoga & sauna',
    relatedPosts: [
      { slug: 'mohippa-aktiviteter-stockholm', label: 'Möhippa i Stockholm — 7 aktiviteter' },
    ],
    content: [
      { type: 'paragraph', text: 'Stockholm is genuinely one of the best cities in the world for a bachelorette party. Water everywhere, world-class spas, cobblestone streets in Gamla Stan, and a food scene that keeps getting better. These are six of the best bachelorette party ideas in Stockholm right now.' },
      { type: 'heading', text: '1. SUP yoga and sauna at Sickla Strand' },
      { type: 'paragraph', text: 'This is the one. Yoga on paddleboards on a calm Stockholm lake, followed by a sauna on the water\'s edge. No experience needed — the boards are wide and stable, and the whole session is taught in English. Perfect for groups up to 20.' },
      { type: 'paragraph', text: 'The SUP yoga and sauna experience is run in partnership with Smashing Balance at Sickla Strand in Nacka, just outside central Stockholm. To book a private event for your group, email hello.yogawithcamilla@gmail.com or visit yogawithcamilla.se/tjanster/sup-yoga for full details.' },
      { type: 'heading', text: '2. Private archipelago boat tour' },
      { type: 'paragraph', text: 'Stockholm\'s archipelago is 30,000 islands. The best way to see it as a group is on a private charter — champagne on the water, the city skyline getting smaller behind you, and nowhere to be.' },
      { type: 'heading', text: '3. Cocktail masterclass' },
      { type: 'paragraph', text: 'A cocktail masterclass is one of the most reliably good bachelorette party ideas because it works for every kind of group. You spend a couple of hours learning to make proper drinks, a professional bartender guides you through the techniques, and everyone has loosened up by the end.' },
      { type: 'heading', text: '4. Swedish cooking class' },
      { type: 'paragraph', text: 'Learning to cook together is one of those activities that sounds simple but becomes one of the most memorable parts of the weekend. Stockholm has excellent cooking schools offering group sessions.' },
      { type: 'heading', text: '5. Wine tasting in Gamla Stan' },
      { type: 'paragraph', text: 'Stockholm\'s Old Town is full of wine bars that run private tasting sessions for groups. A guided tasting with well-chosen wines and a cheese board is the kind of bachelorette party activity that suits a broad age range — relaxed, sociable, easy to extend into dinner.' },
      { type: 'heading', text: '6. Outdoor adventure at Äventyrsbanan' },
      { type: 'paragraph', text: 'If your group wants to actually move and do something physical, Äventyrsbanan runs outdoor adventure packages specifically for bachelorette parties. High ropes courses, ziplines, and outdoor challenges followed by a sauna session.' },
      { type: 'paragraph', text: 'If you want to book the SUP yoga and sauna experience for your bachelorette party group, check out yogawithcamilla.se/tjanster/sup-yoga or email hello.yogawithcamilla@gmail.com. I teach in English, the sessions are designed for all levels, and starting the morning on the water before a sauna is a pretty hard act to follow.' },
    ]
  },
  {
    slug: 'sommaravslutning-aktiviteter-stockholm',
    title: '7 idéer för sommaravslutning i Stockholm',
    metaDescription: 'Planerar du sommaravslutning med jobbet i Stockholm? Här är 7 idéer — från SUP yoga och bastu till skärgårdsbåt och kajakpaddling.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Företag & Konferens',
    excerpt: 'Sommaren är snart här och det är dags att belöna teamet. Här är 7 idéer för sommaravslutning i Stockholm — för grupper som vill göra något minnesvärt.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Boka SUP yoga & bastu för ert team',
    relatedPosts: [
      { slug: 'konferensyoga-teambuilding', label: 'Konferensyoga — varför 60 minuter yoga slår teambuilding' },
      { slug: 'foretagsyoga-vad-ingar-och-kostar', label: 'Företagsyoga — vad ingår och kostar?' },
    ],
    content: [
      { type: 'paragraph', text: 'Sommaravslutningen är ett av årets viktigaste tillfällen för ett team. Inte för att det står i någon HR-handbok, utan för att det är en av få gånger ni faktiskt stannar upp tillsammans. Firar det ni gjort. Andas ut lite. Här är sju idéer som funkar.' },
      { type: 'heading', text: '1. SUP yoga och bastu vid Sickla' },
      { type: 'paragraph', text: 'Yoga på paddleboard vid Sickla är en upplevelse som ingen glömmer. Ni börjar med en guidad yogasekvens på vattnet, sen värmer ni upp i en bastu med utsikt mot sjön. Avkopplande, roligt och lite utmanande på samma gång.' },
      { type: 'paragraph', text: 'Det krävs ingen tidigare erfarenhet. Funkar för grupper upp till 20 personer. Mejla hello.yogawithcamilla@gmail.com för offert, eller läs mer på yogawithcamilla.se/tjanster/sup-yoga.' },
      { type: 'heading', text: '2. Skärgårdstur med båt' },
      { type: 'paragraph', text: 'Stockholm har 30 000 öar. En dagstur med charterbåt ut i skärgården, med mat och dryck ombord, är en klassiker av en anledning. Avslappnat, vackert, och folk får tid att faktiskt prata med varandra.' },
      { type: 'heading', text: '3. Utomhusmatlagning och grillkväll' },
      { type: 'paragraph', text: 'Att laga mat tillsammans är ett av de bästa sätten att få ett team att samarbeta utan att det känns som en samarbetsövning. Det finns flera aktörer i Stockholm som erbjuder guidade utomhusmatlagningar.' },
      { type: 'heading', text: '4. Kajakpaddling i Stockholms inlopp' },
      { type: 'paragraph', text: 'Kajakpaddling kräver ingen förkunskap, det är skonsamt för kroppen och utsikterna längs Stockholms stränder är svåra att slå. Det finns guidade halvdagsturer som tar er längs med Djurgården och ut mot Fjäderholmarna.' },
      { type: 'heading', text: '5. Rooftop-bar' },
      { type: 'paragraph', text: 'Ibland är det enkla det bästa. En rooftop-bar i centrala Stockholm med utsikt, god mat och ett glas i handen kan vara precis vad teamet behöver efter en lång vår.' },
      { type: 'heading', text: '6. Escape room' },
      { type: 'paragraph', text: 'Escape rooms sätter teamet i ett läge där ni faktiskt behöver kommunicera och lösa problem ihop, fast i ett sammanhang som är kul snarare än pressande. Stockholm har många bra alternativ.' },
      { type: 'heading', text: '7. Guidad promenad på Djurgården med picknick' },
      { type: 'paragraph', text: 'Djurgården är en av Stockholms vackraste platser och den är alldeles gratis. En guidad promenad följt av en gemensam picknick på gräset är ett härligt sätt att fira sommaren utan att krångla till det.' },
      { type: 'paragraph', text: 'Vill ni boka SUP yoga och bastu för ert team? Mejla hello.yogawithcamilla@gmail.com för offert, eller läs mer på yogawithcamilla.se/tjanster/sup-yoga.' },
    ]
  },
  {
    slug: 'summer-team-day-ideas-stockholm',
    title: '7 Summer Team Day Ideas in Stockholm',
    metaDescription: 'Planning a summer team day in Stockholm? Here are 7 ideas from SUP yoga and sauna to archipelago boat trips — something for every team size and budget.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Företag & Konferens',
    excerpt: 'Summer is the best time to take your team outside the office. Here are 7 team day ideas in Stockholm — from paddleboard yoga and a sauna to archipelago boat trips.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Book SUP yoga & sauna for your team',
    relatedPosts: [
      { slug: 'sommaravslutning-aktiviteter-stockholm', label: 'Sommaravslutning i Stockholm — 7 idéer' },
    ],
    content: [
      { type: 'paragraph', text: 'Summer in Stockholm is short, brilliant, and a little bit magic. The light stays until 10 pm. The water is warm enough to actually get in. And your team has probably been sitting in the same meeting room since January.' },
      { type: 'heading', text: '1. SUP Yoga + Sauna at Sickla Strand' },
      { type: 'paragraph', text: 'You start on paddleboards on the water, moving through a gentle yoga flow led by a certified instructor. No experience needed. Nobody falls in as often as they expect. And everybody laughs more than they thought they would.' },
      { type: 'paragraph', text: 'After the session, you step into a sauna right by the water. Groups of up to 20 people, instruction in English. Email hello.yogawithcamilla@gmail.com or visit yogawithcamilla.se/tjanster/sup-yoga.' },
      { type: 'heading', text: '2. Archipelago Boat Trip' },
      { type: 'paragraph', text: 'Stockholm sits on one of the most beautiful archipelagos in the world. More than 30,000 islands, and most of them are empty. Charter a boat and spend a day on the water — swimming off rocks, eating lunch at an island restaurant, or just watching Stockholm disappear behind you.' },
      { type: 'heading', text: '3. Outdoor Cooking and Grilling' },
      { type: 'paragraph', text: 'Cooking together scales up easily. Split into groups, get a challenge, and cook your way through it. The competition is friendly. The food is real. And it fills a summer afternoon without anyone feeling like they are doing a corporate exercise.' },
      { type: 'heading', text: '4. Kayaking Through the City' },
      { type: 'paragraph', text: 'Stockholm is surrounded by water, and kayaking is one of the most underused ways to see it. A guided kayak tour through the inner archipelago gives you a completely different view of the city.' },
      { type: 'heading', text: '5. Rooftop After-Work' },
      { type: 'paragraph', text: 'Sometimes the best team day is a short one. Stockholm has excellent rooftop bars. Book a table in the afternoon before the evening crowd arrives. This pairs well as an add-on to another activity.' },
      { type: 'heading', text: '6. Escape Room Challenge' },
      { type: 'paragraph', text: 'Stockholm has a solid selection of escape rooms. You see quickly who leads under pressure, who thinks laterally, and who just wants someone else to read the clues. Keep groups at 4 to 6 people per room for the best dynamic.' },
      { type: 'heading', text: '7. Guided Summer Walk Through Stockholm' },
      { type: 'paragraph', text: 'A guided city walk sounds simple. Done well, it is genuinely interesting. Stockholm\'s old town, the Södermalm cliffs, and the waterfront areas all have histories that most people who work in the city have never heard.' },
      { type: 'paragraph', text: 'If you want one activity that combines movement, water, fresh air, and a proper Swedish sauna experience — the SUP yoga and sauna package at Sickla Strand is hard to beat. Visit yogawithcamilla.se/tjanster/sup-yoga or email hello.yogawithcamilla@gmail.com to check availability.' },
    ]
  },
  {
    slug: 'teambuilding-aktiviteter-stockholm',
    title: '7 teambuilding-aktiviteter i Stockholm som teamet faktiskt vill göra',
    metaDescription: 'Letar du efter teambuilding i Stockholm som känns rolig på riktigt? Här är 7 aktiviteter — från SUP yoga och bastu till matlagning och kajak.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Företag & Konferens',
    excerpt: 'Bästa teambuilding i Stockholm handlar inte om att krypa under rep. Det handlar om att ge teamet en upplevelse de pratar om månader efteråt.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Boka SUP yoga & bastu som teambuilding',
    relatedPosts: [
      { slug: 'konferensyoga-teambuilding', label: 'Konferensyoga — varför yoga slår teambuilding' },
      { slug: 'sommaravslutning-aktiviteter-stockholm', label: 'Sommaravslutning i Stockholm — 7 idéer' },
    ],
    content: [
      { type: 'paragraph', text: 'Bra teambuilding i Stockholm behöver inte vara krånglig. Den behöver inte vara dyr heller. Men den behöver vara något teamet faktiskt ser fram emot, inte något de klarar av för att de måste.' },
      { type: 'heading', text: '1. SUP yoga och bastu vid Sicklasjön' },
      { type: 'paragraph', text: 'Yoga på paddleboard kräver koncentration och balans, vilket betyder att alla i gruppen är helt närvarande. Ingen kollar telefonen. Ingen tänker på deadline. Alla fokuserar på att inte ramla i vattnet.' },
      { type: 'paragraph', text: 'Bastu ingår. Funkar för grupper upp till 20 personer och kräver noll erfarenhet. Mejla hello.yogawithcamilla@gmail.com för offert, eller läs mer på yogawithcamilla.se/tjanster/sup-yoga.' },
      { type: 'heading', text: '2. Matlagning tillsammans' },
      { type: 'paragraph', text: 'Mat förenar. Att laga mat ihop kräver kommunikation, timing och förtroende — exakt samma saker som ett bra team behöver. Stockholm har gott om alternativ, från italienska workshops till tävlingsinriktade upplägg.' },
      { type: 'heading', text: '3. Escape room' },
      { type: 'paragraph', text: 'En timme i ett låst rum med ett mysterium att lösa tvingar fram samarbete och kommunikation på ett naturligt sätt. Ingen kan lösa det ensam. Alla behövs.' },
      { type: 'heading', text: '4. Kajakpaddling i skärgården' },
      { type: 'paragraph', text: 'Stockholm är en stad på vatten. Kajakpaddling i skärgården ger teamet frisk luft, rörelse och ett gemensamt äventyr. Flera aktörer erbjuder skräddarsydda upplägg för företagsgrupper.' },
      { type: 'heading', text: '5. Guidad promenad i Stockholm' },
      { type: 'paragraph', text: 'Enkelt och underskattat. En bra guidad stadsvandring, kanske med ett quiz längs vägen, ger teamet tid att prata utan agenda. Gamla Stan, Djurgården och Södermalm är alla bra alternativ.' },
      { type: 'heading', text: '6. Vinprovning' },
      { type: 'paragraph', text: 'En vinprovning är avslappnad på ett bra sätt. Gruppen sitter ner, fokuset är på något annat än jobbet, och samtalen flödar naturligt. Passar utmärkt som avslutning på en konferensdag.' },
      { type: 'heading', text: '7. Utomhuslekar och sportaktiviteter' },
      { type: 'paragraph', text: 'Ibland är det enklaste det bästa. En organiserad utomhusdag i ett av Stockholms parker eller naturområden kostar lite och ger mycket. Djurgården, Haga och Nacka naturreservat är populära val.' },
      { type: 'paragraph', text: 'SUP yoga och bastu vid Sicklasjön är vårt mest bokade teambuilding-upplägg. Mejla hello.yogawithcamilla@gmail.com för offert, eller läs mer på yogawithcamilla.se/tjanster/sup-yoga.' },
    ]
  },
  {
    slug: 'team-building-activities-stockholm',
    title: '7 Team Building Activities in Stockholm',
    metaDescription: 'Looking for team building activities in Stockholm? Here are 7 ideas for corporate groups — from SUP yoga and sauna to cooking classes and city walks.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Företag & Konferens',
    excerpt: 'Planning a team day in Stockholm? Here are 7 team building activities that actually get people talking — including paddleboard yoga with a sauna.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Book SUP yoga & sauna for team building',
    relatedPosts: [
      { slug: 'teambuilding-aktiviteter-stockholm', label: 'Teambuilding i Stockholm — 7 aktiviteter' },
      { slug: 'summer-team-day-ideas-stockholm', label: 'Summer team day ideas in Stockholm' },
    ],
    content: [
      { type: 'paragraph', text: 'Planning team building activities in Stockholm is easier than it sounds. The city has the lake, the archipelago, the old town, and enough creative venues to fill a whole conference season. The harder part is choosing something people will actually remember on Monday morning.' },
      { type: 'heading', text: '1. SUP Yoga + Sauna at Sickla Strand' },
      { type: 'paragraph', text: 'Paddleboard yoga on Sickla Lake followed by a sauna is genuinely one of the best team building experiences in Stockholm right now. It works for groups up to 20 people, no experience needed, and the whole thing runs in English.' },
      { type: 'paragraph', text: 'The yoga session happens on the water — your team is laughing, wobbling, and helping each other stay balanced within the first five minutes. After the session, the sauna is ready. Email hello.yogawithcamilla@gmail.com or visit yogawithcamilla.se/tjanster/sup-yoga.' },
      { type: 'heading', text: '2. Cooking Class' },
      { type: 'paragraph', text: 'Groups cook together, eat together, and the competitive edge stays friendly when there is pasta involved. A good option for mixed groups where not everyone is into physical activity.' },
      { type: 'heading', text: '3. Escape Room Challenge' },
      { type: 'paragraph', text: 'Stockholm has a solid selection of escape rooms. You see quickly who leads under pressure, who thinks laterally, and who just wants someone else to read the clues. Keep groups at 4 to 6 per room for the best dynamic.' },
      { type: 'heading', text: '4. Kayaking on Stockholm\'s Waterways' },
      { type: 'paragraph', text: 'Stockholm is built on 14 islands. A guided kayaking session means seeing the city from a completely different angle. It does not require any previous experience.' },
      { type: 'heading', text: '5. City Scavenger Hunt in Gamla Stan' },
      { type: 'paragraph', text: 'A guided city hunt gets teams moving, talking, and competing in a low-pressure way. Works well for large groups (20 to 100 people) because it splits naturally into smaller competing teams.' },
      { type: 'heading', text: '6. Outdoor Games Day at Djurgården' },
      { type: 'paragraph', text: 'Djurgården is one of Stockholm\'s best outdoor spaces. A facilitated outdoor games day brings a different energy than venue-based activities. The fresh air alone changes the mood.' },
      { type: 'heading', text: '7. Wine or Cocktail Tasting' },
      { type: 'paragraph', text: 'A structured wine or cocktail tasting gives the team something to focus on while having a relaxed conversation. The guided format matters — without it, you just have drinks after work. With it, you have a shared experience.' },
      { type: 'paragraph', text: 'If you are booking team building in Stockholm and want something genuinely different, the SUP yoga and sauna at Sickla Strand is a good place to start. Visit yogawithcamilla.se/tjanster/sup-yoga or email hello.yogawithcamilla@gmail.com.' },
    ]
  }
];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
