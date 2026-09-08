/**
 * 排序算法测试
 * 运行：node sort/test.js
 */
const { bubbleSort, quickSort, mergeSort } = require('./index');

let passed = 0;
let failed = 0;

function assertSorted(fn, input, label) {
  const original = input.slice();
  const sorted = fn(input);
  const expected = input.slice().sort((a, b) => a - b);
  const ok = JSON.stringify(sorted) === JSON.stringify(expected);
  const unchanged = JSON.stringify(input) === JSON.stringify(original);
  if (ok && unchanged) {
    console.log(`✅ ${label}`);
    passed++;
  } else {
    console.error(`❌ ${label}：结果=${JSON.stringify(sorted)} 原数组被修改=${!unchanged}`);
    failed++;
  }
}

function assertThrows(fn, input, label) {
  try {
    fn(input);
    console.error(`❌ ${label}：未抛出异常`);
    failed++;
  } catch (e) {
    console.log(`✅ ${label}（抛出 ${e.name}）`);
    passed++;
  }
}

const cases = [
  { input: [5, 2, 9, 1, 5, 6], label: '常规' },
  { input: [], label: '空数组' },
  { input: [1], label: '单元素' },
  { input: [3, 3, 3], label: '全重复' },
  { input: [1, 2, 3, 4], label: '已排序' },
  { input: [4, 3, 2, 1], label: '逆序' },
];

const fns = [
  { name: 'bubbleSort', fn: bubbleSort },
  { name: 'quickSort', fn: quickSort },
  { name: 'mergeSort', fn: mergeSort },
];

for (const { name, fn } of fns) {
  for (const { input, label } of cases) {
    assertSorted(fn, input, `${name} · ${label}`);
  }
  assertThrows(fn, null, `${name} · 非数组(null)`);
  assertThrows(fn, undefined, `${name} · 非数组(undefined)`);
}

console.log(`\n总计：${passed} 通过，${failed} 失败`);
process.exit(failed ? 1 : 0);
