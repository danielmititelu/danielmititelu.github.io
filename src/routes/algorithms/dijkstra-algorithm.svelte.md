---
title: Dijkstra Algorithm
---
# Dijkstra Algorithm

Greedy alghorithm used to find the shortest path in a weighted graph.

- Time complexity: O(V + Elog(E))

- Space complexity: O(V + E)

Restrictions: only for non-decreasing weights (all weights >= 0)


```cs
private Dictionary<int, int> Dijkstra(
    Dictionary<int, List<(int dest, int dist)>> graph, int source
    /*, int target*/)
{
    var minHeap = new PriorityQueue<(int node, int dist), int>();
    var distances = new Dictionary<int, int>();
    var visited = new HashSet<int>();

    // initialize every node with infinity
    foreach (var node in graph.Keys)
        distances[node] = int.MaxValue;

    // the distance from source node to itself is always 0
    distances[source] = 0;
    minHeap.Enqueue((source, 0), 0);

    while (minHeap.Count > 0)
    {
        // get the node with the minimum distance
        // from the previous visited node
        var (curNode, curDist) = minHeap.Dequeue();
        if (visited.Contains(curNode)) continue;
        visited.Add(curNode);

        // if we need a target node
        // if(node == target) return curDist;

        // relax the edges of the current node,
        // update the distances of all the adjacent nodes
        foreach (var (nextNode, nextWeight) in graph[curNode])
        {
            var nextDist = curDist + nextWeight;
            if (nextDist < distances[nextNode])
            {
                distances[nextNode] = nextDist;
                minHeap.Enqueue((nextNode, nextDist), nextDist);
            }
        }
    }

    // return the shortest distance
    // from source node to all other nodes
    return distances;

    // if we need a target node
    // return -1;
}
```



## Problems 

- https://leetcode.com/problems/network-delay-time/
- https://leetcode.com/problems/path-with-maximum-probability/
- https://leetcode.com/problems/cheapest-flights-within-k-stops/