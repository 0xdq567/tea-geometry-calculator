// index.js

/**
 * 计算圆的面积
 * @param {number} radius 圆的半径
 * @returns {number} 圆的面积
 */
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
  }
  
  /**
   * 计算矩形的面积
   * @param {number} length 矩形的长度
   * @param {number} width 矩形的宽度
   * @returns {number} 矩形的面积
   */
  function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  // 导出两个函数，使其可以在其他地方使用
  module.exports = {
    calculateCircleArea,
    calculateRectangleArea
  };
  