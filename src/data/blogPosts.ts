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
        text: 'Om Dalarna inte funkar, om det är för långt, för kort helg, eller om inte alla kan resa, gör jag samma sak i Stockholm. Jag kommer till er lägenhet, hyrd lokal eller en park i stan med all utrustning. Där funkar även [privat SUP yoga och bastu vid Sickla Strand](/tjanster/sup-yoga) (i samarbete med Smashing Balance) som en rolig möhippa-aktivitet. Mer idéer i [7 möhippa-aktiviteter i Stockholm](/blogg/mohippa-aktiviteter-stockholm).'
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
        text: 'Smashing Balance driver platsen och utrustningen, jag står för yogan. Det är ett samarbete: de gör vattnet möjligt, jag gör klassen.'
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
        text: 'Enstaka klass 350 kr (bräda och bastu ingår), 150 kr om du tar med egen SUP, 10-klippkort 1 000 kr, säsongspass 2026 för 1 500 kr. Allt bokas via min partner Smashing Balance på [smashingbalance.se/collections/sup-yoga](https://smashingbalance.se/collections/sup-yoga). Mer detaljer på [SUP yoga klasser Stockholm](/blogg/sup-yoga-klasser-stockholm).'
      },
      {
        type: 'subheading',
        text: 'Alternativ 2: Privat event (för er grupp)'
      },
      {
        type: 'paragraph',
        text: 'Skräddarsydd upplevelse för er grupp. Möhippa, team, födelsedag, vänner. Ni får brädorna för er själva, jag leder en klass för just er, vi avslutar i bastun vid sjön. Vinyasa eller yin, ni väljer.'
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
        text: 'Bastu vid sjön ingår i alla upplägg. Privata event kan faktureras till företag mot moms.'
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
            a: 'Veckoklasserna bokas via min partner Smashing Balance på smashingbalance.se/collections/sup-yoga. Där ser du aktuellt schema och alla biljettyper (enstaka klass, klippkort, säsongspass).',
          },
          {
            q: 'Var bokar jag ett privat event?',
            a: 'Privata event för möhippa, team, födelsedag eller vänner bokas direkt med mig. Mejla hello.yogawithcamilla@gmail.com med datum och gruppstorlek så återkommer jag med offert.',
          },
          {
            q: 'Vad är Smashing Balance?',
            a: 'Vår partner som driver platsen vid Sickla Strand: brädorna, bastun, säkerhetsutrustningen, schemat för veckoklasserna. Jag undervisar yogan och håller hela upplevelsen.',
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
            a: 'Öppna klasser är 75 minuter inklusive paddling till och från ankringsplatsen. Privata event 2 till 4 timmar inklusive yoga, bastu och hängtid vid sjön.',
          },
          {
            q: 'Ingår bastu?',
            a: 'Ja, bastu vid sjön ingår i alla klasser, både öppna klasser och privata event.',
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
        text: 'Vill ni boka en privat grupp för möhippa, team eller födelsedag? Mejla [hello.yogawithcamilla@gmail.com](mailto:hello.yogawithcamilla@gmail.com) med datum, antal och om ni vill ha extra bastutid. Mer detaljer på [Privat SUP Yoga](/tjanster/sup-yoga). Vill du bara komma på en öppen veckoklass? Se schema och boka direkt på [Smashing Balance](https://smashingbalance.se/collections/sup-yoga), eller läs mer på [SUP yoga klasser Stockholm](/blogg/sup-yoga-klasser-stockholm).'
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
            a: 'Via vår partner Smashing Balance på smashingbalance.se/collections/sup-yoga. Där ser du aktuellt schema, väljer datum och biljettyp och betalar online.',
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
        text: 'För idéer till sommaravslutningar, kickoffer och teambuilding finns mer läsning i [7 idéer för sommaravslutning i Stockholm](/blogg/sommaravslutning-aktiviteter-stockholm) och [7 teambuilding-aktiviteter i Stockholm](/blogg/teambuilding-aktiviteter-stockholm).'
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
    excerpt: 'Ska ni fira möhippa i Stockholm och vill ha något mer minnesvärt än en bar-crawl? Här är 7 aktiviteter som funkar för hela gänget.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Boka SUP yoga & bastu',
    relatedPosts: [
      { slug: 'yoga-mohippa-dalarna', label: 'Yoga möhippa i Dalarna' },
      { slug: 'mohippa-dalarna-aktiviteter', label: 'Möhippa i Dalarna, 7 aktiviteter' },
    ],
    content: [
      { type: 'paragraph', text: 'Stockholm är en fantastisk stad för möhippa. Vatten överallt, bra restauranger, massor av alternativ. Men grejen är att många grupper fastnar i samma spår: prosecco-frukost, spa, och sedan ut på krogen. Inget fel med det. Men om ni vill ha en dag som faktiskt känns unik, en dag där bruden ser på er och säger "det här var exakt rätt", så lönar det sig att tänka ett varv till.' },
      { type: 'heading', text: '1. Privat SUP yoga och bastu vid Sickla Strand' },
      { type: 'paragraph', text: 'Det här är vår absoluta favorit. Yoga på ett paddleboard låter lite galet, men det är precis det som gör det så bra för möhippa. Ni skrattar, ni utmanar er lagom, ingen behöver kunna yoga sedan tidigare. Vi håller en privat klass vid Sickla Strand där ni balanserar, faller i, och har det roligaste på länge. Vinyasa eller yin, ni väljer stil.' },
      { type: 'paragraph', text: 'Efteråt: bastu direkt vid vattnet. Varmt, lugnt, bara ni och utsikten. Vanligtvis 3 till 10 personer, större grupper på förfrågan. Från 500 kr per person. Klassen leds av mig, plats och utrustning kommer från min partner Smashing Balance. Mejla hello.yogawithcamilla@gmail.com för offert, eller läs mer på yogawithcamilla.se/tjanster/sup-yoga.' },
      { type: 'heading', text: '2. Skärgårdstur med egen båt' },
      { type: 'paragraph', text: 'Stockholms skärgård är ett av världens finaste naturområden och den ligger bokstavligen utanför dörren. Strandrederi hyr ut båtar med skeppare för dagen, ni packar mat och dryck, sätter kurs mot en ö, badar från klippor, grillar, sover i solen. Kanebo Event är alternativet för större grupper, de har båtar som tar upp till 110 gäster. För en snabbare variant med fartvind i håret, boka RIB Stockholm.' },
      { type: 'heading', text: '3. Matlagningskurs tillsammans' },
      { type: 'paragraph', text: 'AVEQIA är det klassiska valet för privata grupper i Stockholm: 10 till 140 personer, privata köksrum, kockar som guidar genom en tre- eller fyrarätters meny. För mindre och mer personliga upplägg kör Swedish Taste säsongsmenyer och vinkurser i mindre format. Kolla vad bruden älskar att äta och välj därefter.' },
      { type: 'heading', text: '4. Vinprovning eller bubbelprovning' },
      { type: 'paragraph', text: 'Grus Grus Wine Bar kör 1-timmas provningar för privata grupper på 6–10 personer: ni väljer tema, sommeliern väljer fyra viner, och det finns tid att faktiskt prata. För en mer skräddarsydd upplevelse drivs Nolea av en WSET-3-sommelier som kommer till er lägenhet, ett vinkällare på Östermalm eller en jägarstuga i Enskede. Från runt 5 000 kr. Funkar lika bra som förmiddags- som kvällsaktivitet.' },
      { type: 'heading', text: '5. Cocktailkurs med Bartendrr' },
      { type: 'paragraph', text: 'Bartendrr kommer till er lägenhet eller AirBnB med bar, glas, råvaror och is, och guidar gruppen genom två–tre signaturdrinkar. Ingen behöver ha skakat en drink förut. Funkar extra bra om någon i gänget ogillar yoga eller spa, alla är med på cocktails. Pairar bra med middag efteråt.' },
      { type: 'heading', text: '6. Spa med privat avdelning' },
      { type: 'paragraph', text: 'Stockholms Spa & Hälsostudio och Sparadiset erbjuder båda privata avdelningar ni kan boka för er grupp: jacuzzi, bastu, behandlingar, ingen främmande ni stöter på i omklädningsrummet. För en större upplevelse 50 minuter utanför stan har Smådalarö Gård Sveriges enda grupbehandlingsrum med plats för upp till 10 personer. Avslappnat, socialt och en fin finish på dagen, särskilt i kombination med yoga på morgonen.' },
      { type: 'paragraph', text: 'SUP yoga och bastu bokar ni direkt via mig (yogawithcamilla.se/tjanster/sup-yoga). Mejla hello.yogawithcamilla@gmail.com med datum och antal så återkommer jag med offert.' },
    ]
  },
  {
    slug: 'hen-party-ideas-stockholm',
    title: '5 Bachelorette Party Ideas in Stockholm',
    metaDescription: 'Planning a bachelorette party in Stockholm? Here are 5 unforgettable bachelorette activities, from SUP yoga and sauna to archipelago boat trips and cooking classes.',
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
      { type: 'paragraph', text: 'Stockholm is genuinely one of the best cities in the world for a bachelorette party. Water everywhere, world-class spas, cobblestone streets in Gamla Stan, and a food scene that keeps getting better. These are five of the best bachelorette party ideas in Stockholm right now.' },
      { type: 'heading', text: '1. Private SUP yoga and sauna at Sickla Strand' },
      { type: 'paragraph', text: 'This is the one. Yoga on paddleboards on a calm Stockholm lake, followed by a sauna on the water\'s edge. No experience needed. The boards are wide and stable, and the whole session is taught in English. Vinyasa or yin, you pick the style.' },
      { type: 'paragraph', text: 'The private SUP yoga and sauna experience runs at Sickla Strand in Nacka, just outside central Stockholm. Usually 3 to 10 people, larger groups on request. From 500 kr per person. Led by me, with venue and equipment provided by our partner Smashing Balance. All gear included.' },
      { type: 'heading', text: '2. Private archipelago boat tour with Strandrederi' },
      { type: 'paragraph', text: 'Stockholm\'s archipelago is 30,000 islands and the best way to see it as a group is on a private charter. Strandrederi rents skippered boats by the day, set up for groups with food and drink on board. For larger parties, Kanebo Event runs boats up to 110 guests. If you want adrenaline, RIB Stockholm will get you further out in less time: 2 hours to a full day.' },
      { type: 'heading', text: '3. Swedish cooking class at AVEQIA' },
      { type: 'paragraph', text: 'AVEQIA is what most private groups in Stockholm book: 10 to 140 people, private kitchen-dining rooms, a three- or four-course menu guided by chefs. Nobody needs to know how to cook beforehand. For smaller and more personal, Swedish Taste runs seasonal menus in an intimate format.' },
      { type: 'heading', text: '4. Cocktail masterclass with Bartendrr' },
      { type: 'paragraph', text: 'Bartendrr will come to your Airbnb or hotel with a full bar, ingredients, ice and glassware, and walk the group through making two or three signature cocktails. Everyone gets to mix, shake, and stir, and by the end of two hours nobody is a stranger. Moyagi is the alternative if you want a venue rather than in-house. They combine cocktail craft with an Asian sharing menu.' },
      { type: 'heading', text: '5. Wine tasting with Grus Grus or Nolea' },
      { type: 'paragraph', text: 'Grus Grus Wine Bar in Gamla Stan runs 1-hour private tastings for groups of 6 to 10: you pick the theme, their sommelier picks the wines, and you actually get time to talk. For something more tailored, Nolea is run by a WSET-3 sommelier and will come to you: your Airbnb, a wine cellar in Östermalm, or a hunter\'s cabin in Enskede. From around 5 000 SEK. Good choice for a low-key close to the day.' },
      { type: 'paragraph', text: 'SUP yoga and sauna is bookable directly through me (yogawithcamilla.se/tjanster/sup-yoga). Email hello.yogawithcamilla@gmail.com with your dates and group size for a same-day quote.' },
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
      { type: 'heading', text: '1. Privat SUP yoga och bastu vid Sickla Strand' },
      { type: 'paragraph', text: 'Yoga på paddleboard vid Sickla Strand är en upplevelse som ingen glömmer. Ni börjar med en guidad yogasekvens på vattnet, vinyasa eller yin, sen värmer ni upp i en bastu med utsikt mot sjön. Avkopplande, roligt och lite utmanande på samma gång.' },
      { type: 'paragraph', text: 'Ingen förkunskap krävs. Vanligtvis 3 till 10 personer, större grupper på förfrågan. Från 500 kr per person. Centralt i Sickla, enkelt att nå med tunnelbana. Klassen leds av mig, plats och utrustning kommer från min partner Smashing Balance.' },
      { type: 'heading', text: '2. Skärgårdstur med charterbåt' },
      { type: 'paragraph', text: 'Stockholm har 30 000 öar och sommaren är den enda tiden på året man faktiskt ser dem. Strandrederi hyr ut skärgårdsbåtar med skeppare för hel- eller halvdag, bra för kickoffer och sommaravslutningar där ni vill ha mat, dryck och utrymme ombord. För större grupper kör Kanebo Event båtar som tar upp till 110 gäster. RIB Stockholm är alternativet om ni vill ha fart snarare än lugn, 2 timmar till hel dag.' },
      { type: 'heading', text: '3. Matlagning hos AVEQIA' },
      { type: 'paragraph', text: 'Att laga mat tillsammans är ett av de bästa sätten att få ett team att samarbeta utan att det känns som en samarbetsövning. AVEQIA i centrala Stockholm tar grupper från 10 till 140 personer, privata köksrum och kockar som guidar er genom en tre- eller fyrarätters meny. Alla är inkluderade, ingen behöver kunna laga mat innan.' },
      { type: 'heading', text: '4. Kajakpaddling med LEK MER' },
      { type: 'paragraph', text: 'LEK MER är specialister på företagspaddling. De tar er längs Djurgården, ut mot Fjäderholmarna eller på Mälaren beroende på vad gruppen klarar av. Kräver ingen förkunskap, skonsamt för kroppen, och utsikterna från vattenlinjen är svåra att slå.' },
      { type: 'heading', text: '5. Yoga på kontoret eller utomhus' },
      { type: 'paragraph', text: 'En privat yogaklass för teamet, på kontoret, i en park, eller på taket. 60 minuter som bryter av dagen på ett annat sätt. Funkar som start på dagen eller avslutning, alla nivåer, ingen erfarenhet krävs.' },
      { type: 'heading', text: '6. Escape room hos Exit Games' },
      { type: 'paragraph', text: 'Exit Games i Gamla Stan kan köra upp till 44 personer samtidigt fördelade över flera rum, vilket är anledningen till att det funkar för ett helt team. Escape rooms sätter gruppen i ett läge där ni behöver kommunicera och lösa problem ihop, fast det är kul snarare än pressande. Håll rum på 4–6 personer.' },
      { type: 'heading', text: '7. Guidad promenad på Djurgården med picknick' },
      { type: 'paragraph', text: 'Det enklaste alternativet, men underskattat. Djurgården är en av Stockholms vackraste platser och den är gratis. En guidad promenad följt av en gemensam picknick på gräset är ett härligt sätt att fira sommaren utan att krångla till det. Bra backup-plan om budgeten är stram.' },
      { type: 'paragraph', text: 'Två av aktiviteterna ovan bokar ni direkt via mig: SUP yoga och bastu (yogawithcamilla.se/tjanster/sup-yoga) och yoga för ert team (yogawithcamilla.se/tjanster/foretagsyoga). Mejla hello.yogawithcamilla@gmail.com med datum och antal så återkommer jag med offert.' },
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
      { type: 'heading', text: '1. Private SUP Yoga + Sauna at Sickla Strand' },
      { type: 'paragraph', text: 'You start on paddleboards on the water, moving through a gentle vinyasa or yin flow led by me. No experience needed. Nobody falls in as often as they expect. And everybody laughs more than they thought they would.' },
      { type: 'paragraph', text: 'After the session, you step into a sauna right by the water. Usually 3 to 10 people, larger groups on request. From 500 kr per person. Taught in English. Central Sickla location, easy to reach by tunnelbana. Yoga led by me, with venue and gear from our partner Smashing Balance.' },
      { type: 'heading', text: '2. Archipelago Boat Trip with Strandrederi or Kanebo Event' },
      { type: 'paragraph', text: 'Stockholm sits on one of the most beautiful archipelagos in the world (more than 30,000 islands, most of them empty) and you only see it properly from a boat. Strandrederi charters skippered boats for half or full days, set up for company kickoffs and summer parties with food and drink on board. For bigger groups, Kanebo Event operates boats up to 110 guests. If you want speed over calm, RIB Stockholm runs faster archipelago tours from 2 hours to a full day.' },
      { type: 'heading', text: '3. Cooking Class at AVEQIA' },
      { type: 'paragraph', text: 'Cooking together is one of the best ways to get a team collaborating without anyone feeling like they are doing a corporate exercise. AVEQIA in central Stockholm takes groups from 10 to 140 people in private kitchen-dining rooms, with chefs walking you through a three- or four-course menu. Works whether your team cooks every day or never opens the kitchen drawer.' },
      { type: 'heading', text: '4. Kayaking with LEK MER' },
      { type: 'paragraph', text: 'Stockholm is surrounded by water and kayaking is one of the most underused ways to see it. LEK MER specialises in corporate kayak days. They\'ll take you past Djurgården, out to Fjäderholmarna, or on Mälaren depending on what the group can handle. No experience needed, gentle on the body, and the views from the waterline are hard to beat.' },
      { type: 'heading', text: '5. Yoga session for the team' },
      { type: 'paragraph', text: 'A private yoga class at your office, in a park, or on a rooftop. 60 minutes that resets the energy. Works as a morning opener or afternoon wind-down. All levels, no equipment required from the team.' },
      { type: 'heading', text: '6. Escape Room at Exit Games' },
      { type: 'paragraph', text: 'Exit Games in Gamla Stan can run up to 44 people at once across multiple rooms, which is why it works for a whole team rather than just a few people. You see quickly who leads under pressure, who thinks laterally, and who just reads the clues. Keep groups at 4 to 6 per room. Skip it if your team is bigger than 50.' },
      { type: 'heading', text: '7. Guided Summer Walk Through Stockholm' },
      { type: 'paragraph', text: 'The easiest option on the list but underrated. A good guide through Gamla Stan, the Södermalm cliffs, or the waterfront turns the parts of Stockholm people walk past every day into genuinely interesting stories. Cheap, flexible, and a reliable backup plan if weather shifts or budget is tight.' },
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
      { type: 'heading', text: '1. Privat SUP yoga och bastu vid Sickla Strand' },
      { type: 'paragraph', text: 'Yoga på paddleboard kräver koncentration och balans, vilket betyder att alla i gruppen är helt närvarande. Ingen kollar telefonen. Ingen tänker på deadline. Alla fokuserar på att inte ramla i vattnet, och skrattar när någon gör det ändå.' },
      { type: 'paragraph', text: 'Efteråt: bastu direkt vid vattnet, tid att prata på riktigt. Vanligtvis 3 till 10 personer, större grupper på förfrågan. Från 500 kr per person. Ingen erfarenhet krävs, centralt vid Sickla Strand och enkelt att nå med tunnelbana. Yoga ledd av mig, plats och utrustning via min partner Smashing Balance.' },
      { type: 'heading', text: '2. Matlagning hos AVEQIA' },
      { type: 'paragraph', text: 'AVEQIA är det många Stockholmsföretag landar på och det finns en anledning. Grupper från 10 till 140 personer lagar en tre- eller fyrarätters meny tillsammans i privata köksrum, med kockar som guidar. Funkar både för folk som lagar mat varje dag och folk som bränner rostbrödet. Bra val om teamet är blandat och ni vill att alla är med utan att någon känner sig utlämnad.' },
      { type: 'heading', text: '3. Escape room hos Exit Games eller Fox in a Box' },
      { type: 'paragraph', text: 'Exit Games i Gamla Stan kan köra upp till 44 personer samtidigt fördelade över flera rum, vilket är ovanligt för ett escape room och är anledningen till att det funkar för ett helt team. Fox in a Box är det andra naturliga valet, större med bredare svårighetsgrad. Håll rum på 4–6 personer: ni ser snabbt vem som leder, vem som tänker sidledes och vem som bara läser ledtrådar. Skippa det om teamet är större än 50 eller om någon inte tål instängdhet.' },
      { type: 'heading', text: '4. Kajakpaddling med LEK MER' },
      { type: 'paragraph', text: 'Stockholm är en stad på vatten och de flesta team ser den aldrig från vattnet. LEK MER kör företagsdagar på Mälaren och i skärgården. De riktar sig specifikt till företagsgrupper och anpassar rutten efter er konditionsnivå. Ingen förkunskap krävs, guiden sköter logistiken.' },
      { type: 'heading', text: '5. Skattjakt med The Go Game i Gamla Stan' },
      { type: 'paragraph', text: 'The Go Game kör app-baserade stadsjakter genom Gamla Stan, SoFo eller Skeppsholmen. Teamen löser utmaningar på mobilen medan de rör sig genom staden. Delar sig naturligt i mindre tävlande lag, vilket är vad ni vill ha för grupper på 20 till 100. För en enklare och billigare variant kör myCityHunt liknande jakter från cirka 130 kr per person.' },
      { type: 'heading', text: '6. Yoga på kontoret eller konferensen' },
      { type: 'paragraph', text: 'En privat yogaklass för teamet, på kontoret, i konferenslokalen eller utomhus. 60 minuter som bryter av och ger ny energi. Alla nivåer, ingen erfarenhet krävs.' },
      { type: 'heading', text: '7. Vinprovning med Nolea eller cocktailkurs med Bartendrr' },
      { type: 'paragraph', text: 'För vin: Nolea drivs av en WSET-3-sommelier och gör skräddarsydda företagsprovningar hemma på kontoret, i en vinkällare på Östermalm eller i en jägarstuga i Enskede. 1,5–2 timmar från runt 5 000 kr. För cocktails: Bartendrr kommer till er med bar, glas, råvaror och is och guidar teamet genom två–tre signaturdrinkar. Båda ger gruppen något att fokusera på så att samtalet får en anledning att hända.' },
      { type: 'paragraph', text: 'Två av aktiviteterna ovan bokar ni direkt via mig: SUP yoga och bastu (yogawithcamilla.se/tjanster/sup-yoga) och yoga för teamet (yogawithcamilla.se/tjanster/foretagsyoga). Mejla hello.yogawithcamilla@gmail.com med datum och antal så återkommer jag med offert.' },
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
      { type: 'heading', text: '1. Private SUP Yoga + Sauna at Sickla Strand' },
      { type: 'paragraph', text: 'Paddleboard yoga at Sickla Strand followed by a sauna is one of the more interesting team options in Stockholm right now. It works for groups of 3 to 10 (larger on request), no experience needed, and runs in English, which matters if your team is international.' },
      { type: 'paragraph', text: 'The yoga happens on the water, vinyasa or yin, led by me. People wobble, laugh, and end up helping each other balance within the first few minutes, which does more for group dynamics than most indoor exercises. The sauna afterwards gives everyone a chance to warm up and actually talk. Central location, easy to reach by tunnelbana. From 500 kr per person. Venue and gear provided by our partner Smashing Balance.' },
      { type: 'heading', text: '2. Cooking Class at AVEQIA' },
      { type: 'paragraph', text: 'AVEQIA is the one most Stockholm companies end up booking, and there is a reason. Groups from 10 to 140 cook a three- or four-course menu together in private kitchen-dining rooms, guided by chefs. It works for people who cook every day and people who burn toast. Good option if your team is mixed and you want everyone included without anyone feeling exposed.' },
      { type: 'heading', text: '3. Escape Room at Exit Games or Fox in a Box' },
      { type: 'paragraph', text: 'Exit Games in Gamla Stan can run up to 44 people at once across multiple rooms, rare for an escape room, which is why it works for a whole team. Fox in a Box is the other obvious pick, larger and with a wider range of difficulty. Keep rooms at 4 to 6 people each: you see who leads, who thinks laterally, and who just reads the clues. Skip it if your team is bigger than 50 or you have anyone who hates enclosed spaces.' },
      { type: 'heading', text: '4. Kayaking with LEK MER' },
      { type: 'paragraph', text: 'Stockholm is built on water and most teams never see it from the water. LEK MER runs corporate kayak days on Mälaren and in the archipelago. They specifically cater to company groups and tailor the route to your fitness level. No previous experience needed, and the guide handles the logistics.' },
      { type: 'heading', text: '5. Scavenger Hunt with The Go Game' },
      { type: 'paragraph', text: 'The Go Game runs app-based city hunts through Gamla Stan, SoFo, or Skeppsholmen. Teams solve challenges on their phones while moving through the city. It splits naturally into smaller competing teams, which is what you want for groups of 20 to 100. For a cheaper, lighter version, myCityHunt runs similar hunts from around €13 per person.' },
      { type: 'heading', text: '6. Yoga session for the team' },
      { type: 'paragraph', text: 'A private yoga session at your office, conference venue, or outdoors works well as a morning opener, a lunch reset, or a closing session at the end of a conference day. 60 minutes, adapted for all levels, no equipment required from the team.' },
      { type: 'heading', text: '7. Wine Tasting with Nolea or a Cocktail Masterclass with Bartendrr' },
      { type: 'paragraph', text: 'For wine, Nolea is run by a WSET-3 sommelier and does tailored corporate tastings: in your office, in a wine cellar in Östermalm, or in a hunter\'s cabin in Enskede. Sessions run 1.5 to 2 hours from around 5 000 SEK. For cocktails, Bartendrr will come to your office with bar, equipment, ingredients and ice, and walk the team through making two or three signature drinks. Both formats give the group something to focus on so the conversation has a reason to happen.' },
      { type: 'paragraph', text: 'Two of the activities above are bookable directly through me: SUP yoga and sauna (yogawithcamilla.se/tjanster/sup-yoga) and yoga for your team (yogawithcamilla.se/tjanster/foretagsyoga). Email hello.yogawithcamilla@gmail.com with your dates and group size for a same-day quote.' },
    ]
  }
];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
