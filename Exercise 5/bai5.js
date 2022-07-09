// Tính tổng 2 ký số 
/**
 * Input (đầu vào)
 * - một số có 2 chữ số (VD: 89)
 * Process (xử lý)
 * - Step 1: tạo biến n,ten,unit, sum
 * -Step 2: gán giá trị cho n 
 * -Step 3: tính số hàng chục theo công thức : ten = Math.floor(n%100/10)
 * -Step 4: tính số hàng đơn vị theo công thức : unit = n%10
 * -Step 5: tính tổng sum = ten + unit 
 * -Step 6: in kết quả sum ra console 
 * Output ( đầu ra)
 * - kết quả sum (tổng 2 ký số)
 */

var n= 89;
var ten = Math.floor(n%100/10);
var unit = n%10;
var sum = ten + unit;
console.log("Tổng 2 ký số: " + sum);