import { useTranslation } from "react-i18next";
import { useIsFetching } from "@tanstack/react-query";

export const useGlobalLoading = () => {
  const isFetching = useIsFetching();
  const { ready } = useTranslation();
  const i18nNotReady = typeof ready !== "boolean" || !ready;
  const queryLoading = isFetching > 0;
  return i18nNotReady || queryLoading;
};
