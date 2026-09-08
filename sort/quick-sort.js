/**
 * 快速排序
 * @param {number[]} arr - 待排序数组
 * @returns {number[]} 排序后的新数组（不修改原数组）
 * 时间复杂度：平均 O(n log n)，最坏 O(n²)  空间复杂度：O(n)
 */
const quickSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('quickSort 期望传入数组');
  }
  if (arr.length <= 1) return arr.slice();

  // 随机选取基准，降低有序数据退化为 O(n²) 的概率
  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];

  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

module.exports = quickSort;
