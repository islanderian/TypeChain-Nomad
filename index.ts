const name = "Nicolas",
  age = 24,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {}; //typescript에서는 이걸 붙여줘야 한다. 모듈이라는 것을 알려주기 위해
