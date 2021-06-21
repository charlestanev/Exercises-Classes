class Company {
    constructor() {
        this.departments = new Map();
    }

    static Employee = class Employee {
        constructor(username, salary, position) {
            this.username = username;
            this.salary = salary;
            this.position = position;
        }

        get username() {
            return this._username;
        }

        set username(value) {
            this._validateParameter(value);
            this._username = value;
        }

        get salary() {
            return this._salary;
        }

        set salary(value) {
            this._validateParameter(value);
            if (value < 0) {
                throw new Error('Invalid input');
            }
            this._salary = value;
        }

        get position() {
            return this._position;
        }

        set position(value) {
            this._validateParameter(value);
            this._position = value;
        }

        _validateParameter(value) {
            if (value === undefined || value === null || value === '') {
                throw new Error('Invalid input!');
            }
        }
    }

    addEmployee(username, salary, position, department) {
        if (department === undefined || department === null || department === '') {
            throw new Error('Invalid input!');
        }

        if (!this.departments.has(department)) {
            this.department.set(department, [])
        }

        let employee = new Company.Employee(username, salary, position);
        let workers = this.departments.get(department);
        workers.push(employee);
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let sortedDepartments = [...this.departments]
            .sort(([aName, aWorkers], [bName, bWorkers]) => {
                let aAverageSalary = this._getAverageSalary(aName);
                let bAverageSalary = this._getAverageSalary(bName);
                return bAverageSalary - aAverageSalary;
            });

        let [bestDepartmentName, bestDepartamentWorkers] = sortDepartaments[0];
        bestDepartamentWorkers.sort((a, b) => b.salary - a.salary);

        let bestDepartamentString = `Best Department is: ${bestDepartmentName}
            Average salary: ${this._getAverageSalary(bestDepartmentName).toFixed(2)}`;
        let
    }

    _getAverageSalary(departmentName) {
        let departmentWorkers = this.departments.get(departmentName);
        let averageSalary = departmentWorkers.reduce((acc, w) => acc + w.salary, 0) / departmentWorkers.length;
        return averageSalary;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// Write a class Company, which following these requirements:
// The constructor takes no parameters:
//     You could initialize an object:
// •	departments - empty object
// addEmployee({username}, {Salary}, {Position}, {Department})
// This function should add a new employee to the department with the given name.
// •	If one of the passed parameters is empty string (""), undefined or null, this function should throw an error with the following message: "Invalid input!"
// •	If salary is less than 0, this function should throw an error with the following message: "Invalid input!"
// •	If the new employee is hired successfully, you should add him into the departments array and return the following message: "New employee is hired. Name: {name}. Position: {position}"
// bestDepartment()
// This function should return the department with the highest average salary rounded to the second digit after decimal point and its employees sorted by their salary by descending order and by their name in ascending order as a second criteria:
// "Best Department is: {best department's name}
// Average salary: {best department's average salary}
// {employee1} {salary} {position}
// {employee2} {salary} {position}
// {employee3} {salary} {position}