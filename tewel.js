//1^2 + 2^2 + 3^2 + 4^2 + 5^2 +... + 100^2
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i * i;
}
console.log(sum);
console.log("******************************");
//2^2 + 4^2 + 6^2 + 8^2 + 10^2 +... + 100^2
let add = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    add = add + i * i;
  }
}

console.log(add);
console.log("******************************");

//5! =>120 => 5*4*3*2*1
let fact = 1;
let number = 7;
for (let i = 1; i <= number; i++) {
  fact = fact * i;
}
console.log(fact);

//    fact =1 , i=1, fact = 1 * 1 = 1
//    fact =1 , i=2, fact = 1 * 2 = 2
//    fact =2 , i=3, fact = 2 * 3 = 6
//    fact =6 , i=4, fact = 6 * 4 = 24
//    fact =24 , i=5, fact = 24 * 5 = 120
//    fact =120, i=6, fact = 120 *6 = 720

console.log("******************************");

//array ko reverse [1,2,3,4,5] =>[5,4,3,2,1]

let ar = [1, 2, 3, 4, 5];
for (let i = ar.length - 1; i >= 0; i--) {
  console.log(ar[i]);
}
console.log("*******************************");
let st = "string";

for (let i = 0; i < st.length; i++) {
  if (
    st[i] === "a" ||
    st[i] === "e" ||
    st[i] === "i" ||
    st[i] === "o" ||
    st[i] === "u"
  ) {
    console.log("Vowels : " + st[i] + " position : " + i);
  }
}
console.log("*******************************");
//while loop

let u = 1;
while(u<=10){
    console.log(u);
    u++;
}
console.log("*******************************");
let num = 23434534234;

let count = 0;
while(num>0){
    count++;
    num = parseInt(num/10);
}
console.log(count);

// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 
