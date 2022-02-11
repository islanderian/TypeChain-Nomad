// 객체의 타입 정의
interface Human {
  name: string;
  age: number;
  gender: string;
}
// 객체
const person = {
  name: "nicolas",
  age: 22,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));
export {}; //typescript에서는 이걸 붙여줘야 한다. 모듈이라는 것을 알려주기 위해
