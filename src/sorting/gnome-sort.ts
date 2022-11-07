import { Numeric } from './types';

function gnomeSort(arr: Numeric[]) {
  const array = arr;
  let pos = 0;
  while (pos < array.length) {
    if (pos === 0 || array[pos] >= array[pos - 1]) {
      pos += 1;
    } else {
      const tmp = array[pos];
      array[pos] = array[pos - 1];
      array[pos - 1] = tmp;
      pos -= 1;
    }
  }
}

export default gnomeSort;
