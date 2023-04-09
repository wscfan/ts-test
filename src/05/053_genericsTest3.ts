interface GenericFn {
  <Type>(arg: Type): Type
}

function identity3<Type>(arg: Type): Type {
  return arg;
}

let myIdentity3: GenericFn = identity3;