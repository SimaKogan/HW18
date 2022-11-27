function generateBirthYear() {
    const max = 2004;
    const min = 1957;
    return Math.floor(Math.random() * (max - min) + min);
}
function generateId(idDigits) {
    const pow = 10 ** (idDigits - 1);
    return Math.floor(Math.random() * 9 * pow + 1 * pow);
}
function getRandomSalary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//********************** Task 1 **************************************
function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary) {
    let employeesArr = [];
    for (let i = 0; i < nEmployees; i++) {
        const id = generateId(idDigits);
        const name = "name" + id;
        const salary = getRandomSalary(minSalary, maxSalary);
        const birthYear = generateBirthYear();
        employeesArr[i] = createEmployee(id, name, salary, birthYear);
    }
    return employeesArr;
}
function createEmployee(id, name, salary, birthYear) {
    return { id, name, salary, birthYear };
}
const employees = createRandomEmployees(10, 4, 10000, 20000);
// console.log("Array of employees: ", employees);
//********************** Task 2 **************************************
function getAverageAge(employees) {
    let sumAge = employees.reduce((acc, employee) => {
        return acc + employee.birthYear
    }, 0)

    return Math.floor(sumAge / employees.length);
}
// console.log("Average age of the emloyees: ", getAverageAge(employees));
//********************** Task 3 **************************************
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    return employees
        .filter(employee => employee.salary > salaryFrom && employee.salary < salaryTo)
        .sort((a, b) => a.salary - b.salary);

}
// console.log(getEmployeesBySalary(employees, 10000, 15000));
//********************** Task 4 **************************************
function increaseSalary(employees, borderSalary, percent) {
   return employees.map(employee => {
        if (employee.salary < borderSalary){
            let add = employee.salary * percent/100;
            employee.salary += add; 
        }
        return employee;
    })
}
// console.log("Increasing Salary: ",increaseSalary(employees, 15000, 10));