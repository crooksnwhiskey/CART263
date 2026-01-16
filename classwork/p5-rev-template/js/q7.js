"use strict";

let r = 255
let g = 255
let b = 255
let x = 25
let y = 25
let shape = 0

function setup() {
    console.log("go")
    createCanvas(500, 500)
    r = random(1, 255)
    g = random(1, 255)
    b = random(1, 255)
}

function draw() {
    background("black")
    shapeCheck()
}

function shapeCheck() {
    if (shape == 0) {
        circleLoop()
    }
    else if (shape == 1) {
        rectLoop()
    }
}

function keyPressed() {
    if (key === " ") {
        r = random(1, 255)
        g = random(1, 255)
        b = random(1, 255)
    }
}

function mousePressed() {
    if (shape == 0) {
        shape = 1
    }
    else if (shape == 1) {
        shape = 0
    }

}

function circleLoop() {
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            push()
            noStroke()
            fill(r, g, b)
            ellipse(x + i * 50, y + j * 50, 50, 50);
            pop()
        }
    }
}

function rectLoop() {
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            push()
            fill(r, g, b)
            rect(i * 50, j * 50, 50, 50);
            pop()
        }
    }
}