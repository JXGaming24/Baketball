/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Wall 1", "./Stage/costumes/Wall 1.svg", {
        x: 120.499985,
        y: 251
      }),
      new Costume("Wall 2", "./Stage/costumes/Wall 2.png", { x: 480, y: 360 })
    ];

    this.sounds = [
      new Sound("pop", "./Stage/sounds/pop.wav"),
      new Sound("Basketball Bounce", "./Stage/sounds/Basketball Bounce.wav")
    ];

    this.triggers = [];

    this.vars.myVariable = -668;
    this.vars.player1Score = 20;
  }
}
