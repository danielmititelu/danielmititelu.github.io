---
title: Disjoint sets
---
# Disjoint sets

Disjoint Sets or Union find is a data structure used for finding relationships between nodes.

For example disjointed sets are ideal for the following scenarios:
- find if a person is a direct or indirect friend of another person in a social platform
- given a list of flights find if there is a way to reach a destination starting from a given city

Disjoint Sets or Union find implements 2 methods:
- find - returns the union representative
- union - connects two nodes

Time complexity for both find and union is smaller than O(log n) or amortized O(1) if union by rank and path compression is used.

An array is used to represent the parents of the disjointed sets. This is how the parents array would look after the union operation is performed on the blue and red nodes:

![image](/disjoint-sets.svg)

## Optimazations 

#### Path compression
An optimization that aims to flatten the traveral tree to the height of one so that all find operation would be completed in constant time.

#### Union by rank
This optimization aims to always attached the smaller tree to the bigger one. An additional array is required to store the ranks of each tree.

![image](/disjoint-sets-copmleted.svg)
#### Code example:
```cs
public class DisjointSets {
    private int[] _parents;
    private int[] _ranks;
    
	public int Count { get; set; }

    public DisjointSets(int n) {
        _parents = new int[n];
        _ranks = new int[n];
        Count = n;
        for(var i = 0; i < n; i++) {
            _parents[i] = i;
            _ranks[i] = 1;
        }
    }
    
    public int Find(int x) {
        if (_parents[x] == x) {
            return x;
        }
        // path compression
        _parents[x] = Find(_parents[x]);
        return _parents[x];
    }

    public void Union(int x, int y) {
        int xRoot = Find(x);
        int yRoot = Find(y);
        if (xRoot == yRoot) {
            return;
        }

        // union by rank
        if (_ranks[xRoot] < _ranks[yRoot]) {
            _parents[xRoot] = yRoot;
        } else if (_ranks[xRoot] > _ranks[yRoot]) {
            _parents[yRoot] = xRoot;
        } else {
            _parents[yRoot] = xRoot;
            _ranks[xRoot] += 1;
        }
        Count--;
    }
}
```

#### Problems that could be solved with union find
- https://leetcode.com/problems/number-of-provinces/
- https://leetcode.com/problems/longest-consecutive-sequence/
- https://leetcode.com/problems/accounts-merge/
- https://leetcode.com/problems/redundant-connection/
