function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  } else {
    console.log(x)
    console.log(y)
  }
}