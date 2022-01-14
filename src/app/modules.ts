export default [
    {
      id: 1,
      name: 'Andockstation',
      text: 'Das Schiff hat eine Andockluke und einen ausfahrbaren Tunnel, der es ermöglicht, an andere Schiffe anzudocken. Die Station beinhaltet eine Luftschleuse, die eine rudimentäre Dekontaminierung von Besuchern und Fremdobjekten durchführen kann. Ein Schiff ohne Andockstation muss in einem Hangar landen oder kleinere Schiffe in seinen eigenen Hangar einlassen, damit die Mannschaft das Schiff betreten oder verlassen kann.',
      bonus: '-',
      cost: 150000,
      selected: false
    },
    {
      id: 2,
      name: 'Bergbaustation',
      text: 'Dieses Modul ist notwendig, wenn die Besatzung wertvolle Gase und Mineralien abbauen möchte. Es enthält Bohrer, Erznetze, einige kleinere Magnetschlepper und Ausrüstung für die Besatzung: Handbohrer, Vibro-Spitzhacken und Brecheisen für körperliche Arbeiten. Um die Funde zu lagern, ist ein Frachtraum notwendig.',
      cost: 75000,
      selected: false
    },
    {
      id: 3,
      name: 'Bergungsstation',
      text: 'Um Wracks und Weltraumschrott zu bergen, brauchst du genug freien Platz, ein System von Lastkränen, einige mechanisierte Greifarme und einen guten Rumpfschneider. Das Bergungsmodul kann verwendet werden, um Schutt oder Schiffe bis zu einer Klasse unter der des Schiffs zu bergen.',
      cost: 55000,
      selected: false
    },
    {
      id: 4,
      name: 'Frachtraum',
      text: 'Der Bereich hat Atmosphäre und ein Klimakontrollsystem, damit die Fracht die Reise überlebt. Wie viel Fracht der Frachtraum aufnehmen kann, hängt von der Schiffsklasse ab.',
      cost: 5000,
      selected: false
    },
    {
      id: 5,
      name: 'Hangar',
      text: 'Kleinere Raumschiffe in das eigene Schiff einlassen zu können, hat viele Vorteile. Wie groß die Schiffe sein dürfen, die ein Hangar aufnehmen kann, hängt von der Schiffsklasse ab. Das Schiff, das in den Hangar einfliegen kann, muss mindestens zwei Klassen unter deiner Schiffsklasse liegen. Normalerweise kann sich nur ein Schiff auf einmal im Hangar befinden, doch für jeden zusätzlichen Schritt, den die Klassen auseinander liegen, wird die Zahl der Schiffe, die in den Hangar passt, mit vier multipliziert. Somit kann ein Schiffshangar der Klasse V ein Schiff der Klasse III aufnehmen, vier Schiffe der Klasse II oder 16 Schiffe der Klasse I. Du kannst mehr als einen Hangar in einem Schiff haben. Hangars sind sehr praktisch, wenn es um Reparaturen geht (siehe Seite 168).',
      cost: 10000,
      selected: false
    },
    {
      id: 6,
      name: 'Kabinen-Sarg',
      text: 'Kabinen für die Mannschaft oder Passagiere. Kleine, sargartige Abteile in Reihen und Schichten angeordnet. Eine gemeinsame Hygieneeinheit.',
      cost: 15000,
      selected: false
    },
    {
      id: 7,
      name: 'Kabinen-Standard',
      text: 'Kabinen für die Mannschaft oder Passagiere. Persönliche Kabinen mit 3 x 2 Metern. Jede Kabine hat ein Bett und eine Hygieneeinheit. Das Modul enthält einen kleinen gemeinsamen Aufenthaltsbereich mit Tisch und Stühlen.',
      cost: 25000,
      selected: false
    },
    {
      id: 8,
      name: 'Kabinen-Suite',
      text: 'Kabinen für die Mannschaft oder Passagiere. Eine große Suite mit einem enormen Bett und Platz für Hygiene und Freizeit, so groß wie es in einem Raumschiff im Horizont möglich ist.',
      cost: 40000,
      selected: false
    },
    {
      id: 9,
      name: 'Kapelle',
      text: 'Ein Bereich, der für die Anbetung der Ikonen reserviert ist, mit acht sichtbaren Ikonen und einer Asymmetrie in ihrer Anbringung (oder einem leeren Alkoven) für den Gesichtslosen.',
      bonus: 'Gewährt +1 auf Wiederholungswürfe von Gebeten für die gesamte Besatzung (siehe Seite 55), sowie einen Bonus bei Portalsprüngen (siehe Seite 139).',
      cost: 10000,
      selected: false
    },
    {
      id: 10,
      name: 'Medizinisches Labor',
      text: 'Das medizinische Labor ist ein Modul, das bei der Behandlung von Wunden verwendet wird. Mehr dazu findest du in Kapitel 5.',
      cost: 10000,
      selected: false
    },
    {
      id: 11,
      name: 'Rettungskapsel',
      text: 'Diese „Rettungsboote“ erlauben es der Besatzung eines dem Untergang geweihten Schiffs, dem sicheren Tod zu entkommen. Eine Kapsel zu aktivieren, ist eine normale Aktion. Die Kapseln enthalten Sauerstoff und Vorräte für eine Woche und sind manchmal mit Exoanzügen, Medizin und anderen nützlichen Gegenständen ausgestattet. In jeder Kapsel ist ein Notfallsender installiert, sie haben jedoch keinerlei Antrieb. Die Anzahl von Rettungskapseln pro Modul hängt von der Schiffsklasse ab. Schiffe der Klasse I sind zu klein, um Rettungskapseln aufnehmen zu können.',
      cost: 20000,
      selected: false
    },
    {
      id: 12,
      name: 'Schmuggellager',
      text: 'Ein verborgenes Lager für sensible Fracht. Da das Lager verborgen sein muss, ist der Großteil des Moduls mit anderen Dingen gefüllt, vielleicht einer Entspannungseinheit oder einfach gewöhnlicher Fracht. Das verborgene Lager kann nur 20% des Gewichtes eines normalen Frachtraums aufnehmen. Um ein verborgenes Lager zu finden, ist ein erfolgreicher Wurf auf Beobachtung notwendig.',
      cost: 5000,
      selected: false
    },
    {
      id: 13,
      name: 'Stasiskammer',
      text: 'Hiding contraband',
      cost: 25000,
      selected: false
    },
    {
      id: 14,
      name: 'Torpedo- und Minensystem',
      text: 'Needed for portal jumps',
      cost: 20000,
      selected: false
    },
    {
      id: 15,
      name: 'Wartungsstation',
      text: 'Storing and firing torpedoes/mines',
      cost: 45000,
      selected: false
    },
    {
      id: 16,
      name: 'Werkstatt',
      text: 'Fixing broken gear and systems',
      cost: 75000,
      selected: false
    },
    {
      id: 17,
      name: 'Weapon - Countermeasure Dispenser',
      text: '',
      cost: 5000,
      selected: false
    },
    {
      id: 18,
      name: 'Weapon - Data Pulse',
      text: '',
      cost: 50000,
      selected: false
    },
    {
      id: 19,
      name: 'Weapon - Data Meme',
      text: '',
      cost: 75000,
      selected: false
    },
    {
      id: 20,
      name: 'Weapon - Ion Missile',
      text: '',
      cost: 7500,
      selected: false
    },
    {
      id: 21,
      name: 'Weapon - Accelerator Cannon',
      text: '',
      cost: 25000,
      selected: false
    },
    {
      id: 22,
      name: 'Weapon - Meson Cannon*',
      text: '',
      cost: 0,
      selected: false
    },
    {
      id: 23,
      name: 'Weapon - Thermal Cannon',
      text: '',
      cost: 70000,
      selected: false
    },
    {
      id: 24,
      name: 'Weapon - Heavy Accelerator Cannon',
      text: '',
      cost: 40000,
      selected: false
    },
    {
      id: 25,
      name: 'Weapon - Autocannon',
      text: '',
      cost: 15000,
      selected: false
    },
    {
      id: 26,
      name: 'Weapon - Ion Cannon',
      text: '',
      cost: 40000,
      selected: false
    },
    {
      id: 27,
      name: 'Weapon - Nestera Mangler',
      text: '',
      cost: 50000,
      selected: false
    },
    {
      id: 28,
      name: 'Weapon - Torpedo',
      text: '',
      cost: 5000,
      selected: false
    },
    {
      id: 29,
      name: 'Weapon - Plasma Torpedo',
      text: '',
      cost: 10000,
      selected: false
    },
    {
      id: 30,
      name: 'Weapon - Ion Torpedo',
      text: '',
      cost: 8000,
      selected: false
    },
    {
      id: 31,
      name: 'Weapon - Antimatter Torpedo*',
      text: '',
      cost: 400000,
      selected: false
    },
    {
      id: 32,
      name: 'Weapon - Nuclear Torpedo',
      text: '',
      cost: 30000,
      selected: false
    },
    {
      id: 33,
      name: 'Weapon - Mine',
      text: '',
      cost: 3000,
      selected: false
    },
    {
      id: 34,
      name: 'Weapon - Antimatter Mine*',
      text: '',
      cost: 300000,
      selected: false
    },
    {
      id: 35,
      name: 'Weapon - Nuclear Mine',
      text: 'test',
      cost: 20000,
      selected: false
    }
  ];