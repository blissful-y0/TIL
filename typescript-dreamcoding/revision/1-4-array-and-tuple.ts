{
  // Array
  const fruits: string[] = ["tomato", "banana"];
  const score: Array<number> = [1, 2, 3, 4, 5];

  function printArray(fruits: readonly string[]) {
    // fruits.push(); // readonly를 작성할 때는 string[], 오브젝트의 불변성 보장
  }

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ["string", 123];
  const [name, age]: [string, number] = student;
}
