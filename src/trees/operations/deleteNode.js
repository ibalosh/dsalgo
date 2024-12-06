import {printTree, TreeNode} from "../TreeNode.js";

/**
 * Delete node value into Binary tree.
 * https://www.geeksforgeeks.org/deletion-in-binary-search-tree/
 *
 * @param {TreeNode} node
 * @param {number} val
 * @returns {TreeNode|*}
 */
function deleteNode(node, val) {
  if (node == null) {
    return null;
  }

  if (node.val > val) {
    node.left = deleteNode(node.left, val);
  }
  else if (node.val < val) {
    node.right = deleteNode(node.right, val);
  }
  else {
    if (node.left === null) {
      return node.right;
    }
    else if (node.right === null) {
      return node.left;
    }
    else {
      let cur = getSuccessor(node);
      node.val = cur.val;
      node.right = deleteNode(node.right, cur.val);
    }
  }
  return node;
}

function getSuccessor(node) {
  let cur = node.right;
  while (cur !== null && cur.left !== null) {
    cur = cur.left;
  }

  return cur;
}

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(18);

root = deleteNode(root, 15);

printTree(root, "inOrder")


