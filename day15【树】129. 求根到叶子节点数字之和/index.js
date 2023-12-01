function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const treeRoot1 = new TreeNode(
  4,
  new TreeNode(9, new TreeNode(5), new TreeNode(1)),
  new TreeNode(0)
);

// const treeRoot2 = new TreeNode(
//   3,
//   new TreeNode(9),
//   new TreeNode(20, new TreeNode(15), new TreeNode(7))
// );
// const treeRoot1 = new TreeNode(10, new TreeNode(5), new TreeNode(15));

// const treeRoot2 = new TreeNode(
//   10,
//   new TreeNode(5, new TreeNode(15), new TreeNode(null)),
//   new TreeNode(null)
// );

// const treeRoot1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

// const treeRoot2 = new TreeNode(1, new TreeNode(null), new TreeNode(2));
// const treeRoot1 = new TreeNode(0);

// const treeRoot2 = new TreeNode(1);
// console.log(treeRoot1);
// console.log(treeRoot2);
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;

  const dfs = (node, lastSum) => {
    if (!node) {
      return lastSum;
    }
    let cur = lastSum * 10 + node.val;
    if (!node.left && !node.right) {
      sum += cur;
    }
    dfs(node.left, cur);
    dfs(node.right, cur);
  };
  dfs(root, 0);
  return sum;
};
console.log(sumNumbers(treeRoot1));
