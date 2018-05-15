const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log( employees );

$(document).ready(controller);

function employeeTransformer(obj) {

  return new Employee(obj.name, obj.employeeNumber, obj.annualSalary, obj.reviewRating);

}





function bonusPercentageProperty(employee) {
  if (employee.reviewRating <= 2) {
    employee.bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    employee.bonusPercentage = .04;
  } else if (employee.reviewRating === 4) {
    employee.bonusPercentage = .06;
  } else if (employee.reviewRating === 5) {
    employee.bonusPercentage = .1;
  }
  if (employee.employeeNumber.length > 4) {
    employee.bonusPercentage += .05;
  }
  if (parseInt(employee.annualSalary) > 65000) {
    employee.bonusPercentage -= .01;
  }
  if (employee.bonusPercentage > .13) {
    employee.bonusPercentage = .13;
  }
  if (employee.bonusPercentage < 0) {
    employee.bonusPercentage = 0;
  }
  employee.totalBonus = parseInt(employee.annualSalary) * employee.bonusPercentage;
  employee.totalCompensation = parseInt(employee.annualSalary) + employee.totalBonus;

  employee.totalBonus = Math.round(employee.totalBonus);


  employee.totalCompensation = Math.round(employee.totalCompensation);


  employee.bonusPercentage =employee.bonusPercentage;


  return employee;
}

function controller() {
  $('#controller').on('click', addToDom);
}

function addToDom() {
  console.log('hello');
  for (let y = 0; y < result.length; y++) {
    $('#employeeOutput').append('<p>' + Object.values(result[y]) + '</p>');
  }

}



function iterateOverEmployees() {
  let arr = [];
  for (let x = 0; x < employees.length; x++) {
    arr.push(bonusPercentageProperty(employeeTransformer(employees[x])));
  }

  return arr;
}

let result = iterateOverEmployees();



// You will be taking the object literals in the employees array and turning them into **Employee**'s. Write a function that takes in one **employee** (as an argument to the function), and returns a new **Employee**:
//
// * The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.
//
// Finally, iterate over the `employees` array and do the following:
//
// * use each `employee` object as the input to your first function
// * `console.log` the results of each iteration.
//
// ### Individual Bonus calculation
// - Those who have a rating of a 2 or below should not receive a bonus.
// - Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
// - If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
// and should receive an additional 5%.
// - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// - No bonus can be above 13% or below 0% total.
//
// note: You may abstract out this bonus calculation into a second function if you like, but this is not mandatory.
//
// ## Stretch Goals
// - Put the output on the DOM (visually on the page).
// - Make the app run only after the user clicks on a button on the page
// - Then style the output, making it visually appealing.
