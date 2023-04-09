type obj3 = {
  abc: number
}
let obj: obj3 = {
  abc: 123
} as const

obj.abc = 343