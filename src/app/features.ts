export default [
  {
    id: 1,
    name: 'Ablative Panzerung',
    text: 'Verringert den erhaltenden Schaden. Ein Treffer zerstört jedoch die Panzerung, so dass sie von einem Maschinisten repariert werden muss.',
    benefit: 'Verringert Schaden für einen Angriff um 3.',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 2,
    name: 'Antimaterieantrieb',
    text: 'Das Schiff nutzt ein Antimaterieraketenschubsystem, eine Technologie, die fortschrittliche Antimateriekontrollsysteme benötigt, die bislang nur der Orden des Paria gemeistert hat.\nDie Antimaterieraketen benötigen weniger Raum als andere Antriebssysteme. Da kein Reaktor notwendig ist und die Raketen nur den Raum einnehmen, der normalerweise für den Gravitonprojektor reserviert ist, kann das Schiff ein zusätzliches Modul aufnehmen.\nDie Jäger und Kanonenboote des Ordens sind im Vergleich zu anderen Fraktionen klein und blitzschnell, was ihnen +2 Manövrierfähigkeit verleiht, wenn es um Beschleunigung geht.\nDer Nachteil der Antimaterieraketen ist natürlich, dass sie mit reiner Antimaterie aufgetankt werden müssen, nicht nur mit Wasserstoff, und dass ein kritischer Treffer am Antriebsmodul als kritischer Reaktortreffer gewertet wird. Der Antrieb ist außerdem teurer als ein normaler Reaktor und Projektor zusammen.',
    benefit: 'Manövrierfähigkeit +2 bei Beschleunigung, +1 Modul',
    requirement: 'Zugehörigkeit oder Lizenz vom Orden des Paria',
    cost: 20,
    bonusses: [
      {
        spec: 'modules',
        bonus: 1
      }
    ],
    selected: false
  },
  {
    id: 3,
    name: 'Arboretum',
    text: 'Ein Garten voller Grünpflanzen, ein kleines hydroponisches System und vielleicht sogar Tiere.\nDie Besatzung kann hier Stress doppelt so schnell wie normal abbauen, und das Arboretum erzeugt außerdem noch Notfallvorräte für einige Tage.',
    benefit: 'stellt 2 Willenskraftpunkte pro Stunde wieder her, liefert 1d6 Tage Notfallversorgung',
    cost: 5,
    bonusses: [],
    selected: false
  },
  {
    id: 4,
    name: 'Atmosphäreneintritt',
    text: 'Das Schiff ist stromlinienförmig und darauf ausgelegt, einem Eintritt in die Atmosphäre zu widerstehen. Daher kann es auf Planeten landen und abheben.\nSchiffe ohne dieses Merkmal müssen im Orbit bleiben und Shuttles verwenden, um zur Oberfläche zu kommen.\nAlle Schiffe können auf einem Planeten notlanden, aber ohne dieses Merkmal stecken sie dort fest, wo sie landen, da ihre Bauweise das Abheben unmöglich macht.',
    benefit: 'Kann auf Planeten landen/abheben.',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 5,
    name: 'Aufgebohrter Beschleuniger',
    text: 'Der Beschleunigerkern, der den Gravitonprojektor antreibt, verfügt über verbesserte Ableitungskontrollen und Dschinnintelligenzen, um die Effizienz zu erhöhen.',
    benefit: 'Verleiht +2 auf die Aktion Vorrücken/Rückzug',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 6,
    name: 'Auswurfsystem',
    text: 'Das Merkmal bedeutet, dass die Arbeitsstationen auf der Brücke in Rettungskapseln eingebaut sind und automatisch aus dem Schiff ausgeworfen werden, wenn es zu einem katastrophalen Systemversagen kommt.\nDieses Merkmal ist am häufigsten bei Schiffen anzutreffen, die für den Kampf ausgelegt ist, wie bei Jägern, kann aber auf jedem Schiff installiert werden. Die Größe des Auswurfsystems hängt von der Klasse des Schiffs ab, und es nimmt so viele Besatzungsmitglieder auf wie die Brücke.',
    benefit: 'Rettungskapsel auf der Brücke',
    requirement: 'Modul Rettungskapseln',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 7,
    name: 'Bergungseinheit',
    text: 'Dieses Merkmal erlaubt es, Schiffe zu bergen, die zwei Klassen kleiner als dein eigenes Schiff sind, indem du eine Bergbaustation verwendest.',
    benefit: 'Ermöglicht Bergungen',
    cost: 10,
    selected: false
  },
  {
    id: 8,
    name: 'Bibliotheksdatenbank',
    text: 'Eine Datenbank, die +3 auf Kultur oder Wissenschaft in einem definierten Bereich gibt, beispielsweise Astronik, Geisteswissenschaften oder Artefakte.',
    benefit: 'Verleiht +3 auf Würfe mit Kultur oder Wissenschaft',
    cost: 5,
    bonusses: [],
    selected: false
  },
  {
    id: 9,
    name: 'ED-Felder',
    text: 'ED-Felder sind Kraftfelder, die darauf ausgelegt sind, Hüllenrisse zu stopfen, was den Effekt von explosiver Dekompression (siehe Seite 99) verringert.\nED-Generatoren werden überall im Schiff installiert und werden automatisch aktiviert, wenn der Rumpf durchbrochen wird. Schiffe ohne diese Technologie müssen alle Durchbrüche manuell reparieren, was bedeutet, dass das zusammengebrochene Modul nicht ohne Exoanzüge verwendet werden kann, bis der Schaden behoben ist.',
    benefit: 'Schützt vor explosiver Dekompression',
    cost: 20,
    bonusses: [],
    selected: false
  },
  {
    id: 10,
    name: 'Empfindliche Sensoren',
    text: 'Die Sensoren des Schiffs sind extrem fein abgestimmt.\nJede Stufe dieses Merkmals bringt +1 auf alle Sensorwürfe.\nKann bis zu drei Mal erworben werden.',
    benefit: 'Verleiht +1 auf Sensorwürfe',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 11,
    name: 'Externe Fracht',
    text: 'Das Schiff ist so angepasst, dass es externe Fracht aufnehmen kann, indem es ein System von Greifarmen und magnetischen Haken verwendet.\nDu kannst bei jedem Frachtraum des Schiffs (siehe oben) festlegen, ob er intern oder extern sein soll.\nExterne Frachträume können die vierfache Tonnage von internen Frachträumen aufnehmen, haben aber keine Atmosphäre. Wenn du sie besuchen willst, musst du einen Exo anlegen.',
    benefit: 'Fracht wird im Vakuum außen am Rumpf befestigt',
    requirement: 'Modul Frachtraum',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 12,
    name: 'Forschungscomputer',
    text: 'Der Schiffscomputer wurde aufgerüstet und enthält nun Werkzeuge für Messungen.\nVerleiht +1 auf Wissenschaft, wenn du etwas messen und die Ergebnisse analysieren willst.\nKann mit einer Bibliotheksdatenbank kombiniert werden.',
    benefit: 'Verleiht +1 auf Wissenschaft für Analysen',
    cost: 5,
    bonusses: [],
    selected: false
  },
  {
    id: 13,
    name: 'Fortschrittlicher Feuerleitcomputer',
    text: 'Ein fortschrittlicher Computer mit spezialisierten Dschinnsystemen für aktive Zielerfassung.',
    benefit: 'Verleiht +1 zur Zielerfassung.',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 14,
    name: 'Fortschrittliche Täuschkörper',
    text: 'Täuschkörperwerfer mit intelligenten Störsendern, Duralitschrapnell und Thermalkugeln.',
    benefit: 'Verleiht +1 beim Einsatz von Gegenmaßnahmen',
    requirement: 'Modul Waffensystem - Tauschkörperwerfer',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 15,
    name: 'Fortschrittliche Torpedos',
    text: 'Torpedos, die mit einer eigenen Dschinnintelligenz ausgestattet sind und für alle Fälle von den Hafenpriestern gesegnet werden.',
    benefit: 'Verleiht -1 auf die Gegenmaßnahmen des Zielschiffs',
    requirement: 'Modul Torpedo- und Minensystem',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 16,
    name: 'Fortschrittliche Waffensysteme',
    text: 'Ein System mit intelligenten Zielerfassungsalgorithmen, modifizierten Kobalitgeschossen (Beschleunigerkanone) oder vielleicht größerer Lanzenkammer (Thermalkanone).\nMuss für jedes Waffensystem separat erworben werden.',
    benefit: 'Verleiht +1 beim Abfeuern eines bestimmten Waffensystems',
    cost: 20,
    bonusses: [],
    selected: false
  },
  {
    id: 17,
    name: 'Fortschrittliche Werkstatt',
    text: 'Eine hochmoderne Werkstatt mit all den neuesten Werkzeugen wie Nanitensägen, Quecksilberdüsen, intelligenten Werkzeugen und so weiter.',
    benefit: 'Ermöglicht die Reparatur von Ausrüstung mit dem Technologiegrad Fortschrittlich',
    requirement: 'Modul Werkstatt',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 18,
    name: 'Gesegnetes Schiff',
    text: 'Ein Ereignis in der Vergangenheit hat dazu geführt, dass die Ikonen das Schiff gesegnet haben.',
    benefit: '+1 auf Pilot-Würfe bei Portalsprüngen und bei Reisen über weite Entfernungen',
    cost: 5,
    bonusses: [],
    selected: false
  },
  {
    id: 19,
    name: 'Präzise Schubdüsen',
    text: 'Die Schubdüsen wurden mit einem brandneuen Magnetfluxkern und Nanitenmembranen ausgestattet, weshalb das Schiff wendiger und leichter zu manövrieren ist.',
    benefit: 'Bonus von +2 auf Pilot beim Andocken, Landen und Ausweichen',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 20,
    name: 'Reaktorschub',
    text: 'Der Reaktor kann an seine äußersten Grenzen gebracht werden, was dir automatisch 3 zusätzliche LP bringt, wenn du den Reaktor überlädst, plus zusätzliche LP durch den Wurf.\nDas Schiff erleidet dadurch 2 Punkte Rumpfschaden, unabhängig davon, ob der Wurf erfolgreich war oder nicht.',
    benefit: 'Verleiht +3 LP beim Überladen des Reaktors',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 21,
    name: 'Robuster Rumpf',
    text: 'Die Balken und Nähte des Rumpfs wurden durch Duralit und intelligente Naniten ersetzt.',
    benefit: 'Verleiht +1 Rumpfpunkt',
    cost: 10,
    bonusses: [
      {
        spec: 'hp',
        bonus: 1
      }
    ],
    selected: false
  },
  {
    id: 22,
    name: 'Schiffsintelligenz',
    text: 'Der Hauptcomputer des Schiffs ist sehr fähig und meldet sich auch zu Wort.\nEr kann jede Funktion im Schiff mit einer 1 im Attribut und einem Wert von 3 in der entsprechenden Fertigkeit ausführen. Er kann nur eine Funktion auf einmal ausführen, kann nicht mehr als ein Besatzungsmitglied auf einmal ersetzen und kann Besatzungsmitgliedern nicht bei ihren Würfen helfen.\nEinige Schiffsintelligenzen werden im Lauf der Jahre exzentrisch, benehmen sich unvorhersehbar und weigern sich, bestimmte Befehle auszuführen.',
    benefit: 'Vielseitige KI, alle Attributswerte 1, relevante Fertigkeitsstufen 3',
    cost: 30,
    bonusses: [],
    selected: false
  },
  {
    id: 23,
    name: 'Schiffssystem',
    text: 'Eine Besatzungsposition des Schiffs wird durch ein spezialisiertes Computersystem ersetzt.\nDas System besitzt einen Wert von 3 im Attribut und der relevanten Fertigkeit für die Position. Es ist möglich, mehr als ein Schiffssystem zu installieren.\nAlle Besatzungspositionen mit Ausnahme des Kapitäns können automatisiert werden.',
    benefit: 'Ersetzt ein Besatzungsmitglied, Attribut 3, Fertigkeitsstufe 3',
    cost: 20,
    bonusses: [],
    selected: false
  },
  {
    id: 24,
    name: 'Schwere Panzerung',
    text: 'Die Panzerung des Schiffs ist mit Duralitplatten und manchmal sogar Nanitenmustern verstärkt, die nach den Märtyrerrüstungen des Ordens gestaltet sind.\nVerleiht +1 Panzerungswert, verringert aber auch die Manövrierfähigkeit um 1.\nDieses Merkmal kann dreimal erworben werden.',
    benefit: 'Panzerungswert +1, Manövrierfähigkeit -1',
    requirement: 'Zugehörigkeit oder Lizenz vom Orden des Paria',
    cost: 10,
    bonusses: [
      {
        spec: 'maneuver',
        bonus: -1
      },
      {
        spec: 'armor',
        bonus: 1
      }
    ],
    selected: false
  },
  {
    id: 25,
    name: 'Supersensoren',
    text: 'Sensorkerne mit höherer Leistung, verstärkte Sensorkammern und Nanitenmembranen.',
    benefit: 'Erhöht die Reichweite der Schiffssensoren auf Extrem (8 KE)',
    cost: 20,
    bonusses: [],
    selected: false
  },
  {
    id: 26,
    name: 'Tarntechnologie',
    text: 'Das Schiff ist mit topaktueller, stark absorbierender Durakeramik und Nullsignatur-Strahlungsschilden ausgestattet.',
    benefit: 'Verringert die Schiffssignatur um 1, das Schiff kann im Kampf verschwinden',
    cost: 20,
    bonusses: [
      {
        spec: 'signature',
        bonus: -1
      }
    ],
    selected: false
  },
  {
    id: 27,
    name: 'Traumalabor',
    text: 'Das medizinische Labor wurde zu einem Traumalabor aufgerüstet.',
    benefit: '+4 Bonus auf Medikurgie-Würfe (+5 bei kritischen Wunden)',
    requirement: 'Modul Medizinisches Labor',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 28,
    name: 'Turboprojektor',
    text: 'Die Gravitonspulen des Projektors wurden verstärkt. Kann zweimal erworben werden.',
    benefit: 'Verleiht +1 Manövrierfähigkeit und Geschwindigkeit',
    cost: 20,
    bonusses: [
      {
        spec: 'maneuver',
        bonus: 1
      },
      {
        spec: 'speed',
        bonus: 1
      }
    ],
    selected: false
  },
  {
    id: 29,
    name: 'Überladener Reaktor',
    text: 'Die Brennstäbe im Reaktor nutzen Wasserstoffisotope mit höherer Energieleistung.',
    benefit: 'Verleiht dem Schiff +1 Leistungspunkt',
    cost: 10,
    bonusses: [
      {
        spec: 'ep',
        bonus: 1
      }
    ],
    selected: false
  },
  {
    id: 30,
    name: 'Zusätzliche Module',
    text: 'Das Merkmal kann, in Abhängigkeit der Schiffsklasse, mehrfach erworben werden.',
    benefit: '+5 Module',
    cost: 20,
    bonusses: [
      {
        spec: 'modules',
        bonus: 5
      }
    ],
    selected: false
  }
];