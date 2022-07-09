//Quy đổi tiền : chương trình quy đổi từ USD sang VND
/** 3 khối
 * Input (đầu vào)
 * - tỷ giá USD so với VND 
 * - Số tiền USD
 * Process (xử lý)
 * - đặt biến rate ( tỷ giá), USD (số lượng tiền USD), VND (số tiền VND sau khi quy đổi)
 * - gán giá trị cho rate và USD 
 * - công thức tính : VND =  số tiền USD * tỷ giá 
 * Output (đầu ra): số tiền VND 
 */

var rate = 23500;
var USD = 2;
var VND = USD*rate;
console.log("Quy đổi tiền VND: " + VND + "VNĐ");