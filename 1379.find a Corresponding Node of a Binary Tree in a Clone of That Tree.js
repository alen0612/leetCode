var getTargetCopy = function (original, cloned, target) {
  const findNode = (node, target) => {
    if (!node) return null;

    if (node.val === target.val) {
      return node;
    }
    return findNode(node.left, target) || findNode(node.right, target);
  };

  return findNode(cloned, target);
};
