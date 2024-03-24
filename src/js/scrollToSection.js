export const sections = [
  { id: "about", label: "ABOUT" },
  { id: "mind-map", label: "M-MAP" },
  { id: "faq", label: "FAQ" },
  { id: "arts", label: "ARTS" },
  { id: "mint", label: "MINT" },
];

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const handleMenuItemClick = (sectionId, handleMenuClick) => {
  scrollToSection(sectionId);
  handleMenuClick(false);
};

export const handleMintSection = (sectionId) => {
  scrollToSection(sectionId);
};
