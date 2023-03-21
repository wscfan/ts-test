type Fish = {
  swim: () => void
}
type Bird = {
  fly: () => void
}
type Human = {
  swim?: () => void;
  fly?: () => void
}

function move(animal: Fish | Bird | Human): void {
  if ("swim" in animal) {
    return animal.swim && animal.swim()
  }
  return animal.fly && animal.fly()
}