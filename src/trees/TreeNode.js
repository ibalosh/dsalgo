export function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

export function treeFromArray(arr) {
  let root = new TreeNode(arr[0]);
  let queue = [root];

  let i = 1;
  while (i < arr.length) {
    let node = queue.shift();

    if (i < arr.length) {
      const element = arr[i++];
      if (element !== null) {
        node.left = new TreeNode(element);
        queue.push(node.left);
      }
    }

    if (i < arr.length) {
      const element = arr[i++];
      if (element !== null) {
        node.right = new TreeNode(element);
        queue.push(node.right);
      }
    }
  }

  return root;
}

export function printTree(root, type = "inOrder") {
  function preOrder(node) {
    if (node === null) return;

    console.log(node.val + " ");
    preOrder(node.left);
    preOrder(node.right);
  }

  function inOrder(node) {
    if (node === null) return;

    inOrder(node.left);
    console.log(node.val + " ");
    inOrder(node.right);
  }

  function postOrder(node) {
    if (node === null) return;

    inOrder(node.left);
    inOrder(node.right);
    console.log(node.val + " ");
  }

  if (type === "inOrder")
    inOrder(root);
  else if (type === "preOrder")
    preOrder(root);
  else
    postOrder(root);
}

/**
 * let root = [3,5,1,6,2,0,8,null,null,7,4];
 * let tree = treeFromArray(root);
 * printTree(tree, "preOrder");
 */




