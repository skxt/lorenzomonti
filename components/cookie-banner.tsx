"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Settings, Check, X } from "lucide-react";

interface CookiePreferences {
  accepted: boolean;
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  // Consent categories state
  const [preferences, setPreferences] = useState({
    necessary: true, // Always active
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small timeout to show banner after page load for smooth entry
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen to custom event to reopen preferences
  useEffect(() => {
    const handleReopen = () => {
      const consent = localStorage.getItem("cookie-consent");
      if (consent) {
        try {
          const parsed = JSON.parse(consent) as CookiePreferences;
          setPreferences({
            necessary: true,
            analytics: parsed.analytics,
            marketing: parsed.marketing,
          });
        } catch (e) {}
      }
      setShowCustomize(true);
      setIsVisible(true);
    };

    window.addEventListener("open-cookie-banner", handleReopen);
    return () => {
      window.removeEventListener("open-cookie-banner", handleReopen);
    };
  }, []);

  const savePreferences = (
    updatedPrefs: typeof preferences,
    acceptedAll: boolean,
  ) => {
    const consentData: CookiePreferences = {
      accepted: true,
      necessary: true,
      analytics: updatedPrefs.analytics,
      marketing: updatedPrefs.marketing,
      timestamp: Date.now(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consentData));

    // Dispatch custom event for other parts of the app if needed
    window.dispatchEvent(
      new CustomEvent("cookie-consent-updated", { detail: consentData }),
    );

    setIsVisible(false);
    // Wait for transition before resetting customize view
    setTimeout(() => {
      setShowCustomize(false);
    }, 500);
  };

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    savePreferences(allAccepted, true);
  };

  const handleRejectAll = () => {
    const allRejected = { necessary: true, analytics: false, marketing: false };
    setPreferences(allRejected);
    savePreferences(allRejected, false);
  };

  const handleSaveCustom = () => {
    savePreferences(preferences, false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === "necessary") return; // cannot toggle necessary
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-white/95 backdrop-blur-md border border-blue-100 p-6 shadow-2xl transition-all duration-300">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2.5 bg-blue-50 text-primary rounded-2xl shrink-0">
            <Cookie className="size-6 text-[#4473bc]" />
          </div>
          <div className="flex-1">
            <h3 className="font-sans font-semibold text-gray-900 text-lg leading-6">
              Gestione dei Cookie
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Dott. Lorenzo Monti &bull; Rispetto della tua privacy
            </p>
          </div>
          <button
            onClick={handleRejectAll}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Chiudi e rifiuta facoltativi"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Main Banner Body */}
        {!showCustomize ? (
          <>
            <p className="text-gray-600 text-sm/relaxed mb-5">
              Utilizziamo cookie tecnici essenziali per il funzionamento del
              sito. Con il tuo consenso, potremmo utilizzare anche cookie
              analitici o di marketing per migliorare l&apos;esperienza.
              Consulta la nostra{" "}
              <Link
                href="/privacy-policy"
                className="text-primary hover:underline font-medium"
              >
                Privacy Policy
              </Link>{" "}
              e{" "}
              <Link
                href="/cookie-policy"
                className="text-primary hover:underline font-medium"
              >
                Cookie Policy
              </Link>{" "}
              per maggiori informazioni.
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleAcceptAll}
                className="w-full py-3 px-4 bg-[#4473bc] hover:bg-[#4473bc]/95 text-white font-medium text-sm transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.98] cursor-pointer"
              >
                Accetta Tutti
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleRejectAll}
                  className="py-2.5 px-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-medium text-xs transition-colors cursor-pointer"
                >
                  Solo Necessari
                </button>
                <button
                  onClick={() => setShowCustomize(true)}
                  className="py-2.5 px-4 bg-white hover:bg-blue-50/50 border border-blue-100 text-[#4473bc] font-medium text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Settings className="size-3.5" />
                  Personalizza
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Customize Panel */
          <>
            <p className="text-gray-600 text-xs/relaxed mb-4">
              Personalizza le tue preferenze sui cookie. I cookie necessari non
              possono essere disattivati in quanto fondamentali per l&apos;uso
              del sito.
            </p>

            <div className="space-y-3 mb-5 max-h-48 overflow-y-auto pr-1">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-gray-900">
                      Tecnici & Essenziali
                    </span>
                    <span className="text-[10px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded-md font-medium uppercase tracking-wider">
                      Sempre attivi
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Necessari per la navigazione del sito e la memorizzazione
                    delle preferenze (es. questo banner).
                  </p>
                </div>
                <div className="flex items-center h-5">
                  <div className="relative inline-flex items-center justify-center w-8 h-4 rounded-full bg-blue-150 cursor-not-allowed">
                    <span className="absolute right-1 w-2.5 h-2.5 rounded-full bg-[#4473bc]" />
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-3 bg-white rounded-2xl border border-blue-50 hover:bg-blue-50/10 transition-colors">
                <div className="flex-1 pr-4">
                  <span className="text-sm font-semibold text-gray-900">
                    Analitici & Performance
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Permettono di raccogliere informazioni statistiche e
                    aggregate sugli accessi degli utenti (es. pagine visitate).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => togglePreference("analytics")}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    preferences.analytics ? "bg-[#4473bc]" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      preferences.analytics ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-3 bg-white rounded-2xl border border-blue-50 hover:bg-blue-50/10 transition-colors">
                <div className="flex-1 pr-4">
                  <span className="text-sm font-semibold text-gray-900">
                    Profilazione & Marketing
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Utilizzati per inviare messaggi pubblicitari o tracciare
                    comportamenti su servizi di terze parti (es. video
                    embedded).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => togglePreference("marketing")}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    preferences.marketing ? "bg-[#4473bc]" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      preferences.marketing ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowCustomize(false)}
                className="w-1/3 py-2.5 px-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium text-xs transition-colors cursor-pointer"
              >
                Indietro
              </button>
              <button
                onClick={handleSaveCustom}
                className="w-2/3 py-2.5 px-4 bg-[#4473bc] hover:bg-[#4473bc]/95 text-white font-medium text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Check className="size-4" />
                Salva Scelte
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
