// ================================================================
// data.js — Ontologie de la Mode · All ontology data
// ================================================================

const CLASSES = [
  { id:"Industrie_de_la_Mode",  label:"Industrie de la Mode",  parent:null,                    cat:"root",      comment:"Classe racine des entités de l'industrie de la mode." },
  { id:"Sociologie_de_la_Mode", label:"Sociologie de la Mode", parent:null,                    cat:"root",      comment:"Classe racine des phénomènes sociologiques de la mode." },
  { id:"Créateur_de_Mode",      label:"Créateur de Mode",      parent:"Industrie_de_la_Mode",  cat:"industrie", comment:"Personne qui crée des collections et influence les tendances." },
  { id:"Marque",                label:"Marque",                parent:"Industrie_de_la_Mode",  cat:"industrie", comment:"Entreprise ou label qui commercialise des tendances." },
  { id:"Tendance",              label:"Tendance",              parent:"Industrie_de_la_Mode",  cat:"industrie", comment:"Mouvement stylistique observable dans la société." },
  { id:"Convergence",           label:"Convergence",           parent:"Industrie_de_la_Mode",  cat:"industrie", comment:"Fusion de plusieurs tendances vers un style commun." },
  { id:"DateNaissance",         label:"Date de Naissance",     parent:"Créateur_de_Mode",      cat:"attr",      comment:"Date de naissance d'un créateur de mode." },
  { id:"DateCreation",          label:"Date de Création",      parent:"Marque",                cat:"attr",      comment:"Date de fondation d'une marque." },
  { id:"PrixMoyen",             label:"Prix Moyen",            parent:"Marque",                cat:"attr",      comment:"Fourchette de prix moyenne d'une marque." },
  { id:"TypeMode",              label:"Type de Mode",          parent:"Marque",                cat:"attr",      comment:"Catégorie stylistique de la marque." },
  { id:"DateDebut",             label:"Date de Début",         parent:"Tendance",              cat:"attr",      comment:"Date d'apparition d'une tendance." },
  { id:"Durabilite",            label:"Durabilité",            parent:"Tendance",              cat:"attr",      comment:"Indique si la tendance est pérenne ou éphémère." },
  { id:"Popularite",            label:"Popularité",            parent:"Tendance",              cat:"attr",      comment:"Score de popularité d'une tendance (entier)." },
  { id:"Nom",                   label:"Nom",                   parent:"multiple",              cat:"attr",      comment:"Nom d'un créateur, marque, tendance ou phénomène." },
  { id:"Description",           label:"Description",           parent:"multiple",              cat:"attr",      comment:"Description textuelle d'un concept de la mode." },
  { id:"PaysOrigine",           label:"Pays d'Origine",        parent:"multiple",              cat:"attr",      comment:"Pays d'origine — propriété fonctionnelle (une seule valeur)." },
  { id:"Affirmation",           label:"Affirmation",           parent:"Sociologie_de_la_Mode", cat:"socio",     comment:"La mode comme moyen d'affirmer son identité." },
  { id:"Autonomie",             label:"Autonomie",             parent:"Sociologie_de_la_Mode", cat:"socio",     comment:"La mode comme expression de la liberté individuelle." },
  { id:"Impérialisation",       label:"Impérialisation",       parent:"Sociologie_de_la_Mode", cat:"socio",     comment:"Mode imposée par des acteurs dominants." },
  { id:"Personnalisation",      label:"Personnalisation",      parent:"Sociologie_de_la_Mode", cat:"socio",     comment:"Adaptation d'une tendance à son style personnel." },
  { id:"Symbolisation",         label:"Symbolisation",         parent:"Sociologie_de_la_Mode", cat:"socio",     comment:"La mode comme vecteur de symboles culturels ou sociaux." },
];

