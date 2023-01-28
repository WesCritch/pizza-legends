class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(context) {
    context.drawImage(this.lowerImage, 0, 0);
  }
  /*
  drawUpperImage(context) {
    context.drawImage(this.upperImage, 0, 0);
  }*/
}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "/my-images/map.png",
    //upperImage: "/my-images/map.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,

        x: utils.withGrid(0),
        y: utils.withGrid(0),
      }),
      np1: new Person({
        x: utils.withGrid(7),
        y: utils.withGrid(8),
      }),
    },
  },
};
