const pexels = (id: string) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1800`;

// One distinct, topic-matched photograph for every page with a photographic hero.
export const photos = {
  home: pexels("29372727"),
  about: pexels("29373893"),
  contact: pexels("7477692"),
  faqs: pexels("7551667"),
  help: pexels("7545279"),
  existingApplication: pexels("8560305"),
  renewals: pexels("7545301"),
  title19: pexels("7545332"),
  medicaidPlanning: pexels("5257246"),
  careManagement: pexels("7413974"),
  emergencyMedicaid: pexels("7545342"),
  waivers: pexels("7551611"),
  resources: pexels("7545305"),
  resourceLibrary: pexels("7394566"),
  wisdomIndex: pexels("6874392"),
  education: pexels("8124177"),
  testimonials: pexels("8139243"),
  resourceGuides: [
    pexels("7545295"), pexels("29372719"), pexels("18429371"), pexels("37330699"),
    pexels("11354025"), pexels("39219566"), pexels("7789957"), pexels("16782671"),
    pexels("7364189"), pexels("8795584"), pexels("33768859"), pexels("20850801"),
  ],
  wisdomArticles: [
    pexels("8439665"), pexels("7477698"), pexels("8139245"), pexels("29372715"),
    pexels("7551686"), pexels("11441175"), pexels("8317678"), pexels("8420399"),
    pexels("6148877"), pexels("7545186"), pexels("6975859"), pexels("39005418"),
  ],
  // Additional, individually selected photos for long-form page sections.
  resourceGuideSections: [
    pexels("6972661"), pexels("11610664"), pexels("7545249"), pexels("5493926"),
    pexels("35745260"), pexels("8376266"), pexels("8376236"), pexels("8413217"),
    pexels("11370618"), pexels("8376157"), pexels("5214997"), pexels("3823489"),
  ],
  wisdomArticleSections: [
    pexels("7544749"), pexels("8088598"), pexels("8088600"), pexels("8420394"),
    pexels("8056988"), pexels("5790822"), pexels("7921257"), pexels("8172814"),
    pexels("8056994"), pexels("8056990"), pexels("8441854"), pexels("8899975"),
  ],
  sourceSections: [
    pexels("7530585"), pexels("7979438"), pexels("8929201"), pexels("3768131"),
    pexels("8439661"), pexels("9870133"), pexels("6963071"), pexels("7979408"),
  ],
  aboutSections: pexels("7642092"),
  librarySection: pexels("7653165"),
  wisdomIndexSection: pexels("5710520"),
};
