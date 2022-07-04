/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TheGriddy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Griddy", "./TheGriddy/costumes/Griddy.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy2", "./TheGriddy/costumes/Griddy2.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy3", "./TheGriddy/costumes/Griddy3.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy4", "./TheGriddy/costumes/Griddy4.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy5", "./TheGriddy/costumes/Griddy5.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy6", "./TheGriddy/costumes/Griddy6.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy7", "./TheGriddy/costumes/Griddy7.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy8", "./TheGriddy/costumes/Griddy8.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy9", "./TheGriddy/costumes/Griddy9.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy10", "./TheGriddy/costumes/Griddy10.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy11", "./TheGriddy/costumes/Griddy11.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy12", "./TheGriddy/costumes/Griddy12.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy13", "./TheGriddy/costumes/Griddy13.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy14", "./TheGriddy/costumes/Griddy14.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy15", "./TheGriddy/costumes/Griddy15.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy16", "./TheGriddy/costumes/Griddy16.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy17", "./TheGriddy/costumes/Griddy17.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy18", "./TheGriddy/costumes/Griddy18.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy19", "./TheGriddy/costumes/Griddy19.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy20", "./TheGriddy/costumes/Griddy20.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy21", "./TheGriddy/costumes/Griddy21.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy22", "./TheGriddy/costumes/Griddy22.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy23", "./TheGriddy/costumes/Griddy23.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy24", "./TheGriddy/costumes/Griddy24.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy25", "./TheGriddy/costumes/Griddy25.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy26", "./TheGriddy/costumes/Griddy26.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy27", "./TheGriddy/costumes/Griddy27.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy28", "./TheGriddy/costumes/Griddy28.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy29", "./TheGriddy/costumes/Griddy29.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy30", "./TheGriddy/costumes/Griddy30.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy31", "./TheGriddy/costumes/Griddy31.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy32", "./TheGriddy/costumes/Griddy32.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy33", "./TheGriddy/costumes/Griddy33.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy34", "./TheGriddy/costumes/Griddy34.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy35", "./TheGriddy/costumes/Griddy35.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy36", "./TheGriddy/costumes/Griddy36.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy37", "./TheGriddy/costumes/Griddy37.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy38", "./TheGriddy/costumes/Griddy38.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy39", "./TheGriddy/costumes/Griddy39.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy40", "./TheGriddy/costumes/Griddy40.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy41", "./TheGriddy/costumes/Griddy41.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy42", "./TheGriddy/costumes/Griddy42.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy43", "./TheGriddy/costumes/Griddy43.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy44", "./TheGriddy/costumes/Griddy44.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy45", "./TheGriddy/costumes/Griddy45.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy46", "./TheGriddy/costumes/Griddy46.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy47", "./TheGriddy/costumes/Griddy47.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy48", "./TheGriddy/costumes/Griddy48.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy49", "./TheGriddy/costumes/Griddy49.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy50", "./TheGriddy/costumes/Griddy50.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy51", "./TheGriddy/costumes/Griddy51.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy52", "./TheGriddy/costumes/Griddy52.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy53", "./TheGriddy/costumes/Griddy53.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy54", "./TheGriddy/costumes/Griddy54.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy55", "./TheGriddy/costumes/Griddy55.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy56", "./TheGriddy/costumes/Griddy56.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy57", "./TheGriddy/costumes/Griddy57.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy58", "./TheGriddy/costumes/Griddy58.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy59", "./TheGriddy/costumes/Griddy59.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy60", "./TheGriddy/costumes/Griddy60.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy61", "./TheGriddy/costumes/Griddy61.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy62", "./TheGriddy/costumes/Griddy62.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy63", "./TheGriddy/costumes/Griddy63.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy64", "./TheGriddy/costumes/Griddy64.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy65", "./TheGriddy/costumes/Griddy65.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy66", "./TheGriddy/costumes/Griddy66.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy67", "./TheGriddy/costumes/Griddy67.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy68", "./TheGriddy/costumes/Griddy68.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy69", "./TheGriddy/costumes/Griddy69.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy70", "./TheGriddy/costumes/Griddy70.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy71", "./TheGriddy/costumes/Griddy71.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy72", "./TheGriddy/costumes/Griddy72.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy73", "./TheGriddy/costumes/Griddy73.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy74", "./TheGriddy/costumes/Griddy74.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy75", "./TheGriddy/costumes/Griddy75.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy76", "./TheGriddy/costumes/Griddy76.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy77", "./TheGriddy/costumes/Griddy77.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy78", "./TheGriddy/costumes/Griddy78.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy79", "./TheGriddy/costumes/Griddy79.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy80", "./TheGriddy/costumes/Griddy80.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy81", "./TheGriddy/costumes/Griddy81.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy82", "./TheGriddy/costumes/Griddy82.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy83", "./TheGriddy/costumes/Griddy83.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy84", "./TheGriddy/costumes/Griddy84.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy85", "./TheGriddy/costumes/Griddy85.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy86", "./TheGriddy/costumes/Griddy86.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy87", "./TheGriddy/costumes/Griddy87.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy88", "./TheGriddy/costumes/Griddy88.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy89", "./TheGriddy/costumes/Griddy89.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy90", "./TheGriddy/costumes/Griddy90.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy91", "./TheGriddy/costumes/Griddy91.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy92", "./TheGriddy/costumes/Griddy92.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy93", "./TheGriddy/costumes/Griddy93.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy94", "./TheGriddy/costumes/Griddy94.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy95", "./TheGriddy/costumes/Griddy95.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy96", "./TheGriddy/costumes/Griddy96.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy97", "./TheGriddy/costumes/Griddy97.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy98", "./TheGriddy/costumes/Griddy98.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy99", "./TheGriddy/costumes/Griddy99.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy100", "./TheGriddy/costumes/Griddy100.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy101", "./TheGriddy/costumes/Griddy101.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy102", "./TheGriddy/costumes/Griddy102.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy103", "./TheGriddy/costumes/Griddy103.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy104", "./TheGriddy/costumes/Griddy104.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy105", "./TheGriddy/costumes/Griddy105.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy106", "./TheGriddy/costumes/Griddy106.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy107", "./TheGriddy/costumes/Griddy107.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy108", "./TheGriddy/costumes/Griddy108.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy109", "./TheGriddy/costumes/Griddy109.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy110", "./TheGriddy/costumes/Griddy110.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy111", "./TheGriddy/costumes/Griddy111.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy112", "./TheGriddy/costumes/Griddy112.png", {
        x: 200,
        y: 200
      }),
      new Costume("Griddy113", "./TheGriddy/costumes/Griddy113.png", {
        x: 200,
        y: 200
      })
    ];

    this.sounds = [new Sound("OnlyMP3", "./TheGriddy/sounds/OnlyMP3.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.player1Score == 5) {
        this.visible = true;
        yield* this.playSoundUntilDone("OnlyMP3");
        /* TODO: Implement stop other scripts in sprite */ null;
        this.visible = false;
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      yield* this.wait(".");
      this.costumeNumber += 1;
      yield;
    }
  }
}
