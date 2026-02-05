window.onload = function () {
    // we want to do something when the mouse is over the box :)
    let drawBox = document.querySelector("#draw-box-a");

    //A: add event listener + callback
    drawBox.addEventListener("mousemove", moveCallBack);

    function moveCallBack(e) {
        let rect = this.getBoundingClientRect();

        //DIFFERENCE TO ENSURE COORDS ARE RELATIVE
        let offsetX = e.clientX - rect.x;
        let offsetY = e.clientY - rect.y;
        // drawBox.innerHTML = `x: ${offsetX}, y:${offsetY}`;

        let pointDiv = document.createElement("div");
        pointDiv.classList.add("point");
        pointDiv.style.left = offsetX + "px";
        pointDiv.style.top = offsetY + "px";
        this.appendChild(pointDiv);

    }
}