const CREATORS = [
  { id:"Gabrielle_Chasnel",   label:"Gabrielle Chasnel",   sameAs:"Coco_Chanel",        emoji:"👑", data:{ nom:"Coco Chanel",          naissance:"1883-08-19", pays:"France" } },
  { id:"Coco_Chanel",         label:"Coco Chanel",         sameAs:"Gabrielle_Chasnel",  emoji:"🏷️", data:{ note:"Alias owl:sameAs → Gabrielle_Chasnel" } },
  { id:"Virgil_Abloh",        label:"Virgil Abloh",        sameAs:null,                 emoji:"🎨", data:{ nom:"Virgil Abloh",          naissance:"1980-09-30", pays:"États-Unis" } },
  { id:"Yves_Saint_Laurent",  label:"Yves Saint Laurent",  sameAs:null,                 emoji:"✂️", data:{ nom:"Yves Saint Laurent",   naissance:"1936-08-01", pays:"Algérie" } },
  { id:"Giorgio_Armani",      label:"Giorgio Armani",      sameAs:null,                 emoji:"🧥", data:{ nom:"Giorgio Armani",       naissance:"1934-07-11", pays:"Italie" } },
  { id:"Gianni_Versace",      label:"Gianni Versace",      sameAs:null,                 emoji:"🦁", data:{ nom:"Gianni Versace",       naissance:"1946-12-02", pays:"Italie" } },
  { id:"Donatella_Versace",   label:"Donatella Versace",   sameAs:null,                 emoji:"💄", data:{ nom:"Donatella Versace",    naissance:"1955-05-02", pays:"Italie" } },
  { id:"Guccio_Gucci",        label:"Guccio Gucci",        sameAs:null,                 emoji:"🛍️", data:{ nom:"Guccio Gucci",         naissance:"1881-03-26", pays:"Italie" } },
  { id:"Karl_Lagerfeld",      label:"Karl Lagerfeld",      sameAs:null,                 emoji:"🕶️", data:{ nom:"Karl Lagerfeld",       naissance:"1933-09-10", pays:"Allemagne" } },
  { id:"Christian_Dior",      label:"Christian Dior",      sameAs:null,                 emoji:"🌹", data:{ nom:"Christian Dior",       naissance:"1905-01-21", pays:"France" } },
  { id:"Cristobal_Balenciaga",label:"Cristóbal Balenciaga",sameAs:null,                 emoji:"🏛️", data:{ nom:"Cristóbal Balenciaga", naissance:"1895-01-21", pays:"Espagne" } },
  { id:"Valentino_Garavani",  label:"Valentino Garavani",  sameAs:null,                 emoji:"❤️", data:{ nom:"Valentino Garavani",   naissance:"1932-05-11", pays:"Italie" } },
  { id:"Ralph_Lauren",        label:"Ralph Lauren",        sameAs:null,                 emoji:"🐎", data:{ nom:"Ralph Lauren",         naissance:"1939-10-14", pays:"États-Unis" } },
  { id:"Calvin_Klein",        label:"Calvin Klein",        sameAs:null,                 emoji:"◻️", data:{ nom:"Calvin Klein",         naissance:"1942-11-19", pays:"États-Unis" } },
  { id:"Marc_Jacobs",         label:"Marc Jacobs",         sameAs:null,                 emoji:"🌟", data:{ nom:"Marc Jacobs",          naissance:"1963-04-09", pays:"États-Unis" } },
  { id:"Alexander_McQueen",   label:"Alexander McQueen",   sameAs:null,                 emoji:"🖤", data:{ nom:"Alexander McQueen",    naissance:"1969-03-17", pays:"Royaume-Uni" } },
  { id:"Jean_Paul_Gaultier",  label:"Jean Paul Gaultier",  sameAs:null,                 emoji:"⛵", data:{ nom:"Jean Paul Gaultier",   naissance:"1952-04-24", pays:"France" } },
  { id:"Vivienne_Westwood",   label:"Vivienne Westwood",   sameAs:null,                 emoji:"🔴", data:{ nom:"Vivienne Westwood",    naissance:"1941-04-08", pays:"Royaume-Uni" } },
  { id:"Stella_McCartney",    label:"Stella McCartney",    sameAs:null,                 emoji:"🌿", data:{ nom:"Stella McCartney",     naissance:"1971-09-13", pays:"Royaume-Uni" } },
  { id:"Miuccia_Prada",       label:"Miuccia Prada",       sameAs:null,                 emoji:"🎭", data:{ nom:"Miuccia Prada",        naissance:"1949-05-10", pays:"Italie" } },
  { id:"Tom_Ford",            label:"Tom Ford",            sameAs:null,                 emoji:"🕴️", data:{ nom:"Tom Ford",             naissance:"1961-08-27", pays:"États-Unis" } },
  { id:"Issey_Miyake",        label:"Issey Miyake",        sameAs:null,                 emoji:"🌸", data:{ nom:"Issey Miyake",         naissance:"1938-04-22", pays:"Japon" } },
  { id:"Yohji_Yamamoto",      label:"Yohji Yamamoto",      sameAs:null,                 emoji:"⬛", data:{ nom:"Yohji Yamamoto",       naissance:"1943-10-03", pays:"Japon" } },
  { id:"Rei_Kawakubo",        label:"Rei Kawakubo",        sameAs:null,                 emoji:"🔲", data:{ nom:"Rei Kawakubo",         naissance:"1942-10-11", pays:"Japon" } },
  { id:"Hubert_de_Givenchy",  label:"Hubert de Givenchy",  sameAs:null,                 emoji:"🕊️", data:{ nom:"Hubert de Givenchy",   naissance:"1927-02-21", pays:"France" } },
  { id:"Roberto_Cavalli",     label:"Roberto Cavalli",     sameAs:null,                 emoji:"🐆", data:{ nom:"Roberto Cavalli",      naissance:"1940-11-15", pays:"Italie" } },
  { id:"Azzedine_Alaia",      label:"Azzedine Alaïa",      sameAs:null,                 emoji:"🧶", data:{ nom:"Azzedine Alaïa",       naissance:"1935-02-26", pays:"Tunisie" } },
  { id:"Thierry_Mugler",      label:"Thierry Mugler",      sameAs:null,                 emoji:"🦋", data:{ nom:"Thierry Mugler",       naissance:"1948-12-21", pays:"France" } },
  { id:"Vera_Wang",           label:"Vera Wang",           sameAs:null,                 emoji:"💍", data:{ nom:"Vera Wang",            naissance:"1949-06-27", pays:"États-Unis" } },
  { id:"Donna_Karan",         label:"Donna Karan",         sameAs:null,                 emoji:"🗽", data:{ nom:"Donna Karan",          naissance:"1948-10-02", pays:"États-Unis" } },
];

