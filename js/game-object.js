class GameObject {
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";

    this.sprite = new Sprite({
      gameObject: this, // game object now has access to proerties like x, y etc
      src: config.src || "/my-images/character.png", //Sprite sheet to be used - if no source, default will be used
    });
  }

  update() {
    this.sprite.update();
  }
}
