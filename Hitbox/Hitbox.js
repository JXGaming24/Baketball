/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hitbox extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Hitbox/costumes/costume1.svg", {
        x: 120.49997499999999,
        y: 251
      })
    ];

    this.sounds = [new Sound("pop", "./Hitbox/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    while (true) {
      this.goto(this.sprites["Hoop"].x, this.sprites["Hoop"].y);
      yield;
    }
  }
}
