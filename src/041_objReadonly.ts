interface Person2 {
  name: string,
  age: number
}

interface ReadonlyPerson {
  readonly name: string,
  readonly age: number
}

let writablePerson: Person2 = {
  name: "zhangsan",
  age: 42
}

let readonlyPerson: ReadonlyPerson = writablePerson;

writablePerson.age -= 10