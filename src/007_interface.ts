interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

let bear: Bear = {
  name: "张三",
  honey: false
}