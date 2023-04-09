class Person {
  [1]: string = "张三"
}

type result2 = keyof Person

interface Person2 {
  name: "string"
}

type result3 = keyof Person2