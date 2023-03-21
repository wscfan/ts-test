function printStr(str: number | string) {
  if (typeof str === "string") {
    console.log(str.toUpperCase())
  } else {
    console.log(str)
  }
}

printStr("hello")
printStr(123)