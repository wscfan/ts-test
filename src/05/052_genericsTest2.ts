function identity2<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: { <Type>(arg: Type): Type} = identity2;