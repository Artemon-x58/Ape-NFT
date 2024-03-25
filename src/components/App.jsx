import { useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Footer } from "./Footer/Footer";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { useMediaQuery } from "../js/mediaQuery";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [deviceType, setDeviceType] = useState("");
  const [isOpenListNav, setIsOpenListNav] = useState(false);

  useMediaQuery(setDeviceType);

  useEffect(() => {
    if (deviceType === "mobile") {
      if (isActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [isActive, deviceType]);

  const handleMenuClick = () => {
    setIsActive(!isActive);
    setIsOpenListNav(false);
  };
  const handleOpenNavList = () => {
    handleMenuClick();
    setIsOpenListNav(!isOpenListNav);
  };

  return (
    <>
      <GlobalStyles />
      <Header
        handleMenuClick={handleMenuClick}
        isActive={isActive}
        handleOpenNavList={handleOpenNavList}
        isOpenListNav={isOpenListNav}
      />
      <Main />
      <Footer />
      <MobileMenu handleMenuClick={handleMenuClick} isActive={isActive} />
    </>
  );
};

export default App;
