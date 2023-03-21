type Point = {
  x: number;
  y: number
}

type OutputType = number | string;

function printCoord(pt: Point): OutputType {
  console.log("x value " + pt.x)
  console.log("y value " + pt.y)
  return pt.x + pt.y
}