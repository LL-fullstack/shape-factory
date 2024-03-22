'use strict';

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    get name() {
        return this._name;
    }

    get color() {
        return this._color;
    }

    getInfo(position) {
        return `Unit ${position}: ${this._color} ${this._name}`;
    }
}

const shapeList = [];
let isCircle = true;
let currentColorIndex = 0;
const colors = ['Blue', 'Purple', 'Green', 'Orange', 'Pink'];

function toggleShape() {
    const shapeOption = document.getElementById('shapeOption');
    isCircle = !isCircle;
    shapeOption.textContent = isCircle ? 'Circle' : 'Square';
}

function toggleColor() {
    const colorOption = document.getElementById('colorOption');
    colorOption.textContent = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

function createShapes() {
    const shapeType = isCircle ? 'circle' : 'square';
    const color = document.getElementById('colorOption').textContent;
    const shapeGrid = document.getElementById('shapeGrid');
    const shape = new Shape(shapeType, color);
    shapeList.push(shape);

    const shapeDiv = document.createElement('div');
    shapeDiv.className = `shape ${shapeType}`; 
    shapeDiv.style.backgroundColor = color;
    shapeDiv.onclick = function() {
        const position = Array.from(shapeGrid.children).indexOf(shapeDiv) + 1;
        console.log(shape.getInfo(position));
    };

    shapeGrid.appendChild(shapeDiv);
}


