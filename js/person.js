class Person extends GameObject {
  constructor(config) {
    super(config); // does Game onbject constructor stuff too
    this.movingProgressRemaining = 0; // 16 is number of pixels per grid cell
    //this.direction = "right"; //temp override

    this.isPlayerControlled = config.isPlayerControlled || false;

    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };
  }

  update(state) {
    this.updatePosition();

    if (
      this.isPlayerControlled &&
      this.movingProgressRemaining === 0 &&
      state.arrow
    ) {
      //move  this direction
      this.direction = state.arrow;
      this.movingProgressRemaining = 16; // change this for distance of pixels tranvelled with one keypress
    }
  }

  //Specifc to person class
  updatePosition() {
    //if in process of moving, update x and
    //property will be x, change will be -1
    if (this.movingProgressRemaining > 0) {
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;

      this.movingProgressRemaining -= 1;
    }
  }
}
