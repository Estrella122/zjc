/**
 * 归并排序
 * @param {number[]} arr - 待排序数组
 * @returns {number[]} 排序后的新数组（不修改原数组）
 * 时间复杂度：O(n log n)  空间复杂度：O(n)
 */
const mergeSort = (() => {
  // 内部辅助函数：用索引指针合并两个有序数组，保证 O(n)
  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);
    return result;
  }

  return function mergeSort(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError('mergeSort 期望传入数组');
    }
    if (arr.length <= 1) return arr.slice();

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  };
})();

module.exports = mergeSort;
