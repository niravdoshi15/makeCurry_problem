## Problem Statement
We want to prepare the perfect curry with ingredients P, Q, and R.
"A" is a zero-indexed array of N integers.
Elements of A are integers within the range [−99,999,999 to 99,999,999]
The 'curry' is a string consisting of N characters such that each character is either 'P', 'Q' or 'R' and the
corresponding index of the array is the weight of each ingredient.
The curry is perfect if the sum of the total weights of 'P', 'Q' and 'R' is equal.
Write a function

` function myCurry `

such that, given a zero-indexed array Array consisting of N integers, returns the perfect curry of this array.
The function should return the string "noLuck" if no perfect curry exists for that Array.
For example, given array Array such that

` A[0] = 3 A[1] = 7 A[2] = 2 A[3] = 5 A[4] = 4 `

the function may return "PQRRP", as explained above. Given array A such that

` A[0] = 3 A[1] = 6 A[2] = 9 `

the function should return "noLuck".