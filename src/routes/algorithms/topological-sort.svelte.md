# Topological sort

Time Complexity: O(V+E) // V = vertex (or node), E = edge

Sort a graph so that any node on the left will point only to the nodes in the right

- cannot be done for graphs that have a cycle
- should be a DAG(directed acyclic graph)

Khan's algorithm BFS
```cs
public int[] FindOrder(int numCourses, int[][] prerequisites)
    {
        var ans = new List<int>();
        var graph = BuildGraph(numCourses, prerequisites);
        var indegrees = CountIndegrees(graph);

        var queue = new Queue<int>();

        for (var i = 0; i < numCourses; i++)
        {
            if (indegrees[i] == 0) 
				queue.Enqueue(i);
        }

        var index = numCourses - 1;
        while (queue.Any())
        {
            var courseDone = queue.Dequeue();
            ans.Add(courseDone);

            // remove it from the graph
            foreach (var adj in graph[courseDone])
            {
                indegrees[adj]--;
                if (indegrees[adj] == 0) 
					queue.Enqueue(adj);
            }
        }
        ans.Reverse();
        return ans.Count == numCourses ? 
			ans.ToArray() : new int[0];
    }

    private int[] CountIndegrees(Dictionary<int, List<int>> graph)
    {
        var indegrees = new int[graph.Count];
        foreach (var course in graph)
            foreach (var adj in course.Value)
                indegrees[adj]++;
                
        return indegrees;
    }

    private Dictionary<int, List<int>> BuildGraph(int numCourses, int[][] prerequisites)
    {
        var graph = new Dictionary<int, List<int>>();
        for (var i = 0; i < numCourses; i++)
            graph[i] = new List<int>();

        foreach (var prereq in prerequisites)
            graph[prereq[1]].Add(prereq[0]);

        return graph;
    }
```

DFS
```cs
public bool CanFinish(int numCourses, int[][] prerequisites)
{
	var graph = BuildGraph(numCourses, prerequisites);

	var visited = new bool[numCourses];
	var visiting = new bool[numCourses];

	for (int i = 0; i < numCourses; i++)
	{
		if (!visited[i] && HasCycle(graph, i, visited, visiting))
			return false;
	}

	return true;
}

private bool HasCycle(Dictionary<int, List<int>> graph, int i, bool[] visited, bool[] visiting)
{
	if (visited[i])
		return false;

	if (visiting[i])
		return true;

	visiting[i] = true;
	foreach (var j in graph[i])
	{
		if (HasCycle(graph, j, visited, visiting))
			return true;
	}

	visiting[i] = false;
	visited[i] = true;
	return false;
}

private Dictionary<int, List<int>> BuildGraph(int numCourses, int[][] prerequisites)
{
	var graph = new Dictionary<int, List<int>>();
	for (int i = 0; i < numCourses; i++)
		graph[i] = new List<int>();

	foreach (var pre in prerequisites)
		graph[pre[0]].Add(pre[1]);
		
	return graph;
}
```

### References

- https://leetcode.com/problems/course-schedule/