/* Cliptag landing — full translations (6 languages).
   Ported verbatim from the design handover (cliptag-i18n.js) into an ES module.
   English ('en') is the canonical/fallback locale. */
const FEAT3: Record<string, string[]> = {
    en: ['AI tagging & scenes', 'A-roll transcription', 'NSFW filter (local)', 'Local mode: free & unlimited'],
    de: ['KI-Tagging & Szenen', 'A-Roll Transkription', 'NSFW-Filter (lokal)', 'Lokal-Modus: gratis & unbegrenzt'],
    fr: ['Tagging IA & scènes', 'Transcription A-roll', 'Filtre NSFW (local)', 'Mode local : gratuit et illimité'],
    es: ['Etiquetado IA y escenas', 'Transcripción A-roll', 'Filtro NSFW (local)', 'Modo local: gratis e ilimitado'],
    pt: ['Tags de IA e cenas', 'Transcrição A-roll', 'Filtro NSFW (local)', 'Modo local: grátis e ilimitado'],
    it: ['Tagging IA e scene', 'Trascrizione A-roll', 'Filtro NSFW (locale)', 'Modalità locale: gratis e illimitata']
  };

export const I18N: Record<string, any> = {
    en: {
      nav_ki: 'AI', nav_pricing: 'Pricing', nav_faq: 'FAQ', nav_signin: 'Sign in', nav_download: 'Download free',
      hero_title1: 'Cliptag sorts your videos.', hero_title2: 'You keep your flow.',
      hero_sub_pre: 'Done with', hero_sub_post: '. Cliptag names, tags and sorts your footage automatically. You jump straight into editing.',
      hero_cta_primary: 'Download for Mac', hero_cta_secondary: 'How it works',
      hero_fineprint: 'Free for 25 clips a month. No payment details needed.',
      feat_h2: 'Everything sorted, automatically', feat_sub: 'The second you drop in a folder.',
      how_h2: 'Hands you back an edit-ready library.',
      ki_eyebrow: 'HOW THE AI RECOGNITION WORKS',
      price_h2: 'Simple plans, fair credits',
      bill_monthly: 'Monthly', bill_yearly: 'Yearly', bill_badge: '2 months free',
      faq_h2: 'Frequently asked questions', faq_sub: 'Everything to know before your first folder.',
      cta_h2: 'Ready to keep your flow?', cta_p: 'Download Cliptag and sort your first folder in minutes.',
      footer_privacy: 'Privacy', footer_terms: 'Terms',
      f1_title: 'Naming that makes sense', f1_desc: 'Title, scene, subject and motion, right in the filename. Looking for the pyramids clip among 300 files? Titles and tags surface it instantly.',
      f2_title: 'Private when needed', f2_desc: 'Sensitive material? Local mode analyzes fully offline on your Mac. Nothing leaves the device.', f2_badge: 'Works offline',
      f3_title: 'Smart folders', f3_desc: 'Clips move automatically into tag and scene folders.', f3_tree1: 'Day 1 / 01 Trip Start', f3_tree2: 'Day 1 / 02 Skyline',
      f4_title: 'Finder tags & labels', f4_desc: 'Roles and weak shots land as Finder labels, instantly filterable.', f4_chip_review: 'Review',
      f5_title: 'Spots weak shots', f5_desc: 'Cliptag checks every clip automatically and flags what you should look at again before editing.',
      badge_shaky: 'Shaky', badge_blurry: 'Blurry', badge_clean: 'Clean',
      ki_h2a: 'Understands your footage,', ki_h2b: 'not just the file.',
      ki_p: 'Cliptag recognizes scenes, subjects and spoken language, what actually happens in the clip, and translates it into your naming system. Top precision via the cloud, plus an optional local mode for material that should not leave your Mac.',
      ki_c1_badge: 'RECOMMENDED', ki_c1_title: 'Cloud analysis', ki_c1_p: 'Maximum accuracy down to the detail. Recognizes the specific instead of just "a fish". Footage goes encrypted for analysis and is not stored.',
      ki_c2_badge: 'PRIVATE', ki_c2_title: 'Local mode', ki_c2_p: 'Runs entirely on your Mac, nothing leaves the device. Recognition is a bit coarser, but it is the safe choice for sensitive material.',
      price_sub: 'Billed monthly, unused credits partly roll over. Pay yearly and save two months.',
      rollover_label: 'Rollover buffer:', rollover_rest: ' unused clips do not expire right away. Creator collects up to 1,000 (2×), Pro up to 6,000 (3×). In a project month you simply draw from the buffer.',
      langs_note: 'Every plan includes the full AI, local mode, Finder integration and 6 languages',
      plan_badge: 'Most popular',
      mock_title_tpl: 'Analyzing {n} clips', mock_count_tpl: '{d} / {t} clips', mock_sub: 'Recognizes scenes, subjects & spoken language', mock_wait: 'Queued',
      toast_text: 'This is a preview. Download Cliptag for Mac to sort your own clips.',
      aiCaps: ['Scene detection', 'Subjects & objects', 'Language for naming', 'NSFW filter'],
      steps: [
        { title: 'Drop in clips', body: 'Drag a folder from an SD card or drive into Cliptag.' },
        { title: 'AI does the work', body: 'Title, scene, role, tags and technical specs, per clip.' },
        { title: 'Done', body: 'Named folders with Finder tags. Edit-ready.' }
      ],
      demoCaps: ['Detecting scene · Sunset', 'Reading environment · Indoor', 'Finding subjects · Underwater', 'Transcribing speech…', 'Detecting motion · Slow-mo'],
      demoTitles: ['Skyline Sunset — Aerial Reveal', 'Bangkok Departure — Handheld', 'Reef Dive — POV Action', 'Studio Interview — A-roll', 'Surf Lineup — Long Lens'],
      demoTags: [['Drone','Golden Hour','Cityscape'], ['Travel','Indoor','Daytime'], ['Underwater','POV','Wide'], ['Interview','Studio','Talking Head'], ['Ocean','Slow-mo','Telephoto']],
      plans: [
        { cta: 'Start free', clipsNum: '25 clips', clipsUnit: '/ per month', per: '', billedM: 'forever', billedY: 'forever', feats: FEAT3.en.concat(['Rollover buffer']) },
        { cta: 'Choose Creator', clipsNum: '500 clips', clipsUnit: '/ per month', per: '/mo', billedM: 'billed monthly', billedY: '$79/yr billed', feats: FEAT3.en.concat(['Rollover up to 1,000 clips']) },
        { cta: 'Choose Pro', clipsNum: '2,000 clips', clipsUnit: '/ per month', per: '/mo', billedM: 'billed monthly', billedY: '$159/yr billed', feats: FEAT3.en.concat(['Rollover up to 6,000 clips']) },
        { cta: 'Choose Studio', clipsNum: '10,000 clips', clipsUnit: '/ per month', per: '/mo', billedM: 'billed monthly', billedY: '$399/yr billed', feats: FEAT3.en.concat(['Everything in Pro', 'Highest cloud volume']) }
      ],
      faq: [
        ['Can I use Cliptag for free?', 'Yes. The Free plan includes 25 AI clips per month, with no payment details. When you need more volume, you switch to a paid plan anytime.'],
        ['How does Cliptag work?', 'You drag a folder into Cliptag. The AI recognizes scenes, subjects and spoken language, names and tags every clip and sorts everything into folders. In the end you place the edit-ready library on your drive.'],
        ['Can I use Cliptag locally?', 'Yes. Local mode analyzes fully offline on your Mac, nothing leaves the device. Recognition is a bit coarser than in the cloud, but sensitive footage stays private.'],
        ['What are the requirements for the local mode?', 'The local mode runs on Apple Silicon (M1 or newer). We recommend at least 16 GB of unified memory and around 10 GB of free disk space for the on-device model; the more memory, the faster and more accurate it runs. Cliptag uses the Apple Silicon GPU and Neural Engine. On older Intel Macs the local mode is limited or unavailable, so the cloud is the better choice there.'],
        ['Is there a Windows and Linux version?', 'Right now Cliptag runs on macOS only. Windows and Linux versions are in development and hopefully available soon.'],
        ['Can I cancel my plan?', 'Monthly plans can be cancelled anytime to the end of the billing month, no lock-in. Yearly plans run until the end of the paid term and are not refunded pro rata. The details are in the Terms.'],
        ['Does it work with photos too?', 'Right now Cliptag processes video clips. We are already working on a solution for photos.'],
        ['Are my videos stored in the cloud?', 'No. In cloud analysis your footage goes encrypted for processing and is not stored. If you want to stay fully offline, use local mode.'],
        ['Is anything deleted when moving or renaming?', 'No, never. Cliptag names and sorts, but deletes nothing. When you move clips from an SD card or external drive into a new directory, they are copied there; the original stays until the transfer is safely complete. If space runs out, you get a notice first. If the connection drops by accident, nothing is lost and you simply restart the transfer. When you move within the same drive, only the location changes, instantly and without a copy.'],
        ['Can I undo the naming and sorting?', 'Yes, within the running session you undo any action with one click. Once you close Cliptag the session ends and an automatic reset is no longer possible. So you can always trace what went where, Cliptag writes a log file (JSON) for every action that lets you reconstruct the original names and folders.'],
        ['Which languages does Cliptag support?', 'Cliptag supports German, English, French, Spanish, Portuguese and Italian.']
      ]
    },

    de: {
      nav_ki: 'KI', nav_pricing: 'Preise', nav_faq: 'FAQ', nav_signin: 'Anmelden', nav_download: 'Kostenlos laden',
      hero_title1: 'Cliptag sortiert deine Videos.', hero_title2: 'Du behältst deinen Flow.',
      hero_sub_pre: 'Schluss mit', hero_sub_post: '. Cliptag benennt, taggt und sortiert dein Footage automatisch. Du springst direkt in den Schnitt.',
      hero_cta_primary: 'Für Mac laden', hero_cta_secondary: "So funktioniert's",
      hero_fineprint: 'Kostenlos für 25 Clips im Monat. Keine Zahlungsdaten nötig.',
      feat_h2: 'Alles sortiert, automatisch', feat_sub: 'In der Sekunde, in der du einen Ordner reinwirfst.',
      how_h2: 'Gibt dir eine schnittfertige Bibliothek zurück.',
      ki_eyebrow: 'SO FUNKTIONIERT DIE KI-ERKENNUNG',
      price_h2: 'Einfache Pläne, faire Credits',
      bill_monthly: 'Monatlich', bill_yearly: 'Jährlich', bill_badge: '2 Monate gratis',
      faq_h2: 'Häufige Fragen', faq_sub: 'Alles, was du vor dem ersten Ordner wissen musst.',
      cta_h2: 'Bereit, deinen Flow zu behalten?', cta_p: 'Lade Cliptag und sortier deinen ersten Ordner in Minuten.',
      footer_privacy: 'Datenschutz', footer_terms: 'AGB',
      f1_title: 'Benennung, die Sinn ergibt', f1_desc: 'Titel, Szene, Subjekt und Bewegung, direkt im Dateinamen. Bei 300 Clips das Pyramiden-Video gesucht? Über Titel und Tags ist es sofort da.',
      f2_title: 'Privat, wenn nötig', f2_desc: 'Sensibles Material? Der Lokal-Modus analysiert komplett offline auf deinem Mac. Nichts verlässt das Gerät.', f2_badge: 'Offline möglich',
      f3_title: 'Smarte Ordner', f3_desc: 'Clips wandern automatisch in Tag- und Szenen-Ordner.', f3_tree1: 'Tag 1 / 01 Reise-Start', f3_tree2: 'Tag 1 / 02 Skyline',
      f4_title: 'Finder-Tags & Labels', f4_desc: 'Rollen und schwache Aufnahmen landen als Finder-Label, sofort filterbar.', f4_chip_review: 'Prüfen',
      f5_title: 'Erkennt schwache Aufnahmen', f5_desc: 'Cliptag prüft jeden Clip automatisch und markiert, was du dir vor dem Schnitt nochmal ansehen solltest.',
      badge_shaky: 'Verwackelt', badge_blurry: 'Unscharf', badge_clean: 'Sauber',
      ki_h2a: 'Versteht dein Footage,', ki_h2b: 'nicht nur die Datei.',
      ki_p: 'Cliptag erkennt Szenen, Motive und gesprochene Sprache, also was wirklich im Clip passiert, und übersetzt das in dein Benennungssystem. Höchste Präzision über die Cloud, plus einen optionalen Lokal-Modus für Material, das den Mac nicht verlassen soll.',
      ki_c1_badge: 'EMPFOHLEN', ki_c1_title: 'Cloud-Analyse', ki_c1_p: 'Maximale Genauigkeit bis ins Detail. Erkennt auch das Spezifische statt nur „ein Fisch". Footage geht verschlüsselt zur Analyse und wird nicht gespeichert.',
      ki_c2_badge: 'PRIVAT', ki_c2_title: 'Lokal-Modus', ki_c2_p: 'Läuft komplett auf deinem Mac, nichts verlässt das Gerät. Die Erkennung ist etwas gröber, dafür die sichere Wahl für sensibles Material.',
      price_sub: 'Monatlich abgerechnet, ungenutzte Credits wandern teilweise mit. Jährlich sparst du zwei Monate.',
      rollover_label: 'Rollover-Buffer:', rollover_rest: ' nicht genutzte Clips verfallen nicht sofort. Creator sammelt bis 1.000 (2×), Pro bis 6.000 (3×). Im Projektmonat ziehst du einfach aus dem Buffer.',
      langs_note: 'Jeder Plan enthält die volle KI, den lokalen Modus, Finder-Integration und 6 Sprachen',
      plan_badge: 'Beliebteste Wahl',
      mock_title_tpl: 'Analysiere {n} Clips', mock_count_tpl: '{d} / {t} Clips', mock_sub: 'Erkennt Szenen, Motive & gesprochene Sprache', mock_wait: 'Wartet',
      toast_text: 'Das ist eine Vorschau. Lade Cliptag für Mac, um eigene Clips zu sortieren.',
      aiCaps: ['Szenenerkennung', 'Motiv & Objekte', 'Sprache fürs Benennen', 'NSFW-Filter'],
      steps: [
        { title: 'Clips reinwerfen', body: 'Zieh einen Ordner von SD-Karte oder Platte in Cliptag.' },
        { title: 'KI macht die Arbeit', body: 'Titel, Szene, Rolle, Tags und technische Specs, pro Clip.' },
        { title: 'Fertig', body: 'Benannte Ordner mit Finder-Tags. Schnittfertig.' }
      ],
      demoCaps: ['Erkenne Szene · Sonnenuntergang', 'Lese Umgebung · Innenraum', 'Finde Motive · Unterwasser', 'Transkribiere Sprache…', 'Erkenne Bewegung · Slow-Mo'],
      demoTitles: ['Skyline-Sonnenuntergang — Luftaufnahme', 'Aufbruch Bangkok — Handheld', 'Riff-Tauchgang — POV-Action', 'Studio-Interview — A-Roll', 'Surf-Lineup — Teleobjektiv'],
      demoTags: [['Drohne','Goldene Stunde','Stadtbild'], ['Reise','Innenraum','Tag'], ['Unterwasser','POV','Weitwinkel'], ['Interview','Studio','Talking Head'], ['Ozean','Slow-Mo','Teleobjektiv']],
      plans: [
        { cta: 'Kostenlos starten', clipsNum: '25 Clips', clipsUnit: '/ pro Monat', per: '', billedM: 'für immer', billedY: 'für immer', feats: FEAT3.de.concat(['Rollover-Buffer']) },
        { cta: 'Creator wählen', clipsNum: '500 Clips', clipsUnit: '/ pro Monat', per: '/Mon', billedM: 'monatlich abgerechnet', billedY: '€79/Jahr abgerechnet', feats: FEAT3.de.concat(['Rollover bis 1.000 Clips']) },
        { cta: 'Pro wählen', clipsNum: '2.000 Clips', clipsUnit: '/ pro Monat', per: '/Mon', billedM: 'monatlich abgerechnet', billedY: '€159/Jahr abgerechnet', feats: FEAT3.de.concat(['Rollover bis 6.000 Clips']) },
        { cta: 'Studio wählen', clipsNum: '10.000 Clips', clipsUnit: '/ pro Monat', per: '/Mon', billedM: 'monatlich abgerechnet', billedY: '€399/Jahr abgerechnet', feats: FEAT3.de.concat(['Alles aus Pro', 'Höchstes Cloud-Volumen']) }
      ],
      faq: [
        ['Kann ich Cliptag kostenlos nutzen?', 'Ja. Der Free-Plan umfasst 25 KI-Clips pro Monat, ganz ohne Zahlungsdaten. Wenn du mehr Volumen brauchst, wechselst du jederzeit in einen bezahlten Plan.'],
        ['Wie funktioniert Cliptag?', 'Du ziehst einen Ordner in Cliptag. Die KI erkennt Szenen, Motive und gesprochene Sprache, benennt und taggt jeden Clip und sortiert alles in Ordner. Am Ende legst du die schnittfertige Bibliothek auf deiner Platte ab.'],
        ['Kann ich Cliptag lokal nutzen?', 'Ja. Der Lokal-Modus analysiert komplett offline auf deinem Mac, nichts verlässt das Gerät. Die Erkennung ist etwas gröber als in der Cloud, dafür bleiben sensible Aufnahmen privat.'],
        ['Welche Voraussetzungen hat der Lokal-Modus?', 'Der Lokal-Modus läuft auf Apple Silicon (M1 oder neuer). Wir empfehlen mindestens 16 GB Unified Memory und rund 10 GB freien Speicher für das lokale Modell; je mehr Arbeitsspeicher, desto schneller und genauer. Cliptag nutzt die GPU und Neural Engine von Apple Silicon. Auf älteren Intel-Macs ist der Lokal-Modus eingeschränkt oder nicht verfügbar, dort ist die Cloud die bessere Wahl.'],
        ['Gibt es Cliptag auch für Windows und Linux?', 'Aktuell läuft Cliptag nur auf macOS. Versionen für Windows und Linux sind in Entwicklung und hoffentlich bald verfügbar.'],
        ['Kann ich meinen Plan kündigen?', 'Monatliche Pläne kannst du jederzeit zum Ende des Abrechnungsmonats kündigen, keine Knebelverträge. Jährliche Pläne laufen bis zum Ende der bezahlten Laufzeit und werden nicht anteilig erstattet. Die Details stehen in den AGB.'],
        ['Gehen auch Fotos?', 'Aktuell verarbeitet Cliptag Videoclips. An einer Lösung für Fotos arbeiten wir bereits.'],
        ['Werden meine Videos in der Cloud gespeichert?', 'Nein. In der Cloud-Analyse geht dein Footage verschlüsselt zur Verarbeitung und wird nicht gespeichert. Wer ganz offline bleiben möchte, nutzt den Lokal-Modus.'],
        ['Werden meine Daten beim Verschieben oder Benennen gelöscht?', 'Nein, niemals. Cliptag benennt und sortiert, aber löscht nichts. Legst du Clips von SD-Karte oder externer Platte in ein neues Verzeichnis, werden sie dorthin kopiert, das Original bleibt, bis die Übertragung sicher abgeschlossen ist. Reicht der Speicher nicht, bekommst du vorher eine Meldung. Bricht die Verbindung versehentlich ab, geht nichts verloren und du startest die Übertragung einfach neu. Verschiebst du innerhalb derselben Festplatte, ändert sich nur der Ablageort, das passiert sofort und ohne Kopiervorgang.'],
        ['Kann ich die Benennung und Sortierung rückgängig machen?', 'Ja, innerhalb der laufenden Session machst du jeden Vorgang mit einem Klick rückgängig. Sobald du Cliptag schließt, endet die Session und ein automatisches Zurücksetzen ist danach nicht mehr möglich. Damit du trotzdem jederzeit nachvollziehen kannst, was wohin gewandert ist, legt Cliptag bei jedem Vorgang eine Protokoll-Datei (JSON) an, mit der sich die ursprünglichen Namen und Ordner zurückverfolgen lassen.'],
        ['In welchen Sprachen funktioniert Cliptag?', 'Cliptag unterstützt Deutsch, Englisch, Französisch, Spanisch, Portugiesisch und Italienisch.']
      ]
    },

    fr: {
      nav_ki: 'IA', nav_pricing: 'Tarifs', nav_faq: 'FAQ', nav_signin: 'Connexion', nav_download: 'Télécharger',
      hero_title1: 'Cliptag trie vos vidéos.', hero_title2: 'Vous gardez votre flow.',
      hero_sub_pre: 'Fini les', hero_sub_post: '. Cliptag nomme, tague et trie vos rushes automatiquement. Vous passez direct au montage.',
      hero_cta_primary: 'Télécharger pour Mac', hero_cta_secondary: 'Comment ça marche',
      hero_fineprint: 'Gratuit pour 25 clips par mois. Sans carte bancaire.',
      feat_h2: 'Tout est trié, automatiquement', feat_sub: 'À la seconde où vous déposez un dossier.',
      how_h2: 'Vous rend une bibliothèque prête à monter.',
      ki_eyebrow: 'COMMENT FONCTIONNE LA RECONNAISSANCE IA',
      price_h2: 'Des offres simples, des crédits justes',
      bill_monthly: 'Mensuel', bill_yearly: 'Annuel', bill_badge: '2 mois offerts',
      faq_h2: 'Questions fréquentes', faq_sub: 'Tout savoir avant votre premier dossier.',
      cta_h2: 'Prêt à garder votre flow ?', cta_p: 'Téléchargez Cliptag et triez votre premier dossier en quelques minutes.',
      footer_privacy: 'Confidentialité', footer_terms: 'CGU',
      f1_title: 'Un nommage qui a du sens', f1_desc: 'Titre, scène, sujet et mouvement, directement dans le nom de fichier. Vous cherchez la vidéo des pyramides parmi 300 clips ? Les titres et tags la font ressortir aussitôt.',
      f2_title: 'Privé quand il le faut', f2_desc: 'Contenu sensible ? Le mode local analyse entièrement hors ligne sur votre Mac. Rien ne quitte l\'appareil.', f2_badge: 'Hors ligne possible',
      f3_title: 'Dossiers intelligents', f3_desc: 'Les clips rejoignent automatiquement des dossiers par tag et par scène.', f3_tree1: 'Jour 1 / 01 Départ', f3_tree2: 'Jour 1 / 02 Skyline',
      f4_title: 'Tags et labels Finder', f4_desc: 'Rôles et plans faibles deviennent des labels Finder, filtrables aussitôt.', f4_chip_review: 'À revoir',
      f5_title: 'Repère les plans faibles', f5_desc: 'Cliptag vérifie chaque clip automatiquement et signale ce que vous devriez revoir avant le montage.',
      badge_shaky: 'Tremblé', badge_blurry: 'Flou', badge_clean: 'Net',
      ki_h2a: 'Comprend vos rushes,', ki_h2b: 'pas seulement le fichier.',
      ki_p: 'Cliptag reconnaît les scènes, les sujets et la parole, ce qui se passe vraiment dans le clip, et le traduit dans votre système de nommage. Précision maximale via le cloud, plus un mode local optionnel pour le contenu qui ne doit pas quitter votre Mac.',
      ki_c1_badge: 'RECOMMANDÉ', ki_c1_title: 'Analyse cloud', ki_c1_p: 'Précision maximale jusqu\'au détail. Reconnaît le spécifique au lieu de juste « un poisson ». Les rushes partent chiffrés pour l\'analyse et ne sont pas stockés.',
      ki_c2_badge: 'PRIVÉ', ki_c2_title: 'Mode local', ki_c2_p: 'Tourne entièrement sur votre Mac, rien ne quitte l\'appareil. La reconnaissance est un peu plus grossière, mais c\'est le choix sûr pour le contenu sensible.',
      price_sub: 'Facturé au mois, les crédits non utilisés sont en partie reportés. En annuel, vous économisez deux mois.',
      rollover_label: 'Report de crédits :', rollover_rest: ' les clips non utilisés n\'expirent pas tout de suite. Creator cumule jusqu\'à 1 000 (2×), Pro jusqu\'à 6 000 (3×). Le mois d\'un projet, vous puisez simplement dans la réserve.',
      langs_note: 'Chaque offre inclut toute l\'IA, le mode local, l\'intégration Finder et 6 langues',
      plan_badge: 'Le plus choisi',
      mock_title_tpl: 'Analyse de {n} clips', mock_count_tpl: '{d} / {t} clips', mock_sub: 'Reconnaît scènes, sujets et parole', mock_wait: 'En attente',
      toast_text: 'Ceci est un aperçu. Téléchargez Cliptag pour Mac pour trier vos propres clips.',
      aiCaps: ['Détection de scènes', 'Sujets et objets', 'Parole pour le nommage', 'Filtre NSFW'],
      steps: [
        { title: 'Déposez vos clips', body: 'Glissez un dossier depuis une carte SD ou un disque dans Cliptag.' },
        { title: 'L\'IA fait le travail', body: 'Titre, scène, rôle, tags et specs techniques, par clip.' },
        { title: 'Terminé', body: 'Dossiers nommés avec tags Finder. Prêt à monter.' }
      ],
      demoCaps: ['Détecte la scène · Coucher de soleil', 'Lit l\'environnement · Intérieur', 'Trouve les sujets · Sous l\'eau', 'Transcrit la parole…', 'Détecte le mouvement · Ralenti'],
      demoTitles: ['Coucher de soleil sur la skyline — Vue aérienne', 'Départ de Bangkok — Caméra à la main', 'Plongée sur le récif — Action POV', 'Interview studio — A-roll', 'Line-up de surf — Téléobjectif'],
      demoTags: [['Drone','Heure dorée','Paysage urbain'], ['Voyage','Intérieur','Jour'], ['Sous l\'eau','POV','Grand-angle'], ['Interview','Studio','Plan-buste'], ['Océan','Ralenti','Téléobjectif']],
      plans: [
        { cta: 'Commencer gratuitement', clipsNum: '25 clips', clipsUnit: '/ par mois', per: '', billedM: 'pour toujours', billedY: 'pour toujours', feats: FEAT3.fr.concat(['Report de crédits']) },
        { cta: 'Choisir Creator', clipsNum: '500 clips', clipsUnit: '/ par mois', per: '/mois', billedM: 'facturé au mois', billedY: '79 €/an facturé', feats: FEAT3.fr.concat(['Report jusqu\'à 1 000 clips']) },
        { cta: 'Choisir Pro', clipsNum: '2 000 clips', clipsUnit: '/ par mois', per: '/mois', billedM: 'facturé au mois', billedY: '159 €/an facturé', feats: FEAT3.fr.concat(['Report jusqu\'à 6 000 clips']) },
        { cta: 'Choisir Studio', clipsNum: '10 000 clips', clipsUnit: '/ par mois', per: '/mois', billedM: 'facturé au mois', billedY: '399 €/an facturé', feats: FEAT3.fr.concat(['Tout de Pro', 'Volume cloud maximal']) }
      ],
      faq: [
        ['Puis-je utiliser Cliptag gratuitement ?', 'Oui. L\'offre gratuite inclut 25 clips IA par mois, sans données de paiement. Quand vous avez besoin de plus de volume, vous passez à une offre payante quand vous voulez.'],
        ['Comment fonctionne Cliptag ?', 'Vous glissez un dossier dans Cliptag. L\'IA reconnaît les scènes, les sujets et la parole, nomme et tague chaque clip et trie tout en dossiers. À la fin, vous placez la bibliothèque prête à monter sur votre disque.'],
        ['Puis-je utiliser Cliptag en local ?', 'Oui. Le mode local analyse entièrement hors ligne sur votre Mac, rien ne quitte l\'appareil. La reconnaissance est un peu plus grossière que dans le cloud, mais les rushes sensibles restent privés.'],
        ['Quelles sont les conditions pour le mode local ?', 'Le mode local fonctionne sur Apple Silicon (M1 ou plus récent). Nous recommandons au moins 16 Go de mémoire unifiée et environ 10 Go d\'espace disque libre pour le modèle local ; plus il y a de mémoire, plus c\'est rapide et précis. Cliptag utilise le GPU et le Neural Engine d\'Apple Silicon. Sur les anciens Mac Intel, le mode local est limité ou indisponible, le cloud est alors préférable.'],
        ['Existe-t-il une version Windows et Linux ?', 'Pour l\'instant Cliptag tourne uniquement sur macOS. Les versions Windows et Linux sont en développement et bientôt disponibles, on l\'espère.'],
        ['Puis-je résilier mon offre ?', 'Les offres mensuelles se résilient à tout moment pour la fin du mois facturé, sans engagement. Les offres annuelles courent jusqu\'à la fin de la période payée et ne sont pas remboursées au prorata. Les détails sont dans les CGU.'],
        ['Cela marche-t-il aussi avec les photos ?', 'Pour l\'instant Cliptag traite les clips vidéo. Nous travaillons déjà à une solution pour les photos.'],
        ['Mes vidéos sont-elles stockées dans le cloud ?', 'Non. En analyse cloud, vos rushes partent chiffrés pour le traitement et ne sont pas stockés. Pour rester totalement hors ligne, utilisez le mode local.'],
        ['Des données sont-elles supprimées lors du déplacement ou du renommage ?', 'Non, jamais. Cliptag nomme et trie, mais ne supprime rien. Quand vous déplacez des clips d\'une carte SD ou d\'un disque externe vers un nouveau dossier, ils y sont copiés ; l\'original reste jusqu\'à ce que le transfert soit terminé en toute sécurité. Si l\'espace manque, vous êtes prévenu avant. Si la connexion se coupe par accident, rien n\'est perdu et vous relancez simplement le transfert. Quand vous déplacez sur le même disque, seul l\'emplacement change, instantanément et sans copie.'],
        ['Puis-je annuler le nommage et le tri ?', 'Oui, dans la session en cours vous annulez chaque action d\'un clic. Dès que vous fermez Cliptag la session se termine et une réinitialisation automatique n\'est plus possible. Pour que vous puissiez toujours retracer ce qui est allé où, Cliptag écrit un fichier journal (JSON) à chaque action, qui permet de reconstituer les noms et dossiers d\'origine.'],
        ['Quelles langues Cliptag prend-il en charge ?', 'Cliptag prend en charge l\'allemand, l\'anglais, le français, l\'espagnol, le portugais et l\'italien.']
      ]
    },

    es: {
      nav_ki: 'IA', nav_pricing: 'Precios', nav_faq: 'FAQ', nav_signin: 'Iniciar sesión', nav_download: 'Descargar gratis',
      hero_title1: 'Cliptag ordena tus vídeos.', hero_title2: 'Mantienes tu flow.',
      hero_sub_pre: 'Adiós a', hero_sub_post: '. Cliptag nombra, etiqueta y ordena tu material automáticamente. Saltas directo al montaje.',
      hero_cta_primary: 'Descargar para Mac', hero_cta_secondary: 'Cómo funciona',
      hero_fineprint: 'Gratis para 25 clips al mes. Sin datos de pago.',
      feat_h2: 'Todo ordenado, automáticamente', feat_sub: 'En el segundo en que sueltas una carpeta.',
      how_h2: 'Te devuelve una biblioteca lista para editar.',
      ki_eyebrow: 'CÓMO FUNCIONA EL RECONOCIMIENTO IA',
      price_h2: 'Planes simples, créditos justos',
      bill_monthly: 'Mensual', bill_yearly: 'Anual', bill_badge: '2 meses gratis',
      faq_h2: 'Preguntas frecuentes', faq_sub: 'Todo lo que debes saber antes de tu primera carpeta.',
      cta_h2: '¿Listo para mantener tu flow?', cta_p: 'Descarga Cliptag y ordena tu primera carpeta en minutos.',
      footer_privacy: 'Privacidad', footer_terms: 'Términos',
      f1_title: 'Nombres que tienen sentido', f1_desc: 'Título, escena, sujeto y movimiento, directo en el nombre del archivo. ¿Buscas el vídeo de las pirámides entre 300 clips? Con títulos y etiquetas aparece al instante.',
      f2_title: 'Privado cuando hace falta', f2_desc: '¿Material sensible? El modo local analiza completamente sin conexión en tu Mac. Nada sale del dispositivo.', f2_badge: 'Funciona sin conexión',
      f3_title: 'Carpetas inteligentes', f3_desc: 'Los clips van automáticamente a carpetas por etiqueta y por escena.', f3_tree1: 'Día 1 / 01 Inicio del viaje', f3_tree2: 'Día 1 / 02 Skyline',
      f4_title: 'Etiquetas y labels de Finder', f4_desc: 'Roles y tomas débiles quedan como labels de Finder, filtrables al instante.', f4_chip_review: 'Revisar',
      f5_title: 'Detecta tomas débiles', f5_desc: 'Cliptag revisa cada clip automáticamente y marca lo que deberías volver a mirar antes de editar.',
      badge_shaky: 'Movida', badge_blurry: 'Borrosa', badge_clean: 'Limpia',
      ki_h2a: 'Entiende tu material,', ki_h2b: 'no solo el archivo.',
      ki_p: 'Cliptag reconoce escenas, sujetos y habla, lo que realmente pasa en el clip, y lo traduce a tu sistema de nombres. Máxima precisión por la nube, más un modo local opcional para material que no debe salir de tu Mac.',
      ki_c1_badge: 'RECOMENDADO', ki_c1_title: 'Análisis en la nube', ki_c1_p: 'Máxima precisión hasta el detalle. Reconoce lo específico en vez de solo «un pez». El material va cifrado al análisis y no se almacena.',
      ki_c2_badge: 'PRIVADO', ki_c2_title: 'Modo local', ki_c2_p: 'Funciona por completo en tu Mac, nada sale del dispositivo. El reconocimiento es algo más tosco, pero es la opción segura para material sensible.',
      price_sub: 'Facturación mensual, los créditos no usados se trasladan en parte. En anual ahorras dos meses.',
      rollover_label: 'Crédito acumulable:', rollover_rest: ' los clips no usados no caducan de inmediato. Creator acumula hasta 1.000 (2×), Pro hasta 6.000 (3×). En el mes de un proyecto tiras simplemente de la reserva.',
      langs_note: 'Cada plan incluye toda la IA, el modo local, la integración con Finder y 6 idiomas',
      plan_badge: 'La opción más elegida',
      mock_title_tpl: 'Analizando {n} clips', mock_count_tpl: '{d} / {t} clips', mock_sub: 'Reconoce escenas, sujetos y habla', mock_wait: 'En espera',
      toast_text: 'Esto es una vista previa. Descarga Cliptag para Mac para ordenar tus propios clips.',
      aiCaps: ['Detección de escenas', 'Sujetos y objetos', 'Habla para nombrar', 'Filtro NSFW'],
      steps: [
        { title: 'Suelta los clips', body: 'Arrastra una carpeta desde una tarjeta SD o un disco a Cliptag.' },
        { title: 'La IA hace el trabajo', body: 'Título, escena, rol, etiquetas y specs técnicas, por clip.' },
        { title: 'Listo', body: 'Carpetas nombradas con etiquetas de Finder. Listo para editar.' }
      ],
      demoCaps: ['Detectando escena · Atardecer', 'Leyendo entorno · Interior', 'Buscando sujetos · Bajo el agua', 'Transcribiendo habla…', 'Detectando movimiento · Cámara lenta'],
      demoTitles: ['Atardecer en el skyline — Toma aérea', 'Salida de Bangkok — Cámara en mano', 'Buceo en el arrecife — Acción POV', 'Entrevista en estudio — A-roll', 'Lineup de surf — Teleobjetivo'],
      demoTags: [['Dron','Hora dorada','Paisaje urbano'], ['Viaje','Interior','Día'], ['Bajo el agua','POV','Gran angular'], ['Entrevista','Estudio','Primer plano'], ['Océano','Cámara lenta','Teleobjetivo']],
      plans: [
        { cta: 'Empezar gratis', clipsNum: '25 clips', clipsUnit: '/ al mes', per: '', billedM: 'para siempre', billedY: 'para siempre', feats: FEAT3.es.concat(['Crédito acumulable']) },
        { cta: 'Elegir Creator', clipsNum: '500 clips', clipsUnit: '/ al mes', per: '/mes', billedM: 'facturado al mes', billedY: '79 €/año facturado', feats: FEAT3.es.concat(['Acumulación hasta 1.000 clips']) },
        { cta: 'Elegir Pro', clipsNum: '2.000 clips', clipsUnit: '/ al mes', per: '/mes', billedM: 'facturado al mes', billedY: '159 €/año facturado', feats: FEAT3.es.concat(['Acumulación hasta 6.000 clips']) },
        { cta: 'Elegir Studio', clipsNum: '10.000 clips', clipsUnit: '/ al mes', per: '/mes', billedM: 'facturado al mes', billedY: '399 €/año facturado', feats: FEAT3.es.concat(['Todo de Pro', 'Máximo volumen en la nube']) }
      ],
      faq: [
        ['¿Puedo usar Cliptag gratis?', 'Sí. El plan gratuito incluye 25 clips IA al mes, sin datos de pago. Cuando necesitas más volumen, cambias a un plan de pago cuando quieras.'],
        ['¿Cómo funciona Cliptag?', 'Arrastras una carpeta a Cliptag. La IA reconoce escenas, sujetos y habla, nombra y etiqueta cada clip y lo ordena todo en carpetas. Al final colocas la biblioteca lista para editar en tu disco.'],
        ['¿Puedo usar Cliptag en local?', 'Sí. El modo local analiza por completo sin conexión en tu Mac, nada sale del dispositivo. El reconocimiento es algo más tosco que en la nube, pero el material sensible se queda privado.'],
        ['¿Qué requisitos tiene el modo local?', 'El modo local funciona en Apple Silicon (M1 o posterior). Recomendamos al menos 16 GB de memoria unificada y unos 10 GB de espacio libre para el modelo local; cuanta más memoria, más rápido y preciso. Cliptag usa la GPU y el Neural Engine de Apple Silicon. En Mac Intel antiguos el modo local es limitado o no está disponible, así que la nube es la mejor opción.'],
        ['¿Hay versión para Windows y Linux?', 'Por ahora Cliptag funciona solo en macOS. Las versiones para Windows y Linux están en desarrollo y, con suerte, disponibles pronto.'],
        ['¿Puedo cancelar mi plan?', 'Los planes mensuales se cancelan cuando quieras hasta el final del mes facturado, sin permanencia. Los planes anuales corren hasta el final del periodo pagado y no se reembolsan a prorrata. Los detalles están en los Términos.'],
        ['¿Funciona también con fotos?', 'Por ahora Cliptag procesa clips de vídeo. Ya estamos trabajando en una solución para fotos.'],
        ['¿Mis vídeos se almacenan en la nube?', 'No. En el análisis en la nube tu material va cifrado para el procesamiento y no se almacena. Si quieres estar totalmente sin conexión, usa el modo local.'],
        ['¿Se borra algo al mover o renombrar?', 'No, nunca. Cliptag nombra y ordena, pero no borra nada. Cuando mueves clips desde una tarjeta SD o un disco externo a una nueva carpeta, se copian allí; el original permanece hasta que la transferencia termina de forma segura. Si falta espacio, recibes un aviso antes. Si la conexión se corta por accidente, no se pierde nada y solo reinicias la transferencia. Si mueves dentro del mismo disco, solo cambia la ubicación, al instante y sin copia.'],
        ['¿Puedo deshacer el nombrado y el orden?', 'Sí, dentro de la sesión en curso deshaces cada acción con un clic. En cuanto cierras Cliptag la sesión termina y un reinicio automático ya no es posible. Para que siempre puedas rastrear qué fue a dónde, Cliptag escribe un archivo de registro (JSON) por cada acción, con el que se reconstruyen los nombres y carpetas originales.'],
        ['¿Qué idiomas admite Cliptag?', 'Cliptag admite alemán, inglés, francés, español, portugués e italiano.']
      ]
    },

    pt: {
      nav_ki: 'IA', nav_pricing: 'Preços', nav_faq: 'FAQ', nav_signin: 'Entrar', nav_download: 'Baixar grátis',
      hero_title1: 'Cliptag organiza seus vídeos.', hero_title2: 'Você mantém seu flow.',
      hero_sub_pre: 'Chega de', hero_sub_post: '. O Cliptag nomeia, marca e organiza seu material automaticamente. Você vai direto para a edição.',
      hero_cta_primary: 'Baixar para Mac', hero_cta_secondary: 'Como funciona',
      hero_fineprint: 'Grátis para 25 clipes por mês. Sem dados de pagamento.',
      feat_h2: 'Tudo organizado, automaticamente', feat_sub: 'No segundo em que você solta uma pasta.',
      how_h2: 'Devolve uma biblioteca pronta para editar.',
      ki_eyebrow: 'COMO FUNCIONA O RECONHECIMENTO DE IA',
      price_h2: 'Planos simples, créditos justos',
      bill_monthly: 'Mensal', bill_yearly: 'Anual', bill_badge: '2 meses grátis',
      faq_h2: 'Perguntas frequentes', faq_sub: 'Tudo o que você precisa saber antes da primeira pasta.',
      cta_h2: 'Pronto para manter seu flow?', cta_p: 'Baixe o Cliptag e organize sua primeira pasta em minutos.',
      footer_privacy: 'Privacidade', footer_terms: 'Termos',
      f1_title: 'Nomes que fazem sentido', f1_desc: 'Título, cena, sujeito e movimento, direto no nome do arquivo. Procurando o vídeo das pirâmides entre 300 clipes? Com títulos e tags ele aparece na hora.',
      f2_title: 'Privado quando precisa', f2_desc: 'Material sensível? O modo local analisa totalmente offline no seu Mac. Nada sai do aparelho.', f2_badge: 'Funciona offline',
      f3_title: 'Pastas inteligentes', f3_desc: 'Os clipes vão automaticamente para pastas por tag e por cena.', f3_tree1: 'Dia 1 / 01 Início da viagem', f3_tree2: 'Dia 1 / 02 Skyline',
      f4_title: 'Tags e rótulos do Finder', f4_desc: 'Funções e tomadas fracas viram rótulos do Finder, filtráveis na hora.', f4_chip_review: 'Revisar',
      f5_title: 'Detecta tomadas fracas', f5_desc: 'O Cliptag verifica cada clipe automaticamente e marca o que você deveria rever antes de editar.',
      badge_shaky: 'Tremida', badge_blurry: 'Desfocada', badge_clean: 'Limpa',
      ki_h2a: 'Entende seu material,', ki_h2b: 'não só o arquivo.',
      ki_p: 'O Cliptag reconhece cenas, sujeitos e fala, o que realmente acontece no clipe, e traduz isso no seu sistema de nomes. Máxima precisão pela nuvem, além de um modo local opcional para material que não deve sair do seu Mac.',
      ki_c1_badge: 'RECOMENDADO', ki_c1_title: 'Análise na nuvem', ki_c1_p: 'Máxima precisão até o detalhe. Reconhece o específico em vez de só «um peixe». O material vai criptografado para a análise e não é armazenado.',
      ki_c2_badge: 'PRIVADO', ki_c2_title: 'Modo local', ki_c2_p: 'Roda totalmente no seu Mac, nada sai do aparelho. O reconhecimento é um pouco mais grosseiro, mas é a escolha segura para material sensível.',
      price_sub: 'Cobrado por mês, créditos não usados são parcialmente transferidos. No anual você economiza dois meses.',
      rollover_label: 'Créditos acumuláveis:', rollover_rest: ' clipes não usados não expiram de imediato. Creator acumula até 1.000 (2×), Pro até 6.000 (3×). No mês de um projeto, você simplesmente puxa da reserva.',
      langs_note: 'Todo plano inclui toda a IA, o modo local, a integração com o Finder e 6 idiomas',
      plan_badge: 'A escolha mais popular',
      mock_title_tpl: 'Analisando {n} clipes', mock_count_tpl: '{d} / {t} clipes', mock_sub: 'Reconhece cenas, sujeitos e fala', mock_wait: 'Na fila',
      toast_text: 'Isto é uma prévia. Baixe o Cliptag para Mac para organizar seus próprios clipes.',
      aiCaps: ['Detecção de cenas', 'Sujeitos e objetos', 'Fala para nomear', 'Filtro NSFW'],
      steps: [
        { title: 'Solte os clipes', body: 'Arraste uma pasta de um cartão SD ou disco para o Cliptag.' },
        { title: 'A IA faz o trabalho', body: 'Título, cena, função, tags e specs técnicas, por clipe.' },
        { title: 'Pronto', body: 'Pastas nomeadas com tags do Finder. Prontas para editar.' }
      ],
      demoCaps: ['Detectando cena · Pôr do sol', 'Lendo ambiente · Interior', 'Encontrando sujeitos · Subaquático', 'Transcrevendo fala…', 'Detectando movimento · Câmera lenta'],
      demoTitles: ['Pôr do sol na skyline — Tomada aérea', 'Partida de Bangkok — Câmera na mão', 'Mergulho no recife — Ação POV', 'Entrevista em estúdio — A-roll', 'Lineup de surfe — Teleobjetiva'],
      demoTags: [['Drone','Hora dourada','Paisagem urbana'], ['Viagem','Interior','Dia'], ['Subaquático','POV','Grande angular'], ['Entrevista','Estúdio','Plano médio'], ['Oceano','Câmera lenta','Teleobjetiva']],
      plans: [
        { cta: 'Começar grátis', clipsNum: '25 clipes', clipsUnit: '/ por mês', per: '', billedM: 'para sempre', billedY: 'para sempre', feats: FEAT3.pt.concat(['Créditos acumuláveis']) },
        { cta: 'Escolher Creator', clipsNum: '500 clipes', clipsUnit: '/ por mês', per: '/mês', billedM: 'cobrado por mês', billedY: '€79/ano cobrado', feats: FEAT3.pt.concat(['Acúmulo até 1.000 clipes']) },
        { cta: 'Escolher Pro', clipsNum: '2.000 clipes', clipsUnit: '/ por mês', per: '/mês', billedM: 'cobrado por mês', billedY: '€159/ano cobrado', feats: FEAT3.pt.concat(['Acúmulo até 6.000 clipes']) },
        { cta: 'Escolher Studio', clipsNum: '10.000 clipes', clipsUnit: '/ por mês', per: '/mês', billedM: 'cobrado por mês', billedY: '€399/ano cobrado', feats: FEAT3.pt.concat(['Tudo do Pro', 'Volume máximo na nuvem']) }
      ],
      faq: [
        ['Posso usar o Cliptag de graça?', 'Sim. O plano gratuito inclui 25 clipes de IA por mês, sem dados de pagamento. Quando precisar de mais volume, você muda para um plano pago quando quiser.'],
        ['Como o Cliptag funciona?', 'Você arrasta uma pasta para o Cliptag. A IA reconhece cenas, sujeitos e fala, nomeia e marca cada clipe e organiza tudo em pastas. No fim, você coloca a biblioteca pronta para editar no seu disco.'],
        ['Posso usar o Cliptag localmente?', 'Sim. O modo local analisa totalmente offline no seu Mac, nada sai do aparelho. O reconhecimento é um pouco mais grosseiro que na nuvem, mas o material sensível permanece privado.'],
        ['Quais são os requisitos do modo local?', 'O modo local funciona em Apple Silicon (M1 ou mais recente). Recomendamos pelo menos 16 GB de memória unificada e cerca de 10 GB de espaço livre para o modelo local; quanto mais memória, mais rápido e preciso. O Cliptag usa a GPU e o Neural Engine do Apple Silicon. Em Macs Intel antigos o modo local é limitado ou indisponível, então a nuvem é a melhor escolha.'],
        ['Existe versão para Windows e Linux?', 'Por enquanto o Cliptag roda só no macOS. As versões para Windows e Linux estão em desenvolvimento e, com sorte, disponíveis em breve.'],
        ['Posso cancelar meu plano?', 'Planos mensais podem ser cancelados quando quiser, até o fim do mês cobrado, sem fidelidade. Planos anuais correm até o fim do período pago e não são reembolsados proporcionalmente. Os detalhes estão nos Termos.'],
        ['Funciona também com fotos?', 'Por enquanto o Cliptag processa clipes de vídeo. Já estamos trabalhando em uma solução para fotos.'],
        ['Meus vídeos são armazenados na nuvem?', 'Não. Na análise na nuvem seu material vai criptografado para o processamento e não é armazenado. Para ficar totalmente offline, use o modo local.'],
        ['Algo é apagado ao mover ou renomear?', 'Não, nunca. O Cliptag nomeia e organiza, mas não apaga nada. Ao mover clipes de um cartão SD ou disco externo para uma nova pasta, eles são copiados para lá; o original permanece até a transferência terminar com segurança. Se faltar espaço, você recebe um aviso antes. Se a conexão cair por acidente, nada é perdido e você apenas reinicia a transferência. Ao mover dentro do mesmo disco, só o local muda, na hora e sem cópia.'],
        ['Posso desfazer a nomeação e a organização?', 'Sim, dentro da sessão em andamento você desfaz cada ação com um clique. Assim que fecha o Cliptag a sessão termina e uma reversão automática não é mais possível. Para você sempre poder rastrear o que foi para onde, o Cliptag grava um arquivo de log (JSON) a cada ação, com o qual dá para reconstruir os nomes e pastas originais.'],
        ['Quais idiomas o Cliptag suporta?', 'O Cliptag suporta alemão, inglês, francês, espanhol, português e italiano.']
      ]
    },

    it: {
      nav_ki: 'IA', nav_pricing: 'Prezzi', nav_faq: 'FAQ', nav_signin: 'Accedi', nav_download: 'Scarica gratis',
      hero_title1: 'Cliptag ordina i tuoi video.', hero_title2: 'Mantieni il tuo flow.',
      hero_sub_pre: 'Basta con', hero_sub_post: '. Cliptag nomina, tagga e ordina il tuo materiale automaticamente. Salti dritto al montaggio.',
      hero_cta_primary: 'Scarica per Mac', hero_cta_secondary: 'Come funziona',
      hero_fineprint: 'Gratis per 25 clip al mese. Nessun dato di pagamento.',
      feat_h2: 'Tutto ordinato, automaticamente', feat_sub: 'Nel secondo in cui trascini una cartella.',
      how_h2: 'Ti restituisce una libreria pronta al montaggio.',
      ki_eyebrow: 'COME FUNZIONA IL RICONOSCIMENTO IA',
      price_h2: 'Piani semplici, crediti equi',
      bill_monthly: 'Mensile', bill_yearly: 'Annuale', bill_badge: '2 mesi gratis',
      faq_h2: 'Domande frequenti', faq_sub: 'Tutto quello che serve sapere prima della prima cartella.',
      cta_h2: 'Pronto a restare nel flow?', cta_p: 'Scarica Cliptag e ordina la tua prima cartella in pochi minuti.',
      footer_privacy: 'Privacy', footer_terms: 'Termini',
      f1_title: 'Nomi che hanno senso', f1_desc: 'Titolo, scena, soggetto e movimento, direttamente nel nome del file. Cerchi il video delle piramidi tra 300 clip? Con titoli e tag salta fuori all\'istante.',
      f2_title: 'Privato quando serve', f2_desc: 'Materiale sensibile? La modalità locale analizza completamente offline sul tuo Mac. Niente lascia il dispositivo.', f2_badge: 'Funziona offline',
      f3_title: 'Cartelle intelligenti', f3_desc: 'Le clip finiscono automaticamente in cartelle per tag e per scena.', f3_tree1: 'Giorno 1 / 01 Partenza', f3_tree2: 'Giorno 1 / 02 Skyline',
      f4_title: 'Tag ed etichette Finder', f4_desc: 'Ruoli e riprese deboli diventano etichette Finder, filtrabili subito.', f4_chip_review: 'Da rivedere',
      f5_title: 'Individua le riprese deboli', f5_desc: 'Cliptag controlla ogni clip automaticamente e segnala cosa dovresti rivedere prima del montaggio.',
      badge_shaky: 'Mossa', badge_blurry: 'Sfocata', badge_clean: 'Pulita',
      ki_h2a: 'Capisce il tuo materiale,', ki_h2b: 'non solo il file.',
      ki_p: 'Cliptag riconosce scene, soggetti e parlato, cosa succede davvero nella clip, e lo traduce nel tuo sistema di nomi. Massima precisione tramite il cloud, più una modalità locale opzionale per il materiale che non deve lasciare il tuo Mac.',
      ki_c1_badge: 'CONSIGLIATO', ki_c1_title: 'Analisi cloud', ki_c1_p: 'Massima precisione fino al dettaglio. Riconosce lo specifico invece di solo «un pesce». Il materiale parte cifrato per l\'analisi e non viene memorizzato.',
      ki_c2_badge: 'PRIVATO', ki_c2_title: 'Modalità locale', ki_c2_p: 'Gira interamente sul tuo Mac, niente lascia il dispositivo. Il riconoscimento è un po\' più grezzo, ma è la scelta sicura per il materiale sensibile.',
      price_sub: 'Fatturato al mese, i crediti non usati si riportano in parte. Con l\'annuale risparmi due mesi.',
      rollover_label: 'Crediti riportabili:', rollover_rest: ' le clip non usate non scadono subito. Creator accumula fino a 1.000 (2×), Pro fino a 6.000 (3×). Nel mese di un progetto attingi semplicemente dalla riserva.',
      langs_note: 'Ogni piano include tutta l\'IA, la modalità locale, l\'integrazione Finder e 6 lingue',
      plan_badge: 'La scelta più popolare',
      mock_title_tpl: 'Analisi di {n} clip', mock_count_tpl: '{d} / {t} clip', mock_sub: 'Riconosce scene, soggetti e parlato', mock_wait: 'In coda',
      toast_text: 'Questa è un\'anteprima. Scarica Cliptag per Mac per ordinare le tue clip.',
      aiCaps: ['Rilevamento scene', 'Soggetti e oggetti', 'Parlato per i nomi', 'Filtro NSFW'],
      steps: [
        { title: 'Trascina le clip', body: 'Trascina una cartella da una scheda SD o un disco in Cliptag.' },
        { title: 'L\'IA fa il lavoro', body: 'Titolo, scena, ruolo, tag e specifiche tecniche, per ogni clip.' },
        { title: 'Fatto', body: 'Cartelle nominate con tag Finder. Pronte al montaggio.' }
      ],
      demoCaps: ['Rilevo la scena · Tramonto', 'Leggo l\'ambiente · Interno', 'Trovo i soggetti · Subacqueo', 'Trascrivo il parlato…', 'Rilevo il movimento · Slow-mo'],
      demoTitles: ['Tramonto sullo skyline — Ripresa aerea', 'Partenza da Bangkok — A mano', 'Immersione nella barriera — Azione POV', 'Intervista in studio — A-roll', 'Lineup di surf — Teleobiettivo'],
      demoTags: [['Drone','Ora dorata','Paesaggio urbano'], ['Viaggio','Interno','Giorno'], ['Subacqueo','POV','Grandangolo'], ['Intervista','Studio','Primo piano'], ['Oceano','Slow-mo','Teleobiettivo']],
      plans: [
        { cta: 'Inizia gratis', clipsNum: '25 clip', clipsUnit: '/ al mese', per: '', billedM: 'per sempre', billedY: 'per sempre', feats: FEAT3.it.concat(['Crediti riportabili']) },
        { cta: 'Scegli Creator', clipsNum: '500 clip', clipsUnit: '/ al mese', per: '/mese', billedM: 'fatturato al mese', billedY: '€79/anno fatturato', feats: FEAT3.it.concat(['Riporto fino a 1.000 clip']) },
        { cta: 'Scegli Pro', clipsNum: '2.000 clip', clipsUnit: '/ al mese', per: '/mese', billedM: 'fatturato al mese', billedY: '€159/anno fatturato', feats: FEAT3.it.concat(['Riporto fino a 6.000 clip']) },
        { cta: 'Scegli Studio', clipsNum: '10.000 clip', clipsUnit: '/ al mese', per: '/mese', billedM: 'fatturato al mese', billedY: '€399/anno fatturato', feats: FEAT3.it.concat(['Tutto di Pro', 'Massimo volume cloud']) }
      ],
      faq: [
        ['Posso usare Cliptag gratis?', 'Sì. Il piano gratuito include 25 clip IA al mese, senza dati di pagamento. Quando ti serve più volume, passi a un piano a pagamento quando vuoi.'],
        ['Come funziona Cliptag?', 'Trascini una cartella in Cliptag. L\'IA riconosce scene, soggetti e parlato, nomina e tagga ogni clip e ordina tutto in cartelle. Alla fine metti la libreria pronta al montaggio sul tuo disco.'],
        ['Posso usare Cliptag in locale?', 'Sì. La modalità locale analizza completamente offline sul tuo Mac, niente lascia il dispositivo. Il riconoscimento è un po\' più grezzo del cloud, ma il materiale sensibile resta privato.'],
        ['Quali requisiti ha la modalità locale?', 'La modalità locale funziona su Apple Silicon (M1 o più recente). Consigliamo almeno 16 GB di memoria unificata e circa 10 GB di spazio libero per il modello locale; più memoria, più velocità e precisione. Cliptag usa la GPU e il Neural Engine di Apple Silicon. Sui vecchi Mac Intel la modalità locale è limitata o non disponibile, quindi il cloud è la scelta migliore.'],
        ['Esiste una versione per Windows e Linux?', 'Per ora Cliptag gira solo su macOS. Le versioni per Windows e Linux sono in sviluppo e, si spera, presto disponibili.'],
        ['Posso disdire il mio piano?', 'I piani mensili si disdicono quando vuoi entro la fine del mese fatturato, senza vincoli. I piani annuali durano fino alla fine del periodo pagato e non vengono rimborsati pro rata. I dettagli sono nei Termini.'],
        ['Funziona anche con le foto?', 'Per ora Cliptag elabora clip video. Stiamo già lavorando a una soluzione per le foto.'],
        ['I miei video vengono salvati nel cloud?', 'No. Nell\'analisi cloud il tuo materiale parte cifrato per l\'elaborazione e non viene salvato. Per restare totalmente offline, usa la modalità locale.'],
        ['Viene cancellato qualcosa spostando o rinominando?', 'No, mai. Cliptag nomina e ordina, ma non cancella nulla. Quando sposti clip da una scheda SD o un disco esterno in una nuova cartella, vengono copiate lì; l\'originale resta finché il trasferimento non è concluso in sicurezza. Se lo spazio non basta, ricevi prima un avviso. Se la connessione si interrompe per errore, non si perde nulla e basta riavviare il trasferimento. Spostando nello stesso disco, cambia solo la posizione, all\'istante e senza copia.'],
        ['Posso annullare i nomi e l\'ordine?', 'Sì, nella sessione in corso annulli ogni operazione con un clic. Appena chiudi Cliptag la sessione termina e un ripristino automatico non è più possibile. Così puoi sempre ricostruire cosa è andato dove, Cliptag scrive un file di log (JSON) a ogni operazione, con cui risalire a nomi e cartelle originali.'],
        ['Quali lingue supporta Cliptag?', 'Cliptag supporta tedesco, inglese, francese, spagnolo, portoghese e italiano.']
      ]
    }
  };

