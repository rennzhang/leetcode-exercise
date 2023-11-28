/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root, max = 1) {
  if (!root) return 0;
  let _maxL = max
  let _maxR = max
  if (root.left) {
    _maxL = maxDepth(root.left, _maxL + 1);
  }

  if (root.right) {
    _maxR = maxDepth(root.right, _maxR + 1);
  }

  return Math.max(_maxL, _maxR);
};

const treeRoot = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxDepth(treeRoot));
