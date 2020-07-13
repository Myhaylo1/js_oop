'use strict';

// let a;
// let b;
//
// /* 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. */
// console.log('11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, \'a\', \'b\', \'c\', 4, 5].');
// a=[1, 2, 3, 4, 5];
// b=[];
// b=b.concat(a);
// a.splice(3,0,'a','b','c');
// console.log(`It was: [${b}]. Has begin: [${a}]`);
//

class ClassUser {
  constructor(name, surname, age, email, isBanned = false) {
    this._name = name;
    this._surname = surname;
    this._age = age;
    this._email = email;
    this._isBanned = isBanned;
  }

  get isBanned() {
    return this._isBanned;
  }

  set isBanned(value) {
    if (typeof value !== 'boolean') {
      throw typeof TypeError('');
    }
    this._isBanned = value;
  }
}

class ClassAdmin extends ClassUser {
  constructor(name, surname, age, email, isBanned = false) {
    super(name, surname, age, email, isBanned);
  }

  setUserBan(value) {
    value.isBanned = true;
  }
}

let Vasyl = new ClassUser;
console.log(Vasyl.isBanned);
let admin = new ClassAdmin;
admin.setUserBan(Vasyl);
console.log(Vasyl.isBanned);

// class ClassSquirrel {
//   constructor(name) {
//     this._name = name;
//   }
//   eat() {
//     return `Squirrel ${this._name} is eating`;
//   }
//   climb() {
//     return `Squirrel ${this._name} is climbing`;
//   }
// }
//
// class ClassFlyingSquirrel extends ClassSquirrel {
//   constructor(name, distance) {
//     super(name);
//     this._distance = distance;
//   }
//   fly() {
//     return `Flying squirrel ${this._name} is flying on distance ${this._distance} m.`;
//   }
//   setDistyance(value){
//     this._distance = value;
//   }
// }
//
// class ClassPushkinSquirrel extends ClassFlyingSquirrel {
//   constructor(name, distance, song_repertuar, dance_repertuar) {
//     super(name, distance);
//     this._song_repertuar=song_repertuar;
//     this._dance_repertuar=dance_repertuar;
//   }
//   song() {
//     return `Pushkin squirrel ${this._name} is songing: ${this._song_repertuar}.`;
//   }
//   dance() {
//     return `Pushkin squirrel ${this._name} is dancing: ${this._dance_repertuar}.`;
//   }
//   eat() {
//     return `Squirrel ${this._name} is nibbling nuts`;
//   }
// }
//
// let squirrel = new ClassSquirrel('belka');
// console.log(squirrel.eat());
// console.log(squirrel.climb());
// let squirrelFly = new ClassFlyingSquirrel('belka_fly',60);
// console.log(squirrelFly.eat());
// console.log(squirrelFly.climb());
// console.log(squirrelFly.fly());
// let squirrelKazka = new ClassPushkinSquirrel('belka_Pushkina',60,'aria,pesenka','vals,polka,polonez');
// squirrelKazka.setDistyance(90);
// console.log(squirrelKazka.eat());
// console.log(squirrelKazka.climb());
// console.log(squirrelKazka.fly());
// console.log(squirrelKazka.song());
// console.log(squirrelKazka.dance());

class ClassFigure{
  constructor(value) {
    this._name=value;
  }
  getName(){
    return this._name;
  }
  getArea(){};
}
class ClassTriangle extends ClassFigure{
  constructor(a,b,angle) {
    super('Triangle');
    this._a=a;
    this._b=b;
    this._angle=angle;
  }
  getArea(){
    return this._a*this._b*Math.sin(this._angle*Math.PI/180);
  };
}
class ClassBar extends ClassFigure{
  constructor(a,b,angle) {
    super('Triangle');
    this._a=a;
    this._b=b;
  }
  getArea(){return this._a*this._b};
}
let figTriangle=new ClassTriangle(3,5,90);
console.log(`${figTriangle.getName()}'s area is ${figTriangle.getArea()} for (3,5,90)`);
