function sum({a, b, c}: {a: number, b: number, c: number}) {
  console.log(a + b + c)
}

type ABC = {a: number, b: number, c: number}
function sum2({a, b, c}: ABC) {
  console.log(a + b + c)
}

sum({a: 1, b: 2, c: 3})
sum2({a: 4, b: 5, c: 6})