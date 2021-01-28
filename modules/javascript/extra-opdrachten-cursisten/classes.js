/*
_________________________OEFENING 1_____________________________

Create a class that takes the following four arguments for a particular football player:

name
age
height
weight
Also, create three functions for the class that returns the following strings:

getAge() returns "name is age age"
getHeight() returns "name is heightcm"
getWeight() returns "name weighs weightkg"

Examples
 p1 = new Player("David Jones", 25, 175, 75)
 p1.getAge() ➞ "David Jones is age 25"
 p1.getHeight() ➞ "David Jones is 175cm"
 p1.getWeight() ➞ "David Jones weighs 75kg"

*/

//ADD YOUR CODE HERE

/*
  ___________________________OEFENING 2______________________________
  
  Create the instance properties fullname and email in the Employee class. Given a person's first and last names:
  
  Form the fullname by simply joining the first and last name together, separated by a space.
  Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end.

  Examples
  emp1 = new Employee("John", "Smith")
  emp1.fullname ➞ "John Smith"
  
  emp2 = new Employee("Mary",  "Sue")
  emp2.email ➞ "mary.sue@company.com"
  
  -------------START WITH THIS CODE------------------
    */
class Employee {
  firstname;
  lastname;
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Complete the code!
  }
}

/*
  ______________________________OEFENING 3___________________________
  
  Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:
  
  BasicPlan	StandardPlan	PremiumPlan
  ✓	           ✓            	✓	    canStream
  ✓	           ✓	            ✓	    canDownload
  ✓	           ✓             	✓	    hasSD
               ✓	            ✓	    hasHD
                               ✓	    hasUHD
  1	          2	                4	    numOfDevices
  $8.99	       $12.99	    $15.99	    price
  
  
  Examples
  BasicPlan.hasSD ➞ true 
  
  PremiumPlan.hasSD ➞ true
  
  BasicPlan.hasUHD ➞ false
  
  BasicPlan.price ➞ '$8.99'
  
  PremiumPlan.numOfDevices ➞ 4

  -------------------------------------START WITH THE CODE-----------------------------------------
  */

class BasicPlan {
  static canStream = true;
  static canDownload = true;
  static numOfDevices = 1;
  static hasSD = true;
  static hasHD = true;
  static hasUHD = true;
  static price = "$8.99";
}

/*
__________________________________OEFENING 4______________________________________
  
  Create a method in the Person class which returns how another person's age compares. Given the instances p11, p22 and p33,
which will be initialised with the attributes name and age, return a sentence in the following format:
  
  {other person name} is {older than / younger than / the same age as} me.
  
  Examples
  p11 = new Person("Samuel", 24)
  p22 = new Person("Joel", 36)
  p33 = new Person("Lily", 24)
  
  p11.compareAge(p22) ➞ "Joel is older than Samuel."
  
  p22.compareAge(p11) ➞ "Samuel is younger than Joel."
  
  p11.compareAge(p33) ➞ "Lily is the same age as Samuel."
  
  ---------------------start with this code-----------------------
    
  */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    // Write code here!
  }
}
