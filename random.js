var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    makeRect(0, 0, 1000, 1000, "blue", 1.0)
    makeRect(20, 15, 50, 50, "blue", 1.0)
    makeCircle(45, 40, 25, "cyan", 1.0)
    makeEllipse(45, 40, 10, 25, "red")
    makeCircle(45, 40, 10, "black", 1)
    makeCircle(50, 35, 5, "white", 1)
    makeText("EYE SEE U!!!", 60, 40, 10, "Barrio", "green", 1.0)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    makeRect(0, 0, 1000, 1000, "green", 1.0)
    makeImage("https://pbs.twimg.com/media/BwoA6puCIAEZ8Qt.jpg", 80, 50, 60, 30)
    makeImage("http://vignette4.wikia.nocookie.net/streetfighter/images/b/b4/Ryu-bigsuper.gif/revision/latest?cb=20100328045100", 50, 50, 50, 30)
    makeImage("http://www.kappit.com/img/pics/201310_1257_daagf.jpg", 40, 20, 40, 40)
    makeCircle(60, 80, 12, "black", 1.0)
    makeCircle(60, 80, 11, "white", 1.0)
    makeCircle(60, 80, 10, "black", 1.0)
    makeCircle(60, 80, 9, "white", 1.0)
    makeCircle(60, 80, 8, "black", 1.0)
    makeCircle(60, 80, 7, "white", 1.0)
    makeCircle(60, 80, 6, "black", 1.0)
    makeCircle(60, 80, 5, "white", 1.0)
    makeCircle(60, 80, 4, "black", 1.0)
    makeCircle(60, 80, 3, "white", 1.0)
    makeCircle(60, 80, 2, "black", 1.0)
    makeCircle(60, 80, 1, "white", 1.0)
    makeCircle(30, 80, 12, "black", 1.0)
    makeCircle(30, 80, 11, "white", 1.0)
    makeCircle(30, 80, 10, "black", 1.0)
    makeCircle(30, 80, 9, "white", 1.0)
    makeCircle(30, 80, 8, "black", 1.0)
    makeCircle(30, 80, 7, "white", 1.0)
    makeCircle(30, 80, 6, "black", 1.0)
    makeCircle(30, 80, 5, "white", 1.0)
    makeCircle(30, 80, 4, "black", 1.0)
    makeCircle(30, 80, 3, "white", 1.0)
    makeCircle(30, 80, 2, "black", 1.0)
    makeCircle(30, 80, 1, "white", 1.0)
}
// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    makeRect(0, 0, 1000, 1000, "black", 1.0)
    makeImage("https://naij-ask.gencdn.com/questions/24687-8c7890-illuminati-logo-501x501.jpg", 20, 20, 30, 30)
    makePolygon("150,0 100,50 200,50", "green", 1.0)
    makeLine(120, 10, 125, 30, "black", 2, 1.0)
    makeLine(160, 10, 170, 30, "black", 2, 1)
    makeCircle(150, 35, 10, "black", 1)
    makeCircle(157, 30, 5, "white", 1)
    makeEllipse(120, 90, 35, 8, "white")
    makeCircle(120, 90, 8, "white", 1)
    makeCircle(120, 90, 7, "black", 1)
    makeCircle(120, 90, 6, "white", 1)
    makeCircle(120, 90, 5, "black", 1)
    makeCircle(120, 90, 4, "white", 1)
    makeCircle(120, 90, 3, "black", 1)
    makeCircle(120, 90, 2, "white", 1)
    makeCircle(120, 90, 1, "black", 1)
    makeText("PARTY TIME!!!", 170, 20, 5, "Barrio", "blue", 1.0)
}
// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var number = Math.random();
    // If the number is less than 0.33, call the function to create your first scene.
        if(number < 0.33){
            createFirstScene()
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
        }else if(number < 0.67){
    createSecondScene()
    // Else, call the function to create your third scene.
        }else {
    createThirdScene()
    
    }
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires

//K!
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}