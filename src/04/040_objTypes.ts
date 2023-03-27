interface Person {
  name: string;
  readonly age?: number;
}

function greet(person: Person) {
  let age = person.age
  // person.age = 19
  return "hello " + person.name
}

greet({
  name: "张三"
})