//1. biến và kiểu dữ liệu trong TypeScript
//Java: String tenBien = "Hello World";

//có 3 cách khai báo biến trong TypeScript: var, let, const
// cú pháp: var/let/const tenBien = giatri

//cơ chế hoisting: var sẽ được đưa lên đầu phạm vi, còn let và const sẽ không được hoisting
//let: cho phép thay đổi giá trị của biến, nhưng không cho phép khai báo lại biến trong cùng phạm vi
//const (constant): không cho phép thay đổi giá trị của biến sau khi đã gán, nhưng có thể khai báo lại biến trong cùng phạm vi
//js
let hoTen = "Nguyen Van A";
// hoTen = 10 //có thể cập nhật lại nếu nó đuôi file là .js
const PI = 3.14;
//ts
let fullName: string = "Nguyen Van B";
fullName = "Nguyen Van C";
const MAX_VALUE: number = 100;
let height: number = 175.5;

// có 2 kiểu dữ liệu chính trong js/ts
// kiểu nguyên thủy (primitive types): string, number, boolean, null, undefined,
// kiểu đối tượng (object types): array, object, function, class

//2. log dữ liệu ra console/terminal trong ts/js
console.log("Hello World");
console.log("Full Name:", fullName);
console.log("PI:", PI);
console.log("Max Value:", MAX_VALUE);
console.log("Height:", height);

//snippet: nhập clg ấn enter
console.log("test clg");

//mở rộng
console.warn("This is a warning message");
console.error("This is an error message");
console.info("This is an informational message");

//ctrl + j / cmd + j mở terminal trong win/mac
//npx: chạy thư viện cụ thể đã cài đặt trong dự án mà không phải trên máy tính (toàn bộ hệ thống, appium do cài global nên k cần npx, ts-node do không cài global mà trong dự án cụ thể -> bắt buộc dùng npx để chạy)
