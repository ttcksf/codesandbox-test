/*
const letの変数宣言
*/

// var val1 = "var";
// console.log(val1);

// //var変数は上書き可能
// val1="var変数"
// console.log(val1);

// //varは再宣言可能
// var val1="varを再宣言"
// console.log(val1);

// let val2 = "let";
// console.log(val2);

// //letは上書きが可能
// val2 = "let2";
// console.log(val2);

// //letは再宣言ができない
// let val2="let3"

// const val3 = "const";
// console.log(val3);

//constは上書き不可能
// val3 = "const2";

// const val3 = "const4";
//constでえ定義したオブジェクトはプロパティの変更が可能

// const val4 = {
//   name: "a",
//   age: 20
// };
// val4.name = "b";
// val4.address = "hiroshima";
// console.log(val4);
//constでえ定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/*
テンプレート文字列
*/

//「私の名前はaです。年齢は29才です」という文章を出力したい
const name = "a";
const age = 29;

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
console.log(message1);

//テンプレート文字列を使った方法
const message2 = `私の名前は${name}です。年齢は${age}です`;
console.log(message2);
