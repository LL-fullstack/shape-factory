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
let isDefaultColor = true;

function toggleShape() {
    const shapeOption = document.getElementById('shapeOption');
    isCircle = !isCircle;
    shapeOption.textContent = if (isCircle) {
        shapeOption.textContent = 'Circle';
    } else {
        shapeOption.textContent = 'Square';
    }
}

function toggleColor() {
    const colorOption = document.getElementById('colorOption');
    const colors = ['#09f', '#90f', '#9f0', '#f90', '#f09'];
    if (isDefaultColor) {
        colorOption.textContent = 'Blue / Purple / Green / Orange / Pink';
    } else {
        colorOption.textContent = colors[Math.floor(Math.random() * colors.length)];
    }
    isDefaultColor = !isDefaultColor;
}

function createShapes() {
    const shapeType = isCircle || 'square';
    const color = document.getElementById(colorOption).textContent;
    const shapeGrid = document.getElementById('shapeGrid');
    const shape = new shape(shapeType, color);
    shapeList.push(shape);

    const shapeDiv = document.createElement('div');
    shapeDiv.className = shapeType;
    shapeDiv.style.backgroundColor = color;
    shapeDiv.onclick = function() {
        const position = document.querySelectorAll('#shapeGrid div').length + 1;
        console.log(shape.getInfo(position));
    };

    shapeGrid.appendChild(shapeDiv);
}