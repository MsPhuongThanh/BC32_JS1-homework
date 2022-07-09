// Tính tiền lương nhân viên 
/**
 * Input (đầu vào):
 * -Lương 1 ngày (hằng số) : 100.000 VND
 * -Số ngày làm (var )
 * Process (xử lý):
 * -Tạo hằng số : WAGE (lương theo giờ), workingDay (số ngày làm việc), salary (lương)
 * -Gán giá trị cho WAGE, workingDay
 * -Công thức tính lương :salary =  Lương 1 ngày * số ngày làm 
 * Output (đầu ra) : tiền lương nhân viên 
*/
const WAGE = 100000;
var workingDay = 20;
var salary = WAGE*workingDay;
console.log("salary: " + salary); 