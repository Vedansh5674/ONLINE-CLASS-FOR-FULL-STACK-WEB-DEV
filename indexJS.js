


// window.alert(21+2);
// console.log(12+2);
// var value_cake = 500;
// var value_lays = 10;
// var value_tofffe = 20;
// var total_amount = value_cake + value_lays + value_tofffe;
// console.log(total_amount);

// const { useCallback } = require("react");

// for(initalExpression; updateExpression; condition){
//     // for loop body


// }
// do {

// }
// while(condition)

//     if(expression){
//         Statement(s)
//     }



// for(let i = 0; i<Selection.options.length; i++){
//     if(Selectobject.options[i])
//         numberselected ++
// }
// let i = 0;
// do {
//     i+=1;
//     console.log(i);
// } while(i<5);

// let n =0;
// let x =0;
// while(n<3){
//     n++;
//     x+=n
//     console.log(x);
    
// }


//  let x=0;
// let z=0;
// labelcancelledLoops: while (true){
//     console.log("outer loops", x);
//     x+=1;
//     z=1;
//     while(true){
//         console.log("inner loop:" ,z);
//         z+=1;
//         if(z === 10 &&  x === 10)     {
//              break labelcancelledLoops;
//         }   else if(z===10){
//             break;
//         }
//     } 
    
//   } 
//  let i = 0;
//        let n =0;
//        while(i<5){
//         i++;
//         if(i===3){
//             continue;

//         }
//         n+=1;
//         console.log(n);
//        } 





    // function greet() {
    //     console.log("Hello World !")
        
        
    // }
    // let displayPI =function (){
    //     console.log("PI=3.14");
        
    // }
    // greet();
    // displayPI();

// let x = myfunction(4,2);{
//     document.getElementsById("demo").innerHTML = x
// }
// function myfunction(a , b){
//     return a * b;
// }

// const smart =()=>{
//     console.log("Hello World");
    
// }
// smart();


// const smart = (x,y,z =30)=>{
//     console.log(x + " " + y + " "+z);

// }
// smart(12,23);

// const makeperson = (firstName , lastName) =>
// ({first: firstName, last:lastName});
// console.log(makeperson("Vedansh", "Sahu"));


//  ************************* APPLY Function ***********************
// var arr =[1,5,6];
// var max = Math.max.apply(null,arr);
// console.log(max);

// var array =[1,5,6];
// var newarray = [2,3,4,6];
// array.push.apply(array, newarray);
// console.log(array);

// ***************** BIND FUnction ***************
// var website = {
//     name: " any website" , 
//     getName : function(){
//         return this.name;
//     }

// }


// var unBoundGetName = website.getName; // don't invoke it
// var boundGetName = unBoundGetName.bind(website);
// console.log(boundGetName()); // now works correctly


// ******************** CALL FUNCTION ******************

// function Emp(id , name){
//     this.id = id;
//     this.name = name;

// }
// function permanentEmp(id , name){
//     Emp.call(this , id ,name);

// }
// console.log(new permanentEmp(101, "vedansh").name);


// ***************************** TO STRING FUNCTION *****************************
// function add(a,b){
//     return a+b;


// }
// console.log(add.toString());
// console.log(typeof add.toString());


// ********************* SCOPE GLOBAL ****************
// var globalVariable = "I am good to go with global variables";
// function myfunction(){
//     console.log(globalVariable);
    
// }
// myfunction();

// ************************LOCAL SCOPE ************************

// function myfunction(){
//     var localVariables = "I am good to go with local variables";
//     console.log(localVariables);
    
// }
// myfunction();

// ******************* BLOCK SCOPE ************************
// function myfunction(){
//     if(true){
//     let localvariable = "I am  also in a block scope ";
//      let blockvariable = "I am also in a  block scope  ";

//     console.log(localvariable);
//     console.log(blockvariable);
    
    

// }

// }

// const headerElement = document.getElementById('header');

// const paragraph = document.getElementsByClassName('paragraph');

// const images = document.getElementsByTagName('img');

// headerElement.innerHTML = 'new header text';



  
    //  function mouseover(){
    //     alert("Hi , Welcome")
    //  }

    
    // <p onmouseover="mouseoverevent()">Keep the cursor onto to me only</p>
    

    //  *********************************EVENTS ****************************************

    //   <input type="text" id="input1" onkeydown="keydownevent()" />
   
    // function keydownevent(){
    //     document.getElementById("input1");
    //     alert("Press a key")
    // }
   
       
//  onload="window.alert('Page loaded successfully');"
    
//         document.write("The is loaded successfully")
    




// var address ={
//     company: "ABC" ,
//     city: "Noida" ,
//     state: "UP" ,
//     fulladdress: function(){
//         return this.company + ' ' + this.city + ' ' + this.state
//     }
// };
// var fetch = address.fulladdress();
// document.write(fetch);

