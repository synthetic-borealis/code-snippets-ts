import { Numeric } from './types';

function gnomeSort(arr: Numeric[]) {
  let pos = 0;

  while (pos < arr.length) {
    if (pos === 0 || arr[pos] >= arr[pos - 1]) {
      pos += 1;
    } else {
      const tmp = arr[pos];
      arr[pos] = arr[pos - 1];
      arr[pos - 1] = tmp;
      pos -= 1;
    }
  }
}

export default gnomeSort;
