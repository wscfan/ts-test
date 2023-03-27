interface Colorful2 {
  color: string;
}

interface Circle2 {
  radius: number;
}

type ColorfulCircle2 = Colorful2 & Circle2 & {
  color: number
}

// const c: ColorfulCircle2 = {
//   color: 111,
//   radius: 123
// }