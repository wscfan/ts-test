interface Container {
  value: number | null | undefined
}

function multiplayValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value)
    container.value *= factor
  }
}