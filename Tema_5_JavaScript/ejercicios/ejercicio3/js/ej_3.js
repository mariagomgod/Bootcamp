// Apartado 1
const arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(i);
}

function Employee(employeeNumber) {
    this.position = `Èmployee ${employeeNumber}`;
    this.performance = Math.floor(100 * Math.random()) / 100;
    this.salary = Math.floor(2750 * Math.random()) + 1250;
}

const employees = arr.map((employeeNumber) => new Employee(employeeNumber));

console.log(employees);

// Apartado 2
const sortedByPerformance = employees.sort((employee1, employee2) => employee1.performance - employee2.performance);

console.log(sortedByPerformance);

// Apartado 3
const sortedBySalary = employees.sort((employee1, employee2) => employee1.salary - employee2.salary);

console.log(sortedByPerformance);

// Apartado 4
function employeeNumber(employee1, employee2) {
   return employee2.position.split(" ")[1] - employee1.position.split(" ")[1];
}
const sortedByEmployeeNumber = employees.sort(employeeNumber);

console.log(sortedByEmployeeNumber);

// Apartado 5
employees.filter(employee => employee.salary > 2500).forEach((employee) => console.log(`Position ${employee.position} and salary ${employee.salary}.`));







