---
title: Topological sort
tags:
- algorithm
---

Time Complexity: O(V+E) // V = vertex (or node), E = edge

Sort a graph so that any node on the left will point only to the nodes in the right

- cannot be done for graphs that have a cycle
- should be a DAG(directed acyclic graph)

Khan's algorithm
```cs
private List<int> TopologicalSort(Dictionary<int, List<int>> graph) {
    var indegrees = CountIndegrees(graph);
    var queue = new Queue<int>();
    
    foreach(var (course, count) in indegrees) {
        if(count == 0) {
            queue.Enqueue(course);
        }
    }
    
    var topologicalOrder = new List<int>();
    while(queue.Any()) {
        var nextNode = queue.Dequeue();
        topologicalOrder.Add(nextNode);
        
        foreach(var dependency in graph[nextNode]) {
            indegrees[dependency]--;
            if(indegrees[dependency] == 0) {
                queue.Enqueue(dependency);
            }
        }
    }
    
    return topologicalOrder;
}

private Dictionary<int, int> CountIndegrees(Dictionary<int, List<int>> graph) {
    var indegrees = new Dictionary<int, int>();
    
    foreach(var (course, prerequisites) in graph) {
        indegrees[course] = 0;
    }

    foreach(var (course, prerequisites) in graph) {
        foreach(var prerequisite in prerequisites) {
            indegrees[prerequisite]++;
        }
    }

    return indegrees;
}
```

### References

- https://leetcode.com/problems/course-schedule/