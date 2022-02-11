const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};

console.log(sayHi("Nicolas", 24, "male"));
export {}; //typescript에서는 이걸 붙여줘야 한다. 모듈이라는 것을 알려주기 위해
