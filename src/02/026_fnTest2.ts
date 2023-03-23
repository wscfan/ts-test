type DescFn = {
  desc: string,
  (num: number): boolean
}

function doSomeThing(fn: DescFn) {
  console.log(fn.desc + fn(2))
}

function A(num: number) {
  return num > 0;
}
A.desc = "hello"

doSomeThing(A)