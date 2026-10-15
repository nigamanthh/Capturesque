/**
 * CAPTURESQUE — Central Portfolio & Gallery Data
 *
 * All image paths refer to public/images/...
 * To add photographs:
 * 1. Place the image file in public/images/<category>/
 * 2. Add an entry to the corresponding category's `photos` array below.
 * 3. Photo count is automatically computed by the application.
 */

export const STUDIO_CONFIG = {
  brandName: "CAPTURESQUE",
  tagline: "Every frame has a story.",
  heroHeadline: "CAPTURESQUE",
  heroSubheadline: "Every frame has a story.",
  heroCopy: "We document people, performances, and the moments that deserve to be remembered — with contemporary editorial intimacy and cinematic weight.",
  heroImage: {
    src: "/images/live-performance/live-performance-6.jpg",
    alt: "Capturesque live concert stage photography — atmospheric wide shot",
    caption: "Live acoustics & electric lights — capturing the unrepeatable"
  },
  contact: {
    heading: "Have a story worth capturing?",
    subheading: "Whether you're planning an intimate celebration, a live concert tour, or an editorial production, let's create something timeless.",
    phone: "+91 82201 09333",
    contactPerson: "DHARANIDHARAN",
    phoneDisplay: "+91 82201 09333 — DHARANIDHARAN",
    phoneRaw: "+918220109333",
    whatsAppUrl: "https://wa.me/918220109333",
    instagramHandle: "@snuc_capturesque",
    instagramUrl: "https://www.instagram.com/snuc_capturesque/",
    location: "Available for commissions across India"
  }
};

/**
 * Team section data:
 * Per branding rules, individual photographer names (Nigamanth, Dharani, Fazil)
 * are presented exclusively together in the About Us section.
 */
export const TEAM_MEMBERS = [
  {
    id: "nigamanth",
    name: "Nigamanth",
    role: "Creative Director & Lead Cinematographer",
    image: "/images/portraits/nigamanth.jpeg",
    imageAlt: "Portrait of Nigamanth",
    bio: "Drawn to rich contrasts, raw expressions, and cinematic narrative flow. Nigamanth shapes the visual tone and emotional weight of every commissioned story.",
    specialties: ["Cinematic Direction", "Light & Shadow", "Documentary Pacing"],
    instagram: "https://instagram.com"
  },
  {
    id: "dharani",
    name: "Dharani",
    role: "Lead Event & Candid Photographer",
    image: "/images/portraits/dharani.jpeg",
    imageAlt: "Portrait of Dharani",
    bio: "Attuned to the fleeting, unscripted glances between the big milestones. Dharani brings instinctive timing and warmth to weddings, rituals, and gatherings.",
    specialties: ["Candid Moments", "Weddings & Ceremonies", "Emotional Authenticity"],
    instagram: "https://instagram.com"
  },
  {
    id: "fazil",
    name: "Fazil",
    role: "Stage & Editorial Visualist",
    image: "/images/portraits/fazil.jpeg",
    imageAlt: "Portrait of Fazil",
    bio: "Obsessed with high-intensity stage lighting, movement freeze, and expressive portraiture. Fazil documents performers in their most vulnerable and powerful states.",
    specialties: ["Live Concerts", "Stage & Theatre", "Editorial Portraits"],
    instagram: "https://instagram.com"
  }
];

