export default [
  {
    id: 1,
    name: 'Ablative Panzerung',
    benefit: 'Verringert Schaden für einen Angriff um 3',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 2,
    name: 'Antimaterieantrieb',
    benefit: 'Manövrierfähigkeit +2',
    cost: 20,
    bonusses: [
      {
        spec: 'maneuver',
        bonus: 2
      }
    ],
    selected: false
  },
  {
    id: 3,
    name: 'Arboretum',
    benefit: 'Hilft der Besatzung dabei, Willenskraftpunkte aufzufrischen',
    cost: 5,
    bonusses: [],
    selected: false
  },
  {
    id: 4,
    name: 'Atmosphäreneintritt',
    benefit: 'Kann auf Planeten landen/abheben.',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 5,
    name: 'Aufgebohrter Beschleuniger',
    benefit: 'Verleiht +2 auf die Aktion Vorrücken/Rückzug',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 6,
    name: 'Auswurfsystem',
    benefit: 'Rettungskapsel auf der Brücke',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 7,
    name: 'Bergungseinheit',
    benefit: 'Ermöglicht Bergungen',
    cost: 10,
    selected: false
  },
  {
    id: 8,
    name: 'Bibliotheksdatenbank',
    benefit: 'Verleiht +3 auf Würfe mit Kultur oder Wissenschaft',
    cost: 5,
    bonusses: [],
    selected: false
  },
  {
    id: 9,
    name: 'ED-Felder',
    benefit: 'Schützt vor explosiver Dekompression',
    cost: 20,
    bonusses: [],
    selected: false
  },
  {
    id: 10,
    name: 'Empfindliche Sensoren',
    benefit: 'Verleiht +1 auf Sensorwürfe',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 11,
    name: 'Externe Fracht',
    benefit: 'Fracht wird im Vakuum außen am Rumpf befestigt',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 12,
    name: 'Forschungscomputer',
    benefit: 'Verleiht +1 auf Wissenschaft für Analysen',
    cost: 5,
    bonusses: [],
    selected: false
  },
  {
    id: 13,
    name: 'Fortschrittlicher Feuerleitcomputer',
    benefit: 'Verleiht +1 zur Zielerfassung.',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 14,
    name: 'Fortschrittliche Täuschkörper',
    benefit: 'Verleiht +1 beim Einsatz von Gegenmaßnahmen',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 15,
    name: 'Fortschrittliche Torpedos',
    benefit: 'Verleiht -1 auf die Gegenmaßnahmen des Zielschiffs',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 16,
    name: 'Fortschrittliche Waffensysteme',
    benefit: 'Verleiht +1 beim Abfeuern eines bestimmten Waffensystems',
    cost: 20,
    bonusses: [],
    selected: false
  },
  {
    id: 17,
    name: 'Fortschrittliche Werkstatt',
    benefit: 'Kann fortschrittliche Technologie reparieren',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 18,
    name: 'Gesegnetes Schiff',
    benefit: 'Bonus von +1 auf Portalsprünge',
    cost: 5,
    bonusses: [],
    selected: false
  },
  {
    id: 19,
    name: 'Präzise Schubdüsen',
    benefit: 'Bonus von +2 auf Pilot, wenn du andocken oder landen willst',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 20,
    name: 'Reaktorschub',
    benefit: 'Verleiht +3 LP beim Überladen des Reaktors',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 21,
    name: 'Robuster Rumpf',
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
    benefit: 'Vielseitige KI, alle Attributswerte 1, relevante Fertigkeitsstufen 3',
    cost: 30,
    bonusses: [],
    selected: false
  },
  {
    id: 23,
    name: 'Schiffssystem',
    benefit: 'Ersetzt ein Besatzungsmitglied, Attribut 3, Fertigkeitsstufe 3',
    cost: 20,
    bonusses: [],
    selected: false
  },
  {
    id: 24,
    name: 'Schwere Panzerung',
    benefit: 'Panzerungswert +1, Manövrierfähigkeit -1',
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
    benefit: 'Erhöht die Reichweite der Schiffssensoren auf Extrem',
    cost: 20,
    bonusses: [],
    selected: false
  },
  {
    id: 26,
    name: 'Tarntechnologie',
    benefit: 'Verringert die Schiffssignatur um 1',
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
    benefit: 'Verleiht einen Bonus auf Medikurgie-Würfe',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 28,
    name: 'Turboprojektor',
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
    benefit: 'Verleiht dem Schiff +1 Leistungspunkt',
    cost: 10,
    bonusses: [],
    selected: false
  },
  {
    id: 30,
    name: 'Zusätzliche Module',
    benefit: 'Zusätzlicher Raum für weitere Module',
    cost: 20,
    bonusses: [
      {
        spec: 'ep',
        bonus: 1
      }
    ],
    selected: false
  }
];