const BRANDS = [
  { id:"Gucci",                  label:"Gucci",              emoji:"👜", data:{ nom:"Gucci",              pays:"Italie",        type:"Luxe",               prix:"950 €",  annee:"1921", desc:"Luxe florentin, monogramme GG, Alessandro Michele" } },
  { id:"Versace",                label:"Versace",            emoji:"🦁", data:{ nom:"Versace",            pays:"Italie",        type:"Luxe",               prix:"1 100 €",annee:"1978", desc:"Baroque, imprimés vifs, logo Méduse" } },
  { id:"Chanel",                 label:"Chanel",             emoji:"🌺", data:{ nom:"Chanel",             pays:"France",        type:"Luxe Haute Couture", prix:"2 500 €",annee:"1910", desc:"Élégance française, tailleur, N°5" } },
  { id:"Louis_Vuitton",          label:"Louis Vuitton",      emoji:"🧳", data:{ nom:"Louis Vuitton",      pays:"France",        type:"Luxe",               prix:"1 800 €",annee:"1854", desc:"Malles, monogramme LV, première mondiale" } },
  { id:"Dior",                   label:"Dior",               emoji:"🌹", data:{ nom:"Christian Dior",     pays:"France",        type:"Luxe Haute Couture", prix:"2 200 €",annee:"1946", desc:"New Look 1947, parfums, féminité absolue" } },
  { id:"Balenciaga",             label:"Balenciaga",         emoji:"👟", data:{ nom:"Balenciaga",         pays:"France",        type:"Luxe Streetwear",    prix:"1 200 €",annee:"1919", desc:"Streetwear luxe, sneakers oversized" } },
  { id:"Prada",                  label:"Prada",              emoji:"🎭", data:{ nom:"Prada",              pays:"Italie",        type:"Luxe",               prix:"1 300 €",annee:"1913", desc:"Minimalisme intellectuel, sacs nylon" } },
  { id:"Armani",                 label:"Armani",             emoji:"🧥", data:{ nom:"Giorgio Armani",     pays:"Italie",        type:"Luxe",               prix:"900 €",  annee:"1975", desc:"Tailleur déstructuré, style épuré" } },
  { id:"Valentino",              label:"Valentino",          emoji:"❤️", data:{ nom:"Valentino",          pays:"Italie",        type:"Luxe Haute Couture", prix:"2 000 €",annee:"1960", desc:"Robes de soirée, Valentino Red" } },
  { id:"Burberry",               label:"Burberry",           emoji:"🌂", data:{ nom:"Burberry",           pays:"Royaume-Uni",   type:"Luxe Britannique",   prix:"650 €",  annee:"1856", desc:"Trench-coat, tartan beige iconique" } },
  { id:"Hermes",                 label:"Hermès",             emoji:"🧡", data:{ nom:"Hermès",             pays:"France",        type:"Luxe Ultra-Premium", prix:"5 000 €",annee:"1837", desc:"Birkin, Kelly, luxe absolu" } },
  { id:"Fendi",                  label:"Fendi",              emoji:"🦊", data:{ nom:"Fendi",              pays:"Italie",        type:"Luxe",               prix:"1 400 €",annee:"1925", desc:"Fourrures, logo FF, Karl Lagerfeld" } },
  { id:"Saint_Laurent",          label:"Saint Laurent",      emoji:"✂️", data:{ nom:"Saint Laurent",      pays:"France",        type:"Luxe",               prix:"1 600 €",annee:"1961", desc:"Smoking féminin, prêt-à-porter luxe" } },
  { id:"Givenchy_brand",         label:"Givenchy",           emoji:"🕊️", data:{ nom:"Givenchy",           pays:"France",        type:"Luxe Haute Couture", prix:"1 700 €",annee:"1952", desc:"Élégance intemporelle, Audrey Hepburn" } },
  { id:"Bottega_Veneta",         label:"Bottega Veneta",     emoji:"🟢", data:{ nom:"Bottega Veneta",     pays:"Italie",        type:"Luxe Discret",       prix:"2 100 €",annee:"1966", desc:"Maroquinerie intrecciato, sans logo" } },
  { id:"Alexander_McQueen_brand",label:"Alexander McQueen",  emoji:"🖤", data:{ nom:"Alexander McQueen",  pays:"Royaume-Uni",   type:"Luxe Avant-Garde",   prix:"1 200 €",annee:"1992", desc:"Romantisme noir, sculpture, avant-garde" } },
  { id:"Comme_des_Garcons",      label:"Comme des Garçons",  emoji:"⬛", data:{ nom:"Comme des Garçons",  pays:"Japon",         type:"Avant-Garde",        prix:"500 €",  annee:"1969", desc:"Déconstructivisme, mode conceptuelle" } },
  { id:"Off_White",              label:"Off-White",          emoji:"🔲", data:{ nom:"Off-White",          pays:"États-Unis",    type:"Streetwear Luxe",    prix:"400 €",  annee:"2012", desc:"Virgil Abloh, guillemets diagonaux" } },
  { id:"Supreme",                label:"Supreme",            emoji:"🔴", data:{ nom:"Supreme",            pays:"États-Unis",    type:"Streetwear",         prix:"250 €",  annee:"1994", desc:"Skate NY, box logo, culture streetwear" } },
  { id:"Nike",                   label:"Nike",               emoji:"✔️", data:{ nom:"Nike",               pays:"États-Unis",    type:"Sportswear",         prix:"100 €",  annee:"1964", desc:"Air Jordan, Air Max, sneaker culture" } },
  { id:"Adidas",                 label:"Adidas",             emoji:"3️⃣", data:{ nom:"Adidas",             pays:"Allemagne",     type:"Sportswear",         prix:"90 €",   annee:"1949", desc:"Trois bandes, Stan Smith, Yeezy" } },
  { id:"Zara",                   label:"Zara",               emoji:"⚡", data:{ nom:"Zara",               pays:"Espagne",       type:"Fast Fashion",       prix:"35 €",   annee:"1975", desc:"Tendances passerelle en 2 semaines" } },
  { id:"HM",                     label:"H&M",                emoji:"🛒", data:{ nom:"H&M",                pays:"Suède",         type:"Fast Fashion",       prix:"25 €",   annee:"1947", desc:"Mode accessible, collabs créateurs" } },
  { id:"Uniqlo",                 label:"Uniqlo",             emoji:"🗾", data:{ nom:"Uniqlo",             pays:"Japon",         type:"Basics Essentiels",  prix:"30 €",   annee:"1949", desc:"LifeWear, basiques techniques durables" } },
  { id:"Ralph_Lauren_brand",     label:"Polo Ralph Lauren",  emoji:"🐎", data:{ nom:"Polo Ralph Lauren",  pays:"États-Unis",    type:"Preppy Américain",   prix:"180 €",  annee:"1967", desc:"Rêve américain, polo, cavalier" } },
  { id:"Calvin_Klein_brand",     label:"Calvin Klein",       emoji:"◻️", data:{ nom:"Calvin Klein",       pays:"États-Unis",    type:"Minimaliste",        prix:"120 €",  annee:"1968", desc:"Minimalisme américain, jean taille haute" } },
  { id:"Tommy_Hilfiger",         label:"Tommy Hilfiger",     emoji:"🇺🇸", data:{ nom:"Tommy Hilfiger",     pays:"États-Unis",    type:"Preppy Américain",   prix:"130 €",  annee:"1985", desc:"Preppy, pop culture, années 90" } },
  { id:"Balmain",                label:"Balmain",            emoji:"💛", data:{ nom:"Balmain",            pays:"France",        type:"Luxe Glamour",       prix:"1 500 €",annee:"1945", desc:"Vestes structurées boutons dorés, rock-glamour" } },
  { id:"Celine",                 label:"Celine",             emoji:"⬜", data:{ nom:"Celine",             pays:"France",        type:"Luxe Minimaliste",   prix:"1 900 €",annee:"1945", desc:"Minimalisme chic, Phoebe Philo" } },
  { id:"Miu_Miu",                label:"Miu Miu",            emoji:"🎀", data:{ nom:"Miu Miu",            pays:"Italie",        type:"Luxe Avant-Garde",   prix:"1 100 €",annee:"1993", desc:"Subversif, ludique, féminité inattendue" } },
];

