// Javacsript variables,
// after ES6...

let hello = "hello";
hello = "hi"; // or

const bye = "bye";

// before ES6

var age = 5;
age = 1; // hosting issue => do not use!

// types of Javascript
// Primitive: number, string, boolean, bingint, symbol, null, undefined
// Object: function, array... etc

// number type
const num: number = 1;

// string type

let string: string = "bubble tea";
// string = 123; // compile error!

// boolean type

const checkType: boolean = true;

// undefined (결정되지 않은)
let call: undefined; // not really using
// call = "hello"; // compile error!
let union: number | undefined; // this way! (결정되지 않은 경우)
union = undefined;
union = 123;

// example
function findA(): number | undefined {
  return undefined;
} // 값을 찾았으면 숫자를 리턴, 아니라면 undefined를 리턴

// null (값이 있거나 없거나)
let person: null; // not really using
let personUnion: string | null; // this way!

// unknown (쓰면 의미 없음)
let notSure: unknown = 0;
notSure = "he";
notSure = "123"; // 어떤 타입이든 담을 수 있음, 무슨 타입인지 알 수 없는 상태

// any
let anything: any = 0;
anything = "can be assigned with any"; // 쓰지... 말자!

// void
function print(): void {
  console.log("hello");
  // return이 생략됨
} // 함수에서 아무것도 리턴하지 않는 경우 void

let unusable: void = undefined; // 이렇게 선언하지 않음

// never
function throwErrorNow(message: string): never {
  // message -> sever (log)
  throw new Error(message);
  // 에러가 있거나 또는
  while (true) {} // 이 경우
} // 절대 리턴할 수 없음

// object
let obj: object;
function acceptSomeObjectNow(obj: object) {}
acceptSomeObjectNow({ name: "hana" });
// 원시 타입을 제외한 모든 오브젝트 타입을 할당할 수 있음. Array, object 등 모두 포함
// 가능하면 구체적으로 어떤 오브젝트 타입인지 명시해서 작성하는 것이 좋음
