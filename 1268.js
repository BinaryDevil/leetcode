/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a.charCodeAt(i) !== b.charCodeAt(i)) {
        return a.charCodeAt(i) - b.charCodeAt(i)
      }
    }
  })

  console.log(products)
  let result = []
  for (let i = 0; i < searchWord.length; i++) {
    let str = searchWord.substring(0, i + 1)

    console.log(str)

    result.push(
      products
        .filter((item) => item.indexOf(str) === 0)
        .filter((_, index) => index < 3)
    )
  }

  return result
}
