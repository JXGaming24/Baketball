import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Cat from "./Cat/Cat.js";
import Hoop from "./Hoop/Hoop.js";
import Hitbox from "./Hitbox/Hitbox.js";
import Basketball from "./Basketball/Basketball.js";
import CodedBasketball from "./CodedBasketball/CodedBasketball.js";
import TheGriddy from "./TheGriddy/TheGriddy.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Cat: new Cat({
    x: -172,
    y: -48,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Hoop: new Hoop({
    x: 93.39999999999998,
    y: 29.391999999999996,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Hitbox: new Hitbox({
    x: 93.39999999999998,
    y: 29.391999999999996,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Basketball: new Basketball({
    x: -172,
    y: -48,
    direction: 10,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  CodedBasketball: new CodedBasketball({
    x: 42,
    y: -132,
    direction: 170,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  TheGriddy: new TheGriddy({
    x: -18,
    y: 1,
    direction: 90,
    costumeNumber: 84,
    size: 100,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
