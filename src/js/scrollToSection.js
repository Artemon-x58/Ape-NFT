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
