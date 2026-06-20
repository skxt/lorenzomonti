"use client";

import Link from "next/link";
import { Cookie, ArrowLeft, Settings2, Info } from "lucide-react";

export default function CookiePolicyPage() {
  const triggerReopen = () => {
    window.dispatchEvent(new CustomEvent("open-cookie-banner"));
  };

  return (
    <main className="mx-4 lg:mx-16 xl:mx-24 2xl:mx-32 border-x border-blue-100 mt-[65px] bg-white min-h-screen">
      <div className="py-12 lg:py-20 px-6 lg:px-24 max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#4473bc] hover:opacity-70 transition-opacity mb-8 group"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          Torna alla Home
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-blue-100">
          <div className="p-3 bg-blue-50 text-[#4473bc] rounded-2xl">
            <Cookie className="size-8" />
          </div>
          <div>
            <h1 className="font-sans text-3xl lg:text-4xl font-bold text-gray-900">
              Cookie Policy
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Ultimo aggiornamento: 20 Giugno 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 font-sans text-gray-700 leading-relaxed text-sm lg:text-base">
          <section>
            <p className="mb-4">
              La presente Cookie Policy descrive l&apos;uso dei cookie su questo
              sito web. Per saperne di più sul trattamento dei dati personali in
              generale, consulta la nostra{" "}
              <Link
                href="/privacy-policy"
                className="text-[#4473bc] hover:underline font-medium"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          {/* Manage Preferences Button Box */}
          <section className="bg-blue-50/40 p-6 rounded-3xl border border-blue-100/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-1 flex items-center gap-1.5">
                <Settings2 className="size-4 text-[#4473bc]" />
                Preferenze di Consenso
              </h3>
              <p className="text-xs text-gray-500 max-w-lg">
                In qualsiasi momento puoi modificare o revocare il tuo consenso
                all&apos;utilizzo dei cookie facoltativi (analitici e di
                profilazione).
              </p>
            </div>
            <button
              onClick={triggerReopen}
              className="py-2.5 px-5 bg-[#4473bc] hover:bg-[#4473bc]/95 text-white font-medium text-xs rounded-full transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 shrink-0 self-start md:self-auto cursor-pointer"
            >
              Gestisci Preferenze
            </button>
          </section>

          {/* 1. Cosa sono i Cookie */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              1. Cosa sono i Cookie?
            </h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dagli
              utenti inviano ai loro terminali (solitamente al browser), dove
              vengono memorizzati per essere poi ritrasmessi agli stessi siti
              alla visita successiva. I cookie possono essere memorizzati solo
              per il tempo di utilizzo di un determinato sito (session cookie) o
              per un periodo di tempo più lungo e indipendente dalla sessione
              (persistent cookie).
            </p>
          </section>

          {/* 2. Tipologie di Cookie Utilizzati */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              2. Tipologie di Cookie utilizzate da questo Sito
            </h2>

            <div className="space-y-6">
              {/* Technical Cookies */}
              <div className="border border-gray-150 rounded-2xl p-5 bg-gray-50/50">
                <h3 className="font-semibold text-gray-950 flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                  Cookie Tecnici e di Funzionamento (Essenziali)
                </h3>
                <p className="text-xs lg:text-sm text-gray-600 mb-3">
                  Questi cookie sono indispensabili per il corretto
                  funzionamento del sito e per consentire all&apos;utente di
                  navigare e utilizzare le sue funzionalità base (es. salvare le
                  preferenze sul consenso dei cookie). La disabilitazione di
                  questi cookie potrebbe compromettere l&apos;uso del sito.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-500">
                        <th className="py-2 font-medium">Nome Cookie</th>
                        <th className="py-2 font-medium">Fornitore</th>
                        <th className="py-2 font-medium">Scopo</th>
                        <th className="py-2 font-medium">Scadenza</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700">
                      <tr>
                        <td className="py-2 font-mono font-medium">
                          cookie-consent
                        </td>
                        <td className="py-2">Proprio</td>
                        <td className="py-2">
                          Memorizza lo stato del consenso dell&apos;utente per
                          l&apos;uso dei cookie su questo sito.
                        </td>
                        <td className="py-2">1 anno</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-150 rounded-2xl p-5 bg-white">
                <h3 className="font-semibold text-gray-950 flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-400" />
                  Cookie Analitici o di Performance (Opzionali)
                </h3>
                <p className="text-xs lg:text-sm text-gray-600">
                  Questi cookie ci consentono di contare le visite e le fonti di
                  traffico, in modo da poter misurare e migliorare le
                  prestazioni del nostro sito. Ci aiutano a sapere quali sono le
                  pagine più e meno popolari e a vedere come i visitatori si
                  muovono all&apos;interno del sito. Tutte le informazioni
                  raccolte da questi cookie sono aggregate e quindi anonime.
                  Attualmente, questo sito non fa uso attivo di cookie analitici
                  di terze parti (es. Google Analytics). Qualora venissero
                  implementati in futuro, l&apos;attivazione avverrà solo previo
                  esplicito consenso dell&apos;utente fornito tramite il banner.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-150 rounded-2xl p-5 bg-white">
                <h3 className="font-semibold text-gray-950 flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-violet-400" />
                  Cookie di Profilazione e Marketing (Opzionali)
                </h3>
                <p className="text-xs lg:text-sm text-gray-600">
                  I cookie di profilazione sono volti a creare profili relativi
                  all&apos;utente e vengono utilizzati al fine di inviare
                  messaggi pubblicitari in linea con le preferenze manifestate
                  dallo stesso nell&apos;ambito della navigazione in rete.
                  Possono essere impostati tramite il nostro sito dai nostri
                  partner pubblicitari (ad es. per mostrare video di YouTube
                  integrati o mappe interattive). Attualmente non utilizziamo
                  cookie di profilazione o tracciamento commerciale. Qualora
                  venissero introdotti in futuro, sarà richiesto il preventivo
                  ed esplicito consenso dell&apos;utente.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Disabilitazione da Browser */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. Come controllare o disabilitare i cookie tramite browser
            </h2>
            <p className="mb-4">
              Oltre a utilizzare le impostazioni di consenso disponibili su
              questo sito, è possibile configurare il proprio browser per
              accettare o rifiutare tutti i cookie, o per ricevere una notifica
              quando un cookie viene impostato. Ciascun browser ha impostazioni
              differenti. Di seguito sono riportati i link alle istruzioni dei
              browser più diffusi:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4473bc] hover:underline font-medium"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4473bc] hover:underline font-medium"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4473bc] hover:underline font-medium"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4473bc] hover:underline font-medium"
                >
                  Microsoft Edge / Internet Explorer
                </a>
              </li>
            </ul>
          </section>

          {/* Contact info info box */}
          <div className="flex gap-3 bg-blue-50/20 border border-blue-100/50 p-4 rounded-2xl text-xs text-gray-500">
            <Info className="size-5 text-[#4473bc] shrink-0 mt-0.5" />
            <p>
              Per qualsiasi chiarimento in merito all&apos;utilizzo dei cookie
              su questo sito, l&apos;utente può rivolgersi al Titolare del
              Trattamento all&apos;indirizzo email:{" "}
              <a
                href="mailto:lorenzomonti@hotmail.it"
                className="text-[#4473bc] hover:underline font-medium"
              >
                lorenzomonti@hotmail.it
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
