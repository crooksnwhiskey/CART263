class CircularObj {
  constructor(x, y, radius, f_color, s_color, context, centerX, centerY, orbitRadius) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
    this.angle = Math.random() * Math.PI * 2; // Random starting angle
    // its so if the value is "bad" its liek alr i am fine with that and changes
    this.centerX = centerX || 200;
    this.centerY = centerY || 150;
    this.orbitRadius = orbitRadius = 3;
    this.beat = 0
    this.maxRadius = radius
  }

  display() {
    this.context.fillStyle = this.fill_color; // change the color we are using
    this.context.strokeStyle = this.stroke_color; // change the color we are using
    this.context.beginPath();
    this.context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
      this.endAngle,
      true
    );
    this.context.fill(); // set the fill
    this.context.lineWidth = 2; //change stroke
    this.context.closePath();
    this.context.stroke();
  }

  update() {
    // Orbital animation
    this.angle += 0.02;
    this.x = this.centerX + Math.cos(this.angle) * this.orbitRadius;
    this.y = this.centerY + Math.sin(this.angle) * this.orbitRadius;

    // Pulsing radius
    this.beat += 0.05;
    this.radius = this.maxRadius + Math.sin(this.beat) * 5;
  }
}