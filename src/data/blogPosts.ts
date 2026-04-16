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
    slug: 'yoga-mohippa-dalarna',
    title: 'Yoga möhippa i Dalarna: hela guiden från planering till eftersnack',
    metaDescription: 'Yoga möhippa i Dalarna: privat utomhusklass i skogen, stugupplägg, vad som ingår, priser från 3 000 kr, tips för att kombinera med andra aktiviteter.',
    publishDate: '2026-03-01',
    readingTime: '9 min',
    category: 'Events & Möhippa',
    excerpt: 'Det mest inkluderande möhippa-formatet i Dalarna. En privat yogaklass på altanen i skogen, för grupper där mamman inte dricker, kompisen inte springer, och kollegan har ryggont. Här är hela guiden.',
    relatedServiceHref: '/tjanster/mohippa-yoga',
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
        text: 'De flesta möhippor ser ungefär likadana ut. Restaurang, bar, kanske en aktivitet som hälften av gänget inte riktigt vill göra. [Yoga möhippa i Dalarna](/tjanster/mohippa-yoga) är alternativet. En privat klass för hela gruppen, utomhus i skogen eller i en stuga ni hyrt. Alla kan delta, oavsett nivå, ålder eller hur fysisk man känner för att vara. Här är hela guiden: varför det funkar, vad det kostar, och hur ni planerar helgen runt det.'
      },
      {
        type: 'callout',
        text: 'Snabbversion: Privat yoga möhippa i Dalarna från 3 000 kr. 60 eller 90 minuter utomhus eller i stuga. All utrustning ingår. Passar för 4 till 20 deltagare. Kombineras ofta med stughelg och andra aktiviteter. Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum och antal för offert.'
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
        text: 'I er stuga'
      },
      {
        type: 'paragraph',
        text: 'Har ni redan hyrt en stuga i Dalarna kan jag komma dit. Jag tar med mattor, block, bolster och allt som behövs. Vardagsrum med undanflyttade möbler räcker. Populärt på lördagsmorgon innan den större möhippan drar igång.'
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
        text: 'Yoga fungerar som enskild aktivitet men kommer bäst till sin rätt när den placeras i ett helgupplägg. De mest populära kombinationerna:'
      },
      {
        type: 'subheading',
        text: 'Klassiskt Dalarna-helgupplägg'
      },
      {
        type: 'list',
        items: [
          'Fredag eftermiddag: incheckning i stuga, gemensam middag, vin',
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
          ['Yoga i er stuga', '60 till 90 min', 'från 3 000 kr', 'Upp till 12 personer'],
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
          'Undervisning på engelska (svenska på förfrågan)',
          'En kort briefing med bruden eller brudtärnan innan, så ni vet vad som händer och kan tipsa gänget',
          'Flexibilitet med plats: altan, stuga, brygga eller skog',
        ],
      },
      {
        type: 'heading',
        text: 'Yoga möhippa i Stockholm istället'
      },
      {
        type: 'paragraph',
        text: 'Om Dalarna inte funkar, om det är för långt, för kort helg, eller om inte alla kan resa, gör jag samma sak i Stockholm. Jag kommer till er lägenhet, hyrd lokal eller en park i stan med all utrustning. Där funkar även [SUP yoga på Sicklasjön](/tjanster/sup-yoga) som en rolig möhippa-aktivitet. Mer idéer i [7 möhippa-aktiviteter i Stockholm](/blogg/mohippa-aktiviteter-stockholm).'
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
            a: 'Inte rekommenderat. Utomhusyoga funkar maj till september. Under höst och vinter håller vi klassen inomhus, i er stuga eller i en hyrd lokal.',
          },
          {
            q: 'Vad händer om det regnar?',
            a: 'Vi har alltid en backup-plan inomhus. Utomhus är förstahandsval, men om vädret inte samarbetar flyttar vi in i er stuga eller en annan närliggande lokal.',
          },
          {
            q: 'Kan ni komma till en stuga långt ut på landet?',
            a: 'Nästan alltid. Jag är mobil och van vid att hitta avlägsna stugor. Resa över 30 minuter från min bas tillkommer enligt milersättning, specifieras på offerten.',
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
        text: 'Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum, antal, om ni redan har stuga eller lokal, och om ni vill kombinera med andra aktiviteter. Jag svarar inom ett dygn med tillgänglighet och en konkret offert. Läs mer på tjänstesidan för [möhippa-yoga](/tjanster/mohippa-yoga), eller bläddra bland fler [möhippa-aktiviteter i Dalarna](/blogg/mohippa-dalarna-aktiviteter).'
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
        text: 'Snabbversionen: Konferensyoga från 3 000 kr per 60-minuterspass i Stockholm och Dalarna. Passar 10 till 40 deltagare, ingen förkunskap krävs, jag tar med allt. Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) så får ni en offert samma dag.'
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
        text: 'Det skiljer sig från vanlig [företagsyoga](/blogg/foretagsyoga-vad-ingar-och-kostar) på två sätt. Det är oftast ett engångspass, och innehållet är designat för blandad nivå i en grupp som sällan är uppvärmd. Människor som just klivit ur en PowerPoint och ska tillbaka till en lunch.'
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
        text: 'Sätter tonen för dagen. Ett 45 till 60 minuters pass som bygger upp: andningsövningar, soluppgångshälsningar, lättare styrke- och balansövningar. Frivilligt men marknadsfört väl. Min erfarenhet: 40 till 70 procent av deltagarna kommer när det schemaläggs som en valbar punkt innan frukost. Gör dag ett betydligt mer uppvaknad.'
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
        text: 'Ett mjukare pass på sista eftermiddagen. Släpper intensiteten från dagarna innan. Yin- eller restorativ-stil med längre positioner, färre övningar, mer andning. Bra som avslutning innan hemresa eller middag. Folk lämnar konferensen med lugnet i kroppen istället för trötthet i huvudet.'
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
          ['Halvdagsupplägg (2 pass)', '2 x 45 min', '5 500 kr', 'Upp till 25'],
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
        text: 'Allt fler företag lägger sina konferenser och kickoffer i Dalarna, av en anledning. Det är slut på konferenscentrum med heltäckningsmatta och spotlights. Om ni redan tar teamet hit, till Romme, Sälen, Rättvik eller en stuga vid en sjö, så lägg in en yogaklass utomhus. En morgon på altanen med skogen runt om, gryningsljus och fågelljud gör mer för ett team än tre workshops om värderingar.'
      },
      {
        type: 'paragraph',
        text: 'Jag kommer till er konferensanläggning, stuga eller friluftsområde. Utomhus när vädret tillåter, inomhus som backup. Resa från min stuga i Dalarna är ofta gratis eller minimal kostnad om ni är inom 30 minuter. Se också [yoga retreat Dalarna vs Stockholm](/blogg/yoga-retreat-dalarna-vs-stockholm) för mer om varför skogsmiljön gör skillnad.'
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
          'Undervisning på engelska, svenska på förfrågan',
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
          '2. Jag svarar samma dag eller nästa, med tillgänglighet och två till tre förslag på upplägg.',
          '3. Vi bokar datum och diskuterar lokal, format och eventuella anpassningar.',
          '4. Några dagar innan skickar jag en kort deltagarinfo ni kan klistra in i kallelsen.',
          '5. Jag kommer, leder passet, plockar ihop. Faktura skickas efter utförd klass.',
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
            a: 'Ett 60 minuters standardpass kostar från 3 000 kr i Stockholm. En 30-minuters energizer från 2 000 kr. Halvdagsupplägg (två pass) från 5 500 kr. Större grupper (25 till 40 personer) och konferenser utanför Stockholm prissätts individuellt. Alla priser är exklusive moms.',
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
        text: 'Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum, ort, antal deltagare och placering i programmet. Jag återkommer inom 24 timmar med en konkret offert. För regelbunden yoga på kontoret utanför konferensen, se [företagsyoga](/tjanster/foretagsyoga). För fler team-aktiviteter i Stockholm, kolla in [7 teambuilding-aktiviteter i Stockholm](/blogg/teambuilding-aktiviteter-stockholm).'
      },
    ]
  },
  {
    slug: 'sup-yoga-stockholm',
    title: 'SUP yoga Stockholm: allt du behöver veta innan du bokar',
    metaDescription: 'SUP yoga i Stockholm vid Sicklasjön. Priser, vad som ingår, vilken säsong, vem passar det för. Guide för möhippa, team, privata grupper och soloäventyr.',
    publishDate: '2026-03-15',
    readingTime: '9 min',
    category: 'SUP Yoga',
    excerpt: 'Yoga på paddleboard på en lugn sjö 15 minuter från T-centralen. Här är hela guiden: pris, säsong, vad du ska ha på dig, och varför det passar för möhippor, team och folk som aldrig paddlat förut.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Boka SUP Yoga',
    tableOfContents: true,
    faqSchema: true,
    relatedPosts: [
      { slug: 'mohippa-aktiviteter-stockholm', label: '7 möhippa-aktiviteter i Stockholm' },
      { slug: 'hen-party-ideas-stockholm', label: '6 Bachelorette Party Ideas in Stockholm' },
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
        text: 'Snabbinfo: SUP yoga Stockholm vid Sicklasjön, Nacka. Säsong maj till september. Privata grupper från 3 500 kr, drop-in från 500 kr per person. All utrustning ingår. Ingen tidigare erfarenhet krävs. Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) för bokning.'
      },
      {
        type: 'heading',
        text: 'Vad SUP yoga faktiskt är'
      },
      {
        type: 'paragraph',
        text: 'SUP står för "stand-up paddleboard". En stor, uppblåsbar bräda man står på ute på vattnet. SUP yoga är yoga som utförs på brädan istället för en matta. Brädorna vi använder är bredare och tjockare än vanliga SUP-brädor, designade specifikt för stabilitet när någon ligger, sitter eller gör positioner på dem.'
      },
      {
        type: 'paragraph',
        text: 'Det är mindre allvarligt och mer lekfullt än vanlig yoga. Brädan gungar. Du tappar balansen. Någon ramlar i. Alla skrattar. Samtidigt händer något märkligt. Balanskravet tvingar hjärnan att fokusera på brädan och kroppen just nu, och allt som brukar snurra i huvudet tystnar. Det är omöjligt att tänka på morgondagens möte när du försöker hålla dig upp på ett ben på ett gungande plank.'
      },
      {
        type: 'heading',
        text: 'Var: Sicklasjön i Nacka'
      },
      {
        type: 'paragraph',
        text: 'Vi håller klasserna vid Sicklasjön i Nacka. En lugn insjö, 10 till 15 minuter från centrala Stockholm med tunnelbana eller buss. Skyddad från vind och trafikerade vattenleder, lätt att hitta, och omgiven av skog, vilket gör ljudbilden betydligt mjukare än i centrala stan.'
      },
      {
        type: 'paragraph',
        text: 'Närmaste tunnelbana är Sickla eller Hammarby Sjöstad. Det finns parkering om ni kommer med bil. Vi möts vid badplatsen där jag har brädorna uppblåsta och klara.'
      },
      {
        type: 'heading',
        text: 'Säsong och vädervillkor'
      },
      {
        type: 'paragraph',
        text: 'SUP yoga i Stockholm är en sommarsak. Säsongen är maj till september. Vi avbryter vid för hård vind (över 6 m/s), åska, eller riktigt låga temperaturer. Du bokar oftast med en preferensdag och en backup-dag om vädret inte samarbetar.'
      },
      {
        type: 'paragraph',
        text: 'Juli och början av augusti är bäst för varmt vatten. Maj och september är svalare men ofta lugnare och mindre trafikerade. Det är min personliga favoritsäsong.'
      },
      {
        type: 'heading',
        text: 'Olika upplägg att boka'
      },
      {
        type: 'subheading',
        text: 'Drop-in grupp (söndagar)'
      },
      {
        type: 'paragraph',
        text: 'Öppna grupper för solo-deltagare och par. Körs söndagar under säsong. Perfekt första gång om du vill prova utan att ansvara för en hel bokning. 500 kr per person, inklusive bräda, paddel och alla tillbehör.'
      },
      {
        type: 'subheading',
        text: 'Privat grupp: möhippa, födelsedag, vänner'
      },
      {
        type: 'paragraph',
        text: 'Ni bokar brädorna för er själva. 60 till 90 minuter på vattnet. Vanligast är 6 till 12 deltagare, men jag tar upp till 20. Från 3 500 kr. Det är populäraste formatet för möhippor i Stockholm. Se [7 möhippa-aktiviteter i Stockholm](/blogg/mohippa-aktiviteter-stockholm) för mer inspiration.'
      },
      {
        type: 'subheading',
        text: 'SUP yoga plus bastu'
      },
      {
        type: 'paragraph',
        text: 'Det mest efterfrågade upplägget. Yoga på brädan först, sedan direkt in i en bastu vid vattenkanten. Byggt för möhippor, sommaravslutningar och lyxigare vängrupper. Tre timmar totalt. Pris anpassat efter antal. Mejla för offert.'
      },
      {
        type: 'subheading',
        text: 'Företag och teambuilding'
      },
      {
        type: 'paragraph',
        text: 'SUP yoga är ett av de bästa formaten för teambuilding i Stockholm på sommaren. Det är inte tävlingsbetonat, alla är på samma nivå, och det bryter statuserna i teamet på ett sätt få andra aktiviteter gör. Ofta bokat som sommaravslutning eller kickoff. Se [sommaravslutning i Stockholm](/blogg/sommaravslutning-aktiviteter-stockholm) och [teambuilding-aktiviteter i Stockholm](/blogg/teambuilding-aktiviteter-stockholm).'
      },
      {
        type: 'heading',
        text: 'Priser'
      },
      {
        type: 'table',
        tableHead: ['Upplägg', 'Längd', 'Pris', 'Passar för'],
        tableRows: [
          ['Drop-in söndagar', '60 min', '500 kr per person', 'Ensamma, par, första gången'],
          ['Privat grupp', '60 till 90 min', 'från 3 500 kr', 'Möhippor, vänner, födelsedag'],
          ['SUP yoga plus bastu', '3 tim totalt', 'offert', 'Möhippor, företag, evenemang'],
          ['Företag / teambuilding', '90 min', 'offert', 'Sommaravslutning, kickoff'],
        ],
      },
      {
        type: 'paragraph',
        text: 'Alla priser är exklusive moms när det faktureras till företag. Privata grupper betalar med Swish efter genomförd klass, eller mot faktura för företag.'
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
        text: 'Det är mindre lämpat för personer som inte är bekväma med att hamna i vatten, personer med rädsla för att vara på öppet vatten, eller de som är allvarligt rörelsenedsatta (brädan kräver att man kan komma upp i stående position från knä, vilket kan vara utmanande).'
      },
      {
        type: 'heading',
        text: 'Vad du ska ha på dig och ta med'
      },
      {
        type: 'list',
        items: [
          'Badkläder under (ja, du kommer att hamna i vattnet). Cykelshorts och topp funkar också.',
          'Lätt t-shirt över som kan bli blöt',
          'Handduk',
          'Vattenflaska',
          'Solglasögon med band (det finns band att låna, men lätt borttappade utan)',
          'Solkräm. Solen studsar hårt från vattenytan.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Mobilen stannar på land. Brädan är våt. Det är en av fördelarna.'
      },
      {
        type: 'heading',
        text: 'Så här går en klass till'
      },
      {
        type: 'paragraph',
        text: 'Vi möts 15 minuter innan start. Jag har brädorna klara. Vi gör en kort introduktion på land: hur man kommer upp på brädan, hur man paddlar 30 sekunder till där vi ankrar, vad vi ska göra. Sen ut på vattnet.'
      },
      {
        type: 'paragraph',
        text: 'Första 10 minuterna är vi i sittande och liggande positioner nära ankringspunkten. Stabilt, tyst, lugnt. Sen bygger vi upp till knästående och så småningom stående positioner för de som vill. Avslutningen är 5 minuter savasana i ryggläge. Efter klassen paddlar vi in, plockar ihop brädorna, och ni är tillbaka i staden inom 30 minuter.'
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
        text: 'SUP yoga är inte en ersättning för regelbunden yogapraktik på mattan. Det är ett annat format. Mer upplevelsebaserat, mer socialt, mindre tekniskt. Du bygger inte styrka eller flexibilitet på samma sätt. Men du får något som studio-yoga sällan ger: en känsla av att vara utomhus och lekfull samtidigt. Om du söker regelbunden praktik, kolla [privat yoga](/tjanster/privatlektioner) istället.'
      },
      {
        type: 'heading',
        text: 'Vanliga frågor om SUP yoga i Stockholm'
      },
      {
        type: 'faq',
        faqItems: [
          {
            q: 'Behöver jag kunna paddla?',
            a: 'Nej. Du behöver bara kunna paddla 30 sekunder till platsen där vi ankrar brädorna tillsammans. Det är enkelt. Jag visar hur och är med dig hela vägen.',
          },
          {
            q: 'Behöver jag kunna yoga?',
            a: 'Nej. SUP yoga är ofta lättare att börja med än studio-yoga, eftersom brädans instabilitet innebär att ingen förväntar sig avancerade positioner. Klassen anpassas efter gruppens nivå.',
          },
          {
            q: 'Vad händer om jag ramlar i vattnet?',
            a: 'Det händer ofta, särskilt för dem som försöker stå upp första gången. Vattnet vid Sicklasjön är rent och sommartid varmt. Du kravlar upp på brädan igen med hjälp, och klassen fortsätter. Ramlandet är en del av upplevelsen.',
          },
          {
            q: 'Vad kostar en privat SUP yoga grupp?',
            a: 'Från 3 500 kr för grupper upp till 10 personer, 90 minuter inklusive all utrustning. Större grupper och tillägg som bastu prissätts individuellt.',
          },
          {
            q: 'När är säsongen?',
            a: 'Maj till och med september. Juli och augusti är varmast i vattnet. Maj och september är ofta lugnare och mindre bokade.',
          },
          {
            q: 'Hur många kan vara med?',
            a: 'Drop-in grupper tar upp till 10 personer. Privata bokningar upp till 20 personer. Större grupper går att lösa med samarbetspartners.',
          },
          {
            q: 'Är SUP yoga säkert?',
            a: 'Ja. Vattnet är lugnt och grunt, ankringspunkten är nära strand, och jag är utbildad i vattensäkerhet. Flytväst finns tillgänglig på förfrågan.',
          },
          {
            q: 'Kan små barn vara med?',
            a: 'Rekommenderat från cirka 10 år och uppåt. Yngre barn har ofta svårt att hålla sig still under sekvenserna och tenderar att tappa intresset snabbt.',
          },
          {
            q: 'Var parkerar man?',
            a: 'Det finns gratis parkering vid badplatsen Sicklasjön. T-bana Sickla eller Hammarby Sjöstad är 10 till 15 minuters promenad.',
          },
          {
            q: 'Vad händer vid dåligt väder?',
            a: 'Vid hård vind (över 6 m/s), åska eller för kallt vatten flyttar vi klassen till backup-datum. Du blir alltid kontaktad senast kvällen innan om vi behöver flytta.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Nästa steg'
      },
      {
        type: 'paragraph',
        text: 'Vill du boka en privat grupp, mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum, antal och om ni vill kombinera med bastu. För drop-in söndagar, se öppna tider på [sup-yoga-sidan](/tjanster/sup-yoga). Söker du inspiration för hela helgen eller möhippan, kolla in [7 möhippa-aktiviteter i Stockholm](/blogg/mohippa-aktiviteter-stockholm).'
      },
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
        text: 'Jag har höns. De lever sina egna liv, rör sig fritt på altanen, och bryr sig inte nämnvärt om vad vi gör på mattorna. [Hönsyoga](/tjanster/honsyoga) är ett riktigt yogapass på altanen i Dalarna där mina höns strövar omkring medan vi praktiserar. Det är Sveriges svar på det amerikanska "goat yoga"-fenomenet. Fast mjukare, mindre jippo, och med djur som faktiskt hör hemma på en svensk gård.'
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
        text: 'Ett riktigt yogapass. Rörelse, andning, närvaro. Lett av en 500-timmars certifierad lärare (jag). Det är inte en gimmick eller en Instagram-stunt. Det är ett ordentligt 60-minuterspass, fast det hålls utomhus på altanen, och hönsen är med.'
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
        text: 'Så här ser ett pass ut'
      },
      {
        type: 'paragraph',
        text: 'Ni kommer till stugan. Vi samlas på altanen där jag redan har mattor, block och bolster klara. Hönsen är oftast redan där, nyfikna men inte påträngande. Jag välkomnar, presenterar hönsen vid namn (de har namn), och vi börjar med 5 minuters andning på mattan.'
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
        text: 'Det passar mindre bra för personer som är rädda för fåglar eller djur i närheten, personer med allergier mot fjäderdjur, eller de som söker ett intensivt fysiskt träningspass (det här är mjukare och mer meditativt).'
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
        text: 'Om det regnar flyttar vi till en annan dag, eller håller ett vanligt [utomhusyoga-pass](/blogg/outdoor-yoga-dalarna) utan hönsen under tak. Jag hör av mig kvällen innan om vi behöver flytta.'
      },
      {
        type: 'heading',
        text: 'Hur ni hittar hit'
      },
      {
        type: 'paragraph',
        text: 'Stugan ligger i Dalarna, cirka 2,5 timmar från Stockholm med bil eller tåg. Närmaste större orter är Borlänge, Falun och Rättvik. Jag skickar detaljerade vägbeskrivningar när bokningen är bekräftad. Flera av mina gäster kombinerar hönsyoga med en övernattning i trakten. Det finns flera bra B&B och stugor att hyra i närheten.'
      },
      {
        type: 'heading',
        text: 'Kombinera med andra aktiviteter'
      },
      {
        type: 'paragraph',
        text: 'Hönsyoga funkar utmärkt som del av en större helgupplevelse. Populära kombinationer: hönsyoga plus bastu plus middag, hönsyoga plus vandring till Styggforsen, eller för möhippor: hönsyoga plus en vanlig [yoga möhippa i Dalarna](/blogg/yoga-mohippa-dalarna) samma helg (två olika pass, två olika stämningar). Se också [möhippa i Dalarna, 7 aktiviteter](/blogg/mohippa-dalarna-aktiviteter).'
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
            a: 'Ett riktigt yogapass på altanen i Dalarna där frigående höns vandrar omkring medan vi praktiserar. Lett av en certifierad yogalärare, 60 minuter, för blandad nivå. Svensk motsvarighet till amerikansk goat yoga, fast lugnare och mer naturligt.',
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
            a: 'Nej. Hönsen är vana vid människor, de sprätter inte, de är lugna och orädda. Om någon deltagare är osäker kan jag hålla hönsen i deras hägn under passet. Bara säg till vid bokning.',
          },
          {
            q: 'Finns hönsen året runt?',
            a: 'Hönsyogasäsongen är maj till september. Under vinterhalvåret håller hönsen till inne och vi erbjuder inte passet då. Övriga [utomhusyoga](/blogg/outdoor-yoga-dalarna)-pass kan bokas året runt beroende på väder.',
          },
          {
            q: 'Är det hygieniskt?',
            a: 'Ja. Altanen är stor och hönsen vistas där normalt. Mattorna läggs ut precis innan passet och rengörs efteråt. Hönsen håller sig till gräset bredvid, inte ovanpå mattorna.',
          },
          {
            q: 'Kan barn vara med?',
            a: 'Barn från cirka 10 år och uppåt som kan följa ett 60-minuters yogapass. Yngre barn blir oftast rastlösa och jagar hönsen, vilket inte är idealt för vare sig dem, er eller hönsen.',
          },
          {
            q: 'Hur många kan delta?',
            a: 'Max 6 personer per bokning. Det är en bekväm gränsstorlek för altanen och det är viktigt för djurens välmående att det inte blir för många människor samtidigt.',
          },
          {
            q: 'Hur bokar man?',
            a: 'Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med önskat datum och antal. Jag svarar inom 24 timmar med tillgänglighet och offert. Bokning bekräftas mot Swish eller faktura.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Nästa steg'
      },
      {
        type: 'paragraph',
        text: 'Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum och antal, så får ni en konkret offert samma dag. Läs mer på [tjänstesidan för hönsyoga](/tjanster/honsyoga) eller titta på relaterade upplevelser: [utomhusyoga i Dalarna](/blogg/outdoor-yoga-dalarna) och [yoga möhippa i Dalarna](/blogg/yoga-mohippa-dalarna).'
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
    title: 'Företagsyoga i Stockholm: priser, upplägg och vad som faktiskt ingår',
    metaDescription: 'Komplett guide till företagsyoga i Stockholm. Priser från 1 000 kr/pass, format (morgon, lunch, event), vad som ingår, friskvårdsbidrag och svar på vanliga frågor.',
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
        text: 'Snabbversionen: Företagsyoga i Stockholm från 1 000 kr per pass (30 min). Jag kommer till ert kontor med mattor och block, leder passet, och ni behöver bara ett någorlunda fritt golvutrymme. Yoga är en godkänd friskvårdsaktivitet enligt Skatteverket. Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) för offert inom ett dygn.'
      },
      {
        type: 'heading',
        text: 'Vad är företagsyoga?'
      },
      {
        type: 'paragraph',
        text: 'Företagsyoga är yogaklasser som hålls på arbetsplatsen eller i samband med ett företagsevent. En certifierad yogalärare kommer till er med utrustning, leder ett pass anpassat efter gruppens nivå, och ni behöver inte tänka på något annat än att dyka upp. Det fungerar både som återkommande friskvård och som enstaka inslag på konferenser, kickoffer, sommaravslutningar eller after works.'
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
        text: 'Sen finns det något som är svårare att sätta siffror på, men lätt att känna i rummet efter ett pass. Folk pratar med varandra annorlunda. En tyst kvart där alla andas tillsammans sänker tempot på ett sätt som en pingisturnering inte gör. För ett team som suttit i Teams-möten hela dagen är det ofta precis det som saknas.'
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
        text: 'En engångsklass som del av en kickoff, konferens, sommaravslutning eller kundkväll. Längd och format skräddarsys. Allt från ett 20-minuters "andningspass" mellan föreläsningar, till en full 90-minuters outdoor-klass med efterföljande middag. Prissätts individuellt eftersom det beror på plats, antal deltagare och tidpunkt.'
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
        tableHead: ['Format', 'Längd', 'Pris per pass', 'Rekommenderat'],
        tableRows: [
          ['Morgonyoga', '30 min', 'från 1 000 kr', 'Snabb reset, innan arbetsdagen'],
          ['Lunchyoga', '45 min', 'från 1 200 kr', 'Regelbundet, 1 gång per vecka'],
          ['Fullängd', '60 min', 'från 1 500 kr', 'After work, djupare pass'],
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
          'Passet anpassas efter gruppens nivå. Ingen förkunskap krävs.',
          'Undervisning på engelska (eller svenska efter behov)',
          'Resa och uppriggning (jag är på plats 10 till 15 min innan start)',
          'Uppföljning efter första passet för att finjustera upplägget',
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
        text: 'Första gången ni bokar: vi mejlar fram datum, form och antal. Några dagar innan skickar jag en kort anvisning till era deltagare (kläder, vad som är bra att veta, inget mer) som ni vidarebefordrar eller klistrar in i mötesinbjudan. Jag kommer 10 till 15 minuter innan start, flyttar undan det som behöver flyttas, lägger ut mattor. Leder passet. Plockar ihop efteråt. Ni gör ingenting.'
      },
      {
        type: 'paragraph',
        text: 'De flesta företag börjar med ett enstaka pass eller fyra veckors provperiod innan de går över till återkommande bokning. Det är rimligt. Man kan inte veta om det passar er kultur förrän ni testat.'
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
        text: 'Hybridformatet funkar bra. Jag leder live på kontoret och resten följer via Zoom. Eller så bokar ni ett fast kontorspass och jag gör ett separat distanspass för remote-kollegor på en annan tid.'
      },
      {
        type: 'subheading',
        text: '"Vi har bara 30 minuter"'
      },
      {
        type: 'paragraph',
        text: 'Det räcker. Ett 30-minuterspass är designat för att vara koncentrerat. Ingen uppmjukning med pratstund, direkt in i andningen och rörelsen, avslutning med två minuter vila. Fungerar särskilt bra över lunchen när folk har tiden avsatt ändå.'
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
        text: 'För idéer till sommaravslutningar, kickoffer och teambuilding finns mer läsning i [7 idéer för sommaravslutning i Stockholm](/blogg/sommaravslutning-aktiviteter-stockholm) och [7 teambuilding-aktiviteter i Stockholm](/blogg/teambuilding-aktiviteter-stockholm).'
      },
      {
        type: 'heading',
        text: 'Företagsyoga i Dalarna och på konferenser'
      },
      {
        type: 'paragraph',
        text: 'Håller ni konferens eller kickoff i Dalarna? Jag håller yoga på er konferensanläggning, i stuga, eller utomhus på altanen i skogen. En utomhusklass med gryningsljus och fågelljud slår de flesta konferenssalar i effekt, särskilt på dag två av en tredagars, när alla är stela av att sitta. Resa debiteras enligt faktiskt utlägg (tåg eller milersättning), ofta 1 500 till 2 500 kr extra.'
      },
      {
        type: 'heading',
        text: 'Så här bokar du, steg för steg'
      },
      {
        type: 'list',
        items: [
          '1. Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum (eller önskad frekvens), ungefärligt antal deltagare, stad och format.',
          '2. Jag svarar inom 24 timmar med tillgänglighet, förslag på upplägg och offert.',
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
            a: 'Företagsyoga hos mig kostar från 1 000 kr per 30-minuterspass vid regelbunden bokning på kontor i Stockholm. Ett 45-minuterspass kostar från 1 200 kr och ett 60-minuterspass från 1 500 kr. Konferens- och eventyoga prissätts individuellt. Alla priser exklusive moms.',
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
            a: 'Nej. Företagsyoga är designat för blandad nivå, inklusive personer som aldrig gjort yoga. Passet anpassas efter gruppen och inga avancerade positioner används. De flesta av mina företagskunder är team där majoriteten aldrig öppnat en yogamatta innan första passet.',
          },
          {
            q: 'Vilken lokal behövs?',
            a: 'Ett utrymme som rymmer en yogamatta per person med armlängd emellan. För 10 personer räcker ett rum på 25 till 30 kvm. Konferensrum med undanflyttade bord, tomma loungeytor, matsalar eller takterrass funkar lika bra.',
          },
          {
            q: 'Vad ska deltagarna ha på sig?',
            a: 'Vanliga mjuka byxor och t-shirt. Inga speciella yogakläder krävs. Ombyte är valfritt. De flesta lunchyoga-deltagare byter om i 2 minuter innan och tillbaka efter, eller behåller samma kläder hela passet.',
          },
          {
            q: 'Hur lång uppsägningstid har ni på återkommande bokningar?',
            a: 'Två veckor. Man binder sig inte vid terminen. Vill ni pausa sommaren eller avsluta helt så räcker det med ett mejl 14 dagar innan nästa pass.',
          },
          {
            q: 'Kan ni hålla klassen på engelska?',
            a: 'Ja, undervisningen hålls på engelska som standard. Jag är från Australien. Klassen går utmärkt att följa för svensktalande deltagare, även de utan yoga-erfarenhet. Svenska på förfrågan.',
          },
          {
            q: 'Går det att boka enstaka tillfällen för event?',
            a: 'Absolut. Många kunder bokar enstaka klasser för kickoff, konferens, sommaravslutning eller kundkväll. Kontakta mig för offert. Priset beror på antal deltagare, plats och tid.',
          },
          {
            q: 'Vad händer om jag eller deltagare är sjuka?',
            a: 'Avbokning fram till 24 timmar innan passet är kostnadsfri. Enstaka frånvaro från deltagare i ett gruppupplägg påverkar inte priset. Ni betalar för klassen, inte per person.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Nästa steg'
      },
      {
        type: 'paragraph',
        text: 'Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum, antal deltagare, stad och typ av event. Jag svarar inom 24 timmar med tillgänglighet och offert. Ni kan också läsa mer på tjänstesidan för [företagsyoga](/tjanster/foretagsyoga) eller börja med en 30-minuters provklass om ni vill testa innan ni bestämmer er för ett längre upplägg.'
      },
    ]
  },
  {
    slug: 'mohippa-aktiviteter-stockholm',
    title: '7 möhippa-aktiviteter i Stockholm du inte tänkt på',
    metaDescription: 'Planerar du möhippa i Stockholm? Här är 7 aktiviteter som faktiskt funkar för hela gänget, från SUP yoga med bastu till skärgårdstur och vinprovning.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Events & Möhippa',
    excerpt: 'Ska ni fira möhippa i Stockholm och vill ha något mer minnesvärt än en bar-crawl? Här är 7 aktiviteter som funkar för hela gänget.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Boka SUP yoga & bastu',
    relatedPosts: [
      { slug: 'yoga-mohippa-dalarna', label: 'Yoga möhippa i Dalarna' },
      { slug: 'mohippa-dalarna-aktiviteter', label: 'Möhippa i Dalarna, 7 aktiviteter' },
    ],
    content: [
      { type: 'paragraph', text: 'Stockholm är en fantastisk stad för möhippa. Vatten överallt, bra restauranger, massor av alternativ. Men grejen är att många grupper fastnar i samma spår: prosecco-frukost, spa, och sedan ut på krogen. Inget fel med det. Men om ni vill ha en dag som faktiskt känns unik, en dag där bruden ser på er och säger "det här var exakt rätt", så lönar det sig att tänka ett varv till.' },
      { type: 'heading', text: '1. SUP yoga och bastu vid Sicklasjön' },
      { type: 'paragraph', text: 'Det här är vår absoluta favorit. Yoga på ett paddleboard låter lite galet, men det är precis det som gör det så bra för möhippa. Ni skrattar, ni utmanar er lagom, ingen behöver kunna yoga sedan tidigare. Vi håller ett pass utomhus på Sicklasjön där ni balanserar, faller i, och har det roligaste på länge.' },
      { type: 'paragraph', text: 'Efteråt: bastu direkt vid vattnet. Varmt, lugnt, bara ni och utsikten. Passar perfekt för grupper. Ingen förkunskap krävs. Mejla hello.yogawithcamilla@gmail.com för offert, eller läs mer på yogawithcamilla.se/tjanster/sup-yoga.' },
      { type: 'heading', text: '2. Skärgårdstur med egen båt' },
      { type: 'paragraph', text: 'Stockholms skärgård är ett av världens finaste naturområden, och den är bokstavligen utanför stadens dörrar. Hyr en båt för dagen, packa en korg med mat och dryck och sätt kurs mot något av de tusentals öarna. Ni kan bada, grilla, sova i solen.' },
      { type: 'heading', text: '3. Matlagningskurs tillsammans' },
      { type: 'paragraph', text: 'Det finns ett antal riktigt bra matlagningsstudior i Stockholm som tar emot privata grupper. Ni lagar mat tillsammans, äter ihop, och har något att prata om resten av kvällen. Koll på vad bruden älskar att äta och boka därefter.' },
      { type: 'heading', text: '4. Vinprovning eller bubbelprovning' },
      { type: 'paragraph', text: 'Stockholm har flera bra ställen för vinprovning i privat miljö. Ni får lära er något, ni dricker gott, och det finns ett naturligt samtalsflöde hela kvällen. Funkar lika bra som förmiddagsaktivitet som kvällsaktivitet.' },
      { type: 'heading', text: '5. Privat yoga på morgonen' },
      { type: 'paragraph', text: 'Starta möhippan med en privat yogaklass bara för er grupp. Jag kommer till er med all utrustning: lägenhet, hotellrum, park eller hyrd lokal. 60 minuter som sätter stämningen för hela dagen. Ingen erfarenhet krävs. Från 3 000 kr. Mejla hello.yogawithcamilla@gmail.com.' },
      { type: 'heading', text: '6. Takvandring över Stockholm' },
      { type: 'paragraph', text: 'Om ni vill ha lite adrenalinkick utan att det tar hela dagen, boka en takvandring. Ni promenerar längs taket på ett av Stockholms höghus med utsikt över hela staden. Lagom skrämmande, spektakulärt, och garanterat något ingen gjort på en möhippa förut.' },
      { type: 'heading', text: '7. Spa med privat avdelning' },
      { type: 'paragraph', text: 'Välj ett spa som erbjuder privat avdelning för er grupp. Avslappnat, socialt, och en fin finish på dagen. Kombinera med yoga på morgonen och ni har en hel dag som faktiskt hänger ihop.' },
      { type: 'paragraph', text: 'Två av aktiviteterna ovan bokar ni direkt via mig: SUP yoga och bastu (yogawithcamilla.se/tjanster/sup-yoga) och privat yoga för er grupp (yogawithcamilla.se/tjanster/privata-event). Mejla hello.yogawithcamilla@gmail.com med datum och antal så får ni en offert samma dag.' },
    ]
  },
  {
    slug: 'hen-party-ideas-stockholm',
    title: '6 Bachelorette Party Ideas in Stockholm',
    metaDescription: 'Planning a bachelorette party in Stockholm? Here are 6 unforgettable bachelorette activities, from SUP yoga and sauna to archipelago boat trips and cooking classes.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Events & Möhippa',
    excerpt: 'Stockholm is genuinely one of the best cities in the world for a bachelorette party. Water everywhere, world-class spas, incredible food, and yes, yoga on paddleboards with a sauna waiting on shore.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Book SUP yoga & sauna',
    relatedPosts: [
      { slug: 'mohippa-aktiviteter-stockholm', label: 'Möhippa i Stockholm, 7 aktiviteter' },
    ],
    content: [
      { type: 'paragraph', text: 'Stockholm is genuinely one of the best cities in the world for a bachelorette party. Water everywhere, world-class spas, cobblestone streets in Gamla Stan, and a food scene that keeps getting better. These are six of the best bachelorette party ideas in Stockholm right now.' },
      { type: 'heading', text: '1. SUP yoga and sauna at Sickla Strand' },
      { type: 'paragraph', text: 'This is the one. Yoga on paddleboards on a calm Stockholm lake, followed by a sauna on the water\'s edge. No experience needed. The boards are wide and stable, and the whole session is taught in English. Perfect for groups up to 20.' },
      { type: 'paragraph', text: 'The SUP yoga and sauna experience runs at Sickla Strand in Nacka, just outside central Stockholm. Groups up to 20 people, all equipment included. To book for your group, email hello.yogawithcamilla@gmail.com or visit yogawithcamilla.se/tjanster/sup-yoga.' },
      { type: 'heading', text: '2. Private archipelago boat tour' },
      { type: 'paragraph', text: 'Stockholm\'s archipelago is 30,000 islands. The best way to see it as a group is on a private charter: champagne on the water, the city skyline getting smaller behind you, and nowhere to be.' },
      { type: 'heading', text: '3. Private yoga session for your group' },
      { type: 'paragraph', text: 'Start the day with a private yoga class just for your group. I come to you with all the equipment, whether that\'s your hotel, an Airbnb, a park, or a rented studio. 60 minutes that sets the tone for the whole day. No experience needed. From 3 000 SEK. Works beautifully as a morning warm-up before SUP yoga or dinner out. Details at yogawithcamilla.se/tjanster/privata-event.' },
      { type: 'heading', text: '4. Swedish cooking class' },
      { type: 'paragraph', text: 'Learning to cook together is one of those activities that sounds simple but becomes one of the most memorable parts of the weekend. Stockholm has excellent cooking schools offering group sessions.' },
      { type: 'heading', text: '5. Cocktail masterclass' },
      { type: 'paragraph', text: 'A cocktail masterclass works for every kind of group. You spend a couple of hours learning to make proper drinks, a professional bartender guides you through it, and everyone has loosened up by the end. Pairs well with yoga in the morning and dinner after.' },
      { type: 'heading', text: '6. Wine tasting in Gamla Stan' },
      { type: 'paragraph', text: 'Stockholm\'s Old Town has excellent wine bars that run private tastings. Relaxed, social, and easy to extend into dinner. A good option if the group wants something low-key to close the day.' },
      { type: 'paragraph', text: 'Two of the activities above are bookable directly through me: SUP yoga and sauna (yogawithcamilla.se/tjanster/sup-yoga) and private group yoga (yogawithcamilla.se/tjanster/privata-event). Email hello.yogawithcamilla@gmail.com with your dates and group size for a same-day quote.' },
    ]
  },
  {
    slug: 'sommaravslutning-aktiviteter-stockholm',
    title: '7 idéer för sommaravslutning i Stockholm',
    metaDescription: 'Planerar du sommaravslutning med jobbet i Stockholm? Här är 7 idéer, från SUP yoga och bastu till skärgårdsbåt och kajakpaddling.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Företag & Konferens',
    excerpt: 'Sommaren är snart här och det är dags att belöna teamet. Här är 7 idéer för sommaravslutning i Stockholm, för grupper som vill göra något minnesvärt.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Boka SUP yoga & bastu för ert team',
    relatedPosts: [
      { slug: 'konferensyoga-teambuilding', label: 'Konferensyoga, varför 60 minuter yoga slår teambuilding' },
      { slug: 'foretagsyoga-vad-ingar-och-kostar', label: 'Företagsyoga, vad ingår och kostar?' },
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
      { type: 'heading', text: '5. Yoga på kontoret eller utomhus' },
      { type: 'paragraph', text: 'En privat yogaklass för teamet, på kontoret, i en park, eller på taket. 60 minuter som bryter av dagen på ett annat sätt. Jag kommer till er med all utrustning. Funkar som start på dagen eller avslutning. Från 1 500 kr. Läs mer på yogawithcamilla.se/tjanster/foretagsyoga.' },
      { type: 'heading', text: '6. Escape room' },
      { type: 'paragraph', text: 'Escape rooms sätter teamet i ett läge där ni faktiskt behöver kommunicera och lösa problem ihop, fast i ett sammanhang som är kul snarare än pressande. Stockholm har många bra alternativ.' },
      { type: 'heading', text: '7. Guidad promenad på Djurgården med picknick' },
      { type: 'paragraph', text: 'Djurgården är en av Stockholms vackraste platser och den är alldeles gratis. En guidad promenad följt av en gemensam picknick på gräset är ett härligt sätt att fira sommaren utan att krångla till det.' },
      { type: 'paragraph', text: 'Två av aktiviteterna ovan bokar ni direkt via mig: SUP yoga och bastu (yogawithcamilla.se/tjanster/sup-yoga) och yoga för ert team (yogawithcamilla.se/tjanster/foretagsyoga). Mejla hello.yogawithcamilla@gmail.com med datum och antal så får ni en offert samma dag.' },
    ]
  },
  {
    slug: 'summer-team-day-ideas-stockholm',
    title: '7 Summer Team Day Ideas in Stockholm',
    metaDescription: 'Planning a summer team day in Stockholm? Here are 7 ideas, from SUP yoga and sauna to archipelago boat trips. Something for every team size and budget.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Företag & Konferens',
    excerpt: 'Summer is the best time to take your team outside the office. Here are 7 team day ideas in Stockholm, from paddleboard yoga and a sauna to archipelago boat trips.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Book SUP yoga & sauna for your team',
    relatedPosts: [
      { slug: 'sommaravslutning-aktiviteter-stockholm', label: 'Sommaravslutning i Stockholm, 7 idéer' },
    ],
    content: [
      { type: 'paragraph', text: 'Summer in Stockholm is short, brilliant, and a little bit magic. The light stays until 10 pm. The water is warm enough to actually get in. And your team has probably been sitting in the same meeting room since January.' },
      { type: 'heading', text: '1. SUP Yoga + Sauna at Sickla Strand' },
      { type: 'paragraph', text: 'You start on paddleboards on the water, moving through a gentle yoga flow led by a certified instructor. No experience needed. Nobody falls in as often as they expect. And everybody laughs more than they thought they would.' },
      { type: 'paragraph', text: 'After the session, you step into a sauna right by the water. Groups of up to 20 people, instruction in English. Email hello.yogawithcamilla@gmail.com or visit yogawithcamilla.se/tjanster/sup-yoga.' },
      { type: 'heading', text: '2. Archipelago Boat Trip' },
      { type: 'paragraph', text: 'Stockholm sits on one of the most beautiful archipelagos in the world. More than 30,000 islands, and most of them are empty. Charter a boat and spend a day on the water, swimming off rocks, eating lunch at an island restaurant, or just watching Stockholm disappear behind you.' },
      { type: 'heading', text: '3. Outdoor Cooking and Grilling' },
      { type: 'paragraph', text: 'Cooking together scales up easily. Split into groups, get a challenge, and cook your way through it. The competition is friendly. The food is real. And it fills a summer afternoon without anyone feeling like they are doing a corporate exercise.' },
      { type: 'heading', text: '4. Kayaking Through the City' },
      { type: 'paragraph', text: 'Stockholm is surrounded by water, and kayaking is one of the most underused ways to see it. A guided kayak tour through the inner archipelago gives you a completely different view of the city.' },
      { type: 'heading', text: '5. Yoga session for the team' },
      { type: 'paragraph', text: 'A private yoga class at your office, in a park, or on a rooftop. 60 minutes that resets the energy. I bring all the equipment and adapt for all levels. Works as a morning opener or afternoon wind-down. From 1 500 SEK. Details at yogawithcamilla.se/tjanster/foretagsyoga.' },
      { type: 'heading', text: '6. Escape Room Challenge' },
      { type: 'paragraph', text: 'Stockholm has a solid selection of escape rooms. You see quickly who leads under pressure, who thinks laterally, and who just wants someone else to read the clues. Keep groups at 4 to 6 people per room for the best dynamic.' },
      { type: 'heading', text: '7. Guided Summer Walk Through Stockholm' },
      { type: 'paragraph', text: 'A guided city walk sounds simple. Done well, it is genuinely interesting. Stockholm\'s old town, the Södermalm cliffs, and the waterfront areas all have histories that most people who work in the city have never heard.' },
      { type: 'paragraph', text: 'Two of the activities above are bookable directly through me: SUP yoga and sauna (yogawithcamilla.se/tjanster/sup-yoga) and yoga for your team (yogawithcamilla.se/tjanster/foretagsyoga). Email hello.yogawithcamilla@gmail.com with your dates and group size for a same-day quote.' },
    ]
  },
  {
    slug: 'teambuilding-aktiviteter-stockholm',
    title: '7 teambuilding-aktiviteter i Stockholm som teamet faktiskt vill göra',
    metaDescription: 'Letar du efter teambuilding i Stockholm som känns rolig på riktigt? Här är 7 aktiviteter, från SUP yoga och bastu till matlagning och kajak.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Företag & Konferens',
    excerpt: 'Bästa teambuilding i Stockholm handlar inte om att krypa under rep. Det handlar om att ge teamet en upplevelse de pratar om månader efteråt.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Boka SUP yoga & bastu som teambuilding',
    relatedPosts: [
      { slug: 'konferensyoga-teambuilding', label: 'Konferensyoga, varför yoga slår teambuilding' },
      { slug: 'sommaravslutning-aktiviteter-stockholm', label: 'Sommaravslutning i Stockholm, 7 idéer' },
    ],
    content: [
      { type: 'paragraph', text: 'Bra teambuilding i Stockholm behöver inte vara krånglig. Den behöver inte vara dyr heller. Men den behöver vara något teamet faktiskt ser fram emot, inte något de klarar av för att de måste.' },
      { type: 'heading', text: '1. SUP yoga och bastu vid Sicklasjön' },
      { type: 'paragraph', text: 'Yoga på paddleboard kräver koncentration och balans, vilket betyder att alla i gruppen är helt närvarande. Ingen kollar telefonen. Ingen tänker på deadline. Alla fokuserar på att inte ramla i vattnet.' },
      { type: 'paragraph', text: 'Bastu ingår. Funkar för grupper upp till 20 personer och kräver noll erfarenhet. Mejla hello.yogawithcamilla@gmail.com för offert, eller läs mer på yogawithcamilla.se/tjanster/sup-yoga.' },
      { type: 'heading', text: '2. Matlagning tillsammans' },
      { type: 'paragraph', text: 'Mat förenar. Att laga mat ihop kräver kommunikation, timing och förtroende. Alltså exakt samma saker som ett bra team behöver. Stockholm har gott om alternativ, från italienska workshops till tävlingsinriktade upplägg.' },
      { type: 'heading', text: '3. Escape room' },
      { type: 'paragraph', text: 'En timme i ett låst rum med ett mysterium att lösa tvingar fram samarbete och kommunikation på ett naturligt sätt. Ingen kan lösa det ensam. Alla behövs.' },
      { type: 'heading', text: '4. Kajakpaddling i skärgården' },
      { type: 'paragraph', text: 'Stockholm är en stad på vatten. Kajakpaddling i skärgården ger teamet frisk luft, rörelse och ett gemensamt äventyr. Flera aktörer erbjuder skräddarsydda upplägg för företagsgrupper.' },
      { type: 'heading', text: '5. Guidad promenad i Stockholm' },
      { type: 'paragraph', text: 'Enkelt och underskattat. En bra guidad stadsvandring, kanske med ett quiz längs vägen, ger teamet tid att prata utan agenda. Gamla Stan, Djurgården och Södermalm är alla bra alternativ.' },
      { type: 'heading', text: '6. Yoga på kontoret eller konferensen' },
      { type: 'paragraph', text: 'En privat yogaklass för teamet, på kontoret, i konferenslokalen eller utomhus. 60 minuter som bryter av och ger ny energi. Alla nivåer, ingen erfarenhet krävs. Jag kommer till er med all utrustning. Från 1 500 kr. Läs mer på yogawithcamilla.se/tjanster/foretagsyoga.' },
      { type: 'heading', text: '7. Utomhuslekar och sportaktiviteter' },
      { type: 'paragraph', text: 'Ibland är det enklaste det bästa. En organiserad utomhusdag i ett av Stockholms parker eller naturområden kostar lite och ger mycket. Djurgården, Haga och Nacka naturreservat är populära val.' },
      { type: 'paragraph', text: 'Tre av aktiviteterna ovan bokar ni direkt via mig: SUP yoga och bastu (yogawithcamilla.se/tjanster/sup-yoga), yoga för teamet (yogawithcamilla.se/tjanster/foretagsyoga), och privata event (yogawithcamilla.se/tjanster/privata-event). Mejla hello.yogawithcamilla@gmail.com med datum och antal så får ni en offert samma dag.' },
    ]
  },
  {
    slug: 'team-building-activities-stockholm',
    title: '7 Team Building Activities in Stockholm',
    metaDescription: 'Looking for team building activities in Stockholm? Here are 7 ideas for corporate groups, from SUP yoga and sauna to cooking classes and city walks.',
    publishDate: '2026-04-15',
    readingTime: '6 min',
    category: 'Företag & Konferens',
    excerpt: 'Planning a team day in Stockholm? Here are 7 team building activities that actually get people talking, including paddleboard yoga with a sauna.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Book SUP yoga & sauna for team building',
    relatedPosts: [
      { slug: 'teambuilding-aktiviteter-stockholm', label: 'Teambuilding i Stockholm, 7 aktiviteter' },
      { slug: 'summer-team-day-ideas-stockholm', label: 'Summer team day ideas in Stockholm' },
    ],
    content: [
      { type: 'paragraph', text: 'Planning team building activities in Stockholm is easier than it sounds. The city has the lake, the archipelago, the old town, and enough creative venues to fill a whole conference season. The harder part is choosing something people will actually remember on Monday morning.' },
      { type: 'heading', text: '1. SUP Yoga + Sauna at Sickla Strand' },
      { type: 'paragraph', text: 'Paddleboard yoga on Sickla Lake followed by a sauna is genuinely one of the best team building experiences in Stockholm right now. It works for groups up to 20 people, no experience needed, and the whole thing runs in English.' },
      { type: 'paragraph', text: 'The yoga session happens on the water. Your team is laughing, wobbling, and helping each other stay balanced within the first five minutes. After the session, the sauna is ready. Email hello.yogawithcamilla@gmail.com or visit yogawithcamilla.se/tjanster/sup-yoga.' },
      { type: 'heading', text: '2. Cooking Class' },
      { type: 'paragraph', text: 'Groups cook together, eat together, and the competitive edge stays friendly when there is pasta involved. A good option for mixed groups where not everyone is into physical activity.' },
      { type: 'heading', text: '3. Escape Room Challenge' },
      { type: 'paragraph', text: 'Stockholm has a solid selection of escape rooms. You see quickly who leads under pressure, who thinks laterally, and who just wants someone else to read the clues. Keep groups at 4 to 6 per room for the best dynamic.' },
      { type: 'heading', text: '4. Kayaking on Stockholm\'s Waterways' },
      { type: 'paragraph', text: 'Stockholm is built on 14 islands. A guided kayaking session means seeing the city from a completely different angle. It does not require any previous experience.' },
      { type: 'heading', text: '5. City Scavenger Hunt in Gamla Stan' },
      { type: 'paragraph', text: 'A guided city hunt gets teams moving, talking, and competing in a low-pressure way. Works well for large groups (20 to 100 people) because it splits naturally into smaller competing teams.' },
      { type: 'heading', text: '6. Yoga session for the team' },
      { type: 'paragraph', text: 'A private yoga class at your office, conference venue, or outdoors. 60 minutes that resets the group\'s energy. I bring all the equipment and adapt for all levels. Works as a morning opener, lunch break, or conference closer. From 1 500 SEK. Details at yogawithcamilla.se/tjanster/foretagsyoga.' },
      { type: 'heading', text: '7. Wine or Cocktail Tasting' },
      { type: 'paragraph', text: 'A structured wine or cocktail tasting gives the team something to focus on while having a relaxed conversation. The guided format matters. Without it, you just have drinks after work. With it, you have a shared experience.' },
      { type: 'paragraph', text: 'Three of the activities above are bookable directly through me: SUP yoga and sauna (yogawithcamilla.se/tjanster/sup-yoga), yoga for your team (yogawithcamilla.se/tjanster/foretagsyoga), and private events (yogawithcamilla.se/tjanster/privata-event). Email hello.yogawithcamilla@gmail.com with your dates and group size for a same-day quote.' },
    ]
  }
];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
