import { Component, OnInit } from '@angular/core';
import Ships from './ships';
import Modules from './modules';
import Classes from './classes';
import { Shipyards, IShipyard } from './shipyards';
import Problems from './problems';
import Features from './features';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  
  tab = 'type';
  ship = {
    id: null,
    name: null,
    type: {id: null, name: null},
    class: {name: null},
    shipyard: {name: null},
    problem: {name: null},
    features: [],
    modules: [],
    totalCost: null,
    costs: [],
    specs: {
      maneuver: 0,
      modules: 0,
      ep: 0,
      hp: 0,
      signature: 0,
      armor: 0,
      speed: 0
    }
  };
  ships = Ships;
  classes = Classes;
  modules = Modules
  shipyards: IShipyard[] = Shipyards;
  problems = Problems;
  features = Features;

  ngOnInit() {}

  pickShip(ship) {
    const classData = this.classes[ship.class];

    this.ship.class = classData;
    this.ship.type = ship;
    this.ship.modules = [
      {
        id: 1,
        name: 'Brücke',
        cost: 0
      }, 
      {
        id: 2,
        name: 'Reaktor',
        cost: 0,
      },
      {
        id: 3,
        name: 'Gravitonprojektor',
        cost: 0,
      }
    ];

    this.calculateSpecs();
    this.calculateCost();
  }

  calculateSpecs() {
    if (this.ship.class['specs']) {
      this.ship.specs = Object.assign({}, this.ship.class['specs']);
    } else {
      this.ship.specs = {
        maneuver: 0,
        modules: 0,
        ep: 0,
        hp: 0,
        signature: 0,
        armor: 0,
        speed: 0
      };
    }

    if (this.ship.shipyard['bonusses']) {
      const bonusses = this.ship.shipyard['bonusses'];
      bonusses.forEach((bonus) => {
        this.ship.specs[bonus.spec] = this.ship.specs[bonus.spec] + bonus.bonus;
      });
    }

    this.ship.features.forEach((feature) => {
      if (feature.bonusses.length > 0) {
        feature.bonusses.forEach((bonus) => {
          this.ship.specs[bonus.spec] = this.ship.specs[bonus.spec] + bonus.bonus;
        });
      }
    });
  }

  calculateCost() {
    let cost = 0;

    if (this.ship.class['cost']) {
      cost = cost + this.ship.class['cost'];
    }

    if (this.ship.shipyard['id']) {
      const modifier = this.ship.shipyard['costPercent'];
      cost = cost * (1 + (modifier / 100));
    }

    let featureMod = 0;
    this.ship.features.forEach((feature) => {
      featureMod = featureMod + feature.cost;
    });
    cost = cost * (1 + (featureMod / 100));

    this.ship.modules.forEach((module) => {
      cost = cost + module.cost;
    });

    this.ship.totalCost = cost;
  }

  selectShipyard(shipyard) {
    this.ship.shipyard = shipyard;
    this.calculateSpecs();
    this.calculateCost();
  }

  selectProblem(problem) {
    this.ship.problem = problem;
  }

  addFeature(feature) {
    if (this.ship.features.includes(feature)) {
      this.removeFeature(feature);
      return;
    }

    this.ship.features.push(feature);
    feature.selected = true;
    this.calculateSpecs();
    this.calculateCost();
  }

  removeFeature(feature) {
    const index = this.ship.features.findIndex(item => item.id === feature.id);

    if (index >= 0) {
      this.ship.features.splice(index, 1);
      feature.selected = false;
    }

    this.calculateSpecs();
    this.calculateCost();
  }

  addModule(module) {
    if (this.ship.modules.includes(module)) {
      this.removeModule(module);
      return;
    }

    this.ship.modules.push(module);
    module.selected = true;
    this.calculateSpecs();
    this.calculateCost();
  }

  removeModule(module) {
    const index = this.ship.modules.findIndex(item => item.id === module.id);

    if (index >= 0) {
      this.ship.modules.splice(index, 1);
      module.selected = false;
    }

    this.calculateSpecs();
    this.calculateCost();
  }
}
