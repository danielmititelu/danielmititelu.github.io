# Graph traversals

## Breadth-first search
We scan through the graph level by level starting with the nodes closest to the starting node.

#### Examples:
- BFS can only be implemented in iterative manner:
```cs
public void BFS(Node node) {
	var queue = new Queue<Node>();
	queue.Enqueue(node);
	while(queue.Count > 0) {
		const current = queue.Dequeue();
		// visit node
		node.Visited = true;
		foreach(var child of node.Children)
			if(!child.Visited)
				stack.Enqueue(child);
	}
}
```

## Depth-first search
DFS for short is going to search a graph or matrix by depth first meaning it will pick a direction and go in that direction before coming back to visit other directions

DFS can be implemented either recursively or iterative

#### Examples:
Recursive implementation:
```cs
public void DFS(Node node) 
{
	if(node is null) 
		return;
		
	// visit node
	node.Visited = true;
	foreach(var child in node.Children)
		if(!child.Visited)
			DFS(child)
}

```

Iterative implementation:
```cs
public void DFS(Node node) 
{
	var stack = new Stack<Node>{ node };
	
	while(stack.Count > 0) {
		const current = stack.Pop();
		// visit node
		node.Visited = true;
		foreach(var child of node.Children)
			if(!child.Visited)
				stack.Push(child);
	}
}