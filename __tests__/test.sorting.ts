import bubbleSort from '../src/sorting/bubble-sort';

const UNSORTED_SMALL_ARRAY = [4, -2, 1, 15, 8, 29, 7];
const SORTED_SMALL_ARRAY = [-2, 1, 4, 7, 8, 15, 29];

describe('bubbleSort', () => {
  test('sorts small arrays', () => {
    const testArray = [...UNSORTED_SMALL_ARRAY];
    bubbleSort(testArray);
    expect(testArray).toEqual(SORTED_SMALL_ARRAY);
  });
});
