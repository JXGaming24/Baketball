/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CodedBasketball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("basketball", "./CodedBasketball/costumes/basketball.svg", {
        x: 23,
        y: 23
      })
    ];

    this.sounds = [
      new Sound("pop", "./CodedBasketball/sounds/pop.wav"),
      new Sound(
        "basketball bounce",
        "./CodedBasketball/sounds/basketball bounce.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      )
    ];

    this.vars.yVelocity3 = -32;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.player1Score = 0;
    this.visible = false;
  }

  *whenKeySpacePressed() {
    this.broadcast("shot");
    yield* this.startSound("basketball bounce");
    this.goto(this.sprites["Cat"].x, this.sprites["Cat"].y);
    this.vars.yVelocity3 = 24;
    this.visible = true;
    while (!(this.y < -130)) {
      this.x += 8;
      this.y += this.vars.yVelocity3;
      this.vars.yVelocity3 += -2;
      this.direction += 6;
      if (
        this.touching(this.sprites["Hitbox"].andClones()) &&
        this.vars.yVelocity3 < 0
      ) {
        this.stage.vars.player1Score += 1;
        this.broadcast("swoosh");
        while (!!this.touching(this.sprites["Hitbox"].andClones())) {
          yield;
        }
      }
      yield;
    }
    this.broadcast("taken");
    this.visible = false;
  }
}
