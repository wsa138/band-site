import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useGTMPageView() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page: location.pathname + location.hash,
    });
  }, [location]);
}

export default useGTMPageView;
