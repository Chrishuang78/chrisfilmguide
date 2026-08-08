const links = {
  metrograph: "https://metrograph.com/",
  hole: "https://metrograph.com/film/?vista_film_id=9999004933",
  traveler: "https://metrograph.com/film/?vista_film_id=9999004907",
  solaris: "https://metrograph.com/new-museum-new-humans/",
  mambo: "https://metrograph.com/film/?vista_film_id=9999001804",
  mubi: "https://mubi.com/en/us/films/teenage-sex-and-death-at-camp-miasma",
  bamSciFi: "https://www.bam.org/film/2026/arthouse-scifi",
  nyff: "https://www.filmlinc.org/nyff/nyff64-lineup/",
};

const images = {
  hole: "https://metrograph.imgix.net/2023/10/TheHole2.jpg?fm=pjpg&ixlib=php-3.3.1",
  centerStage: "https://p6.itc.cn/images01/20210224/2c39032137da4579ab0fcf2cfc3efd87.jpeg",
  mambo: "https://metrograph.com/wp-content/uploads/2024/08/MILLENNIUM-MAMBO_2.jpg",
  traveler: "https://metrograph.com/wp-content/uploads/2026/06/The-Travler.jpeg",
  solaris: "https://cdn.posteritati.com/posters/000/000/067/775/solaris-md-web.jpg",
  space2001: "https://classicosdosclassicos.mus.br/wp-content/uploads/2020/01/2001-a-space-odyssey-american-poster-by-bob-mccall-1-1.jpg",
  inTheMood: "https://metrograph.com/wp-content/uploads/2025/11/IN-THE-MOOD-FOR-LOVE_8.jpeg",
  chaser: "https://m.media-amazon.com/images/M/MV5BZGZjMDU2ODAtMzFlNy00MWU1LWE1YTEtYTFmZTE0ZmEyYjYxXkEyXkFqcGc%40._V1_.jpg",
  tampopo: "https://m.media-amazon.com/images/M/MV5BYzMyYTE1YjMtMjExMy00YjU3LTg1MGMtODNiNWQwNjRiNThjXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",
  cat: "https://metadata-static.plex.tv/4/gracenote/4a0f192c02ef1386e8fbad51f841ef25.jpg",
  linda: "https://images.plex.tv/photo?scale=2&size=large-480&url=https%3A%2F%2Fmetadata-static.plex.tv%2F3%2Fgracenote%2F39807ffdaeb3f896b612504e63e843c2.jpg",
  goodMorning: "https://image.tmdb.org/t/p/original/aX3neIX5o18tM2iTyZhk2igvR3Q.jpg",
  irreversible: "https://i.ebayimg.com/images/g/L5sAAOSwcSFn5nlu/s-l1200.jpg",
  amadeus: "https://assets.stardust.it/movie/poster/f22ca83f5e06fd1c41700ae90a4093b31555365771-1000w.jpg",
  untouchables: "https://media.senscritique.com/media/000007127609/source_big/Les_Incorruptibles.jpg",
  miasma: "https://m.media-amazon.com/images/M/MV5BZTc4NmU5MjgtZTJmMi00YmFjLWI5NzktN2JjMzZlMjUzZDFkXkEyXkFqcGc%40._V1_.jpg",
  samurai: "https://resizing.flixster.com/dI87T5wiFVBRgxyyvgvHhCrRpKU%3D/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y2MTNkMGZkLTJmYWUtNGI3Yy04MTIyLTc1ODU5ZDg4YjRiMS5qcGc%3D",
  lateFame: "https://www.newdvdreleasedates.com/images/posters/late-fame-2025.jpg",
  vertigo: "https://sothebys-com.brightspotcdn.com/dims4/default/a91ee4e/2147483647/strip/true/crop/1024x1001%2B0%2B0/resize/684x669%21/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Fef%2F6b%2Ffa3452cf4c7cad0e23c9e4becb3a%2Fvertigo.jpeg",
  laNotte: "https://m.media-amazon.com/images/M/MV5BN2QyMDhkOTctNDhjNC00NjFjLTliMDAtMGE1MDY3NjAzNDhlXkEyXkFqcGc%40._V1_.jpg",
  loveAfternoon: "https://quelquesfilms.fr/wp-content/uploads/2021/04/LAMOUR-LAPRES-MIDI-scaled-e1618261891957.jpg",
  warriors: "https://originalvintagemovieposters.com/wp-content/uploads/2010/10/Warriors-2.jpg",
  rebecca: "https://i.etsystatic.com/23647903/r/il/db40ba/2492989923/il_fullxfull.2492989923_plik.jpg",
  conversation: "https://m.media-amazon.com/images/S/pv-target-images/b7fa1cab39c55e7ee5e49abc2689711b969e80a9c95ac44f5083934fb9582157.png",
  manhunter: "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2026/07/michaelmannsmanhunter.jpg",
  rites: "https://screenings.pt/wp-content/uploads/2025/06/POSTER-TRINDADE-2-819x1024.jpg",
  blackGod: "https://image.tmdb.org/t/p/original/aXjyGU98qhdWHgWMOC2gkKdNbPb.jpg",
  salvus: "https://adioscuba.es/wp-content/uploads/2024/02/Adios-Cuba-portada-1.jpg",
  allSudden: "https://www.filmlinc.org/cdn-cgi/image/width%3D1600%2Cformat%3Dauto%2Cquality%3D85/https%3A//wp.filmlinc.org/wp-content/uploads/2026/07/All-of-a-Sudden_NYFF64_02.jpeg",
  possibleLove: "https://www.filmlinc.org/cdn-cgi/image/width%3D1600%2Cformat%3Dauto%2Cquality%3D85/https%3A//wp.filmlinc.org/wp-content/uploads/2026/07/Possible-Love_NYFF64_01.jpeg",
  nowhere: "https://www.filmlinc.org/cdn-cgi/image/width%3D1600%2Cformat%3Dauto%2Cquality%3D85/https%3A//wp.filmlinc.org/wp-content/uploads/2026/07/Nowhere-to-Lay-My-Eyes_NYFF64_02.jpg",
  dayReturns: "https://www.filmlinc.org/cdn-cgi/image/width%3D1600%2Cformat%3Dauto%2Cquality%3D85/https%3A//wp.filmlinc.org/wp-content/uploads/2026/07/The-Day-She-Returns_NYFF64_01.jpeg",
  southTehran: "https://www.filmlinc.org/cdn-cgi/image/width%3D1600%2Cformat%3Dauto%2Cquality%3D85/https%3A//wp.filmlinc.org/wp-content/uploads/2026/08/South-of-Tehran_NYFF64_1-scaled.png",
  temples: "https://www.filmlinc.org/cdn-cgi/image/width%3D1600%2Cformat%3Dauto%2Cquality%3D85/https%3A//wp.filmlinc.org/wp-content/uploads/2026/07/9-Temples-to-Heaven_NYFF64_01.png",
  stalker: "https://playhousecinema.ca/files/princesscinemas/movie-posters/stalker.jpeg",
  memoria: "https://strapi.api-tvcine.com/uploads/3a0786a21aa04b72b22eae66cbb7f0ef.jpg",
};

