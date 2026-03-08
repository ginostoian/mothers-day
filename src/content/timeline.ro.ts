import type {
  FinalLetterRo,
  HeroMessageRo,
  PhotoAsset,
  SiteMetaRo,
  StoryChapter,
} from "@/types/story";

export const siteMetaRo: SiteMetaRo = {
  title: "Simona, Oaza Noastră De Bine",
  subtitle: "Un album de 8 Martie dedicat iubirii noastre",
  dedication: "Pentru Simona, dragostea și forța familiei noastre.",
  launchDateRo: "8 martie 2026",
  musicUrl: "/audio/you-are-the-reason.mp3",
};

export const heroMessageRo: HeroMessageRo = {
  eyebrow: "8 Martie - Ziua Mamei",
  headline: "Simona, ești povestea noastră cea mai frumoasă.",
  subheadline:
    "Fiecare etapă, fiecare lună, fiecare zâmbet al lui Robert și Eva poartă amprenta inimii tale.",
  ctaLabel: "Începe povestea",
};

const unsplashPool: Array<{
  src: string;
  creditName: string;
  creditUrl: string;
}> = [
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1600&q=80",
    creditName: "Kelly Sikkema",
    creditUrl: "https://unsplash.com/photos/6aY-6B3MiZ4",
  },
  {
    src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1600&q=80",
    creditName: "Josh Willink",
    creditUrl: "https://unsplash.com/photos/-h9uJQ4r4SU",
  },
  {
    src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1600&q=80",
    creditName: "Jordan Whitt",
    creditUrl: "https://unsplash.com/photos/EERxy8zrwOo",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80",
    creditName: "Avel Chuklanov",
    creditUrl: "https://unsplash.com/photos/DUmFLtMeAbQ",
  },
  {
    src: "https://images.unsplash.com/photo-1519340333755-c1aa5571fd46?auto=format&fit=crop&w=1600&q=80",
    creditName: "Nathan Dumlao",
    creditUrl: "https://unsplash.com/photos/Ewa5fkCg4E8",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
    creditName: "Tim Mossholder",
    creditUrl: "https://unsplash.com/photos/8g0D8ZfFXyA",
  },
  {
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
    creditName: "Jonathan Borba",
    creditUrl: "https://unsplash.com/photos/8l8Yl2ruUsg",
  },
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80",
    creditName: "Chewy",
    creditUrl: "https://unsplash.com/photos/0QfJ7w7W3jA",
  },
  {
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    creditName: "Janko Ferlič",
    creditUrl: "https://unsplash.com/photos/sfL_QOnmy00",
  },
  {
    src: "https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?auto=format&fit=crop&w=1600&q=80",
    creditName: "Patricia Prudente",
    creditUrl: "https://unsplash.com/photos/VmM6lyT0R8I",
  },
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1800&q=80",
    creditName: "Chewy",
    creditUrl: "https://unsplash.com/photos/0QfJ7w7W3jA",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80",
    creditName: "Joseph Gonzalez",
    creditUrl: "https://unsplash.com/photos/iFgRcqHznqg",
  },
  {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1600&q=80",
    creditName: "Liane Metzler",
    creditUrl: "https://unsplash.com/photos/uEhR8Lk5YY0",
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=80",
    creditName: "Fernando @cferdo",
    creditUrl: "https://unsplash.com/photos/5fQfP6S4z4M",
  },
  {
    src: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&w=1600&q=80",
    creditName: "Ana Tablas",
    creditUrl: "https://unsplash.com/photos/oB0xbLwcaMw",
  },
  {
    src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1600&q=80",
    creditName: "Jonathan Borba",
    creditUrl: "https://unsplash.com/photos/lrQPTQs7nQQ",
  },
];

const buildPhotos = (
  chapterKey: string,
  captions: string[],
  startIndex: number,
): PhotoAsset[] =>
  captions.map((captionRo, index) => {
    const pick = unsplashPool[(startIndex + index) % unsplashPool.length];
    return {
      id: `${chapterKey}-${index + 1}`,
      src: pick.src,
      altRo: `${captionRo} - ${chapterKey}`,
      captionRo,
      creditName: pick.creditName,
      creditUrl: pick.creditUrl,
    };
  });

