import { Numeric } from './types';

function isSorted(arr: Numeric[]): boolean {
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function shuffleArray<T>(arr: T[]) {
  for (let i = 0; i < arr.length; i += 1) {
    let j = Math.floor(Math.random() * arr.length);

    while (j === i) {
      j = Math.floor(Math.random() * arr.length);
    }

    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}

export {
  isSorted,
  shuffleArray,
};
