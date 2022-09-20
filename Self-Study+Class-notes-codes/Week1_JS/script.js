// very general form addressing
var onSubmit = document.querySelector('form');
    onSubmit.addEventListener('submit',task);

function task(event)  {
    console.log("Here");
    var name = document.getElementById('Cname').value;
    var age = document.getElementById('Cage').value;
    event.preventDefault();
    console.log("Name is: "+name);
    console.log("Age is:"+age);
}

// Rest and Spread operator in Javascript

// rest operator usage
function restExample(first, second ,...third)
{
    console.log("First Is:"+first);
    console.log("Second Is:"+second);
    console.log("Type of third is"+typeof(third));
    console.log("Third is:"+third);
}

restExample("Rohan","Sohan","Ram","Shyam","Dhyam");

// spread operator usage
function spreadExample()
{

   const temp = { "name":"Rohan","age":"Nineteen"};
  const result = {...temp};

  const temp1 = [1,23,65,67,236,765];
  const result1 = [...temp1];

  console.log("Result: is"+result1[2]);


} 
spreadExample();

// Arrays 

function simpleArrays()
{
    const ids = {"name":"five","age":"high","class":"useless"};
    console.log("Object before Modification:"+ids.age);
    ids.age="bye";
    delete ids.name;
    console.log("New Object after modification:"+ids.age);
    var temp = [1,2,3,44,543,532,432,345,2322];
    console.log("Temp array is:"+temp);
    temp.push(90);
    console.log("Temp array with push is:"+temp);
    temp.push(40);
    console.log("Temp array with push is:"+temp);
    temp.pop();
    console.log("Temp array after pop is:",temp);
    console.log(ids);



    // ways to freeze an object so that nothing can be changed in that object
    const ids1 = {"name":"five","age":"high","class":"useless"};
    Object.freeze(ids1);
    ids1.age = "10";
    ids1.name ="Six";
    delete ids1.class
    console.log("New Age is "+ids1.age+`    ${ids1.name}    ${ids1.class}`);
}
simpleArrays();

// arrow function recap

const abc = (a,b) => {
 return (a*b);
}

console.log("Multiplier is: "+abc(10,20));


const area = (area,unit,sqt) => {
return( `${area} ${unit} ${sqt}`);
}


console.log("Result"+area(100,2,'sqt'));

// Deconstruction of an array
const library = {
   render : () => console.log("Rendered"),
   add : () => console.log("Added"),
   substract : () => console.log("Subtracted"),
   multiply : () => console.log("Multiplier")
}

// very important step
  const {render,add:alpha,substract,multiply} = library;
   render();
   alpha();
   substract();
   multiply();

   // callback function


   function  executeCallback(val,callBack)
   {
    console.log("Value here is :"+val);
    callBack();
   }

   function some()
   {
    console.log("SomeThing is nice here");
   }

executeCallback(10,some)
  
function functionRunner(callback) {
    callback();
   } 
    
   functionRunner(function () {
    console.log('Hello World!');
   })

// Map 
// New Arr is developed in this
var arr = [1,2,3,4,5,6,7,8,9,10];
function multiplier(x)
{
  return x*2;

}


var newArr2 = arr.map(multiplier);
var newArr5 = arr.map((index) => {
   return index*5;

});

console.log("Value of multiple of 2 is "+newArr2);
console.log("Value of multiple of 5 is "+newArr5);

// Filter
var arr1 = [4,8,11,15,20,23,28,32,37,40];
function isEven(temp)
{
  return temp % 2 == 0
}

function isOdd(temp)
{
 return temp % 2 == 1
}

console.log(arr1.filter(isEven));
console.log(arr1.filter(isOdd));