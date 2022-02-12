# Boyer-Moore Voting Algorithm

Time complexity : O(n)
Space complexity : O(1)

The algorithm counts the majority of votes(elements) in an array by finding a part of the array (suffix) where the first element in array suffix is the majority. It does this by diregarding any prefix where the majority is equal to the minority of votes.

```cs
public int MajorityElement(int[] nums) {
	int count = 0;
	int candidate = 0;
	foreach (int num in nums) {
		if (count == 0) {
			candidate = num;
		}
		count += (num == candidate) ? 1 : -1;
	}
	return candidate;
}
```

### References
https://leetcode.com/problems/majority-element/solution/