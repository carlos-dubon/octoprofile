/**
 * Function to split an array into chunks of `n` size
 *
 * @param {Array<T>} arr the array to split
 * @param {number} n the size of the chunks
 */
function* chunks<T>(arr: Array<T>, n: number): IterableIterator<Array<T>> {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

export { chunks };
