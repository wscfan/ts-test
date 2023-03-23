type Fish = {
  swim: () => void
}
type Bird = {
  fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

let pet: Fish | Bird = {
  swim() {
    console.log("swiming......")
  },
  fly() {
    console.log("flying..........")
  }
}
if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}