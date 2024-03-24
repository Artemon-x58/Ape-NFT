import { useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Footer } from "./Footer/Footer";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isActive]);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <GlobalStyles />
      <Header handleMenuClick={handleMenuClick} isActive={isActive} />
      <Main />
      <Footer />
    </>
  );
};

export default App;
{
  /* <MobileMenu handleMenuClick={handleMenuClick} isActive={isActive} /> */
}
