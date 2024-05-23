const JsonDATA = {
  employee: {
    employeeNames: "Sangam",
    EmployeeId: "12345",
    address: "Bengaluru",
    JoinYear: 2022,
    employeeNumber: 9345-647856,
  },
  employee1: {
    employeeNames: "virat",
    EmployeeId: "123456",
    address: "Bengaluru",
    JoinYear: 2023,
    employeeNumber: 9345-647857,
  },
  employee2: {
    employeeNames: "rahul",
    EmployeeId: 1234567,
    address: "Bengaluru",
    JoinYear: 2024,
    employeeNumber: 9345-647858,
  },
};


function employeename(JsonDATA ,year){

  let empName=[];
  for(const emp in JsonDATA){
    if(JsonDATA.hasOwnProperty(emp)){
        const employee = JsonDATA[emp];
          if( employee.JoinYear === year){
            empName.push(employee.employeeNames)
          }  
    }
  }
return empName;

}
const year = 2022;
const names = employeename(JsonDATA,year);
console.log(names)
console.log(typeof(names));
    

    

    

    
