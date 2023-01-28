class DirectionInput {
  constructor() {
    this.heldDirections = [];

    this.map = {
      ArrowLeft: "left",
      KeyA: "left",

      ArrowRight: "right",
      KeyD: "right",
      ArrowUp: "up",
      KeyW: "up",

      ArrowDown: "down",
      KeyS: "down",
    };
  }

  //external things to ask which direction is held
  get direction() {
    return this.heldDirections[0];
  }

  init() {
    document.addEventListener("keydown", (e) => {
      console.log(e.code);
      const dir = this.map[e.code]; // If valid one from above will get correct one or undefined if not mapped

      // if found valid direction and doesnt exist in array
      // take array and unshift direction
      if (dir && this.heldDirections.indexOf(dir) === -1) {
        this.heldDirections.unshift(dir);
        console.log(this.heldDirections);
      }
    });

    //Keeping track when things exit array
    document.addEventListener("keyup", (e) => {
      const dir = this.map[e.code];
      const index = this.heldDirections.indexOf(dir);
      if (index > -1) {
        this.heldDirections.splice(index, 1);
        console.log(this.heldDirections);
      }
    });
  }
}
