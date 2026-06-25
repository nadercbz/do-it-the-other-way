export type Category = "finance" | "health" | "career" | "society";

export interface Narrative {
  id: string;
  category: Category;
  mainstream: {
    headline: string;
    body: string;
    voices: string[];
  };
  contrarian: {
    headline: string;
    body: string;
    voices: string[];
  };
  updated: string;
}

export const categoryMeta: Record<Category, { label: string; labelDark: string; emoji: string }> = {
  finance: { label: "Finanzen", labelDark: "Geld", emoji: "₿" },
  health: { label: "Gesundheit", labelDark: "Körper", emoji: "✚" },
  career: { label: "Karriere", labelDark: "Arbeit", emoji: "✦" },
  society: { label: "Gesellschaft", labelDark: "System", emoji: "△" },
};

export const narratives: Narrative[] = [
  {
    id: "fin-save",
    category: "finance",
    mainstream: {
      headline: "Spare 20 Prozent deines Einkommens. Jeden Monat.",
      body: "Sicherheit zuerst. Notgroschen aufbauen, Tagesgeldkonto, langfristig Vermögen schaffen. So machen es alle vernünftigen Menschen.",
      voices: ["Verbraucherzentrale", "Stiftung Warentest", "Tagesschau Ratgeber"],
    },
    contrarian: {
      headline: "Sparen ist garantierter Verlust. Investiere alles oder verbrenn es.",
      body: "Bei realer Inflation von 6 bis 8 Prozent verliert jeder gesparte Euro Kaufkraft. Cash ist die teuerste Anlageklasse. Investiere in Skills, Assets oder Erlebnisse. Geld auf der Bank ist Geld an die Bank.",
      voices: ["Robert Kiyosaki", "Naval Ravikant", "Crypto Twitter"],
    },
    updated: "2026-06-20",
  },
  {
    id: "fin-etf",
    category: "finance",
    mainstream: {
      headline: "ETF Sparplan. Breit gestreut. Niemals verkaufen.",
      body: "MSCI World, 25 Euro pro Monat, Zeit im Markt schlägt Market Timing. Der heilige Gral der deutschen Finanzbildung.",
      voices: ["Finanzfluss", "Gerd Kommer", "Reddit Finanzen"],
    },
    contrarian: {
      headline: "Der MSCI World ist ein Tech Klumpenrisiko mit Marketing.",
      body: "70 Prozent USA, 25 Prozent Tech, alles dollarbasiert. Du kaufst keine Diversifikation, du kaufst Apple, Microsoft, Nvidia in einer hübschen Verpackung. Konzentrierte Wetten auf das was du wirklich verstehst, schlagen Streuung in dem was du nie analysierst.",
      voices: ["Stanley Druckenmiller", "Concentrated Investors", "Buffett vor 1990"],
    },
    updated: "2026-06-22",
  },
  {
    id: "fin-house",
    category: "finance",
    mainstream: {
      headline: "Eigenheim ist Altersvorsorge. Mieten ist rausgeschmissenes Geld.",
      body: "Eine eigene Immobilie ist der Klassiker. Schutz vor Mieterhöhung, Steuerersparnis, Sicherheit für die Familie.",
      voices: ["LBS", "Immowelt", "Eltern"],
    },
    contrarian: {
      headline: "Dein Haus ist eine Verbindlichkeit, die du Asset nennst.",
      body: "Zinsen, Instandhaltung, Grundsteuer, Nebenkosten, Opportunitätskosten. Über 30 Jahre zahlst du das Haus zweimal. Mieten ist Kosten für Flexibilität. In einer Welt, in der sich Jobs alle 5 Jahre verschieben, ist Mobilität die teuerste Währung.",
      voices: ["Robert Shiller", "Ramit Sethi", "Nomaden Investoren"],
    },
    updated: "2026-06-15",
  },
  {
    id: "fin-debt",
    category: "finance",
    mainstream: {
      headline: "Schulden machen ist gefährlich. Lebe schuldenfrei.",
      body: "Konsum nur was du dir leisten kannst. Kein Dispokredit, keine Ratenzahlung, Schulden sind das Gegenteil von Wohlstand.",
      voices: ["Schuldnerberatung", "Familienkonsens", "Boomer Ratgeber"],
    },
    contrarian: {
      headline: "Reiche Menschen leben auf Krediten. Cash bezahlen die Armen.",
      body: "Günstige Schulden gegen produktive Assets sind das mächtigste Werkzeug überhaupt. Hebel auf Wachstum, Inflationsverlierer wird die Bank, Steuerstundung. Wer keine Schulden hat, wird einfach nur langsamer enteignet.",
      voices: ["Family Offices", "Real Estate Investoren", "Tax Strategie"],
    },
    updated: "2026-06-18",
  },
  {
    id: "fin-crypto",
    category: "finance",
    mainstream: {
      headline: "Krypto ist Spekulation. Finger weg.",
      body: "Volatil, ungeregelt, dient Kriminellen und Spekulanten. Keine reale Substanz, kein Cashflow, reine Wette.",
      voices: ["BaFin", "Sparkassen", "Bundesbank"],
    },
    contrarian: {
      headline: "Bitcoin ist der einzige Vermögensschutz der nicht enteignet werden kann.",
      body: "Nationalstaaten drucken Geld. Banken frieren Konten ein. Bitcoin ist das erste digital knappe Asset der Menschheit. Wer Bitcoin nicht hält, wettet darauf, dass Politiker plötzlich diszipliniert werden.",
      voices: ["Michael Saylor", "Lyn Alden", "Cypherpunks"],
    },
    updated: "2026-06-23",
  },
  {
    id: "fin-frugal",
    category: "finance",
    mainstream: {
      headline: "Latte Faktor. Spare am Kaffee, werde reich.",
      body: "Jeder kleine Konsum summiert sich. Verzichte auf den teuren Cappuccino, leg das Geld an, in 30 Jahren bist du Millionär.",
      voices: ["Klassische Finanzratgeber", "Suze Orman", "Spartipps Blogs"],
    },
    contrarian: {
      headline: "Niemand wurde reich, indem er am Kaffee gespart hat. Spare an deinem Einkommen, nicht am Konsum.",
      body: "Drei Euro pro Tag macht in 30 Jahren keinen Unterschied. Ein einziger Karrieresprung von 60k auf 90k macht ihn. Konzentriere dich auf Hebel, nicht auf Verzicht.",
      voices: ["Ramit Sethi", "MJ DeMarco", "Earner Mindset"],
    },
    updated: "2026-06-10",
  },
  {
    id: "fin-retire",
    category: "finance",
    mainstream: {
      headline: "Mit 67 in Rente. Bis dahin arbeiten.",
      body: "Gesetzliche Rente plus betriebliche Vorsorge plus Riester. Das deutsche Drei Säulen Modell. Verlässlich. Geplant. Erwachsen.",
      voices: ["Bundesregierung", "Deutsche Rentenversicherung", "DGB"],
    },
    contrarian: {
      headline: "Die Rente kommt nicht. Plane mit Null.",
      body: "Demographie killt das Umlagesystem. Riester ist eine Provisionsmaschine. Wer auf den Staat wartet, wartet auf den Bankrott. Baue Cashflow Assets oder akzeptiere Altersarmut.",
      voices: ["Demographie Ökonomen", "FIRE Bewegung", "Private Equity"],
    },
    updated: "2026-06-19",
  },
  {
    id: "fin-gold",
    category: "finance",
    mainstream: {
      headline: "Gold ist Krisenwährung. Halte 10 Prozent im Depot.",
      body: "Seit Jahrtausenden Wertspeicher. Schutz vor Inflation. Was die Großeltern schon wussten.",
      voices: ["Pro Aurum", "Krisenbücher", "Boomer"],
    },
    contrarian: {
      headline: "Gold ist ein nutzloses Metall mit guter PR.",
      body: "Kein Cashflow, kein Wachstum, schwer zu transportieren, leicht zu beschlagnahmen. In Krisen wird Gold immer wieder verboten, eingezogen oder steuerlich enteignet. Bitcoin oder produktive Assets schlagen Gold jeden langen Zeitraum.",
      voices: ["Bitcoiner", "Warren Buffett 2020", "Moderne Asset Allocator"],
    },
    updated: "2026-06-12",
  },
  {
    id: "fin-side",
    category: "finance",
    mainstream: {
      headline: "Ein sicherer Vollzeitjob ist die beste Strategie.",
      body: "Festanstellung, Tarif, Urlaubsanspruch, Kündigungsschutz. Das deutsche Modell für ein stabiles Leben.",
      voices: ["Gewerkschaften", "Eltern", "Personalabteilungen"],
    },
    contrarian: {
      headline: "Ein einziger Arbeitgeber ist das größte Klumpenrisiko deines Lebens.",
      body: "100 Prozent Einkommen aus einer Quelle, die dich morgen entlassen kann. Baue mehrere Einkommensströme. Side Business, digitale Produkte, Equity. Diversifiziere dein Einkommen, nicht nur dein Depot.",
      voices: ["Solopreneurs", "Pieter Levels", "Indie Hacker"],
    },
    updated: "2026-06-21",
  },
  {
    id: "fin-tax",
    category: "finance",
    mainstream: {
      headline: "Steuern zahlen ist Bürgerpflicht. Optimierung ist unmoralisch.",
      body: "Wer in Deutschland lebt, zahlt seinen Anteil. Steuersparmodelle sind etwas für Konzerne und Sozialschmarotzer.",
      voices: ["Tagesschau", "Politik Mainstream", "Mehrheitsgesellschaft"],
    },
    contrarian: {
      headline: "Wer Steuern nicht legal optimiert, finanziert die Inkompetenz anderer.",
      body: "Holding Strukturen, Familiengesellschaften, EU Strukturen sind legal verfügbar. Der Staat schreibt die Regeln, du spielst nach den Regeln. Nicht optimieren ist Faulheit, kein Anstand.",
      voices: ["Steuerberater", "Family Offices", "Ausgewanderte"],
    },
    updated: "2026-06-14",
  },

  {
    id: "hlt-veggie",
    category: "health",
    mainstream: {
      headline: "Iss mehr Pflanzen. Reduziere Fleisch.",
      body: "Pflanzenbasiert ist gesund und klimafreundlich. Vollkorn, Hülsenfrüchte, Gemüse, wenig rotes Fleisch. So lebst du länger.",
      voices: ["DGE", "WHO", "Tagesschau Wissen"],
    },
    contrarian: {
      headline: "Carnivore. Rotes Fleisch, Butter, Eier. Sonst nichts.",
      body: "Pflanzen enthalten Antinutrients, Lektine, Oxalate. Die meisten chronischen Krankheiten begannen mit der industriellen Landwirtschaft. Iss wie deine Urgroßeltern, nicht wie ein Marketing Plakat.",
      voices: ["Shawn Baker", "Jordan Peterson", "Carnivore Community"],
    },
    updated: "2026-06-20",
  },
  {
    id: "hlt-cardio",
    category: "health",
    mainstream: {
      headline: "30 Minuten Cardio am Tag. Joggen hält jung.",
      body: "Ausdauer ist der Schlüssel zu Langlebigkeit. Laufen, Radfahren, Schwimmen. So wie es die WHO empfiehlt.",
      voices: ["WHO", "Hausärzte", "Fitness Tracker"],
    },
    contrarian: {
      headline: "Krafttraining schlägt Cardio in jeder Lebensphase.",
      body: "Muskelmasse ist der größte Prädiktor für Langlebigkeit nach 40. Cardio verbrennt Muskeln, Krafttraining baut sie auf. Stark sein ist die beste Vorsorge.",
      voices: ["Peter Attia", "Andy Galpin", "Strength Coaches"],
    },
    updated: "2026-06-22",
  },
  {
    id: "hlt-sun",
    category: "health",
    mainstream: {
      headline: "Sonne ist gefährlich. Immer Sonnencreme.",
      body: "UV Strahlung verursacht Hautkrebs. LSF 50 ab dem ersten Sonnenstrahl. Mittagssonne meiden.",
      voices: ["Dermatologen", "Krebshilfe", "Hautärzte"],
    },
    contrarian: {
      headline: "Sonne meiden ist der größte Vitamin D Skandal des Jahrhunderts.",
      body: "Vitamin D Mangel ist mit fast jeder chronischen Krankheit korreliert. Sonnencreme blockiert die Vitamin D Synthese. Moderate Sonne am Morgen und Abend ist Medizin, nicht Risiko.",
      voices: ["Andrew Huberman", "Funktionsmediziner", "Solar Studien"],
    },
    updated: "2026-06-17",
  },
  {
    id: "hlt-fat",
    category: "health",
    mainstream: {
      headline: "Fett macht fett. Iss fettarm.",
      body: "Magerquark, fettarme Milch, weniger Butter. So bleibt das Herz gesund. Die offizielle Ernährungspyramide.",
      voices: ["DGE", "Cholesterin Leitlinien", "Hausärzte"],
    },
    contrarian: {
      headline: "Fett ist Sättigung, Zucker ist das Gift. Iss Butter, vermeide Brot.",
      body: "Die Fett Hypothese der 70er war ein Marketing Erfolg der Zuckerindustrie. Gesunde Fette sind essentiell für Hormone, Hirn, Hormonsystem. Low Carb High Fat schlägt jede Ernährungspyramide.",
      voices: ["Gary Taubes", "Nina Teicholz", "Keto Ärzte"],
    },
    updated: "2026-06-16",
  },
  {
    id: "hlt-meds",
    category: "health",
    mainstream: {
      headline: "Vertraue deinem Arzt. Nimm deine Medikamente.",
      body: "Moderne Medizin rettet Leben. Statine, Blutdrucksenker, Antidepressiva sind getestet und sicher. Selbstmedikation ist gefährlich.",
      voices: ["Ärztekammer", "Pharma Studien", "Apotheker"],
    },
    contrarian: {
      headline: "Die meisten chronischen Medikamente behandeln Symptome, nicht Ursachen.",
      body: "Statine senken Cholesterin, aber nicht Mortalität. Antidepressiva schlagen Placebo nur leicht. Schlaf, Bewegung, Sonne, Ernährung sind wirksamer und ohne Nebenwirkungen. Wer nur Pillen nimmt, kuriert nie.",
      voices: ["Functional Medicine", "Aseem Malhotra", "Lifestyle Medizin"],
    },
    updated: "2026-06-18",
  },
  {
    id: "hlt-meals",
    category: "health",
    mainstream: {
      headline: "Drei Mahlzeiten am Tag. Frühstück ist die wichtigste.",
      body: "Regelmäßig essen hält den Blutzucker stabil. Ohne Frühstück kein Tag. So lernen es die Kinder in der Schule.",
      voices: ["Ernährungsberater", "Müsli Industrie", "Mama"],
    },
    contrarian: {
      headline: "Frühstück ist eine Marketing Erfindung von Kellogg. Intermittierendes Fasten ist natürlich.",
      body: "Der Mensch hat 200.000 Jahre gefastet. Konstant essen produziert Insulin Resistenz. 16 bis 18 Stunden Pause täglich aktivieren Autophagie, Wachstumshormone und Fettverbrennung.",
      voices: ["Jason Fung", "Valter Longo", "Fasten Community"],
    },
    updated: "2026-06-19",
  },
  {
    id: "hlt-mental",
    category: "health",
    mainstream: {
      headline: "Psychische Gesundheit braucht Therapie und Medikamente.",
      body: "Depression ist eine chemische Imbalance. Geh zum Psychiater, nimm SSRI, mache Verhaltenstherapie.",
      voices: ["DGPPN", "Krankenkassen", "Standard Psychiatrie"],
    },
    contrarian: {
      headline: "Die meisten mentalen Probleme sind Lifestyle Probleme, keine Krankheiten.",
      body: "Schlafentzug, Bildschirmzeit, Bewegungsmangel, schlechte Ernährung, fehlende Sonne, soziale Isolation. Behebe das zuerst. Wer SSRI bekommt, ohne Lifestyle zu adressieren, behandelt das falsche Problem.",
      voices: ["Andrew Huberman", "Rhonda Patrick", "Lifestyle Psychiatry"],
    },
    updated: "2026-06-21",
  },

  {
    id: "car-uni",
    category: "career",
    mainstream: {
      headline: "Studieren ist der sicherste Weg.",
      body: "Bachelor, Master, vielleicht Promotion. Ein Abschluss öffnet Türen. Das sagen Eltern, Lehrer und der Arbeitsmarkt seit 40 Jahren.",
      voices: ["Schulen", "BMBF", "Eltern"],
    },
    contrarian: {
      headline: "Die Uni ist ein 5 Jahre langes Statusritual. Skills baut man woanders.",
      body: "Programmieren, Vertrieb, Marketing, Kreativität lernst du in einem Jahr Praxis besser als in fünf Jahren Theorie. Tausende verdienen mit 25 sechsstellig ohne Abschluss. Diplom ist Versicherung für die Risikoaversen.",
      voices: ["Tech Founder", "Peter Thiel", "Self Educated"],
    },
    updated: "2026-06-20",
  },
  {
    id: "car-911",
    category: "career",
    mainstream: {
      headline: "9 to 5 ist normal. Work Life Balance ist heilig.",
      body: "Acht Stunden Arbeit, acht Stunden Freizeit, acht Stunden Schlaf. Feierabend ist Feierabend. So funktioniert ein gesundes Leben.",
      voices: ["DGB", "HR Trends", "Boomer Generation"],
    },
    contrarian: {
      headline: "Work Life Balance ist Cope für Menschen mit Jobs, die sie nicht lieben.",
      body: "Wer sein Werk liebt, trennt nicht zwischen Arbeit und Leben. Die Top 1 Prozent arbeiten 70 plus Stunden, nicht aus Pflicht, sondern aus Besessenheit. Balance ist Mittelmaß in beiden Welten.",
      voices: ["Naval Ravikant", "Founder Mode", "Elite Athleten"],
    },
    updated: "2026-06-22",
  },
  {
    id: "car-stable",
    category: "career",
    mainstream: {
      headline: "Bleib in deinem Unternehmen. Karriere baut man intern.",
      body: "Loyalität wird belohnt. Wer 10 Jahre dabei bleibt, wird Abteilungsleiter. So macht man das in Deutschland.",
      voices: ["HR Abteilungen", "Mittelstand", "Karriereberater 90er"],
    },
    contrarian: {
      headline: "Wechsle alle 2 Jahre. Sonst verlierst du 30 Prozent Gehalt.",
      body: "Interne Gehaltserhöhungen sind 3 Prozent. Jobwechsel bringen 15 bis 30 Prozent. Loyalität ist ein Geschenk an dein Unternehmen, das nicht zurückgegeben wird.",
      voices: ["LinkedIn Influencer", "Tech Recruiter", "Gen Z"],
    },
    updated: "2026-06-19",
  },
  {
    id: "car-net",
    category: "career",
    mainstream: {
      headline: "Bewerbung mit Lebenslauf und Anschreiben. Über Stellenportale.",
      body: "Saubere Unterlagen, ordentliches Foto, klassischer Bewerbungsprozess. So findet man eine Stelle.",
      voices: ["Arbeitsagentur", "Karriereratgeber", "StepStone"],
    },
    contrarian: {
      headline: "Wer sich klassisch bewirbt, gehört zur Verliererklasse.",
      body: "Die besten Jobs werden nie ausgeschrieben. Direkte Kontakte, Cold DMs, ein öffentliches Portfolio im Internet schlagen jede Bewerbung. Wer Lebensläufe sendet, konkurriert gegen 200 andere Bewerber.",
      voices: ["Building in Public", "Twitter Hiring", "Solopreneurs"],
    },
    updated: "2026-06-18",
  },
  {
    id: "car-ai",
    category: "career",
    mainstream: {
      headline: "KI ergänzt deine Arbeit. Lerne damit umzugehen.",
      body: "ChatGPT als Assistent, Copilot beim Coden. Bleib im Job, nutze die Tools. So überlebst du den Wandel.",
      voices: ["Mainstream Medien", "Unternehmensberatung", "LinkedIn Influencer"],
    },
    contrarian: {
      headline: "KI ersetzt deinen Job. Bau Agenten, nicht Karriere.",
      body: "In 5 Jahren werden 40 Prozent der Wissensjobs überflüssig. Wer KI bedient statt baut, ist auf der Seite der Ersetzten. Lerne Systeme zu orchestrieren, nicht Prompts zu schreiben.",
      voices: ["Sam Altman", "AI Builder", "Agent Engineers"],
    },
    updated: "2026-06-23",
  },
  {
    id: "car-passion",
    category: "career",
    mainstream: {
      headline: "Follow your passion. Tu was du liebst.",
      body: "Geld ist nicht alles. Wer macht was er liebt, ist erfolgreich. Mach dein Hobby zum Beruf.",
      voices: ["Steve Jobs Rede", "TED Talks", "Karrierecoaches"],
    },
    contrarian: {
      headline: "Folge der Nachfrage, nicht der Leidenschaft. Leidenschaft kommt vom Können.",
      body: "Die meisten passionierten Berufe sind unterbezahlt, weil zu viele es wollen. Werde gut in etwas Wertvollem und Seltenem, die Leidenschaft folgt der Kompetenz.",
      voices: ["Cal Newport", "Scott Galloway", "Skill Stacking"],
    },
    updated: "2026-06-17",
  },
  {
    id: "car-remote",
    category: "career",
    mainstream: {
      headline: "Zurück ins Büro. Hybrid ist das Optimum.",
      body: "Persönlicher Austausch fördert Innovation. Drei Tage Büro, zwei Tage Home Office. So entsteht Kultur.",
      voices: ["DAX CEOs", "FAZ Wirtschaft", "Goldman Sachs"],
    },
    contrarian: {
      headline: "Büropflicht ist Kontrollverlust Management mit besserer PR.",
      body: "Niemand ist im Büro produktiver. Studien zeigen Remote bringt mehr Output. Office Mandate sind nichts als versteckte Kündigungen für ältere Mitarbeiter mit Pendelweg.",
      voices: ["Remote First Companies", "Cal Newport", "Async Advocates"],
    },
    updated: "2026-06-16",
  },

  {
    id: "soc-news",
    category: "society",
    mainstream: {
      headline: "Informiere dich. Nachrichten gehören zum mündigen Bürger.",
      body: "Tagesschau, Spiegel, FAZ. Drei seriöse Quellen am Tag. Demokratie braucht informierte Bürger.",
      voices: ["ÖRR", "Bildungsbürgertum", "Lehrer"],
    },
    contrarian: {
      headline: "Nachrichten machen dich dümmer, ängstlicher und passiver.",
      body: "Nachrichten optimieren auf Aufmerksamkeit, nicht Wahrheit. Über Dinge, die du nicht beeinflussen kannst. 99 Prozent davon vergisst du in einer Woche. Lies Bücher und Primärquellen, schalte News aus.",
      voices: ["Rolf Dobelli", "Nassim Taleb", "Information Diet"],
    },
    updated: "2026-06-20",
  },
  {
    id: "soc-climate",
    category: "society",
    mainstream: {
      headline: "Klimakatastrophe. Persönlicher Verzicht ist die Lösung.",
      body: "Weniger Fleisch, weniger Fliegen, weniger Auto. Jeder muss bei sich anfangen. Das Klima entscheidet sich an deinem Konsum.",
      voices: ["Tagesschau", "Fridays for Future", "Greenpeace"],
    },
    contrarian: {
      headline: "Individuelle Schuld ist die größte PR Kampagne der Konzerne.",
      body: "100 Konzerne verursachen 70 Prozent der Emissionen. Persönlicher Verzicht ist Ablasshandel ohne messbaren Effekt. Politische und technische Lösungen wirken, Bio Quark nicht.",
      voices: ["Bjorn Lomborg", "Klimaökonomen", "Tech Optimisten"],
    },
    updated: "2026-06-21",
  },
  {
    id: "soc-social",
    category: "society",
    mainstream: {
      headline: "Social Media ist schädlich. Reduziere Bildschirmzeit.",
      body: "Instagram macht depressiv, TikTok dumm, Smartphones zerstören Kinder. Geh raus, leg das Handy weg.",
      voices: ["Jonathan Haidt", "Mainstream Medien", "Pädagogen"],
    },
    contrarian: {
      headline: "Soziale Medien sind die größte Chancenverteilung der Menschheitsgeschichte.",
      body: "Wer 2026 Reichweite aufbaut, baut Vermögen. Wer Kinder ohne digitale Kompetenz lässt, behindert sie. Bildschirm ist nicht das Problem, Konsum statt Kreation ist es.",
      voices: ["Gary Vee", "Creator Economy", "Mr Beast Generation"],
    },
    updated: "2026-06-22",
  },
  {
    id: "soc-marriage",
    category: "society",
    mainstream: {
      headline: "Heiraten, Haus, Kinder. Der erfüllte Lebensweg.",
      body: "Familie ist Sinn, Beziehung ist Anker. Das traditionelle Modell hat sich bewährt, auch wenn es altmodisch klingt.",
      voices: ["Mehrheitsgesellschaft", "Konservative Medien", "Eltern Generation"],
    },
    contrarian: {
      headline: "Ehe ist ein staatlich regulierter Vertrag mit miserablen Ausstiegsklauseln.",
      body: "50 Prozent Scheidungsquote, finanzielle Vermischung, juristisches Minenfeld. Liebe und Partnerschaft brauchen kein Standesamt. Wer wirklich frei lieben will, unterschreibt keinen Vertrag mit dem Staat.",
      voices: ["Single Choice Bewegung", "Childfree Community", "Männerrechtler"],
    },
    updated: "2026-06-18",
  },
  {
    id: "soc-school",
    category: "society",
    mainstream: {
      headline: "Schule bereitet auf das Leben vor. Schulpflicht ist gut.",
      body: "Bildung für alle, gleiche Chancen, sozialer Ausgleich. Das deutsche Schulsystem ist nicht perfekt, aber notwendig.",
      voices: ["KMK", "Lehrerverbände", "SPD"],
    },
    contrarian: {
      headline: "Schule bereitet auf Fabrikarbeit von 1900 vor, nicht auf 2026.",
      body: "Sitzen, gehorchen, auswendig lernen, getestet werden. Skills von 1880 in einer Welt, in der LLMs alles wissen. Homeschooling, Unschooling, Skill Based Learning wären besser, aber illegal in Deutschland.",
      voices: ["John Taylor Gatto", "Sudbury Schools", "Unschooler"],
    },
    updated: "2026-06-15",
  },
  {
    id: "soc-democracy",
    category: "society",
    mainstream: {
      headline: "Demokratie ist die beste Staatsform. Schütze sie.",
      body: "Wählen gehen, Parteien stärken, Kompromisse schließen. So funktioniert ein freies Land.",
      voices: ["Bundeszentrale für politische Bildung", "Tagesschau", "Verfassungsschutz"],
    },
    contrarian: {
      headline: "Du wirst nicht regiert von Politikern. Du wirst regiert von Bürokratie und Lobbys.",
      body: "Wähler entscheiden nichts Substantielles. EU Verordnungen, Ministerialbürokratie, Konzernlobbys schreiben die Regeln. Demokratie ist Theater, echte Macht liegt in unsichtbaren Strukturen.",
      voices: ["Public Choice Theory", "David Graeber", "Bürokratie Kritiker"],
    },
    updated: "2026-06-17",
  },
  {
    id: "soc-eu",
    category: "society",
    mainstream: {
      headline: "EU schützt uns. Brüssel sorgt für Frieden und Wohlstand.",
      body: "Vier Freiheiten, gemeinsamer Markt, Verteidigung gegen China und Russland. Ohne EU wäre Deutschland kleiner und unsicherer.",
      voices: ["EU Kommission", "Volksparteien", "DGB"],
    },
    contrarian: {
      headline: "Die EU ist eine Regulierungsmaschine, die jede Innovation in Europa abwürgt.",
      body: "Cookie Banner, DSGVO Wahnsinn, KI Verordnung. Während USA Tech Unternehmen baut und China Industrie skaliert, schreibt Brüssel Vorschriften. Europa fällt zurück, nicht trotz, sondern wegen der EU.",
      voices: ["Tech Founder Europa", "Silicon Valley", "Wirtschaftsliberale"],
    },
    updated: "2026-06-23",
  },
  {
    id: "soc-success",
    category: "society",
    mainstream: {
      headline: "Bescheidenheit ist eine Tugend. Stapel tief.",
      body: "Wer wirklich erfolgreich ist, muss es nicht zeigen. Understatement, Demut, leise auftreten. So lebt man in Deutschland.",
      voices: ["Mittelstand", "Adel", "Kulturelle Norm"],
    },
    contrarian: {
      headline: "Sichtbarkeit ist heute Voraussetzung für Erfolg. Wer nicht zeigt, existiert nicht.",
      body: "Personal Brand, öffentliches Building, lautes Senden ist nicht Eitelkeit, sondern Strategie. Die deutsche Bescheidenheitskultur ist Erfolgsverhinderung mit Tradition.",
      voices: ["Creator Economy", "US Mindset", "Founder Twitter"],
    },
    updated: "2026-06-19",
  },
];
