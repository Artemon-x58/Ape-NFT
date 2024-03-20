import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";

export const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Header handleMenuClick={handleMenuClick} isActive={isActive} />
      <Main />

      <MobileMenu handleMenuClick={handleMenuClick} isActive={isActive} />
    </>
  );
};
