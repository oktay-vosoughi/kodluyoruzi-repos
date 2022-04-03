# patika kodluyoruz veri yapimi ve algoritma ders serisi
## proje 1 insertion sort
- insertion sort steps for this list
```
[22,27,16,2,18,6]
[2,27,16,22,18,6]
[2,6,16,22,18,27]
[2,6,16,18,22,27]
```
----------------------------------------------------------
- Big O notation:
```
O(n^2)
```
------------------------------------------------------------------

- Time Complexity:
```
Worst case time complexity: Θ(n^2)
Average case time complexity: Θ(n^2)
Best case time complexity: Θ(n)
```
---------------------------------------------


- Inserion Sort first 4 step:
```
[7,3,5,8,2,9,4,15,6]
[2,3,5,8,7,9,4,15,6]
[2,3,4,8,7,9,5,15,6]
[2,3,4,5,7,9,8,15,6]
[2,3,4,5,6,9,8,15,7]
```
## proje 2 merge sort
- first qst
   ```  
   merge sort steps for list below
       [16,21,11,8,12,22]
             /         \
      [16,21,11]    [8,12,22]  
        /    \         /   \
  [16,21]   [11]    [8,12]  [22]
    /    \    |      /  \     |
  [16]  [21] [11]  [8] [12] [22]
    \    /    |     \   /     |
    [16,21]  [11]   [8,12]  [22]
        \     /        \     /
      [11,16,21]      [8,12,22]
           \             /
          [8,11,12,16,21,22]
          ```
- second qst
```
time complexity is O(n*logn)
```

## proje 3 binary tree sort
```
application binary tree sort for list below:
 [7, 5, 1, 8, 3, 6, 0, 9, 4, 2]
root is 4 and numbers smaller than 4 goes left side and bigger goes right side

                [4] 
              /     \   
            [2]     [7]   
           /   \    /  \
         [1]   [3][6]  [8]
         /             / \
       [0]           [5] [9]
```