const TRENDS = [
  { id:"Mode_des_Sneakers",      label:"Mode des Sneakers",     type:"Tendance",    emoji:"👟", data:{ nom:"Mode des Sneakers",     debut:"1985", popularite:"98/100", durabilite:"✓ Durable",  desc:"Les baskets comme pièce vestimentaire incontournable" } },
  { id:"Denim_universel",        label:"Denim universel",       type:"Tendance",    emoji:"👖", data:{ nom:"Denim universel",        debut:"1950", popularite:"99/100", durabilite:"✓ Durable",  desc:"Le jean adopté dans tous les milieux et cultures" } },
  { id:"Costumes_cravates",      label:"Costume-cravate",       type:"Convergence", emoji:"👔", data:{ nom:"Costume-cravate",        debut:"1920", popularite:"75/100", durabilite:"✓ Durable",  desc:"Style professionnel universel convergent" } },
  { id:"Athleisure",             label:"Athleisure",            type:"Tendance",    emoji:"🏃", data:{ nom:"Athleisure",             debut:"2010", popularite:"92/100", durabilite:"✓ Durable",  desc:"Sport et quotidien fusionnés : leggings, hoodies en ville" } },
  { id:"Mode_Durable",           label:"Mode Durable",          type:"Tendance",    emoji:"🌱", data:{ nom:"Mode Durable",           debut:"2015", popularite:"85/100", durabilite:"✓ Durable",  desc:"Écoresponsabilité, matériaux recyclés, circuits courts" } },
  { id:"Cottagecore",            label:"Cottagecore",           type:"Tendance",    emoji:"🌸", data:{ nom:"Cottagecore",            debut:"2020", popularite:"70/100", durabilite:"✗ Éphémère", desc:"Romantique champêtre, lin, robes à fleurs, broderies" } },
  { id:"Y2K_Revival",            label:"Y2K Revival",           type:"Tendance",    emoji:"💿", data:{ nom:"Y2K Revival",            debut:"2021", popularite:"80/100", durabilite:"✗ Éphémère", desc:"Années 2000 : taille basse, tops bandeau, métallique" } },
  { id:"Dark_Academia",          label:"Dark Academia",         type:"Tendance",    emoji:"📚", data:{ nom:"Dark Academia",          debut:"2020", popularite:"73/100", durabilite:"✗ Éphémère", desc:"Intellectuel sombre : tweed, cardigans, Oxford" } },
  { id:"Quiet_Luxury",           label:"Quiet Luxury",          type:"Tendance",    emoji:"🤫", data:{ nom:"Quiet Luxury",           debut:"2022", popularite:"88/100", durabilite:"✓ Durable",  desc:"Luxe sans logo, matières nobles, sobriété chromatique" } },
  { id:"Gorpcore",               label:"Gorpcore",              type:"Tendance",    emoji:"🏔️", data:{ nom:"Gorpcore",               debut:"2019", popularite:"65/100", durabilite:"✗ Éphémère", desc:"Outdoor urbain : vestes techniques, chaussures randonnée" } },
  { id:"Barbiecore",             label:"Barbiecore",            type:"Tendance",    emoji:"💗", data:{ nom:"Barbiecore",             debut:"2023", popularite:"78/100", durabilite:"✗ Éphémère", desc:"Rose fuchsia, vinyle, paillettes, féminité assumée" } },
  { id:"Normcore",               label:"Normcore",              type:"Tendance",    emoji:"🔘", data:{ nom:"Normcore",               debut:"2014", popularite:"72/100", durabilite:"✓ Durable",  desc:"Esthétique volontairement banale et ordinaire" } },
  { id:"Haute_Couture",          label:"Haute Couture",         type:"Tendance",    emoji:"🪡", data:{ nom:"Haute Couture",          debut:"1858", popularite:"60/100", durabilite:"✓ Durable",  desc:"Art suprême : pièces sur-mesure cousues à la main" } },
  { id:"Logomania",              label:"Logomania",             type:"Tendance",    emoji:"🏷️", data:{ nom:"Logomania",              debut:"1990", popularite:"82/100", durabilite:"✗ Éphémère", desc:"Affichage ostensible des logos comme marqueur de statut" } },
  { id:"Maximalism",             label:"Maximalisme",           type:"Tendance",    emoji:"🎨", data:{ nom:"Maximalisme",            debut:"2010", popularite:"69/100", durabilite:"✗ Éphémère", desc:"Plus c'est plus : superpositions, motifs, couleurs saturées" } },
  { id:"Minimalisme",            label:"Minimalisme",           type:"Tendance",    emoji:"◻️", data:{ nom:"Minimalisme",            debut:"1994", popularite:"90/100", durabilite:"✓ Durable",  desc:"Épure totale : palette neutre, lignes nettes, sans ornements" } },
  { id:"Mode_Genre_Fluide",      label:"Mode Genre-Fluide",     type:"Tendance",    emoji:"⚧️", data:{ nom:"Mode Genre-Fluide",      debut:"2015", popularite:"83/100", durabilite:"✓ Durable",  desc:"Dissolution des frontières entre mode féminine et masculine" } },
  { id:"Vintage_Seconde_Main",   label:"Vintage / Seconde Main",type:"Tendance",    emoji:"♻️", data:{ nom:"Vintage / Seconde Main", debut:"2000", popularite:"91/100", durabilite:"✓ Durable",  desc:"Valorisation des vêtements d'occasion et du patrimoine textile" } },
  { id:"Streetwear",             label:"Streetwear",            type:"Tendance",    emoji:"🏙️", data:{ nom:"Streetwear",             debut:"1980", popularite:"96/100", durabilite:"✓ Durable",  desc:"Né dans les rues NY/LA : skateboard, hip-hop, graffiti" } },
  { id:"Boho_Chic",              label:"Boho Chic",             type:"Tendance",    emoji:"🌻", data:{ nom:"Boho Chic",              debut:"2000", popularite:"76/100", durabilite:"✓ Durable",  desc:"Bohème-hippie revisité : robes fluides, broderies, franges" } },
  { id:"Coastal_Grandmother",    label:"Coastal Grandmother",   type:"Tendance",    emoji:"⛵", data:{ nom:"Coastal Grandmother",    debut:"2022", popularite:"62/100", durabilite:"✗ Éphémère", desc:"Élégance balnéaire : lin blanc, rayures marines, naturel" } },
  { id:"Capsule_Wardrobe",       label:"Garde-Robe Capsule",    type:"Tendance",    emoji:"📦", data:{ nom:"Garde-Robe Capsule",     debut:"1985", popularite:"87/100", durabilite:"✓ Durable",  desc:"Collection minimale de pièces intemporelles coordonnées" } },
];

