function safeParse(s: string): unknown {
  return JSON.parse(s)
}

safeParse("abcdefg")