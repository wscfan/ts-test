function printName2 (name: "zhangsan" | "lisi" | "wangwu") {
  console.log(name)
}

printName2("lisi")

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1
}

interface option {
  width: number
}

function configure(x: option | "auto") {
  console.log("hello")
}
configure({
  width: 100
})
configure("auto")