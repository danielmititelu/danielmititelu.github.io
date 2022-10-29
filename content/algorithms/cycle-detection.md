---
title: Cycle detection
tags:
- algorithm
---

```cs
public enum Colors {
    White,
    Gray,
    Black
}

public bool HasCycle(int[][] graph, int start, Colors[] colors) {
    if(colors[start] == Colors.Gray) return true;
    if(colors[start] == Colors.Black) return false;
    
    colors[start] = Colors.Gray;
    foreach(var neighbor in graph[start]) {
        if(HasCycle(graph, neighbor, colors)) 
            return true;
    }
    
    colors[start] = Colors.Black;
    return false;
}
```

## Problems
- https://leetcode.com/problems/find-eventual-safe-states