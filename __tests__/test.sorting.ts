import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
} from '../src';

const UNSORTED_SMALL_ARRAY = [4, -2, 1, 15, 8, 29, 7];
const SORTED_SMALL_ARRAY = [-2, 1, 4, 7, 8, 15, 29];

describe('bubbleSort', () => {
  it('sorts small arrays', () => {
    const testArray = [...UNSORTED_SMALL_ARRAY];
    bubbleSort(testArray);
    expect(testArray).toEqual(SORTED_SMALL_ARRAY);
  });
});

describe('selectionSort', () => {
  test('sorts small arrays', () => {
    const testArray = [...UNSORTED_SMALL_ARRAY];
    selectionSort(testArray);
    expect(testArray).toEqual(SORTED_SMALL_ARRAY);
  });
});

describe('insertionSort', () => {
  test('sorts small arrays', () => {
    const testArray = [...UNSORTED_SMALL_ARRAY];
    insertionSort(testArray);
    expect(testArray).toEqual(SORTED_SMALL_ARRAY);
  });
});

describe('mergeSort', () => {
  test('sorts small arrays', () => {
    const testArray = [...UNSORTED_SMALL_ARRAY];
    mergeSort(testArray);
    expect(testArray).toEqual(SORTED_SMALL_ARRAY);
  });
});
