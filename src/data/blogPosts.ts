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
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'list';
  text?: string;
  items?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'yoga-mohippa-dalarna',
    title: 'Yoga möhippa i Dalarna – det roligaste brudpartyt ingen pratat om',
    metaDescription: 'Letar du efter en unik idé till möhippan? Yoga möhippa i Dalarna är inkluderande, minnesvärd och faktiskt kul. Läs varför det funkar för alla grupper.',
    publishDate: '2026-03-01',
    readingTime: '5 min',
    category: 'Events & Möhippa',
    excerpt: 'Trött på samma gamla möhippa-koncept? Yoga är det oväntade valet som alla i gruppen – oavsett fitnessnivå – faktiskt uppskattar.',
    relatedServiceHref: '/tjanster/mohippa-yoga',
    relatedServiceLabel: 'Boka möhippa-yoga',
    content: [
      {
        type: 'paragraph',
        text: 'Möhippa. Ordet framkallar direkt bilder av rosa penisar på pinnar, bröllopsskor i satin och en natt i Gamla Stan som ingen riktigt minns. Men det finns ett alternativ som under de senaste åren blivit allt populärare – och som faktiskt funkar för alla i gruppen.'
      },
      {
        type: 'paragraph',
        text: 'Yoga möhippa. Och nej, det är inte tråkigt. Det är faktiskt en av de roligaste och mest minnesvärda aktiviteterna du kan ge en blivande brud – och hennes vänner.'
      },
      {
        type: 'heading',
        text: 'Varför yoga möhippa funkar när andra aktiviteter missar'
      },
      {
        type: 'paragraph',
        text: 'Möhippans dilemma är alltid detsamma: gruppen är aldrig homogen. Det finns alltid mamman som inte dricker, kompisen som inte springer, kollegan som har ryggproblem. En yogaklass löser det. Alla kan delta, alla anpassas, och ingen behöver prestera.'
      },
      {
        type: 'paragraph',
        text: 'Det finns också något som händer när en grupp rör sig och andas tillsammans. Det skapas en gemenskap som middagsbord med förutbestämda sittplatser aldrig riktigt lyckas med. På matten är alla lika – och brudens närmaste krets brukar bli förvånad över hur sammansvetsat det känns efteråt.'
      },
      {
        type: 'heading',
        text: 'Yoga möhippa i Dalarna – skogen som bakgrund'
      },
      {
        type: 'paragraph',
        text: 'Att hålla möhippa-yoga i Dalarna har en speciell dimension. Vi håller klassen utomhus på vår altan i Dalarna, omgiven av granar, fågelljud och Dalarnas lugna natur. Det är en miljö som direkt skapar ett annat mindset – borta från städernas tempo, inne i något mer stilla.'
      },
      {
        type: 'paragraph',
        text: 'Många grupper kombinerar yogaklassen med en stugavistelse i Dalarna. Hyr en stuga på fredagen, yoga lördagsmorgon, sedan vila och natur – det är ett möhippaupplägg som skiljer sig från allt annat.'
      },
      {
        type: 'heading',
        text: 'Möhippa-yoga i Stockholm'
      },
      {
        type: 'paragraph',
        text: 'Bor ni i Stockholm och vill ha möhippa-yoga utan att resa? Jag kan komma till er med all utrustning. Oavsett om det är en lägenhet, en hyrd lokal eller en park – jag fixar matten, du fixar brudtärnan.'
      },
      {
        type: 'paragraph',
        text: 'Vill ni ta det ett steg till? SUP yoga på Sickla sjö är ett alternativ som brukar skapa mycket skratt – och minnen som håller längre än kvällen.'
      },
      {
        type: 'heading',
        text: 'Vad ingår i en möhippa-yoga med mig?'
      },
      {
        type: 'list',
        items: [
          'Privat klass enbart för er grupp (upp till 10 personer)',
          'All utrustning: mattor, block, eventuellt bolster',
          'Klass skräddarsydd för gruppens nivå – inga förkunskaper krävs',
          'Undervisning på engelska (med svenska förklaringar om det behövs)',
          'Flexibel längd: vanligtvis 60–90 minuter'
        ]
      },
      {
        type: 'paragraph',
        text: 'Nästa möhippa i planeringen? Hör av dig på hello.yogawithcamilla@gmail.com med datum och antal personer – jag svarar inom ett dygn.'
      }
    ]
  },
  {
    slug: 'konferensyoga-teambuilding',
    title: 'Konferensyoga – varför ditt team mår bättre av 60 minuter yoga än ännu en teambuilding-aktivitet',
    metaDescription: 'Konferensyoga är ett av de effektivaste sätten att öka energi och fokus under ett företagsevent. Läs varför fler HR-chefer väljer yoga på konferensen.',
    publishDate: '2026-03-08',
    readingTime: '6 min',
    category: 'Företag & Konferens',
    excerpt: 'Fler och fler svenska företag lägger in yoga i konferensprogrammet – och de som provat vittnar om ett tydligt skifte i energi och fokus. Varför funkar det?',
    relatedServiceHref: '/tjanster/foretagsyoga',
    relatedServiceLabel: 'Boka företagsyoga',
    content: [
      {
        type: 'paragraph',
        text: 'Det är day 2 av konferensen. Alla har suttit i 6 timmar. Luften i salen är dålig, kaffet smakar plast, och energin i rummet har sjunkit till en punkt där du märker att hälften av teamet kollar i telefonen under presentationerna.'
      },
      {
        type: 'paragraph',
        text: 'Det är inte ett tecken på ointresse. Det är fysiologi. Kroppen är designad för rörelse, och när du håller den still för länge stänger hjärnan ner. Lösningen är inte mer kaffe – det är 60 minuter yoga.'
      },
      {
        type: 'heading',
        text: 'Vad yoga faktiskt gör med en konferensgrupp'
      },
      {
        type: 'paragraph',
        text: 'Yoga på konferensen är inte avslappning (även om det kan vara det). Det är ett verktyg för återaktivering. Kombinationen av rörelse, andning och fokus triggar det parasympatiska nervsystemet – det system som är ansvarigt för lugn, klarhet och beslutsförmåga. Precis det du vill ha i ett rum fullt av människor som ska fatta beslut.'
      },
      {
        type: 'paragraph',
        text: 'Dessutom skapar en gemensam fysisk aktivitet ett annat slags gemenskap än mingel och middagar. Det är svårt att vara formell när man försöker balansera på ett ben bredvid sin chef. Skratten och de delade blickarna gör mer för psykologisk trygghet än de flesta teambuilding-övningar.'
      },
      {
        type: 'heading',
        text: 'Tre sätt att lägga in yoga i konferensprogrammet'
      },
      {
        type: 'list',
        items: [
          'Morgonyoga (07:30–08:30) innan konferensdagen drar igång – sätter rätt energi för hela dagen',
          'Lunchyoga (12:00–13:00) istället för eller i kombination med lunch – återställer fokus för eftermiddagen',
          'Avslutningsyoga på sista dagen – ett sätt att landa och sammanfatta, i rörelse istället för PowerPoint'
        ]
      },
      {
        type: 'heading',
        text: 'Konferensyoga i Dalarna – ett naturligt val'
      },
      {
        type: 'paragraph',
        text: 'Allt fler svenska företag väljer att hålla sina konferenser utanför Stockholm – och Dalarna är ett av de populäraste valen. Om ni redan är i regionen är det ett enkelt steg att lägga till yoga på programmet.'
      },
      {
        type: 'paragraph',
        text: 'Jag erbjuder konferensyoga i Dalarna, antingen på er konferensanläggning eller utomhus på vår altan i skogen. En klass i naturen slår alla konferenssalar.'
      },
      {
        type: 'heading',
        text: 'Konferensyoga i Stockholm'
      },
      {
        type: 'paragraph',
        text: 'Håller ni konferens i Stockholm? Jag kan komma till er med all utrustning, eller hjälpa till att boka en yogasal om ni behöver ett separat utrymme. Jag erbjuder också regelbunden yoga på kontoret för team som vill ha det som en återkommande aktivitet.'
      },
      {
        type: 'paragraph',
        text: 'Intresserad? Maila hello.yogawithcamilla@gmail.com med datum, antal deltagare och plats – jag svarar med tillgänglighet och ett förslag.'
      }
    ]
  },
  {
    slug: 'sup-yoga-stockholm',
    title: 'SUP yoga Stockholm – vad är det och varför ska du prova det i sommar?',
    metaDescription: 'SUP yoga i Stockholm är yoga på surfbräda på vatten. Vi håller klasser vid Sickla sjö med Smashing Balance. Perfekt för nybörjare, möhippa och sommarupplevelse.',
    publishDate: '2026-03-15',
    readingTime: '5 min',
    category: 'SUP Yoga',
    excerpt: 'Yoga på vatten är roligare, mer utmanande och mer avslappnande än det låter. Här är allt du behöver veta om SUP yoga i Stockholm.',
    relatedServiceHref: '/tjanster/sup-yoga',
    relatedServiceLabel: 'Boka SUP Yoga',
    content: [
      {
        type: 'paragraph',
        text: 'Tänk dig: du ligger i savasana. Brädan gungar lite under dig. Vattnet glittrar. Det är tyst förutom fågelljud och det svaga plopp-plopp av åror en bit bort. Det är SUP yoga – och det är en av de mer ovanliga saker du kan göra i Stockholm den här sommaren.'
      },
      {
        type: 'heading',
        text: 'Vad är SUP yoga?'
      },
      {
        type: 'paragraph',
        text: 'SUP yoga (Stand Up Paddleboard yoga) är yoga utförd på en uppblåsbar surfbräda på vatten. Brädorna är bredare och mer stabila än vanliga SUP-brädor och designade specifikt för yoga – men de är fortfarande instabila nog att göra varje pose lite mer utmanande och lite mer rolig.'
      },
      {
        type: 'paragraph',
        text: 'Den instabila ytan tvingar dig att aktivera djupare stabilisatormuskler och att fokusera mer i varje rörelse. Det gör det på ett sätt mer tekniskt än yoga på land – men paradoxalt nog också mer avslappnande, för det är omöjligt att tänka på jobbet när du försöker hålla balansen.'
      },
      {
        type: 'heading',
        text: 'Var håller vi klasser i Stockholm?'
      },
      {
        type: 'paragraph',
        text: 'Vi håller SUP yoga vid Sickla sjö i Stockholm, i samarbete med Smashing Balance som sköter SUP-utrustning och säkerheten på vattnet. Sickla sjö är ett lugnt, vackert insjöläge med lätt tillgänglighet – bara några minuter från tunnelbanestationen Sickla.'
      },
      {
        type: 'heading',
        text: 'Behöver jag kunna yoga? Eller paddla?'
      },
      {
        type: 'paragraph',
        text: 'Nej på båda. Du behöver varken yogaerfarenhet eller SUP-erfarenhet för att delta i en SUP yoga-klass för nybörjare. Vi börjar med en kort intro till brädan och paddling på land, sedan är det dags att kliva ut på vattnet. Klassen anpassas för hela gruppen.'
      },
      {
        type: 'paragraph',
        text: 'Det enda du behöver vara beredd på är att eventuellt falla i vattnet. Det är varmt nog under sommaren, och det händer ofta de mest oväntade deltagarna. Ta det som en del av upplevelsen.'
      },
      {
        type: 'heading',
        text: 'SUP yoga för möhippa och grupper'
      },
      {
        type: 'paragraph',
        text: 'SUP yoga är en av de mest efterfrågade möhippa-aktiviteterna i Stockholm just nu – och det är inte svårt att förstå varför. Det är roligt, lite galet, inkluderande och ger minnen som håller. Speciellt när någon faller i.'
      },
      {
        type: 'paragraph',
        text: 'Vill du boka SUP yoga för din grupp? Maila hello.yogawithcamilla@gmail.com med datum, antal deltagare och om det är en privat grupp eller öppen klass.'
      }
    ]
  },
  {
    slug: 'yoga-brollopsaktivitet',
    title: 'Yoga som bröllopaktivitet – en trend som fler svenska par väljer',
    metaDescription: 'Yoga som bröllopaktivitet är ett allt populärare val för svenska bröllop i Dalarna och Stockholm. Läs hur det funkar och vad det ger era gäster.',
    publishDate: '2026-03-20',
    readingTime: '4 min',
    category: 'Bröllop & Events',
    excerpt: 'Allt fler brudpar väljer yoga som en del av bröllopsveckan. Det är inkluderande, lugnt och skapar ett gemensamt välmåendemoment som gäster faktiskt pratar om efteråt.',
    relatedServiceHref: '/tjanster/brollopsyoga',
    relatedServiceLabel: 'Läs mer om bröllopsyoga',
    content: [
      {
        type: 'paragraph',
        text: 'Bröllopstrenderna i Sverige rör sig tydligt mot mer meningsfulla upplevelser och mindre traditionell pomp. Vinprovning och karaoke är inte borta – men de kompletteras allt oftare av aktiviteter som faktiskt ger något: mer lugn, mer närvaro, mer minne.'
      },
      {
        type: 'paragraph',
        text: 'Yoga som bröllopaktivitet är ett av de bästa exemplen på den trenden.'
      },
      {
        type: 'heading',
        text: 'Varför yoga fungerar så bra på bröllop'
      },
      {
        type: 'paragraph',
        text: 'Bröllop samlar människor som kanske aldrig träffats förut i ett rum. Yoga är en naturlig brygga – en gemensam aktivitet som inte kräver bakgrundskunskaper, som är inkluderande för alla åldrar och fitnessnivåer, och som skapar en känsla av gemenskap redan från första andetaget.'
      },
      {
        type: 'paragraph',
        text: 'Det finns också ett praktiskt argument: bröllopsveckan är stressig. Oavsett hur välplanerad den är finns det en grundnivå av nervositet, logistik och förväntningar i luften. En yogaklass – morgon på bröllopsdagen, eller kvällen innan – ger brudparet och gästerna något de verkligen behöver: ett andetag.'
      },
      {
        type: 'heading',
        text: 'Format som funkar för bröllop'
      },
      {
        type: 'list',
        items: [
          'Morgonyoga för brudparet – bara ni två, 45 minuter, innan dagen drar igång',
          'Gäst-yoga dagen innan – samla alla i en avslappnande klass för att mötas och lugna ner sig',
          'Utomhusyoga efter middagen – ett avslutande inslag för de gäster som stannar natten',
          'Yoga-bröllopsvecka i Dalarna – håll hela bröllopsprogrammet i naturen med yoga som ett återkommande inslag'
        ]
      },
      {
        type: 'heading',
        text: 'Bröllopsyoga i Dalarna'
      },
      {
        type: 'paragraph',
        text: 'Dalarna är ett av de populäraste bröllopsdestinationerna i Sverige – naturskönt, lugnt och med en värdighet som stora städer saknar. Om ert bröllop är i Dalarna finns jag precis runt hörnet, med en altan omgiven av skog i Dalarna.'
      },
      {
        type: 'paragraph',
        text: 'Jag kan hålla yoga på er bröllopslokation, på stugan, eller hjälpa till att hitta ett lämpligt utomhusläge.'
      },
      {
        type: 'heading',
        text: 'Bröllopsyoga i Stockholm'
      },
      {
        type: 'paragraph',
        text: 'Håller ni bröllop i Stockholm? Jag kan komma till er bröllopslokation med all utrustning, eller hjälpa till att boka en passande yogasal för en morgonsession.'
      },
      {
        type: 'paragraph',
        text: 'Maila hello.yogawithcamilla@gmail.com med ert bröllopsdatum, plats och vad ni funderar på. Jag svarar med idéer och tillgänglighet.'
      }
    ]
  },
  {
    slug: 'honsyoga-dalarna-goat-yoga-sverige',
    title: 'Hönsyoga i Dalarna — yoga utomhus med höns',
    metaDescription: 'Hönsyoga i Dalarna — yoga på altanen med höns fritt strövande runt. En unik och jordnära yogaupplevelse i Sverige. Boka för grupper, möhippor och sällskap.',
    publishDate: '2026-03-24',
    readingTime: '4 min',
    category: 'Yoga & Natur',
    excerpt: 'Yoga på altanen med höns fritt strövande runt. En lugn, jordnära upplevelse i Dalarna — för dig som söker något lite annorlunda.',
    relatedServiceHref: '/tjanster/honsyoga',
    relatedServiceLabel: 'Boka hönsyoga i Dalarna',
    content: [
      {
        type: 'paragraph',
        text: 'Vi har höns. De lever sina egna liv — de rör sig fritt på och runt altanen, gör sina egna saker, och bryr sig inte nämnvärt om vad vi gör på mattorna. Det är lite av det hela.'
      },
      {
        type: 'paragraph',
        text: 'Hönsyoga är ett vanligt yogapass på altanen vid stugan i Dalarna, med hönsen som ett naturligt inslag i omgivningen. De strövar runt. De pickar. De är där. Och det gör något med stämningen som är svårt att sätta ord på — men lätt att känna.'
      },
      {
        type: 'heading',
        text: 'Vad är hönsyoga?'
      },
      {
        type: 'paragraph',
        text: 'Klassen leds av mig, Camilla — 500-timmars certifierad yogalärare — och är ett ordentligt yogapass. Rörelse, andning, närvaro. Det är inte en gimmick. Men hönsen är med, och de förändrar något i rummet.'
      },
      {
        type: 'paragraph',
        text: 'Hönsen interagerar inte med deltagarna — de rör sig fritt runt altanen på sitt eget vis. Men deras närvaro skapar en mjukhet och en lätthet som är svår att reproducera i en vanlig yogasal.'
      },
      {
        type: 'heading',
        text: 'Varför funkar det?'
      },
      {
        type: 'paragraph',
        text: 'Det finns forskning på djurs positiva effekt på nervsystemet — sänkt blodtryck, minskad stress, ökad oxytocin. Djur för oss in i nuet på ett sätt som är omedelbart och ofrivilligt. Kombinerat med yoga förstärks den effekten.'
      },
      {
        type: 'paragraph',
        text: 'Det handlar också om att vara utomhus, i riktig natur, med ett djurliv som pågår parallellt med det du gör. Det är Dalarna som det faktiskt ser ut.'
      },
      {
        type: 'heading',
        text: 'Hur ser ett pass ut?'
      },
      {
        type: 'list',
        items: [
          'Plats: altanen vid stugan i Dalarna',
          'Hönsen rör sig fritt runt altanen under passet',
          'Klassen är 60 minuter, anpassad för alla nivåer',
          'Passar grupper, möhippor, vänner, sällskap',
          'Mattor och utrustning ingår',
          'Privat bokning — max 6 deltagare'
        ]
      },
      {
        type: 'heading',
        text: 'Passar det dig?'
      },
      {
        type: 'paragraph',
        text: 'Om du letar efter en unik yoga-upplevelse i Sverige, ett annorlunda inslag till en möhippa, eller bara vill ha ett yogapass i riktig natur med lite karaktär — ja, det passar.'
      },
      {
        type: 'paragraph',
        text: 'Det funkar också bra för yoganybörjare. Hönsen tar bort allvaret utan att ta bort syftet.'
      },
      {
        type: 'heading',
        text: 'Boka hönsyoga i Dalarna'
      },
      {
        type: 'paragraph',
        text: 'Hönsyoga hålls vid stugan i Dalarna och bokas privat — för grupper om 2–6 personer. Säsongen är maj–september.'
      },
      {
        type: 'paragraph',
        text: 'Maila hello.yogawithcamilla@gmail.com med önskat datum och antal deltagare — så svarar jag med tillgänglighet och vad som ingår.'
      }
    ]
  },
  {
    slug: 'outdoor-yoga-dalarna',
    title: 'Utomhusyoga i Dalarna – varför naturen gör din praktik bättre',
    metaDescription: 'Utomhusyoga i Dalarna erbjuder en dimension som inomhusstudios inte kan ge. Läs om yoga i naturen och hur du bokar en klass på altanen i Dalarna.',
    publishDate: '2026-03-25',
    readingTime: '5 min',
    category: 'Yoga & Natur',
    excerpt: 'Det är något med att praktisera yoga utomhus som förändrar hela upplevelsen. Dalarnas skog och luft är mer än en bakgrund – de är en del av praktiken.',
    relatedServiceHref: '/tjanster/adventure-paket',
    relatedServiceLabel: 'Se äventyrpaket i Dalarna',
    content: [
      {
        type: 'paragraph',
        text: 'Det finns yoga-studios i Sverige som är vackra, välbyggda och välkomnande. Och sedan finns det att stå på altanen i Dalarna med granskogens doft, fågelsång och den mjuka morgonljuset som silar igenom träden – och inse att ingen studio i världen kan kopiera det.'
      },
      {
        type: 'paragraph',
        text: 'Utomhusyoga är en annan upplevelse. Inte bättre för att det är svårare, utan för att det är riktigare.'
      },
      {
        type: 'heading',
        text: 'Vad naturen ger yogan'
      },
      {
        type: 'paragraph',
        text: 'Forskning på naturens effekt på nervsystemet är tydlig: tid utomhus sänker kortisolet, aktiverar det parasympatiska nervsystemet och ökar känslan av välmående och närvaro. Det är precis det som yoga strävar mot. Kombinationen är inte bara estetisk – den är funktionell.'
      },
      {
        type: 'paragraph',
        text: 'Utomhus är det också svårare att vara inne i huvudet. Det instabila underlaget, vinden, fåglarna, känslan av jord eller trä under fötterna – allt detta ger nervsystemet något att jobba med utöver poserna. Du tvingas vara här, nu.'
      },
      {
        type: 'heading',
        text: 'Yogadäcket i Dalarna'
      },
      {
        type: 'paragraph',
        text: 'Vår altan i Dalarna är vår stolthet. En stor altan omgiven av granskog på alla sidor, med utsikt över det öppna Dalarna-landskapet. Vi håller yoga här under alla årstider förutom när det regnar – och även höst- och vintermorgnarna har sin speciella magi.'
      },
      {
        type: 'paragraph',
        text: 'Det är basen för privata klasser, möhippor, retreats och äventyrpaket. Och det är ett ställe som gäster konsekvent nämner som det de minns mest.'
      },
      {
        type: 'heading',
        text: 'Vem passar utomhusyoga för?'
      },
      {
        type: 'paragraph',
        text: 'Alla. Det är svaret. Utomhusyoga anpassas precis som inomhusyoga för alla nivåer och alla kroppar. Den enda skillnaden är kontexten – och det är en skillnad som faktiskt spelar roll.'
      },
      {
        type: 'list',
        items: [
          'Vill du ha en privat klass i naturen? Boka en-till-en privat lektion på altanen.',
          'Söker du en dag-retreat i Dalarna? Se mini-retreat-sidan.',
          'Ska ni vara en grupp? Se äventyrpaket eller privata events.',
          'Är ni på konferens i Dalarna? Utomhusyoga passar perfekt som konferensinslag.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Maila hello.yogawithcamilla@gmail.com för att boka eller ställa frågor om utomhusyoga i Dalarna.'
      }
    ]
  }
];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
