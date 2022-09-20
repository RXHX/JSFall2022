

// class declaration in js
class Schedule {


  constructor(username, birthday,status,numFrineds)
   {

     this.username = username;
     this.birthday = birthday;
     this.status = status;
     this.numFrineds = numFrineds;
   }

   updateStatus()
    {
        // updates the status
    }

}

// Object literal declaration
const player1 = {
        namer:"Rohan",
        color:"Blue",
        age : 22,
        grade:[99,23,43],
        isTurn:true,
        method: () => {
            if(this.isTurn == true)
            {
                return `The student ${this.name} is not Cool`;
            }
            else{
                return  `The student ${this.name} is cool`;
            }
        },
        regiter: () => {
           // console.log("Student registration complete");
            return null;       
         }
}

// console statements
//console.log(player1.namer);
//console.log(player1.age);
player1.grade.forEach(elem => {
      //console.log(elem);
});

//console.log(player1.isTurn);
//console.log(player1.method());
//console.log(player1.regiter());

// changing the properties of the object Literal

  player1.namer = "Sohan";
 player1.age = 24;


 // updated value of the player1
  //console.log(player1);




// Declaraing a new Class  Pet
 // doing the same thing by not making a object literal

  // Model Class
 class Pet {

  constructor(animal,age,breed)
  {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
  }
 
  speak()
  {
    //   console.log(`
      
    //     the animal class is of ${this.animal},
    //     the age of the animal is ${this.age}
    //     and the breed of the animal is ${this.breed}
    //     and animal speaks language of "Bark!"
      
    //   `);
  }


}

// Controller
const ernie = new Pet('dog','1','pug'); 
ernie.speak();
const vera =  new Pet('dog',8,'Border Collie');    
vera.speak();
const scofield = new Pet('dog',6,'Doberman');
scofield.speak();
const edel = new Pet('dog',7,'German Shorthaired Pointer');
edel.speak();




// dogs to make objects of
// ernie1, vera1, scofield1,edel1
// in case we need to make multiple objects
const ernie1 = {
    animal: 'dog',
    age: '1',
    breed :'pug',
    bark : () => {
        //console.log("bark");
    }
  }

  const vera1 = {
   animal : 'dog',
   age: 8,
   breed: 'Border Collie',
   bark : () => {
    //console.log('Woof!');
   }
 
  }

  const scofield1 = {
    animal : 'dog',
    age: 6,
    breed: 'Doberman',
    bark : () => {
    //console.log('Woof!');
    }
  }

  const edel1= {
     animal: 'dog',
     age: 7,
     breed: 'German Shorthaired Pointer',
     bark : () =>{
         // console.log('Woof!');
     }
  }
  

  //  Create an empty method called stringGPA() and add it to the Student class, and Inside the stringGPA() 
  //   method, convert the value of the gpa property to a string and return it


   class Student {

    constructor(gpa)
    {
        this.gpa = gpa;
    }
    
   stringGPA = () => {
          return this.gpa.toString();
      }

   }

  //const obj  = new Student(10);
  //console.log(obj.stringGPA());
  //console.log(typeof(obj.stringGPA()));




  // Getter and Setter 
  /*
  Inside the Student class, create an empty getter method called level(). And then the getter method 
  should return the level of a student, based on how many credits (this.credits) they have.
  If student has more than 90 credits, they are a 'Senior'.
  If the student has 90 or fewer credits, but more than 60 (>= 61), they are a 'Junior'.
  If the student has 60 or fewer credits, but more than 30 (>= 31), they are a 'Sophomore'.
  If the student has 30 or fewer credits, they are a 'Freshman'.
  Think about how you craft your conditional statement, keeping in mind that simplicity is a good 
  objective.
  */




  class Student1 {

    constructor(credit,gpa)
    {
        this.credit = credit;
        this.gpa = gpa;
    }
      get level(){
        
         if(this.credit > 90)
         {
            return 'Senior';
         }else if((this.credit > 60)  &&   (this.credit <= 90))
           {
            return 'Junior';
           }
           else if( this.credit < 60 && this.credit > 30)
           {
            return 'Sophomore';
           }
           else if( this.credit > 30)
           {
            return 'Freshman';
           }

     }
     
    
    stringGPA = () => {
          return this.gpa.toString();
      }
      
   }

    const Std = new Student1(45,3.4);
 //   console.log(Std.level);


    class Pet1 { 
        constructor(animal, age, breed, sound) {
        this.animal = animal; 
        this.age = age; 
        this.breed = breed; 
        this.sound = sound; 
        } 
        
        get activity() {
        const today = new Date();
        const hour = today.getHours();
        
        if (hour > 8 && hour <= 20) {
        return 'playing'; 
        } else { 
        return 'sleeping'; 
        } 
        } 
        
        get owner() {
        return this._owner; 
        } 
        
        set owner(owner) {
        this._owner = owner; 
       console.log(`setter called: ${owner}`)
        }
    }
    const ernie3 = new Pet('dog', 1, 'pug', 'yip yip');
    const vera3 = new Pet('dog', 8, 'border collie', 'woof woof');
    ernie3.owner = 'Ashley'

  /*
Inside the Student class, create an empty setter method called "major()". Then Inside the major() 
setter method, set the student's major to a backing property "_major". If the student's level is Junior 
or Senior, the value of the backing property should be equal to the parameter passed to the setter 
method. If the student is only a Freshman or Sophomore, set the "_major" backing property equal to 
'None'
*/
  
class Student2 {

   constructor(credit,gpa)
   {
    this.credit = credit;
    this.gpa = gpa;
   }

   get level(){
        
    if(this.credit > 90)
    {
       return 'Senior';
    }else if((this.credit > 60)  &&   (this.credit <= 90))
      {
       return 'Junior';
      }
      else if( this.credit < 60 && this.credit > 30)
      {
       return 'Sophomore';
      }
      else if( this.credit > 30)
      {
       return 'Freshman';
      }

}


set StudentAMjor(_major) {
     if(_major == 'Senior' || _major == 'Junior')
     {
    _major = _major;
     }
     else if(_major == 'Sophomore' || _major == 'Freshman')
     {
        _major = "None";
     }
     console.log("Setter called:"+_major);
}
get StudentAMjor()
{
    return _major;
}


stringGPA = () => {
     return this.gpa.toString();
 }


 
}

const Std2 = new Student2(45,3.4);
Std2._major = "Bad";


