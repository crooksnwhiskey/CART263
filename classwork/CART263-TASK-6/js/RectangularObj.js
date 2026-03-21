class RectangularObj {
  constructor(x, y, w, h, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
  }

  display() {
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.lineWidth = 2; //change stroke
    this.context.strokeRect(this.x, this.y, this.width, this.height);
  }

  update() {
    //update freestyle
    // this.x+=1;
    let volume = micVolume;
    let newvolume = Math.min(volume * 5, 255);
    this.fill_color = `rgb(${newvolume}, ${newvolume / 2}, ${50})`;
    this.width = 10 + micFrequency * 2;
    this.y = 100 + Math.sin(Date.now() * 0.002) * 30;
    //console.log("rectangle update")
  }
}
