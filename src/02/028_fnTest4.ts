function firstElement<T>(arr: T[]): T | undefined {
  return arr[0]
}

const s = firstElement(['a', 'b', 'c'])