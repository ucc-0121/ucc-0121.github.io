
function setup() {
    initializeFields();
    createCanvas(500, 500);
}

var N;

var x;

var y;

function draw() {
    background(color(0x63, 0x7D, 0xBC));
    for (var i = 0; i <= 10; i++) {
        line(50 * i, 0, 50 * i, 500);
        line(0, 50 * i, 500, 50 * i);
    }
    for (var i = 0; i < N; i++) {
        ellipse(x[i], y[i], 45, 45);
    }
    ellipse(mouseX, mouseY, 45, 45);
}

function mousePressed() {
    x[N] = mouseX;
    y[N] = mouseY;
    N++;
}

function initializeFields() {
    N = 0;
    x = new Array(100);
    y = new Array(100);
}
