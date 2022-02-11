// interface 대신 객체의 타입 정의
class Human {
  public name: string;
  private age: number; // private 로 선언하면 Human 클래스 밖에서는 해당 변수를 사용할 수 없음
  public gender: string;
  // 클래스가 시작할때마다 호출되는 메소드
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(lynn));
export {}; //typescript에서는 이걸 붙여줘야 한다. 모듈이라는 것을 알려주기 위해
