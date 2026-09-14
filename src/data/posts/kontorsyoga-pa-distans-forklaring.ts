import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  slug: 'kontorsyoga-pa-distans-forklaring',
  title: 'Kontorsyoga på distans: vad det är och hur det funkar för svenska team',
  metaDescription:
    'Vad är stolyoga eller kontorsyoga på distans egentligen, och hur går det till i praktiken via Teams eller Zoom? En enkel förklaring för team som är nyfikna men osäkra.',
  publishDate: '2026-08-28',
  readingTime: '5 min',
  category: 'På svenska',
  excerpt:
    'Ingen matta, inget ombyte, inget "jag är inte flexibel nog". Kontorsyoga på distans är enklare än det låter. Här är vad det faktiskt innebär, och hur ett pass ser ut i praktiken.',
  language: 'sv',
  relatedServiceHref: '/foretagsyoga-distans',
  relatedServiceLabel: 'Företagsyoga på distans',
  tableOfContents: true,
  faqSchema: true,
  relatedPosts: [
    { slug: 'naturaforman-yoga-for-hela-teamet', label: 'Naturaförmån: yoga för hela teamet utan att röra friskvårdsbidraget' },
    { slug: 'halsa-hybridarbete-distansteam', label: 'Hybridarbete och psykisk hälsa: så håller du teamet friskt på distans' },
  ],
  content: [
    { type: 'paragraph', text: 'Namnet "kontorsyoga" eller "stolyoga" väcker ofta en av två reaktioner: nyfikenhet, eller ett stilla motstånd från den som tänker "jag är inte flexibel nog för yoga". Båda missar poängen. Kontorsyoga på distans handlar inte om avancerade positioner, utan om korta, guidade rörelser vid det egna skrivbordet, mitt i arbetsdagen, utan att byta om.' },
    { type: 'heading', text: 'Vad det faktiskt är' },
    { type: 'paragraph', text: 'Ett pass i stolyoga tar teamet igenom enkla sträckningar och rörelser för nacke, axlar, rygg och handleder, kombinerat med långsam andning. Allt görs sittande, eller stående bakom stolen om man vill. Ingen matta, inga träningskläder, och ingen som ber någon göra en position de inte klarar av.' },
    { type: 'paragraph', text: 'Passen är till för den som suttit still vid en skärm i flera timmar och känner spänning i nacke och axlar, inte för den som redan tränar yoga på fritiden.' },
    { type: 'heading', text: 'Hur ett pass går till via Teams eller Zoom' },
    { type: 'list', items: [
      'Teamet loggar in från sina egna skrivbord, med kameran på eller av.',
      'Coachen guidar muntligt genom varje rörelse, i ett lugnt tempo som går att följa utan att titta på skärmen hela tiden.',
      'Passet varar oftast 20 till 30 minuter, kort nog för en lunchrast eller en lucka mellan möten.',
      'Varje pass spelas in, så den som missar tiden kan ta det senare samma dag.',
    ] },
    { type: 'heading', text: 'Varför just den här formen funkar för distansteam' },
    { type: 'paragraph', text: 'Det som gör stolyoga särskilt lämpat för distans- och hybridteam är att tröskeln är nästan obefintlig. Ingen lokal att boka, ingen resa till ett gym och inga träningskläder att köpa. Det fungerar likadant på kontoret, hemma eller utspritt över flera länder, så hela teamet får samma upplevelse samtidigt.' },
    { type: 'callout', text: 'Sessionerna hålls på engelska av en 500-timmars certifierad yogalärare. Instruktionerna är enkla och guidande snarare än tekniska, så kollegor som inte har svenska som modersmål kan delta på samma villkor som alla andra.' },
    { type: 'heading', text: 'Ett återkommande inslag, inte ett engångstillfälle' },
    { type: 'paragraph', text: 'Ett enstaka pass känns skönt i stunden, men det som gör skillnad över tid är att det upprepas. [Stolyoga för team](/services/chair-yoga-for-teams) är en av tre klasstyper i det löpande upplägget, tillsammans med guidad meditation och andning: samma tid varje vecka, samma coach, så att det blir en del av kalendern.' },
    { type: 'cta', text: 'Vill ni se hur det känns innan ni bestämmer er för ett löpande upplägg? Ett pilotpass är ett enskilt live-pass med ert team.', ctaHref: '/demo', ctaLabel: 'Boka ett pilotpass' },
    { type: 'faq', faqItems: [
      { q: 'Vad är skillnaden mellan kontorsyoga och vanlig yoga?', a: 'Kontorsyoga, eller stolyoga, görs sittande vid skrivbordet utan matta eller ombyte, med fokus på nacke, axlar, rygg och andning snarare än avancerade positioner. Det passar även den som aldrig provat yoga.' },
      { q: 'Behöver vi någon utrustning för att delta?', a: 'Nej. Allt som behövs är en dator med Teams eller Zoom och en vanlig kontorsstol. Ingen matta, inga träningskläder och ingen förkunskap krävs.' },
      { q: 'Hur långt är ett pass, och när på dagen passar det?', a: 'De flesta pass är 20 till 30 minuter, så de ryms i en lunchrast eller mellan två möten. Varje pass spelas in för den som inte kan delta på den utsatta tiden.' },
      { q: 'Fungerar det om teamet inte har svenska som modersmål?', a: 'Ja, passen hålls på engelska med enkla, guidande instruktioner, så internationella kollegor kan delta på samma villkor som svensktalande kollegor.' },
    ] },
  ],
};

export default post;
