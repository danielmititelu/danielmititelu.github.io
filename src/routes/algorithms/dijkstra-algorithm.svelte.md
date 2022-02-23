# Dijkstra Algorithm

Greedy alghorithm used to find the shortest path in a weighted graph.

Worst case: O(n^2)

Restrictions: only for non-decreasing weights (all weights >= 0)


```cs
private Dictionary<int, int> Dijkstra(
    Dictionary<int, List<(int dest, int dist)>> graph, int source)
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
            var (node, dist) = minHeap.Dequeue();
            if (visited.Contains(node)) continue;
            visited.Add(node);

            // relax the edges of the current node,
            // update the distance of all the adjacent nodes
            foreach (var (dest, distToDest) in graph[node])
            {
                var newDist = dist + distToDest;
                if (newDist < distances[dest])
                {
                    distances[dest] = newDist;
                    minHeap.Enqueue((dest, newDist), newDist);
                }
            }
        }
        
        // return the shortest distance
        // from source node to all other nodes
        return distances;
    }
```



## Problems 

- https://leetcode.com/problems/network-delay-time/