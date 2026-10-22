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
};