/* ---- Added for the Astro port (not in the original handover) ----
   Per-language nav "Features" label, SEO title/description, and cookie-consent banner. */
const EXTRA: Record<string, {
  nav_features: string; meta_title: string; meta_desc: string;
  consent_text: string; consent_accept: string; consent_decline: string; consent_more: string;
  soon_text: string;
}> = {
  en: { nav_features: 'Features', meta_title: 'Cliptag sorts your videos, you keep your flow', meta_desc: 'Cliptag names, tags and sorts your video footage automatically with AI — straight from the SD card into an edit-ready library. Free for 25 clips a month.',
    consent_text: 'We use optional analytics cookies to understand how cliptag.ai is used. They only load if you accept.', consent_accept: 'Accept', consent_decline: 'Decline', consent_more: 'Privacy',
    soon_text: 'Coming soon — the Mac app launches shortly.' },
  de: { nav_features: 'Funktionen', meta_title: 'Cliptag sortiert deine Videos, du behältst deinen Flow', meta_desc: 'Cliptag benennt, taggt und sortiert dein Footage automatisch mit KI — direkt von der SD-Karte in eine schnittfertige Bibliothek. Kostenlos für 25 Clips im Monat.',
    consent_text: 'Wir nutzen optionale Analyse-Cookies, um zu verstehen, wie cliptag.ai genutzt wird. Sie laden nur, wenn du zustimmst.', consent_accept: 'Akzeptieren', consent_decline: 'Ablehnen', consent_more: 'Datenschutz',
    soon_text: 'Bald verfügbar — die Mac-App startet in Kürze.' },
  fr: { nav_features: 'Fonctions', meta_title: 'Cliptag trie vos vidéos, vous gardez votre flow', meta_desc: 'Cliptag nomme, tague et trie vos rushes automatiquement avec l\'IA — de la carte SD à une bibliothèque prête à monter. Gratuit pour 25 clips par mois.',
    consent_text: 'Nous utilisons des cookies d\'analyse optionnels pour comprendre l\'usage de cliptag.ai. Ils ne se chargent qu\'avec votre accord.', consent_accept: 'Accepter', consent_decline: 'Refuser', consent_more: 'Confidentialité',
    soon_text: 'Bientôt disponible — l\'app Mac arrive très vite.' },
  es: { nav_features: 'Funciones', meta_title: 'Cliptag ordena tus vídeos, mantienes tu flow', meta_desc: 'Cliptag nombra, etiqueta y ordena tu material automáticamente con IA — de la tarjeta SD a una biblioteca lista para editar. Gratis para 25 clips al mes.',
    consent_text: 'Usamos cookies de análisis opcionales para entender cómo se usa cliptag.ai. Solo se cargan si aceptas.', consent_accept: 'Aceptar', consent_decline: 'Rechazar', consent_more: 'Privacidad',
    soon_text: 'Muy pronto — la app para Mac llega en breve.' },
  pt: { nav_features: 'Recursos', meta_title: 'Cliptag organiza seus vídeos, você mantém seu flow', meta_desc: 'O Cliptag nomeia, marca e organiza seu material automaticamente com IA — do cartão SD a uma biblioteca pronta para editar. Grátis para 25 clipes por mês.',
    consent_text: 'Usamos cookies de análise opcionais para entender como o cliptag.ai é usado. Só carregam se você aceitar.', consent_accept: 'Aceitar', consent_decline: 'Recusar', consent_more: 'Privacidade',
    soon_text: 'Em breve — o app para Mac chega já.' },
  it: { nav_features: 'Funzioni', meta_title: 'Cliptag ordina i tuoi video, mantieni il tuo flow', meta_desc: 'Cliptag nomina, tagga e ordina il tuo materiale automaticamente con l\'IA — dalla scheda SD a una libreria pronta al montaggio. Gratis per 25 clip al mese.',
    consent_text: 'Usiamo cookie di analisi opzionali per capire come viene usato cliptag.ai. Si caricano solo se accetti.', consent_accept: 'Accetta', consent_decline: 'Rifiuta', consent_more: 'Privacy',
    soon_text: 'Presto disponibile — l\'app per Mac arriva a breve.' },
};
for (const lang of Object.keys(EXTRA)) {
  Object.assign(I18N[lang], EXTRA[lang]);
}

