---
title: Hash map
tags:
- data-structure
---

Time complexity: 
	- average case: insert, lookup O(1)
	- worst case: insert, lookup O(N)

A hash map, hash table or dictionary organizes data in key/value pairs with constant lookup time for the keys. It is similar to an array where indexes are used to access values but the key difference (no pun intended) is that any type of object can be used as the key and not just integers.

In fact hash tables are built with array as the backing field but in order to support strings or custom object in keys a `hashing function` is used to convert the string/custom object to an integer index. 

One problem using hash functions is that two keys can convert to the same index, and here `hash colisions` appear. One way to solve this is in each element in array to store a linked list and everytime we get a hash collision we store the key/value pair in the next node in the likned list.


Sample implementation:
```cs
public class MyHashMap
{
    private Node[] _buckets;
    private int _bucketCount;

    public MyHashMap()
    {
        _bucketCount = 100;
        _buckets = new Node[_bucketCount];
    }

    public void Put(int key, int value)
    {
        var bucketIndex = GetBucketIndex(key);
        var node = _buckets[bucketIndex];
        if (node == null)
        {
            _buckets[bucketIndex] = new Node(key, value);
            return;
        }

        while (node != null)
        {
            if (node.Key == key)
            {
                node.Value = value;
                return;
            }

            if(node.Next == null)
            {
                node.Next = new Node(key, value);
                return;
            }
            node = node.Next;
        }
    }

    public int Get(int key)
    {
        var bucketIndex = GetBucketIndex(key);
        var node = _buckets[bucketIndex];
        while (node != null)
        {
            if (node.Key == key)
            {
                return node.Value;
            }
            node = node.Next;
        }
        return -1;
    }

    public void Remove(int key)
    {
        var bucketIndex = GetBucketIndex(key);
        var node = _buckets[bucketIndex];
        if (node == null)
        {
            return;
        }

        if (node.Key == key)
        {
            _buckets[bucketIndex] = node.Next;
            return;
        }

        while (node.Next != null)
        {
            if (node.Next.Key == key)
            {
                node.Next = node.Next.Next;
                return;
            }
            node = node.Next;
        }
    }

    private int GetBucketIndex(int key)
    {
        return key % _bucketCount;
    }
}

public class Node
{
    public int Key { get; set; }
    public int Value { get; set; }

    public Node Next { get; set; }
    public Node(int key, int value)
    {
        Key = key;
        Value = value;
    }
}
```