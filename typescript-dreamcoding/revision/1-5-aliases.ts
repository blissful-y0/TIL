{
  // Type Aliases
  type Text = string; // 텍스트라는 새로운 타입은 스트링이다
  const name: Text = "me";
  const address: Text = "zip";

  type num = number;
  type Student = {
    name: string;
    age: number;
  }; // => 타입을 정의

  const student: Student = {
    name: "승희",
    age: 26,
  };

  // string literal types
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
  // ellieName = "json"; 컴파일 에러!
}
