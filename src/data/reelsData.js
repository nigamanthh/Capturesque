/**
 * CAPTURESQUE — Central Reel & Video Data Source
 * Sourced directly from `video reels.txt`
 *
 * To add more reels or videos in the future:
 * 1. Add a new object to `REELS_DATA` below with:
 *    - `id`: unique string ID
 *    - `title`: editorial descriptive title
 *    - `url`: exact Instagram URL (e.g. https://www.instagram.com/p/<shortcode>/)
 *    - `shortcode`: the unique Instagram post/reel code
 *    - `thumbnail`: path to a high-res cover image (e.g. from public/images/...)
 *    - `collabNote`: optional note (e.g. "Collab with Think Inde")
 *    - `caption`: authentic description without invented stats
 */

export const REELS_SECTION_CONFIG = {
  sectionId: "reels",
  eyebrow: "Moving Frames · On the Feed",
  heading: "Captured in motion.",
  description: "Beyond still frames, we document live movement, rhythm, and performance across cinematic short-form visuals and dance choreography.",
  instagramProfileUrl: "https://instagram.com/snuc_capturesque", // Official profile from reel captions
  instagramHandle: "@snuc_capturesque"
};

export const REELS_DATA = [
  {
    id: "reel-1",
    title: "Classical Dance — Sunset Choreo",
    subtitle: "Sacred Abhinaya & Fluid Motion",
    url: "https://www.instagram.com/p/DdB0z0dTQVh/",
    shortcode: "DdB0z0dTQVh",
    thumbnail: "/images/classical/classical1.jpg",
    thumbnailAlt: "Classical dancer in expressive mudra against warm ambient light",
    category: "Classical Dance",
    aspectRatio: "9:16",
    duration: "Short Reel",
    collabNote: null,
    caption: "Sunset classical choreography capturing fluid mudras, delicate eye expressions, and lyrical cadence."
  },
  {
    id: "reel-2",
    title: "Radhimaa — Classical Dance",
    subtitle: "Collaboration with Think Inde",
    url: "https://www.instagram.com/p/Dc74jR6RYpr/",
    shortcode: "Dc74jR6RYpr",
    thumbnail: "/images/classical/classical2.jpg",
    thumbnailAlt: "Classical dancer poised in temple stance with traditional jewellery",
    category: "Classical Dance",
    aspectRatio: "9:16",
    duration: "Short Reel",
    collabNote: "Collaboration with Think Inde",
    caption: "A special collaborative production with Think Inde exploring rhythmic cadence, devotion, and expressive abhinaya."
  },
  {
    id: "reel-3",
    title: "Classical Dance — Stage Kinetics",
    subtitle: "Rhythmic Cadence & Devotion",
    url: "https://www.instagram.com/p/Dc5SB6jRGMg/",
    shortcode: "Dc5SB6jRGMg",
    thumbnail: "/images/classical/classical3.JPG",
    thumbnailAlt: "Classical dance performance captured in kinetic motion",
    category: "Classical Dance",
    aspectRatio: "9:16",
    duration: "Short Reel",
    collabNote: null,
    caption: "Dynamic stage rhythm, rapid footwork, and statuesque pauses documented with crisp shutter precision."
  }
];

export const getReelById = (id) => {
  return REELS_DATA.find((reel) => reel.id === id);
};
