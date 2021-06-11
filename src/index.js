import p5 from "p5";

const TOTAL_MOLECULES = 100;
const WIDTH = 800;
const SPEED = 5;

const sketch = (s) => {
  const molecules = Array.from({ length: TOTAL_MOLECULES }, createMolecule);

  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function createMolecule() {
    const type = randomInt(2);
    const middle = WIDTH / 2;
    if (type == 0) return [randomInt(middle) + middle, randomInt(WIDTH), type];

    return [randomInt(middle), randomInt(WIDTH), type];
  }

  function randomMove(position) {
    const random = SPEED * (randomInt(3) - 1);

    position += random;

    return s.min(WIDTH, s.max(0, position));
  }

  function moveMolecule(molecule) {
    molecule[0] = randomMove(molecule[0]);
    molecule[1] = randomMove(molecule[1]);
  }

  function drawMolecule(molecule) {
    const [x, y, type] = molecule;
    if (type == 0) {
      s.fill(s.color(0, 0, 255));
    } else {
      s.fill(s.color(255, 0, 0));
    }

    s.noStroke();
    s.circle(x, y, 10);
  }

  function setup() {
    s.createCanvas(WIDTH, WIDTH);
  }

  function draw() {
    s.background(255);
    molecules.forEach(moveMolecule);
    molecules.forEach(drawMolecule);
  }

  s.setup = setup;
  s.draw = draw;
};

export default new p5(sketch);
