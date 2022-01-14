export interface IShipyard {
  id: number;
  name: string;
  system: string;
  costPercent: number;
  text: string;
  bonusses: IBonus[];
}

export interface IBonus {
  spec: string;
  bonus: number;
}

export const Shipyards: IShipyard[] = [
    {
      id: 1,
      name: 'Chelebs',
      system: 'Mira',
      costPercent: 5,
      text: 'Wunderschöne, geschmeidige und schnelle Schiffe. +1 auf Manövrierfähigkeit, aber +1 auf Signatur. +5% auf die Grundkosten.',
      bonusses: [
        {
          spec: 'maneuver',
          bonus: 1
        },
        {
          spec: 'signature',
          bonus: 1
        }
      ]
    },
    {
      id: 2,
      name: 'Harima',
      system: 'Der Monolith',
      costPercent: 5,
      text: 'Schnelle Schiffe, die für Verfolgungsjagden oder Kuriermissionen ausgelegt sind. Luxuriös. +1 LP, aber -1 RP. +5% auf die Grundkosten.',
      bonusses: [
        {
          spec: 'ep',
          bonus: 1
        },
        {
          spec: 'hp',
          bonus: -1
        }
      ]
    },
    {
      id: 3,
      name: 'Karrmerruk',
      system: 'Zalos',
      costPercent: 0,
      text: 'Paria-Schiffe, Antimaterieantrieb. Ermöglicht den Erwerb des Merkmals Antimaterieraketen. Keine Erhöhung des Preises, außer du wählst dieses Merkmal.',
      bonusses: []
    },
    {
      id: 4,
      name: 'Darkos',
      system: 'Kua-Asteroidengürtel',
      costPercent: 5,
      text: 'Praktische, bewaffnete Frachter. +1 RP, aber -2 auf Panzerung. +5% auf die Grundkosten.',
      bonusses: [
        {
          spec: 'hp',
          bonus: 1
        },
        {
          spec: 'armor',
          bonus: -2
        }
      ]
    },
    {
      id: 5,
      name: 'Halgria',
      system: 'In der Umlaufbahn zwischen Coriolis und Kua',
      costPercent: -5,
      text: 'Billige Frachter von schlechter Qualität, außerdem Großfrachter. -1 auf Manövrierfähigkeit, aber +(Klasse) zusätzliche Module. -5% auf die Grundkosten.',
      bonusses: [
        {
          spec: 'maneuver',
          bonus: -1
        },
        {
          spec: 'modules',
          bonus: 4
        }
      ]
    },
    {
      id: 6,
      name: 'Daharab',
      system: 'Sadaal B (das Syndikat/Ferekam)',
      costPercent: 5,
      text: 'Frachter und Kriegsschiffe mit illegaler Bewaffnung. +1 auf zusätzliche Module, aber +(Klasse) Module für Waffen reserviert. +5% auf die Grundkosten.',
      bonusses: [
        {
          spec: 'modules',
          bonus: 3
        }
      ]
    }
  ];