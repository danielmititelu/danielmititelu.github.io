---
title: Kruskal's Algorithm
tags:
- algorithm
---
# Kruskal's Algorithm

Greedy alghorithm used to find the minimum spanning tree of a given graph

- Time complexity: O(Elog(E))

- Space complexity: O(E + V)

## Minimum spanning tree

A Minimum spanning tree(MST for short) is a subgraph of a cyclic, undirected graph that will connected all the vertices and contain no cycles.

Number of edges of the MST is equal to V - 1 where V is the number of vertices of the bigger graph

## Code example

```cs
private (int cost, Dictionary<int, List<(int node, int dist)>>) Kruskal(
    List<(int source, int dest, int dist)> edges, int length)
{
    // a disjoined set is used for finding cycles
    var ds = new DisjointSets(length);
    // minimum spanning tree
    var mst = new Dictionary<int, List<(int node, int dist)>>();

    // sort edges by increasing distance
    edges.Sort((a, b) => a.dist.CompareTo(b.dist));

    var cost = 0;
    foreach (var edge in edges)
    {
        // if the next min edge does not form a cycle then add it to the mst
        if (ds.Find(edge.source) != ds.Find(edge.dest))
        {
            //
            ds.Union(edge.source, edge.dest);
            if (!mst.ContainsKey(edge.source))
                mst.Add(edge.source, new List<(int node, int dist)>());

            if (!mst.ContainsKey(edge.dest))
                mst.Add(edge.dest, new List<(int node, int dist)>());

            // mst is non directional so add both directions
            mst[edge.source].Add((edge.dest, edge.dist));
            mst[edge.dest].Add((edge.source, edge.dist));

            cost += edge.dist;
        }
    }

    return (cost, mst);
}
```
## Problems
- https://leetcode.com/problems/connecting-cities-with-minimum-cost/
- https://leetcode.com/problems/min-cost-to-connect-all-points/