const INDIVIDUALS = [
  ...CREATORS.map(c => ({ ...c, cat:'createur', type: c.sameAs === 'Gabrielle_Chasnel' ? 'Alias (owl:sameAs)' : 'Créateur de Mode' })),
  ...BRANDS.map(b  => ({ ...b, cat:'marque',    type:'Marque' })),
  ...TRENDS.map(t  => ({ ...t, cat: t.type === 'Convergence' ? 'convergence' : 'tendance' })),
];

const OBJ_PROPS = [
  { id:"cree",               label:"crée",                domain:["Créateur_de_Mode"],           range:["Marque","Tendance"],            comment:"Un créateur crée une marque ou une tendance." },
  { id:"estCreePar",         label:"est créé par",        domain:["Marque"],                     range:["Créateur_de_Mode","Marque"],    comment:"Une marque est créée par un créateur ou une autre marque." },
  { id:"colaboreAvec",       label:"collabore avec",      domain:["Créateur_de_Mode"],           range:["Marque"],                      comment:"Un créateur collabore avec une marque." },
  { id:"commercialise",      label:"commercialise",       domain:["Marque"],                     range:["Tendance"],                    comment:"Une marque commercialise une tendance." },
  { id:"estInspirePar",      label:"est inspiré par",     domain:["Créateur_de_Mode","Marque"],  range:["Tendance"],                    comment:"Un créateur ou une marque s'inspire d'une tendance." },
  { id:"inspire",            label:"inspire",             domain:["Tendance"],                   range:["Créateur_de_Mode","Marque"],   comment:"Une tendance inspire des créateurs ou des marques." },
  { id:"convergeVers",       label:"converge vers",       domain:["Tendance"],                   range:["Convergence"],                 comment:"Une tendance converge vers un phénomène de convergence." },
  { id:"convergeDe",         label:"converge de",         domain:["Convergence"],                range:["Tendance"],                    comment:"Une convergence provient de plusieurs tendances." },
  { id:"affirme",            label:"affirme",             domain:["Tendance"],                   range:["Affirmation"],                 comment:"Une tendance affirme une identité sociale." },
  { id:"exprimeAutonomie",   label:"exprime autonomie",   domain:["Tendance"],                   range:["Autonomie"],                   comment:"Une tendance exprime l'autonomie individuelle." },
  { id:"impose",             label:"impose",              domain:["Tendance"],                   range:["Impérialisation"],             comment:"Une tendance est imposée par des acteurs dominants." },
  { id:"estImposePar",       label:"est imposé par",      domain:["Impérialisation"],            range:["Tendance"],                    comment:"Une impérialisation est exercée sur une tendance." },
  { id:"personnalise",       label:"personnalise",        domain:["Tendance"],                   range:["Personnalisation"],            comment:"Une tendance est personnalisée par les individus." },
  { id:"estPersonnalisePar", label:"est personnalisé par",domain:["Personnalisation"],           range:["Tendance"],                    comment:"Une personnalisation s'applique à une tendance." },
  { id:"symbolise",          label:"symbolise",           domain:["Tendance"],                   range:["Symbolisation"],               comment:"Une tendance symbolise des valeurs culturelles." },
  { id:"estSymbolisePar",    label:"est symbolisé par",   domain:["Symbolisation"],              range:["Tendance"],                    comment:"Une symbolisation est portée par une tendance." },
];

