//Tính diện tích, chu vi hình chữ nhật 
/**
 * Input ( đầu vào)
 * - Chiều dài HCN
 * - Chiều rộng HCN
 * Process ( xử lý)
 * - đặt các biến: length (chiều dài HCN), width(chiều rộng HCN), area (diện tích HCN), perimeter(chu vi HCN)
 * - gán giá trị cho length và width
 * - Diện tích HCN (area = chiều dài * chiều rộng)
 * - Chu vi HCN (perimeter) = 2 *(chiều dài + chiều rộng)
 * Output ( đầu ra)
 */

var length = 15;
var width = 10;
var area = length*width;
var perimeter = 2*(length + width);
console.log("Diện tích HCN: " + area);
console.log("Chu vi HCN: " + perimeter);