export default [
    {
      id: 1,
      name: 'Andockstation',
      text: 'Das Schiff hat eine Andockluke und einen ausfahrbaren Tunnel, der es ermöglicht, an andere Schiffe anzudocken. Die Station beinhaltet eine Luftschleuse, die eine rudimentäre Dekontaminierung von Besuchern und Fremdobjekten durchführen kann. Ein Schiff ohne Andockstation muss in einem Hangar landen oder kleinere Schiffe in seinen eigenen Hangar einlassen, damit die Mannschaft das Schiff betreten oder verlassen kann.',
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
      text: 'Der Bereich hat Atmosphäre und ein Klimakontrollsystem, damit die Fracht die Reise überlebt. Wie viel Fracht der Frachtraum aufnehmen kann, hängt von der Schiffsklasse ab.\nKann mehrfach erworben werden.',
      cost: 5000,
      selected: false
    },
    {
      id: 5,
      name: 'Hangar',
      text: 'Kleinere Raumschiffe in das eigene Schiff einlassen zu können, hat viele Vorteile. Wie groß die Schiffe sein dürfen, die ein Hangar aufnehmen kann, hängt von der Schiffsklasse ab.\nDas Schiff, das in den Hangar einfliegen kann, muss mindestens zwei Klassen unter deiner Schiffsklasse liegen. Normalerweise kann sich nur ein Schiff auf einmal im Hangar befinden, doch für jeden zusätzlichen Schritt, den die Klassen auseinander liegen, wird die Zahl der Schiffe, die in den Hangar passt, mit vier multipliziert. Somit kann ein Schiffshangar der Klasse V ein Schiff der Klasse III aufnehmen, vier Schiffe der Klasse II oder 16 Schiffe der Klasse I.\nDu kannst mehr als einen Hangar in einem Schiff haben. Hangars sind sehr praktisch, wenn es um Reparaturen geht.',
      requirement: 'Schiff Klasse III oder höher',
      cost: 10000,
      selected: false
    },
    {
      id: 6,
      name: 'Kabinen-Sarg',
      text: 'Kabinen für die Mannschaft oder Passagiere. Kleine, sargartige Abteile in Reihen und Schichten angeordnet. Eine gemeinsame Hygieneeinheit.\nDie Passagierkapazität pro Modul hängt von der Art der Unterbringung und der Klasse des Schiffs ab.\nKann mehrfach erworben werden.',
      cost: 15000,
      selected: false
    },
    {
      id: 7,
      name: 'Kabinen-Standard',
      text: 'Kabinen für die Mannschaft oder Passagiere. Persönliche Kabinen mit 3 x 2 Metern. Jede Kabine hat ein Bett und eine Hygieneeinheit. Das Modul enthält einen kleinen gemeinsamen Aufenthaltsbereich mit Tisch und Stühlen.\nDie Passagierkapazität pro Modul hängt von der Art der Unterbringung und der Klasse des Schiffs ab.\nKann mehrfach erworben werden.',
      cost: 25000,
      selected: false
    },
    {
      id: 8,
      name: 'Kabinen-Suite',
      text: 'Kabinen für die Mannschaft oder Passagiere. Eine große Suite mit einem enormen Bett und Platz für Hygiene und Freizeit, so groß wie es in einem Raumschiff im Horizont möglich ist.\nDie Passagierkapazität pro Modul hängt von der Art der Unterbringung und der Klasse des Schiffs ab.\nKann mehrfach erworben werden.',
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
      text: 'Das medizinische Labor ist ein Modul, das bei der Behandlung von Wunden verwendet wird.',
      bonus: '+3 auf Medikurgie',
      cost: 10000,
      selected: false
    },
    {
      id: 11,
      name: 'Rettungskapsel',
      text: 'Diese „Rettungsboote“ erlauben es der Besatzung eines dem Untergang geweihten Schiffs, dem sicheren Tod zu entkommen.\nEine Kapsel zu aktivieren, ist eine normale Aktion. Die Kapseln enthalten Sauerstoff und Vorräte für eine Woche und sind manchmal mit Exoanzügen, Medizin und anderen nützlichen Gegenständen ausgestattet. In jeder Kapsel ist ein Notfallsender installiert, sie haben jedoch keinerlei Antrieb.\nDie Anzahl von Rettungskapseln pro Modul hängt von der Schiffsklasse ab. Schiffe der Klasse I sind zu klein, um Rettungskapseln aufnehmen zu können.',
      cost: 20000,
      selected: false
    },
    {
      id: 12,
      name: 'Schmuggellager',
      text: 'Ein verborgenes Lager für sensible Fracht.\nDa das Lager verborgen sein muss, ist der Großteil des Moduls mit anderen Dingen gefüllt, vielleicht einer Entspannungseinheit oder einfach gewöhnlicher Fracht. Das verborgene Lager kann nur 20% des Gewichtes eines normalen Frachtraums aufnehmen.\nUm ein verborgenes Lager zu finden, ist ein erfolgreicher Wurf auf Beobachtung notwendig.\nKann mehrfach erworben werden.',
      cost: 5000,
      selected: false
    },
    {
      id: 13,
      name: 'Stasiskammer',
      text: 'Die Stasiskammer enthält Betten für den Kryoschlaf.\nOhne Stasis sind Portalsprünge letztlich Selbstmord, oder zumindest ein Ticket ohne Rückfahrschein in Richtung chronischem Hyperwahnsinn. Stasis wird auch manchmal während langer interplanetarer Reisen verwendet. Schiffe, deren Ziel mehrere Sprünge entfernt liegt, wecken die Passagiere und Besatzungsmitglieder, deren Anwesenheit nicht essentiell ist, normalerweise erst auf, wenn der letzte Sprung abgeschlossen ist.\nDie Anzahl von Stasisbetten pro Modul hängt von der Schiffsklasse ab.\nKann mehrfach erworben werden.',
      cost: 25000,
      selected: false
    },
    {
      id: 14,
      name: 'Torpedo- und Minensystem',
      text: 'Ein Modul zur Lagerung und zum Abfeuern von Torpedos und Minen.\nKann bis zu vier Torpedos oder acht Minen aufnehmen (eine Mine zählt wie ein halber Torpedo). Die tatsächlichen Torpedos und Minen müssen einzeln gekauft werden.\nEin kritischer Treffer im Torpedoraum zerstört alle Torpedos und könnte eine Katastrophe für das ganze Schiff darstellen.',
      cost: 20000,
      selected: false
    },
    {
      id: 15,
      name: 'Wartungsstation',
      text: 'Die Wartungsstation ist eine nicht unter Druck stehende Frachteinheit, die mit allem beladen ist, was das Schiff für Reparaturen benötigen könnte.\nDas Modul unterstützt den Maschinisten bei Reparaturen während Raumreisen. Besatzungen, die weit durch den Weltraum reisen, tun gut daran, immer eine gut ausgestattete Wartungsstation zu haben, um ihr Schiff instand zu halten.',
      cost: 45000,
      selected: false
    },
    {
      id: 16,
      name: 'Werkstatt',
      text: 'Dieses Modul ist eine vollständige Werkstatt, um an Bord Reparaturen vorzunehmen.\nDie Werkstatt kann nur für Reparaturen bis zum gewöhnlichen Technologiegrad verwendet werden.',
      bonus: 'Das Modul gibt +1 auf Technologie-Würfe, auch auf Reparaturen am Schiff selbst.',
      cost: 75000,
      selected: false
    },
    {
      id: 17,
      name: 'Waffensystem - Täuschkörperwerfer',
      text: 'Eine mächtige Sensorboje, die vom Schiff abgefeuert wird, um nahende Torpedos wegzulocken.\nEin „Treffer“ beim Abfeuern dieser Waffe bedeutet, dass der Zieltorpedo sein Ziel verfehlt. Kann auch für Defensivfeuer verwendet werden.\nWaffensysteme können mehrfach erworben werden.',
      cost: 5000,
      selected: false
    },
    {
      id: 18,
      name: 'Waffensystem - Datenimpuls',
      text: 'Ein Impuls schadhafter Daten, die die Systeme eines gegnerischen Schiffes beschädigen. Verursacht Systemschaden anstatt Rumpfschaden.\nWaffensysteme können mehrfach erworben werden.',
      bonus: 'Panzerung hat keinen Effekt.',
      cost: 50000,
      selected: false
    },
    {
      id: 19,
      name: 'Waffensystem - Datenmem',
      text: 'Ein Mem, ein selbst lernendes Programm, wird in die Systeme eines gegnerischen Schiffs gesendet.\nEin Datenmem-Angriff hat zwei Phasen. Wenn der Angriff erfolgreich ist, wird das Zielmodul deaktiviert, als hätte es einen kritischen Treffer erlitten. Die drei erforderlichen Module Brücke, Reaktor und Gravitonprojektor können nicht mit einem Datenmem angegriffen werden.\nWaffensysteme können mehrfach erworben werden.',
      cost: 75000,
      selected: false
    },
    {
      id: 20,
      name: 'Waffensystem - Ionenrakete',
      text: 'Eine Rakete, die beim Einschlag eine mächtige ionisierte Entladung abgibt.\nVerursacht gleichermaßen Schaden an Systemen und Rumpf.',
      bonus: 'Verursacht sowohl System- als auch Rumpfschaden.\nWaffensysteme können mehrfach erworben werden.',
      cost: 7500,
      selected: false
    },
    {
      id: 21,
      name: 'Waffensystem - Beschleunigerkanone',
      text: 'Eine mächtige, magnetische Schienenkanone, die metallische Projektile mit hoher Geschwindigkeit abfeuert.\nWaffensysteme können mehrfach erworben werden.',
      cost: 25000,
      selected: false
    },
    {
      id: 22,
      name: 'Waffensystem - Mesonenkanone',
      text: 'Eine Kanone, die Disruptorstrahlen abfeuert. Ignoriert den Effekt von Panzerung.\nWaffensysteme können mehrfach erworben werden.',
      bonus: 'Verursacht sowohl System- als auch Rumpfschaden. Panzerung hat keinen Effekt.',
      cost: 0,
      selected: false
    },
    {
      id: 23,
      name: 'Waffensystem - Thermalkanone',
      text: 'Eine Kanone, die Strahlen aus überhitztem Plasma abfeuert.\nWaffensysteme können mehrfach erworben werden.',
      cost: 70000,
      selected: false
    },
    {
      id: 24,
      name: 'Waffensystem - Schwere Beschleunigerkanone',
      text: 'Eine Kanone mit einem längeren und größeren Beschleuniger, der mehr Schaden verursacht.\nWaffensysteme können mehrfach erworben werden.',
      cost: 40000,
      selected: false
    },
    {
      id: 25,
      name: 'Waffensystem - Autokanone',
      text: 'Eine kleine Vulkan-Kanone, die verwendet wird, um Enterversuche oder nahende Torpedos abzuwehren\nKann auch für Defensivfeuer verwendet werden.\nWaffensysteme können mehrfach erworben werden.',
      cost: 15000,
      selected: false
    },
    {
      id: 26,
      name: 'Waffensystem - Ionenkanone',
      text: 'Eine Kanone, die ionisierte Strahlung abfeuert. Verursacht Schaden gleichermaßen an Systemen und Rumpf.',
      bonus: 'Verursacht sowohl System- als auch Rumpfschaden.\nWaffensysteme können mehrfach erworben werden.',
      cost: 40000,
      selected: false
    },
    {
      id: 27,
      name: 'Waffensystem - Nestera Zerfleischer',
      text: 'Eine Beschleunigerkanone mit hoher Feuergeschwindigkeit und explosiven Geschossen, die sehr hohen Schaden verursachen.\nWaffensysteme können mehrfach erworben werden.',
      cost: 50000,
      selected: false
    },
    {
      id: 28,
      name: 'Waffensystem - Torpedo',
      text: 'Ein konventioneller Torpedo.\nPreis gilt pro Torpedo.',
      bonus: 'Bewegt sich 2 KE pro Runde.',
      requirement: 'Modul Torpedo- und Minensystem',
      cost: 5000,
      selected: false
    },
    {
      id: 29,
      name: 'Waffensystem - Plasmatorpedo',
      text: 'Ein Torpedo mit einem Plasmagefechtskopf.\nVerringert den Panzerungswert des gegnerischen Schiffs um 1, bis Reparaturen vorgenommen werden.\nPreis gilt pro Torpedo.',
      bonus: 'Bewegt sich 2 KE pro Runde. Degradiert Panzerung.',
      requirement: 'Modul Torpedo- und Minensystem',
      cost: 10000,
      selected: false
    },
    {
      id: 30,
      name: 'Waffensystem - Ionentorpedo',
      text: 'Ein Torpedo mit einem ionisierten Gefechtskopf.\nVerursacht Schaden gleichermaßen an Systemen und Rumpf.\nPreis gilt pro Torpedo.',
      bonus: 'Bewegt sich 2 KE pro Runde.',
      requirement: 'Modul Torpedo- und Minensystem',
      cost: 8000,
      selected: false
    },
    {
      id: 31,
      name: 'Waffensystem - Antimaterietorpedo',
      text: 'Ein Torpedo mit einem Antimateriegefechtskopf.\nDie Explosion verursacht bei allen Schiffen in kurzer Entfernung zur Explosion Schaden.\nPreis gilt pro Torpedo.',
      bonus: 'Bewegt sich 2 KE pro Runde.',
      requirement: 'Modul Torpedo- und Minensystem',
      cost: 400000,
      selected: false
    },
    {
      id: 32,
      name: 'Waffensystem - Nukleartorpedo',
      text: 'Ein Torpedo mit einem nuklearen Gefechtskopf.\nDie Explosion verursacht bei allen Schiffen in Kontaktreichweite zur Explosion Schaden.\nPreis gilt pro Torpedo.',
      bonus: 'Bewegt sich 2 KE pro Runde.',
      requirement: 'Modul Torpedo- und Minensystem',
      cost: 30000,
      selected: false
    },
    {
      id: 33,
      name: 'Waffensystem - Mine',
      text: 'Konventionelle Mine.\nPreis gilt pro Mine.',
      requirement: 'Modul Torpedo- und Minensystem',
      cost: 3000,
      selected: false
    },
    {
      id: 34,
      name: 'Waffensystem - Antimateriemine',
      text: 'Eine Mine mit einem Antimateriegefechtskopf.\nDie Explosion verursacht bei allen Schiffen in kurzer Reichweite zur Explosion Schaden.\nPreis gilt pro Mine.',
      requirement: 'Modul Torpedo- und Minensystem',
      cost: 300000,
      selected: false
    },
    {
      id: 35,
      name: 'Waffensystem - Nuklearmine',
      text: 'Eine Mine mit einem nuklearen Gefechtskopf.\nDie Explosion verursacht bei allen Schiffen in Kontaktreichweite zur Explosion Schaden.\nPreis gilt pro Mine.',
      requirement: 'Modul Torpedo- und Minensystem',
      cost: 20000,
      selected: false
    }
  ];