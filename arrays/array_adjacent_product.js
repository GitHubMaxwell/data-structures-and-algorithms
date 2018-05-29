'use strict';

function LargestProduct(matrix) {
  let lgProd =0;
  const maxColumn = matrix[0].length-1;
  console.log(maxColumn);
  const maxRow = matrix.length-1;
  console.log(maxRow);

  for(let row = 0; row <= maxRow; row++){
    for(let column = 0; column <= maxColumn; column++){
      let val = matrix[row][column];
      let product = 0;

      if(hasNeighborToLeft(column,maxColumn)) {
        product = val * matrix[row][column - 1];
        lgProd = Math.max(lgProd, product);
      }
      if(hasNeighborToRight(column,maxColumn)) {
        product = val * matrix[row][column +1];
        lgProd = Math.max(lgProd, product);
      }
      if(hasNeighborToBottom(row,maxRow)) {
        product = val * matrix[row + 1][column];
        lgProd = Math.max(lgProd, product);
      }

    //   if(hasNeighborToBottom(row,maxRow) && hasNeighborToLeft(column,maxColumn)) {
    //     product = val * matrix[row + 1][column - 1];
    //     lgProd = Math.max(lgProd, product);
    //   }
    //   if(hasNeighborToBottom(row,maxRow) && hasNeighborToRight(column,maxColumn)) {
    //     product = val * matrix[row + 1][column + 1];
    //     lgProd = Math.max(lgProd, product);
    //   }
    }
  }
  return lgProd;
}
module.exports = LargestProduct;


function hasNeighborToRight(col, newCol) {
  if(col + 1 === newCol) {
    return true;
  } else {
    return false;
  }
}
function hasNeighborToLeft(col, newCol) {
  if(col - 1 === newCol) {
    return true;
  } else {
    return false;
  }
}
function hasNeighborToBottom(row, newRow) {
  if(row + 1 === newRow) {
    return true;
  } else {
    return false;
  }
}