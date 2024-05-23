// Given JSON object
const jsonData = {
  Employee: {
    EmployeeName: "John Doe",
    Id: "12345",
    JoinYear: "2022",
    EmployeePhoneNumber: "123-456-7890",
  },
};

// Function to get employee names based on a particular year
function getEmployeeNamesByid(jsonData, EmployeeId) {
  const employeeNames = [];
  for (const employeeKey in jsonData) {
    if (jsonData.hasOwnProperty(employeeKey)) {
      const employee = jsonData[employeeKey];
      if (employee.Id === EmployeeId) {
        employeeNames.push(employee.EmployeeName);
      }
    }
  }
  return employeeNames;
}

// Usage example
const EmployeeId = "12345"; // Specify the year
const employeeNames = getEmployeeNamesByid(jsonData, EmployeeId);
console.log(employeeNames); // Output: ["John Doe"]
