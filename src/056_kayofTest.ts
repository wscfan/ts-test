type Point = {
  x: number;
  y: number
}

type P = keyof Point;

type Arrayish = { [n: string]: unknown};
type A = keyof Arrayish;