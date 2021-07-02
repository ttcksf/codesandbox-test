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
// const name = "a";
// const age = 29;

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// //テンプレート文字列を使った方法
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "a",
//   age: 28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);
// const myProfile = ["a", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}才です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHallo = (name = "a") => console.log(`こんにちは！${name}さん`);
// sayHallo("b");

/**
 * スプレッド構文
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合

//スプレッド構文の場合
// const arr4 = [10, 20];
// const arr6 = [...arr4];
// console.log(arr4); //[10,20]と表示される
// console.log(arr6); //[10,20]と表示される
// //arr6の中身を変えたら
// arr6[0] = 40;
// console.log(arr4); //[10,20]と表示される
// console.log(arr6); //[40,20]と表示される

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

//代入の場合
// const arr4 = [10, 20];
// const arr6 = arr4;
// console.log(arr4); //[10,20]と表示される
// console.log(arr6); //[10,20]と表示される
// //arr6の中身を変えたら
// arr6[0] = 40;
// console.log(arr4); //[40,20]と表示される
// console.log(arr6); //[40,20]と表示される

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["a", "b", "c"];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(`${index + 1}番目は${nameArr[index]}です`);
// // }
// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });

// // console.log(nameArr2);
// // nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 1;
// // });
// // console.log(newNumArr);

// const newNumArr = nameArr.map((name) => {
//   if (name === "c") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNumArr);

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "true" : "false";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num == "number" ? num.toLocaleString() : "数値を入力してください";
// // console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 30));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = true;
// if (flag1 || flag2) {
//   console.log("１か２はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("１も２はtrueになります");
// }

// ||は左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee); //100が表示

//&&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2); //nullが表示
