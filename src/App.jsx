import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
    if (!isActive) {
      return (document.body.style.overflow = "hidden");
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <Header handleMenuClick={handleMenuClick} isActive={isActive} />
      <Main />
      <Footer />
      <MobileMenu handleMenuClick={handleMenuClick} isActive={isActive} />
    </>
  );
};
