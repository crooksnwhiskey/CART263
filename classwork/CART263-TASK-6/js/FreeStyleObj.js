class FreeStyleObj {
  constructor(x, y, length, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.theta = 0;
    this.length = length;
    this.yOffset = 20;
    this.angularSpeed = 0.1;
    this.context = context;
  }

  display() {
    this.theta = 0; //reset everytime
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.beginPath();
    this.context.moveTo(this.x, this.y)
    for (let i = this.x; i < this.x + this.length; i++) {
      this.context.lineTo(i, (Math.sin(this.theta) * 5) + this.y)
      this.context.lineTo(i, (Math.sin(this.theta) * 5) + this.y + this.yOffset)
      this.theta += this.angularSpeed;
    }
    this.context.stroke(); //set the stroke
  }

  update() {
    let volume = micVolume;
    let newvolume = Math.min(volume * 5, 255);
    this.fill_color = `rgb(${newvolume}, ${newvolume / 2}, ${50})`;
    this.angularSpeed = 1 - micFrequency * 2;
  }
}
