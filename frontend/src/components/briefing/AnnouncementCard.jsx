import { useState } from "react";
import {
  FaBullhorn,
  FaLanguage,
  FaCopy,
  FaCheckCircle,
} from "react-icons/fa";

import Card from "../ui/Card";
import Button from "../ui/Button";

const templates = {
  en: (route) =>
    `Attention spectators. To improve crowd flow, please proceed toward ${route}. Follow the digital signboards and instructions from stadium staff. Thank you for your cooperation.`,

  es: (route) =>
    `Atención espectadores. Para mejorar el flujo de personas, diríjanse hacia ${route}. Sigan las indicaciones del personal del estadio. Gracias por su colaboración.`,

  fr: (route) =>
    `Attention aux spectateurs. Afin d'améliorer la circulation, veuillez vous diriger vers ${route}. Suivez les indications du personnel du stade. Merci de votre coopération.`,
};

const AnnouncementCard = ({ analysis }) => {
  const route = analysis?.route || "Gate D";

  const [language, setLanguage] = useState("en");
  const [copied, setCopied] = useState(false);

  const announcement = templates[language](route);

  const copyAnnouncement = async () => {
    try {
      await navigator.clipboard.writeText(announcement);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Public Announcement Generator
          </h2>

          <p className="mt-2 text-slate-400">
            Generate multilingual public-address announcements
            using verified operational recommendations.
          </p>

        </div>

        <div className="rounded-xl bg-cyan-500/10 p-4">
          <FaBullhorn
            size={26}
            className="text-cyan-400"
          />
        </div>

      </div>

      {/* Language */}

      <div>

        <label className="mb-3 flex items-center gap-2 text-sm text-slate-300">

          <FaLanguage />

          Language

        </label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
        >
          <option value="en">
            English
          </option>

          <option value="es">
            Spanish
          </option>

          <option value="fr">
            French
          </option>

        </select>

      </div>

      {/* Announcement */}

      <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

        <h3 className="mb-4 font-semibold text-cyan-400">
          Generated Announcement
        </h3>

        <p className="leading-8 text-slate-300">
          {announcement}
        </p>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap gap-4">

        <Button
          onClick={copyAnnouncement}
          className="flex items-center gap-2"
        >
          {copied ? (
            <>
              <FaCheckCircle />
              Copied
            </>
          ) : (
            <>
              <FaCopy />
              Copy Announcement
            </>
          )}
        </Button>

        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3">

          <span className="text-sm text-cyan-300">
            Powered by Rules Engine + Gemini AI
          </span>

        </div>

      </div>

    </Card>
  );
};

export default AnnouncementCard;