function printName(obj: { first: string; last?: string}) {
  console.log(`${obj.first} ${obj.last}`)
}

printName({first: "lilei", last: "lihong"})