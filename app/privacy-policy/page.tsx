import { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Dott. Lorenzo Monti",
  description:
    "Informativa sulla privacy e sul trattamento dei dati personali - Dott. Lorenzo Monti, Chirurgo Ortopedico.",
};

export default function PrivacyPolicyPage() {
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
            <Shield className="size-8" />
          </div>
          <div>
            <h1 className="font-sans text-3xl lg:text-4xl font-bold text-gray-900">
              Informativa sulla Privacy
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
              Gentile Utente, in questa pagina sono descritte le modalità di
              gestione del sito web in riferimento al trattamento dei dati
              personali degli utenti che lo consultano.
            </p>
            <p>
              Si tratta di un&apos;informativa resa ai sensi dell&apos;art. 13
              del Regolamento (UE) 2016/679 (GDPR) relativo alla protezione
              delle persone fisiche con riguardo al trattamento dei dati
              personali. L&apos;informativa è valida esclusivamente per il sito{" "}
              <strong>lorenzomontiortopedico.it</strong> e non per altri siti
              web eventualmente consultati dall&apos;utente tramite link
              esterni.
            </p>
          </section>

          {/* 1. Titolare del Trattamento */}
          <section className="bg-blue-50/30 p-6 rounded-3xl border border-blue-100/50">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              1. Titolare del Trattamento
            </h2>
            <p className="mb-2">
              Il Titolare del Trattamento dei dati personali è:
            </p>
            <ul className="space-y-1 pl-4 border-l-2 border-[#4473bc]">
              <li>
                <strong>Dott. Lorenzo Monti</strong>
              </li>
              <li>Sede: Via San Gerardo 10, 20900 Monza (MB)</li>
              <li>
                E-mail di contatto:{" "}
                <a
                  href="mailto:lorenzomonti@hotmail.it"
                  className="text-[#4473bc] hover:underline"
                >
                  lorenzomonti@hotmail.it
                </a>
              </li>
              <li>Telefono: +39 039 231396</li>
            </ul>
          </section>

          {/* 2. Tipi di Dati Trattati */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              2. Tipi di Dati Trattati e Finalità
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  a) Dati di navigazione
                </h3>
                <p>
                  I sistemi informatici e le procedure software preposte al
                  funzionamento di questo sito web acquisiscono, nel corso del
                  loro normale esercizio, alcuni dati personali la cui
                  trasmissione è implicita nell&apos;uso dei protocolli di
                  comunicazione di Internet (es. indirizzi IP, nomi a dominio
                  dei computer utilizzati dagli utenti, orario della richiesta,
                  ecc.). Questi dati vengono utilizzati al solo fine di ricavare
                  informazioni statistiche anonime sull&apos;uso del sito e per
                  controllarne il corretto funzionamento.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  b) Dati forniti volontariamente dall&apos;utente
                </h3>
                <p>
                  L&apos;invio facoltativo, esplicito e volontario di messaggi
                  di posta elettronica agli indirizzi indicati su questo sito, o
                  eventuali telefonate ai recapiti indicati, comporta la
                  successiva acquisizione dell&apos;indirizzo del mittente,
                  necessario per rispondere alle richieste, nonché degli
                  eventuali altri dati personali inseriti nella missiva.
                </p>
                <p className="mt-2 text-amber-800 bg-amber-50/50 border border-amber-100 rounded-xl p-3.5 text-xs/relaxed">
                  <strong>Nota per i dati sanitari:</strong> In conformità al
                  segreto professionale medico e alle normative sanitarie
                  vigenti, qualsiasi dato clinico o sanitario inviato
                  spontaneamente dall&apos;utente via e-mail sarà trattato con
                  il massimo livello di riservatezza e al solo scopo di fornire
                  la consulenza o le informazioni mediche richieste.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">c) Cookie</h3>
                <p>
                  Questo sito utilizza cookie per facilitare e personalizzare la
                  navigazione. Si invita a fare riferimento alla{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-[#4473bc] hover:underline font-medium"
                  >
                    Cookie Policy
                  </Link>{" "}
                  per ulteriori dettagli.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Base Giuridica */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. Base Giuridica del Trattamento
            </h2>
            <p className="mb-2">
              Il trattamento dei dati si fonda sulle seguenti basi giuridiche:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Consenso dell&apos;interessato</strong> (es. per
                l&apos;uso di cookie facoltativi o l&apos;invio di comunicazioni
                spontanee);
              </li>
              <li>
                <strong>
                  Esecuzione di misure precontrattuali o contrattuali
                </strong>{" "}
                (es. organizzazione di visite mediche, risposta a quesiti
                clinici);
              </li>
              <li>
                <strong>Obbligo di legge</strong> (es. adempimenti contabili e
                fiscali o regolamentari in ambito medico/sanitario).
              </li>
            </ul>
          </section>

          {/* 4. Modalità di Trattamento e Conservazione */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. Modalità di Trattamento e Conservazione dei Dati
            </h2>
            <p className="mb-3">
              Il trattamento viene effettuato mediante strumenti informatici e/o
              cartacei, con modalità organizzative e logiche strettamente
              correlate alle finalità indicate, adottando misure di sicurezza
              idonee a prevenire la perdita dei dati, usi illeciti o non
              corretti ed accessi non autorizzati.
            </p>
            <p>
              I dati personali saranno conservati per il tempo strettamente
              necessario a conseguire gli scopi per cui sono stati raccolti, e
              comunque nel rispetto delle tempistiche di legge per la
              conservazione della documentazione medica o fiscale. I dati di
              navigazione generici vengono cancellati immediatamente dopo
              l&apos;elaborazione (salve eventuali necessità di accertamento di
              reati da parte dell&apos;Autorità giudiziaria).
            </p>
          </section>

          {/* 5. Comunicazione dei Dati */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. Destinatari dei Dati
            </h2>
            <p>
              I dati personali non saranno in alcun modo diffusi o comunicati a
              terzi estranei, salvo nei casi in cui ciò sia strettamente
              necessario per adempiere a obblighi di legge, ordini di autorità
              pubbliche o per lo svolgimento delle attività cliniche e
              amministrative collegate alle richieste dell&apos;utente (es.
              consulenti legali, amministrativi, gestori dei sistemi
              informatici, strutture sanitarie ospitanti).
            </p>
          </section>

          {/* 6. Diritti dell'Interessato */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              6. Diritti dell&apos;Interessato
            </h2>
            <p className="mb-3">
              In ogni momento, l&apos;utente può esercitare i propri diritti nei
              confronti del Titolare del Trattamento, ai sensi degli artt. 15-22
              del Regolamento UE 2016/679:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                <span className="font-semibold text-gray-950 block mb-1">
                  Accesso e Rettifica
                </span>
                <p className="text-xs text-gray-500">
                  Ottenere la conferma dell&apos;esistenza di dati personali che
                  lo riguardano e richiederne la rettifica o integrazione.
                </p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                <span className="font-semibold text-gray-950 block mb-1">
                  Cancellazione (Oblio)
                </span>
                <p className="text-xs text-gray-500">
                  Richiedere la cancellazione dei dati se non più necessari per
                  le finalità o in mancanza di base giuridica.
                </p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                <span className="font-semibold text-gray-950 block mb-1">
                  Limitazione e Opposizione
                </span>
                <p className="text-xs text-gray-500">
                  Chiedere di limitare il trattamento in determinate ipotesi o
                  opporsi al trattamento per motivi legittimi.
                </p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                <span className="font-semibold text-gray-950 block mb-1">
                  Portabilità e Revoca
                </span>
                <p className="text-xs text-gray-500">
                  Ricevere i propri dati in formato strutturato e revocare in
                  qualsiasi momento il consenso precedentemente prestato.
                </p>
              </div>
            </div>
            <p className="mt-4">
              Per esercitare tali diritti, l&apos;utente può inviare una
              richiesta all&apos;indirizzo email:{" "}
              <a
                href="mailto:lorenzomonti@hotmail.it"
                className="text-[#4473bc] hover:underline"
              >
                lorenzomonti@hotmail.it
              </a>
              .
            </p>
            <p className="mt-2 text-xs text-gray-500">
              L&apos;interessato ha inoltre il diritto di proporre reclamo
              all&apos;Autorità Garante per la Protezione dei Dati Personali (
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4473bc] hover:underline"
              >
                www.garanteprivacy.it
              </a>
              ).
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
