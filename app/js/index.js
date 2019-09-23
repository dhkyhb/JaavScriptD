$(document).ready(function () {
    'use  strict'
    console.log('index.js load')

    paper.install(window);
    paper.setup(document.getElementById('maincanvas'));
    //TODO
    var c;
    var tool = new Tool();

    c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'Hello World';
    tool.onMouseDown = function (event) {
        c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    }

    paper.view.draw();
})