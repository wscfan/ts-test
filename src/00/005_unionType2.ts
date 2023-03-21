function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("hello, " + x.join(" and "))
  } else {
    console.log("Welcome " + x)
  }
}

welcomePeople(["Jane", "Lisa"])
welcomePeople("Chales")