const cardBg = (image: string) => ({
  backgroundImage: `linear-gradient(180deg, rgba(6,7,8,.22) 0%, rgba(6,7,8,.72) 43%, rgba(6,7,8,.97) 78%), url("${image}")`,
});

function TimeLink({href, children}:{href:string; children:React.ReactNode}) {
  return <a className="time-link" href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

type Film = { title:string; year:string; region:string; director:string; type:string; venue:string; when:string; format?:string; event?:string; tags?:string[]; text:string; href:string; image:string };
function FilmCard({film}:{film:Film}){
  return <article className="film-card image-card" style={cardBg(film.image)}>
    <div className="tags">{film.tags?.map(t=><Tag key={t}>{t}</Tag>)}</div>
    <h3>{film.title}</h3>
    <dl><div><dt>YEAR / REGION</dt><dd>{film.year} · {film.region}</dd></div><div><dt>DIRECTOR</dt><dd>{film.director}</dd></div><div><dt>TYPE</dt><dd>{film.type}</dd></div><div><dt>VENUE</dt><dd>{film.venue}</dd></div><div><dt>WHEN</dt><dd>{film.when}</dd></div>{film.format&&<div><dt>FORMAT</dt><dd>{film.format}</dd></div>}{film.event&&<div><dt>EVENT</dt><dd>{film.event}</dd></div>}</dl>
    <p>{film.text}</p><a href={film.href} target="_blank" rel="noreferrer">Official listing ↗</a>
  </article>
}

const picks = [
  { rank: "01", title: "The Hole", note: "Tsai Ming-liang · 1998 · Taiwan", when: "Sun Aug 9 · 1:40 PM", venue: "Metrograph", tags: ["SPECIAL FOCUS", "NEW 35MM PRINT"], href: links.hole, image:images.hole, reason: "The week's clearest must-see: Tsai's rain-soaked millennial dystopia on a newly struck 35mm print approved by the director himself." },
  { rank: "02", title: "Center Stage", note: "Stanley Kwan · 1991 · Hong Kong", when: "Sat Aug 8 · 6:30 PM", venue: "Film Forum", tags: ["ASIAN CINEMA", "DIRECTOR IN PERSON"], href: "https://filmforum.org/film/center-stage", image:images.centerStage, reason: "A major Hong Kong classic with Stanley Kwan in person for a post-film conversation—exactly the kind of event that makes repertory NYC special." },
  { rank: "03", title: "Millennium Mambo", note: "Hou Hsiao-hsien · 2001 · Taiwan", when: "Sat Aug 8 · 10:45 PM", venue: "Metrograph", tags: ["SPECIAL FOCUS"], href: links.mambo, image:images.mambo, reason: "Hou's neon-lit turn-of-the-century Taipei reverie. One screening this week, and a near-direct conflict with In the Mood for Love at 10:50 PM." },
  { rank: "04", title: "The Traveler", note: "Abbas Kiarostami · 1974 · Iran", when: "Thu Aug 13 · 6:10 PM", venue: "Metrograph", tags: ["SPECIAL FOCUS", "WEST ASIA"], href: links.traveler, image:images.traveler, reason: "Kiarostami's first feature: a funny, unsentimental childhood quest movie whose football obsession gives his later moral puzzles an early shape." },
  { rank: "05", title: "Solaris", note: "Andrei Tarkovsky · 1972 · USSR", when: "Wed Aug 12 · 3:15 PM", venue: "Metrograph", tags: ["SPECIAL FOCUS", "DCP"], href: links.solaris, image:images.solaris, reason: "Tarkovsky's metaphysical science-fiction landmark, programmed with the New Museum's New Humans exhibition. Long, hypnotic, and worth surrendering an afternoon to." },
  { rank: "06", title: "Good Morning", note: "Yasujirō Ozu · 1959 · Japan", when: "Sat Aug 8 · 11:45 AM", venue: "Metrograph", tags: ["ASIAN CINEMA", "35MM", "OZU"], href: "https://metrograph.com/film/?vista_film_id=9999004946", image:images.goodMorning, reason: "Ozu's deceptively light suburban comedy is both canonical and wonderfully theatrical in color; Metrograph is showing it on 35mm in a single Saturday-morning slot." },
  { rank: "07", title: "Irréversible", note: "Gaspar Noé · 2002 · France", when: "Fri Aug 14 · 11:00 PM", venue: "Metrograph", tags: ["35MM", "CULT CANON"], href: "https://metrograph.com/film/?vista_film_id=9999004959", image:images.irreversible, reason: "Noé's reverse-chronology assault on narrative time remains enormously influential and deeply confrontational. A late-Friday 35mm screening is exactly the right repertory context for it." },
  { rank: "08", title: "2001: A Space Odyssey", note: "Stanley Kubrick · 1968 · US/UK", when: "Sat Aug 8 · 4:00 PM", venue: "Museum of the Moving Image", tags: ["70MM", "CLASSIC"], href: "https://movingimage.org/series/see-it-big-70mm-2026/", image:images.space2001, reason: "If you haven't seen 2001 in 70mm at the Redstone Theater, this is the canonical big-screen appointment." },
];

const focus:Film[]=[
  {title:"The Hole / 洞",year:"1998",region:"Taiwan",director:"Tsai Ming-liang",type:"Drama · musical · slow cinema",venue:"Metrograph",when:"Sun Aug 9 · 1:40 PM",format:"Newly struck 35mm print",tags:["RARE SCREENING","SPECIAL FOCUS"],text:"A mysterious epidemic empties millennial Taipei while two neighbors remain in a leaking apartment block. Tsai turns isolation into deadpan comedy and sudden musical fantasy; this weeklong return begins with a newly struck print personally approved by Tsai.",href:links.hole,image:images.hole},
  {title:"Millennium Mambo / 千禧曼波",year:"2001",region:"Taiwan",director:"Hou Hsiao-hsien",type:"Drama · urban reverie",venue:"Metrograph",when:"Sat Aug 8 · 10:45 PM",format:"DCP",tags:["ONE-OFF","SPECIAL FOCUS"],text:"Shu Qi drifts through Taipei nightlife in Hou’s gorgeous memory-film about youth already becoming past. The late slot suits its neon, techno pulse unusually well—and it is the only date currently posted this week.",href:links.mambo,image:images.mambo},
  {title:"Solaris / Солярис",year:"1972",region:"USSR",director:"Andrei Tarkovsky",type:"Science fiction · metaphysical drama",venue:"Metrograph",when:"Wed Aug 12 · 3:15 PM",format:"DCP",tags:["SPECIAL FOCUS"],text:"A psychologist reaches a space station where memory has begun taking physical form. Tarkovsky’s answer to technological futurism is grief, time, and human attachment; here it is paired with the New Museum’s “New Humans” exhibition.",href:links.solaris,image:images.solaris},
  {title:"The Traveler / مسافر",year:"1974",region:"Iran",director:"Abbas Kiarostami",type:"Drama · coming of age",venue:"Metrograph",when:"Thu Aug 13 · 6:10 PM",format:"DCP",tags:["WEST ASIA","SPECIAL FOCUS"],text:"Kiarostami’s first feature follows a boy willing to lie, hustle and travel 150 miles to see Iran’s national football team. Its sharp view of childhood obsession makes it an ideal early key to his later ethical cinema.",href:links.traveler,image:images.traveler},
];

const asian:Film[]=[
  {title:"Good Morning / お早よう",year:"1959",region:"Japan",director:"Yasujirō Ozu",type:"Comedy · family satire",venue:"Metrograph",when:"Sat Aug 8 · 11:45 AM",format:"35mm",tags:["35MM","ASIAN CANON"],text:"Two suburban brothers take a vow of silence after their parents refuse to buy a television, giving Ozu a playful route into postwar consumer life and the comedy of everyday communication. Its bright Agfacolor palette and immaculate domestic geometry make this 35mm morning screening far more than a minor Ozu detour.",href:"https://metrograph.com/film/?vista_film_id=9999004946",image:images.goodMorning},
  {title:"Center Stage / 阮玲玉",year:"1991",region:"Hong Kong",director:"Stanley Kwan",type:"Biographical drama · meta-cinema",venue:"Film Forum",when:"Sat Aug 8 · 12:15, 3:20, 6:30 PM",event:"Post-film conversation with Stanley Kwan after 6:30",tags:["DIRECTOR IN PERSON","ASIAN CINEMA"],text:"Maggie Cheung plays silent-era icon Ruan Lingyu in Kwan’s great hybrid of biography, archive, reenactment and self-reflexive filmmaking. The 6:30 screening is the one to prioritize: Kwan’s in-person conversation makes it a genuinely special NYC event.",href:"https://filmforum.org/film/center-stage",image:images.centerStage},
  {title:"In the Mood for Love / 花樣年華",year:"2000",region:"Hong Kong",director:"Wong Kar-wai",type:"Romance · drama",venue:"Metrograph",when:"Sat Aug 8 · 10:50 PM",format:"35mm",tags:["35MM","CLASSIC"],text:"Wong’s masterpiece of restraint turns missed timing and impossible desire into pure rhythm, color and gesture. Christopher Doyle’s images deserve film projection—but note the brutal five-minute overlap with Hou’s Millennium Mambo; this one returns Aug 21.",href:"https://metrograph.com/film/?vista_film_id=9999000517",image:images.inTheMood},
  {title:"The Chaser / 추격자",year:"2008",region:"South Korea",director:"Na Hong-jin",type:"Crime thriller",venue:"Metrograph",when:"Sat Aug 8 · 3:50 PM; Sun Aug 9 · 9:15 PM",tags:["ASIAN CINEMA"],text:"Na Hong-jin’s ferocious debut turns a pursuit narrative into something grimier and more morally exhausted than a conventional thriller. A very good choice if you want kinetic Korean genre cinema rather than contemplative arthouse pacing.",href:links.metrograph,image:images.chaser},
  {title:"Tampopo / タンポポ",year:"1985",region:"Japan",director:"Juzo Itami",type:"Comedy · food film",venue:"Metrograph",when:"Mon Aug 10 · 9:40 PM",format:"DCP",tags:["ASIAN CINEMA","CLASSIC"],text:"A “ramen western” in which truck drivers help a struggling noodle-shop owner, interrupted by delirious comic sketches about appetite. Itami’s movie is one of cinema’s great communal pleasures and plays especially well with an audience.",href:"https://metrograph.com/film/?vista_film_id=9999002885",image:images.tampopo},
  {title:"Take Care of My Cat / 고양이를 부탁해",year:"2001",region:"South Korea",director:"Jeong Jae-eun",type:"Drama · coming of age",venue:"Metrograph",when:"Wed Aug 12 · 7:20 PM",format:"DCP",tags:["ASIAN CINEMA"],text:"Five friends just out of high school try to preserve intimacy while work, class and distance pull them apart in Incheon. Jeong’s debut is a quietly essential portrait of young women and an early film to make texting part of its cinematic language.",href:links.metrograph,image:images.cat},
  {title:"Linda Linda Linda / リンダ リンダ リンダ",year:"2005",region:"Japan",director:"Nobuhiro Yamashita",type:"Music · coming of age",venue:"Metrograph",when:"Thu Aug 13 · 4:00 PM",tags:["ASIAN CINEMA"],text:"A high-school band has three days to learn Blue Hearts songs for a festival, with Bae Doona joining as their Korean exchange-student singer. Modest, funny and euphoric when the music finally lands—the kind of hangout film that blossoms theatrically.",href:links.metrograph,image:images.linda},
];

const classics:Film[]=[
  {title:"Irréversible",year:"2002",region:"France",director:"Gaspar Noé",type:"Experimental thriller · transgressive cinema",venue:"Metrograph",when:"Fri Aug 14 · 11:00 PM",format:"35mm",tags:["35MM","CULT CANON"],text:"Fourteen long takes move backward from horrific violence toward an ordinary afternoon, turning chronology itself into the film's central wound. Its influence on later extreme, immersive, and formally destabilized filmmaking is hard to overstate; the 35mm midnight-adjacent slot makes this a serious repertory event, not merely a cult curiosity.",href:"https://metrograph.com/film/?vista_film_id=9999004959",image:images.irreversible},
  {title:"2001: A Space Odyssey",year:"1968",region:"U.K. / U.S.",director:"Stanley Kubrick",type:"Science fiction",venue:"Museum of the Moving Image",when:"Sat Aug 8 · 4:00 PM",format:"70mm",tags:["70MM","CANON"],text:"Kubrick’s cosmic landmark is precisely the kind of film for which 70mm projection matters: scale, darkness, color and duration become physical. MoMI’s Redstone Theater is one of NYC’s best places to encounter it.",href:"https://movingimage.org/series/see-it-big-70mm-2026/",image:images.space2001},
  {title:"Amadeus",year:"1984",region:"U.S. / France",director:"Miloš Forman",type:"Period drama · music",venue:"Museum of the Moving Image",when:"Sun Aug 9 · 3:00 PM",format:"70mm",event:"Producer Paul Zaentz in person",tags:["70MM","GUEST"],text:"Forman’s operatic study of genius and envy gets a recently struck 70mm presentation, with producer Paul Zaentz attending this screening. The combination of large-format print and firsthand production context makes this much rarer than an ordinary revival.",href:"https://movingimage.org/event/amadeus-70mm/2026-08-09/",image:images.amadeus},
  {title:"The Untouchables",year:"1987",region:"U.S.",director:"Brian De Palma",type:"Gangster thriller",venue:"Museum of the Moving Image",when:"Fri Aug 14 · 6:30 PM",format:"70mm",tags:["70MM","DE PALMA"],text:"De Palma, David Mamet, Morricone and a monumental staircase sequence on a 70mm print. It opens the weekend as part of both MoMI’s See It Big: 70mm and De Palma: Summer of Suspense series.",href:"https://movingimage.org/event/the-untouchables-3/2026-08-14/",image:images.untouchables},
];

const noteworthy:Film[]=[
  {title:"Rites of Cinema: Reis & Cordeiro",year:"1963–1989",region:"Portugal",director:"António Reis & Margarida Cordeiro",type:"Retrospective · docufiction",venue:"BAM Rose Cinemas",when:"Aug 7–13",format:"New restorations by Cinemateca Portuguesa",tags:["NEW RESTORATIONS","RETROSPECTIVE"],text:"BAM’s compact retrospective is the week’s deepest repertory rabbit hole: rarely accessible films that blur ethnography, landscape, myth and fiction. Trás-os-Montes, Ana, Rosa de Areia and related works make this a true discovery series rather than a greatest-hits revival.",href:"https://www.bam.org/film/2026/rites-of-cinema",image:images.rites},
  {title:"Black God, White Devil / Deus e o Diabo na Terra do Sol",year:"1964",region:"Brazil",director:"Glauber Rocha",type:"Cinema Novo · western",venue:"Anthology Film Archives",when:"Sat Aug 8 · 9:00 PM; Fri Aug 14 · 6:30 PM",tags:["ESSENTIAL CINEMA","WORLD CINEMA"],text:"Rocha’s revolutionary blend of folk myth, political fury and western iconography screens inside Anthology’s wide-ranging Westerns series. If you want something genuinely different from the polished repertory circuit, this is the one.",href:"https://www.anthologyfilmarchives.org/film_screenings/series/61653",image:images.blackGod},
  {title:"Cuban Film Festival: Salvus",year:"2026 program",region:"Cuba / diaspora",director:"Nine filmmakers",type:"Festival · contemporary Cuban cinema",venue:"Anthology Film Archives",when:"Thu Aug 13–Sun Aug 16",tags:["FESTIVAL","NYC FILM CULTURE"],text:"Anthology and the Cuban Cultural Center of New York gather contemporary Cuban filmmakers working across Havana, Berlin, Paris, Spain and the U.S. The program begins Aug 13, with films touching migration, art, adolescence and political violence.",href:"https://www.anthologyfilmarchives.org/film_screenings/series/61673",image:images.salvus},
];

export default function Home() {
  return (
    <main>
      <header className="mast">
        <a className="brand" href="#top"><span className="brand-reel">●</span> NYC / ARTHOUSE <span className="brand-film">35MM</span></a>
        <nav aria-label="Primary navigation">
          <a href="#picks">This week</a><a href="#special">Special Focus</a><a href="#asian">Asian</a><a href="#events">Events</a><a href="#soon">Coming Soon</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-rotator" aria-hidden="true"><span style={{backgroundImage:`url("${images.hole}")`}}/><span style={{backgroundImage:`url("${images.centerStage}")`}}/><span style={{backgroundImage:`url("${images.mambo}")`}}/></div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="eyebrow hero-content"><span>✦ WEEK 01</span><span>NOW SHOWING · NEW YORK</span></div>
        <div className="hero-title-wrap hero-content"><span className="projector-mark">◉</span><h1>NYC Arthouse<br/><em>Film Guide</em></h1><span className="film-strip" aria-hidden="true">▯ ▯ ▯ ▯ ▯ ▯</span></div>
        <div className="hero-foot hero-content">
          <p className="range">AUG 8 → 14 <sup>2026</sup></p>
          <p className="dek">A personal weekly map of repertory, international and independent cinema—weighted toward Asian cinema, rare prints and your favorite filmmakers.</p>
        </div>
      </section>

      <section className="three" aria-labelledby="only-three">
        <div><p className="kicker" id="only-three">🎟 IF I COULD ONLY SEE THREE</p></div>
        <ol>
          <li><b>THE HOLE</b><span>Tsai · new 35mm</span></li>
          <li><b>CENTER STAGE</b><span>Stanley Kwan in person</span></li>
          <li><b>MILLENNIUM MAMBO</b><span>Hou · one-off</span></li>
        </ol>
      </section>

      <section className="mubi-band image-band" style={cardBg(images.miasma)}>
        <div><p className="kicker">🎫 MUBI GO THIS WEEK</p><h2>Teenage Sex and Death<br/>at Camp Miasma</h2></div>
        <div className="mubi-copy">
          <p><b>Jane Schoenbrun · 2026 · USA · 112 min</b></p>
          <p>MUBI marks it “in theaters this week · Free with MUBI GO.” Schoenbrun’s Cannes-premiered meta-slasher follows a young director rebooting a fictional horror franchise. For your subscription, this is an easy use of the weekly ticket: a buzzy new auteur release that is emphatically designed for a crowd.</p>
          <p><b>NYC:</b> MUBI’s public page confirms this week’s GO eligibility and its theatrical finder shows current New York screenings, but it does not expose which NYC theater/showtime is redeemable with GO. Confirm the eligible venue and time in the MUBI GO app before redemption.</p>
          <a className="arrow" href={links.mubi} target="_blank" rel="noreferrer">MUBI listing ↗</a>
        </div>
      </section>

      <section className="section" id="picks">
        <div className="section-head"><p className="kicker">01 / 🎬 THIS WEEK</p><h2>Top picks</h2><p>Eight screenings I would build the week around—expanded where the week genuinely earns it.</p></div>
        <div className="pick-list">
          {picks.map((p) => <article className="pick image-pick" style={cardBg(p.image)} key={p.rank}>
            <div className="rank">{p.rank}</div>
            <div className="pick-main"><div className="tags">{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</div><h3>{p.title}</h3><p className="meta">{p.note}</p><p>{p.reason}</p></div>
            <div className="showtime"><b>{p.when}</b><span>{p.venue}</span><a href={p.href} target="_blank" rel="noreferrer">Official listing ↗</a></div>
          </article>)}
        </div>
      </section>

      <section className="alert"><span>⚡ SATURDAY CONFLICT</span><p><b>Millennium Mambo</b> 10:45 PM and <b>In the Mood for Love</b> 10:50 PM are both at Metrograph. Pick Hou this week: Wong returns Aug 21, while this is Hou’s only currently listed date.</p></section>

      <section className="section dark" id="special">
        <div className="section-head"><p className="kicker">02 / 🎯 SPECIAL FOCUS</p><h2>Four hits this week</h2><p>Rarely do your director priorities line up this neatly in seven days.</p></div>
        <div className="card-grid">{focus.map(f=><FilmCard key={f.title} film={f}/>)}</div>
      </section>

      <section className="section" id="asian">
        <div className="section-head"><p className="kicker">03 / 🌏 ASIAN CINEMA</p><h2>Across Asia</h2><p>Hong Kong, Korea and Japan are especially strong this week. Special Focus titles from Taiwan and Iran are listed above.</p></div>
        <div className="card-grid">{asian.map(f=><FilmCard key={f.title} film={f}/>)}</div>
      </section>

      <section className="section blue" id="classics">
        <div className="section-head"><p className="kicker">04 / 🎞 ALL-TIME CLASSICS</p><h2>Canon, scale & provocation</h2><p>Large-format spectacle meets transgressive cult canon: these are films whose form gains something essential in a theater.</p></div>
        <div className="card-grid three-grid">{classics.map(f=><FilmCard key={f.title} film={f}/>)}</div>
      </section>

      <section className="section" id="new">
        <div className="section-head"><p className="kicker">05 / 🆕 NEW HITS</p><h2>New & in demand</h2><p>Recent releases and current runs with enough heat to plan around.</p></div>
        <div className="mini-grid">
          <article className="image-card compact-image" style={cardBg(images.miasma)}><Tag>MUBI RELEASE</Tag><h3>Teenage Sex and Death at Camp Miasma</h3><p><b>Jane Schoenbrun · 2026 · now playing in NYC</b></p><p>The week’s confirmed MUBI GO pick and the most obvious new-release match for your taste for recent cult cinema. MUBI’s public page confirms GO eligibility; use the app to select the redeemable NYC venue/showtime.</p><a href={links.mubi}>MUBI ↗</a></article>
          <article className="image-card compact-image" style={cardBg(images.samurai)}><Tag>NEW RELEASE</Tag><h3>The Samurai and the Prisoner</h3><p><b>Kiyoshi Kurosawa · Japan · 2026 · BAM + IFC</b></p><p>Kurosawa’s lush historical drama follows a samurai seeking counsel from an imprisoned strategist. A striking chance to see the prolific Japanese auteur working far outside his familiar horror/thriller register.</p><a href="https://www.bam.org/film/2026/the-samurai-and-the-prisoner" target="_blank" rel="noreferrer">BAM ↗</a></article>
          <article className="image-card compact-image" style={cardBg(images.lateFame)}><Tag>NEW RELEASE</Tag><h3>Late Fame</h3><p><b>Kent Jones · Film Forum · Aug 8–13</b></p><p>Willem Dafoe plays a forgotten poet unexpectedly rediscovered by younger admirers. Jones’s fiction debut is one of the notable first-run downtown titles this week.</p><a href="https://filmforum.org/film/late-fame" target="_blank" rel="noreferrer">Film Forum ↗</a></article>
        </div>
      </section>

      <section className="section ruled" id="worth">
        <div className="section-head"><p className="kicker">06 / ⭐ WORTH SEEING</p><h2>Further afield</h2><p>Strong theatrical bets that don’t need the Special Focus label.</p></div>
        <div className="worth-list">
          <div className="worth-image" style={cardBg(images.vertigo)}><b>Vertigo</b><span>Hitchcock · Metrograph · Aug 9 11:00 AM / Aug 11 3:15 PM · 35mm</span><a className="official-link" href="https://metrograph.com/film/?vista_film_id=9999000090" target="_blank" rel="noreferrer">Official listing ↗</a></div>
          <div className="worth-image" style={cardBg(images.laNotte)}><b>La Notte</b><span>Antonioni · Metrograph · Aug 14 3:50 PM · repertory</span><a className="official-link" href="https://metrograph.com/film/?vista_film_id=9999004957" target="_blank" rel="noreferrer">Official listing ↗</a></div>
          <div className="worth-image" style={cardBg(images.loveAfternoon)}><b>Love in the Afternoon</b><span>Éric Rohmer · Metrograph · Aug 11 8:00 PM · DCP</span><a className="official-link" href="https://metrograph.com/film/?vista_film_id=9999004921" target="_blank" rel="noreferrer">Official listing ↗</a></div>
          <div className="worth-image" style={cardBg(images.warriors)}><b>The Warriors</b><span>Walter Hill · Metrograph · Aug 8 1:50 PM / Aug 14 2:00 PM</span><a className="official-link" href="https://metrograph.com/film/?vista_film_id=9999002970" target="_blank" rel="noreferrer">Official listing ↗</a></div>
          <div className="worth-image" style={cardBg(images.rebecca)}><b>Rebecca</b><span>Alfred Hitchcock · Metrograph · Aug 9 4:10 PM</span><a className="official-link" href="https://metrograph.com/film/?vista_film_id=9999000678" target="_blank" rel="noreferrer">Official listing ↗</a></div>
          <div className="worth-image" style={cardBg(images.conversation)}><b>Conversation Piece</b><span>Luchino Visconti · Metrograph · Aug 9 6:45 PM</span><a className="official-link" href="https://metrograph.com/film/?vista_film_id=9999004912" target="_blank" rel="noreferrer">Official listing ↗</a></div>
          <div className="worth-image" style={cardBg(images.manhunter)}><b>Manhunter: The Final Cut</b><span>Michael Mann · IFC Center · daily Aug 8–13 · new 40th-anniversary 4K restoration</span><a className="official-link" href="https://www.ifccenter.com/films/michael-manns-manhunter-the-final-cut/" target="_blank" rel="noreferrer">Official listing ↗</a></div>
        </div>
      </section>

      <section className="section" id="other">
        <div className="section-head"><p className="kicker">07 / 🎥 OTHER NOTEWORTHY</p><h2>Dig deeper</h2><p>Restorations, festival programs and repertory discoveries outside the obvious canon.</p></div>
        <div className="card-grid three-grid">{noteworthy.map(f=><FilmCard key={f.title} film={f}/>)}</div>
      </section>

      <section className="section schedule" id="all">
        <div className="section-head"><p className="kicker">08 / 📋 ALL OTHER SCREENINGS</p><h2>The rest of the map</h2><p>A compact index of additional screenings surfaced in this week’s repertory/arthouse sweep. Recheck official pages before traveling.</p></div>
        <div className="schedule-grid">
          <div><h3>SAT 08</h3><p>Metrograph — Good Morning <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004946">11:45</TimeLink>; Le amiche <TimeLink href="https://metrograph.com/film/?vista_film_id=9999000988">11:50</TimeLink>; The Warriors <TimeLink href="https://metrograph.com/film/?vista_film_id=9999002970">1:50</TimeLink>; Chocolat <TimeLink href="https://metrograph.com/film/?vista_film_id=9999003839">2:00</TimeLink>; The Chaser <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004951">3:50</TimeLink>; Otar Iosseliani Early Shorts <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004952">4:15</TimeLink>; First Blood <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004944">6:25</TimeLink>; Night Is Short, Walk on Girl <TimeLink href="https://metrograph.com/film/?vista_film_id=9999001554">6:30</TimeLink>; Girlhood <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004954">8:25</TimeLink>; Dumplings <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004945">8:45</TimeLink>; Millennium Mambo <TimeLink href={links.mambo}>10:45</TimeLink>; In the Mood for Love <TimeLink href="https://metrograph.com/film/?vista_film_id=9999000517">10:50</TimeLink>.</p></div>
          <div><h3>SUN 09</h3><p>Metrograph — Vertigo <TimeLink href="https://metrograph.com/film/?vista_film_id=9999000090">11:00</TimeLink>; Girlhood <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004954">11:15</TimeLink>; Le amiche <TimeLink href="https://metrograph.com/film/?vista_film_id=9999000988">1:30</TimeLink>; The Hole <TimeLink href={links.hole}>1:40</TimeLink>; The Kid <TimeLink href="https://metrograph.com/film/?vista_film_id=9999001951">3:40</TimeLink>; Rebecca <TimeLink href="https://metrograph.com/film/?vista_film_id=9999000678">4:10</TimeLink>; Favorites of the Moon <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004953">5:00</TimeLink>; Conversation Piece <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004912">6:45</TimeLink>; And Then There Was Light <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004956">7:15</TimeLink>; The Chaser <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004951">9:15</TimeLink>; Scene of the Crime <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004950">9:30</TimeLink>. MoMI — Amadeus 70mm <TimeLink href="https://movingimage.org/event/amadeus-70mm/2026-08-09/">3:00</TimeLink>.</p></div>
          <div><h3>MON 10</h3><p>Metrograph — Bouchra <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004897">3:10</TimeLink>; Toute une nuit <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004906">3:15</TimeLink>; La Collectionneuse <TimeLink href="https://metrograph.com/film/?vista_film_id=9999003959">5:00</TimeLink>; Millionaires’ Express <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004943">5:15</TimeLink>; 3 Women <TimeLink href="https://metrograph.com/film/?vista_film_id=9999000915">7:00</TimeLink>; The Razor’s Edge + Lebanese, Hostage of Their City <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004923">7:20</TimeLink>; Collateral <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004937">9:35</TimeLink>; Tampopo <TimeLink href="https://metrograph.com/film/?vista_film_id=9999002885">9:40</TimeLink>.</p></div>
          <div><h3>TUE 11</h3><p>Metrograph — Vertigo <TimeLink href="https://metrograph.com/film/?vista_film_id=9999000090">3:15</TimeLink>; The Great Silence <TimeLink href="https://metrograph.com/film/?vista_film_id=9999003062">3:45</TimeLink>; Before Sunrise <TimeLink href="https://metrograph.com/film/?vista_film_id=9999002387">5:50</TimeLink>; The Green Room <TimeLink href="https://metrograph.com/film/?vista_film_id=9999001546">6:00</TimeLink>; Love in the Afternoon <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004921">8:00</TimeLink>; The Red Light Bandit <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004932">8:00</TimeLink>; Good Time <TimeLink href="https://metrograph.com/film/?vista_film_id=9999001110">10:00</TimeLink>; Fallen Angels <TimeLink href="https://metrograph.com/film/?vista_film_id=9999003325">10:10</TimeLink>. Anthology — Time to Die <TimeLink href="https://www.anthologyfilmarchives.org/film_screenings/series/61653">6:45</TimeLink>; The Shooting <TimeLink href="https://www.anthologyfilmarchives.org/film_screenings/series/61653">9:00</TimeLink>.</p></div>
          <div><h3>WED 12</h3><p>Metrograph — Solaris <TimeLink href="https://metrograph.com/film/?vista_film_id=9999002965">3:15</TimeLink>; Mountains of the Moon <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004942">4:30</TimeLink>; Girl with a Suitcase with James Gray <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004980">6:30</TimeLink> (members); Take Care of My Cat <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004614">7:20</TimeLink>; State of Grace <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004936">9:35</TimeLink>; El Topo <TimeLink href="https://metrograph.com/film/?vista_film_id=9999003748">9:40</TimeLink>. Anthology — Nobody Wanted to Die <TimeLink href="https://www.anthologyfilmarchives.org/film_screenings/series/61653">6:30</TimeLink>; The Belle Starr Story <TimeLink href="https://www.anthologyfilmarchives.org/film_screenings/series/61653">9:00</TimeLink>.</p></div>
          <div><h3>THU 13</h3><p>Metrograph — La Haine <TimeLink href="https://metrograph.com/film/?vista_film_id=9999003673">2:00</TimeLink>; Happy Together <TimeLink href="https://metrograph.com/film/?vista_film_id=9999000497">2:10</TimeLink>; Linda Linda Linda <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004603">4:00</TimeLink>; L’Argent <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004934">4:15</TimeLink>; The Traveler <TimeLink href={links.traveler}>6:10</TimeLink>; Do You Love Me <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004916">6:20</TimeLink>; JFK <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004941">7:45</TimeLink>. IFC — Union County <TimeLink href="https://www.ifccenter.com/films/union-county/">7:00 Q&A</TimeLink> (sold out at last check). Anthology — Cuban Film Festival opens; Little Peach <TimeLink href="https://www.anthologyfilmarchives.org/film_screenings/series/61673">7:00</TimeLink>.</p></div>
          <div><h3>FRI 14</h3><p>Metrograph — Les Bonnes Femmes <TimeLink href="https://metrograph.com/film/?vista_film_id=9999002290">1:45</TimeLink>; The Warriors <TimeLink href="https://metrograph.com/film/?vista_film_id=9999002970">2:00</TimeLink>; La Notte <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004957">3:50</TimeLink>; Deliverance <TimeLink href="https://metrograph.com/film/?vista_film_id=9999001370">4:10</TimeLink>; Nil by Mouth <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004958">6:20</TimeLink>; Walkabout <TimeLink href="https://metrograph.com/film/?vista_film_id=9999003277">6:30</TimeLink>; The Hunger <TimeLink href="https://metrograph.com/film/?vista_film_id=9999001195">8:45</TimeLink>; Obsession <TimeLink href="https://metrograph.com/film/?vista_film_id=9999000197">8:50</TimeLink>; Chungking Express <TimeLink href="https://metrograph.com/film/?vista_film_id=9999000735">10:50</TimeLink>; Irréversible <TimeLink href="https://metrograph.com/film/?vista_film_id=9999004959">11:00</TimeLink>. MoMI — The Untouchables 70mm <TimeLink href="https://movingimage.org/event/the-untouchables-3/2026-08-14/">6:30</TimeLink>. Anthology — Black God, White Devil <TimeLink href="https://www.anthologyfilmarchives.org/film_screenings/series/61653">6:30</TimeLink>.</p></div>
        </div>
      </section>

      <section className="section soon" id="soon">
        <div className="section-head"><p className="kicker">09 / 🔭 COMING SOON — SPECIAL FOCUS</p><h2>BAM sci-fi first; NYFF selectively</h2><p>The immediate priority is BAM’s Arthouse Sci-Fi series, which contains three direct Special Focus hits. NYFF64 is kept deliberately selective here rather than turning this section into a festival dump.</p></div>
        <div className="soon-grid">
          <article className="image-card soon-image" style={cardBg(images.solaris)}><span>AUG 21 → 25 · BAM ROSE CINEMAS</span><h3>Solaris</h3><p><b>Andrei Tarkovsky · 1972 · 167 min · DCP</b></p><p>The first of BAM’s two Tarkovsky anchors in Arthouse Sci-Fi. If the Aug 12 Metrograph screening is inconvenient, this multi-date run is the stronger backup plan.</p><a className="official-link" href="https://www.bam.org/film/2026/arthouse-scifi-solaris" target="_blank" rel="noreferrer">Official listing ↗</a></article>
          <article className="image-card soon-image" style={cardBg(images.stalker)}><span>AUG 22 → 26 · BAM ROSE CINEMAS</span><h3>Stalker</h3><p><b>Andrei Tarkovsky · 1979 · 162 min · DCP</b></p><p>A direct Special Focus must-track: Tarkovsky’s Zone is one of cinema’s great immersive spaces, and BAM gives it a five-day window rather than a one-off.</p><a className="official-link" href="https://www.bam.org/film/2026/arthouse-scifi-stalker" target="_blank" rel="noreferrer">Official listing ↗</a></article>
          <article className="image-card soon-image" style={cardBg(images.memoria)}><span>AUG 22 → 27 · BAM ROSE CINEMAS</span><h3>Memoria</h3><p><b>Apichatpong Weerasethakul · 2021 · 136 min · 35mm</b></p><p>Apichatpong’s film is unusually dependent on theatrical sound and patient communal attention. BAM lists this return on 35mm, making it one of the month’s strongest Special Focus appointments.</p><a className="official-link" href="https://www.bam.org/film/2026/arthouse-scifi-memoria" target="_blank" rel="noreferrer">Official listing ↗</a></article>
          <article className="image-card soon-image" style={cardBg(images.allSudden)}><span>SEP 25 → OCT 12 · NYFF64</span><h3>All of a Sudden</h3><p><b>Ryūsuke Hamaguchi · 2026 · 196 min · U.S. Premiere</b></p><p>Hamaguchi’s new French-language feature, about a nursing-home director and a radical care program, comes to NYFF after Cannes.</p><a className="official-link" href="https://www.filmlinc.org/nyff2026/films/all-of-a-sudden/" target="_blank" rel="noreferrer">Official listing ↗</a></article>
          <article className="image-card soon-image" style={cardBg(images.possibleLove)}><span>SEP 25 → OCT 12 · NYFF64</span><h3>Possible Love</h3><p><b>Lee Chang-dong · 2026 · 164 min · U.S. Premiere</b></p><p>Two married couples collide across class lines in Lee’s new drama about layoffs, documentary-making and economic precarity.</p><a className="official-link" href="https://www.filmlinc.org/nyff2026/films/possible-love/" target="_blank" rel="noreferrer">Official listing ↗</a></article>
          <article className="image-card soon-image" style={cardBg(images.nowhere)}><span>SEP 25 → OCT 12 · NYFF64</span><h3>Nowhere To Lay My Eyes</h3><p><b>Hong Sangsoo · 2026 · 72 min · North American Premiere</b></p><p>Kim Min-hee plays an experimental filmmaker visiting her semi-estranged mother—a compact Hong study of family, aging and art.</p><a className="official-link" href="https://www.filmlinc.org/nyff2026/films/nowhere-to-lay-my-eyes/" target="_blank" rel="noreferrer">Official listing ↗</a></article>
          <article className="image-card soon-image" style={cardBg(images.southTehran)}><span>SEP 25 → OCT 12 · NYFF64</span><h3>South of Tehran</h3><p><b>Kleber Mendonça Filho with Jafar Panahi · 2026 · 8 min · World Premiere</b></p><p>Panahi recalls the cinephilia of his youth in Farsi in the inaugural NYFF Encounters short. Exact screening details remain TBA.</p><a className="official-link" href="https://www.filmlinc.org/nyff2026/films/south-of-tehran/" target="_blank" rel="noreferrer">Official listing ↗</a></article>
        </div><a className="big-link" href={links.nyff} target="_blank" rel="noreferrer">Explore official NYFF64 lineup ↗</a>
      </section>

      <section className="section events" id="events">
        <div className="section-head"><p className="kicker">10 / 🎤 NYC FILM EVENTS</p><h2>August 2026</h2><p>First report of the month: a fuller event calendar. Later August editions will show changes and reminders instead of repeating this entire list.</p></div>
        <div className="event-list">
          <div><time>AUG 08 · 6:30 PM</time><h3><a href="https://filmforum.org/film/center-stage" target="_blank" rel="noreferrer">Center Stage — Stanley Kwan in person</a></h3><p>Film Forum · post-film conversation · co-presented by CineCina Film Festival.</p><b>TOP EVENT</b></div>
          <div><time>AUG 08 · 6:35 PM</time><h3><a href="https://www.ifccenter.com/films/julian/" target="_blank" rel="noreferrer">Julian — Cato Kusters Q&A</a></h3><p>IFC Center · Q&A with director Cato Kusters after the screening.</p></div>
          <div><time>AUG 08 · 7:35 PM</time><h3><a href="https://www.ifccenter.com/films/the-big-cheese/" target="_blank" rel="noreferrer">The Big Cheese — filmmaker Q&A</a></h3><p>IFC Center · Sara Joe Wolansky and subject Adam Moskowitz, moderated by Josh Windsor.</p></div>
          <div><time>AUG 09 · 3:00 PM</time><h3><a href="https://movingimage.org/event/amadeus-70mm/2026-08-09/" target="_blank" rel="noreferrer">Amadeus in 70mm — Paul Zaentz in person</a></h3><p>Museum of the Moving Image · producer appearance with a recently struck large-format print.</p></div>
          <div><time>AUG 13 · 7:00 PM</time><h3><a href="https://www.ifccenter.com/films/union-county/" target="_blank" rel="noreferrer">Union County — sneak preview + Q&A</a></h3><p>IFC Center · Adam Meeks with Will Poulter, Noah Centineo and Annette Deao. <b>Sold out at last check.</b></p></div>
          <div><time>AUG 13 · 9:00 PM</time><h3><a href="https://www.filmlinc.org/films/cam/" target="_blank" rel="noreferrer">Cam — new 35mm print + Q&A</a></h3><p>Film at Lincoln Center · world premiere of a newly struck 35mm print; Daniel Goldhaber and Madeline Brewer in person.</p></div>
          <div><time>AUG 21–27</time><h3><a href={links.bamSciFi} target="_blank" rel="noreferrer">BAM Arthouse Sci-Fi — Tarkovsky, Apichatpong & cult futures</a></h3><p>BAM Rose Cinemas · Solaris Aug 21–25, Stalker Aug 22–26, Memoria Aug 22–27, plus Tetsuo: The Iron Man, La Jetée + The Last Angel of History, On the Silver Globe and more. This is the month’s most concentrated overlap with your Special Focus and cult-cinema tastes.</p><b>HIGH PRIORITY</b></div>
          <div><time>AUG 21 · 7:00 PM</time><h3><a href="https://movingimage.org/event/a-bright-future/" target="_blank" rel="noreferrer">A Bright Future — Lucía Garibaldi Q&A</a></h3><p>Museum of the Moving Image · screening of Garibaldi’s new sci-fi drama followed by director Q&A.</p></div>
          <div><time>AUG 28–29</time><h3><a href="https://www.anthologyfilmarchives.org/film_screenings/series/61608" target="_blank" rel="noreferrer">Tony Ganz + Rhody Streeter — filmmakers in person</a></h3><p>Anthology Film Archives · New Discoveries program; filmmakers scheduled in person both days.</p></div>
          <div><time>AUG 31 · 6:00 PM</time><h3><a href="https://www.filmlinc.org/films/the-kill-off-my-new-gun/" target="_blank" rel="noreferrer">Missing Movies panel + 35mm double feature</a></h3><p>Film at Lincoln Center · The Kill-Off + My New Gun with panel discussion on film preservation and availability.</p></div>
        </div>
      </section>

      <section className="archive" id="archive"><p className="kicker">🗃 PREVIOUS WEEKS / ARCHIVE</p><h2>Archive starts here.</h2><p>This is Week 01. Beginning next Thursday, expired editions will be retained here while the newest week takes over the home view.</p></section>

      <footer><span>NYC ARTHOUSE FILM GUIDE</span><span>Updated Aug 7, 2026 · Sources checked against official venue listings</span></footer>
    </main>
  );
}
