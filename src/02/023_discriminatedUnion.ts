interface Shape {
  kind: "circle" | "square";
  readius?: number;
  sideLength?:number
}

function handleShape(shape: Shape) {
  if (shape.kind === "square") {
    console.log(shape)
  }
}

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.readius! ** 2
  }
}