const DATA_PROPS = [
  { id:"nom",           label:"nom",           domain:"Nom",           type:"xsd:string",   functional:false, comment:"Nom de l'entité." },
  { id:"description",   label:"description",   domain:"Description",   type:"xsd:string",   functional:false, comment:"Description textuelle." },
  { id:"dateNaissance", label:"dateNaissance", domain:"DateNaissance", type:"xsd:dateTime", functional:false, comment:"Date de naissance du créateur." },
  { id:"dateCreation",  label:"dateCreation",  domain:"DateCreation",  type:"xsd:dateTime", functional:false, comment:"Date de création de la marque." },
  { id:"dateDebut",     label:"dateDebut",     domain:"DateDebut",     type:"xsd:dateTime", functional:false, comment:"Date de début d'une tendance." },
  { id:"dateActuelle",  label:"dateActuelle",  domain:"—",             type:"xsd:dateTime", functional:false, comment:"Date courante (disjointe des autres dates)." },
  { id:"paysOrigine",   label:"paysOrigine",   domain:"PaysOrigine",   type:"xsd:string",   functional:true,  comment:"Pays d'origine — propriété fonctionnelle (une seule valeur)." },
  { id:"typeMode",      label:"typeMode",      domain:"TypeMode",      type:"xsd:string",   functional:false, comment:"Type ou catégorie de mode." },
  { id:"prixMoyen",     label:"prixMoyen",     domain:"PrixMoyen",     type:"xsd:float",    functional:false, comment:"Prix moyen en euros." },
  { id:"popularite",    label:"popularite",    domain:"Popularite",    type:"xsd:integer",  functional:false, comment:"Score de popularité (entier 0–100)." },
  { id:"durabilite",    label:"durabilite",    domain:"Durabilite",    type:"xsd:boolean",  functional:false, comment:"true = tendance durable, false = éphémère." },
];

const DISJOINT = [
  { label:"Phénomènes sociologiques",  classes:["Affirmation","Autonomie","Impérialisation","Personnalisation","Symbolisation"] },
  { label:"Attributs d'une Marque",    classes:["DateCreation","Nom","PaysOrigine","PrixMoyen","TypeMode"] },
  { label:"Attributs d'une Tendance",  classes:["DateDebut","Durabilite","Nom","Popularite"] },
  { label:"Attributs d'un Créateur",   classes:["DateNaissance","Nom","PaysOrigine"] },
  { label:"Nom vs Description",        classes:["Nom","Description"] },
];

