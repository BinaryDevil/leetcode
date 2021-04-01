/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length > 0) {
    const r = matrix.length
    const c = matrix[0].length

    if (matrix[r - 1][c - 1] < target || matrix[0][0] > target) {
      return false
    } else {
      for (var i = 0; i < r; i++) {
        if (matrix[i][c - 1] >= target) {
          break
        }
      }

      return matrix[i].indexOf(target) > -1
    }
  } else {
    return false
  }
}
