type T3 = [number, string, number?]

function setT(coord: T3) {
  const [x, y, z] = coord;
}

type StringNumberBooleans = [string, number, ...boolean[]]

const a: StringNumberBooleans = ["hello", 1];
let aLen = a.length;