const QUERIES = [
  {
    title:"1. Hiérarchie des classes",
    desc:"Toutes les paires (sous-classe → super-classe) de l'ontologie.",
    query:`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?sousClasse ?superClasse
WHERE {
  ?sousClasse rdfs:subClassOf ?superClasse .
  FILTER (!isBlank(?sousClasse) && !isBlank(?superClasse))
}
ORDER BY ?superClasse ?sousClasse`,
    cols:["Sous-classe","Super-classe"],
    rows:[
      ["Convergence","Industrie_de_la_Mode"],["Créateur_de_Mode","Industrie_de_la_Mode"],
      ["Marque","Industrie_de_la_Mode"],["Tendance","Industrie_de_la_Mode"],
      ["DateNaissance","Créateur_de_Mode"],["DateCreation","Marque"],
      ["PrixMoyen","Marque"],["TypeMode","Marque"],["DateDebut","Tendance"],
      ["Durabilite","Tendance"],["Popularite","Tendance"],
      ["Affirmation","Sociologie_de_la_Mode"],["Autonomie","Sociologie_de_la_Mode"],
      ["Impérialisation","Sociologie_de_la_Mode"],["Personnalisation","Sociologie_de_la_Mode"],
      ["Symbolisation","Sociologie_de_la_Mode"],
    ]
  },
  {
    title:"2. Créateurs de Mode",
    desc:"Nom, date de naissance et pays d'origine — 29 créateurs (extrait).",
    query:`PREFIX mode: <http://www.semanticweb.org/manel/ontologies/2025/1/la_mode#>

SELECT ?createur ?nom ?dateNaissance ?paysOrigine
WHERE {
  ?createur a mode:Créateur_de_Mode .
  OPTIONAL { ?createur mode:nom           ?nom          . }
  OPTIONAL { ?createur mode:dateNaissance ?dateNaissance . }
  OPTIONAL { ?createur mode:paysOrigine   ?paysOrigine  . }
}
ORDER BY ?nom`,
    cols:["Individu","Nom","Naissance","Pays"],
    rows:[
      ["Cristobal_Balenciaga","Cristóbal Balenciaga","1895-01-21","Espagne"],
      ["Christian_Dior","Christian Dior","1905-01-21","France"],
      ["Gabrielle_Chasnel","Coco Chanel","1883-08-19","France"],
      ["Giorgio_Armani","Giorgio Armani","1934-07-11","Italie"],
      ["Gianni_Versace","Gianni Versace","1946-12-02","Italie"],
      ["Guccio_Gucci","Guccio Gucci","1881-03-26","Italie"],
      ["Hubert_de_Givenchy","Hubert de Givenchy","1927-02-21","France"],
      ["Issey_Miyake","Issey Miyake","1938-04-22","Japon"],
      ["Karl_Lagerfeld","Karl Lagerfeld","1933-09-10","Allemagne"],
      ["Miuccia_Prada","Miuccia Prada","1949-05-10","Italie"],
      ["Rei_Kawakubo","Rei Kawakubo","1942-10-11","Japon"],
      ["Virgil_Abloh","Virgil Abloh","1980-09-30","États-Unis"],
      ["Yves_Saint_Laurent","Yves Saint Laurent","1936-08-01","Algérie"],
    ], note:"29 résultats — extrait"
  },
  {
    title:"3. Éléments Convergence",
    desc:"Individus de type Convergence avec nom et description.",
    query:`PREFIX mode: <http://www.semanticweb.org/manel/ontologies/2025/1/la_mode#>

SELECT ?element ?nom ?description
WHERE {
  ?element a mode:Convergence .
  OPTIONAL { ?element mode:nom         ?nom         . }
  OPTIONAL { ?element mode:description ?description . }
}`,
    cols:["Individu","Nom","Description"],
    rows:[["Costumes_cravates","Costume-cravate","Style professionnel universel convergent."]]
  },
  {
    title:"4. Toutes les Tendances",
    desc:"Liste toutes les tendances avec popularité et durabilité (extrait).",
    query:`PREFIX mode: <http://www.semanticweb.org/manel/ontologies/2025/1/la_mode#>

SELECT ?tendance ?nom ?popularite ?durabilite
WHERE {
  ?tendance a mode:Tendance .
  OPTIONAL { ?tendance mode:nom        ?nom        . }
  OPTIONAL { ?tendance mode:popularite ?popularite . }
  OPTIONAL { ?tendance mode:durabilite ?durabilite . }
}
ORDER BY DESC(?popularite)`,
    cols:["Individu","Nom","Popularité","Durable"],
    rows:[
      ["Denim_universel","Denim universel","99","true"],
      ["Mode_des_Sneakers","Mode des Sneakers","98","true"],
      ["Streetwear","Streetwear","96","true"],
      ["Vintage_Seconde_Main","Vintage / Seconde Main","91","true"],
      ["Minimalisme","Minimalisme","90","true"],
      ["Quiet_Luxury","Quiet Luxury","88","true"],
      ["Capsule_Wardrobe","Garde-Robe Capsule","87","true"],
      ["Mode_Durable","Mode Durable","85","true"],
      ["Mode_Genre_Fluide","Mode Genre-Fluide","83","true"],
      ["Logomania","Logomania","82","false"],
      ["Athleisure","Athleisure","92","true"],
      ["Y2K_Revival","Y2K Revival","80","false"],
    ], note:"22 résultats — extrait"
  },
  {
    title:"5. Individus & owl:sameAs",
    desc:"Alias owl:sameAs : Coco_Chanel ≡ Gabrielle_Chasnel.",
    query:`PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT ?individu ?type ?alias
WHERE {
  ?individu a ?type .
  OPTIONAL { ?individu owl:sameAs ?alias . }
  FILTER (?type != owl:NamedIndividual)
}
ORDER BY ?type`,
    cols:["Individu","Type","Alias (sameAs)"],
    rows:[
      ["Gabrielle_Chasnel","Créateur_de_Mode","Coco_Chanel"],
      ["Coco_Chanel","Nom","Gabrielle_Chasnel"],
      ["Costumes_cravates","Convergence","—"],
      ["Denim_universel","Tendance","—"],
      ["Mode_des_Sneakers","Tendance","—"],
    ]
  },
  {
    title:"6. Toutes les valeurs littérales",
    desc:"Chaque individu avec l'ensemble de ses valeurs de propriétés de données (extrait).",
    query:`PREFIX owl: <http://www.w3.org/2002/07/owl#>

SELECT ?individu ?propriete ?valeur
WHERE {
  ?individu a owl:NamedIndividual .
  ?individu ?propriete ?valeur .
  FILTER (isLiteral(?valeur))
}
ORDER BY ?individu ?propriete`,
    cols:["Individu","Propriété","Valeur"],
    rows:[
      ["Chanel","dateCreation","1910-01-01T00:00:00"],
      ["Chanel","nom","Chanel"],
      ["Chanel","paysOrigine","France"],
      ["Chanel","prixMoyen","2500.0"],
      ["Chanel","typeMode","Luxe Haute Couture"],
      ["Gabrielle_Chasnel","dateNaissance","1883-08-19T00:00:00"],
      ["Gabrielle_Chasnel","nom","Coco Chanel"],
      ["Gabrielle_Chasnel","paysOrigine","France"],
      ["Gucci","dateCreation","1921-01-01T00:00:00"],
      ["Gucci","nom","Gucci"],
      ["Gucci","paysOrigine","Italie"],
      ["Gucci","prixMoyen","950.0"],
    ], note:"82 individus × N propriétés — extrait"
  },
  {
    title:"7. Créateurs nés avant 1950",
    desc:"Filtrage temporel sur dateNaissance < 1950 (xsd:dateTime).",
    query:`PREFIX mode: <http://www.semanticweb.org/manel/ontologies/2025/1/la_mode#>
PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>

SELECT ?createur ?nom ?dateNaissance
WHERE {
  ?createur a mode:Créateur_de_Mode .
  ?createur mode:nom           ?nom .
  ?createur mode:dateNaissance ?dateNaissance .
  FILTER (?dateNaissance < "1950-01-01T00:00:00"^^xsd:dateTime)
}
ORDER BY ?dateNaissance`,
    cols:["Individu","Nom","Date de Naissance"],
    rows:[
      ["Guccio_Gucci","Guccio Gucci","1881-03-26T00:00:00"],
      ["Gabrielle_Chasnel","Coco Chanel","1883-08-19T00:00:00"],
      ["Cristobal_Balenciaga","Cristóbal Balenciaga","1895-01-21T00:00:00"],
      ["Christian_Dior","Christian Dior","1905-01-21T00:00:00"],
      ["Hubert_de_Givenchy","Hubert de Givenchy","1927-02-21T00:00:00"],
      ["Karl_Lagerfeld","Karl Lagerfeld","1933-09-10T00:00:00"],
      ["Giorgio_Armani","Giorgio Armani","1934-07-11T00:00:00"],
      ["Azzedine_Alaia","Azzedine Alaïa","1935-02-26T00:00:00"],
      ["Yves_Saint_Laurent","Yves Saint Laurent","1936-08-01T00:00:00"],
      ["Issey_Miyake","Issey Miyake","1938-04-22T00:00:00"],
      ["Ralph_Lauren","Ralph Lauren","1939-10-14T00:00:00"],
      ["Roberto_Cavalli","Roberto Cavalli","1940-11-15T00:00:00"],
      ["Vivienne_Westwood","Vivienne Westwood","1941-04-08T00:00:00"],
      ["Calvin_Klein","Calvin Klein","1942-11-19T00:00:00"],
      ["Rei_Kawakubo","Rei Kawakubo","1942-10-11T00:00:00"],
      ["Yohji_Yamamoto","Yohji Yamamoto","1943-10-03T00:00:00"],
      ["Gianni_Versace","Gianni Versace","1946-12-02T00:00:00"],
      ["Thierry_Mugler","Thierry Mugler","1948-12-21T00:00:00"],
      ["Donna_Karan","Donna Karan","1948-10-02T00:00:00"],
      ["Valentino_Garavani","Valentino Garavani","1932-05-11T00:00:00"],
      ["Miuccia_Prada","Miuccia Prada","1949-05-10T00:00:00"],
    ], note:"21 résultats"
  },
  {
    title:"8. Relations entre individus",
    desc:"Toutes les propriétés objet entre individus nommés.",
    query:`PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT ?sujet ?relation ?objet
WHERE {
  ?sujet ?relation ?objet .
  FILTER (isIRI(?objet))
  FILTER (?relation != rdf:type && ?relation != owl:sameAs)
  FILTER EXISTS { ?sujet a owl:NamedIndividual . }
}
ORDER BY ?sujet`,
    cols:["Sujet","Relation","Objet"],
    rows:[["Coco_Chanel","owl:sameAs","Gabrielle_Chasnel"],
          ["Gabrielle_Chasnel","owl:sameAs","Coco_Chanel"]]
  },
];
