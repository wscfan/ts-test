class GenericNumber<NumType> {
  zeroValue: NumType | undefined;
  add: ((x: NumType, y: NumType) => NumType) | undefined;
}

let myGenericNumer = new GenericNumber<number>();
myGenericNumer.zeroValue = 0;
myGenericNumer.add = function(x, y) {
  return x + y;
}