---
title: Heap
tags:
- data-structure
---

A heap is a complete binary tree where the any given node is smaller/bigger than it's descendents depending if it's a min/max heap

### Heap represented as array
A heap can easily be represented as an array:
- add in array level by level
-  if a given node is at index i to find the parent of a node: p = (i - 1) / 2 (floor value of i/2)
- left chlid = 2 * i + 1
- right child = 2 * i + 2
- all leaf nodes are in the last half of the array

### Insert a value in the heap
- add element at the end of array
- compare with parent and swap if it's smaller/bigger
- repeat for all parents of that node

### Extract min/max value from heap
- get value from root
- bring the right-most leaf(last element of array) in the root
- push the element down by comparing with it's children and swapping if neccesary (or [[Heapify]]) 

```cs
public class MinHeap
{
    private List<int> _heap;

    public MinHeap()
    {
        _heap = new List<int>();
    }

    public void Insert(int value)
    {
        _heap.Add(value);
        var currentIndex = _heap.Count - 1;
        var parentIndex = GetParentIndex(currentIndex);
        while (parentIndex >= 0 && _heap[currentIndex] < _heap[parentIndex])
        {
            Swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = GetParentIndex(currentIndex);
        }
    }

    private int GetParentIndex(int currentIndex)
    {
        return (currentIndex - 1) / 2;
    }

    public int ExtractMin()
    {
        if (_heap.Count == 0)
        {
            throw new Exception("Heap is empty");
        }

        int min = _heap[0];
        _heap[0] = _heap[_heap.Count - 1];
        _heap.RemoveAt(_heap.Count - 1);
        Heapify(0);
        return min;
    }

    private void Heapify(int index) {
        int left = 2 * index + 1;
        int right = 2 * index + 2;
        int smallest = index;

        if (left < _heap.Count && _heap[left] < _heap[smallest]) {
            smallest = left;
        }

        if (right < _heap.Count && _heap[right] < _heap[smallest]) {
            smallest = right;
        }

        if (smallest != index) {
            Swap(index, smallest);
            Heapify(smallest);
        }
    }

    private void Swap(int index, int parentIndex)
    {
        int temp = _heap[index];
        _heap[index] = _heap[parentIndex];
        _heap[parentIndex] = temp;
    }
}
```