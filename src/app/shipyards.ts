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
      text: 'Wunderschöne, geschmeidige und schnelle Schiffe.\n+1 auf Manövrierfähigkeit, +1 auf Signatur\n+5% auf die Grundkosten.',
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
      text: 'Schnelle Schiffe, die für Verfolgungsjagden oder Kuriermissionen ausgelegt sind.\nLuxuriös, +1 LP, -1 RP\n+5% auf die Grundkosten.',
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
      text: 'Paria-Schiffe, Antimaterieantrieb. Ermöglicht den Erwerb des Merkmals Antimaterieraketen.\nKeine Erhöhung des Preises, außer du wählst dieses Merkmal.',
      bonusses: []
    },
    {
      id: 4,
      name: 'Darkos',
      system: 'Kua-Asteroidengürtel',
      costPercent: 5,
      text: 'Praktische, bewaffnete Frachter.\n+1 RP, -2 auf Panzerung\n+5% auf die Grundkosten.',
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
      text: 'Billige Frachter von schlechter Qualität, außerdem Großfrachter.\n-1 auf Manövrierfähigkeit, +(Klasse) zusätzliche Module\n-5% auf die Grundkosten.',
      bonusses: [
        {
          spec: 'maneuver',
          bonus: -1
        }
      ]
    },
    {
      id: 6,
      name: 'Daharab',
      system: 'Sadaal B (das Syndikat/Ferekam)',
      costPercent: 5,
      text: 'Frachter und Kriegsschiffe mit illegaler Bewaffnung.\n-1 auf zusätzliche Module, +(Klasse) Waffenmodule\n+5% auf die Grundkosten.',
      bonusses: [
        {
          spec: 'modules',
          bonus: -1
        }
      ]
    }
  ];