// Apartado 1

const arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(i);
}

function Employee(employeeNumber) {
    this.position = `Employee ${employeeNumber}`;
    this.performance = Number(Math.random().toFixed(2));
    this.salary = Math.floor(2750 * Math.random()) + 1250;
}

let employees = arr.map((employeeNumber) => new Employee(employeeNumber));

console.log("1.Generación del array", employees);

// Apartado 2

const sortedByPerformance = employees.sort((employee1, employee2) => employee1.performance - employee2.performance);

console.log("2. Ordenado por rendimiento", sortedByPerformance);

// Apartado 3

const sortedBySalary = employees.sort((employee1, employee2) => employee1.salary - employee2.salary);

console.log("3. Ordenado por salario", sortedBySalary);

// Apartado 4

function employeeNumber(employee1, employee2) {
    return employee2.position.split(" ")[1] - employee1.position.split(" ")[1];
}

const sortedByEmployeeNumber = employees.sort(employeeNumber);

console.log("4. Ordenado por número de empleado", sortedByEmployeeNumber);

// Apartado 5. Usando filter

employees.filter(employee => employee.salary > 2500).forEach(employee => console.log(`${employee.position} and salary ${employee.salary}.`));

// Apartado 6. Usando map

employees = employees.map(employee => {
    if (employee.salary < 1500) {
        employee.salary = employee.salary * 1.25;
    } 
    return employee;
});

console.log("5. Subir el sueldo un 0.25% a los que cobren menos de 1500€", employees);

// Apartado 7. Usando reduce

const totalCost = employees.reduce((salarySum, employee) => salarySum + employee.salary * 1.15, 0);

// Apartado 8.1

employees = employees.filter(employee => employee.performance >= 0.3);

console.log("8.1. Despedir empleados rendimiento menor a 0.3", employees);

// Apartado 8.2

let averageSalary = employees.reduce((salarySum, employee) => salarySum + employee.salary, 0 / employees.length);

averageSalary = averageSalary.toFixed(2); // toFixed(2) te da dos decimales.

console.log("8.2: Calcular el sueldo medio de la empresa", averageSalary);

// Apartado 8.3

employees = employees.map(employee => {
    if (employee.performance > 0.7) {
        employee.salary = employee.salary * 1.25;
    } 
    return employee;
});

console.log("5. Subir el sueldo a los que tengan rendimiento superior a 0.7", employees);






