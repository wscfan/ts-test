interface Circle2 {
  kind: "circle";
  radius: number
}

interface Square2 {
  kind: "square";
  sideLength: number
}

type Shape2 = Circle2 | Square2

function getArea2(shape: Shape2) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2
  }
}