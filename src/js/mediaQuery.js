import { useEffect } from "react";
const handleMediaQueryChange = (event, setDeviceType) => {
  if (event.matches) {
    setDeviceType("tablet");
  } else if (window.matchMedia("(min-width: 1280px)").matches) {
    setDeviceType("desktop");
  } else {
    setDeviceType("mobile");
  }
};
const removeMediaQueryListener = (mediaQuery, setDeviceType) => {
  mediaQuery.removeListener((event) =>
    handleMediaQueryChange(event, setDeviceType)
  );
};
export const useMediaQuery = (setDeviceType) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1280px)"
    );
    mediaQuery.addListener((event) =>
      handleMediaQueryChange(event, setDeviceType)
    );
    handleMediaQueryChange(mediaQuery, setDeviceType);

    return () => {
      removeMediaQueryListener(mediaQuery, setDeviceType);
    };
  }, [setDeviceType]);
};
