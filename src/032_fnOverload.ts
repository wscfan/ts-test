function makeDate(timestamp: number): Date;
function makeDate(y: number, m: number, d: number): Date;
function makeDate(mTimestamp: number, d?: number, y?:number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mTimestamp, d)
  } else {
    return new Date(mTimestamp)
  }
}

const d1 = makeDate(123123)
const d2 = makeDate(5, 5, 5)
// const d3 = makeDate(1, 3)