import { useEffect, useMemo, useState } from "react";

import dashboardConfig from "../../data/dashboardConfig";
import { resolveCardValue } from "./cardResolver";

function useLiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

export default function useHeaderCards(activeTab, analysis) {
  const time = useLiveClock();

  const current = dashboardConfig[activeTab] ?? dashboardConfig.overview;

  const cards = useMemo(
    () =>
      current.cards.map((card) => ({
        ...card,
        value: resolveCardValue(card, analysis, time),
      })),
    [current, analysis, time]
  );

  return { current, cards };
}
