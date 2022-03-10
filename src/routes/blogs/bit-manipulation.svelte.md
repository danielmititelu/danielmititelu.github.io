---
title: A few words about bit manipulation
---

# A few words about bit manipulation

This aspect is usually abstracted in the higher level languages but every object in a language can be broken down to primitives types which can be further broken down to a bit pattern of 32 or 64 bits.

### 6 representation in 8-bit:
![image](/bits.svg)

## Bit operations

### Bitwise complement ( `~` )
Caclulates the complement of a bit pattern by reversing each bit

### Bitwise logical AND ( `&` )
Compares two operands and returns a bit pattern that shows which bits are 1 in both of them

### Bitwise logical OR ( `|` )
Compares two operands and returns a bit pattern that shows which bits are 1 in either one

### Bitwise logical XOR ( `^` )
Compares two operands and returns a bit pattern that shows which bits are 1 only in one of the operands

### Bitwise shifting

Bitwise left shift (`<< x`) operation will shift all bits to the left by x positions and esentially double the number for each shift.

![image](/left-shift.svg)


Bitwise right shift (`>> x`) operation will shift all bits to the right by x positions and esentially halve the number for each shift.

![image](/right-shift.svg)

When shifting bits left/right the left-most/right-most bit will fall in the void of nothingness and disappears out of existence (dramatic music starts playing)

## Terminology

- Least siginificant bit (LSB) is the right most bit
- Most significant bit (MSB) is the highest or left most bit that is 1

## Bit manipulation tricks

#### Get first bit or LSB
```cs
var n = 5;
var bit = n & 1; // first bit is 1
```

#### Number of ones in a bit pattern or Hamming weight 
```cs
int HammingWeight(uint n) {
    int count = 0;
    while (n != 0) {
        var bit = n & 1;
        if(bit == 1) count++;
        n >>= 1;
    }
    return count;        
}
```

## Problems
- https://leetcode.com/problems/sum-of-two-integers/
- https://leetcode.com/problems/number-of-1-bits/
- https://leetcode.com/problems/counting-bits/