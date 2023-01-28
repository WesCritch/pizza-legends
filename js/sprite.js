class Sprite {
  constructor(config) {
    //Set up image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
      this.width = this.image.width;
      this.height = this.image.height;
    };

    // Configuring the animations and Initial state
    this.animations = config.animations || {
      idleDown: [[0, 0]],
    };
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;

    //Reference the game object
    //Whenever we run new Sprite, we need to pass Game OBject confi in
    this.gameObject = config.gameObject;
  }

  draw(context) {
    //16 - 8 is down to sprties being cut certain way
    //const x = this.gameObject.x;
    const x = this.gameObject.x * 2 - 8; // THESE PARTS CONTROLL SPEED FOR NOW;
    const y = this.gameObject.y * 2 - 8;
    this.isLoaded &&
      context.drawImage(
        this.image,
        /*
      0,  //left cut - needed for sprite sheet reasons
      0, // top cut - needed for sprite sheet reasons,
      32, // width of cut - needed for sprite sheet reasons
      32, // height of cut - needed for sprite sheet reasons
      */
        x,
        y,
        32,
        32
      );
  }
}
