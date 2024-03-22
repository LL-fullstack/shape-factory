'use strict';

class Shape {
    constructor(name, color) {
        let _name = name;
        let _color = color;

        this.getName = function() {
            return _name;
        }

        this.getColor = function() {
            return _color;
        }
}

    getInfo(position) {
        return `Unit ${position}: ${this.getColor().toLowerCase()} ${this.getName().toLowerCase()}`;
    }
}

const shapeList = [];
let isCircle = true;
let currentColorIndex = 0;
let currentShapeIndex = 0;
const colors = ['Blue', 'Purple', 'Green', 'Orange', 'Pink'];
const shapes = ['Circle','Square'];

function toggleShape() {
    const shapeOption = document.getElementById('shapeOption');
    currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
    shapeOption.textContent = shapes[currentShapeIndex];
}

function toggleColor() {
    const colorOption = document.getElementById('colorOption');
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    colorOption.textContent = colors[currentColorIndex];
}

function createShape() {
    if(shapeList.length > 23) {
       return;
    }
    const shapeType = document.getElementById('shapeOption').textContent;
    const color = document.getElementById('colorOption').textContent;
    const shapeGrid = document.getElementById('shapeGrid');
    const shape = new Shape(shapeType, color);
    const position = shapeList.length + 1;
    shapeList.push(shape);

    const shapeDiv = document.createElement('div');
    const shapeCSSStyle = shapeType.toLowerCase();
    shapeDiv.className = `shape ${shapeCSSStyle}`; 
    shapeDiv.style.backgroundColor = color;
    shapeDiv.onclick = function() {
        const shapeInfo = document.getElementById('shapeInfo');
        shapeInfo.textContent = shape.getInfo(position);
    };
    shapeGrid.appendChild(shapeDiv);
}


