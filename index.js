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

// class ClassUser {
//   constructor(name, surname, age, email, isBanned = false) {
//     this._name = name;
//     this._surname = surname;
//     this._age = age;
//     this._email = email;
//     this._isBanned = isBanned;
//   }
//
//   get isBanned() {
//     return this._isBanned;
//   }
//
//   set isBanned(value) {
//     if (typeof value !== 'boolean') {
//       throw typeof TypeError('');
//     }
//     this._isBanned = value;
//   }
// }
//
// class ClassAdmin extends ClassUser {
//   constructor(name, surname, age, email, isBanned = false) {
//     super(name, surname, age, email, isBanned);
//   }
//
//   setUserBan(value) {
//     value.isBanned = true;
//   }
// }
//
// let Vasyl = new ClassUser;
// console.log(Vasyl.isBanned);
// let admin = new ClassAdmin;
// admin.setUserBan(Vasyl);
// console.log(Vasyl.isBanned);

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

// class ClassFigure{
//   constructor(value) {
//     this._name=value;
//   }
//   getName(){
//     return this._name;
//   }
//   getArea(){};
// }
// class ClassTriangle extends ClassFigure{
//   constructor(a,b,angle) {
//     super('Triangle');
//     this._a=a;
//     this._b=b;
//     this._angle=angle;
//   }
//   getArea(){
//     return this._a*this._b*Math.sin(this._angle*Math.PI/180);
//   };
// }
// class ClassBar extends ClassFigure{
//   constructor(a,b,angle) {
//     super('Triangle');
//     this._a=a;
//     this._b=b;
//   }
//   getArea(){return this._a*this._b};
// }
// let figTriangle=new ClassTriangle(3,5,90);
// console.log(`${figTriangle.getName()}'s area is ${figTriangle.getArea()} for (3,5,90)`);

// let a=0 ?? 2;
// console.log(a);
// a.I;

// class ClassStack {
//   constructor() {
//     this._size = 0;
//     this.maxSize = 10000;
//   }
//
//   get size() {
//     return this._size
//   }
//
//   push(value) {
//     this.[this._size++] = value
//   }
//
//   pop() {
//     delete this.[this._size--]
//   }
//
//   pick() {
//     return this.[this._size - 1]
//   }
//
//   get isEmpty() {
//     return this._size === 0;
//   }
// }
// s=['(',')','(',')',')'];


/* Парнiсть дужок */

// class Stack {
//
//   constructor(maxSize = 10000) {
//     this._size = 0;
//     this._maxSize = maxSize;
//   }
//
//   get size() {
//     return this._size;
//   }
//
//   push(v) {
//     this[this._size++] = v;
//     if (this._size > this._maxSize) {
//       throw new RangeError( 'Stack overflow' );
//     }
//     return this._size;
//   }
//
//   pop() {
//     if (this.isEmpty) {
//       return;
//     }
//     const value = this[--this._size];
//     delete this[this._size];
//     return value;
//   }
//
//   pick() {
//     if (this.isEmpty) {
//       return;
//     }
//     return this[this._size - 1];
//   }
//
//   get isEmpty() {
//     return this.size === 0;
//   }
// }
//
// const stack = new Stack( 10 );
// let s=' (())';
// let b=true;
// console.log(s);
// for (let ss of s) {
//   switch (ss) {
//     case '(': stack.push(ss); break;
//     case ')': if (!stack.isEmpty) {
//                 if (stack.pop()!=='(') b=false;
//               } else b=false;
//               break;
//   }
//   if (!b) break;
// }
// if (!stack.isEmpty) b=false;
// console.log(b);

// let stack = [];
// let s=')( ';
// let b=true;
// console.log(s);
// for (let ss of s) {
//   switch (ss) {
//     case '(': stack.push(ss); break;
//     case ')': if (stack.length) {
//       if (stack[stack.length-1]==='(') stack.pop(); else b=false;
//     } else b=false;
//       break;
//   }
//   if (!b) break;
// }
// if (stack.length) b=false;
// console.log(b);

// let stack = [];
// let s='{(()) ';
// let b=true;
// console.log(s);
// for (let ss of s) {
//   switch (ss) {
//     case '(': stack[stack.length++]=ss; break;
//     case ')': if (stack.length) {
//       if ('('!==stack[stack.length-1]) b=false; else stack.pop();
//     } else b=false;
//       break;
//   }
//   if (!b) break;
// }
// if (stack.length) b=false;
// console.log(b);



// let userToMessageMap=new Map();
// let User1={
//   name: 'M',
//   surname: 'Vas',
//   age: 45
// }
// userToMessageMap.set(User1,[
//   {timestamp: '2020-10-12 11:11', text: 'ПрЮвет ВОЛКУ!!!'},
//   {timestamp: '2020-10-12 11:11', text: 'ПрЮвет ЗАЙЦУ!!!'},
// ]);
// let user1Message=getUserMessagees(User1);
// function getUserMessagees(user) {
//   return userToMessageMap.get(user);
// }
// console.log(user1Message);

// const vocabulary=new Map();
// vocabulary.set('0','0');
// vocabulary.set('1','I');
// vocabulary.set('2','II');
// vocabulary.set('3','III');
// vocabulary.set('4','IV');
// vocabulary.set('5','V');
// vocabulary.set('6','VI');
// vocabulary.set('7','VII');
//
// console.log('7=',vocabulary.get('7'));
// console.log('8=',vocabulary.get('8'));
//
// let translate=function(str, separator=' '){
//   return str.split(separator).map(w => vocabulary.get(w));
// }
// console.log( translate('1 2 3 4') );
//
// let vocabularyKey=[... vocabulary.keys()];
// let vocabularyValue=[... vocabulary.values()];
// console.log(vocabularyKey);
// console.log(vocabularyValue);

// let map=new Map([['key1','value1'],['key2','value2'],['key3','value3'],['key4','value4']]);
// let map1=new Map(map.entries());
// map.set();
// console.log(map);
// console.log(map1);
//
// let set=new Set();
// for(let i=0;i<10;i++) {set.add('test')};
// let user={name:'test'};
// set.add(user);
// set.add(user);
// user.surname='test_new';
// set.add(user);
// console.log(set);
// let set1= new Set(set);
// console.log(set1);
// let aa=[1,2,3];
// let bb=new Array(aa);
// aa.push(4);
// console.log(aa);
// console.log(bb);

// let user={
//   firstName: 'Ivan',
//   lastName: 'Ivanov'
// };
//
// const {firsName: name, lastName: surname}=user;
//
// function getFullName(user){
//   console.log(user.name)
// }

let car1={
  color: 'white',
  brand: 'VW',
  engine: {
    volume: 2
  }
}

const {engine: {volume} }=car1;
