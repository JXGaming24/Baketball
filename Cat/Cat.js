/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("character1-b2", "./Cat/costumes/character1-b2.svg", {
        x: 54.60289955471532,
        y: 122.98040831057327
      }),
      new Costume("character1-b3", "./Cat/costumes/character1-b3.svg", {
        x: 62.94679500000001,
        y: 122.98040831057327
      })
    ];

    this.sounds = [
      new Sound("Meow", "./Cat/sounds/Meow.wav"),
      new Sound("Dance Snare Beat", "./Cat/sounds/Dance Snare Beat.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.vars.yVelocity = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.yVelocity = 0;
    while (true) {
      this.y += this.vars.yVelocity;
      this.vars.yVelocity += -2;
      if (this.y > -48) {
        this.vars.yVelocity += -2;
      } else {
        if (this.y < -48) {
          this.y = -48;
          this.vars.yVelocity = 0;
        }
      }
      yield;
    }
  }

  *whenKeyUpArrowPressed() {
    if (this.y == -48) {
      this.vars.yVelocity = 25;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.x += -10;
      } else {
        if (this.keyPressed("right arrow")) {
          this.x += 10;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.costumeNumber += 1;
        yield* this.wait(0.1);
      } else {
        if (this.keyPressed("left arrow")) {
          this.costumeNumber += 1;
          yield* this.wait(0.1);
        }
      }
      yield;
    }
  }
}
