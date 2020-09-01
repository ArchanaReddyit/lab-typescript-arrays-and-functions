import { StringManipulationService } from "./app-service";

export class ArrayManipulations implements StringManipulationService {
  constructur() {}

  public arrayFindMultiples(myArray: number[]): Array<Number> {
    let temp = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 5 === 0 || myArray[i] % 10 === 0) {
        temp[j] = myArray[i];
        j++;
      }
    }
    return temp;
  }

  public arraySeparate(myArray: any): Array<string> {
    let str = [],
      j = 0;
    for (var i = 0; i < myArray.length; i++) {
      if (typeof (myArray[i] === "string")) {
        str[j] = myArray[i];
        j++;
      }
    }
    return str;
  }

  public arraySplit(str: string): Array<number> {
    const temp = str.split(",");
    const primeArray = [];
    let k = 0;
    for (var i = 0; i < temp.length; i++) {
      let y = +temp[i];
      for (var j = 2; j < y; j++) {
        if (y % j === 0) continue;
        else {
          primeArray[k] = y;
          k++;
        }
      }
    }
    return primeArray;
  }

  public arraySort(myArray: any): Array<string> {
    myArray.sort();
    myArray.reverse();
    return myArray;
  }

  public arrayReplace(myArray: any): Array<number> {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] % 3 === 0) myArray[i] = 5;
    }
    return myArray;
  }
}

let myArray: number[] = [20, 30, 40, 60, 10, 25, 50, 75];
let array = new ArrayManipulations();

console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
//console.log(array.arraySplit(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));
