---
title: Quickselect
---
# Quickselect

#### Quick select or Hoare's selection algorithm

Time complexity: 
	- average case O(N)
	- worst case O(N^2)

Algoritm steps:
- figure out k-th index(smallest: k, biggest: n - k)
- add 2 pointers (`left` and `right`) for the start and end of the array, similar to binary search 
- while `left` is smaller than `right` pick a random index as pivot and partition:
	- save the pivot in the right pointer
	- starting from left with 2 pointers: `storeIndex` and `i`:
		- move `i` forword untill it reaches the right pointer,
		- every time `i` finds a value smaller than the pivot, swap it with `storeIndex` and increment `storeIndex`
		- at the end swap `storeIndex` with the pivot stored in right pointer
		- return `storeIndex`, this is our pivot in it's final ordered position
- similar to binary search compare pivot index with the k-th index:
	- if they are equal then we found the k-th element
	- if pivot index is bigger, seach in the left part of the pivot where there are smaller values
	- if pivot index is smaller, search in the right part

```cs
int FindKthLargest(int[] nums, int k)
{
    var kthIndex = nums.Length - k;
    var left = 0;
    var right = nums.Length - 1;
    while (left < right)
    {
        var pivotIdx = Partition(nums, left, right);
        if (pivotIdx == kthIndex)
            break;
        else if (pivotIdx < kthIndex)
            left = pivotIdx + 1;
        else
            right = pivotIdx - 1;
    }

    return nums[kthIndex];
}

int Partition(int[] nums, int left, int right)
{
    var pivotIdx = new Random().Next(left, right);
    Swap(nums, pivotIdx, right);
    var storeIndex = left;
    for (var i = left; i < right; i++)
    {
        if (nums[i] < nums[right])
        {
            Swap(nums, i, storeIndex);
            storeIndex++;
        }
    }
    Swap(nums, storeIndex, right);
    return storeIndex;
}

void Swap(int[] nums, int pivot, int right)
{
    var temp = nums[pivot];
    nums[pivot] = nums[right];
    nums[right] = temp;
}
```