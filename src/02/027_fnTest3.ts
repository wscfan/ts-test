type ConFn = {
  new (s: string): object,
  (n?: number): number
}

function myDate(ctor: ConFn, str: string) {
  return new ctor(str)
}