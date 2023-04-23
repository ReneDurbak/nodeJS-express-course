const num1 = 5;
const num2 = 10;

function sum(){
    console.log(`the sum is: ${num1+num2}`)
}


sum() //if we have a function inside a module that we invoke that code will run - when we require a module it automatically invokes and we are executing a code here so thats why we can see it print inside a console

//when node exports code or a file that is a module automatically it wraps it inside a function