function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    if (strs === null) {
      console.log(strs)
      return
    }
    for (const s of strs) {
      console.log(s)
    }
  } else if (typeof strs === "string") {
    console.log(strs)
  }
}