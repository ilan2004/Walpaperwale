/**
 * @typedef {Object} CaseStudy
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} logoSrc
 * @property {string} imageSrc
 * @property {string[]} categories
 */

/**
 * Sample case study data
 * @type {CaseStudy[]}
 */
export const caseStudies = [
    {
      id: "MYSTIC",
      title: "MYSTIC ",
      description: "Ranging from the ethnic and arty to the most contemporary and off-beat types, we deliver a unique newness in all our offerings. Out here to transform wall statements and interior trends, we stand out in terms of customization techniques, collaboration platforms. and distribution networks.",
      logoSrc: "/projects/mystic/logo.png",
      imageSrc: "/projects/mystic/mystic.png",
      categories: ["Soft & Bright Colortones", "Natural Look", "Artistic Touch"],
    },
    {
      id: "AVENUE",
      title: "AVENUE",
      description:
        "Welcome to the world of Texture & Colours gallery. Naturally Eco Friendly Silk wallpaper that comes with uni colored structures and textures along with fantastic range of shades.",
      logoSrc: "/projects/avenue/logo.png",
      imageSrc: "/projects/avenue/avenue.png",
      categories: ["Vinyl with Paper back", "Korea","1.06 mtr x 5.2 mtr = 59 Sq.Ft"],
    },
    {
      id: "casablanca",
      title: "casablanca",
      description: "Whether you’re looking for Special collection. of we’ve got plenty of wallpaper inspiration to spark your imagination. Step into the wonderful world of casablanca collection wallpapers",
      logoSrc: "/projects/casablanca/logo.png",
      imageSrc: "/projects/casablanca/casandra.png",
      categories: ["Moroccan Design","Natural Textures","Vinyl with Paper back","1.06 mtr x 5.2 mtr = 59 Sq.Ft"],
    },
    {
      id: "DUNE",
      title: "DUNE",
      description:
        "DUNE is an homage to nature with its sands sculpted by tides and winds.Inspired by our need to reconnect to nature, our desire for calm and balance.A tactile tribute to the artisan's paintbrush and touch",
      logoSrc: "/projects/dune/logo.png",
      imageSrc: "/projects/dune/dune.png",
      categories: ["Korea","1.06 mtr x 5.2 mtr = 59 Sq.Ft","Vinyl with paper back" ],
    },
  ];
  
  /**
   * Get all unique categories from case studies
   * @returns {string[]} Sorted array of all unique categories
   */
  export const getAllCategories = () => {
    return Array.from(new Set(caseStudies.flatMap((study) => study.categories))).sort();
  };