export const CATEGORIES = [
  {
    id: "celebs",
    slug: "celebs",
    title: "Celebs",
    subtitle: "Cinema stars, auteurs & performers",
    description: "An editorial collection celebrating South Indian cinema stars, filmmakers, and stage personalities. Featuring intimate portraits, candid moments, and spotlight performances.",
    coverImage: "/images/celebs/dushara%20vijayan/DSC_1125.JPG",
    coverAlt: "Dushara Vijayan editorial portrait",
    reviewStatus: "Preserved original CELEBS folder organisation (ANDREA, Director, dushara vijayan, Vikkals vikram). Raw camera filenames flagged for event title customization.",
    personalities: [
      { id: "all", name: "All Personalities" },
      { id: "dushara", name: "Dushara Vijayan", subfolder: "dushara vijayan" },
      { id: "andrea", name: "Andrea Jeremiah", subfolder: "ANDREA" },
      { id: "director", name: "Director Ram", subfolder: "Director" },
      { id: "vikram", name: "Vikkals Vikram", subfolder: "Vikkals vikram" }
    ],
    photos: [
      {
        id: "celeb-dushara-1",
        src: "/images/celebs/dushara%20vijayan/DSC_1125.JPG",
        alt: "Dushara Vijayan — Candid editorial portrait",
        title: "Dushara Vijayan — Radiance & Grace",
        caption: "Acclaimed cinema actress Dushara Vijayan in a candid editorial portrait.",
        subfolder: "dushara vijayan",
        personality: "Dushara Vijayan",
        personalityKey: "dushara",
        originalFile: "DSC_1125.JPG",
        orientation: "landscape",
        ratio: 1.50,
        flaggedForReview: true,
        reviewNote: "Original filename DSC_1125.JPG — Event/publication title can be refined."
      },
      {
        id: "celeb-dushara-2",
        src: "/images/celebs/dushara%20vijayan/DSC_0007.JPG",
        alt: "Dushara Vijayan — Quiet poise and expression",
        title: "Dushara Vijayan — Quiet Poise",
        caption: "Natural expression and graceful presence in ambient natural light.",
        subfolder: "dushara vijayan",
        personality: "Dushara Vijayan",
        personalityKey: "dushara",
        originalFile: "DSC_0007.JPG",
        orientation: "landscape",
        ratio: 1.50,
        flaggedForReview: true,
        reviewNote: "Original filename DSC_0007.JPG — Event/publication title can be refined."
      },
      {
        id: "celeb-dushara-3",
        src: "/images/celebs/dushara%20vijayan/DSC_1142.JPG",
        alt: "Dushara Vijayan — In conversation",
        title: "Dushara Vijayan — In Conversation",
        caption: "Engaging in discussion with effortless elegance and warmth.",
        subfolder: "dushara vijayan",
        personality: "Dushara Vijayan",
        personalityKey: "dushara",
        originalFile: "DSC_1142.JPG",
        orientation: "landscape",
        ratio: 1.50,
        flaggedForReview: true,
        reviewNote: "Original filename DSC_1142.JPG — Event/publication title can be refined."
      },
      {
        id: "celeb-andrea-1",
        src: "/images/celebs/ANDREA/andrea1.jpg",
        alt: "Andrea Jeremiah singing passionately under spotlight",
        title: "Andrea Jeremiah — Spotlight Crescendo",
        caption: "Commanding the arena with resonant vocals and pure stage presence.",
        subfolder: "ANDREA",
        personality: "Andrea Jeremiah",
        personalityKey: "andrea",
        originalFile: "andrea1.jpg",
        orientation: "portrait",
        ratio: 0.67
      },
      {
        id: "celeb-andrea-2",
        src: "/images/celebs/ANDREA/andrea2.jpg",
        alt: "Andrea Jeremiah close-up during acoustic ballad",
        title: "Andrea Jeremiah — Intimate Acoustic",
        caption: "A quiet moment framed against dramatic stage illumination.",
        subfolder: "ANDREA",
        personality: "Andrea Jeremiah",
        personalityKey: "andrea",
        originalFile: "andrea2.jpg",
        orientation: "portrait",
        ratio: 0.67
      },
      {
        id: "celeb-andrea-3",
        src: "/images/celebs/ANDREA/andrea3.jpg",
        alt: "Andrea Jeremiah connecting with the audience",
        title: "Andrea Jeremiah — Audience Communion",
        caption: "Electric energy flowing between the front row and the spotlight.",
        subfolder: "ANDREA",
        personality: "Andrea Jeremiah",
        personalityKey: "andrea",
        originalFile: "andrea3.jpg",
        orientation: "portrait",
        ratio: 0.67
      },
      {
        id: "celeb-director-1",
        src: "/images/celebs/Director/DirRAM.jpeg",
        alt: "Director Ram in contemplative thought",
        title: "Director Ram — The Auteur's Gaze",
        caption: "A quiet study in intellect, conviction, and cinematic storytelling.",
        subfolder: "Director",
        personality: "Director Ram",
        personalityKey: "director",
        originalFile: "DirRAM.jpeg",
        orientation: "portrait",
        ratio: 0.56
      },
      {
        id: "celeb-director-2",
        src: "/images/celebs/Director/DirRam2.jpeg",
        alt: "Director Ram engaged in discussion",
        title: "Director Ram — In Conversation",
        caption: "Candid dialogue capturing natural warmth and intellectual presence.",
        subfolder: "Director",
        personality: "Director Ram",
        personalityKey: "director",
        originalFile: "DirRam2.jpeg",
        orientation: "portrait",
        ratio: 0.56
      },
      {
        id: "celeb-vikram-1",
        src: "/images/celebs/Vikkals%20vikram/DSC_0368.JPG",
        alt: "Vikkals Vikram in live performance",
        title: "Vikkals Vikram — Kinetic Comedy",
        caption: "Stage charisma, expressive gestures, and sharp timing.",
        subfolder: "Vikkals vikram",
        personality: "Vikkals Vikram",
        personalityKey: "vikram",
        originalFile: "DSC_0368.JPG",
        orientation: "landscape",
        ratio: 1.50,
        flaggedForReview: true,
        reviewNote: "Original filename DSC_0368.JPG — Tour/event name can be refined."
      },
      {
        id: "celeb-vikram-2",
        src: "/images/celebs/Vikkals%20vikram/DSC_0374.JPG",
        alt: "Vikkals Vikram connecting with the audience",
        title: "Vikkals Vikram — The Stage Storyteller",
        caption: "Engaging the crowd with lively narrative delivery and spontaneous wit.",
        subfolder: "Vikkals vikram",
        personality: "Vikkals Vikram",
        personalityKey: "vikram",
        originalFile: "DSC_0374.JPG",
        orientation: "landscape",
        ratio: 1.50,
        flaggedForReview: true,
        reviewNote: "Original filename DSC_0374.JPG — Tour/event name can be refined."
      }
    ]
  },
  {
    id: "weddings",
    slug: "weddings",
    title: "Weddings",
    subtitle: "Intimate vows & sacred celebrations",
    description: "Intimate vows, unspoken glances, and timeless celebrations documented with warmth, reverence, and honesty.",
    coverImage: "/images/wedding/wedding1.jpg",
    coverAlt: "Traditional wedding ceremony garland celebration",
    reviewStatus: "Verified — matches source WEDDING assets",
    photos: [
      {
        id: "wedding-1",
        src: "/images/wedding/wedding1.jpg",
        alt: "Wedding ritual with bride and groom sharing a joyous moment",
        title: "The Auspicious Moment",
        caption: "A joyful exchange surrounded by family and sacred blessings.",
        orientation: "landscape",
        ratio: 1.50
      },
      {
        id: "wedding-2",
        src: "/images/wedding/wedding2.jpg",
        alt: "Wedding garland ceremony celebration",
        title: "Garland Exchange",
        caption: "Laughter, garlands, and collective cheers in traditional splendour.",
        orientation: "landscape",
        ratio: 1.50
      },
      {
        id: "wedding-3",
        src: "/images/wedding/wedding3.jpg",
        alt: "Portrait of bride in traditional attire",
        title: "Quiet Grace",
        caption: "A serene moment of contemplation amidst the ceremonial rhythm.",
        orientation: "portrait",
        ratio: 0.56
      }
    ]
  },
  {
    id: "andrea",
    slug: "andrea",
    title: "Andrea Jeremiah",
    subtitle: "Live in Concert",
    description: "The magnetic stage presence, raw vocal power, and electric crowd communion of artist Andrea Jeremiah captured live in the spotlight.",
    coverImage: "/images/andrea/andrea1.jpg",
    coverAlt: "Andrea Jeremiah performing with microphone on concert stage",
    reviewStatus: "Verified — matches source ANdrea assets",
    photos: [
      {
        id: "andrea-1",
        src: "/images/andrea/andrea1.jpg",
        alt: "Andrea Jeremiah in a vibrant purple dress singing intensely",
        title: "Spotlight Crescendo",
        caption: "Commanding the arena with resonant vocals and pure passion.",
        orientation: "portrait",
        ratio: 0.67
      },
      {
        id: "andrea-2",
        src: "/images/andrea/andrea2.jpg",
        alt: "Andrea Jeremiah expressive performance with microphone close-up",
        title: "Intimate Acoustic",
        caption: "A quiet ballad framed against dramatic stage illumination.",
        orientation: "portrait",
        ratio: 0.67
      },
      {
        id: "andrea-3",
        src: "/images/andrea/andrea3.jpg",
        alt: "Andrea Jeremiah engaging the audience under concert beam",
        title: "Audience Communion",
        caption: "Energy bouncing between the front row and the centre stage.",
        orientation: "portrait",
        ratio: 0.67
      }
    ]
  },
  {
    id: "live-performances",
    slug: "live-performances",
    title: "Live Performances",
    subtitle: "Concert stages & sonic atmospheres",
    description: "Dynamic concert acoustics, crowd energy, and the unrepeatable pulse of live musical ensembles and vocalists.",
    coverImage: "/images/live-performance/live-performance-6.jpg",
    coverAlt: "Full band performance under dramatic stage lighting with beams",
    reviewStatus: "Verified — matches source Live performance assets",
    photos: [
      {
        id: "lp-6",
        src: "/images/live-performance/live-performance-6.jpg",
        alt: "Wide shot of concert band on stage under luminous beams",
        title: "Arena Symphony",
        caption: "Full ensemble immersed in cascading architectural beams.",
        orientation: "landscape",
        ratio: 1.48
      },
      {
        id: "lp-1",
        src: "/images/live-performance/live-performance-1.jpg",
        alt: "Vocalist singing passionately into microphone under warm lights",
        title: "Golden Hour Resonance",
        caption: "Warm tungsten tones framing an emotional vocal delivery.",
        orientation: "portrait",
        ratio: 0.67
      },
      {
        id: "lp-2",
        src: "/images/live-performance/live-performance-2.jpg",
        alt: "Lead performer bathed in ambient blue and gold concert light",
        title: "Chromatic Stage",
        caption: "Dual-tone lighting emphasizing performance rhythm and passion.",
        orientation: "portrait",
        ratio: 0.67
      },
      {
        id: "lp-5",
        src: "/images/live-performance/live-performance-5.jpg",
        alt: "Artist performing live in vibrant concert aura",
        title: "Mid-Rhythm Freeze",
        caption: "Crisp shutter capturing pure kinetic musical delivery.",
        orientation: "portrait",
        ratio: 0.67
      },
      {
        id: "lp-liveshow",
        src: "/images/live-performance/liveshow.JPG",
        alt: "Concert stage with full lighting setup and performers",
        title: "Stage Velocity",
        caption: "Luminous stage geometry framing the ensemble in full flight.",
        orientation: "landscape",
        ratio: 1.50
      },
      {
        id: "lp-liveshow1",
        src: "/images/live-performance/liveshow1.JPG",
        alt: "Atmospheric live concert performance wide capture",
        title: "Sonic Immersion",
        caption: "Atmospheric perspective capturing sound, light, and audience harmony.",
        orientation: "landscape",
        ratio: 1.50
      }
    ]
  },
  {
    id: "classical-dance",
    slug: "classical-dance",
    title: "Dance & Stage — Classical",
    subtitle: "Abhinaya, rhythm & sacred mudras",
    description: "Grace, rhythmic devotion, and ancient narrative art captured through the expressive discipline of classical Indian dance.",
    coverImage: "/images/classical/classical1.jpg",
    coverAlt: "Classical dancer in intricate costume and expressive abhinaya",
    reviewStatus: "Verified — matches source Classical assets",
    photos: [
      {
        id: "classical-1",
        src: "/images/classical/classical1.jpg",
        alt: "Classical dancer performing intricate mudra with focused gaze",
        title: "The Mudra of Storytelling",
        caption: "Sacred geometry of hand gesture and heightened ocular expression.",
        orientation: "landscape",
        ratio: 1.45
      },
      {
        id: "classical-2",
        src: "/images/classical/classical2.jpg",
        alt: "Classical dancer poised in traditional stance with temple jewellery",
        title: "Temple Devotion",
        caption: "Statuesque balance framed against minimalist warm drapery.",
        orientation: "portrait",
        ratio: 0.73
      },
      {
        id: "classical-3",
        src: "/images/classical/classical3.JPG",
        alt: "Classical dancer performing expressive movement on stage",
        title: "Rhythmic Cadence",
        caption: "Intricate footwork and gestures captured with crystalline detail.",
        orientation: "landscape",
        ratio: 1.50
      },
      {
        id: "classical-4",
        src: "/images/classical/classical4.JPG",
        alt: "Classical dancer conveying abhinaya emotions",
        title: "The Expressive Gaze",
        caption: "Subtle eye expressions communicating timeless mythological narratives.",
        orientation: "landscape",
        ratio: 1.50
      },
      {
        id: "classical-5",
        src: "/images/classical/classical5.JPG",
        alt: "Classical dance posture in balanced alignment",
        title: "Sacred Alignment",
        caption: "Geometrical purity and rhythmic discipline rendered in stage lighting.",
        orientation: "landscape",
        ratio: 1.50
      },
      {
        id: "classical-6",
        src: "/images/classical/classical6.JPG",
        alt: "Dynamic classical dance stage freeze",
        title: "Kinetic Stillness",
        caption: "A peak moment of motion frozen in graceful balance.",
        orientation: "landscape",
        ratio: 1.50
      }
    ]
  },
  {
    id: "western-dance",
    slug: "western-dance",
    title: "Western Dance & Cultural",
    subtitle: "Sync choreography & collegiate spirit",
    description: "High-voltage crew synchrony, vibrant theatrical lighting, and the spirited intensity of collegiate dance showcase battles.",
    coverImage: "/images/western-dance/westerndance2.JPG",
    coverAlt: "Western dance crew in dramatic red and blue stage lighting",
    reviewStatus: "Flagged for Review: Specific event/college title can be customized",
    photos: [
      {
        id: "wd-2",
        src: "/images/western-dance/westerndance2.JPG",
        alt: "Dance team in formation with dynamic lighting",
        title: "Sync Velocity",
        caption: "Crisp synchronization under vivid crimson stage spotlights.",
        orientation: "landscape",
        ratio: 1.50
      },
      {
        id: "wd-3",
        src: "/images/western-dance/westerndance3.JPG",
        alt: "Dance crew performance with theatrical smoke and colored lights",
        title: "Kinetic Pulse",
        caption: "Low-angle perspective capturing the crew's explosive movement.",
        orientation: "landscape",
        ratio: 1.50
      },
      {
        id: "wd-1",
        src: "/images/western-dance/westerndance1.jpg",
        alt: "Dancers in coordinated street choreography pose",
        title: "Ensemble Formation",
        caption: "Structured spatial geometry and synchronized poses.",
        orientation: "landscape",
        ratio: 1.30
      },
      {
        id: "wd-4",
        src: "/images/western-dance/westerndance4.jpg",
        alt: "Dancer leaping or in vertical spotlight freeze",
        title: "Airborne Elevation",
        caption: "Defying gravity — vertical leap frozen at peak extension.",
        orientation: "portrait",
        ratio: 0.67
      }
    ]
  },
  {
    id: "editorial",
    slug: "editorial",
    title: "Editorial — Director Ram",
    subtitle: "Cinema portraits & narrative intellect",
    description: "Intimate and contemplative portraiture capturing the depth, quiet gravity, and creative intensity of acclaimed filmmaker Director Ram.",
    coverImage: "/images/director/DirRAM.jpeg",
    coverAlt: "Director Ram in thoughtful profile portrait",
    reviewStatus: "Flagged for Review: Event / publication context can be specified",
    photos: [
      {
        id: "dir-1",
        src: "/images/director/DirRAM.jpeg",
        alt: "Director Ram in contemplative thought",
        title: "The Auteur's Gaze",
        caption: "A quiet study in intellect, conviction, and cinematic storytelling.",
        orientation: "portrait",
        ratio: 0.56
      },
      {
        id: "dir-2",
        src: "/images/director/DirRam2.jpeg",
        alt: "Director Ram engaged in discussion",
        title: "In Conversation",
        caption: "Candid dialogue capturing natural warmth and intellectual presence.",
        orientation: "portrait",
        ratio: 0.56
      }
    ]
  }
];

// Helper to get total photo count across all categories
export const getTotalPhotoCount = () => {
  return CATEGORIES.reduce((total, cat) => total + cat.photos.length, 0);
};

// Helper to look up a category by id or slug
export const getCategoryById = (idOrSlug) => {
  return CATEGORIES.find(cat => cat.id === idOrSlug || cat.slug === idOrSlug);
};
