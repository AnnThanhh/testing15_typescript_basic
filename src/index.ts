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

//3. template string
let helloMessage: string =
  "Hello" + " " + fullName + ", welcome to TypeScript!";
console.log(helloMessage);

//cú pháp ``
let helloMessageTemplate: string = `Hello ${fullName}, welcome to TypeScript!`;
console.log(helloMessageTemplate);

//4. phạm vi của biến
// phạm vi toàn cục (global scope) và phạm vi cục bộ (local scope)

{
  let localVariable: string = "I am a local variable";
  console.log(localVariable);
  {
    console.log(localVariable);
  }
}
// console.log(localVariable) // lỗi vì không cùng tồn tại trong cùng 1 phạm vị scope

//5. hàm trong ts/js
// js
// cú pháp: function tenBien(thamSo,....){nơi thực hiện logic}
// có return function tenBien(thamSo,....){nơi thực hiện logic - return kết quả}

//ts:
//cú pháp function tenBien(thamSo: kieuDuLieu,....):void {nơi thực hiện logic}
// có return  function tenBien(thamSo: kieuDuLieu,....):kieuDuLieu trả về {nơi thực hiện logic - return kết quả}
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}
greet("alice");

function sum(a: number, b: number): number {
  return a + b;
}
const result = sum(5, 10);
console.log("Sum:", result);

//6. arrow function
//cú pháp: (thamSo: kieuDuLieu,....):kieuDuLieu => {nơi thực hiện logic - return kết quả}
//anonymous function là hàm không được định nghĩa tên
(a: number, b: number): number => {
  return a + b;
};

const multiply = (c: number, d: number): number => {
  //không thực thêm logic nào khác
  return c * d;
};

const multiplyV2 = (c: number, d: number): number => c * d;

const resultMultiply = multiply(4, 6);
console.log("Multiply:", resultMultiply);

//7. ép kiểu dữ liệu và đọc kiểu dữ liệu
let bienA: string = "5";
let bienB: number = 10;

//ép kiểu tự động
console.log("nhân: ", bienA * bienB);
console.log("chia: ", bienB / bienA);

//ngoài trừ phép cộng, các phép toán khác sẽ tự động ép kiểu dữ liệu nếu có sự kết hợp giữa string và number
console.log("công: ", bienA + bienB);

//ép kiểu thủ công
const bienC: number = Number(bienA); // ép kiểu string thành number
const bienD: string = String(bienB); // ép kiểu number thành string

console.log(+bienA); // chuyển đổi string thành number
console.log(bienA * 1); // chuyển đổi string thành number

//đọc kiểu dữ liệu
console.log("Kiểu dữ liệu của bienA:", typeof bienA);
console.log("Kiểu dữ liệu của bienB:", typeof bienB);

//8. array trong ts/js
//cú pháp: let/const tenArray: kieuDuLieu[] = [giatri1, giatri2,...]
let arrayNumbers: number[] = [1, 2, 3, 4, 5];
let arrayStrings: string[] = ["apple", "banana", "cherry"];
console.log(arrayNumbers);
console.log(arrayStrings);

//9. object / class
//object
let person = {
  //thuộc tính
  name: "John",
  age: 30,
  isStudent: false,

  //phương thức
  greet: function () {
    console.log(`hello ${this.name}`);
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
person.greet();

let people: { name: string; age: number; greet: () => void } = {
  //thuộc tính
  name: "Jane",
  age: 25,
  //phương thức
  greet: function () {
    console.log(`hello ${this.name}`);
  },
};
// type alias | union type | optional property
type Person = {
  id: number | string;
  name: string;
  age?: number;
  greet: () => void;
};
type ID = number | string;
const id: ID = "abc1345897";
let id2: ID = 1234567890;

type Status = "success" | "error" | "pending";
type Status2 = "active" | "inactive";
const currentStatus: Status = "success";

let peopleV2: Person = {
  //thuộc tính
  id: "abc1345897",
  name: "Jane",
  //phương thức
  greet: function () {
    console.log(`hello ${this.name}`);
  },
};

let peopleV3: Person = {
  //thuộc tính
  id: 2,
  name: "Jane",
  age: 25,
  //phương thức
  greet: function () {
    console.log(`hello ${this.name}`);
  },
};

//class: tương tự như Java, C#, có thể có thuộc tính, phương thức, constructor, kế thừa, đa hình,...
class Student {
  // thuộc tính
  public id: number;
  private name: string;
  protected age: number;

  //constructor: khởi tạo giá trị cho các thuộc tính trong class
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  //phương thức
  public greet(): void {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
  }

  public getName(): string {
    return this.name;
  }
}

//interface
// chỉ có thể sử dụng cho object và class,
interface IPerson {
  id: number;
  name: string;
  age: number;
  greet: () => void;
}
interface IPerson {
  address?: string;
}

interface IStudent extends IPerson {
  grade: string;
}

let person1: IPerson = {
  id: 1,
  name: "Alice",
  age: 20,
  //   address: "123 Main St",
  greet: function () {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
  },
};

let student1: IStudent = {
  id: 2,
  name: "Bob",
  age: 22,
  grade: "A",
  greet: function () {
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
  },
};

//generic type: cho phép định nghĩa dữ liệu tổng quát
const arrayGeneric: Array<number> = [1, 2, 3, 4, 5];
const arrayGenericV2: Array<string> = ["apple", "banana", "cherry"];

function identifyType<T>(params: T): T {
  return params;
}
const resultIdentifyNumber = identifyType<number>(123);

const resultIdentifyString = identifyType<string>("Hello TypeScript");

// bất đồng bộ

