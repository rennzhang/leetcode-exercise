function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const treeRoot1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

const treeRoot2 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
// const treeRoot1 = new TreeNode(10, new TreeNode(5), new TreeNode(15));

// const treeRoot2 = new TreeNode(
//   10,
//   new TreeNode(5, new TreeNode(15), new TreeNode(null)),
//   new TreeNode(null)
// );

// const treeRoot1 = new TreeNode(1, new TreeNode(2));

// const treeRoot2 = new TreeNode(1, new TreeNode(null), new TreeNode(2));
// const treeRoot1 = new TreeNode(0);

// const treeRoot2 = new TreeNode(1);
// console.log(treeRoot1);
// console.log(treeRoot2);

// 方法一：递归 DFS
// /**
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {boolean}
//  */
// var isSameTree = function (p, q) {
//   return Boolean(
//       p == q ||
//       p?.val == q?.val &&
//       isSameTree(p.left, q.left) &&
//       isSameTree(p.right, q.right)
//   );
// };

// 方法二：利用栈实现
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!node1 && !node2) return true
  const stack = [p, q];

  while (stack.length) {
    let node1 = stack.pop();
    let node2 = stack.pop();
    if (!node1 && !node2) continue;

    if (node1?.val != node2?.val || !node1 || !node2) {
      return false;
    }

    stack.push(node1.left,node2.left,node1.right,node2.right);
  }
  return !stack.length;
};
console.log(isSameTree(treeRoot1, treeRoot2));
