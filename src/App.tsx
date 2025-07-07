import { BrowserRouter } from "react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGlobalLoading } from "./hooks/useGlobalLoading";
import { AppRoutes } from "./AppRoutes";
import { LoadingOverlay } from "./components/Layout/LoadingOverlay";
function App() {
  const { i18n } = useTranslation();
  const isLoading = useGlobalLoading();
  const [showApp, setShowApp] = useState(false);
  const [delayPassed, setDelayPassed] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayPassed(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!isLoading && delayPassed) {
      setShowApp(true);
    }
  }, [isLoading, delayPassed]);

  const shouldShowLoader = !showApp;
  useEffect(() => {
    const currentLang = i18n.language;
    const dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = currentLang;
  }, [i18n.language]);
  return (
    <>
      {shouldShowLoader && <LoadingOverlay />}
      {showApp && (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
