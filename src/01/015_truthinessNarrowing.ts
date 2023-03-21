function multiplayAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values
  } else {
    return values.map(x => x * factor)
  }
}