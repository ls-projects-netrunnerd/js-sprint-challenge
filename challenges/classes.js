class CuboidMaker {
  constructor(c) {
    this.length = c.length;
    this.width = c.width;
    this.height = c.height;
  }

  volume() {
    const l = this.length,
          w = this.width,
          h = this.height;

    return l * w * h;
  }

  surfaceArea() {
    const l = this.length,
          w = this.width,
          h = this.height;
    
    return 2 * (l * w + l * h + w * h);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(c) {
    super(c);
  }

  volume() {
    const l = this.length,
          w = this.width,
          h = this.height;

    return l * w * h;
  }

  surfaceArea() {
    const l = this.length,
          w = this.width;

    return 6 * l * w;
  }
}

const cube = new CubeMaker({
  length: 4,
  width: 4,
  height: 4
});

console.log(cube.volume());
console.log(cube.surfaceArea());