// ***** DEBUGGER******
// const x = 10;
// const y = 5;
// const z = x+y;
// console.log(x,y,z);
// console.log(z);
// debugger
// ******** HOISTING ********
// x = 10;
// document.write(sum(10,20));
// function sum(a,b){
//     return a+b;
// }

// console.log(10,20);
// function sum(a,a){
//     "use strict";
//     return a+a;

// }


// var a =10 , b = 20 ,  c = 30, sum , mul , Sub;

// sum =  eval  ("a+b+c");
// mul =     eval    ("a * b * c");
// sub =        eval    ("b-a");
// document.write(sum + "<br>")
// document.write(mul + "<br>")
// document.write(sub + "<br>")


// var val1 =document.getElementById("div3");
// var o1 = val1.closest("#div1");
// var o2 = val1.closest("div div");
// var o3 = val1.closest("div>div");
// var o4 = val1.closest(":not(#div3)");


// console.log(o1);
// console.log(o2);
// console.log(o3);
// console.log(o4);

// function fun(){
//     prompt("This is the prompt box " ,"Hello world")
// }

// function fun(){
//     document.getElementById("para").removeAttribute("class");
//     document.getElementById("para1").removeAttribute("class");
// }

// function first(){
//     console.log(1);
    
// }
// function second (){
//     console.log(2);
    
// }
// function third() {
//     console.log(3);
    

// }

// first();
// second();
// third();

// let a, b, rest;
// [a,b] = [10,20];
// console.log(a);
// console.log(b);
// [a,b,...rest] = [30,40,50];
// console.log(rest);



// const obj = {a:1, b: {c:2}};
// const{a,
//     b: {c:d},

// }= obj
// console.log(obj);


// let promise = new Promise(function(resolve , reject){
//     setTimeout(()=>resolve("done"),1000)


// }
// );


        


// function myfunction(Name) {
//   document.getElementById("first").innerHTML = Name;
// }

// let mypromise = new Promise(function (myresolve, myreject) {
//   let x = 0;
//   if (x == 0) {
//     myresolve("Excellence");
//   } else {
//     myreject("oops");
//   }
// });

// mypromise.then(
//   function (value) { myfunction(value); },
//   function (error) { myfunction(error); }
// );




// function myfunction(Name) {
//       document.getElementById("first").innerHTML = Name;
//     }

//     let mypromise = new Promise(function (myresolve, myreject) {
//       let x = 0;
//       if (x == 0) {
//         myresolve("Excellence");
//       } else {
//         myreject("oops");
//       }
//     });

//     mypromise.then(
//       function (value) { myfunction(value); },
//       function (error) { myfunction(error); }
//     );


// function resolveAfter2seconds(){
//   return new Promise((resolve) =>{
//     setTimeout(() =>{
//       resolve('resolved');
//     }

//     , 2000 );
//   }

//   )
// }

// async function asyncCall(){
//   console.log('I am calling');
//   const result = await resolveAfter2seconds();
//   console.log(result);
  
  
// }
// asyncCall();



// function mainFunction (Callback) {
//   console.log('I am performing the operation');
//   setTimeout(function (){
//     Callback("operation completed sucessfully");
//   } , 1000);
  

// }
// function Callbackfunction(result){
//   console.log('Result :' + result);
  
// }
// mainFunction(Callbackfunction);

// let number = [1,2,3,4,5,6,7,8,9,]
// function mainFunction (Callback){
//   console.log('I am performing the operation');
//   number.forEach(Callback)

  
// }
// function Callbackfunction(number){
//   console.log("Result"+ number);
  
// }
// mainFunction(Callbackfunction);


// const name = 'John';
// const greeting = `Hello my name is ${name}`;
// console.log(greeting);


// function makeGreeting(name){
//   return `Hello my name is ${name}`;
// }
// console.log(makeGreeting("name"));
// console.log(greeting);



    // var name = {
    //     "first_name": "John",
    //     "last_name" : "Michelle",
    //     "online" : true
    // };
    // window.alert(first_name);


    // let timeId = setTimeout(func | Code,[delay],[args1],[args2]),
    

    // function sayHi(phrase , who){
    //     alert(phrase + "" + who);

    // }
    // setTimeout(sayHi,2000,"hello","welcome");


//     let timeId = setInterval( ()=>
//         alert('hello') ,
// 2000

//     )

//     setTimeout(() => {
//         clearInterval(timeId); alert('stop');

        
//     }, 5000);

// let timeId = setTimeout(function tick(){
//     alert('hello');
//     timeId = setTimeout(tick , 2000);
// }
// , 2000
// )


// async function fetchMoveiesJSON(){
//     const response = await fetch('/movies');
//     const movies = await response.json();
//     return movies;

// }

// fetchMoveiesJSON404().then(movies =>{
//     movies
// }

// )


// const controller = new AbortController();
// fetch(...{signal: controller.signal});
// controller.abort();
