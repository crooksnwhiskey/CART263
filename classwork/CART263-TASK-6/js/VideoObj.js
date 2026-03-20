class VideoObj {
  constructor(x, y, w, h, videoElement, context) {
    this.videoElement = videoElement;
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shapeX = 10;
    this.shapeY = 10;
    this.shapeCol = "#000000";


    let filterButton_blur = document.getElementById("filter_button_blur");
    let filterButton_sepia = document.getElementById("filter_button_sepia");
    let filterButton_invert = document.getElementById("filter_button_invert");
    let filterButton_hue = document.getElementById("filter_button_hue");

    let blurInput = document.getElementById("blurnum");
    let sepiaInput = document.getElementById("sepianum");
    let invertInput = document.getElementById("invertnum");
    let hueInput = document.getElementById("huenum");
    this.userProvidedBlur = 0;
    this.sepia = 0;
    this.invert = 0;
    this.hue = 0;
    let self = this;


    filterButton_blur.addEventListener("click", function () {
      //get value from input field
      self.userProvidedBlur = blurInput.value;
      console.log(self.userProvidedBlur);
    });
    filterButton_sepia.addEventListener("click", function () {
      self.sepia = sepiaInput.value;
      console.log(self.sepia);
    });
    filterButton_invert.addEventListener("click", function () {
      self.invert = invertInput.value;
      console.log(self.invert);
    });
    filterButton_hue.addEventListener("click", function () {
      self.hue = hueInput.value;
      console.log(self.hue);
    });
  }

  display() {
    this.context.save();
    this.context.filter = `blur(${this.userProvidedBlur}px)`;
    this.context.filter += ` sepia(${this.sepia}%)`;
    this.context.filter += ` invert(${this.invert}%)`;
    this.context.filter += ` hue-rotate(${this.hue}deg)`;
    this.context.drawImage(this.videoElement, this.x, this.y, this.w, this.h);
    this.context.fillStyle = this.shapeCol;
    this.context.fillRect(this.shapeX, this.shapeY, 50, 50);
    this.context.fillStyle = "#000000";
    this.context.font = "6px Arial";
    this.context.fillText(this.shapeCol, this.shapeX, this.shapeY + 30);
    this.context.restore();
  }

  //called when rectangle color is to be updated
  changeColor() {
    /** FILL IN */
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    this.shapeCol = `rgb(${r}, ${g}, ${b})`;
  }
  //called when rectangle Pos is to be updated
  updatePositionRect(mx, my) {
    /** FILL IN */
    const speed = 0.2;
    this.shapeX += (mx - this.shapeX) * speed;
    this.shapeY += (my - this.shapeY) * speed;

  }
  update(videoElement) {
    this.videoElement = videoElement;
  }
}
