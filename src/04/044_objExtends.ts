interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {
  num: number
}

const cc: ColorfulCircle = {
  color: "#f00",
  radius: 10,
  num: 20
}