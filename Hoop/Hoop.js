/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hoop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Hoop/costumes/costume1.svg", {
        x: 84.2088599999999,
        y: 23.207769999999982
      })
    ];

    this.sounds = [
      new Sound("pop", "./Hoop/sounds/pop.wav"),
      new Sound("Cheer", "./Hoop/sounds/Cheer.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "swoosh" },
        this.whenIReceiveSwoosh
      )
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.glide(1, this.random(-240, 240), this.random(-50, 180));
      yield;
    }
  }

  *whenIReceiveSwoosh() {
    yield* this.startSound("Cheer");
    yield* this.sayAndWait("swoosh", 2);
  }
}
