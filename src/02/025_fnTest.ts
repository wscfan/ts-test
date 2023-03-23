type NumFn = (num: number, num2: number) => number
function handleNum(fn: NumFn) {
  fn(12, 25)
}

handleNum((num: number, num2: number) => {
  return num + num2
})