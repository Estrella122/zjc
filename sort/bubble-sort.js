/**
 * 冒泡排序
 * @param {number[]} arr - 待排序数组
 * @returns {number[]} 排序后的新数组（不修改原数组）
 * 时间复杂度：O(n²)  空间复杂度：O(n)
 */
const bubbleSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('bubbleSort 期望传入数组');
  }
  const result = arr.slice(); // 拷贝，避免修改原数组
  const n = result.length;
  for (let i = 0; i < n - 1; i++) {
    // 优化：尾部 i 个元素已就位，无需再比较
    for (let j = 0; j < n - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
};

module.exports = bubbleSort;
