export type Locale = "fr" | "en";

export const copy = {
  fr: {
    nav: {
      home: "Accueil",
      aPropos: "À propos",
      rituels: "Services",
      collection: "Galerie",
      entretiens: "Entretiens",
      livres: "Boutique",
      engagement: "Contact",
    },
    hero: {
      eyebrow: "Art végétal",
      headline: "L'art végétal qui prend\nracine dans votre histoire.",
      subheadline:
        "Créations vivantes, émotions durables. Mossä sculpte la nature pour vos moments de vie.",
      ctaPrimary: "Voir la galerie",
      ctaSecondary: "En savoir plus",
    },
    about: {
      eyebrow: "L'essence de Mossä",
      title: "L'art de cultiver\nl'instant et le souvenir.",
      body1:
        "Chez Mossä, nous croyons que les plantes ne sont pas de simples éléments de décoration, mais des compagnes de vie qui respirent avec nous. Fondée sur une passion profonde pour l'horticulture et un sens aigu du design organique, Mossä se spécialise dans la création d'arrangements végétaux uniques, pensés pour transformer vos espaces et marquer vos transitions de vie.",
      body2:
        "Inspirées par l'esthétique Kusamono et le minimalisme Zen, nos créations se distinguent par leur minutie et leur aspect structuré. Chaque montage est une pièce unique, réalisée avec une attention artisanale.",
      quote:
        "Le design organique, du salon aux grands moments de l'âme.",
    },
    gallery: {
      eyebrow: "Galerie",
      title: "Nos créations",
      subtitle:
        "Chaque pièce est réalisée à la main, sur commande. Une création unique pour chaque moment de vie.",
    },
    collection: {
      eyebrow: "Tapis d'Urne",
      title: "Collection",
      subtitle:
        "Chaque pièce est réalisée à la main, sur commande. Une alternative vivante et solidaire pour les rituels funéraires.",
      items: [
        { name: "Noyer & Végétaux", desc: "Urne sauge entourée d'une composition végétale sur plateau noyer" },
        { name: "Noir & Rose Gold", desc: "Élégance laquée noire avec accents rose gold raffinés" },
        { name: "Pin & Fleurs Colorées", desc: "Urne marbre blanc sur socle pin, fleurs colorées de chapelle" },
        { name: "Noyer & Calla Crystal", desc: "Arums rouges et urne cristal sur plateau noyer chaleureux" },
        { name: "Zen Japonais & Orchidée", desc: "Composition d'inspiration zen japonaise avec orchidée épurée" },
        { name: "Marbre & Or Orné", desc: "Urne dorée ornée sur tapis marbre, sobriété royale" },
        { name: "Pin Marine & Orchidées", desc: "Accents marine et orchidées blanches sur base pin naturel" },
        { name: "Noyer Crème & Orchidées", desc: "Orchidées roses délicates sur base noyer teinte crème" },
      ],
    },
    rituels: {
      eyebrow: "Ce que nous créons",
      title: "L'art végétal pour\nchaque moment de vie.",
      subtitle:
        "Des créations sur mesure pour embellir vos espaces et accompagner vos moments les plus précieux.",
      botanical: {
        label: "Art végétal",
        name: "Arrangements Végétaux",
        desc: "Compositions vivantes sur mesure pour embellir votre intérieur, terrasse ou espace de vie. Chaque pièce est unique, réalisée à la main. Véritables œuvres d'art vivantes, nos arrangements transforment n'importe quel espace en sanctuaire botanique.",
        cta: "Découvrir",
      },
      hotels: {
        label: "Espaces professionnels",
        name: "Hôtels & Lobbies",
        desc: "Des créations végétales monumentales qui transforment vos espaces de réception en expériences mémorables. Du grand hall d'entrée à la chambre signature, chaque installation est pensée pour imprimer l'identité du lieu dans la mémoire des visiteurs.",
        cta: "Découvrir",
      },
      architecture: {
        label: "Architecture végétale",
        name: "Architecture Végétale",
        desc: "Murs végétaux, jardins intérieurs, installations botaniques. L'art de structurer l'espace avec le vivant — là où la frontière entre nature et architecture disparaît pour créer des environnements qui respirent.",
        cta: "Découvrir",
      },
      tapis: {
        label: "Rituel funéraire",
        name: "Rituel Funéraire",
        desc: "Des compositions végétales vivantes et symboles de vie pour accompagner les moments de deuil avec dignité et sérénité. Arrangements sur mesure pour cérémonies, commémorations et espaces de recueillement.",
        cta: "Découvrir",
      },
      careGuide: {
        label: "Entretien",
        name: "Guide d'Entretien",
        desc: "Conseils simples et gestes essentiels pour garder votre création Mossä vivante, épanouie et magnifique au fil du temps. Fruit de l'expertise de Stéphanie, ces guides couvrent chaque saison et chaque type de création.",
        cta: "Consulter",
      },
      newborns: {
        label: "Rituel de naissance",
        name: "Nouveau-Nés",
        desc: "Célébrez l'arrivée d'un nouveau-né avec une composition végétale durable, symbole de croissance et d'avenir. Un cadeau unique qui traverse les années.",
        cta: "Découvrir",
      },
    },
    tapisUrne: {
      eyebrow: "Tapis d'Urne · Fait au Québec",
      title: "Entourer le départ\nd'une beauté vivante.",
      subtitle:
        "Chaque tapis d'urne est une pièce unique, réalisée à la main. Une alternative vivante et solidaire — chaque proche repart avec une petite plante, symbole de mémoire et de continuité.",
      cta: "Demander un devis",
    },
    careGuide: {
      eyebrow: "Fiche d'entretien",
      title: "Mon Jardin Zen",
      subtitle:
        "Quelques gestes simples pour garder votre création Mossä vivante et épanouie.",
      sections: [
        {
          title: "1. Choisir le bon emplacement",
          items: [
            {
              label: "Pièce très lumineuse",
              text: "Lumière vive mais jamais de soleil direct (risque de brûler la mousse en 2h). L'eau s'évapore vite — vérifiez l'humidité tous les matins.",
            },
            {
              label: "Pièce tamisée",
              text: "Lumière douce. La plante pousse moins vite, l'humidité tient plus longtemps (3–4 jours).",
            },
            {
              label: "Salle de bain",
              text: "Idéal si elle a une fenêtre. L'humidité naturelle aide la mousse. Arrosage réduit, mais surveillez la stagnation d'eau.",
            },
          ],
        },
        {
          title: "2. L'art de l'arrosage",
          items: [
            {
              label: "La mousse",
              text: "Elle boit par ses feuilles. Brumisez-la 3 à 5 fois par semaine. Elle doit rester souple et fraîche comme une éponge humide.",
            },
            {
              label: "La plante",
              text: "Utilisez une petite pipette pour verser l'eau directement au pied de la plante (environ 2 fois par semaine).",
            },
            {
              label: "La qualité de l'eau",
              text: "Eau de pluie ou filtrée (type Brita) de préférence. Le calcaire laisse des traces blanches sur les galets et fait jaunir la mousse.",
            },
          ],
        },
        {
          title: "3. Trucs & astuces de pro",
          items: [
            {
              label: "L'astuce du ciseau",
              text: "Pour garder le côté miniature, coupez les feuilles qui deviennent trop grandes. Cela force la plante à rester compacte.",
            },
            {
              label: "Le test du cure-dent",
              text: "Plantez un cure-dent au centre. S'il ressort sec, arrosez. S'il est sombre et humide, attendez.",
            },
            {
              label: "Rotation Zen",
              text: "Tournez votre plat d'un quart de tour chaque semaine pour que la plante reçoive la lumière de tous les côtés.",
            },
          ],
        },
        {
          title: "4. Guide de secours",
          items: [
            { label: "Mousse qui brunit", text: "Manque d'humidité ou eau trop calcaire. Augmentez la brumisation." },
            { label: "Plante qui s'affaisse", text: "Elle a soif ! Donnez-lui un petit verre d'eau immédiatement." },
            { label: "Moucherons", text: "La terre est trop détrempée. Laissez sécher la surface pendant 1 semaine." },
            { label: "Moisissure blanche", text: "Manque de circulation d'air. Déplacez dans une pièce mieux aérée." },
          ],
        },
      ],
      tip: "Moins c'est mieux : il vaut mieux arroser un petit peu souvent que de noyer le plat une seule fois. Ce montage est un être vivant miniature — il aime la régularité !",
    },
    engagement: {
      eyebrow: "Notre engagement",
      title: "Sur commande,\ntoujours.",
      body:
        "Qu'il s'agisse d'embellir votre intérieur, vos terrasses ou vos espaces professionnels, Mossä apporte une touche créative et experte à chaque projet. Chaque œuvre est réalisée exclusivement sur commande, garantissant une personnalisation totale et une fraîcheur absolue.",
      quote: "Laissez la nature entrer chez vous, avec intention.",
      ctaPrimary: "Nous contacter",
      ctaSecondary: "Voir la galerie",
    },
    footer: {
      tagline: "La nature sculptée pour vos moments de vie.",
      nav: "Navigation",
      contact: "Contact",
      email: "mossa@hotmail.com",
      phone: "819-816-2816",
      location: "Centre du Québec",
      rights: "© 2025 Mossä. Tous droits réservés.",
      links: {
        home: "Accueil",
        aPropos: "À propos",
        rituels: "Services",
        collection: "Galerie",
        entretiens: "Entretiens",
        contact: "Contact",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      aPropos: "About",
      rituels: "Services",
      collection: "Gallery",
      entretiens: "Care",
      livres: "Boutique",
      engagement: "Contact",
    },
    hero: {
      eyebrow: "Botanical Art",
      headline: "The botanical art that\ntakes root in your story.",
      subheadline:
        "Living creations, lasting emotions. Mossä sculpts nature for your life's most meaningful moments.",
      ctaPrimary: "View gallery",
      ctaSecondary: "Learn more",
    },
    about: {
      eyebrow: "The essence of Mossä",
      title: "The art of cultivating\nthe moment and the memory.",
      body1:
        "At Mossä, we believe plants are not mere decorative elements — they are life companions that breathe alongside us. Founded on a deep passion for horticulture and a keen sense of organic design, Mossä specialises in unique botanical arrangements crafted to transform your spaces and mark your life's transitions.",
      body2:
        "Inspired by Kusamono aesthetics and Zen minimalism, our creations are distinguished by their precision and structured elegance. Each arrangement is a unique piece, made with artisanal attention.",
      quote:
        "Organic design, from the living room to the grand moments of the soul.",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Our creations",
      subtitle:
        "Each piece is handcrafted, made to order. A unique creation for every life moment.",
    },
    collection: {
      eyebrow: "Urn Carpets",
      title: "Collection",
      subtitle:
        "Each piece is handcrafted, made to order. A living and compassionate alternative for memorial rituals.",
      items: [
        { name: "Walnut & Botanicals", desc: "Sage urn surrounded by a botanical composition on a walnut tray" },
        { name: "Black & Rose Gold", desc: "Refined black lacquer elegance with rose gold accents" },
        { name: "Pine & Colourful Florals", desc: "White marble urn on pine base with colourful chapel flowers" },
        { name: "Walnut & Crystal Calla", desc: "Red calla lilies and crystal urn on a warm walnut tray" },
        { name: "Japanese Zen & Orchid", desc: "Japanese zen-inspired composition with refined orchid" },
        { name: "Marble & Ornate Gold", desc: "Ornate gold urn on marble carpet, regal restraint" },
        { name: "Navy Pine & Orchids", desc: "Navy accents and white orchids on a natural pine base" },
        { name: "Cream Walnut & Orchids", desc: "Delicate pink orchids on a cream-toned walnut base" },
      ],
    },
    rituels: {
      eyebrow: "What we create",
      title: "Botanical art for\nevery life moment.",
      subtitle:
        "Bespoke creations to beautify your spaces and accompany your most precious moments.",
      botanical: {
        label: "Botanical Art",
        name: "Botanical Arrangements",
        desc: "Bespoke living compositions to beautify your home, terrace, or living space. Each piece is unique, handcrafted to order.",
        cta: "Discover",
      },
      hotels: {
        label: "Professional spaces",
        name: "Hotels & Lobbies",
        desc: "Monumental botanical creations that transform your reception spaces into memorable experiences. Custom botanical design.",
        cta: "Discover",
      },
      architecture: {
        label: "Botanical architecture",
        name: "Botanical Architecture",
        desc: "Living walls, indoor gardens, botanical installations. The art of structuring space with living plants.",
        cta: "Discover",
      },
      tapis: {
        label: "Memorial ritual",
        name: "Memorial Ritual",
        desc: "Living botanical compositions as symbols of life to accompany moments of mourning with dignity and serenity. Custom arrangements for ceremonies, commemorations and spaces of reflection.",
        cta: "Discover",
      },
      careGuide: {
        label: "Plant care",
        name: "Care Guide",
        desc: "Simple tips and essential gestures to keep your Mossä creation alive, thriving, and beautiful over time.",
        cta: "View guide",
      },
      newborns: {
        label: "Birth ritual",
        name: "Newborns",
        desc: "Celebrate the arrival of a newborn with a lasting botanical composition, a symbol of growth and future. A unique gift that transcends the years.",
        cta: "Discover",
      },
    },
    tapisUrne: {
      eyebrow: "Urn Rugs · Made in Québec",
      title: "Surrounding farewell\nwith living beauty.",
      subtitle:
        "Each urn rug is a unique, handcrafted piece. A living, caring alternative — each loved one leaves with a small plant, a symbol of memory and continuity.",
      cta: "Request a quote",
    },
    careGuide: {
      eyebrow: "Care guide",
      title: "My Zen Garden",
      subtitle:
        "A few simple gestures to keep your Mossä creation alive and flourishing.",
      sections: [
        {
          title: "1. Choosing the right spot",
          items: [
            {
              label: "Bright room",
              text: "Bright light but never direct sunlight (risk of burning moss in 2h). Water evaporates quickly — check humidity every morning.",
            },
            {
              label: "Dimly lit room",
              text: "Soft light. Plant grows more slowly, humidity lasts longer (3–4 days).",
            },
            {
              label: "Bathroom",
              text: "Ideal if it has a window. Natural humidity helps the moss. Reduce watering, but watch for water stagnation.",
            },
          ],
        },
        {
          title: "2. The art of watering",
          items: [
            {
              label: "The moss",
              text: "It drinks through its leaves. Mist it 3 to 5 times a week. It should stay supple and fresh like a damp sponge.",
            },
            {
              label: "The plant",
              text: "Use a small pipette to pour water directly at the base of the plant (about twice a week).",
            },
            {
              label: "Water quality",
              text: "Rainwater or filtered water (Brita type) preferred. Tap water leaves white marks on pebbles and yellows the moss.",
            },
          ],
        },
        {
          title: "3. Pro tips & tricks",
          items: [
            {
              label: "The scissors trick",
              text: "To maintain the miniature look, trim leaves that grow too large. This keeps the plant compact.",
            },
            {
              label: "The toothpick test",
              text: "Insert a toothpick in the centre. If it comes out dry, water. If it comes out dark and moist, wait.",
            },
            {
              label: "Zen rotation",
              text: "Turn your tray a quarter turn each week so the plant receives light from all sides.",
            },
          ],
        },
        {
          title: "4. Rescue guide",
          items: [
            { label: "Browning moss", text: "Lack of humidity or too much lime in water. Increase misting." },
            { label: "Wilting plant", text: "It's thirsty! Give it a small glass of water immediately." },
            { label: "Gnats", text: "Soil is too waterlogged. Let the surface dry for 1 week and reduce watering." },
            { label: "White mould", text: "Lack of air circulation. Move to a better-ventilated room." },
          ],
        },
      ],
      tip: "Less is more: it's better to water a little often than to flood the tray once. This arrangement is a miniature living being — it thrives on regularity!",
    },
    engagement: {
      eyebrow: "Our commitment",
      title: "Made to order,\nalways.",
      body:
        "Whether embellishing your home, terrace, or professional space, Mossä brings a creative, expert touch to every project. Each piece is crafted exclusively on order, guaranteeing total personalisation and absolute freshness.",
      quote: "Let nature enter your home, with intention.",
      ctaPrimary: "Contact us",
      ctaSecondary: "View gallery",
    },
    footer: {
      tagline: "Nature sculpted for your life's moments.",
      nav: "Navigation",
      contact: "Contact",
      email: "mossa@hotmail.com",
      phone: "819-816-2816",
      location: "Centre du Québec",
      rights: "© 2025 Mossä. All rights reserved.",
      links: {
        home: "Home",
        aPropos: "About",
        rituels: "Services",
        collection: "Gallery",
        entretiens: "Care",
        contact: "Contact",
      },
    },
  },
} as const;
