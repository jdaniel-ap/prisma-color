export class Calcule {
  constructor(walls, defaultValues) {
    this.walls = walls;
    this.defaultValues = defaultValues;
  }

  total() {
    const typeOfPaint = this.totalizeAreaAndPaint(this.walls, this.defaultValues);
    const calcule = this.numberOfPaint(typeOfPaint);
    return calcule
  }

  totalizeAreaAndPaint(walls, values) {
    const { A, B, C, D } = walls;
    const { doorDimension, windowDimension } = values;
    const wallArea =
      A.width * A.height +
      B.width * B.height +
      C.width * C.height +
      D.width * D.height;

    const doorsTotalArea =
      (A.doors + B.doors + C.doors + D.doors) * doorDimension.area;
    const windowTotalArea =
      (A.windows + B.windows + C.windows + D.windows) * windowDimension.area;

    const total = wallArea - (windowTotalArea + doorsTotalArea);

   const paint = this.typeOfPaint((total / 5).toFixed(2));

   return paint
  }

  typeOfPaint (liters) {
    let needed = liters;
    let array = [];

    for (let index = 0; needed > 0; index++) {
      switch (true) {
        case needed > 18:
          array[index] = 18;
          needed = needed - 18;
          break;

        case needed > 3.5 && needed < 18:
          array[index] = 3.5;
          needed = needed - 3.5;
          break;

        case needed > 2.5 && needed < 3.5:
          array[index] = 2.5;
          needed = needed - 2.5;
          break;

        case needed > 0 && needed < 2.5:
          array[index] = 0.5;
          needed = needed - 0.5;
          break;

        default:
          break;
      }
    }

    return array
  }

  numberOfPaint(array) {
    let obj = [];
    let number = 0;

    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      number = 0;

      for (let index2 = 0; index2 < array.length; index2++) {
        if (obj.find(({ product }) => product === element)) continue;
        else if (element === array[index2]) {
          number += 1;
        }
      }

      if (!obj.find((item) => item && item.product === element)) {
        obj.push({ product: element, qty: number });
      }
    }
    return obj;
  }
  
}