const buildFamilyArchivePhotos = (
  chapterKey: string,
  photos: Array<{
    src: string;
    altRo: string;
    captionRo: string;
  }>,
): PhotoAsset[] =>
  photos.map((photo, index) => ({
    id: `${chapterKey}-${String(index + 1).padStart(2, "0")}`,
    src: photo.src,
    altRo: photo.altRo,
    captionRo: photo.captionRo,
    creditName: "Arhiva familiei",
    creditUrl: "",
  }));

export const chapters: StoryChapter[] = [
  {
    slug: "prolog-8-martie",
    titleRo: "Prolog - 8 Martie pentru Simona",
    periodRo: "Începutul albumului",
    phase: "before_robert",
    accent: "gold",
    narrativeRo:
      "Această zi începe cu recunoștință. Nu doar pentru că ești mamă, ci pentru felul în care ai transformat casa noastră în locul unde iubirea are ritm, ordine și curaj.",
    truthRo:
      "Adevăr despre Simona: atunci când iubești, o faci total, fără jumătăți de măsură.",
    photos: buildPhotos(
      "prolog",
      [
        "Lumina care deschide povestea noastră",
        "Primul zâmbet al dimineții de 8 Martie",
        "Calmul tău care ține familia unită",
        "Privirea care spune totul fără cuvinte",
        "Frumusețea ta discretă și puternică",
        "Începutul unei noi pagini în album",
      ],
      0,
    ),
  },
  {
    slug: "inainte-de-robert",
    titleRo: "Înainte de Robert",
    periodRo: "Anii care ne-au construit",
    phase: "before_robert",
    accent: "ivory",
    narrativeRo:
      "Înainte să devenim părinți, tu erai deja omul pe care ma puteam baza în orice furtună. Munca ta, disciplina ta și felul tău de a iubi ne-au dat direcție.",
    truthRo:
      "Adevăr despre Simona: ai o voință de fier și îți construiești singură drumul.",
    photos: [
      {
        id: "inainte-robert-01",
        src: "/photos/inainte-de-copii/inainte-01.jpg",
        altRo: "Simona înainte de copii, portret cu ochelari",
        captionRo:
          "Privirea ta hotărâtă din anii în care ne-am construit visurile",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "inainte-robert-02",
        src: "/photos/inainte-de-copii/inainte-02.jpg",
        altRo: "Simona înainte de copii, portret luminos",
        captionRo: "Eleganță și tărie în același zâmbet",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "inainte-robert-03",
        src: "/photos/inainte-de-copii/inainte-03.jpg",
        altRo: "Simona într-o livadă cu mere",
        captionRo: "Bucuria ta simplă care luminează orice loc",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "inainte-robert-04",
        src: "/photos/inainte-de-copii/inainte-04.jpg",
        altRo: "Simona în oraș, expresie jucăușă",
        captionRo: "Spiritul tău puternic și autentic",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "inainte-robert-05",
        src: "/photos/inainte-de-copii/inainte-05.jpg",
        altRo: "Simona și soțul ei într-o seară de sărbătoare",
        captionRo: "Noi doi, înainte să devenim părinți",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "inainte-robert-06",
        src: "/photos/inainte-de-copii/inainte-06.jpg",
        altRo: "Simona montând mobilă cu bormașina",
        captionRo: "Voința de fier cu care faci totul să se întâmple",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "inainte-robert-07",
        src: "/photos/inainte-de-copii/inainte-07.jpg",
        altRo: "Simona și soțul ei dansând",
        captionRo: "Dragostea care ne-a ținut mereu aproape",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "inainte-robert-08",
        src: "/photos/inainte-de-copii/inainte-08.jpg",
        altRo: "Simona, portret de aproape",
        captionRo: "Frumusețe, sinceritate și forță într-un singur cadru",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "inainte-robert-09",
        src: "/photos/inainte-de-copii/inainte-09.jpg",
        altRo: "Simona, portret înainte de copii",
        captionRo: "Femeia care și-a construit drumul pas cu pas",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
    ],
  },
  {
    slug: "sarcina-robert-luna-1-2",
    titleRo: "Sarcina cu Robert - început",
    periodRo: "Lunile 1-2",
    phase: "pregnancy_robert",
    accent: "rose",
    narrativeRo:
      "Primele luni au venit cu emoții, întrebări și un început de miracol. În mijlocul tuturor schimbărilor, ai rămas calmă și atentă (semi-haha), pregătind fiecare zi cu seriozitate.",
    truthRo:
      "Adevăr despre Simona: pui mereu sinceritatea pe primul loc, chiar și când e greu.",
    photos: [
      {
        id: "sarcina-robert-1-2-01",
        src: "/photos/sarcina-robert/robert-sarcina-01.jpg",
        altRo: "Simona la începutul sarcinii cu Robert, fotografie în oglindă",
        captionRo: "Octombrie 2021 - primele săptămâni și primele emoții",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "sarcina-robert-1-2-02",
        src: "/photos/sarcina-robert/robert-sarcina-02.jpg",
        altRo: "Simona la începutul sarcinii cu Robert, selfie în oglindă",
        captionRo: "Octombrie 2021 - bucuria care începea să prindă formă",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "sarcina-robert-1-2-03",
        src: "/photos/sarcina-robert/robert-sarcina-03.jpg",
        altRo: "Simona la începutul sarcinii cu Robert, selfie în oglindă",
        captionRo: "Noiembrie 2021 - un nou capitol început cu curaj",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "sarcina-robert-1-2-04",
        src: "/photos/sarcina-robert/robert-sarcina-04.jpg",
        altRo: "Simona în sarcină cu Robert, selfie în oglindă",
        captionRo: "Decembrie 2021 - iubirea creștea în fiecare zi",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "sarcina-robert-1-2-05",
        src: "/photos/sarcina-robert/robert-sarcina-05.jpg",
        altRo: "Simona în sarcină cu Robert, început de primăvară",
        captionRo: "Martie 2022 - deja se vedea minunat drumul spre Robert",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
    ],
  },
  {
    slug: "sarcina-robert-luna-4-5",
    titleRo: "Sarcina cu Robert - mijloc",
    periodRo: "Lunile 4-5",
    phase: "pregnancy_robert",
    accent: "sunset",
    narrativeRo:
      "Pe măsură ce lunile treceau, te vedeam tot mai hotărâtă să fii mama care poate orice pentru copilul ei. Ai fost tot, ai iubit, ai mers înainte fără să ceri aplauze.",
    truthRo: "Adevăr despre Simona: Felul tău de a fi este unic și minunat.",
    photos: [
      {
        id: "sarcina-robert-4-5-01",
        src: "/photos/sarcina-robert/robert-sarcina-06.jpg",
        altRo: "Simona în mijlocul sarcinii cu Robert, ținută albă",
        captionRo: "Martie 2022 - echilibru, răbdare și forță",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "sarcina-robert-4-5-02",
        src: "/photos/sarcina-robert/robert-sarcina-07.jpg",
        altRo: "Simona în mijlocul sarcinii cu Robert, portret în oglindă",
        captionRo: "Mai 2022 - pași siguri spre întâlnirea cu Robert",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "sarcina-robert-4-5-03",
        src: "/photos/sarcina-robert/robert-sarcina-08.jpg",
        altRo: "Simona în sarcină cu Robert, portret vertical",
        captionRo: "Mai 2022 - liniște și feminitate în mijlocul schimbării",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "sarcina-robert-4-5-04",
        src: "/photos/sarcina-robert/robert-sarcina-12.jpg",
        altRo: "Simona în sarcină cu Robert cu perna de alăptare",
        captionRo: "Mai 2022 - pregătiri concrete pentru venirea lui Robert",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
    ],
  },
  {
    slug: "sarcina-robert-luna-8-9",
    titleRo: "Sarcina cu Robert - aproape de naștere",
    periodRo: "Lunile 8-9",
    phase: "pregnancy_robert",
    accent: "gold",
    narrativeRo:
      "Ultimele luni au fost intense, dar tu ai rămas neclintită. Când ma uitam la tine, vedeam o mamă deja completă: atentă, puternică și gata să ofere totul.",
    truthRo:
      "Adevăr despre Simona: dragostea ta pentru copii nu cunoaște limite.",
    photos: [
      {
        id: "sarcina-robert-8-9-01",
        src: "/photos/sarcina-robert/robert-sarcina-09.jpg",
        altRo: "Simona în sarcină avansată cu Robert",
        captionRo: "Mai 2022 - aproape de întâlnirea cu Robert",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "sarcina-robert-8-9-02",
        src: "/photos/sarcina-robert/robert-sarcina-13.jpg",
        altRo: "Simona în sarcină cu Robert, portret de aproape",
        captionRo: "Iunie 2022 - tandrețe și putere înainte de naștere",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "sarcina-robert-8-9-03",
        src: "/photos/sarcina-robert/robert-sarcina-10.jpg",
        altRo: "Simona în sarcină avansată cu Robert, fotografie în casă",
        captionRo: "Iunie 2022 - nerăbdare și iubire în ultimele zile",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "sarcina-robert-8-9-04",
        src: "/photos/sarcina-robert/robert-sarcina-11.jpg",
        altRo: "Simona în sarcină avansată cu Robert, selfie în oglindă",
        captionRo: "Iunie 2022 - o mamă deja completă",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
      {
        id: "sarcina-robert-8-9-05",
        src: "/photos/sarcina-robert/robert-sarcina-14.jpg",
        altRo: "Simona în sarcină avansată cu Robert, apel video",
        captionRo: "Iunie 2022 - ultimele momente înainte de marea întâlnire",
        creditName: "Arhiva familiei",
        creditUrl: "",
      },
    ],
  },
  {
    slug: "dupa-robert-0-3-luni",
    titleRo: "După Robert - primele luni",
    periodRo: "0-3 luni",
    phase: "after_robert",
    accent: "rose",
    narrativeRo:
      "Primele nopți scurte și primele plânsete n-au schimbat ce ești: ai fost prezentă în fiecare secundă, cu o grijă pe care nu o pot descrie complet în cuvinte.",
    truthRo:
      "Adevăr despre Simona: pentru Robert ai fost, din prima zi, locul cel mai sigur din lume.",
    photos: buildFamilyArchivePhotos("dupa-robert-0-3", [
      {
        src: "/photos/dupa-robert/robert-dupa-25.jpg",
        altRo: "Simona și Robert imediat după naștere",
        captionRo: "25 iunie 2022 - prima întâlnire cu Robert",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-26.jpg",
        altRo: "Simona și Robert în primele zile",
        captionRo: "28 iunie 2022 - primele clipe împreună",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-27.jpg",
        altRo: "Simona și Robert nou-născut",
        captionRo: "4 iulie 2022 - iubire în forma ei cea mai pură",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-28.jpg",
        altRo: "Simona cu Robert în brațe",
        captionRo: "10 iulie 2022 - primele zile acasă",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-29.jpg",
        altRo: "Simona și Robert la început de drum",
        captionRo: "11 iulie 2022 - tandrețe și grijă fără sfârșit",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-30.jpg",
        altRo: "Simona și Robert, moment de familie",
        captionRo: "12 iulie 2022 - inima casei noastre",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-31.jpg",
        altRo: "Simona cu Robert în primele săptămâni",
        captionRo: "15 iulie 2022 - începutul celei mai frumoase rutine",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-01.jpg",
        altRo: "Simona și Robert, apropiere mamă-copil",
        captionRo: "21 iulie 2022 - brațele tale, locul lui sigur",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-02.jpg",
        altRo: "Simona și Robert în primele luni",
        captionRo: "27 iulie 2022 - iubire din priviri",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-03.jpg",
        altRo: "Simona în primele luni cu Robert",
        captionRo: "1 august 2022 - răbdare și blândețe zi de zi",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-04.jpg",
        altRo: "Simona cu Robert, moment în familie",
        captionRo: "10 august 2022 - fiecare zi, o descoperire nouă",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-05.jpg",
        altRo: "Simona și Robert în etapa de început",
        captionRo: "11 august 2022 - dragoste care crește în fiecare clipă",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-07.jpg",
        altRo: "Simona și Robert, fotografie de familie",
        captionRo: "19 august 2022 - primele amintiri mari",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-08.jpg",
        altRo: "Simona cu Robert în primele luni",
        captionRo: "29 august 2022 - căldură, liniște, acasă",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-09.jpg",
        altRo: "Simona și Robert la 2-3 luni",
        captionRo: "7 septembrie 2022 - o legătură de neclintit",
      },
    ]),
  },
  {
    slug: "dupa-robert-6-12-luni",
    titleRo: "După Robert - creștere și echilibru",
    periodRo: "6-12 luni",
    phase: "after_robert",
    accent: "ivory",
    narrativeRo:
      "În lunile acestea ai găsit un echilibru incredibil între noi, casă și copil. Ai făcut imposibilul să pară firesc, zi după zi.",
    truthRo:
      "Adevăr despre Simona: când îți propui ceva, îl transformi în realitate.",
    photos: buildFamilyArchivePhotos("dupa-robert-6-12", [
      {
        src: "/photos/dupa-robert/robert-dupa-10.jpg",
        altRo: "Simona și Robert în etapa de creștere",
        captionRo: "2 octombrie 2022 - ritmul nostru nou, împreună",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-11.jpg",
        altRo: "Simona cu Robert, moment de familie",
        captionRo: "2 octombrie 2022 - zâmbete și brațe deschise",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-12.jpg",
        altRo: "Simona și Robert, etapă de 6-12 luni",
        captionRo: "7 octombrie 2022 - pași mici, progres mare",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-13.jpg",
        altRo: "Simona și Robert în toamna lui 2022",
        captionRo: "11 octombrie 2022 - răbdare și joacă",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-14.jpg",
        altRo: "Simona cu Robert, amintire în familie",
        captionRo: "11 octombrie 2022 - o zi simplă, o amintire prețioasă",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-16.jpg",
        altRo: "Simona și Robert, momente de creștere",
        captionRo: "23 octombrie 2022 - învățăm împreună în fiecare zi",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-18.jpg",
        altRo: "Simona și Robert în noiembrie 2022",
        captionRo: "2 noiembrie 2022 - bucurie în lucrurile mici",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-19.jpg",
        altRo: "Simona și Robert, toamnă târzie",
        captionRo: "19 noiembrie 2022 - echilibrul pe care l-ai construit",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-20.jpg",
        altRo: "Simona cu Robert în oraș",
        captionRo: "26 noiembrie 2022 - mamă și copil, mereu împreună",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-21.jpg",
        altRo: "Simona și Robert la început de decembrie",
        captionRo: "1 decembrie 2022 - familie, căldură, apropiere",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-22.jpg",
        altRo: "Simona și Robert, timp de calitate",
        captionRo: "9 decembrie 2022 - creștem în iubire",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-23.jpg",
        altRo: "Simona și Robert în sezonul sărbătorilor",
        captionRo: "11 decembrie 2022 - amintiri de iarnă",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-24.jpg",
        altRo: "Simona și Robert înainte de Crăciun",
        captionRo: "23 decembrie 2022 - bucuria sărbătorilor în trei",
      },
    ]),
  },
  {
    slug: "robert-2-3-ani",
    titleRo: "Robert - etapa 2-3 ani",
    periodRo: "Copilăria care aleargă",
    phase: "after_robert",
    accent: "sunset",
    narrativeRo:
      "Pe măsură ce Robert a devenit tot mai curios și energic, tu ai rămas busola lui: fermă, caldă și mereu gata să îi arăți ce înseamnă binele.",
    truthRo:
      "Adevăr despre Simona: bunătatea ta vine cu claritate și principii.",
    photos: buildFamilyArchivePhotos("robert-2-3", [
      {
        src: "/photos/dupa-robert/robert-dupa-32.jpg",
        altRo: "Simona și Robert la început de 2024",
        captionRo: "29 februarie 2024 - împreună, în ritmul vostru",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-33.jpg",
        altRo: "Simona și Robert în familie",
        captionRo: "1 martie 2024 - o nouă lună plină de zâmbete",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-34.jpg",
        altRo: "Simona și Robert, amintire de primăvară",
        captionRo: "4 martie 2024 - joacă și apropiere",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-35.jpg",
        altRo: "Simona și Robert în martie 2024",
        captionRo: "4 martie 2024 - încă un moment prețios împreună",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-36.jpg",
        altRo: "Simona și Robert, început de primăvară",
        captionRo:
          "10 martie 2024 - legătura voastră se vede în fiecare privire",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-37.jpg",
        altRo: "Simona și Robert la final de martie",
        captionRo: "29 martie 2024 - o zi simplă, o amintire frumoasă",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-38.jpg",
        altRo: "Simona și Robert în aprilie 2024",
        captionRo: "21 aprilie 2024 - copilăria care aleargă",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-39.jpg",
        altRo: "Simona și Robert în mai 2024",
        captionRo: "13 mai 2024 - joacă, energie și iubire",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-15.jpg",
        altRo: "Simona și Robert la 2 ani",
        captionRo: "12 august 2024 - copilăria lui Robert prinde viteză",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-17.jpg",
        altRo: "Simona și Robert în parc de distracții",
        captionRo: "18 august 2024 - aventuri împreună",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-40.jpg",
        altRo: "Simona și Robert în august 2024",
        captionRo: "23 august 2024 - timp de calitate mamă-fiu",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-41.jpg",
        altRo: "Simona și Robert în noiembrie 2024",
        captionRo: "16 noiembrie 2024 - grijă, răbdare și joacă",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-42.jpg",
        altRo: "Simona și Robert în decembrie 2024",
        captionRo: "14 decembrie 2024 - bucurii de iarnă în familie",
      },
      {
        src: "/photos/dupa-robert/robert-dupa-06.jpg",
        altRo: "Simona și Robert la 2-3 ani",
        captionRo:
          "28 februarie 2025 - legătura voastră devine tot mai frumoasă",
      },
    ]),
  },
  {
    slug: "mama-a-doi-copii",
    titleRo: "Mama a doi copii",
    periodRo: "Etapa cu Eva și prezentul nostru",
    phase: "after_eva",
    accent: "gold",
    narrativeRo:
      "De la vestea despre Eva până la viața noastră de azi, ai rămas aceeași forță care ține familia unită. Între Robert și Eva, ai fost prezentă total, cu o iubire care nu obosește niciodată.",
    truthRo:
      "Adevăr despre Simona: nu există egal când vine vorba de felul în care ești mamă.",
    photos: buildFamilyArchivePhotos("mama-a-doi-copii", [
      {
        src: "/photos/mama-a-doi-copii/check1.jpg",
        altRo: "Simona alături de Robert",
        captionRo: "1 decembrie 2024 - începutul unei noi etape în familie",
      },
      {
        src: "/photos/mama-a-doi-copii/check2.jpg",
        altRo: "Simona în momente de familie",
        captionRo: "7 decembrie 2024 - pregătiri și grijă în fiecare zi",
      },
      {
        src: "/photos/mama-a-doi-copii/check3.jpg",
        altRo: "Simona în perioada cu Eva",
        captionRo: "6 august 2025 - iubirea de mamă crește odată cu familia",
      },
      {
        src: "/photos/mama-a-doi-copii/check4.jpg",
        altRo: "Simona în etapa de mamă a doi copii",
        captionRo: "6 august 2025 - putere, răbdare și căldură",
      },
      {
        src: "/photos/mama-a-doi-copii/check5.jpg",
        altRo: "Simona cu Eva",
        captionRo: "21 februarie 2026 - tandrețe și prezență totală",
      },
      {
        src: "/photos/mama-a-doi-copii/check6.jpg",
        altRo: "Simona în prezent",
        captionRo: "4 martie 2026 - mama care ține totul împreună",
      },
      {
        src: "/photos/mama-a-doi-copii/check7.jpg",
        altRo: "Simona în momente de zi cu zi",
        captionRo:
          "7 martie 2026 - iubire împărțită perfect între Robert și Eva",
      },
      {
        src: "/photos/mama-a-doi-copii/check8.jpg",
        altRo: "Simona și copiii",
        captionRo: "7 martie 2026 - energie, răbdare și zâmbete",
      },
      {
        src: "/photos/mama-a-doi-copii/check9.jpg",
        altRo: "Simona în capitolul Mama a doi copii",
        captionRo: "7 martie 2026 - inima familiei noastre",
      },
    ]),
  },
];

export const finalLetterRo: FinalLetterRo = {
  title: "Epilog - Cu dragoste, familia ta",
  paragraphs: [
    "Simona, îți mulțumim pentru fiecare dimineață în care te ridici prima și pentru fiecare seară în care rămâi ultima să te asiguri că toți suntem bine.",
    "Îți mulțumim pentru adevărul tău, pentru voința ta de fier și pentru felul în care iubești fără teamă. În tine, Robert și Eva au cel mai bun exemplu de om bun.",
    "Astăzi, de 8 Martie, îți spunem simplu și cu toată inima: te iubim, te admirăm și suntem norocoși că ești mama copiilor noștri.",
  ],
  signature: "Cu dragoste, Gino, Robert și Eva",
};
