/**
 * 排序算法模块入口
 * 统一导出三种排序算法
 */
const bubbleSort = require('./bubble-sort');
const quickSort = require('./quick-sort');
const mergeSort = require('./merge-sort');

module.exports = { bubbleSort, quickSort, mergeSort };
