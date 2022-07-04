/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Basketball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("basketball", "./Basketball/costumes/basketball.svg", {
        x: 23,
        y: 23
      })
    ];

    this.sounds = [
      new Sound("pop", "./Basketball/sounds/pop.wav"),
      new Sound(
        "basketball bounce",
        "./Basketball/sounds/basketball bounce.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "shot" }, this.whenIReceiveShot),
      new Trigger(Trigger.BROADCAST, { name: "taken" }, this.whenIReceiveTaken)
    ];

    this.audioEffects.volume = 70;

    this.vars.yVelocity2 = -32;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    while (true) {
      this.goto(this.sprites["Cat"].x, this.sprites["Cat"].y);
      yield;
    }
  }

  *whenIReceiveShot() {
    this.visible = false;
  }

  *whenIReceiveTaken() {
    this.visible = true;
  }
}