/* "Coming soon" + notify-me modal copy. */
const NOTIFY: Record<string, {
  soon_title: string; soon_msg: string; soon_email_ph: string; soon_notify: string;
  soon_thanks: string; soon_err: string; soon_priv: string;
}> = {
  en: { soon_title: 'Coming soon', soon_msg: "The Mac app launches shortly. Leave your email and we'll let you know the moment it's live.", soon_email_ph: 'you@email.com', soon_notify: 'Notify me', soon_thanks: "Thanks! We'll email you the moment Cliptag launches.", soon_err: 'Something went wrong — please try again.', soon_priv: 'Only used to notify you about the launch.' },
  de: { soon_title: 'Bald verfügbar', soon_msg: 'Die Mac-App startet in Kürze. Lass deine E-Mail da und wir sagen dir Bescheid, sobald sie live ist.', soon_email_ph: 'du@email.com', soon_notify: 'Benachrichtige mich', soon_thanks: 'Danke! Wir melden uns, sobald Cliptag startet.', soon_err: 'Etwas ist schiefgelaufen — bitte erneut versuchen.', soon_priv: 'Wird nur für die Launch-Benachrichtigung genutzt.' },
  fr: { soon_title: 'Bientôt disponible', soon_msg: "L'app Mac arrive très vite. Laissez votre e-mail et on vous prévient dès le lancement.", soon_email_ph: 'vous@email.com', soon_notify: 'Prévenez-moi', soon_thanks: 'Merci ! On vous écrit dès le lancement de Cliptag.', soon_err: 'Une erreur est survenue — réessayez.', soon_priv: 'Utilisé uniquement pour vous prévenir du lancement.' },
  es: { soon_title: 'Muy pronto', soon_msg: 'La app para Mac llega en breve. Déjanos tu email y te avisamos en cuanto esté disponible.', soon_email_ph: 'tu@email.com', soon_notify: 'Avísame', soon_thanks: '¡Gracias! Te escribiremos en cuanto Cliptag esté disponible.', soon_err: 'Algo salió mal — inténtalo de nuevo.', soon_priv: 'Solo se usa para avisarte del lanzamiento.' },
  pt: { soon_title: 'Em breve', soon_msg: 'O app para Mac chega já. Deixe seu e-mail e avisamos assim que estiver no ar.', soon_email_ph: 'voce@email.com', soon_notify: 'Avise-me', soon_thanks: 'Obrigado! Vamos te avisar assim que o Cliptag for lançado.', soon_err: 'Algo deu errado — tente novamente.', soon_priv: 'Usado apenas para avisar sobre o lançamento.' },
  it: { soon_title: 'Presto disponibile', soon_msg: "L'app per Mac arriva a breve. Lascia la tua email e ti avvisiamo appena è online.", soon_email_ph: 'tu@email.com', soon_notify: 'Avvisami', soon_thanks: 'Grazie! Ti scriveremo appena Cliptag sarà disponibile.', soon_err: 'Qualcosa è andato storto — riprova.', soon_priv: 'Usata solo per avvisarti del lancio.' },
};
for (const lang of Object.keys(NOTIFY)) {
  Object.assign(I18N[lang], NOTIFY[lang]);
}

/* Footer "Refunds" link (Paddle wants the refund policy easily accessible). */
const FOOTER_REFUNDS: Record<string, string> = {
  en: 'Refunds', de: 'Erstattungen', fr: 'Remboursements', es: 'Reembolsos', pt: 'Reembolsos', it: 'Rimborsi',
};
for (const lang of Object.keys(FOOTER_REFUNDS)) {
  I18N[lang].footer_refunds = FOOTER_REFUNDS[lang];
}

/* Footer "Imprint" / legal notice link. */
const FOOTER_IMPRINT: Record<string, string> = {
  en: 'Imprint', de: 'Impressum', fr: 'Mentions légales', es: 'Aviso legal', pt: 'Aviso legal', it: 'Note legali',
};
for (const lang of Object.keys(FOOTER_IMPRINT)) {
  I18N[lang].footer_imprint = FOOTER_IMPRINT[lang];
}
