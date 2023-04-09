interface Lengthwise {
  length: number
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length)
  return arg;
}

loggingIdentity("good")