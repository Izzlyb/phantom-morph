
class Enemy {
  constructor(game) {
    this.game = game;
    this.x = Math.random() * this.game.width + 120;
    this.y = 200;
    this.speedX = 0;
    this.speedY = 5;
    this.width = 50;
    this.height = 50;
  }

  draw() {
    this.game.ctx.fillStyle = 'red';
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if( this.y > this.game.height ) {
      this.x = this.x = Math.random() * this.game.width;
      this.y = 0;
    }
  }
}

