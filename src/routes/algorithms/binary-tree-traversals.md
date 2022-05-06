---
title: Binary tree traversals
tags:
- algorithm
---
# Binary tree traversals

## Preorder traversal

![image](/preorder.svg)

Order of visiting: parent -> left child -> right child

Recursive implementation:
```cs
public IList<int> PreorderTraversal(TreeNode root) {
	var result = new List<int>();
	Preorder(root, result);
	return result;
}

public void Preorder(TreeNode node, IList<int> result) {
	if(node == null) return;

	result.Add(node.val);
	Preorder(node.left, result);
	Preorder(node.right, result);
}
```

Iterative implementation:
```cs
public IList<int> PreorderTraversal(TreeNode root) {
	var res = new List<int>();
	if (root == null) return res;

	var stack = new Stack<TreeNode>();
	stack.Push(root);
	while (stack.Count > 0) {
		var node = stack.Pop();
		res.Add(node.val);
		if (node.right != null)
			stack.Push(node.right);
		if (node.left != null) 
			stack.Push(node.left);
	}
	return res;
}
```

## Inorder traversal

It's called inorder since for a binary search tree it traverse the nodes in ascending order.

![image](/inorder.svg)

Order of visiting: left child -> parent -> right child

Recursive inorder traversal:
```cs
public IList<int> InorderTraversal(TreeNode root) {
	var result = new List<int>();
	Helper(root, result);
	return result;
}

public void Helper(TreeNode root, IList<int> result) {
	if(root == null) return;

	Helper(root.left, result);
	result.Add(root.val);
	Helper(root.right, result);
}
```

Iterative inorder traversal
```cs
public IList<int> InorderTraversal(TreeNode root)
{
    var result = new List<int>();
	var stack = new Stack<TreeNode>();
	var visit = root;
	while (visit != null || stack.Count > 0)
	{
		while (visit != null)
		{
			stack.Push(visit);
			visit = visit.left;
		}
		var next = stack.Pop();
		result.Add(next.val);
		visit = next.right;
	}

    return result;
}
```

## Postorder traversal

![image](/postorder.svg)

Order of visiting: left child -> right child -> parent

Recursive implementation:
```cs
public IList<int> PostorderTraversal(TreeNode root) {
	var result = new List<int>();
	Postorder(root, result);
	return result;
}

public void Postorder(TreeNode root, IList<int> result) {
	if(root == null) return;
	Postorder(root.left, result);
	Postorder(root.right, result);
	result.Add(root.val);
}
```

Iterative implementation:
```cs
public IList<int> PostorderTraversal(TreeNode root) {
	var result = new List<int>();
	if (root == null) return result;
	
	var stack = new Stack<TreeNode>();
	stack.Push(root);
	while (stack.Count > 0) {
		var node = stack.Pop();
		result.Insert(0, node.val);
		if (node.left != null) 
			stack.Push(node.left);
		if (node.right != null) 
			stack.Push(node.right);
	}
	return result;
}
```

