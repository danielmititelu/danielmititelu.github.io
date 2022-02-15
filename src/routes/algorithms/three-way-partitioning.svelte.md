# Three way partitioning

A partition strategy that is sometime used in quicksort.

## Code example 

### Dutch national flag problem
```cs
// Dutch national flag problem (partition array into 3 parts: red, white, blue)
// 0 -> red, 1 -> white, 2 -> blue
void SortColors(int[] nums) {
    int red = 0, white = 0, blue = nums.Length - 1;

    // Traverse the array until we hit the blue part
    while(white <= blue) 
    {
        // if the white iterator hit a red color
        // swap it with the red iterator and increment it 
        // and the white iterator
        if(nums[white] == 0) 
        { 
            Swap(nums, red, white);
            red++;
            white++;
        } 

        // if the white iterator hit a blue color
        // swap it with the blue iterator and 
        // decrement the blue iterator
        else if(nums[white] == 2) 
        { 
            Swap(nums, white, blue);
            blue--;
        } 

        // if white iterator hit a white color
        // it's already in the right place
        // so just increase the white iterator
        else { 
            white++;
        }
    }
}

void Swap(int[] nums, int left, int i)
{
    int temp = nums[left];
    nums[left] = nums[i];
    nums[i] = temp;
}
```

### Partition around a range
```cs
// Function to partition the array around the range such 
// that array is divided into three parts.
void ThreeWayPartition(int[] arr, int a, int b)
{
    int smaller = 0, i = 0, bigger = arr.Length - 1;

    // Traverse the array
    while (i < bigger)
    {
        // If current element is smaller than a,
        // then increment smaller and iterator by 1
        // and swap current element with smaller element
        if (arr[i] < a)
        {
            Swap(arr, i, smaller);
            smaller++;
            i++;
        }

        // If current element is bigger than b,
        // then decrement bigger by 1 and swap
        // current element with bigger element
        else if (arr[i] > b)
        {
            Swap(arr, i, bigger);
            bigger--;
        }

        // Else current element is in range [a,b]
        // so do nothing
        else
            i++;
    }
}

void Swap(int[] arr, int first, int second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}
```

## References

- https://en.wikipedia.org/wiki/Dutch_national_flag_problem#Pseudocode


## Problems

- https://leetcode.com/problems/sort-colors/
- https://practice.geeksforgeeks.org/problems/three-way-partitioning/1/#