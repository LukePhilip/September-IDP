let lines = []
let penColor
let bgColor
let penWidth
let eraseCanvas

function setup() {
  createCanvas(windowWidth, windowHeight)
  //I am displaying the option titles in a "flex" style
  let options = createDiv().style("display: flex")

  let optionsTitles = createDiv().parent(options)
  //Creating titles for the options below the canvas
  createP("Color").parent(optionsTitles)
  createP("Canvas Color ").parent(optionsTitles)
  createP("Thickness").parent(optionsTitles)

  let optionsValues = createDiv().parent(options).style("margin: 10px 40px; width: 50px")
  //color picker, a new idea I learned of recently
  penColor = createColorPicker("ffffff").parent(optionsValues)
  bgColor = createColorPicker("#1e1e1e").parent(optionsValues).style("margin-top: 10px")
  penWidth = createSelect(false).parent(optionsValues).style("margin-top: 10px")
  //here are the pen thickness options
  penWidth.option("")
  penWidth.option("2")
  penWidth.option("4")
  penWidth.option("8")
  penWidth.option("16")
  penWidth.selected("2")
  //now I need to create a clear canvas button
  eraseCanvas = createButton("Erase").parent(options).style("width: 1000px")

}

function draw() {
  background(bgColor.value())
  //if "Erase" button is clicked, then the lines will be removed
  eraseCanvas.mousePressed(function(){
    lines = []
  }) 
  //if the canvas is pressed than the lines will be drawn
  if (mouseIsPressed) {
    let line = new MyLine(penColor.value(), penWidth.value())
    lines.push(line)
  }

  for (let line of lines) {
    line.show() 
  }
}