// Apartado 1
let arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(i);
}

function Employee(employeeNumber) {
    this.position = `Èmployee ${employeeNumber}`;
    this.performance = Number(Math.random().toFixed(2)); // toFixed(2) te da dos decimales.
    this.salary = Math.floor(2750 * Math.random()) + 1250; // otra opción: parseInt(Math.random()* (4000 - 1250) + 1250)));
}

let employees = arr.map((employeeNumber) => new Employee(employeeNumber));

console.log(employees);

// Otra opción sin constructor:

//function randomBetweenRange(start, end) {
//    return Math.floor(Math.random()* (end - start) + start);
//}
//let employees = [];
//for (let i = 1; i <= 100; i++) {
//    employees.push( {
//        cargo: `Empleado ${i}`,
//       rendimiento: Number(Math.random().toFixed(2)),
//        salario: randomBetweenRange(1250, 4000)
//   });
//}
//console.log("1. Generación del array", employees);


// Apartado 2
const sortedByPerformance = employees.sort((employee1, employee2) => employee1.performance - employee2.performance);

console.log(sortedByPerformance);


// Apartado 3
const sortedBySalary = employees.sort((employee1, employee2) => employee1.salary - employee2.salary);

console.log(sortedBySalary);


// Apartado 4
function employeeNumber(employee1, employee2) {
   return employee2.position.split(" ")[1] - employee1.position.split(" ")[1]; // ponemos la posición 1 del array string al hacer el split porque lo que nos interesa es ordenar el número de empleado, el string empleado da igual
}
const sortedByEmployeeNumber = employees.sort(employeeNumber);

console.log(sortedByEmployeeNumber);


// Apartado 5
employees
    .filter(employee => employee.salary > 2500)
    .forEach((employee) => console.log(`${employee.position} and salary ${employee.salary}.`));


// Apartado 6
employees = employees.map(employee => {
    if (employee.salary < 1500) {
        // Modificar el salario
        employee.salary = employee.salary * 1.25;
    }
    return employee; // en este caso no hace falta poner el else ya que la primera condición ya se cumple, entonces solo retornas employee
});

console.log(employees);


// Apartado 7
const totalCost = employees.reduce((salarySum, employee) => salarySum + employee.salary * 1.15, 0); // el 0 corresponde al valor inicial del primer argumento antes de la flecha, es decir salarySum

console.log("7: Coste total", totalCost);



// Apartado 8.1
employees = employees.filter(employee => employee.performance >= 0.3);

console.log("8.1: Despedir a los que tengan un rendimiento menor a 0.3", employees);

// Apartado 8.2
let averageSalary = employees.reduce((salarySum, employee) => salarySum + employee.salary, 0) // valor inicial de la variable. No tienes forma de saber donde se empieza, por eso ponerlo a 0 / employees.length; // employees.length = total de empleados
averageSalary = averageSalary.toFixed(2); // toFixed(2) te da dos decimales.
console.log("8.2: Calcular el sueldo medio de la empresa", averageSalary);

// Apartado 8.3
employees = employees.map(employee => {
    if (employee.performance > 0.7) {
        // Modificar el salario
        employee.salary = employee.salary * 1.25;
    }
    return employee;  
});

console.log("8.3: Subir el sueldo de los que tengan mas de 0.7 de rendimiento", employees);

// Otra opción con forEach:

//employees.forEach(employee => {
//    if (employee.performance > 0.7) {
        // Modificar el salario
//    employee.salary = employee.salary * 1.25;
//    console.log("Subido el sueldo de ", employee.position);
//   }
//});





