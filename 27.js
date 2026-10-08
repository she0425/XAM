//27. 2 arrays using .map(), 2 arrow functions, and 2 const variables

const nums1 = [1, 2]; // Const variable 1
const nums2 = [3, 4]; // Const variable 2

const double = n => n * 2; // Arrow Function 1
const triple = n => n * 3; // Arrow Function 2

// Array 1 transformed using .map() and Arrow Function 1
const res1 = nums1.map(double);
// Array 2 transformed using .map() and Arrow Function 2
const res2 = nums2.map(triple);

console.log(res1);
console.log(res2);

