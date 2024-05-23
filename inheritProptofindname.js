// Define the Employee class
class Employee {
  constructor(name, id, joinYear, phoneNumber) {
    this.EmployeeName = name;
    this.EmployeeId = id;
    this.JoinYear = joinYear;
    this.EmployeePhoneNumber = phoneNumber;
  }
}

// Define the Manager class that inherits from Employee
class Manager extends Employee {
  constructor(name, id, joinYear, phoneNumber, department) {
    super(name, id, joinYear, phoneNumber);
    this.Department = department;
  }
}

// Create instances of Employee and Manager
const employee1 = new Employee("John Doe", "12345", "2022", "123-456-7890");
const manager1 = new Manager(
  "Jane Smith",
  "67890",
  "2021",
  "987-654-3210",
  "Engineering"
);

// Add instances to the jsonData object
const jsonData = {
  Employee1: employee1,
  //   Manager1: manager1,
};

// Function to get all employee names (this will be wrong due to inherited properties)
function getAllEmployeeNames(jsonData) {
  const employeeNames = [];
  for (const employeeKey in jsonData) {
    if (jsonData.hasOwnProperty(employeeKey)) {
      const employee = jsonData[employeeKey];
      employeeNames.push(employee.EmployeeName);
    }
  }
  return employeeNames;
}

// Usage example
const employeeNames = getAllEmployeeNames(jsonData);
console.log(employeeNames); // Output will incorrectly include Manager properties
