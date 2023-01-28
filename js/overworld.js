class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector("canvas");
    this.context = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      //Clears canvas of previous frame to stop smudging of image
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //drawing the map
      this.map.drawLowerImage(this.context);

      //Draw gameobejcts
      // As stored as an object, wrap in object.values
      Object.values(this.map.gameObjects).forEach((object) => {
        //every frame that runs, move object to the right
        //object.x += 1; // thing below makes it dynamic
        object.update({
          arrow: this.directionInput.direction,
        });

        object.sprite.draw(this.context);
      });

      //draw upper layer
      //this.map.drawUpperImage(this.context);

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  init() {
    console.log("init");

    this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
    this.directionInput = new DirectionInput();
    this.directionInput.init(); // gets bindings on document
    this.directionInput.direction;
    this.startGameLoop();
    /*
    =================
    NO longer need as doing a different way
    =================

    const canvasWidth = this.canvas.width;
    const canvasHeight = this.canvas.height;

    const image = new Image();
    image.onload = () => {
      // draws from where image is
      this.context.drawImage(image, 0, 0, canvasWidth, canvasHeight);
    };
    image.src = "/my-images/map.png";
    /*
    const x = 0;
    const y = 0;

    const hero = new Image();
    hero.onload = () => {
      // draws from where image is
      this.context.drawImage(
        hero,
        /*  0, //left cut - needed for sprite sheet reasons
        0, // top cut - needed for sprite sheet reasons,
        32, // width of cut - needed for sprite sheet reasons
        32, // height of cut - needed for sprite sheet reasons

        x,
        y,
        32,
        32
      );
    };
    hero.src = "/my-images/character.png"; * /

    //Places the game object in instead of drawing like above
    const hero = new GameObject({
      x: 0,
      y: 0,
      src: "/my-images/character.png",
    });

    hero.sprite.draw(this.context);
    */
  }
}
