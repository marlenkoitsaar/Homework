/**
 * Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
hint: you need to know the formula for area of a triangle(
 */
function calculateTriangleArea(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
console.log(calculateTriangleArea(5, 6, 7));
