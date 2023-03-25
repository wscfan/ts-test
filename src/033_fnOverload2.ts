function fn(x?: string): void {
  if (typeof x === "string") {
    console.log(x)
  }
}

fn()