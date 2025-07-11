tinh = (a, b) => {
    tong = a + b
    tich = a * b
    return tong + tich
}

kq = tinh(4, 5)
console.log("🚀 ~ kq:", kq)

person = (ten, tuoi) => ({'ten': ten, 'tuoi': tuoi})
console.log("🚀 ~ person:", person('thinh', 20))

const obj = {
  name: "Boops",
  regularFunc: function () {
    console.log("Function:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name);
  }
};

obj.regularFunc(); 
obj.arrowFunc();   

function greet(name, callback) {
  console.log("Xin chào", name);
  callback();
}

function sayBye() {
  console.log("Tạm biệt!");
}

greet("Boops", sayBye);
console.log("1. Bắt đầu");

setTimeout(() => {
  console.log("2. In ra sau 2 giây");
}, 2000); 

console.log("3. Kết thúc");

const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);
  
console.log(doubled); 

const find = numbers.findIndex((item) => item == 1)

console.log("🚀 ~ find:", find)
